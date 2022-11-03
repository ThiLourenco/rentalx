import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";

const carsRoutes = Router();

const createCar = new CreateCarController();

carsRoutes.post("/", createCar.handle);

export { carsRoutes };
