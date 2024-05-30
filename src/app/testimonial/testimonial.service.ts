import db from "../../db/db";
import { ITestimonial } from "./testimonial.interfac";

export const getAllTestimonials = (): Promise<ITestimonial[]> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM testimonials", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results as ITestimonial[]);
      }
    });
  });
};

export const getTestimonialById = (
  id: string
): Promise<ITestimonial | null> => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM testimonials WHERE _id = ?",
      [id],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          const rows = results as ITestimonial[];
          if (rows.length === 0) {
            resolve(null);
          } else {
            resolve(rows[0]);
          }
        }
      }
    );
  });
};
export const createTestimonial = (
  testimonial: ITestimonial
): Promise<ITestimonial> => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO testimonials SET ?", testimonial, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(testimonial);
      }
    });
  });
};

export const updateTestimonial = (
  id: string,
  testimonial: ITestimonial
): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE testimonials SET ? WHERE id = ?",
      [testimonial, id],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

export const deleteTestimonial = (id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM testimonials WHERE id = ?", [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
