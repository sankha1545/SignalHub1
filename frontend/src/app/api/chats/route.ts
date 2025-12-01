// src/app/api/chats/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";

/* -------------------------------------------------------
   Helpers
------------------------------------------------------- */

async function safeJson(req: Request) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

/**
 * Resolve logged-in user from:
 * 1. next-auth helper
 * 2. Authorization header
 * 3. Session cookie
 */
async function resolveSessionUser(req: Request) {
  // #1 next-auth
  try {
    const u = await getSessionUser(req);
    if (u?.id) return u;
  } catch {}

  // #2 bearer
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

  // #3 cookie
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

/**
 * Authorize that user can access a team.
 * ADMIN → always pass
 * Manager or Member of team → pass
 */
async function authorizeTeamAccess(userId: string, userRole: string | null, teamId: string) {
  if (userRole === "ADMIN") return true;

  const team = await prisma.team.findUnique({
    where: { id: teamId },
    select: { managerId: true },
  });

  if (!team) return false;

  // Is manager?
  if (team.managerId === userId) return true;

  // Is team member?
  const member = await prisma.teamMember.findFirst({
    where: { teamId, userId },
    select: { id: true },
  });

  return !!member;
}

/**
 * Normalize a chat for frontend use
 * Hides admin ChatMember rows when chat.type is TEAM so admin does not appear in the member list.
 */
function normalizeChat(chat: any) {
  const isTeam = String(chat.type).toUpperCase() === "TEAM";
  return {
    id: chat.id,
    name: chat.name ?? (chat.team ? `Team: ${chat.team.name}` : "Chat"),
    type: chat.type,
    teamId: chat.teamId ?? null,
    createdBy: chat.createdBy ? { id: chat.createdBy.id, name: chat.createdBy.name } : null,
    members:
      (chat.members ?? [])
        .filter((m: any) => {
          // For team chats, do not expose ChatMember rows with role ADMIN (these are implicit admin access)
          if (isTeam && String(m.role).toUpperCase() === "ADMIN") return false;
          return !!(m.user && m.user.id);
        })
        .map((m: any) => ({
          id: m.user.id,
          name: m.user.name,
          email: m.user.email,
          role: m.role,
        })) ?? [],
    lastMessageAt: chat.lastMessageAt?.toISOString?.() ?? null,
    createdAt: chat.createdAt?.toISOString?.() ?? null,
  };
}

/* -------------------------------------------------------
   GET /api/chats
   - Without query → get all chats user is a member of (or org/team chats for admin)
   - With ?teamId= → get team chat (0 or 1)
------------------------------------------------------- */

export async function GET(req: Request) {
  try {
    const session = await resolveSessionUser(req);
    if (!session) {
      return NextResponse.json({ ok: false, error: "Unauthorized", chats: [] }, { status: 401 });
    }

    const userId = String(session.id);
    const userRole = session.role ?? null;
    const orgId = session.organizationId ?? null;

    const url = new URL(req.url);
    const teamId = url.searchParams.get("teamId");

    /* ----------------------------------------------
       TEAM CHAT MODE
    ---------------------------------------------- */
    if (teamId) {
      const chat = await prisma.chat.findFirst({
        where: { teamId },
        include: {
          members: {
            include: {
              user: { select: { id: true, name: true, email: true } },
            },
          },
          team: { select: { id: true, name: true } },
          createdBy: { select: { id: true, name: true } },
        },
      });

      // If not found, return null
      if (!chat) {
        return NextResponse.json({ ok: true, chat: null }, { status: 200 });
      }

      // Authorization: admins can view; others must be team members or manager
      const allowed = (userRole === "ADMIN") || (await authorizeTeamAccess(userId, userRole, teamId));
      if (!allowed) {
        return NextResponse.json({ ok: false, error: "Forbidden", chat: null }, { status: 403 });
      }

      return NextResponse.json({ ok: true, chat: normalizeChat(chat) }, { status: 200 });
    }

    /* ----------------------------------------------
       ALL CHATS FOR THIS USER
    ---------------------------------------------- */

    if (userRole === "ADMIN") {
      // Admin: return all TEAM chats in org + any DIRECT/PRIVATE chats where admin is a member
      if (!orgId) {
        return NextResponse.json({ ok: true, chats: [] }, { status: 200 });
      }

      // fetch team chats in org
      const teamChats = await prisma.chat.findMany({
        where: { organizationId: orgId, type: "TEAM" },
        include: {
          members: { include: { user: { select: { id: true, name: true, email: true } } } },
          team: { select: { id: true, name: true } },
          createdBy: { select: { id: true, name: true } },
        },
        orderBy: { lastMessageAt: "desc" },
      });

      // fetch direct/private chats where admin is a member
      const directMembership = await prisma.chatMember.findMany({ where: { userId }, select: { chatId: true } });
      const directChatIds = directMembership.map((m) => m.chatId);

      const directChats = directChatIds.length > 0
        ? await prisma.chat.findMany({
            where: { id: { in: directChatIds } },
            include: {
              members: { include: { user: { select: { id: true, name: true, email: true } } } },
              team: { select: { id: true, name: true } },
              createdBy: { select: { id: true, name: true } },
            },
            orderBy: { lastMessageAt: "desc" },
          })
        : [];

      // merge and normalize (teamChats first)
      const merged = [...teamChats, ...directChats].map(normalizeChat);

      // dedupe by id (teamChats + direct could overlap in edge cases)
      const byId = new Map<string, any>();
      for (const c of merged) byId.set(c.id, c);

      return NextResponse.json({ ok: true, chats: Array.from(byId.values()) }, { status: 200 });
    } else {
      // Non-admin: list chats where the user is a ChatMember
      const membership = await prisma.chatMember.findMany({ where: { userId }, select: { chatId: true } });

      if (membership.length === 0) {
        return NextResponse.json({ ok: true, chats: [] }, { status: 200 });
      }

      const chatIds = membership.map((m) => m.chatId);

      const chats = await prisma.chat.findMany({
        where: { id: { in: chatIds } },
        include: {
          members: { include: { user: { select: { id: true, name: true, email: true } } } },
          team: { select: { id: true, name: true } },
          createdBy: { select: { id: true, name: true } },
        },
        orderBy: { lastMessageAt: "desc" },
      });

      return NextResponse.json({ ok: true, chats: chats.map(normalizeChat) }, { status: 200 });
    }
  } catch (err) {
    console.error("GET /api/chats error:", err);
    return NextResponse.json({ ok: false, error: "Internal Server Error" }, { status: 500 });
  }
}

/* -------------------------------------------------------
   POST /api/chats
   Creates a chat (team group chat or direct chat)
   Body:
     {
       name?: string,
       teamId?: string,
       memberIds?: string[]   // other users (not including the requester) for a direct chat
     }
------------------------------------------------------- */

function mapUserRoleToChatRole(userRole: string | null | undefined) {
  if (userRole === "MANAGER") return "MANAGER";
  return "MEMBER";
}

export async function POST(req: Request) {
  try {
    const session = await resolveSessionUser(req);
    if (!session) {
      return NextResponse.json({ ok: false, error: "Unauthorized", chat: null }, { status: 401 });
    }

    const userId = String(session.id);
    const userRole = session.role ?? null;
    const orgId = session.organizationId ?? null;

    const body = await safeJson(req);
    const name = typeof body.name === "string" ? body.name.trim() : undefined;
    const teamId = typeof body.teamId === "string" ? body.teamId.trim() : undefined;

    let memberIds: string[] = Array.isArray(body.memberIds) ? body.memberIds.filter((x: any) => typeof x === "string") : [];

    /* ----------------------------------------------
       TEAM CHAT
    ---------------------------------------------- */
    if (teamId) {
      // check team exists
      const team = await prisma.team.findUnique({ where: { id: teamId }, select: { id: true, organizationId: true } });
      if (!team) {
        return NextResponse.json({ ok: false, error: "Team not found" }, { status: 404 });
      }
      // authorize
      const allowed = await authorizeTeamAccess(userId, userRole, teamId);
      if (!allowed) {
        return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
      }

      // If chat exists, return it
      const existingTeamChat = await prisma.chat.findFirst({
        where: { teamId },
        include: {
          members: { include: { user: { select: { id: true, name: true, email: true } } } },
          team: { select: { id: true, name: true } },
          createdBy: { select: { id: true, name: true } },
        },
      });

      if (existingTeamChat) {
        return NextResponse.json({ ok: true, created: false, chat: normalizeChat(existingTeamChat) }, { status: 200 });
      }

      // Get all team members (user ids) and include requester
      const teamMembers = await prisma.teamMember.findMany({ where: { teamId }, select: { userId: true } });
      const toAdd = Array.from(new Set([...(teamMembers.map((m) => m.userId || "")), userId].filter(Boolean)));

      // Remove org admins from membership list — admins have implicit access and should not be ChatMembers on team chats
      const users = await prisma.user.findMany({ where: { id: { in: toAdd } }, select: { id: true, role: true } });
      const filtered = users.filter((u) => String(u.role).toUpperCase() !== "ADMIN");

      // create chat and chat members
      const chat = await prisma.chat.create({
        data: {
          name: name ?? null,
          type: "TEAM",
          organization: orgId ? { connect: { id: orgId } } : undefined,
          team: { connect: { id: teamId } },
          createdBy: { connect: { id: userId } },
          members: {
            create: filtered.map((u) => ({
              user: { connect: { id: u.id } },
              role: mapUserRoleToChatRole(u.role),
            })),
          },
        },
        include: {
          members: { include: { user: { select: { id: true, name: true, email: true } } } },
          team: { select: { id: true, name: true } },
          createdBy: { select: { id: true, name: true } },
        },
      });

      // emit chat:created to members & org room (best-effort)
      (async () => {
        try {
          const io = (global as any).io || (global as any)._io || (global as any).socketServer;
          const payload = { chat: { id: chat.id, name: chat.name, teamId: teamId }, teamId, organizationId: orgId };
          if (io && typeof io.to === "function") {
            for (const m of filtered) {
              io.to(`user:${m.id}`).emit("chat:created", payload);
            }
            io.to(`org:${orgId}`).emit("chat:created", payload);
          } else if (io && typeof io.emit === "function") {
            io.emit("chat:created", payload);
          }
        } catch (e) {
          console.warn("[api/chats] emit chat:created failed:", e);
        }
      })();

      return NextResponse.json({ ok: true, created: true, chat: normalizeChat(chat) }, { status: 201 });
    }

    /* ----------------------------------------------
       DIRECT / PRIVATE CHAT
       Enforce ACL rules:
         - ADMIN: can DM MANAGER or ADMIN; cannot DM EMPLOYEE privately
         - MANAGER: can DM ADMIN, other MANAGERs; can DM EMPLOYEE only if employee is in manager's team
         - EMPLOYEE: can DM only team members and their manager
    ---------------------------------------------- */

    // dedupe and include requester
    const uniqueMemberIds = Array.from(new Set([...memberIds, userId]));

    // must have at least one other user to chat with
    if (uniqueMemberIds.length < 2) {
      return NextResponse.json({ ok: false, error: "At least one other member required" }, { status: 400 });
    }

    // Load users for ACL checks
    const otherIds = uniqueMemberIds.filter((id) => id !== userId);
    const otherUsers = await prisma.user.findMany({ where: { id: { in: otherIds } }, select: { id: true, role: true, organizationId: true } });

    // ensure all targets exist and belong to same org
    const foundIds = new Set(otherUsers.map((u) => u.id));
    for (const tid of otherIds) {
      if (!foundIds.has(tid)) {
        return NextResponse.json({ ok: false, error: `User not found: ${tid}` }, { status: 404 });
      }
    }
    // ensure same organization
    for (const u of otherUsers) {
      if (orgId && u.organizationId !== orgId) {
        return NextResponse.json({ ok: false, error: "All chat participants must belong to your organization" }, { status: 400 });
      }
    }

    // ACL enforcement per target
    for (const target of otherUsers) {
      const tgtRole = String(target.role).toUpperCase();

      if (userRole === "ADMIN") {
        // admin can talk to MANAGER/ADMIN; cannot privately message EMPLOYEE
        if (tgtRole === "EMPLOYEE") {
          return NextResponse.json({ ok: false, error: "Admin cannot privately message an employee" }, { status: 403 });
        }
      } else if (userRole === "MANAGER") {
        if (tgtRole === "EMPLOYEE") {
          // allow only if that employee is part of one of the manager's teams
          const isInManagerTeam = await prisma.teamMember.findFirst({
            where: {
              userId: target.id,
              team: { managerId: userId },
            },
            select: { id: true },
          });
          if (!isInManagerTeam) {
            return NextResponse.json({ ok: false, error: "Managers can message an employee only if the employee belongs to their team" }, { status: 403 });
          }
        }
        // manager->manager and manager->admin allowed
      } else {
        // EMPLOYEE
        if (tgtRole === "ADMIN") {
          // employees can message admin? original design: employees cannot message other team managers? Your spec: "employees will be able to communicate within each other of that particular group or team in which they are assigned and with their respective manager." — they can message their manager but not admin.
          return NextResponse.json({ ok: false, error: "Employees cannot message admin directly" }, { status: 403 });
        }
        // If target is manager: ensure manager is manager of employee's team
        if (tgtRole === "MANAGER") {
          const managerIsOfEmployee = await prisma.teamMember.findFirst({
            where: { userId, team: { managerId: target.id } }, // is employee a member of a team managed by target?
            select: { id: true },
          });
          if (!managerIsOfEmployee) {
            return NextResponse.json({ ok: false, error: "Employee can message only their manager" }, { status: 403 });
          }
        }
        // If target is employee: ensure both are in same team
        if (tgtRole === "EMPLOYEE") {
          const commonTeam = await prisma.teamMember.findFirst({
            where: {
              userId: target.id,
              team: { members: { some: { userId } } },
            },
            select: { id: true },
          });
          // simpler query: check if there exists a TeamMember row for employee target with team that also has a member userId
          // fallback: check team intersection
          if (!commonTeam) {
            return NextResponse.json({ ok: false, error: "Employees can message only members of their team" }, { status: 403 });
          }
        }
      }
    }

    // Passed ACL checks — create chat
    // For simplicity we create a chat with all participants as ChatMembers; map roles appropriately; do not mark admins as ChatMember for team chats (there is no team here).
    const participants = await prisma.user.findMany({
      where: { id: { in: uniqueMemberIds } },
      select: { id: true, role: true },
    });

    const chat = await prisma.chat.create({
      data: {
        name: name ?? null,
        type: "DIRECT",
        organization: orgId ? { connect: { id: orgId } } : undefined,
        createdBy: { connect: { id: userId } },
        members: {
          create: participants.map((p) => ({
            user: { connect: { id: p.id } },
            role: mapUserRoleToChatRole(p.role),
          })),
        },
      },
      include: {
        members: { include: { user: { select: { id: true, name: true, email: true } } } },
        createdBy: { select: { id: true, name: true } },
      },
    });

    // emit chat:created to participants & org room (best-effort)
    (async () => {
      try {
        const io = (global as any).io || (global as any)._io || (global as any).socketServer;
        const payload = { chat: { id: chat.id, name: chat.name }, organizationId: orgId };
        if (io && typeof io.to === "function") {
          for (const p of participants) {
            io.to(`user:${p.id}`).emit("chat:created", payload);
          }
          if (orgId) io.to(`org:${orgId}`).emit("chat:created", payload);
        } else if (io && typeof io.emit === "function") {
          io.emit("chat:created", payload);
        }
      } catch (e) {
        console.warn("[api/chats] emit chat:created failed:", e);
      }
    })();

    return NextResponse.json({ ok: true, created: true, chat: normalizeChat(chat) }, { status: 201 });
  } catch (err) {
    console.error("POST /api/chats error:", err);
    return NextResponse.json({ ok: false, error: "Internal Server Error", chat: null }, { status: 500 });
  }
}
