module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/prisma.ts
__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prisma = global.__prisma__ ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time truthy", 1) ? [
        "query",
        "warn",
        "error"
    ] : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time truthy", 1) global.__prisma__ = prisma;
}),
"[project]/src/app/api/teams/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/teams/[id]/route.ts
__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
;
;
// import { getSessionUser } from "@/lib/auth"; // use if you need auth checks
function jsonError(message, status = 400) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: false,
        message
    }, {
        status
    });
}
function isValidId(id) {
    return typeof id === "string" && id.trim().length > 0;
}
async function GET(req, { params }) {
    try {
        const id = params?.id;
        if (!isValidId(id)) return jsonError("Missing team id", 400);
        const team = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].team.findUnique({
            where: {
                id
            },
            include: {
                members: {
                    select: {
                        id: true,
                        role: true,
                        user: {
                            select: {
                                id: true,
                                name: true,
                                email: true
                            }
                        }
                    }
                },
                manager: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                },
                organization: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
        if (!team) return jsonError("Team not found", 404);
        // normalize
        const resp = {
            id: team.id,
            name: team.name,
            description: team.description,
            managerId: team.managerId ?? null,
            managerName: team.manager?.name ?? null,
            featured: team.featured ?? false,
            gradient: team.gradient ?? "from-blue-500 to-cyan-500",
            projects: team.projects ?? 0,
            completion: team.completion ?? 0,
            members: (team.members || []).map((m)=>({
                    userId: m.user?.id,
                    name: m.user?.name,
                    email: m.user?.email,
                    role: m.role
                })),
            organizationId: team.organizationId,
            organizationName: team.organization?.name ?? null,
            createdAt: team.createdAt,
            updatedAt: team.updatedAt
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            team: resp
        }, {
            status: 200
        });
    } catch (err) {
        console.error("[api/teams][id][GET] error:", err);
        const isDev = ("TURBOPACK compile-time value", "development") !== "production";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            message: ("TURBOPACK compile-time truthy", 1) ? err?.message || String(err) : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
async function PUT(req, { params }) {
    try {
        const id = params?.id;
        if (!isValidId(id)) return jsonError("Missing team id", 400);
        let body = {};
        try {
            body = await req.json() || {};
        } catch  {
            body = {};
        }
        const { name, description, managerId, featured, gradient, projects, completion, memberUserIds } = body;
        // update in transaction: update team, sync members
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            const existing = await tx.team.findUnique({
                where: {
                    id
                }
            });
            if (!existing) throw {
                code: "TEAM_NOT_FOUND"
            };
            const data = {};
            if (name !== undefined) data.name = String(name).trim();
            if (description !== undefined) data.description = description === null ? null : String(description);
            if (managerId !== undefined) data.managerId = managerId === null ? null : String(managerId);
            if (featured !== undefined) data.featured = !!featured;
            if (gradient !== undefined) data.gradient = String(gradient);
            if (projects !== undefined) data.projects = Number(projects ?? 0);
            if (completion !== undefined) data.completion = Number(completion ?? 0);
            await tx.team.update({
                where: {
                    id
                },
                data
            });
            if (Array.isArray(memberUserIds)) {
                const sanitized = memberUserIds.map((u)=>String(u)).filter(Boolean);
                // delete members not in sanitized
                await tx.teamMember.deleteMany({
                    where: {
                        teamId: id,
                        userId: {
                            notIn: sanitized.length ? sanitized : [
                                "__none__"
                            ]
                        }
                    }
                });
                // create missing members
                const existingMembers = await tx.teamMember.findMany({
                    where: {
                        teamId: id
                    },
                    select: {
                        userId: true
                    }
                });
                const existingUserIds = new Set(existingMembers.map((m)=>String(m.userId)));
                const toCreate = sanitized.filter((u)=>!existingUserIds.has(String(u))).map((userId)=>({
                        teamId: id,
                        userId,
                        role: "EMPLOYEE"
                    }));
                if (toCreate.length > 0) await tx.teamMember.createMany({
                    data: toCreate,
                    skipDuplicates: true
                });
            }
            const t = await tx.team.findUnique({
                where: {
                    id
                },
                include: {
                    members: {
                        select: {
                            id: true,
                            role: true,
                            user: {
                                select: {
                                    id: true,
                                    name: true,
                                    email: true
                                }
                            }
                        }
                    },
                    manager: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    }
                }
            });
            return t;
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            team: updated
        }, {
            status: 200
        });
    } catch (err) {
        if (err && typeof err === "object" && "code" in err) {
            if (err.code === "TEAM_NOT_FOUND") return jsonError("Team not found", 404);
        }
        console.error("[api/teams][id][PUT] error:", err);
        const isDev = ("TURBOPACK compile-time value", "development") !== "production";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            message: ("TURBOPACK compile-time truthy", 1) ? err?.message || String(err) : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
async function DELETE(req, { params }) {
    try {
        const id = params?.id;
        if (!isValidId(id)) return jsonError("Missing team id", 400);
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            const existing = await tx.team.findUnique({
                where: {
                    id
                }
            });
            if (!existing) throw {
                code: "TEAM_NOT_FOUND"
            };
            // delete team members
            await tx.teamMember.deleteMany({
                where: {
                    teamId: id
                }
            });
            // optionally delete related resources: threads, tasks, invites (uncomment if desired)
            // await tx.thread.deleteMany({ where: { teamId: id } });
            // await tx.task.deleteMany({ where: { teamId: id } });
            // await tx.invite.deleteMany({ where: { teamId: id } });
            // delete team itself
            await tx.team.delete({
                where: {
                    id
                }
            });
            return {
                deletedId: id
            };
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            ...result
        }, {
            status: 200
        });
    } catch (err) {
        if (err && typeof err === "object" && "code" in err) {
            if (err.code === "TEAM_NOT_FOUND") return jsonError("Team not found", 404);
        }
        console.error("[api/teams][id][DELETE] error:", err);
        const isDev = ("TURBOPACK compile-time value", "development") !== "production";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            message: ("TURBOPACK compile-time truthy", 1) ? err?.message || String(err) : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cd1eb1f4._.js.map