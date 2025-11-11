// src/app/api/auth/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  // Create a response and clear the auth cookie by setting Max-Age=0
  const res = NextResponse.json({ ok: true });
  // Replace 'session' with your cookie name. Use same Path/Domain/Secure flags as when you set it.
  res.cookies.set({
    name: "session",
    value: "",
    // expire immediately
    maxAge: 0,
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    // secure: true // enable in prod with HTTPS
  });
  return res;
}
