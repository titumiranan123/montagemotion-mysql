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
exports.deletePostwork = exports.updatePostwork = exports.createPostwork = exports.getPostworkById = exports.getAllPostworks = void 0;
const postworkService = __importStar(require("./work.service"));
const uuid_1 = require("uuid");
const getAllPostworks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postworks = yield postworkService.getAllPostworks();
        res.status(200).json({
            success: true,
            message: "Postworks retrieved successfully",
            data: postworks,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.message) || "An error occurred",
            data: "",
        });
    }
});
exports.getAllPostworks = getAllPostworks;
const getPostworkById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const postwork = yield postworkService.getPostworkById(id);
        if (postwork) {
            res.status(200).json({
                success: true,
                message: "Postwork retrieved successfully",
                data: postwork,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Postwork not found",
                data: "",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.message) || "An error occurred",
            data: "",
        });
    }
});
exports.getPostworkById = getPostworkById;
const createPostwork = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPostwork = req.body;
        const createdPostwork = yield postworkService.createPostwork(Object.assign(Object.assign({}, newPostwork), { _id: (0, uuid_1.v4)() }));
        res.status(201).json({
            success: true,
            message: "Postwork created successfully",
            data: createdPostwork,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.message) || "An error occurred",
            data: "",
        });
    }
});
exports.createPostwork = createPostwork;
const updatePostwork = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedPostwork = req.body;
        yield postworkService.updatePostwork(id, updatedPostwork);
        res.status(200).json({
            success: true,
            message: "Postwork updated successfully",
            data: "",
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.message) || "An error occurred",
            data: "",
        });
    }
});
exports.updatePostwork = updatePostwork;
const deletePostwork = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield postworkService.deletePostwork(id);
        res.status(200).json({
            success: true,
            message: "Postwork deleted successfully",
            data: "",
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: (err === null || err === void 0 ? void 0 : err.message) || "An error occurred",
            data: "",
        });
    }
});
exports.deletePostwork = deletePostwork;
