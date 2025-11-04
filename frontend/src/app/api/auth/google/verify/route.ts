// app/api/auth/google/verify/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { OAuth2Client } from "google-auth-library";
import { prisma } from "@/lib/prisma";
import { signToken } from "@/lib/auth";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

/**
 * Verify a Google ID token and return its payload.
 */
async function verifyIdToken(idToken: string) {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  return ticket.getPayload();
}

/** Helper: set session cookie in a NextResponse with env-aware attributes */
function setSessionCookie(res: NextResponse, token: string) {
  const isProd = process.env.NODE_ENV === "production";
  const sameSite = isProd ? "none" : "lax";
  const secure = isProd;
  const value = encodeURIComponent(token);

  try {
    // Preferred API
    res.cookies.set({
      name: "session",
      value,
      httpOnly: true,
      secure,
      sameSite: sameSite as "lax" | "none" | "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  } catch {
    // Fallback for runtimes that don't accept object signature
    const cookieParts = [
      `session=${value}`,
      "Path=/",
      `Max-Age=${60 * 60 * 24 * 7}`,
      "HttpOnly",
      isProd ? "SameSite=None" : "SameSite=Lax",
      secure ? "Secure" : "",
    ].filter(Boolean);
    res.headers.set("Set-Cookie", cookieParts.join("; "));
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const idToken = body?.idToken;
    if (!idToken) {
      return NextResponse.json({ error: "Missing idToken" }, { status: 400 });
    }

    const payload = await verifyIdToken(idToken);
    if (!payload || !payload.email) {
      console.error("google verify: id token missing email/payload", payload);
      return NextResponse.json({ error: "Failed to verify id token" }, { status: 401 });
    }

    const email = String(payload.email).trim().toLowerCase();
    const name = (payload.name as string) ?? undefined;
    const sub = payload.sub as string; // Google user id

    // Upsert user (preserve existing user if email exists)
    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name,
          provider: "google",
          googleSub: sub,
          emailVerified: true,
          role: "VIEWER",
        },
      });
    } else {
      // Update non-null fields if they changed (optional)
      const updates: any = {};
      if (name && name !== user.name) updates.name = name;
      if (Object.keys(updates).length) {
        try {
          await prisma.user.update({ where: { id: user.id }, data: updates });
        } catch (e) {
          console.error("google verify: failed to update user:", e);
        }
      }
    }

    // Create a session token using central signToken helper so verification later is consistent
    // Use canonical id claim (signToken will copy id => sub internally if necessary)
    const token = signToken({ id: user.id, email: user.email, role: user.role ?? "VIEWER" }, "7d");

    const res = NextResponse.json({ ok: true, message: "Logged in", user: { id: user.id, email: user.email, name: user.name } });

    // Set session cookie
    setSessionCookie(res, token);

    return res;
  } catch (err: any) {
    console.error("google verify error", err);
    return NextResponse.json({ error: err?.message ?? "Server error" }, { status: 500 });
  }
}
