"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
exports.db = mysql2_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "725RA38et%",
    database: "montagemotion",
});
exports.db.connect((err) => {
    if (err) {
        console.log(` Error connecting to the database : ${err}`);
        return;
    }
    console.log("Connect to the MySQL database.");
});
exports.default = exports.db;
