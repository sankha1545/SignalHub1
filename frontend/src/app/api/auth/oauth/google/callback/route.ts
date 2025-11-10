// app/api/auth/oauth/google/callback/route.ts
import { NextResponse } from "next/server";
import fetch from "node-fetch";
import { prisma } from "@/lib/prisma";
import { verifyTemp, signTemp, signSession } from "@/lib/jwt";

export async function GET(req: Request) {
const url = new URL(req.url);
const code = url.searchParams.get("code");
const state = url.searchParams.get("state");
if (!code || !state) return NextResponse.json({ error: "missing" }, { status: 400 });


// decode state
let statePayload: any;
try {
statePayload = verifyTemp(state) as any;
} catch (e) {
return NextResponse.json({ error: "invalid_state" }, { status: 400 });
}


// exchange code for tokens
const tokenRe= await fetch("https://oauth2.googleapis.com/token", {
method: "POST",
headers: { "content-type": "application/x-www-form-urlencoded" },
body: new URLSearchParams({
code,
client_id: process.env.GOOGLE_CLIENT_ID!,
client_secret: process.env.GOOGLE_CLIENT_SECRET!,
redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/oauth/google/callback`,
grant_type: "authorization_code",
}),
});

const tokenJson = await tokenRes.json();
if (!tokenJson.access_token) return NextResponse.json({ error: "token_exchange_failed", detail: tokenJson }, { status: 400 });


// fetch userinfo
const profileRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
headers: { Authorization: `Bearer ${tokenJson.access_token}` },
});
const profile = await profileRes.json();
const email = profile.email;
const googleSub = profile.sub;
const name = profile.name;


// check if an existing OAuth Account exists
const account = await prisma.account.findUnique({
where: { provider_providerAccountId: { provider: "google", providerAccountId: googleSub } },
include: { user: true },
});


// Helper to build cookie header
function buildSessionCookie(token: string, days = 7) {
const maxAge = days * 24 * 60 * 60;
const isProd = process.env.NODE_ENV === "production";
const parts = [
`session=${token}`,
`Path=/`,
`Max-Age=${maxAge}`,
`HttpOnly`,
`SameSite=Lax`,
];
if (isProd) parts.push("Secure");
return parts.join("; ");
}


if (account?.user) {
// existing user -> if phoneVerified true, login
if (account.user.phoneVerified) {
const sessionToken = signSession({ userId: account.user.id }, "7d");
const redirectTo = statePayload.redirect || "/";
const cookie = buildSessionCookie(sessionToken, 7);
return NextResponse.redirect(redirectTo, { headers: { "Set-Cookie": cookie } });
} else {
// user exists but phone not verified -> need phone verification step
const temp = signTemp({ provider: "google", providerUserId: googleSub, email, name }, "15m");
const redirectTo = `${process.env.NEXT_PUBLIC_APP_URL}/auth/verify-phone?tempToken=${encodeURIComponent(temp)}&flow=login`;
return NextResponse.redirect(redirectTo);
}
}
// no account found: if user with same email exists, link account to that user
const existingUser = await prisma.user.findUnique({ where: { email } });
if (existingUser) {
await prisma.account.create({
data: { userId: existingUser.id, provider: "google", providerAccountId: googleSub, email },
});
if (existingUser.phoneVerified) {
const sessionToken = signSession({ userId: existingUser.id }, "7d");
const redirectTo = statePayload.redirect || "/";
const cookie = buildSessionCookie(sessionToken, 7);
return NextResponse.redirect(redirectTo, { headers: { "Set-Cookie": cookie } });
}
const temp = signTemp({ provider: "google", providerUserId: googleSub, email, name }, "15m");
return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/auth/verify-phone?tempToken=${encodeURIComponent(temp)}&flow=login`);
}


// brand new user -> create a temp token to proceed to phone verification + optional inviteId
const tmpPayload: any = { provider: "google", providerUserId: googleSub, email, name };
if (statePayload?.inviteId) tmpPayload.inviteId = statePayload.inviteId;
const temp = signTemp(tmpPayload, "15m");
return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/auth/verify-phone?tempToken=${encodeURIComponent(temp)}&flow=signup`);
}