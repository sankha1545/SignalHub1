// app/api/invites/finalize/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyTemp, signSession } from "@/lib/jwt";
import bcrypt from "bcrypt";


export async function POST(req: Request) {
const { tempToken, inviteId, password, name } = await req.json();
if (!tempToken || !inviteId) return NextResponse.json({ error: "missing" }, { status: 400 });


try {
const payload: any = verifyTemp(tempToken) as any;
const { email, phone, provider, providerUserId } = payload;
if (!email || !phone) return NextResponse.json({ error: "invalid_temp" }, { status: 400 });


const inv = await prisma.invite.findUnique({ where: { id: inviteId } });
if (!inv || inv.used || inv.expiresAt < new Date()) return NextResponse.json({ error: "invalid_invite" }, { status: 400 });
if (inv.email !== email) return NextResponse.json({ error: "invite_email_mismatch" }, { status: 400 });


const existing = await prisma.user.findUnique({ where: { email } });
if (existing) return NextResponse.json({ error: "email_exists" }, { status: 400 });


const hash = password ? await bcrypt.hash(password, 10) : null;
const user = await prisma.user.create({
data: {
name: name ?? null,
email,
passwordHash: hash,
provider: provider ?? "email",
providerId: providerUserId ?? null,
emailVerified: true,
phone,
phoneVerified: true,
role: inv.role,
organizationId: inv.organizationId,
},
});


await prisma.invite.update({ where: { id: inviteId }, data: { used: true } });

    return NextResponse.json({ ok: true, user: { id: user.id, email: user.email } });
  } catch (e: any) {
    return NextResponse.json({ error: "invalid_temp", detail: String(e) }, { status: 400 });
  }
}
