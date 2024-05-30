"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTestimonial = exports.updateTestimonial = exports.createTestimonial = exports.getTestimonialById = exports.getAllTestimonials = void 0;
const testimonialService = __importStar(require("./testimonial.service"));
const uuid_1 = require("uuid");
const getAllTestimonials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const testimonials = yield testimonialService.getAllTestimonials();
        res.json({
            success: true,
            message: "Testimonial Retrive successfull",
            data: testimonials,
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: "Testimonial Retrive failed",
            data: "",
        });
    }
});
exports.getAllTestimonials = getAllTestimonials;
const getTestimonialById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const testimonial = yield testimonialService.getTestimonialById(id);
        if (testimonial) {
            res.send({
                success: true,
                message: "Testimonial Retrive successfull",
                data: testimonial,
            });
        }
        else {
            res.send({
                success: true,
                message: "Testimonial not found",
                data: "",
            });
        }
    }
    catch (err) {
        res.send({
            success: true,
            message: (err === null || err === void 0 ? void 0 : err.message) || "An error occurred",
            data: "",
        });
    }
});
exports.getTestimonialById = getTestimonialById;
const createTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTestimonial = req.body;
        const createdTestimonial = yield testimonialService.createTestimonial(Object.assign(Object.assign({}, newTestimonial), { _id: (0, uuid_1.v4)() }));
        res.status(201).json(createdTestimonial);
    }
    catch (err) {
        res.send({
            success: true,
            message: (err === null || err === void 0 ? void 0 : err.message) || "An error occurred",
            data: "",
        });
    }
});
exports.createTestimonial = createTestimonial;
const updateTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedTestimonial = req.body;
        yield testimonialService.updateTestimonial(id, updatedTestimonial);
        res.send({
            success: true,
            message: "Testimonial updated successfully",
            data: "",
        });
    }
    catch (err) {
        res.send({
            success: true,
            message: (err === null || err === void 0 ? void 0 : err.message) || "An error occurred",
            data: "",
        });
    }
});
exports.updateTestimonial = updateTestimonial;
const deleteTestimonial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield testimonialService.deleteTestimonial(id);
        res.status(200).send({
            success: true,
            message: "Testimonial deleted successfully",
            data: " ",
        });
    }
    catch (err) {
        res.send({
            success: true,
            message: (err === null || err === void 0 ? void 0 : err.message) || "An error occurred",
            data: "",
        });
    }
});
exports.deleteTestimonial = deleteTestimonial;
