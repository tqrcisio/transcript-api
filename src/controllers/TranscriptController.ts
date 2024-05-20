import { Request, Response } from "express";
import TranscriptService from "../services/TranscriptService";

class TranscriptController {
  public static async getTranscript(req: Request, res: Response): Promise<void> {
    const videoUrl = req.query.url as string;

    if (!videoUrl) {
      res.status(400).send("URL do vídeo é necessária");
      return;
    }

    try {
      const { title, transcript } = await TranscriptService.fetchTranscript(videoUrl);
      res.json({ title, transcript });
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro ao obter a transcrição");
    }
  }
}

export default TranscriptController;
