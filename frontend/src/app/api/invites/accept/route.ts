// app/api/invites/accept/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyHash } from "@/lib/crypto";

export async function POST(req: Request) {
  const { token, email } = await req.json();
  if (!token || !email) return NextResponse.json({ error: "missing" }, { status: 400 });

  // find invite by email + not used + not expired
  const invites = await prisma.invite.findMany({
    where: { email, used: false, expiresAt: { gt: new Date() } },
    orderBy: { createdAt: "desc" },
  });

  if (!invites || invites.length === 0) return NextResponse.json({ error: "invite_not_found" }, { status: 404 });

  // find matching hashed token
  let matched = null;
  for (const inv of invites) {
    const ok = await verifyHash(token, inv.token);
    if (ok) {
      matched = inv;
      break;
    }
  }
  if (!matched) return NextResponse.json({ error: "invalid_token" }, { status: 400 });

  // return invite metadata to client so client can continue (choose OAuth or email OTP)
  return NextResponse.json({ ok: true, invite: { id: matched.id, role: matched.role, organizationId: matched.organizationId, teamId: matched.teamId, email: matched.email } });
}
