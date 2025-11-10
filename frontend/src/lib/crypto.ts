// lib/crypto.ts
import crypto from "crypto";
import bcrypt from "bcrypt";

export function genRandomToken(bytes = 32) {
  return crypto.randomBytes(bytes).toString("hex");
}

export async function hashToken(token: string) {
  const saltRounds = 10;
  return bcrypt.hash(token, saltRounds);
}

export async function verifyHash(token: string, hash: string) {
  return bcrypt.compare(token, hash);
}
