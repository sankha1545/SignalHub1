import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 25),
  secure: false, // hMailServer usually uses unsecured SMTP on 25; change if TLS
  auth: process.env.SMTP_USER
    ? {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    : undefined,
});

// simple send
export async function sendOTPEmail(to: string, code: string) {
  const html = `
    <div style="font-family: sans-serif; line-height: 1.5;">
      <h2>Your OTP Code</h2>
      <p>Use the following 6-digit code to complete your signup:</p>
      <p style="font-size: 1.5rem; letter-spacing: 6px;"><strong>${code}</strong></p>
      <p>This code expires in 60 seconds.</p>
    </div>
  `;

  await transporter.sendMail({
    from: '"UnifyReach" <no-reply@unifyreach.local>',
    to,
    subject: "Your UnifyReach OTP code",
    html,
  });
}
