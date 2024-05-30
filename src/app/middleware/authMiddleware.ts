import { NextFunction, Request, Response } from "express";

import { Secret } from "jsonwebtoken";
import { jwtHelpers } from "./jwtHelper";
import ApiError from "../../ErrorHandler/ApiError";
import { config } from "../../config";

const auth =
  (...requireRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      console.log(token);
      if (!token) {
        throw new ApiError(401, "you are not authorized");
      }
      let verifiedUser = null;
      verifiedUser = jwtHelpers.verrifyToken(
        token,
        config.jwt_access_token as Secret
      );
      (req as any).user = verifiedUser;
      if (requireRoles.length && !requireRoles.includes(verifiedUser.role)) {
        throw new ApiError(401, "Forbidden");
      }
      next();
    } catch (error) {
      throw new ApiError(401, (error as Error)?.message);
    }
  };

export default auth;
