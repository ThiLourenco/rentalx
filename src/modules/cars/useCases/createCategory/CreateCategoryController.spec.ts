import { hash } from "bcrypt";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { app } from "@shared/infra/http/app";
import createConnection from "@shared/infra/typeorm";

let connection: Connection;
describe("Create Category Controller", () => {
  beforeAll(async () => {
    if (!connection) {
      connection = await createConnection();
      await connection.runMigrations();

      const id = uuidV4();
      const password = await hash("admin", 8);

      await connection.query(
        `INSERT INTO USERS(
        id, 
        name, 
        email, 
        password, 
        "isAdmin", 
        created_at, 
        driver_license
        )values(
        '${id}', 
        'admin', 
        'admin@rentalx.com.br', 
        '${password}', 
        true,
        'now()', 
        'LSJ0023' )
      `
      );
    }
  });

  afterAll(async () => {
    if (connection) {
      await connection.dropDatabase();
      await connection.close();
    }
  });

  it("Should be able to create a new category", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@retalx.com.br",
      password: "admin",
    });

    const { token } = responseToken.body;

    const response = await request(app)
      .post("/categories")
      .send({
        name: "Category Supertest",
        description: "Category Supertest",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });
    expect(response.status).toBe(201);
  });

  it("Should not be able to create a new category with name exists", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@retalx.com.br",
      password: "admin",
    });

    const { token } = responseToken.body;

    const response = await request(app)
      .post("/categories")
      .send({
        name: "Category Supertest",
        description: "Category Supertest",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(401);
  });
});
