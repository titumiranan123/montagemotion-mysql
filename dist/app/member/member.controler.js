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
exports.deleteMember = exports.updateMember = exports.createMember = exports.getMemberById = exports.getAllMembers = void 0;
const uuid_1 = require("uuid");
const memberService = __importStar(require("./member.service"));
const getAllMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const members = yield memberService.getAllMembers();
        res.status(200).json({
            success: true,
            message: "Members retrieved successfully",
            data: members,
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
exports.getAllMembers = getAllMembers;
const getMemberById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const member = yield memberService.getMemberById(id);
        if (member) {
            res.status(200).json({
                success: true,
                message: "Member retrieved successfully",
                data: member,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Member not found",
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
exports.getMemberById = getMemberById;
const createMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createdMember = yield memberService.createMember(Object.assign(Object.assign({}, req.body), { _id: (0, uuid_1.v4)() }));
        res.status(201).json({
            success: true,
            message: "Member created successfully",
            data: createdMember,
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
exports.createMember = createMember;
const updateMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedMember = req.body;
        yield memberService.updateMember(id, updatedMember);
        res.status(200).json({
            success: true,
            message: "Member updated successfully",
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
exports.updateMember = updateMember;
const deleteMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield memberService.deleteMember(id);
        res.status(200).json({
            success: true,
            message: "Member deleted successfully",
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
exports.deleteMember = deleteMember;
