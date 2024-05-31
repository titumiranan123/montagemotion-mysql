import db from "../../db/db";
import { ICase } from "./case.interface";

export const getAllCases = (): Promise<ICase[]> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM cases", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results as ICase[]);
      }
    });
  });
};

export const getCaseById = (id: string): Promise<ICase | null> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM cases WHERE _id = ?", [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        const rows = results as ICase[];
        if (rows.length === 0) {
          resolve(null);
        } else {
          resolve(rows[0]);
        }
      }
    });
  });
};

export const createCase = (newCase: ICase): Promise<ICase> => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO cases SET ?", newCase, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(newCase);
      }
    });
  });
};

export const updateCase = (id: string, updatedCase: ICase): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query("UPDATE cases SET ? WHERE _id = ?", [updatedCase, id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const deleteCase = (id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM cases WHERE _id = ?", [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
