import { Router } from "express";
import TranscriptController from "../controllers/TranscriptController";

const router = Router();

router.get("/", TranscriptController.getTranscript);

export default router;
