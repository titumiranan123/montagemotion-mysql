import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import * as blogService from "./blog.service";
import { IBlog } from "./blog.interface";

export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.status(200).json({
      success: true,
      message: "Blogs retrieved successfully",
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

export const getBlogById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blog = await blogService.getBlogById(id);
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

export const createBlog = async (req: Request, res: Response) => {
  try {
    const newBlog: IBlog = req.body;
    const createdBlog = await blogService.createBlog({
      ...newBlog,
      _id: uuidv4(),
    });
    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: createdBlog,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedBlog: IBlog = req.body;
    await blogService.updateBlog(id, updatedBlog);
    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
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

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await blogService.deleteBlog(id);
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
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
