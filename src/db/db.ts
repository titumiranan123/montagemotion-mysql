import mysql from "mysql2";
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "725RA38et%",
  database: "montagemotion",
});
db.connect((err) => {
  if (err) {
    console.log(` Error connecting to the database : ${err}`);
    setTimeout(() => {
      db.connect((err) => {
        if (err) {
          console.log(` Error connecting to the database : ${err}`);
          return;
        }
        console.log("Connect to the MySQL database.");
      });
    }, 3000);
    return;
  }
  console.log("Connect to the MySQL database.");
});
export default db;
