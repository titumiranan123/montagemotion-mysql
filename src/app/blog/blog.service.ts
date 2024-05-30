import { IBlog } from "./blog.interface";
import db from "../../db/db";

export const getAllBlogs = (): Promise<IBlog[]> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM blogs", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results as IBlog[]);
      }
    });
  });
};

export const getBlogById = (_id: string): Promise<IBlog | null> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM blogs WHERE _id = ?", [_id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        const rows = results as IBlog[];
        if (rows.length === 0) {
          resolve(null);
        } else {
          resolve(rows[0]);
        }
      }
    });
  });
};

export const createBlog = (blog: IBlog): Promise<IBlog> => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO blogs SET ?", blog, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(blog);
      }
    });
  });
};

export const updateBlog = (_id: string, blog: IBlog): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query("UPDATE blogs SET ? WHERE _id = ?", [blog, _id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const deleteBlog = (_id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM blogs WHERE _id = ?", [_id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
