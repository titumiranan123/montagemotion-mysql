import { Request, Response } from "express";

import * as postworkService from "./work.service";
import { v4 as uuidv4 } from "uuid";
import { IPostwork } from "./work.interface";

export const getAllPostworks = async (req: Request, res: Response) => {
  try {
    const postworks = await postworkService.getAllPostworks();
    res.status(200).json({
      success: true,
      message: "Postworks retrieved successfully",
      data: postworks,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const getPostworkById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const postwork = await postworkService.getPostworkById(id);
    if (postwork) {
      res.status(200).json({
        success: true,
        message: "Postwork retrieved successfully",
        data: postwork,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Postwork not found",
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

export const createPostwork = async (req: Request, res: Response) => {
  try {
    const newPostwork: IPostwork = {
      _id: uuidv4(),
      title: req.body.title,
      thumbnail: req.body.thumbnail,
      category: req.body.category,
      video_category: req.body.video_category || "",
      video_link: req.body.video_link,
      description: req.body.description,
    };

    const createdPostwork = await postworkService.createPostwork(newPostwork);
    res.status(201).json({
      success: true,
      message: "Postwork created successfully",
      data: createdPostwork,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const updatePostwork = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedPostwork: IPostwork = {
      _id: id,
      title: req.body.title,
      thumbnail: req.body.thumbnail,
      category: req.body.category,
      video_category: req.body.video_category || "",
      video_link: req.body.video_link,
      description: req.body.description,
    };
    await postworkService.updatePostwork(id, updatedPostwork);
    res.status(200).json({
      success: true,
      message: "Postwork updated successfully",
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

export const deletePostwork = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await postworkService.deletePostwork(id);
    res.status(200).json({
      success: true,
      message: "Postwork deleted successfully",
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
