import { Request, Response } from "express";
import { userServices } from "./user.service";

const getAllAdmin = async (req: Request, res: Response) => {
  const result = await userServices.getAllAdmin();
  res.send(result);
};

const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createAdmin(req.body);
    res.status(200).json({
      success: true,
      message: "Admin created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.name || "Failed to create Admin",
      error: error,
    });
  }
};

export const userController = {
  getAllAdmin,
  createAdmin,
};
