import { v4 as uuidv4 } from "uuid";
import { IUser } from "./user.interface";
import db from "../../db/db";

export const getAllUsers = (): Promise<IUser[]> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results as IUser[]);
      }
    });
  });
};

export const getUserById = (_id: string): Promise<IUser | null> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users WHERE _id = ?", [_id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        const rows = results as IUser[];
        if (rows.length === 0) {
          resolve(null);
        } else {
          resolve(rows[0]);
        }
      }
    });
  });
};

export const createUser = (user: IUser): Promise<IUser> => {
  return new Promise((resolve, reject) => {
    const newUser = { _id: uuidv4(), role: "user", ...user };
    db.query("INSERT INTO users SET ?", newUser, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(newUser);
      }
    });
  });
};

export const updateUser = (_id: string, user: IUser): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query("UPDATE users SET ? WHERE _id = ?", [user, _id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const deleteUser = (_id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM users WHERE _id = ?", [_id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
