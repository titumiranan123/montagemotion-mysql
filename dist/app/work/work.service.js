"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostwork = exports.updatePostwork = exports.createPostwork = exports.getPostworkById = exports.getAllPostworks = void 0;
const db_1 = __importDefault(require("../../db/db"));
const getAllPostworks = () => {
    return new Promise((resolve, reject) => {
        db_1.default.query("SELECT * FROM postworks", (err, results) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(results);
            }
        });
    });
};
exports.getAllPostworks = getAllPostworks;
const getPostworkById = (_id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("SELECT * FROM postworks WHERE _id = ?", [_id], (err, results) => {
            if (err) {
                reject(err);
            }
            else {
                const rows = results;
                if (rows.length === 0) {
                    resolve(null);
                }
                else {
                    resolve(rows[0]);
                }
            }
        });
    });
};
exports.getPostworkById = getPostworkById;
const createPostwork = (postwork) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("INSERT INTO postworks SET ?", postwork, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(postwork);
            }
        });
    });
};
exports.createPostwork = createPostwork;
const updatePostwork = (_id, postwork) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("UPDATE postworks SET ? WHERE _id = ?", [postwork, _id], (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
};
exports.updatePostwork = updatePostwork;
const deletePostwork = (_id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("DELETE FROM postworks WHERE _id = ?", [_id], (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
};
exports.deletePostwork = deletePostwork;
