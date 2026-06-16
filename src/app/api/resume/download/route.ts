import { NextResponse } from "next/server";

export async function POST() {
  try {
    const apiUrl = process.env.API_URL ?? "http://localhost:4000";

    await fetch(`${apiUrl}/api/resume/download`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }).catch(() => {
      // Fallback: log locally in dev
      if (process.env.NODE_ENV === "development") {
        console.log("Resume download tracked (dev mode)");
      }
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: true });
  }
}
