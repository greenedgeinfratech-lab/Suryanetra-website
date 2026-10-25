import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/leads/store";
import { validateLead, isRateLimited } from "@/lib/leads/validate";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  // Basic spam protection: honeypot field. Real bots often fill hidden fields.
  if (body.website) {
    return NextResponse.json({ ok: true }); // silently accept, do nothing
  }

  const { valid, errors } = validateLead(body as never);
  if (!valid) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const stored = await saveLead(body as never);
  return NextResponse.json({ ok: true, id: stored.id });
}
