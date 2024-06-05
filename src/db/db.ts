import mysql from "mysql2";
import dotenv from "dotenv";
import { config } from "../config";

dotenv.config(); // Load environment variables from .env file

// Create a MySQL pool
const db = mysql.createPool({
  host: config.database_host,
  user: config.database_user,
  password: config.database_pass,
  database: config.database_name,
  waitForConnections: true,
  connectionLimit: config.database_connection_limit,
  queueLimit: 0,
});

// Handle initial connection
db.getConnection((err, connection) => {
  if (err) {
    // console.error(`Error connecting to the database: ${err.message}`);
    return;
  }
  // console.log("Connected to the MySQL database.");
  connection.release(); // Release the connection
});

// Function to handle reconnection
const handleDisconnect = () => {
  // console.log("Reconnecting to the database...");
  db.getConnection((err, connection) => {
    if (err) {
      // console.error(`Error reconnecting to the database: ${err.message}`);
      setTimeout(handleDisconnect, 2000);
    } else {
      // console.log("Reconnected to the database.");
      connection.release(); // Release the connection
    }
  });
};

// Handle connection errors and reconnect
db.on("error", (err) => {
  console.error(`Database error: ${err.message}`);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    handleDisconnect();
  } else {
    throw err;
  }
});

export default db;
