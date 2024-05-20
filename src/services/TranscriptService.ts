import { YoutubeTranscript } from "youtube-transcript";
import puppeteer from "puppeteer";
import { TranscriptEntry } from "../models/Transcript";

class TranscriptService {
  public static async fetchTranscript(url: string): Promise<{ title: string; transcript: TranscriptEntry[] }> {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url);

    const pageTitle = await page.title();
    const title = pageTitle.replace(" - YouTube", "");

    await browser.close();

    const transcript = await YoutubeTranscript.fetchTranscript(url);

    return {
      title,
      transcript: transcript.map((entry) => ({
        text: entry.text,
        duration: entry.duration,
        offset: entry.offset,
      })),
    };
  }
}

export default TranscriptService;
