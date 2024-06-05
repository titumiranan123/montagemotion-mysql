// routes/caseRoutes.ts
import express from "express";
import {
  createCase,
  deleteCase,
  getAllCase,
  getCaseById,
  updateCase,
} from "./case.controler";
import auth from "../middleware/authMiddleware";

const router = express.Router();

router.get("/cases", getAllCase);
router.get("/cases/:id", getCaseById);
router.post("/cases", auth("admin"), createCase);
router.put("/cases/:id", auth("admin"), updateCase);
router.delete("/cases/:id", auth("admin"), deleteCase);

export default router;
