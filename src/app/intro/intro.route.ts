import { Router } from "express";
import * as introController from "./intro.controler";
import auth from "../middleware/authMiddleware";

const router = Router();
router.get("/intros", introController.getAllIntros);
router.get("/intros/:id", introController.getIntroById);
router.post("/intros", auth("admin"), introController.createIntro);
router.put("/intros/:id", auth("admin"), introController.updateIntro);
router.delete("/intros/:id", auth("admin"), introController.deleteIntro);

export default router;
