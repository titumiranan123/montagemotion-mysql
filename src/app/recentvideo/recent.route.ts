import { Router } from "express";
import * as videoController from "./recent.controller";
import auth from "../middleware/authMiddleware";


const router = Router();

router.get("/recentVideos", videoController.getAllRecentVideo);
router.get("/recentVideos/:id", videoController.getSingleVideo);
router.post("/recentVideos", auth("admin"), videoController.createVideo);
router.put("/recentVideos/:id", auth("admin"), videoController.updateRecentVideo);
router.delete("/recentVideos/:id", auth("admin"), videoController.deleteRecentVideo);

export default router;
