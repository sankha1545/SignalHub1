// lib/mail.ts
import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST || "127.0.0.1";
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const SMTP_FROM = process.env.SMTP_FROM || "no-reply@example.com";

let transporter: nodemailer.Transporter | null = null;

function createTransporter() {
  // if no host is configured, return null so we can fallback to console logging
  if (!SMTP_HOST) return null;

  // prefer IPv4 loopback if host equals 'localhost' (to avoid ::1 resolution issues)
  const host = SMTP_HOST === "localhost" ? "127.0.0.1" : SMTP_HOST;

  const opts: any = {
    host,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // true for 465, false for other ports
  };

  if (SMTP_USER) {
    opts.auth = { user: SMTP_USER, pass: SMTP_PASS };
  }

  // Allow insecure TLS in dev (use cautiously)
  if (process.env.NODE_ENV !== "production") {
    opts.tls = { rejectUnauthorized: false };
  }

  return nodemailer.createTransport(opts);
}

transporter = createTransporter();

export async function sendEmail(to: string, subject: string, html: string, text?: string) {
  // If transporter not configured, print to console and return a fake info object
  if (!transporter) {
    console.warn("[mail] SMTP not configured — logging email to console.");
    console.log("=== EMAIL START ===");
    console.log("to:", to);
    console.log("subject:", subject);
    console.log("text:", text ?? html);
    console.log("=== EMAIL END ===");
    return { logged: true };
  }

  try {
    const info = await transporter.sendMail({
      from: SMTP_FROM,
      to,
      subject,
      text: text ?? undefined,
      html,
    });
    return info;
  } catch (err) {
    // If sending fails in dev, log the message and error (don't crash app)
    console.error("[mail] sendMail failed:", err);
    if (process.env.NODE_ENV !== "production") {
      console.log("=== EMAIL (failed) ===");
      console.log("to:", to);
      console.log("subject:", subject);
      console.log("text:", text ?? html);
      console.log("======================");
      return { error: String(err), logged: true };
    }
    throw err;
  }
}
