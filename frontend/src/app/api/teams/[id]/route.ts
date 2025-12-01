// src/app/api/teams/[id]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth"; // optional helper; if absent make sure it's a noop or remove

/**
 * Route: /api/teams/[id]
 *
 * Handlers:
 *  - GET    -> fetch team (with manager + members)
 *  - PUT    -> update team fields and (optionally) replace members (keeps chat members in sync)
 *  - DELETE -> delete team and its members (attempts to cleanup related chat)
 *
 * Notes:
 *  - In App Router handlers the `params` argument can be a Promise; always `await params`.
 *  - Defensive: when Prisma doesn't have optional UI fields, it retries without them.
 */

/* ----------------- Helpers ----------------- */
function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

async function resolveSessionOrganizationId(req: Request): Promise<string | null> {
  try {
    if (typeof getSessionUser === "function") {
      const session = await (getSessionUser as any)(req).catch(() => null);
      if (session?.organizationId) return String(session.organizationId);
    }
  } catch (e: any) {
    // swallow session helper errors
    console.warn("[api/teams/[id]] getSessionUser error:", e?.message ?? e);
  }
  return null;
}

function isValidId(v: any) {
  return typeof v === "string" && v.trim().length > 0;
}

/**
 * Map User.role (Role enum) -> ChatMember.role (ChatRole enum)
 * ChatRole values: "MEMBER" | "MANAGER" | "ADMIN"
 * We only assign MANAGER for managers; admins handled separately (admins should not be added as ChatMember in team chats).
 */
function mapUserRoleToChatRole(userRole: string | null | undefined) {
  if (userRole === "MANAGER") return "MANAGER";
  // other roles (ADMIN, EMPLOYEE) map to MEMBER for chat membership purposes; ADMIN will be handled specially
  return "MEMBER";
}

/* ---------- GET /api/teams/:id ---------- */
export async function GET(req: Request, context: { params: Promise<{ id?: string }> }) {
  try {
    const paramsResolved = await context.params;
    const id = paramsResolved?.id;
    if (!isValidId(id)) return jsonError("Missing team id", 400);

    const team = await prisma.team.findUnique({
      where: { id },
      include: {
        manager: { select: { id: true, name: true, email: true, role: true } },
        members: { select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } } },
      },
    });

    if (!team) return jsonError("Team not found", 404);

    // normalize shape for frontend (keeps returned object predictable)
    const response = {
      id: team.id,
      name: team.name,
      description: team.description ?? null,
      managerId: (team as any).managerId ?? null,
      manager: team.manager ? { id: team.manager.id, name: team.manager.name, email: team.manager.email } : null,
      // optional UI metadata (only present if schema defines them)
      featured: (team as any).featured ?? false,
      gradient: (team as any).gradient ?? null,
      projects: typeof (team as any).projects !== "undefined" ? Number((team as any).projects ?? 0) : null,
      completion: typeof (team as any).completion !== "undefined" ? Number((team as any).completion ?? 0) : null,
      members: (team.members ?? []).map((m) => ({
        teamMemberId: m.id,
        userId: m.user?.id ?? null,
        name: m.user?.name ?? null,
        email: m.user?.email ?? null,
        role: m.role ?? null,
      })),
      organizationId: team.organizationId,
      createdAt: team.createdAt?.toISOString?.() ?? null,
      updatedAt: (team as any).updatedAt?.toISOString?.() ?? null,
    };

    return NextResponse.json({ ok: true, team: response }, { status: 200 });
  } catch (err: any) {
    console.error("[api/teams/[id]][GET] error:", err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json({ ok: false, message: isDev ? (err?.message || String(err)) : "Server error" }, { status: 500 });
  }
}

/* ---------- PUT /api/teams/:id ---------- */
/**
 * Expected body examples:
 *  - Partial update:
 *    { name: "New name" }
 *  - Replace members:
 *    { memberUserIds: ["uid1","uid2"] }
 *  - Set manager to null:
 *    { managerId: null }
 *  - Optional UI metadata (if your schema supports them):
 *    { featured: true, gradient: "from-blue-500 to-cyan-500", projects: 2, completion: 60 }
 */
export async function PUT(req: Request, context: { params: Promise<{ id?: string }> }) {
  try {
    const paramsResolved = await context.params;
    const id = paramsResolved?.id;
    if (!isValidId(id)) return jsonError("Missing team id", 400);

    const body = (await req.json().catch(() => ({}))) ?? {};
    const {
      name,
      description = undefined, // undefined => not provided; null => explicitly clear
      managerId = undefined, // undefined => not provided; null => clear manager
      memberUserIds = undefined, // undefined => leave members alone; array => replace
      // optional UI metadata that UI may send (only set if provided)
      featured = undefined,
      gradient = undefined,
      projects = undefined,
      completion = undefined,
    } = body;

    // optional session org check
    const sessionOrg = await resolveSessionOrganizationId(req);

    // load team and ensure it exists
    const existing = await prisma.team.findUnique({ where: { id }, select: { id: true, organizationId: true } });
    if (!existing) return jsonError("Team not found", 404);

    if (sessionOrg && existing.organizationId !== sessionOrg) return jsonError("Unauthorized for this organization", 403);

    // validate managerId (if provided)
    if (managerId !== undefined) {
      if (managerId !== null && !isValidId(managerId)) return jsonError("Invalid managerId", 400);
      if (managerId) {
        const mgr = await prisma.user.findUnique({ where: { id: managerId }, select: { id: true, organizationId: true } });
        if (!mgr) return jsonError("Manager user not found", 404);
        if (mgr.organizationId !== existing.organizationId) return jsonError("Manager must belong to same organization", 400);
      }
    }

    // validate memberUserIds (if provided)
    let memberIds: string[] | null = null;
    if (memberUserIds !== undefined) {
      if (!Array.isArray(memberUserIds)) return jsonError("memberUserIds must be an array", 400);
      memberIds = Array.from(new Set(memberUserIds.filter((v: any) => typeof v === "string")));
      if (memberIds.length > 0) {
        const users = await prisma.user.findMany({
          where: { id: { in: memberIds } },
          select: { id: true, organizationId: true },
        });
        const found = new Set(users.map((u) => u.id));
        for (const uid of memberIds) {
          if (!found.has(uid)) return jsonError(`Member user not found: ${uid}`, 404);
        }
        for (const u of users) {
          if (u.organizationId !== existing.organizationId) return jsonError("All member users must belong to the same organization", 400);
        }
      }
    }

    // Build update data (only include properties that were provided)
    const updateDataCandidate: any = {};
    if (name !== undefined) updateDataCandidate.name = String(name).trim();
    if (description !== undefined) updateDataCandidate.description = description === null ? null : String(description).trim();
    if (managerId !== undefined) {
      // manager relation update: connect or disconnect
      if (managerId) updateDataCandidate.manager = { connect: { id: managerId } };
      else updateDataCandidate.manager = { disconnect: true };
    }

    // include optional UI metadata if provided by client
    if (featured !== undefined) updateDataCandidate.featured = featured;
    if (gradient !== undefined) updateDataCandidate.gradient = gradient;
    if (projects !== undefined) updateDataCandidate.projects = typeof projects === "number" ? projects : Number(projects ?? 0);
    if (completion !== undefined) updateDataCandidate.completion = typeof completion === "number" ? completion : Number(completion ?? 0);

    // Attempt update in transaction. Because some Prisma schemas may NOT have the optional UI fields,
    // we try once with the full update data; if Prisma complains about unknown fields (validation error),
    // we retry without the optional UI fields.
    let transactionResult: any = null;
    try {
      transactionResult = await prisma.$transaction(async (tx) => {
        const updatedTeam = await tx.team.update({
          where: { id },
          data: updateDataCandidate,
          select: { id: true, name: true, description: true, organizationId: true, managerId: true },
        });

        let members = [];
        if (memberIds !== null) {
          // replace members: delete then createMany (skipDuplicates for safety)
          await tx.teamMember.deleteMany({ where: { teamId: id } });
          if (memberIds.length > 0) {
            const createManyData = memberIds.map((uid) => ({ teamId: id, userId: uid, role: "EMPLOYEE" }));
            await tx.teamMember.createMany({ data: createManyData, skipDuplicates: true });
            members = await tx.teamMember.findMany({
              where: { teamId: id },
              select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } },
            });
          }
        } else {
          // not replacing members => return existing members
          members = await tx.teamMember.findMany({
            where: { teamId: id },
            select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } },
          });
        }

        return { team: updatedTeam, members };
      });
    } catch (err: any) {
      // detect Prisma unknown argument/validation error and retry without optional UI fields
      const message = String(err?.message || err);
      const unknownArg = /Unknown argument[s]?\s+`?(featured|gradient|projects|completion)`?/i.test(message) || /Unknown arg/i.test(message);
      if (unknownArg) {
        // remove optional UI keys and retry
        const safeUpdateData: any = { ...updateDataCandidate };
        delete safeUpdateData.featured;
        delete safeUpdateData.gradient;
        delete safeUpdateData.projects;
        delete safeUpdateData.completion;

        transactionResult = await prisma.$transaction(async (tx) => {
          const updatedTeam = await tx.team.update({
            where: { id },
            data: safeUpdateData,
            select: { id: true, name: true, description: true, organizationId: true, managerId: true },
          });

          let members = [];
          if (memberIds !== null) {
            await tx.teamMember.deleteMany({ where: { teamId: id } });
            if (memberIds.length > 0) {
              const createManyData = memberIds.map((uid) => ({ teamId: id, userId: uid, role: "EMPLOYEE" }));
              await tx.teamMember.createMany({ data: createManyData, skipDuplicates: true });
              members = await tx.teamMember.findMany({
                where: { teamId: id },
                select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } },
              });
            }
          } else {
            members = await tx.teamMember.findMany({
              where: { teamId: id },
              select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } },
            });
          }

          return { team: updatedTeam, members };
        });
      } else {
        // rethrow other errors
        throw err;
      }
    }

    // load full team for response (includes manager and members)
    const teamFull = await prisma.team.findUnique({
      where: { id },
      include: {
        manager: { select: { id: true, name: true, email: true } },
        members: { select: { id: true, role: true, user: { select: { id: true, name: true, email: true } } } },
      },
    });

    if (!teamFull) return jsonError("Team not found after update (unexpected)", 500);

    const response = {
      id: teamFull.id,
      name: teamFull.name,
      description: teamFull.description ?? null,
      manager: teamFull.manager ? { id: teamFull.manager.id, name: teamFull.manager.name, email: teamFull.manager.email } : null,
      // optional meta (present only if schema supports them)
      featured: (teamFull as any).featured ?? false,
      gradient: (teamFull as any).gradient ?? null,
      projects: typeof (teamFull as any).projects !== "undefined" ? Number((teamFull as any).projects ?? 0) : null,
      completion: typeof (teamFull as any).completion !== "undefined" ? Number((teamFull as any).completion ?? 0) : null,
      members: (teamFull.members ?? []).map((m) => ({
        teamMemberId: m.id,
        userId: m.user?.id ?? null,
        name: m.user?.name ?? null,
        email: m.user?.email ?? null,
        role: m.role ?? null,
      })),
      organizationId: teamFull.organizationId,
      createdAt: teamFull.createdAt?.toISOString?.() ?? null,
      updatedAt: (teamFull as any).updatedAt?.toISOString?.() ?? null,
    };

    // -----------------------------
    // CHAT SYNC (best-effort): if the team has a group chat, sync chat members to match team membership
    // -----------------------------
    (async () => {
      try {
        if (!(prisma as any).chat || !(prisma as any).chatMember) {
          // Chat model not present; nothing to do
          return;
        }

        // find chat for this team (assumes chat.teamId relation exists)
        const teamChat = await (prisma as any).chat.findFirst({
          where: { teamId: id },
          select: { id: true, organizationId: true, name: true },
        });

        if (!teamChat) {
          // no chat for this team; nothing to sync
          return;
        }

        const chatId = teamChat.id;

        // Build the intended set of userIds for the chat: manager + members (do NOT include org admins)
        const intended = new Set<string>();
        if (teamFull.manager?.id) intended.add(teamFull.manager.id);
        for (const m of teamFull.members ?? []) {
          if (m.userId) intended.add(m.userId);
        }

        // fetch existing chat members (include role so we can handle admin rows)
        const existingChatMembers = await (prisma as any).chatMember.findMany({
          where: { chatId },
          select: { id: true, userId: true, role: true },
        });

        // Enforce invariant: admins should not be present in ChatMember for team chats.
        const adminRows = existingChatMembers.filter((cm: any) => String(cm.role).toUpperCase() === "ADMIN");
        if (adminRows.length > 0) {
          const adminRowIds = adminRows.map((r: any) => r.id);
          try {
            await (prisma as any).chatMember.deleteMany({ where: { id: { in: adminRowIds } } });
            // emit removal events for admins removed (best-effort)
            try {
              const io = (global as any).io || (global as any)._io || (global as any).socketServer;
              if (io && typeof io.to === "function") {
                for (const r of adminRows) {
                  io.to(`user:${r.userId}`).emit("chat:member:removed", { chatId, userId: r.userId });
                }
               io.to(`chat:${chatId}`).emit("chat:member:list:updated", { chatId });

              }
            } catch (e) {
              // ignore emit failures
            }
          } catch (e) {
            console.warn("[api/teams] failed to remove admin ChatMember rows (non-fatal):", e);
          }
        }

        const existingUserIds = new Set(existingChatMembers.map((cm: any) => cm.userId));

        // Determine additions and removals (after admin cleanup)
        const toAdd = Array.from(intended).filter((uid) => !existingUserIds.has(uid));
        const toRemove = existingChatMembers.filter((cm: any) => !intended.has(cm.userId));

        // Remove chat members that are no longer part of the team
        if (toRemove.length > 0) {
          const removeIds = toRemove.map((r: any) => r.id);
          await (prisma as any).chatMember.deleteMany({ where: { id: { in: removeIds } } });
          // emit removed events
          try {
            const io = (global as any).io || (global as any)._io || (global as any).socketServer;
            if (io && typeof io.to === "function") {
              for (const r of toRemove) {
                io.to(`user:${r.userId}`).emit("chat:member:removed", { chatId, userId: r.userId });
              }
              io.to(`chat:${chatId}`).emit("chat:member:list:updated", { chatId });
            }
          } catch (e) {
            console.warn("[api/teams] chat:member:removed emit failed:", e);
          }
        }

        // Add new chat members (skip org admins)
        if (toAdd.length > 0) {
          // Filter out org admins from toAdd (admins should not be chat members)
          const usersForAdd = await prisma.user.findMany({
            where: { id: { in: toAdd } },
            select: { id: true, role: true },
          });

          const filteredUsersForAdd = usersForAdd.filter((u) => String(u.role).toUpperCase() !== "ADMIN");

          const chatMemberRows = filteredUsersForAdd.map((u) => ({
            chatId,
            userId: u.id,
            role: mapUserRoleToChatRole(u.role),
          }));

          if (chatMemberRows.length > 0) {
            await (prisma as any).chatMember.createMany({ data: chatMemberRows, skipDuplicates: true });
          }

          // emit added events
          try {
            const io = (global as any).io || (global as any)._io || (global as any).socketServer;
            if (io && typeof io.to === "function") {
              for (const u of filteredUsersForAdd) {
                io.to(`user:${u.id}`).emit("chat:member:added", { chatId, user: { id: u.id, role: mapUserRoleToChatRole(u.role) } });
              }
              io.to(`chat:${chatId}`).emit("chat:member:list:updated", { chatId });
            }
          } catch (e) {
            console.warn("[api/teams] chat:member:added emit failed:", e);
          }
        }
      } catch (syncErr) {
        console.warn("[api/teams] chat sync failed (non-fatal):", syncErr);
      }
    })();

    // Emit team updated event to org room (best-effort)
    (async () => {
      try {
        const io = (global as any).io || (global as any)._io || (global as any).socketServer;
        if (io && typeof io.to === "function") {
          io.to(`org:${response.organizationId}`).emit("team:updated", { team: response });
        } else if (io && typeof io.emit === "function") {
          io.emit("team:updated", { team: response });
        }
      } catch (e) {
        console.warn("[api/teams] team:updated emit failed:", e);
      }
    })();

    return NextResponse.json({ ok: true, team: response }, { status: 200 });
  } catch (err: any) {
    console.error("[api/teams/[id]][PUT] error:", err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json({ ok: false, message: isDev ? (err?.message || String(err)) : "Server error" }, { status: 500 });
  }
}

/* ---------- DELETE /api/teams/:id ---------- */
export async function DELETE(req: Request, context: { params: Promise<{ id?: string }> }) {
  try {
    const paramsResolved = await context.params;
    const id = paramsResolved?.id;
    if (!isValidId(id)) return jsonError("Missing team id", 400);

    const sessionOrg = await resolveSessionOrganizationId(req);

    const team = await prisma.team.findUnique({ where: { id }, select: { id: true, organizationId: true } });
    if (!team) return jsonError("Team not found", 404);
    if (sessionOrg && team.organizationId !== sessionOrg) return jsonError("Unauthorized for this organization", 403);

    // Delete members then team to avoid FK problems
  // Delete members then team to avoid FK problems (idempotent)
try {
  const txResult = await prisma.$transaction(async (tx) => {
    // remove team members (safe)
    await tx.teamMember.deleteMany({ where: { teamId: id } });

    // attempt to delete the team without throwing if already missing
    const deleted = await tx.team.deleteMany({ where: { id } });
    return { deletedCount: deleted.count ?? 0 };
  });

  if ((txResult?.deletedCount ?? 0) === 0) {
    // Team was not present (already deleted) -> return 404 to the client
    return jsonError("Team not found", 404);
  }
} catch (e) {
  // if anything unexpected happens, log and propagate to outer handler
  console.error("[api/teams/[id]][DELETE] transaction failed:", e);
  throw e;
}


    // best-effort: cleanup or archive the related chat for this team
    (async () => {
      try {
        if ((prisma as any).chat) {
          const teamChat = await (prisma as any).chat.findFirst({ where: { teamId: id }, select: { id: true } });
          if (teamChat) {
            // try delete chat members and chat itself (non-fatal)
            try {
              if ((prisma as any).chatMember) {
                await (prisma as any).chatMember.deleteMany({ where: { chatId: teamChat.id } });
              }
            } catch (e) {
              console.warn("[api/teams] cleaning chat members failed:", e);
            }
            try {
              // if schema supports "archived" field prefer archiving instead of delete
              if ((prisma as any).chat.update) {
                // attempt archive if field exists
                try {
                  await (prisma as any).chat.update({ where: { id: teamChat.id }, data: { archived: true } });
                } catch (e) {
                  // no archived field — fallback to delete
                  await (prisma as any).chat.delete({ where: { id: teamChat.id } });
                }
              }
            } catch (e) {
              console.warn("[api/teams] deleting/archiving chat failed:", e);
            }
            // emit removal event
            try {
              const io = (global as any).io || (global as any)._io || (global as any).socketServer;
              if (io && typeof io.to === "function") {
                io.to(`org:${team.organizationId}`).emit("team:deleted", { teamId: id, chatId: teamChat.id });
                io.to(`chat:${teamChat.id}`).emit("chat:archived", { chatId: teamChat.id });
              } else if (io && typeof io.emit === "function") {
                io.emit("team:deleted", { teamId: id, chatId: teamChat.id });
              }
            } catch (e) {
              console.warn("[api/teams] emit after chat cleanup failed:", e);
            }
          }
        }
      } catch (cleanupErr) {
        console.warn("[api/teams] best-effort chat cleanup failed:", cleanupErr);
      }
    })();

    return NextResponse.json({ ok: true, message: "Team deleted" }, { status: 200 });
  } catch (err: any) {
    console.error("[api/teams/[id]][DELETE] error:", err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json({ ok: false, message: isDev ? (err?.message || String(err)) : "Server error" }, { status: 500 });
  }
}
