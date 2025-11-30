// src/app/api/chats/[chatId]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

/**
 * Route for chat message history and posting messages.
 *
 * GET  /api/chats/:chatId    -> { ok: true, messages: [...] }
 * POST /api/chats/:chatId    -> { ok: true, message: { ... } }
 *
 * Authorization:
 * - the requester must be a ChatMember (chatMember row) OR have Role = ADMIN.
 *
 * Broadcasting:
 * - If a Socket.IO server is attached to globalThis.io, this attempts to emit
 *   an event `chat:message` to the room with the chat id. This is optional and
 *   non-fatal if absent.
 */

const JWT_SECRET = process.env.JWT_SECRET || "";
const DEFAULT_PAGE_SIZE = 50;

/** Safe JSON parse */
async function safeJson(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

/** session resolver (same strategy used elsewhere) */
async function resolveSessionUser(req: Request) {
  try {
    // 1) helper
    try {
      const s = await getSessionUser(req);
      if (s && s.id) return s;
    } catch (err) {
      // ignore and fallback
    }

    // 2) Authorization header
    try {
      const headerAuth = (req.headers.get("authorization") ?? req.headers.get("Authorization")) as string | null;
      if (headerAuth?.toLowerCase().startsWith("bearer ")) {
        const token = headerAuth.slice(7).trim();
        if (JWT_SECRET && token) {
          const payload = jwt.verify(token, JWT_SECRET) as any;
          if (payload?.id) {
            return {
              id: payload.id,
              name: payload.name ?? null,
              email: payload.email ?? null,
              role: payload.role ?? null,
              organizationId: payload.organizationId ?? null,
            };
          }
        }
      }
    } catch (err) {
      // ignore
    }

    // 3) cookie fallback
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get("session")?.value;
      if (token && JWT_SECRET) {
        const payload = jwt.verify(token, JWT_SECRET) as any;
        if (payload?.id) {
          return {
            id: payload.id,
            name: payload.name ?? null,
            email: payload.email ?? null,
            role: payload.role ?? null,
            organizationId: payload.organizationId ?? null,
          };
        }
      }
    } catch (err) {
      // ignore
    }

    return null;
  } catch (err) {
    console.error("[resolveSessionUser] unexpected error:", err);
    return null;
  }
}

/** Helper: check if user is allowed to access chat (member or admin) */
async function authorizeForChat(userId: string, userRole: string | null, chatId: string) {
  // Admin bypass
  if (userRole === "ADMIN") return true;

  // Check membership in chatMember
  const member = await prisma.chatMember.findFirst({
    where: { chatId, userId },
    select: { id: true },
  });
  if (member) return true;

  // As a last resort: allow if chat is linked to team and user is a TeamMember of that team
  const chat = await prisma.chat.findUnique({
    where: { id: chatId },
    select: { teamId: true },
  });
  if (chat?.teamId) {
    const teamMember = await prisma.teamMember.findFirst({
      where: { teamId: chat.teamId, userId },
      select: { id: true },
    });
    if (teamMember) return true;
  }

  return false;
}

/** GET handler — returns last N messages for a chat */
export async function GET(req: Request, { params }: { params: { chatId: string } }) {
  try {
    const { chatId } = params;
    if (!chatId) return NextResponse.json({ ok: false, message: "chatId required" }, { status: 400 });

    const sessionUser = await resolveSessionUser(req);
    if (!sessionUser) return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });

    // authorize
    const allowed = await authorizeForChat(String(sessionUser.id), sessionUser.role ?? null, chatId);
    if (!allowed) return NextResponse.json({ ok: false, message: "Forbidden" }, { status: 403 });

    // pagination (optional query params ?limit=50&before=<iso>)
    const url = new URL(req.url);
    const limit = Math.min(Number(url.searchParams.get("limit") ?? DEFAULT_PAGE_SIZE), 200) || DEFAULT_PAGE_SIZE;
    const before = url.searchParams.get("before") ?? undefined;

    // load messages (newest first, then reverse to return ascending)
    const where: any = { chatId };
    if (before) where.createdAt = { lt: new Date(before) };

    const rows = await prisma.chatMessage.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: limit,
      include: {
        sender: { select: { id: true, name: true, email: true } },
      },
    });

    // return ascending (oldest -> newest)
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

    return NextResponse.json({ ok: true, messages }, { status: 200 });
  } catch (err: any) {
    console.error("GET /api/chats/[chatId] error:", err);
    return NextResponse.json({ ok: false, message: "Internal server error" }, { status: 500 });
  }
}

/** POST handler — create new chat message */
export async function POST(req: Request, { params }: { params: { chatId: string } }) {
  try {
    const { chatId } = params;
    if (!chatId) return NextResponse.json({ ok: false, message: "chatId required" }, { status: 400 });

    const sessionUser = await resolveSessionUser(req);
    if (!sessionUser) return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });

    // authorize
    const allowed = await authorizeForChat(String(sessionUser.id), sessionUser.role ?? null, chatId);
    if (!allowed) return NextResponse.json({ ok: false, message: "Forbidden" }, { status: 403 });

    const body = await safeJson(req);
    const content = typeof body.content === "string" ? body.content.trim() : "";
    const metadata = typeof body.metadata === "object" ? body.metadata : undefined;
    if (!content) return NextResponse.json({ ok: false, message: "Message content required" }, { status: 400 });

    // Persist message and update chat.lastMessageAt in a transaction
    const created = await prisma.$transaction(async (tx) => {
      const msg = await tx.chatMessage.create({
        data: {
          chat: { connect: { id: chatId } },
          sender: { connect: { id: String(sessionUser.id) } },
          content,
          metadata: metadata ?? undefined,
        },
        include: {
          sender: { select: { id: true, name: true, email: true } },
        },
      });

      await tx.chat.update({
        where: { id: chatId },
        data: { lastMessageAt: new Date() },
      });

      return msg;
    });

    // Try broadcasting via Socket.IO if available on globalThis (non-fatal)
    try {
      // Many dev setups attach io to globalThis or (global as any).io
      // Adapt as needed to your socket server integration.
      const maybeIo = (globalThis as any).io ?? (global as any).io ?? null;
      if (maybeIo && typeof maybeIo.to === "function" && typeof maybeIo.emit === "function") {
        // emit to room named with chatId
        maybeIo.to(chatId).emit("chat:message", {
          chatId,
          message: {
            id: created.id,
            content: created.content,
            metadata: created.metadata ?? null,
            externalId: created.externalId ?? null,
            createdAt: created.createdAt?.toISOString?.() ?? null,
            sender: created.sender ? { id: created.sender.id, name: created.sender.name, email: created.sender.email } : null,
          },
        });
      }
    } catch (emitErr) {
      console.warn("Socket emit failed (non-fatal):", emitErr);
    }

    // Normalize return
    const result = {
      id: created.id,
      chatId: created.chatId,
      content: created.content,
      metadata: created.metadata ?? null,
      externalId: created.externalId ?? null,
      createdAt: created.createdAt?.toISOString?.() ?? null,
      sender: created.sender ? { id: created.sender.id, name: created.sender.name, email: created.sender.email } : null,
    };

    return NextResponse.json({ ok: true, message: result }, { status: 201 });
  } catch (err: any) {
    console.error("POST /api/chats/[chatId] error:", err);
    return NextResponse.json({ ok: false, message: "Internal server error" }, { status: 500 });
  }
}
