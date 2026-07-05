import { Router } from "express";

import {
  getHealth,
  getDatabaseHealth,
} from "../controllers/health.controller.js";
import asyncHandler from "../utils/asyncHandler.js";

const router = Router();

router.get("/", getHealth);

router.get(
  "/database",
  asyncHandler(getDatabaseHealth),
);

export default router;