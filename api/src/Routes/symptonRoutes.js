import express from "express";
import {
  aiSymptoms,
  symptomsHistory,
} from "../Controllers/symptonController.js";

const router = express.Router();

router.post("/analyse", aiSymptoms);
router.get("/analyse-history", symptomsHistory);

export default router;
