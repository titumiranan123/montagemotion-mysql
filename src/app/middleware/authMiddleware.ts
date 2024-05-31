import { NextFunction, Request, Response } from "express";
import { Secret } from "jsonwebtoken";
import { jwtHelpers } from "./jwtHelper";
import ApiError from "../../ErrorHandler/ApiError";
import { config } from "../../config";

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authorizationHeader = req.headers.authorization;
      if (!authorizationHeader) {
        return res.status(401).send({
          success: false,
          message: "You are not authorized",
        });
      }

      const token = authorizationHeader.split(" ")[1];
      if (!token) {
        return res.status(401).send({
          success: false,
          message: "You are not authorized",
        });
      }

      let verifiedUser = null;
      try {
        verifiedUser = jwtHelpers.verrifyToken(
          token,
          config.jwt_access_token as Secret
        );
      } catch (error) {
        return res.status(401).send({
          success: false,
          message: "You are not authorized",
        });
      }

      if (!verifiedUser) {
        return res.status(401).send({
          success: false,
          message: "You are not authorized",
        });
      }

      (req as any).user = verifiedUser;
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(403, "Forbidden");
      }

      next();
    } catch (error) {
      next(new ApiError(401, (error as Error)?.message || "Unauthorized"));
    }
  };

export default auth;
