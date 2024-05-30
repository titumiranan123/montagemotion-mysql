"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMember = exports.updateMember = exports.createMember = exports.getMemberById = exports.getAllMembers = void 0;
const db_1 = __importDefault(require("../../db/db"));
const getAllMembers = () => {
    return new Promise((resolve, reject) => {
        db_1.default.query("SELECT * FROM members", (err, results) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(results);
            }
        });
    });
};
exports.getAllMembers = getAllMembers;
const getMemberById = (id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("SELECT * FROM members WHERE _id = ?", [id], (err, results) => {
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
exports.getMemberById = getMemberById;
const createMember = (member) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("INSERT INTO members SET ?", member, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(member);
            }
        });
    });
};
exports.createMember = createMember;
const updateMember = (id, member) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("UPDATE members SET ? WHERE _id = ?", [member, id], (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
};
exports.updateMember = updateMember;
const deleteMember = (id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("DELETE FROM members WHERE _id = ?", [id], (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
};
exports.deleteMember = deleteMember;
