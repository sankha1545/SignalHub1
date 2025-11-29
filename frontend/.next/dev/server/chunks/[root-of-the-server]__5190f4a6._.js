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
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/jwt.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/jwt.ts
__turbopack_context__.s([
    "signSession",
    ()=>signSession,
    "signTemp",
    ()=>signTemp,
    "verifySession",
    ()=>verifySession,
    "verifyTemp",
    ()=>verifyTemp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
;
const SECRET = process.env.JWT_SECRET;
if (!SECRET) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        console.warn("[JWT] Using fallback secret for development");
    }
}
function signTemp(payload, expiresIn = "15m") {
    const safePayload = {
        ...payload
    };
    delete safePayload.exp;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(safePayload, SECRET, {
        expiresIn
    });
}
function verifyTemp(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, SECRET);
    } catch (err) {
        console.warn("[JWT] verifyTemp failed:", err.message);
        return null;
    }
}
function signSession(payload, expiresIn = "7d") {
    const safePayload = {
        ...payload
    };
    delete safePayload.exp;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(safePayload, SECRET, {
        expiresIn
    });
}
function verifySession(token) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, SECRET);
    } catch (err) {
        console.warn("[JWT] verifySession failed:", err.message);
        return null;
    }
}
}),
"[project]/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/auth.ts
__turbopack_context__.s([
    "getSessionUser",
    ()=>getSessionUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/jwt.ts [app-route] (ecmascript)");
;
;
async function getSessionUser(req) {
    try {
        // 1️⃣ Prefer Authorization header: "Bearer <token>"
        let token = null;
        const authHeader = req.headers.get("authorization");
        if (authHeader?.startsWith("Bearer ")) {
            token = authHeader.slice("Bearer ".length).trim();
        }
        // 2️⃣ Fallback to cookies
        if (!token) {
            const cookieHeader = req.headers.get("cookie") || "";
            const cookies = Object.fromEntries(cookieHeader.split(";").map((c)=>c.trim().split("=")).map(([k, v])=>[
                    decodeURIComponent(k),
                    decodeURIComponent(v)
                ]));
            token = cookies["session"] || cookies["token"] || null;
        }
        if (!token) return null;
        // 3️⃣ Verify token safely
        const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifySession"])(token);
        if (!payload?.id) return null;
        // 4️⃣ Fetch user from DB
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                id: payload.id
            }
        });
        if (!user) return null;
        return {
            id: user.id,
            email: user.email ?? null,
            role: user.role,
            organizationId: user.organizationId
        };
    } catch (err) {
        console.warn("[getSessionUser] error:", err?.message || err);
        return null;
    }
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)"); // optional helper; if absent make sure it's a noop or remove
;
;
;
/**
 * Route: /api/teams/[id]
 *
 * Handlers:
 *  - GET    -> fetch team (with manager + members)
 *  - PUT    -> update team fields and (optionally) replace members
 *  - DELETE -> delete team and its members
 *
 * Notes:
 *  - In App Router handlers the `params` argument can be a Promise; always `await params`.
 *  - This file is defensive: when attempting to update optional UI fields (featured/gradient/projects/completion)
 *    it will retry the update without those fields if Prisma raises an "Unknown argument" validation error
 *    (useful when your Prisma schema doesn't have those columns yet).
 */ /* ----------------- Helpers ----------------- */ function jsonError(message, status = 400) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: false,
        message
    }, {
        status
    });
}
async function resolveSessionOrganizationId(req) {
    try {
        if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionUser"] === "function") {
            const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionUser"])(req).catch(()=>null);
            if (session?.organizationId) return String(session.organizationId);
        }
    } catch (e) {
        // swallow session helper errors
        console.warn("[api/teams/[id]] getSessionUser error:", e?.message ?? e);
    }
    return null;
}
function isValidId(v) {
    return typeof v === "string" && v.trim().length > 0;
}
async function GET(req, context) {
    try {
        const paramsResolved = await context.params;
        const id = paramsResolved?.id;
        if (!isValidId(id)) return jsonError("Missing team id", 400);
        const team = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].team.findUnique({
            where: {
                id
            },
            include: {
                manager: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true
                    }
                },
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
                }
            }
        });
        if (!team) return jsonError("Team not found", 404);
        // normalize shape for frontend (keeps returned object predictable)
        const response = {
            id: team.id,
            name: team.name,
            description: team.description ?? null,
            managerId: team.managerId ?? null,
            manager: team.manager ? {
                id: team.manager.id,
                name: team.manager.name,
                email: team.manager.email
            } : null,
            // optional UI metadata (only present if schema defines them)
            featured: team.featured ?? false,
            gradient: team.gradient ?? null,
            projects: typeof team.projects !== "undefined" ? Number(team.projects ?? 0) : null,
            completion: typeof team.completion !== "undefined" ? Number(team.completion ?? 0) : null,
            members: (team.members ?? []).map((m)=>({
                    teamMemberId: m.id,
                    userId: m.user?.id ?? null,
                    name: m.user?.name ?? null,
                    email: m.user?.email ?? null,
                    role: m.role ?? null
                })),
            organizationId: team.organizationId,
            createdAt: team.createdAt?.toISOString?.() ?? null,
            updatedAt: team.updatedAt?.toISOString?.() ?? null
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            team: response
        }, {
            status: 200
        });
    } catch (err) {
        console.error("[api/teams/[id]][GET] error:", err);
        const isDev = ("TURBOPACK compile-time value", "development") !== "production";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            message: ("TURBOPACK compile-time truthy", 1) ? err?.message || String(err) : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
async function PUT(req, context) {
    try {
        const paramsResolved = await context.params;
        const id = paramsResolved?.id;
        if (!isValidId(id)) return jsonError("Missing team id", 400);
        const body = await req.json().catch(()=>({})) ?? {};
        const { name, description = undefined, managerId = undefined, memberUserIds = undefined, // optional UI metadata that UI may send (only set if provided)
        featured = undefined, gradient = undefined, projects = undefined, completion = undefined } = body;
        // optional session org check
        const sessionOrg = await resolveSessionOrganizationId(req);
        // load team and ensure it exists
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].team.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                organizationId: true
            }
        });
        if (!existing) return jsonError("Team not found", 404);
        if (sessionOrg && existing.organizationId !== sessionOrg) return jsonError("Unauthorized for this organization", 403);
        // validate managerId (if provided)
        if (managerId !== undefined) {
            if (managerId !== null && !isValidId(managerId)) return jsonError("Invalid managerId", 400);
            if (managerId) {
                const mgr = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                    where: {
                        id: managerId
                    },
                    select: {
                        id: true,
                        organizationId: true
                    }
                });
                if (!mgr) return jsonError("Manager user not found", 404);
                if (mgr.organizationId !== existing.organizationId) return jsonError("Manager must belong to same organization", 400);
            }
        }
        // validate memberUserIds (if provided)
        let memberIds = null;
        if (memberUserIds !== undefined) {
            if (!Array.isArray(memberUserIds)) return jsonError("memberUserIds must be an array", 400);
            memberIds = Array.from(new Set(memberUserIds.filter((v)=>typeof v === "string")));
            if (memberIds.length > 0) {
                const users = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findMany({
                    where: {
                        id: {
                            in: memberIds
                        }
                    },
                    select: {
                        id: true,
                        organizationId: true
                    }
                });
                const found = new Set(users.map((u)=>u.id));
                for (const uid of memberIds){
                    if (!found.has(uid)) return jsonError(`Member user not found: ${uid}`, 404);
                }
                for (const u of users){
                    if (u.organizationId !== existing.organizationId) return jsonError("All member users must belong to the same organization", 400);
                }
            }
        }
        // Build update data (only include properties that were provided)
        const updateDataCandidate = {};
        if (name !== undefined) updateDataCandidate.name = String(name).trim();
        if (description !== undefined) updateDataCandidate.description = description === null ? null : String(description).trim();
        if (managerId !== undefined) {
            // manager relation update: connect or disconnect
            if (managerId) updateDataCandidate.manager = {
                connect: {
                    id: managerId
                }
            };
            else updateDataCandidate.manager = {
                disconnect: true
            };
        }
        // include optional UI metadata if provided by client
        if (featured !== undefined) updateDataCandidate.featured = featured;
        if (gradient !== undefined) updateDataCandidate.gradient = gradient;
        if (projects !== undefined) updateDataCandidate.projects = typeof projects === "number" ? projects : Number(projects ?? 0);
        if (completion !== undefined) updateDataCandidate.completion = typeof completion === "number" ? completion : Number(completion ?? 0);
        // Attempt update in transaction. Because some Prisma schemas may NOT have the optional UI fields,
        // we try once with the full update data; if Prisma complains about unknown fields (validation error),
        // we retry without the optional UI fields.
        let transactionResult = null;
        try {
            transactionResult = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
                const updatedTeam = await tx.team.update({
                    where: {
                        id
                    },
                    data: updateDataCandidate,
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        organizationId: true,
                        managerId: true
                    }
                });
                let members = [];
                if (memberIds !== null) {
                    // replace members: delete then createMany (skipDuplicates for safety)
                    await tx.teamMember.deleteMany({
                        where: {
                            teamId: id
                        }
                    });
                    if (memberIds.length > 0) {
                        const createManyData = memberIds.map((uid)=>({
                                teamId: id,
                                userId: uid,
                                role: "EMPLOYEE"
                            }));
                        await tx.teamMember.createMany({
                            data: createManyData,
                            skipDuplicates: true
                        });
                        members = await tx.teamMember.findMany({
                            where: {
                                teamId: id
                            },
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
                        });
                    }
                } else {
                    // not replacing members => return existing members
                    members = await tx.teamMember.findMany({
                        where: {
                            teamId: id
                        },
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
                    });
                }
                return {
                    team: updatedTeam,
                    members
                };
            });
        } catch (err) {
            // detect Prisma unknown argument/validation error and retry without optional UI fields
            const message = String(err?.message || err);
            const unknownArg = /Unknown argument[s]?\s+`?(featured|gradient|projects|completion)`?/i.test(message) || /Unknown arg/i.test(message);
            if (unknownArg) {
                // remove optional UI keys and retry
                const safeUpdateData = {
                    ...updateDataCandidate
                };
                delete safeUpdateData.featured;
                delete safeUpdateData.gradient;
                delete safeUpdateData.projects;
                delete safeUpdateData.completion;
                transactionResult = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
                    const updatedTeam = await tx.team.update({
                        where: {
                            id
                        },
                        data: safeUpdateData,
                        select: {
                            id: true,
                            name: true,
                            description: true,
                            organizationId: true,
                            managerId: true
                        }
                    });
                    let members = [];
                    if (memberIds !== null) {
                        await tx.teamMember.deleteMany({
                            where: {
                                teamId: id
                            }
                        });
                        if (memberIds.length > 0) {
                            const createManyData = memberIds.map((uid)=>({
                                    teamId: id,
                                    userId: uid,
                                    role: "EMPLOYEE"
                                }));
                            await tx.teamMember.createMany({
                                data: createManyData,
                                skipDuplicates: true
                            });
                            members = await tx.teamMember.findMany({
                                where: {
                                    teamId: id
                                },
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
                            });
                        }
                    } else {
                        members = await tx.teamMember.findMany({
                            where: {
                                teamId: id
                            },
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
                        });
                    }
                    return {
                        team: updatedTeam,
                        members
                    };
                });
            } else {
                // rethrow other errors
                throw err;
            }
        }
        // load full team for response (includes manager and members)
        const teamFull = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].team.findUnique({
            where: {
                id
            },
            include: {
                manager: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                },
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
                }
            }
        });
        if (!teamFull) return jsonError("Team not found after update (unexpected)", 500);
        const response = {
            id: teamFull.id,
            name: teamFull.name,
            description: teamFull.description ?? null,
            manager: teamFull.manager ? {
                id: teamFull.manager.id,
                name: teamFull.manager.name,
                email: teamFull.manager.email
            } : null,
            // optional meta (present only if schema supports them)
            featured: teamFull.featured ?? false,
            gradient: teamFull.gradient ?? null,
            projects: typeof teamFull.projects !== "undefined" ? Number(teamFull.projects ?? 0) : null,
            completion: typeof teamFull.completion !== "undefined" ? Number(teamFull.completion ?? 0) : null,
            members: (teamFull.members ?? []).map((m)=>({
                    teamMemberId: m.id,
                    userId: m.user?.id ?? null,
                    name: m.user?.name ?? null,
                    email: m.user?.email ?? null,
                    role: m.role ?? null
                })),
            organizationId: teamFull.organizationId,
            createdAt: teamFull.createdAt?.toISOString?.() ?? null,
            updatedAt: teamFull.updatedAt?.toISOString?.() ?? null
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            team: response
        }, {
            status: 200
        });
    } catch (err) {
        console.error("[api/teams/[id]][PUT] error:", err);
        const isDev = ("TURBOPACK compile-time value", "development") !== "production";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            message: ("TURBOPACK compile-time truthy", 1) ? err?.message || String(err) : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
async function DELETE(req, context) {
    try {
        const paramsResolved = await context.params;
        const id = paramsResolved?.id;
        if (!isValidId(id)) return jsonError("Missing team id", 400);
        const sessionOrg = await resolveSessionOrganizationId(req);
        const team = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].team.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                organizationId: true
            }
        });
        if (!team) return jsonError("Team not found", 404);
        if (sessionOrg && team.organizationId !== sessionOrg) return jsonError("Unauthorized for this organization", 403);
        // Delete members then team to avoid FK problems
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            await tx.teamMember.deleteMany({
                where: {
                    teamId: id
                }
            });
            await tx.team.delete({
                where: {
                    id
                }
            });
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            message: "Team deleted"
        }, {
            status: 200
        });
    } catch (err) {
        console.error("[api/teams/[id]][DELETE] error:", err);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__5190f4a6._.js.map