import { Router } from "express";
import { z } from "zod";
import { Resend } from "resend";
import { connectDB } from "../lib/db";
import { Contact } from "../models/Contact";

const router = Router();

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  role: z.string().max(100).optional(),
  message: z.string().min(10).max(2000),
});

router.post("/", async (req, res) => {
  try {
    const data = contactSchema.parse(req.body);

    if (process.env.MONGODB_URI) {
      await connectDB();
      await Contact.create(data);
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
        to: process.env.CONTACT_EMAIL ?? "apoorvpatel649@gmail.com",
        subject: `Portfolio Contact: ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company ?? "N/A"}</p>
          <p><strong>Role:</strong> ${data.role ?? "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      });
    }

    res.json({ success: true, message: "Message received successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: "Invalid form data", details: error.issues });
      return;
    }
    console.error("Contact error:", error);
    res.status(500).json({ error: "Failed to process contact form" });
  }
});

export default router;
