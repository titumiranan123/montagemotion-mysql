import { Router } from "express";
import * as testimonialController from "./testimonial.controler";

const router = Router();

router.get("/testimonials", testimonialController.getAllTestimonials);
router.get("/testimonials/:id", testimonialController.getTestimonialById);
router.post("/testimonials", testimonialController.createTestimonial);
router.put("/testimonials/:id", testimonialController.updateTestimonial);
router.delete("/testimonials/:id", testimonialController.deleteTestimonial);

export default router;
