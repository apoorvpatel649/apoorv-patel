import { NextResponse } from "next/server";
import { z } from "zod";

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

    const apiUrl = process.env.API_URL ?? "http://localhost:4000";

    const res = await fetch(`${apiUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const fallback = await handleContactFallback(data);
      return fallback;
    }

    const result = await res.json();
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

async function handleContactFallback(data: z.infer<typeof contactSchema>) {
  if (process.env.RESEND_API_KEY) {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL ?? "apoorvpatel649@gmail.com",
      subject: `Portfolio Contact: ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company ?? "N/A"}\nRole: ${data.role ?? "N/A"}\n\nMessage:\n${data.message}`,
    });

    return NextResponse.json({ success: true, message: "Message sent via email" });
  }

  if (process.env.NODE_ENV === "development") {
    console.log("Contact form submission (dev mode):", data);
    return NextResponse.json({ success: true, message: "Message logged in development" });
  }

  return NextResponse.json({ error: "Contact service unavailable" }, { status: 503 });
}
