"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTestimonial = exports.updateTestimonial = exports.createTestimonial = exports.getTestimonialById = exports.getAllTestimonials = void 0;
const db_1 = __importDefault(require("../../db/db"));
const getAllTestimonials = () => {
    return new Promise((resolve, reject) => {
        db_1.default.query("SELECT * FROM testimonials", (err, results) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(results);
            }
        });
    });
};
exports.getAllTestimonials = getAllTestimonials;
const getTestimonialById = (id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("SELECT * FROM testimonials WHERE _id = ?", [id], (err, results) => {
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
exports.getTestimonialById = getTestimonialById;
const createTestimonial = (testimonial) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("INSERT INTO testimonials SET ?", testimonial, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(testimonial);
            }
        });
    });
};
exports.createTestimonial = createTestimonial;
const updateTestimonial = (id, testimonial) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("UPDATE testimonials SET ? WHERE id = ?", [testimonial, id], (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
};
exports.updateTestimonial = updateTestimonial;
const deleteTestimonial = (id) => {
    return new Promise((resolve, reject) => {
        db_1.default.query("DELETE FROM testimonials WHERE id = ?", [id], (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
};
exports.deleteTestimonial = deleteTestimonial;
