// src/lib/jwt.ts
import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;
if (!SECRET) {
  if (process.env.NODE_ENV === "production") {
    throw new Error("JWT_SECRET environment variable must be set in production!");
  } else {
    console.warn("[JWT] Using fallback secret for development");
  }
}

/**
 * 🔐 Create a short-lived temp token (email/phone verification)
 */
export function signTemp(payload: Record<string, any>, expiresIn: string = "15m"): string {
  const safePayload = { ...payload };
  delete safePayload.exp;
  return jwt.sign(safePayload, SECRET!, { expiresIn });
}

/**
 * ✅ Verify short-lived temp tokens
 * Returns payload object or null if invalid/expired
 */
export function verifyTemp(token: string): Record<string, any> | null {
  try {
    return jwt.verify(token, SECRET!) as Record<string, any>;
  } catch (err) {
    console.warn("[JWT] verifyTemp failed:", (err as Error).message);
    return null;
  }
}

/**
 * 💾 Create a long-lived session token for logged-in users
 */
export function signSession(payload: Record<string, any>, expiresIn: string = "7d"): string {
  const safePayload = { ...payload };
  delete safePayload.exp;
  return jwt.sign(safePayload, SECRET!, { expiresIn });
}

/**
 * 🔎 Verify a session token
 * Returns payload object or null if invalid/expired
 */
export function verifySession(token: string): Record<string, any> | null {
  try {
    return jwt.verify(token, SECRET!) as Record<string, any>;
  } catch (err) {
    console.warn("[JWT] verifySession failed:", (err as Error).message);
    return null;
  }
}
