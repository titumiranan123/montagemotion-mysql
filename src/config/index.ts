import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const config = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  database_pass: process.env.DATABASE_PASS,
  database_user: process.env.DATABASE_USER,
  jwt_access_token: process.env.JWT_ACCESS_TOKEN_HASH,
  jwt_refresh_token: process.env.JWT_REFRESH_TOKEN_HASH,
  bcrypt_hash: process.env.BCYPT_HASH,
  node_env: process.env.NODE_ENV,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_TOKEN_TIME,
  jwt_access_expires_in: process.env.JWT_ACCESS_TOKEN_TIME,
  email_user: process.env.EMAIL_USER,
  email_pass: process.env.EMAIL_PASS,
};
