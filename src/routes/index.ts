import { Router } from "express";

import { categoriesRoutes } from "./Categories.routes";
import { specificationsRoutes } from "./Specification.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);

export { router };
