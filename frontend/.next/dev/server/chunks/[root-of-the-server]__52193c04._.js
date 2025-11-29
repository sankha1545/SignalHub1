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
"[project]/src/app/api/teams/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/teams/route.ts
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)"); // optional - if absent this should be a noop or you can remove
;
;
;
/**
 * Teams API (App Router)
 * - GET  /api/teams?organizationId=...   -> list teams for an organization
 * - POST /api/teams                      -> create a team (body must include organizationId or session must provide it)
 *
 * Response shapes:
 *  - { ok: true, teams: [...] } or { ok: true, team: { ... } }
 *  - { ok: false, message: "..." } on error
 */ function jsonError(message, status = 400) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: false,
        message
    }, {
        status
    });
}
async function tryGetSessionOrganizationId(req) {
    try {
        if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionUser"] === "function") {
            const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionUser"])(req).catch(()=>null);
            if (session?.organizationId) return String(session.organizationId);
        }
    } catch (e) {
        // swallow session errors; caller will handle missing orgId
        console.warn("[api/teams] getSessionUser error:", e?.message || e);
    }
    return null;
}
async function GET(req) {
    try {
        const url = new URL(req.url);
        const orgQuery = url.searchParams.get("organizationId") ?? undefined;
        // prefer explicit query param, otherwise try session helper
        let organizationId = orgQuery ?? undefined;
        if (!organizationId) {
            const sessionOrg = await tryGetSessionOrganizationId(req);
            if (sessionOrg) organizationId = sessionOrg;
        }
        if (!organizationId) {
            return jsonError("organizationId required (provide ?organizationId=... or be authenticated)", 400);
        }
        // fetch teams with manager and members (TeamMember -> user)
        const teams = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].team.findMany({
            where: {
                organizationId
            },
            orderBy: {
                createdAt: "desc"
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
        // normalize shape for frontend convenience
        const normalized = teams.map((t)=>({
                id: t.id,
                name: t.name,
                description: t.description,
                managerId: t.managerId ?? null,
                manager: t.manager ? {
                    id: t.manager.id,
                    name: t.manager.name,
                    email: t.manager.email
                } : null,
                // if you store UI fields like featured/gradient/projects/completion on team, include them here
                // (kept flexible — include only if your schema actually contains them)
                members: (t.members || []).map((m)=>({
                        teamMemberId: m.id,
                        userId: m.user?.id ?? null,
                        name: m.user?.name ?? null,
                        email: m.user?.email ?? null,
                        role: m.role ?? null
                    })),
                organizationId: t.organizationId,
                createdAt: t.createdAt?.toISOString?.() ?? null,
                updatedAt: t.updatedAt?.toISOString?.() ?? null
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            teams: normalized
        }, {
            status: 200
        });
    } catch (err) {
        console.error("[api/teams][GET] error:", err);
        const isDev = ("TURBOPACK compile-time value", "development") !== "production";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            message: ("TURBOPACK compile-time truthy", 1) ? err?.message || String(err) : "TURBOPACK unreachable"
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    try {
        const body = await req.json().catch(()=>({})) ?? {};
        const { name, description = null, managerId = null, memberUserIds = [], organizationId: orgFromBody = null } = body;
        // basic validations
        if (!name || typeof name !== "string" || !name.trim()) {
            return jsonError("Team name is required", 400);
        }
        // resolve organization id from body or session
        let organizationId = null;
        if (orgFromBody && typeof orgFromBody === "string") organizationId = orgFromBody;
        if (!organizationId) {
            organizationId = await tryGetSessionOrganizationId(req);
        }
        if (!organizationId) {
            return jsonError("organizationId required (provide in body or be authenticated)", 400);
        }
        // ensure organization exists
        const orgExists = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].organization.findUnique({
            where: {
                id: organizationId
            },
            select: {
                id: true
            }
        });
        if (!orgExists) return jsonError("Organization not found", 404);
        // validate manager (if provided) belongs to org
        if (managerId) {
            if (typeof managerId !== "string") return jsonError("managerId must be a string", 400);
            const manager = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                where: {
                    id: managerId
                },
                select: {
                    id: true,
                    organizationId: true
                }
            });
            if (!manager) return jsonError("Manager user not found", 404);
            if (!manager.organizationId || manager.organizationId !== organizationId) {
                return jsonError("Manager must belong to the same organization", 400);
            }
        }
        // sanitize memberUserIds -> unique array of strings
        const memberIds = Array.isArray(memberUserIds) ? Array.from(new Set(memberUserIds.filter((v)=>typeof v === "string"))) : [];
        // verify all provided member user ids exist and belong to organization
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
            const foundIds = new Set(users.map((u)=>u.id));
            for (const uid of memberIds){
                if (!foundIds.has(uid)) return jsonError(`Member user not found: ${uid}`, 404);
            }
            for (const u of users){
                if (!u.organizationId || u.organizationId !== organizationId) {
                    return jsonError("All member users must belong to the target organization", 400);
                }
            }
        }
        // create team and team members in transaction
        const created = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            const teamData = {
                name: name.trim(),
                description: description ? String(description).trim() : null,
                organization: {
                    connect: {
                        id: organizationId
                    }
                }
            };
            // manager relationship - `manager` is relation name in your schema
            if (managerId) {
                teamData.manager = {
                    connect: {
                        id: managerId
                    }
                };
            }
            const team = await tx.team.create({
                data: teamData,
                select: {
                    id: true,
                    name: true,
                    description: true,
                    organizationId: true,
                    managerId: true,
                    createdAt: true
                }
            });
            // create many TeamMember rows if any memberIds provided
            let membersCreated = [];
            if (memberIds.length > 0) {
                // createMany expects raw fields; using teamId & userId (assumes TeamMember model has those columns)
                const createManyData = memberIds.map((uid)=>({
                        teamId: team.id,
                        userId: uid,
                        role: "EMPLOYEE"
                    }));
                // skipDuplicates true prevents unique constraint failures if user already member
                await tx.teamMember.createMany({
                    data: createManyData,
                    skipDuplicates: true
                });
                // fetch the created members (with user details) for response
                membersCreated = await tx.teamMember.findMany({
                    where: {
                        teamId: team.id
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
                team,
                members: membersCreated
            };
        });
        // load the fresh team with includes for response
        const teamFull = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].team.findUnique({
            where: {
                id: created.team.id
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            team: teamFull ?? created.team
        }, {
            status: 201
        });
    } catch (err) {
        console.error("[api/teams][POST] error:", err);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__52193c04._.js.map