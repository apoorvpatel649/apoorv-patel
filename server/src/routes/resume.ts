import { Router } from "express";
import { connectDB } from "../lib/db";
import { ResumeDownload } from "../models/ResumeDownload";

const router = Router();

router.post("/", async (req, res) => {
  try {
    if (process.env.MONGODB_URI) {
      await connectDB();
      await ResumeDownload.create({
        downloadedAt: new Date(),
        userAgent: req.headers["user-agent"],
        ip: req.ip,
      });
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Resume download tracking error:", error);
    res.json({ success: true });
  }
});

router.get("/stats", async (_req, res) => {
  try {
    if (!process.env.MONGODB_URI) {
      res.json({ total: 0 });
      return;
    }

    await connectDB();
    const total = await ResumeDownload.countDocuments();
    res.json({ total });
  } catch {
    res.json({ total: 0 });
  }
});

export default router;
