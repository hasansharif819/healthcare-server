import express, { Request, Response } from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.get("/admin", userController.getAllAdmin);
router.post("/create-admin", userController.createAdmin);

export const userRoutes = router;
