// src/app/api/chats/[chatId]/read/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";

/**
 * Mark chat as read for current user.
 * - Updates chatMember.meta.lastReadAt = now (merges existing meta JSON)
 * - If chatMember row doesn't exist for this user, creates it (role = user's role or EMPLOYEE)
 * - Emits socket events:
 *      - "chat:read" to chat:<chatId> and org:<orgId>
 *      - "chat:read:ack" to user:<userId>
 *
 * Response:
 *  { ok: true, chatId, userId, lastReadAt }
 */

/* -----------------------------------------------------------
   Session Resolution (simple, via getSessionUser)
----------------------------------------------------------- */
async function resolveSessionUser(req: Request) {
  try {
    if (typeof getSessionUser === "function") {
      return await getSessionUser(req);
    }
  } catch {
    // fall through
  }
  return null;
}

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

/* -----------------------------------------------------------
   POST /api/chats/[chatId]/read
----------------------------------------------------------- */
export async function POST(
  req: Request,
  ctx: { params: Promise<{ chatId?: string }> }
) {
  try {
    // App Router: ctx.params is a Promise — await it
    const params = await ctx.params;
    const chatId = params?.chatId;
    if (!chatId) return jsonError("chatId required", 400);

    const session = await resolveSessionUser(req);
    if (!session || !session.id) {
      return NextResponse.json(
        { ok: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const userId = String(session.id);

    // Ensure chat exists and get organization id
    const chat = await prisma.chat.findUnique({
      where: { id: chatId },
      select: { id: true, organizationId: true },
    });
    if (!chat) return jsonError("Chat not found", 404);

    // Ensure user belongs to same org
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, organizationId: true, role: true },
    });
    if (!user) return jsonError("User not found", 404);
    if (user.organizationId !== chat.organizationId) {
      return jsonError("Forbidden", 403);
    }

    const now = new Date();
    const nowIso = now.toISOString();

    // Upsert chatMember row and merge meta.lastReadAt
    const existing = await prisma.chatMember.findFirst({
      where: { chatId, userId },
      select: { id: true, meta: true, role: true },
    });

    if (existing) {
      const prevMeta = existing.meta ?? {};
      const newMeta = { ...prevMeta, lastReadAt: nowIso };
      await prisma.chatMember.update({
        where: { id: existing.id },
        data: { meta: newMeta },
      });
    } else {
      // create chat member (role = user's role or EMPLOYEE)
      await prisma.chatMember.create({
        data: {
          chat: { connect: { id: chatId } },
          user: { connect: { id: userId } },
          role: (user.role ?? "EMPLOYEE") as any,
          meta: { lastReadAt: nowIso },
        },
      });
    }

    // Emit socket event to chat room + org room + personal room (best-effort)
    try {
      const io =
        (global as any).io ||
        (global as any)._io ||
        (global as any).socketServer;

      if (io && typeof io.to === "function") {
        const readPayload = { chatId, userId, lastReadAt: nowIso };

        // chat room
        try {
          io.to(`chat:${chatId}`).emit("chat:read", readPayload);
        } catch {
          // fallback to global emit
          try {
            io.emit("chat:read", readPayload);
          } catch {}
        }

        // org room (admin dashboards, analytics, etc.)
        try {
          if (chat.organizationId) {
            io.to(`org:${chat.organizationId}`).emit("chat:read", readPayload);
          }
        } catch {}

        // user's personal room (other tabs / sessions)
        try {
          io.to(`user:${userId}`).emit("chat:read:ack", {
            chatId,
            lastReadAt: nowIso,
          });
        } catch {}
      }
    } catch (e) {
      console.warn("[api/chats/[chatId]/read] socket emit failed:", e);
    }

    return NextResponse.json(
      { ok: true, chatId, userId, lastReadAt: nowIso },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("[api/chats/[chatId]/read] error:", err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json(
      {
        ok: false,
        message: isDev ? String(err?.message ?? err) : "Server error",
      },
      { status: 500 }
    );
  }
}
