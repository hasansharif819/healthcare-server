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

export const adminController = {
  getAllAdmin,
};
