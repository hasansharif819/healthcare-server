import express from "express";
import { adminController } from "./admin.controller";

const router = express.Router();

router.get("/", adminController.getAllAdmin);

router.get("/:id", adminController.getAdminById);

router.patch("/:id", adminController.updateAdmin);

export const adminRoutes = router;
