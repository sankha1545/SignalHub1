// app/api/auth/email/send/route.ts
import { NextResponse } from "next/server";
import { createEmailOtp } from "@/lib/otp";
import { sendEmail } from "@/lib/mail";

export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body;
  if (!email) return NextResponse.json({ error: "email_required" }, { status: 400 });

  const { id, code } = await createEmailOtp(email);

  // send OTP email (use simple template)
  await sendEmail(
    email,
    "Your verification code",
    `<p>Your verification code is <b>${code}</b>. It expires in 10 minutes.</p>`
  );

  return NextResponse.json({ ok: true, id });
}
