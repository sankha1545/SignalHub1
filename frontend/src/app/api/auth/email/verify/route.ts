// app/api/auth/email/verify/route.ts
import { NextResponse } from "next/server";
import { verifyEmailOtp } from "@/lib/otp";
import { signTemp } from "@/lib/jwt";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("[Email Verify Request]", body);

  const { email, code, flow } = body;
  if (!email || !code) {
    console.warn("[Email Verify Missing Fields]", { email, code, flow });
    return NextResponse.json({ error: "missing_fields", received: body }, { status: 400 });
  }

  const ok = await verifyEmailOtp(email, code);
  if (!ok) {
    console.warn("[Email Verify Invalid Code]", { email, code });
    return NextResponse.json({ error: "invalid_code" }, { status: 400 });
  }

  const tempToken = signTemp({ email, flow }, "15m");
  return NextResponse.json({ ok: true, tempToken });
}
