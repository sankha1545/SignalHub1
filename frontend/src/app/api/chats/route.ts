// src/app/api/chats/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";

// ---------------- Session Resolver ----------------
async function resolveSessionUser(req: Request) {
  try {
    // 1) via your existing auth helper
    try {
      const user = await getSessionUser(req);
      if (user?.id) return user;
    } catch {}

    // 2) bearer token
    const headerAuth =
      req.headers.get("authorization") ??
      req.headers.get("Authorization");

    if (headerAuth?.toLowerCase().startsWith("bearer ")) {
      const token = headerAuth.slice(7).trim();
      if (token && JWT_SECRET) {
        const payload = jwt.verify(token, JWT_SECRET) as any;
        if (payload?.id) return payload;
      }
    }

    // 3) cookie
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get("session")?.value;
      if (token && JWT_SECRET) {
        const payload = jwt.verify(token, JWT_SECRET) as any;
        if (payload?.id) return payload;
      }
    } catch {}

    return null;
  } catch {
    return null;
  }
}

// ---------------- GET /api/chats ----------------
export async function GET(req: Request) {
  try {
    const session = await resolveSessionUser(req);
    if (!session)
      return NextResponse.json(
        { ok: false, chats: [], error: "Unauthorized" },
        { status: 401 }
      );

    const userId = String(session.id);

    // 1. Chats where user is a member
    const membership = await prisma.chatMember.findMany({
      where: { userId },
      select: { chatId: true },
    });

    const chatIds = membership.map((m) => m.chatId);

    if (chatIds.length === 0) {
      return NextResponse.json({ ok: true, chats: [] });
    }

    // 2. Fetch chats including member info
    const chats = await prisma.chat.findMany({
      where: { id: { in: chatIds } },
      include: {
        members: {
          select: {
            role: true,
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
        team: { select: { id: true, name: true } },
        createdBy: { select: { id: true, name: true } },
      },
      orderBy: { lastMessageAt: "desc" },
    });

    const normalized = chats.map((c) => ({
      id: c.id,
      name:
        c.name ||
        (c.team ? `Team: ${c.team.name}` : "Chat"),
      type: c.type,
      members: c.members.map((m) => ({
        id: m.user.id,
        name: m.user.name,
        email: m.user.email,
        role: m.role,
      })),
      teamId: c.teamId,
      createdBy: c.createdBy,
      lastMessageAt: c.lastMessageAt?.toISOString?.() ?? null,
      createdAt: c.createdAt?.toISOString?.() ?? null,
    }));

    return NextResponse.json({ ok: true, chats: normalized });
  } catch (err) {
    console.error("GET /api/chats error:", err);
    return NextResponse.json(
      { ok: false, chats: [], error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
