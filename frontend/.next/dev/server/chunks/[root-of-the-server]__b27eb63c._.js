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
"[project]/src/app/api/chats/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/chats/route.ts
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
;
;
;
;
;
const JWT_SECRET = process.env.JWT_SECRET || "";
/* -------------------------------------------------------
   Helpers
------------------------------------------------------- */ async function safeJson(req) {
    try {
        return await req.json();
    } catch  {
        return {};
    }
}
/**
 * Resolve logged-in user from:
 * 1. next-auth helper
 * 2. Authorization header
 * 3. Session cookie
 */ async function resolveSessionUser(req) {
    // #1 next-auth
    try {
        const u = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionUser"])(req);
        if (u?.id) return u;
    } catch  {}
    // #2 bearer
    try {
        const auth = req.headers.get("authorization") ?? req.headers.get("Authorization");
        if (auth?.toLowerCase().startsWith("bearer ")) {
            const token = auth.slice(7).trim();
            if (token && JWT_SECRET) {
                const payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
                if (payload?.id) return payload;
            }
        }
    } catch  {}
    // #3 cookie
    try {
        const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
        const token = store.get("session")?.value;
        if (token && JWT_SECRET) {
            const payload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
            if (payload?.id) return payload;
        }
    } catch  {}
    return null;
}
/**
 * Authorize that user can access a team.
 * ADMIN → always pass
 * Manager or Member of team → pass
 */ async function authorizeTeamAccess(userId, userRole, teamId) {
    if (userRole === "ADMIN") return true;
    const team = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].team.findUnique({
        where: {
            id: teamId
        },
        select: {
            managerId: true
        }
    });
    if (!team) return false;
    // Is manager?
    if (team.managerId === userId) return true;
    // Is team member?
    const member = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].teamMember.findFirst({
        where: {
            teamId,
            userId
        },
        select: {
            id: true
        }
    });
    return !!member;
}
/**
 * Normalize a chat for frontend use
 */ function normalizeChat(chat) {
    return {
        id: chat.id,
        name: chat.name ?? (chat.team ? `Team: ${chat.team.name}` : "Chat"),
        type: chat.type,
        teamId: chat.teamId ?? null,
        createdBy: chat.createdBy ? {
            id: chat.createdBy.id,
            name: chat.createdBy.name
        } : null,
        members: chat.members?.map((m)=>({
                id: m.user.id,
                name: m.user.name,
                email: m.user.email,
                role: m.role
            })) ?? [],
        lastMessageAt: chat.lastMessageAt?.toISOString?.() ?? null,
        createdAt: chat.createdAt?.toISOString?.() ?? null
    };
}
async function GET(req) {
    try {
        const session = await resolveSessionUser(req);
        if (!session) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Unauthorized",
                chats: []
            }, {
                status: 401
            });
        }
        const userId = String(session.id);
        const url = new URL(req.url);
        const teamId = url.searchParams.get("teamId");
        /* ----------------------------------------------
       TEAM CHAT MODE
    ---------------------------------------------- */ if (teamId) {
            const chat = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].chat.findFirst({
                where: {
                    teamId
                },
                include: {
                    members: {
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    name: true,
                                    email: true
                                }
                            }
                        }
                    },
                    team: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    createdBy: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                chat: chat ? normalizeChat(chat) : null
            }, {
                status: 200
            });
        }
        /* ----------------------------------------------
       ALL CHATS FOR THIS USER
    ---------------------------------------------- */ const membership = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].chatMember.findMany({
            where: {
                userId
            },
            select: {
                chatId: true
            }
        });
        if (membership.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                chats: []
            });
        }
        const chatIds = membership.map((m)=>m.chatId);
        const chats = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].chat.findMany({
            where: {
                id: {
                    in: chatIds
                }
            },
            include: {
                members: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                email: true
                            }
                        }
                    }
                },
                team: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                createdBy: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            },
            orderBy: {
                lastMessageAt: "desc"
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            chats: chats.map(normalizeChat)
        });
    } catch (err) {
        console.error("GET /api/chats error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    try {
        const session = await resolveSessionUser(req);
        if (!session) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                error: "Unauthorized",
                chat: null
            }, {
                status: 401
            });
        }
        const userId = String(session.id);
        const userRole = session.role ?? null;
        const body = await safeJson(req);
        const name = typeof body.name === "string" ? body.name.trim() : undefined;
        const teamId = typeof body.teamId === "string" ? body.teamId.trim() : undefined;
        let memberIds = Array.isArray(body.memberIds) ? body.memberIds.filter((x)=>typeof x === "string") : [];
        /* ----------------------------------------------
       TEAM CHAT
    ---------------------------------------------- */ if (teamId) {
            const team = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].team.findUnique({
                where: {
                    id: teamId
                },
                select: {
                    id: true
                }
            });
            if (!team) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: false,
                    error: "Team not found"
                }, {
                    status: 404
                });
            }
            const allowed = await authorizeTeamAccess(userId, userRole, teamId);
            if (!allowed) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: false,
                    error: "Forbidden"
                }, {
                    status: 403
                });
            }
            const existingTeamChat = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].chat.findFirst({
                where: {
                    teamId
                },
                include: {
                    members: {
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    name: true,
                                    email: true
                                }
                            }
                        }
                    },
                    team: true,
                    createdBy: true
                }
            });
            if (existingTeamChat) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: true,
                    created: false,
                    chat: normalizeChat(existingTeamChat)
                });
            }
            const teamMembers = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].teamMember.findMany({
                where: {
                    teamId
                },
                select: {
                    userId: true
                }
            });
            memberIds = Array.from(new Set([
                ...memberIds,
                userId,
                ...teamMembers.map((x)=>x.userId)
            ]));
        }
        /* ----------------------------------------------
       DIRECT CHAT
    ---------------------------------------------- */ const uniqueMemberIds = Array.from(new Set([
            ...memberIds,
            userId
        ]));
        const chat = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].chat.create({
            data: {
                name: name ?? null,
                type: teamId ? "TEAM" : "DIRECT",
                organization: {
                    connect: {
                        id: session.organizationId
                    }
                },
                team: teamId ? {
                    connect: {
                        id: teamId
                    }
                } : undefined,
                createdBy: {
                    connect: {
                        id: userId
                    }
                },
                members: {
                    create: uniqueMemberIds.map((mid)=>({
                            user: {
                                connect: {
                                    id: mid
                                }
                            },
                            role: mid === userId ? "ADMIN" : "MEMBER"
                        }))
                }
            },
            include: {
                members: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                email: true
                            }
                        }
                    }
                },
                team: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                createdBy: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            created: true,
            chat: normalizeChat(chat)
        }, {
            status: 201
        });
    } catch (err) {
        console.error("POST /api/chats error:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: "Internal Server Error",
            chat: null
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b27eb63c._.js.map