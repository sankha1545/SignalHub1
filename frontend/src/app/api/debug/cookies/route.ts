// src/app/api/debug/cookies/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({
    cookieHeader: req.headers.get("cookie") || null,
    env: {
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    },
  });
}
