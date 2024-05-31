import { Router } from "express";
import * as introController from "./intro.controler";

const router = Router();
router.get("/intros", introController.getAllIntros);
router.get("/intros/:id", introController.getIntroById);
router.post("/intros", introController.createIntro);
router.put("/intros/:id", introController.updateIntro);
router.delete("/intros/:id", introController.deleteIntro);

export default router;
