// File: app/api/auth/phone/send/route.ts
import { NextResponse } from "next/server";
import Twilio from "twilio";
import { createPhoneOtp } from "@/lib/otp";

// Optional: define a TypeScript interface for clarity
interface PhoneRequest {
  phone: string;
}

// ✅ Initialize Twilio client once
const twilioClient = Twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

/**
 * POST /api/auth/phone/send
 * Body: { phone: "+91XXXXXXXXXX" }
 * Generates OTP, sends SMS, and returns { ok, id, sid, status }.
 */
export async function POST(req: Request) {
  try {
    const body: PhoneRequest = await req.json();
    const phone = body?.phone?.trim();

    if (!phone) {
      return NextResponse.json({ ok: false, error: "phone_required" }, { status: 400 });
    }

    // ✅ Generate OTP and store in DB / cache via createPhoneOtp
    const { id, code } = await createPhoneOtp(phone);

    // ✅ Build message text
    const messageText = `Your SignalHub verification code is ${code}. It expires in 10 minutes.`;

    // ✅ Send SMS via Twilio (if configured)
    let sid: string | null = null;
    let status: string | null = null;

    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER) {
      try {
        const message = await twilioClient.messages.create({
          body: messageText,
          from: process.env.TWILIO_PHONE_NUMBER!,
          to: phone,
        });

        sid = message.sid;
        status = message.status;

        console.log("[Twilio SMS Sent]", {
          sid: message.sid,
          status: message.status,
          to: message.to,
          errorCode: message.errorCode,
          errorMessage: message.errorMessage,
        });
      } catch (twilioErr: any) {
        console.error("[Twilio SMS Error]", twilioErr?.message || twilioErr);
        return NextResponse.json(
          { ok: false, error: "sms_send_failed", details: twilioErr?.message || "Unknown Twilio error" },
          { status: 500 }
        );
      }
    } else {
      // ⚠️ Fallback — Twilio not configured
      console.warn("[SMS Fallback] Twilio credentials missing — logging message instead");
      console.log(`[SMS to ${phone}] ${messageText}`);
    }

    // ✅ Respond to client
    return NextResponse.json({
      ok: true,
      id, // your OTP record id
      sid, // Twilio message SID (if sent)
      status: status || (sid ? "queued" : "mocked"),
    });
  } catch (err: any) {
    console.error("[API Error] /api/auth/phone/send", err);
    return NextResponse.json(
      { ok: false, error: String(err?.message || err) },
      { status: 500 }
    );
  }
}
