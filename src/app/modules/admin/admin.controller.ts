import { Request, Response } from "express";
import { adminServices } from "./admin.service";
import pick from "../../../shared/pick";
import { filtersQueryData } from "./admin.constant";

const getAllAdmin = async (req: Request, res: Response) => {
  try {
    const filters = pick(req.query, filtersQueryData);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const result = await adminServices.getAllAdmin(filters, options);
    res.status(200).json({
      success: true,
      message: "Get all admin successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.name || "Can not all admin failed",
      error: error,
    });
  }
};

const getAdminById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await adminServices.getAdminById(id);
    res.status(200).json({
      success: true,
      message: "Get admin successfully by this id",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.name || "Can not get admin by this id",
      error: error,
    });
  }
};

const updateAdmin = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await adminServices.updateAdminIntoDb(id, req.body);
    res.status(200).json({
      success: true,
      message: "Admin data updated succeessfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.name || "Can not update admin data",
      error: error,
    });
  }
};

export const adminController = {
  getAllAdmin,
  getAdminById,
  updateAdmin,
};
