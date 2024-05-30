import { Request, Response } from "express";

import * as introService from "./intro.service";
import { v4 as uuidv4 } from "uuid";
export const getAllIntros = async (req: Request, res: Response) => {
  try {
    const intros = await introService.getAllIntros();
    res.status(200).json({
      success: true,
      message: "Intros retrieved successfully",
      data: intros,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const getIntroById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const intro = await introService.getIntroById(id);
    if (intro) {
      res.status(200).json({
        success: true,
        message: "Intro retrieved successfully",
        data: intro,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Intro not found",
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

export const createIntro = async (req: Request, res: Response) => {
  try {
    const newIntro: IIntro = req.body;
    const createdIntro = await introService.createIntro({
      ...newIntro,
      _id: uuidv4(),
    });
    res.status(201).json({
      success: true,
      message: "Intro created successfully",
      data: createdIntro,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const updateIntro = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedIntro: IIntro = req.body;
    await introService.updateIntro(id, updatedIntro);
    res.status(200).json({
      success: true,
      message: "Intro updated successfully",
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

export const deleteIntro = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await introService.deleteIntro(id);
    res.status(200).json({
      success: true,
      message: "Intro deleted successfully",
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
