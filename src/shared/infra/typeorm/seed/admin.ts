import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

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

  await connection.close;
}

create().then(() => console.log("User admin created successfully!"));
