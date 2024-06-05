import { Request, Response } from "express";
import { IUser } from "../users/user.interface";
import * as authService from "./auth.service";
import { jwtHelpers } from "../middleware/jwtHelper";
import { config } from "../../config";
import { Secret } from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const newUser: IUser = req.body;
    const createdUser = await authService.registerUser({
      ...newUser,
      role: "admin",
    });
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
    const user = await authService.loginUser(email, password);

    if (user) {
      const token = jwtHelpers.createToken(
        {
          _id: user._id,
          role: user.role,
          name: user.name,
          email: user.email,
        },
        config.jwt_access_token as Secret,
        config.jwt_access_expires_in as string
      );
      const refreshtoken = jwtHelpers.createToken(
        {
          _id: user._id,
          role: user.role,
          name: user.name,
          email: user.email,
        },
        config.jwt_refresh_token as Secret,
        config.jwt_refresh_expires_in as string
      );
      res.cookie("refreshToken", refreshtoken, {
        httpOnly: true,
        maxAge: 2 * 24 * 60 * 60 * 1000,
      });
      res.status(200).json({
        success: true,
        message: "User logged in successfully",
        data: {
          token,
          user: {
            role: user.role,
            name: user.name,
            email: user.email,
          },
        },
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

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "session expired",
        data: "",
      });
    }

    const decoded: any = jwtHelpers.verrifyToken(
      refreshToken,
      config.jwt_refresh_token as Secret
    );

    // Generate a new access token
    const accessToken = jwtHelpers.createToken(
      { user: decoded },
      config.jwt_access_token as Secret,
      config.jwt_access_expires_in as string
    );

    res.status(200).json({
      success: true,
      message: "Access token refreshed successfully",
      data: {
        accessToken,
      },
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Invalid refresh token",
    });
  }
};
