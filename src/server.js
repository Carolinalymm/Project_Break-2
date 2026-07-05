import "dotenv/config";
import app from "./app.js";

const PORT = Number(process.env.PORT) || 3000;

const server = app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

server.on("error", (error) => {
  console.error("No se pudo iniciar el servidor:", error);
  process.exit(1);
});