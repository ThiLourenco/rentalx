import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecification = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecification.handle);

export { specificationsRoutes };
