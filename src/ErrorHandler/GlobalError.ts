import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ApiError from "./ApiError";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorMessages: any[] = [];

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (
    err instanceof jwt.JsonWebTokenError ||
    err instanceof jwt.TokenExpiredError
  ) {
    statusCode = 401;
    message = "Invalid or expired token";
  } else if (err instanceof Error) {
    message = err.message;
  }

  if (err.errors) {
    // Sequelize validation errors or other errors with an `errors` property
    errorMessages = err.errors.map((error: any) => ({
      path: error.path,
      message: error.message,
    }));
  } else if (!errorMessages.length && message) {
    errorMessages = [{ path: "", message }];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
  });
};

export default globalErrorHandler;
