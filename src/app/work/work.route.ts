import { Router } from "express";
import * as postworkController from "./work.controler";
import auth from "../middleware/authMiddleware";

const router = Router();

router.get("/postworks", postworkController.getAllPostworks);
router.get("/postworks/:id", postworkController.getPostworkById);
router.post("/postworks", auth("admin"), postworkController.createPostwork);
router.put("/postworks/:id", auth("admin"), postworkController.updatePostwork);
router.delete(
  "/postworks/:id",
  auth("admin"),
  postworkController.deletePostwork
);

export default router;
