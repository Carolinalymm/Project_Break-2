import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import healthRoutes from "./routes/health.routes.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import { sendSuccess } from "./utils/apiResponse.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(cookieParser());

app.get("/", (req, res) => {
  return sendSuccess(res, {
    message: "Bienvenida a Backend React Ready",
    data: {
      documentation: "/api/docs",
      health: "/api/health",
    },
  });
});

app.use("/api/health", healthRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;