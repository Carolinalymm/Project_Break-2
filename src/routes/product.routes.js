import { Router } from "express";

import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import requireAuth from "../middlewares/auth.middleware.js";
import requireRole from "../middlewares/requireRole.js";
import asyncHandler from "../utils/asyncHandler.js";

const router = Router();

router.get(
  "/",
  asyncHandler(getProducts),
);

router.get(
  "/:id",
  asyncHandler(getProduct),
);

router.post(
  "/",
  asyncHandler(requireAuth),
  requireRole("ADMIN"),
  asyncHandler(createProduct),
);

router.put(
  "/:id",
  asyncHandler(requireAuth),
  requireRole("ADMIN"),
  asyncHandler(updateProduct),
);

router.delete(
  "/:id",
  asyncHandler(requireAuth),
  requireRole("ADMIN"),
  asyncHandler(deleteProduct),
);

export default router;