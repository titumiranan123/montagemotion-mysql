import { Request, Response } from "express";

import * as userService from "./user.service";
import { IUser } from "./user.interface";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (user) {
      res.status(200).json({
        success: true,
        message: "User retrieved successfully",
        data: user,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
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

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser: IUser = req.body;
    const createdUser = await userService.createUser(newUser);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: createdUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedUser: IUser = req.body;
    await userService.updateUser(id, updatedUser);
    res.status(200).json({
      success: true,
      message: "User updated successfully",
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

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
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
