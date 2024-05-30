import jwt, { JwtPayload, Secret } from "jsonwebtoken";
const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expiresIn: string
) => {
  console.log({ expiresIn });
  return jwt.sign(payload, secret, { expiresIn });
};
const verrifyToken = (token: string, secret: Secret): JwtPayload => {
  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch (error) {
    throw new Error("Invalid token");
  }
};

export const jwtHelpers = {
  createToken,
  verrifyToken,
};
