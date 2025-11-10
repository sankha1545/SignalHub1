import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest } from "@/lib/rbac";

export async function GET(req: Request) {
  const user = await getUserFromRequest(req);

  const messages = await prisma.message.findMany({
    where: {
      OR: [
        { senderId: user.id },
        { recipientId: user.id },
      ],
    },
    include: { sender: true, recipient: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ ok: true, messages });
}

export async function POST(req: Request) {
  const user = await getUserFromRequest(req);
  const { recipientId, content, channel } = await req.json();

  const message = await prisma.message.create({
    data: {
      senderId: user.id,
      recipientId,
      content,
      channel: channel || "IN_APP",
    },
  });

  return NextResponse.json({ ok: true, message });
}
