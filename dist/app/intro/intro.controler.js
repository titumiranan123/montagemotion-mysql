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
exports.deleteIntro = exports.updateIntro = exports.createIntro = exports.getIntroById = exports.getAllIntros = void 0;
const introService = __importStar(require("./intro.service"));
const uuid_1 = require("uuid");
const getAllIntros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const intros = yield introService.getAllIntros();
        res.status(200).json({
            success: true,
            message: "Intros retrieved successfully",
            data: intros,
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
exports.getAllIntros = getAllIntros;
const getIntroById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const intro = yield introService.getIntroById(id);
        if (intro) {
            res.status(200).json({
                success: true,
                message: "Intro retrieved successfully",
                data: intro,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Intro not found",
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
exports.getIntroById = getIntroById;
const createIntro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newIntro = req.body;
        const createdIntro = yield introService.createIntro(Object.assign(Object.assign({}, newIntro), { _id: (0, uuid_1.v4)() }));
        res.status(201).json({
            success: true,
            message: "Intro created successfully",
            data: createdIntro,
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
exports.createIntro = createIntro;
const updateIntro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedIntro = req.body;
        yield introService.updateIntro(id, updatedIntro);
        res.status(200).json({
            success: true,
            message: "Intro updated successfully",
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
exports.updateIntro = updateIntro;
const deleteIntro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield introService.deleteIntro(id);
        res.status(200).json({
            success: true,
            message: "Intro deleted successfully",
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
exports.deleteIntro = deleteIntro;
