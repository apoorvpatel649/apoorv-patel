import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  role: z.string().max(100).optional(),
  message: z.string().min(10).max(2000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL || "apoorvpatel649@gmail.com",
      subject: `Portfolio Contact: ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || "N/A"}
Role: ${data.role || "N/A"}

Message:
${data.message}
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error: "Failed to send message",
      },
      {
        status: 500,
      }
    );
  }
}