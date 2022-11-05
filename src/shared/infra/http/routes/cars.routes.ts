import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/listAvailableCarController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCar = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoutes.post("/", ensureAuthenticated, ensureAdmin, createCar.handle);

carsRoutes.get("/available", listAvailableCarsController.handle);

export { carsRoutes };
