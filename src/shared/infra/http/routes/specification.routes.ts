import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const specificationsRoutes = Router();

const createSpecification = new CreateSpecificationController();
specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecification.handle);

export { specificationsRoutes };
