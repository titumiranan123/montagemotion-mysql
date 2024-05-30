import { IPostwork } from "./work.interface";
import db from "../../db/db";

export const getAllPostworks = (): Promise<IPostwork[]> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM postworks", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results as IPostwork[]);
      }
    });
  });
};

export const getPostworkById = (_id: string): Promise<IPostwork | null> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM postworks WHERE _id = ?", [_id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        const rows = results as IPostwork[];
        if (rows.length === 0) {
          resolve(null);
        } else {
          resolve(rows[0]);
        }
      }
    });
  });
};

export const createPostwork = (postwork: IPostwork): Promise<IPostwork> => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO postworks SET ?", postwork, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(postwork);
      }
    });
  });
};

export const updatePostwork = (
  _id: string,
  postwork: IPostwork
): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query("UPDATE postworks SET ? WHERE _id = ?", [postwork, _id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const deletePostwork = (_id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM postworks WHERE _id = ?", [_id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
