import { Request, Response } from "express";
import { ITestimonial } from "./testimonial.interfac";
import * as testimonialService from "./testimonial.service";
import { v4 as uuidv4 } from "uuid";
export const getAllTestimonials = async (req: Request, res: Response) => {
  try {
    const testimonials = await testimonialService.getAllTestimonials();
    res.json({
      success: true,
      message: "Testimonial Retrive successfull",
      data: testimonials,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Testimonial Retrive failed",
      data: "",
    });
  }
};

export const getTestimonialById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const testimonial = await testimonialService.getTestimonialById(id);
    if (testimonial) {
      res.send({
        success: true,
        message: "Testimonial Retrive successfull",
        data: testimonial,
      });
    } else {
      res.send({
        success: true,
        message: "Testimonial not found",
        data: "",
      });
    }
  } catch (err) {
    res.send({
      success: true,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const createTestimonial = async (req: Request, res: Response) => {
  try {
    const newTestimonial: ITestimonial = req.body;
    const createdTestimonial = await testimonialService.createTestimonial({
      ...newTestimonial,
      _id: uuidv4(),
    });
    res.status(201).json(createdTestimonial);
  } catch (err) {
    res.send({
      success: true,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const updateTestimonial = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedTestimonial = req.body;
    await testimonialService.updateTestimonial(id, updatedTestimonial);
    res.send({
      success: true,
      message: "Testimonial updated successfully",
      data: "",
    });
  } catch (err) {
    res.send({
      success: true,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};

export const deleteTestimonial = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await testimonialService.deleteTestimonial(id);
    res.status(200).send({
      success: true,
      message: "Testimonial deleted successfully",
      data: " ",
    });
  } catch (err) {
    res.send({
      success: true,
      message: (err as Error)?.message || "An error occurred",
      data: "",
    });
  }
};
