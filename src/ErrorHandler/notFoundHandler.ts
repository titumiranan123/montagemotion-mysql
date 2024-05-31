import { Request, Response, NextFunction } from "express";
import ApiError from "./ApiError";

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new ApiError(404, `Cannot ${req.method} ${req.originalUrl}`);
  next(error);
};

export default notFoundHandler;
