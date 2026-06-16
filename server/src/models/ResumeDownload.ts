import mongoose, { Schema, type Document } from "mongoose";

export interface IResumeDownload extends Document {
  downloadedAt: Date;
  userAgent?: string;
  ip?: string;
}

const resumeDownloadSchema = new Schema<IResumeDownload>(
  {
    downloadedAt: { type: Date, default: Date.now },
    userAgent: String,
    ip: String,
  },
  { timestamps: false },
);

export const ResumeDownload =
  mongoose.models.ResumeDownload ??
  mongoose.model<IResumeDownload>("ResumeDownload", resumeDownloadSchema);
