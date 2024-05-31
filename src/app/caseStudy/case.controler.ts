import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import * as caseService from "./case.service";
import { ICase } from "./case.interface";

export const getAllCase = async (req: Request, res: Response) => {
  try {
    const blogs = await caseService.getAllCases();
    res.status(200).json({
      success: true,
      message: "Case retrieved successfully",
      data: blogs,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const getCaseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blog = await caseService.getCaseById(id);
    if (blog) {
      res.status(200).json({
        success: true,
        message: "Blog retrieved successfully",
        data: blog,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Blog not found",
        data: "",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};
export const createCase = async (req: Request, res: Response) => {
  try {
    const newCase: ICase = req.body;
    const createdCase = await caseService.createCase({
      ...newCase,
      _id: uuidv4(),
    });
    res.status(201).json({
      success: true,
      message: "Case created successfully",
      data: createdCase,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const updateCase = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedCase: ICase = req.body;
    await caseService.updateCase(id, updatedCase);
    res.status(200).json({
      success: true,
      message: "Case updated successfully",
      data: "",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const deleteCase = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await caseService.deleteCase(id);
    res.status(200).json({
      success: true,
      message: "Case deleted successfully",
      data: "",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};
