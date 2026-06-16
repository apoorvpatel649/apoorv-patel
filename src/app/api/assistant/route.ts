import { NextResponse } from "next/server";
import { z } from "zod";
import { generateResponse } from "@/lib/rag";

const schema = z.object({
  query: z.string().min(1).max(500),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { query } = schema.parse(body);
    const response = generateResponse(query);
    return NextResponse.json({ response });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
