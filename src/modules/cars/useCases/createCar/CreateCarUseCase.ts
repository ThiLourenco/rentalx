import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICreateCarRepository";

interface IRequest {
  name: string;
  description: string;
  daily_rate: string;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

// @injectable()
class CreateCarUseCase {
  constructor(
    // @inject("CarsRepository")
    private CarsRepository: ICarsRepository
  ) {}

  async execute({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
  }): Promise<void> {
    await this.CarsRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    });
  }
}

export { CreateCarUseCase };
