import express from "express";
import { aiSymptoms } from "../Controllers/symptonController.js";

const router = express.Router();

router.post("/analyse", aiSymptoms);

export default router;
