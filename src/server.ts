import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/list", categoriesRoutes);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}!`);
});
