"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteIntro = exports.updateIntro = exports.createIntro = exports.getIntroById = exports.getAllIntros = void 0;
const db_1 = __importDefault(require("../../db/db"));
const getAllIntros = () => {
    return new Promise((resolve, reject) => {
        db_1.default.query("SELECT * FROM intros", (err, results) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(results);
            }
        });
    });
};
exports.getAllIntros = getAllIntros;
const getIntroById = (id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("SELECT * FROM intros WHERE _id = ?", [id], (err, results) => {
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
exports.getIntroById = getIntroById;
const createIntro = (intro) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("INSERT INTO intros SET ?", intro, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(intro);
            }
        });
    });
};
exports.createIntro = createIntro;
const updateIntro = (id, intro) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("UPDATE intros SET ? WHERE _id = ?", [intro, id], (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
};
exports.updateIntro = updateIntro;
const deleteIntro = (id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("DELETE FROM intros WHERE _id = ?", [id], (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
};
exports.deleteIntro = deleteIntro;
