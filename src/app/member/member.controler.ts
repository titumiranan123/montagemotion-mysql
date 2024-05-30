import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import * as memberService from "./member.service";
import { IMember } from "./member.interface";

export const getAllMembers = async (req: Request, res: Response) => {
  try {
    const members = await memberService.getAllMembers();
    res.status(200).json({
      success: true,
      message: "Members retrieved successfully",
      data: members,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const getMemberById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const member = await memberService.getMemberById(id);
    if (member) {
      res.status(200).json({
        success: true,
        message: "Member retrieved successfully",
        data: member,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Member not found",
        data: "",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const createMember = async (req: Request, res: Response) => {
  try {
    const createdMember = await memberService.createMember({
      ...req.body,
      _id: uuidv4(),
    });
    res.status(201).json({
      success: true,
      message: "Member created successfully",
      data: createdMember,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const updateMember = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedMember: IMember = req.body;
    await memberService.updateMember(id, updatedMember);
    res.status(200).json({
      success: true,
      message: "Member updated successfully",
      data: "",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const deleteMember = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await memberService.deleteMember(id);
    res.status(200).json({
      success: true,
      message: "Member deleted successfully",
      data: "",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};
