import { Router } from "express";
import * as blogController from "./blog.controler";
import auth from "../middleware/authMiddleware";

const router = Router();

router.get("/blogs", blogController.getAllBlogs);
router.get("/blogs/:id", blogController.getBlogById);
router.post("/blogs", auth("admin"), blogController.createBlog);
router.put("/blogs/:id", auth("admin"), blogController.updateBlog);
router.delete("/blogs/:id", auth("admin"), blogController.deleteBlog);

export default router;
