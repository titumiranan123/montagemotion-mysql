import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ApiError from "./ApiError";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    return res.status(401).json({ message: "Invalid token" });
  }
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  if (err instanceof jwt.JsonWebTokenError) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (err instanceof jwt.TokenExpiredError) {
    return res.status(401).json({ message: "Token expired" });
  }

  res.status(500).json({ message: "Internal server error" });
};
