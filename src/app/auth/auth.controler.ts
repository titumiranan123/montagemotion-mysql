import { Request, Response } from "express";
import { IUser } from "../users/user.interface";
import * as authService from "./auth.service";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const newUser: IUser = req.body;
    const createdUser = await authService.registerUser(newUser);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
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

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await authService.loginUser(email, password);
    if (token) {
      res.status(200).json({
        success: true,
        message: "User logged in successfully",
        data: { token },
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
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
