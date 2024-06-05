import { Router } from "express";
import * as testimonialController from "./testimonial.controler";
import auth from "../middleware/authMiddleware";

const router = Router();

router.get("/testimonials", testimonialController.getAllTestimonials);
router.get("/testimonials/:id", testimonialController.getTestimonialById);
router.post(
  "/testimonials",
  auth("admin"),
  testimonialController.createTestimonial
);
router.put(
  "/testimonials/:id",
  auth("admin"),
  testimonialController.updateTestimonial
);
router.delete(
  "/testimonials/:id",
  auth("admin"),
  testimonialController.deleteTestimonial
);

export default router;
