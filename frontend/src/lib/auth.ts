// src/lib/auth.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "./prisma";
import type { NextRequest } from "next/server";

const JWT_SECRET =
  process.env.SESSION_SECRET ||
  process.env.NEXTAUTH_SECRET ||
  process.env.JWT_SECRET ||
  "dev-secret";

// Keep legacy candidates for graceful migration; prefer "session".
const COOKIE_CANDIDATES = ["session", "token", "auth_token", "authToken", "auth"];

/**
 * Sign a JWT for a user.
 * - Canonical user id claim is `id` (string). We always ensure `id` is present in the token payload.
 * - `email` and `role` are preserved when provided.
 * - expiresIn follows jsonwebtoken format ("7d", "1h", etc).
 */
export function signToken(payload: Record<string, any>, expiresIn = "7d"): string {
  // Build a safe payload that always contains 'id' as canonical user id claim.
  const finalPayload: Record<string, any> = {};

  // Prefer explicit id/userId/sub from provided payload
  const providedId =
    payload?.id ?? payload?.userId ?? payload?.sub ?? payload?.uid ?? null;

  if (providedId) finalPayload.id = String(providedId);

  if (payload?.email) finalPayload.email = payload.email;
  if (payload?.role) finalPayload.role = payload.role;

  // Copy any other non-sensitive claims you intentionally want (none by default).
  // Sign and return
  return jwt.sign(finalPayload, JWT_SECRET, { expiresIn });
}

/** Verify token and return payload or null if invalid/expired. */
export function verifyToken(token: string): any | null {
  try {
    return jwt.verify(token, JWT_SECRET) as any;
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[auth] verifyToken failed:", (err as Error)?.message ?? err);
    }
    return null;
  }
}

/* -------------------------- Password utilities --------------------------- */

/** Hash a plain password (bcrypt). */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS ?? 10);
  return bcrypt.hash(password, saltRounds);
}

/** Verify a password against a bcrypt hash. */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  try {
    return bcrypt.compare(password, hash);
  } catch (err) {
    if (process.env.NODE_ENV !== "production") console.error("[auth] verifyPassword error:", err);
    return false;
  }
}

/* --------------------------- Session utilities --------------------------- */

/**
 * Read token from Authorization header (Bearer) or a list of well-known cookies.
 * Returns a user object { id, email, name, role } fetched from DB, or null.
 *
 * Accepts a NextRequest (as used in Next.js route handlers / middleware).
 *
 * NOTE: This prefers the canonical `id` claim. It will also accept `sub`, `userId`, or `uid`
 * as fallbacks to remain compatible with older tokens during migration.
 */
export async function getUserFromRequest(req: NextRequest) {
  try {
    // 1) Authorization header (Bearer)
    const authHeader = req.headers.get("authorization");
    if (authHeader?.startsWith("Bearer ")) {
      const token = authHeader.slice(7).trim();
      const payload = verifyToken(token);
      if (payload) {
        // Prefer canonical id, fallback to sub/userId/uid
        const userId = payload.id ?? payload.sub ?? payload.userId ?? payload.uid;
        if (userId) {
          const user = await prisma.user.findUnique({
            where: { id: String(userId) },
            select: { id: true, email: true, name: true, role: true },
          });
          if (user) return user;
        }
      } else if (process.env.NODE_ENV !== "production") {
        console.debug("[auth] bearer token present but failed verification");
      }
    }

    // 2) Cookies
    // Try the candidate cookie names in order and return the first user matched.
    for (const name of COOKIE_CANDIDATES) {
      try {
        // NextRequest exposes cookies via req.cookies.get(name)
        const cookie = req.cookies.get(name);
        if (!cookie) {
          if (process.env.NODE_ENV !== "production") console.debug(`[auth] cookie probe: ${name} => <missing>`);
          continue;
        }

        const token = cookie.value;
        if (!token) continue;

        const payload = verifyToken(token);
        if (!payload) {
          if (process.env.NODE_ENV !== "production") console.debug(`[auth] cookie ${name} token failed verify/expired`);
          continue;
        }

        // Prefer id, fall back to sub/userId/uid for migrated tokens
        const userId = payload.id ?? payload.sub ?? payload.userId ?? payload.uid;
        if (!userId) {
          if (process.env.NODE_ENV !== "production") console.debug(`[auth] cookie ${name} token missing id/sub/userId/uid`);
          continue;
        }

        const user = await prisma.user.findUnique({
          where: { id: String(userId) },
          select: { id: true, email: true, name: true, role: true },
        });

        if (user) {
          if (process.env.NODE_ENV !== "production") console.debug(`[auth] cookie ${name} matched user id ${user.id}`);
          return user;
        } else {
          if (process.env.NODE_ENV !== "production") console.debug(`[auth] cookie ${name} decoded id ${userId} not found`);
        }
      } catch (err) {
        // Some runtimes may throw on req.cookies access — continue to next candidate
        if (process.env.NODE_ENV !== "production") console.debug(`[auth] cookie probe error for ${name}:`, err);
      }
    }

    // nothing matched
    return null;
  } catch (err) {
    console.error("[auth] getUserFromRequest error:", err);
    return null;
  }
}

/**
 * Require authenticated user and optional allowedRoles list.
 * Throws a Next.js Response if unauthorized/forbidden so it can be used in route handlers:
 *
 *   const user = await requireRole(req, ["ADMIN"]);
 */
export async function requireRole(req: NextRequest, allowedRoles: string[] = []) {
  const user = await getUserFromRequest(req);
  if (!user) throw new Response("Unauthorized", { status: 401 });
  if (allowedRoles.length && !allowedRoles.includes(user.role)) {
    throw new Response("Forbidden", { status: 403 });
  }
  return user;
}
