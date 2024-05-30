import db from "../../db/db";

export const getAllIntros = (): Promise<IIntro[]> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM intros", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results as IIntro[]);
      }
    });
  });
};

export const getIntroById = (id: string): Promise<IIntro | null> => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM intros WHERE _id = ?", [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        const rows = results as IIntro[];
        if (rows.length === 0) {
          resolve(null);
        } else {
          resolve(rows[0]);
        }
      }
    });
  });
};

export const createIntro = (intro: IIntro): Promise<IIntro> => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO intros SET ?", intro, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(intro);
      }
    });
  });
};

export const updateIntro = (id: string, intro: IIntro): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query("UPDATE intros SET ? WHERE _id = ?", [intro, id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const deleteIntro = (id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM intros WHERE _id = ?", [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
