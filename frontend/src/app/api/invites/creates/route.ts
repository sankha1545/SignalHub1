// app/api/invites/create/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { genRandomToken, hashToken } from "@/lib/crypto";
import { sendEmail } from "@/lib/mail";

export async function POST(req: Request) {
  const { email, role, organizationId, inviterId, teamId } = await req.json();
  if (!email || !role || !organizationId || !inviterId) return NextResponse.json({ error: "missing" }, { status: 400 });

  const rawToken = genRandomToken(24);
  const tokenHash = await hashToken(rawToken);

  const invite = await prisma.invite.create({
    data: {
      token: tokenHash,
      email,
      role,
      inviterId,
      organizationId,
      teamId: teamId ?? null,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
    },
  });

  const acceptUrl = `${process.env.NEXT_PUBLIC_APP_URL}/invite/accept?token=${rawToken}&email=${encodeURIComponent(email)}`;

  // send invite email
  await sendEmail(
    email,
    `You're invited to join ${process.env.NEXT_PUBLIC_APP_NAME || "App"}`,
    `<p>You were invited as <b>${role}</b>. Click to accept: <a href="${acceptUrl}">${acceptUrl}</a></p>`
  );

  return NextResponse.json({ ok: true });
}
