import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";

import { ListCarsUseCase } from "./LisCarsUseCase";

let listCarUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car brand",
      category_id: "category_id",
      daily_rate: 140,
      description: "Car description",
      fine_amount: 10,
      license_plate: "YSL-0304",
      name: "Car1",
    });

    const cars = await listCarUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car brand test",
      category_id: "category_id",
      daily_rate: 140,
      description: "Car description",
      fine_amount: 10,
      license_plate: "YSL-0304",
      name: "Car2",
    });

    const cars = await listCarUseCase.execute({
      brand: "Car brand test",
    });
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car brand test",
      category_id: "category_id",
      daily_rate: 140,
      description: "Car description",
      fine_amount: 10,
      license_plate: "YSL-0306",
      name: "Car3",
    });

    const cars = await listCarUseCase.execute({
      name: "Car3",
    });
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car brand test",
      category_id: "xpto",
      daily_rate: 140,
      description: "Car description",
      fine_amount: 10,
      license_plate: "YSL-0307",
      name: "Car3",
    });

    const cars = await listCarUseCase.execute({
      category_id: "xpto",
    });
    expect(cars).toEqual([car]);
  });
});
