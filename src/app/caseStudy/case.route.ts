// routes/caseRoutes.ts
import express from "express";
import {
  createCase,
  deleteCase,
  getAllCase,
  getCaseById,
  updateCase,
} from "./case.controler";

const router = express.Router();

router.get("/cases", getAllCase);
router.get("/cases/:id", getCaseById);
router.post("/cases", createCase);
router.put("/cases/:id", updateCase);
router.delete("/cases/:id", deleteCase);

export default router;
