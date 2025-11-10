// app/api/auth/oauth/google/start/route.ts
import { NextResponse } from "next/server";
import { signTemp } from "@/lib/jwt";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const redirect = url.searchParams.get("redirect") || "/";
  const inviteId = url.searchParams.get("inviteId") || null;
  const flow = url.searchParams.get("flow") || "signup";

  const state = signTemp({ redirect, inviteId, flow }, "10m");

  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID!,
    redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/oauth/google/callback`,
    response_type: "code",
    scope: "openid email profile",
    state,
    access_type: "offline",
    prompt: "select_account",
  });

  const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  return NextResponse.redirect(googleUrl);
}
