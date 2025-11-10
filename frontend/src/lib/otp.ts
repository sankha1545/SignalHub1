// lib/otp.ts
import { genRandomToken, hashToken, verifyHash } from "./crypto";
import { prisma } from "./prisma";

function generate6Digit() {
  return (Math.floor(Math.random() * 900000) + 100000).toString();
}

export async function createEmailOtp(email: string) {
  const code = generate6Digit();
  const hash = await hashToken(code);
  const rec = await prisma.emailOtp.create({
    data: { email, otp: hash, verified: false },
  });
  return { id: rec.id, code }; // return raw code for sending
}

export async function verifyEmailOtp(email: string, code: string) {
  const rec = await prisma.emailOtp.findFirst({
    where: { email },
    orderBy: { createdAt: "desc" },
  });
  if (!rec) return false;
  const ok = await verifyHash(code, rec.otp);
  if (!ok) return false;
  await prisma.emailOtp.update({ where: { id: rec.id }, data: { verified: true } });
  return true;
}


// Phone OTP
export async function createPhoneOtp(phone: string) {
  const code = generate6Digit();
  const hash = await hashToken(code);
  const rec = await prisma.phoneOtp.create({
    data: { phone, otp: hash, used: false, attempts: 0 },
  });
  return { id: rec.id, code };
}

export async function verifyPhoneOtp(phone: string, code: string) {
  const rec = await prisma.phoneOtp.findFirst({
    where: { phone },
    orderBy: { createdAt: "desc" },
  });
  if (!rec) return { ok: false, reason: "no-otp" };
  const ok = await verifyHash(code, rec.otp);
  if (!ok) {
    await prisma.phoneOtp.update({ where: { id: rec.id }, data: { attempts: { increment: 1 } } });
    return { ok: false, reason: "wrong-code" };
  }
  await prisma.phoneOtp.update({ where: { id: rec.id }, data: { used: true } });
  return { ok: true };
}
