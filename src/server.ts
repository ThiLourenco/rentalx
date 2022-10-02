import express from "express";

const app = express();

const PORT = 3333;

app.get("/", (req, res) => {
  return res.json({ message: "Hello, world!" });
});

app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}!`);
});
