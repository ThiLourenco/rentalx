import { inject, injectable } from "tsyringe";

import { ICarsRepository } from "@modules/cars/repositories/ICreateCarRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

// @injectable()
class CreateCarSpecificationUseCase {
  constructor(
    // @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({ car_id }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError("Car does not exist");
    }
  }
}

export { CreateCarSpecificationUseCase };
