import bcrypt from "bcrypt";

import { v4 as uuidv4 } from "uuid";

import db from "../../db/db";
import { IUser } from "../users/user.interface";

import { jwtHelpers } from "../middleware/jwtHelper";
import { config } from "../../config";
import { Secret } from "jsonwebtoken";

export const registerUser = async (user: IUser): Promise<IUser> => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const newUser = { _id: uuidv4(), ...user, password: hashedPassword };
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO users SET ?", newUser, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(newUser);
      }
    });
  });
};
export const loginUser = async (
  email: string,
  password: string
): Promise<IUser | null> => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, results) => {
        if (err) {
          reject(err);
        } else {
          const users = results as IUser[];
          if (users.length === 0) {
            resolve(null);
          } else {
            const user = users[0];
            const isPasswordValid = await bcrypt.compare(
              password,
              user.password
            );
            if (isPasswordValid) {
              resolve(user);
            } else {
              resolve(null);
            }
          }
        }
      }
    );
  });
};
