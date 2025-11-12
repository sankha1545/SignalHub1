// src/app/api/invites/creates/route.ts
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

/**
 * DEV NOTE:
 * - This file explicitly loads dotenv from the project root so the route can pick up .env during development.
 * - In many setups Next loads env automatically on boot; explicit loading is a safe fallback for dev.
 * - Remove or keep depending on your environment strategy.
 */

// load .env from project root if present (dev fallback)
const envPath = path.join(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
  console.log("[invites/creates] Loaded .env from", envPath);
} else {
  console.log("[invites/creates] .env not found at", envPath, " — relying on process.env");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Helper to create a transporter with sensible defaults.
 * Uses SMTP_* env vars (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM).
 * Keeps logs minimal and never prints secrets.
 */
function createTransporter() {
  // read SMTP env vars; keep names consistent with what you showed me
  const host = process.env.SMTP_HOST || "127.0.0.1";
  const port = Number(process.env.SMTP_PORT || 25);
  // determine secure: true for port 465 or when explicitly set
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";

  // tls reject config: allow overriding in dev for self-signed certs
  const rejectUnauthorized = process.env.SMTP_TLS_REJECT !== "false";

  console.log("[invites/creates] SMTP config:", {
    host,
    port,
    secure,
    authProvided: !!user,
  });

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user ? { user, pass } : undefined,
    // For STARTTLS (port 587) nodemailer will upgrade automatically when secure === false
    tls: {
      rejectUnauthorized,
    },
  });

  return transporter;
}

export async function POST(req: Request) {
  try {
    // parse body
    const body = await req.json().catch(() => ({}));
    const email = (body?.email || "").toString().trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, message: "Invalid email address" }, { status: 400 });
    }

    // generate token + expiry
    const token = crypto.randomBytes(24).toString("hex");
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // build invite link (ensure you set NEXT_PUBLIC_APP_URL in .env)
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const inviteLink = `${appUrl.replace(/\/$/, "")}/invite/accept?token=${token}`;

    // create transporter & verify SMTP connection
    const transporter = createTransporter();

    try {
      await transporter.verify();
      console.log("[invites/creates] SMTP verify OK");
    } catch (verifyErr: any) {
      console.error("[invites/creates] SMTP verify failed:", verifyErr && (verifyErr.message || verifyErr));
      return NextResponse.json(
        { ok: false, message: `SMTP connection failed: ${verifyErr?.message || "check server logs"}` },
        { status: 500 }
      );
    }

    // (Optional) Persist invite token to DB here (see Prisma example in original file)

    // prepare mail
    // prefer explicit INVITE_FROM if present, otherwise fall back to SMTP_FROM, then to a safe default
    const fromAddress =
      process.env.INVITE_FROM || process.env.SMTP_FROM || `"SignalHub" <no-reply@yourdomain.com>`;

    const mailOptions = {
      from: fromAddress,
      to: email,
      subject: "You're invited to join as a manager — SignalHub",
      html: `
        <div style="font-family: Inter, Arial, sans-serif; color:#0f172a;">
          <h2>You're invited to join SignalHub</h2>
          <p>Hello,</p>
          <p>You were invited to join as a <strong>manager</strong>. Click the link below to accept the invitation and complete your account setup.</p>
          <p style="margin: 18px 0;">
            <a href="${inviteLink}" style="display:inline-block;padding:10px 14px;background:#0f172a;color:#fff;border-radius:8px;text-decoration:none;">Accept invitation</a>
          </p>
          <p>This link will expire on <strong>${expiresAt.toUTCString()}</strong> (24 hours).</p>
          <p>If you didn't request this, you can ignore this email.</p>
          <hr />
          <p style="font-size:12px;color:#6b7280">Sent by SignalHub</p>
        </div>
      `,
    };

    // send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(
        "[invites/creates] sendMail info:",
        {
          messageId: info?.messageId,
          accepted: Array.isArray(info?.accepted) ? info.accepted.length : info?.accepted || 0,
          rejected: Array.isArray(info?.rejected) ? info.rejected.length : info?.rejected || 0,
        }
      );
    } catch (sendErr: any) {
      console.error("[invites/creates] sendMail error:", sendErr);
      const safeMsg = sendErr?.response || sendErr?.message || "Failed to send email";
      return NextResponse.json({ ok: false, message: `Can't send mail: ${safeMsg}` }, { status: 500 });
    }

    // All good — return invite token/expiry (for debugging; remove token in production)
    return NextResponse.json({
      ok: true,
      message: "Invite sent",
      token,
      expiresAt: expiresAt.toISOString(),
    });
  } catch (err: any) {
    console.error("[invites/creates] Fatal error:", err);
    return NextResponse.json({ ok: false, message: err?.message || "Server error" }, { status: 500 });
  }
}
