import db from "../../db/db";
import { IMember } from "./member.interface";

export const getAllMembers = (): Promise<IMember[]> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM members ORDER BY createdAt ASC", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results as IMember[]);
      }
    });
  });
};

export const getMemberById = (id: string): Promise<IMember | null> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM members WHERE _id = ?", [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        const rows = results as IMember[];
        if (rows.length === 0) {
          resolve(null);
        } else {
          resolve(rows[0]);
        }
      }
    });
  });
};

export const createMember = (member: IMember): Promise<IMember> => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO members SET ?", member, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(member);
      }
    });
  });
};

export const updateMember = (id: string, member: IMember): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query("UPDATE members SET ? WHERE _id = ?", [member, id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const deleteMember = (id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM members WHERE _id = ?", [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
