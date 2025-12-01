// src/app/api/chats/[chatId]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";
const DEFAULT_PAGE_SIZE = 50;

/* -----------------------------------------------------------
   Safe JSON parser
----------------------------------------------------------- */
async function safeJson(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

/* -----------------------------------------------------------
   Session Resolution
----------------------------------------------------------- */
async function resolveSessionUser(req: Request) {
  // try next-auth
  try {
    const u = await getSessionUser(req);
    if (u?.id) return u;
  } catch {}

  // bearer token
  try {
    const auth = req.headers.get("authorization") ?? req.headers.get("Authorization");
    if (auth?.toLowerCase().startsWith("bearer ")) {
      const token = auth.slice(7).trim();
      if (token && JWT_SECRET) {
        const payload = jwt.verify(token, JWT_SECRET) as any;
        if (payload?.id) return payload;
      }
    }
  } catch {}

  // cookie
  try {
    const store = await cookies();
    const token = store.get("session")?.value;
    if (token && JWT_SECRET) {
      const payload = jwt.verify(token, JWT_SECRET) as any;
      if (payload?.id) return payload;
    }
  } catch {}

  return null;
}

/* -----------------------------------------------------------
   Authorization helper (same rules as chats/route)
   - ADMIN → allowed
   - else must be chatMember OR (if team chat) teamMember
   - also must belong to same organization as chat
----------------------------------------------------------- */
async function authorizeForChat(userId: string, userRole: string | null, chatId: string) {
  if (userRole === "ADMIN") return true;

  const chat = await prisma.chat.findUnique({
    where: { id: chatId },
    select: { organizationId: true, teamId: true },
  });

  if (!chat) return false;

  // Must belong to same org
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { organizationId: true },
  });
  if (!user || user.organizationId !== chat.organizationId) return false;

  // ChatMember?
  const member = await prisma.chatMember.findFirst({
    where: { chatId, userId },
    select: { id: true },
  });
  if (member) return true;

  // TeamMember (if team chat)
  if (chat.teamId) {
    const teamMember = await prisma.teamMember.findFirst({
      where: { teamId: chat.teamId, userId },
      select: { id: true },
    });
    if (teamMember) return true;
  }

  return false;
}

/* -----------------------------------------------------------
   Mark a chat as read for a user (upsert ChatLastRead)
----------------------------------------------------------- */
async function markChatRead(chatId: string, userId: string) {
  try {
    if (!(prisma as any).chatLastRead) return;
    await (prisma as any).chatLastRead.upsert({
      where: { chatId_userId: { chatId, userId } },
      create: { chatId, userId, lastReadAt: new Date() },
      update: { lastReadAt: new Date() },
    });
  } catch (e) {
    // non-fatal
    console.warn("[chat] markChatRead failed:", e);
  }
}

/* -----------------------------------------------------------
   GET: fetch messages (with pagination)
   - also marks chat as read for the requesting user
   NOTE: ctx.params is a Promise in App Router — await it.
----------------------------------------------------------- */
export async function GET(req: Request, ctx: { params: Promise<{ chatId?: string }> }) {
  try {
    const params = await ctx.params;
    const chatId = params?.chatId;
    if (!chatId) return NextResponse.json({ ok: false, message: "chatId required" }, { status: 400 });

    const session = await resolveSessionUser(req);
    if (!session) return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });

    const userId = String(session.id);
    const allowed = await authorizeForChat(userId, session.role ?? null, chatId);
    if (!allowed) return NextResponse.json({ ok: false, message: "Forbidden" }, { status: 403 });

    // pagination
    const url = new URL(req.url);
    let limit = Number(url.searchParams.get("limit"));
    if (!limit || limit <= 0) limit = DEFAULT_PAGE_SIZE;
    if (limit > 200) limit = 200;

    const before = url.searchParams.get("before");

    const where: any = { chatId };
    if (before) {
      const date = new Date(before);
      if (!isNaN(date.getTime())) where.createdAt = { lt: date };
    }

    const rows = await prisma.chatMessage.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: limit,
      include: { sender: { select: { id: true, name: true, email: true } } },
    });

    // Reverse so the earliest message (of this page) is first
    const messages = rows
      .map((r) => ({
        id: r.id,
        chatId: r.chatId,
        content: r.content,
        metadata: r.metadata ?? null,
        externalId: r.externalId ?? null,
        createdAt: r.createdAt?.toISOString?.() ?? null,
        sender: r.sender ? { id: r.sender.id, name: r.sender.name, email: r.sender.email } : null,
      }))
      .reverse();

    // Mark chat as read for this user (best-effort, non-blocking)
    (async () => {
      await markChatRead(chatId, userId);
    })();

    return NextResponse.json({ ok: true, messages }, { status: 200 });
  } catch (err) {
    console.error("GET /api/chats/[chatId] error:", err);
    return NextResponse.json({ ok: false, message: "Internal Server Error" }, { status: 500 });
  }
}

/* -----------------------------------------------------------
   POST: create/send new message
   - enforces authorization via authorizeForChat
   - updates chat.lastMessageAt
   - upserts ChatLastRead for sender
   - emits "chat:message" to chat:<chatId> & per-user rooms
   NOTE: ctx.params is a Promise in App Router — await it.
----------------------------------------------------------- */
export async function POST(req: Request, ctx: { params: Promise<{ chatId?: string }> }) {
  try {
    const params = await ctx.params;
    const chatId = params?.chatId;
    if (!chatId) return NextResponse.json({ ok: false, message: "chatId required" }, { status: 400 });

    const session = await resolveSessionUser(req);
    if (!session) return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });

    const userId = String(session.id);
    const userRole = session.role ?? null;
    const allowed = await authorizeForChat(userId, userRole, chatId);
    if (!allowed) return NextResponse.json({ ok: false, message: "Forbidden" }, { status: 403 });

    const body = await safeJson(req);
    const content = typeof body.content === "string" ? body.content.trim() : "";
    if (!content) return NextResponse.json({ ok: false, message: "Message content required" }, { status: 400 });

    const metadata = typeof body.metadata === "object" ? body.metadata : undefined;
    const externalId = typeof body.externalId === "string" ? body.externalId : undefined;

    // Persist message and update chat metadata atomically
    const created = await prisma.$transaction(async (tx) => {
      const m = await tx.chatMessage.create({
        data: { chatId, senderId: userId, content, metadata, externalId },
        include: { sender: { select: { id: true, name: true, email: true } } },
      });

      await tx.chat.update({ where: { id: chatId }, data: { lastMessageAt: new Date() } });

      // upsert ChatLastRead for sender (so sender doesn't see their own message as unread)
      try {
        if ((prisma as any).chatLastRead) {
          await (tx as any).chatLastRead.upsert({
            where: { chatId_userId: { chatId, userId } },
            create: { chatId, userId, lastReadAt: new Date() },
            update: { lastReadAt: new Date() },
          });
        }
      } catch (e) {
        // ignore
      }

      return m;
    });

    // Build payload
    const payload = {
      chatId,
      message: {
        id: created.id,
        content: created.content,
        metadata: created.metadata ?? null,
        externalId: created.externalId ?? null,
        createdAt: created.createdAt?.toISOString?.() ?? null,
        sender: created.sender ? { id: created.sender.id, name: created.sender.name, email: created.sender.email } : null,
      },
    };

    // Broadcast via socket.io (best-effort). Use standard rooms:
    // - chat:<chatId> (room for chat)
    // - user:<userId> (personal rooms) — notify all current chat members (query required)
    (async () => {
      try {
        const io = (globalThis as any).io || (globalThis as any)._io || (globalThis as any).socketServer;
        if (!io) return;

        // emit to chat room
        if (typeof io.to === "function") {
          try {
            io.to(`chat:${chatId}`).emit("chat:message", payload);
          } catch (e) {
            // fallback
            try { io.emit("chat:message", payload); } catch {}
          }
        }

        // notify each member individually (helps deliver desktop/notification flows)
        const chatMembers = await prisma.chatMember.findMany({
          where: { chatId },
          select: { userId: true },
        });

        for (const cm of chatMembers) {
          try {
            if (typeof io.to === "function") io.to(`user:${cm.userId}`).emit("chat:message", payload);
            else if (typeof io.emit === "function") io.emit("chat:message", payload);
          } catch {}
        }

        // Also emit to org room (optional)
        try {
          const chat = await prisma.chat.findUnique({ where: { id: chatId }, select: { organizationId: true } });
          if (chat?.organizationId) {
            try {
              if (typeof io.to === "function") io.to(`org:${chat.organizationId}`).emit("chat:message", payload);
            } catch {}
          }
        } catch {}
      } catch (err) {
        console.warn("Socket broadcast failed (ignored):", err);
      }
    })();

    return NextResponse.json({ ok: true, message: payload.message }, { status: 201 });
  } catch (err) {
    console.error("POST /api/chats/[chatId] error:", err);
    return NextResponse.json({ ok: false, message: "Internal Server Error" }, { status: 500 });
  }
}
