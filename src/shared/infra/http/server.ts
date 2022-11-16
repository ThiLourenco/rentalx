import { app } from "./app";

const PORT = 3333;
const HOSTNAME = "localhost";

app.listen(PORT, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/ 🔥🔥`);
});
