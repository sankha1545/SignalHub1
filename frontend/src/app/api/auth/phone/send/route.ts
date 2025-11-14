// File: src/app/api/auth/phone/send/route.ts
import { NextResponse } from "next/server";

/**
 * POST /api/auth/phone/send
 *
 * Body: { phone: string, tempToken?: string, resend?: boolean }
 *
 * Behavior:
 * - Defensively parse raw body and return 400 on malformed JSON (echo raw for debugging).
 * - Validate phone (basic E.164-like check).
 * - Try to use user's createPhoneOtp(phone) helper from "@/lib/otp" (if present).
 *   - If helper missing or fails, generate a 6-digit OTP locally (dev fallback).
 * - If Twilio env vars present, send SMS via Twilio (dynamic import).
 * - If Twilio not configured, log OTP to server console (dev-friendly).
 * - Return structured JSON with helpful fields and non-opaque errors.
 */

/* ------------------------- Helpers ------------------------- */

function routeLog(...args: any[]) {
  // centralize route logs so it's easy to grep in dev logs
  console.error("[/api/auth/phone/send]", ...args);
}

function isValidPhone(value: any) {
  if (!value || typeof value !== "string") return false;
  const v = value.trim();
  // allow optional leading + and 7-20 digits (basic, prevents obvious bad data)
  return /^\+?[0-9]{7,20}$/.test(v);
}

type CreatePhoneOtpResult = { id?: string | null; code: string };

/**
 * Try to call user-provided createPhoneOtp helper.
 * If helper not present or fails, return a generated OTP (dev fallback).
 */
async function createOrGenerateOtp(phone: string): Promise<CreatePhoneOtpResult> {
  try {
    // dynamic import so route remains resilient if helper is absent or path differs
    const otpModule = await import("@/lib/otp").catch(() => null);
    if (otpModule && typeof otpModule.createPhoneOtp === "function") {
      try {
        const res = await otpModule.createPhoneOtp(phone);
        // normalize return shape: accept { id, code } or { id, otp } or { otp }
        const id = res?.id ?? null;
        const code = String(res?.code ?? res?.otp ?? "");
        if (!code) {
          routeLog("createPhoneOtp returned invalid shape; falling back to generated code", { returned: res });
        } else {
          return { id, code };
        }
      } catch (callErr: any) {
        routeLog("createPhoneOtp call threw; falling back to generated OTP:", callErr?.message ?? callErr);
      }
    } else {
      routeLog("createPhoneOtp helper not found at '@/lib/otp' — using fallback OTP");
    }
  } catch (impErr: any) {
    // any import failure -> fallback
    routeLog("Error importing '@/lib/otp' (ignored):", impErr?.message ?? impErr);
  }

  // fallback: generate a 6-digit OTP (dev-friendly)
  const generated = String(Math.floor(100000 + Math.random() * 900000));
  return { id: null, code: generated };
}

/* ------------------------- Route Handler ------------------------- */

export async function POST(req: Request) {
  try {
    // Read raw text body (defensive — avoids throwing on malformed JSON)
    const rawText = await req.text().catch(() => "");
    if (!rawText || rawText.trim().length === 0) {
      return NextResponse.json({ ok: false, error: "empty_body", message: "Request body is empty" }, { status: 400 });
    }

    // Attempt to parse JSON — return 400 with raw body if parse fails
    let body: any;
    try {
      body = JSON.parse(rawText);
    } catch (parseErr: any) {
      routeLog("Malformed JSON received:", parseErr?.message ?? parseErr, "raw:", rawText.slice(0, 1000));
      return NextResponse.json(
        { ok: false, error: "malformed_json", message: parseErr?.message ?? "Invalid JSON", raw: rawText },
        { status: 400 }
      );
    }

    const phone = (body?.phone ?? "").toString().trim();
    const tempToken = body?.tempToken ?? null;
    const resend = Boolean(body?.resend);

    // Validate phone shape
    if (!isValidPhone(phone)) {
      return NextResponse.json(
        {
          ok: false,
          error: "invalid_phone",
          message: "phone is required and must be E.164-like (e.g. +919876543210)",
          received: phone,
        },
        { status: 400 }
      );
    }

    // Optional: verify tempToken if you want to enforce email verification earlier in the flow
    if (tempToken) {
      try {
        const jwtMod = await import("@/lib/jwt").catch(() => null);
        if (jwtMod && typeof jwtMod.verifyTemp === "function") {
          try {
            const decoded = jwtMod.verifyTemp(tempToken);
            if (decoded?.phone && decoded.phone !== phone) {
              // Log mismatch — policy choice whether to fail, here we only warn
              routeLog("Warning: tempToken phone mismatch", { decodedPhone: decoded.phone, requestPhone: phone });
            }
          } catch (vErr: any) {
            routeLog("verifyTemp failed:", vErr?.message ?? vErr);
            return NextResponse.json({ ok: false, error: "invalid_temp_token" }, { status: 401 });
          }
        }
      } catch (e) {
        // ignore absence of jwt helper
      }
    }

    // Create OTP (use helper if available, else generate)
    const { id, code } = await createOrGenerateOtp(phone);

    // Build message text
    const messageText = `Your SignalHub verification code is ${code}. It expires in 10 minutes.`;

    // Twilio config (support different env names)
    const TW_SID = process.env.TWILIO_ACCOUNT_SID || process.env.TWILIO_SID;
    const TW_TOKEN = process.env.TWILIO_AUTH_TOKEN || process.env.TWILIO_TOKEN;
    const TW_FROM = process.env.TWILIO_PHONE_NUMBER || process.env.TWILIO_FROM;

    let sid: string | null = null;
    let status: string | null = null;
    let devOtpLogged = false;

    if (TW_SID && TW_TOKEN && TW_FROM) {
      // Try to dynamically import Twilio and send SMS
      try {
        const Twilio = (await import("twilio")).default;
        const client = Twilio(TW_SID, TW_TOKEN);
        const msg = await client.messages.create({ to: phone, from: TW_FROM, body: messageText });
        sid = msg?.sid ?? null;
        status = msg?.status ?? null;
        routeLog("Twilio message created", { sid, status, to: phone });
      } catch (twErr: any) {
        routeLog("Twilio send failed:", twErr?.message ?? twErr);
        return NextResponse.json({ ok: false, error: "sms_send_failed", details: twErr?.message ?? String(twErr) }, { status: 500 });
      }
    } else {
      // Twilio not configured — dev fallback: log OTP to server console
      devOtpLogged = true;
      routeLog("Twilio not configured — dev OTP logged", { phone, id: id ?? null, code, messageText });
    }

    // Successful response
    return NextResponse.json(
      { ok: true, id: id ?? null, sid, status: status ?? (sid ? "queued" : "mocked"), devOtpLogged },
      { status: 200 }
    );
  } catch (err: any) {
    // Unexpected error — return helpful JSON and log stack
    routeLog("Unexpected handler error:", err?.message ?? err, err?.stack ?? "");
    return NextResponse.json({ ok: false, error: "internal_server_error", details: err?.message ?? String(err) }, { status: 500 });
  }
}
