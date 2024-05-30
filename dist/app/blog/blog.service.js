"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.updateBlog = exports.createBlog = exports.getBlogById = exports.getAllBlogs = void 0;
const db_1 = __importDefault(require("../../db/db"));
const getAllBlogs = () => {
    return new Promise((resolve, reject) => {
        db_1.default.query("SELECT * FROM blogs", (err, results) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(results);
            }
        });
    });
};
exports.getAllBlogs = getAllBlogs;
const getBlogById = (_id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("SELECT * FROM blogs WHERE _id = ?", [_id], (err, results) => {
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
exports.getBlogById = getBlogById;
const createBlog = (blog) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("INSERT INTO blogs SET ?", blog, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(blog);
            }
        });
    });
};
exports.createBlog = createBlog;
const updateBlog = (_id, blog) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("UPDATE blogs SET ? WHERE _id = ?", [blog, _id], (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
};
exports.updateBlog = updateBlog;
const deleteBlog = (_id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("DELETE FROM blogs WHERE _id = ?", [_id], (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
};
exports.deleteBlog = deleteBlog;
