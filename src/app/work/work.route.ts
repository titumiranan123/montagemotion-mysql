import { Router } from "express";
import * as postworkController from "./work.controler";

const router = Router();

router.get("/postworks", postworkController.getAllPostworks);
router.get("/postworks/:id", postworkController.getPostworkById);
router.post("/postworks", postworkController.createPostwork);
router.put("/postworks/:id", postworkController.updatePostwork);
router.delete("/postworks/:id", postworkController.deletePostwork);

export default router;
