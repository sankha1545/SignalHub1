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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
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
"[project]/src/app/api/invites/finalize/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/invites/finalize/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
;
;
;
;
;
/**
 * POST /api/invites/finalize
 *
 * Accepts:
 *   { token?: string, password: string, name?: string, phone?: string, phoneVerified?: boolean }
 * or Authorization: Bearer <token>
 *
 * Behavior:
 *  - Validate token + password
 *  - Ensure invite exists, not expired, not already accepted
 *  - Ensure invite.email is not already registered under another org (prevent overlap)
 *  - Create user in a transaction, attach organization from invite
 *  - Create Profile and TeamMember (if invite.teamId present)
 *  - Mark invite.acceptedAt, status = ACCEPTED and "consume" the token in same transaction
 *    (we overwrite the token with a unique consumed value to preserve DB unique constraint).
 *  - Return 201 with userId/email/organizationId and optionally { token, redirect }
 *
 * Notes:
 *  - If you prefer to set token = null, migrate your Prisma schema so token is nullable (String?).
 *  - This implementation intentionally overwrites token with a unique consumed value to avoid
 *    unique-constraint errors on invite consumption when token column is non-nullable.
 */ /* ---------- simple validators ---------- */ function validatePassword(p) {
    return typeof p === "string" && p.length >= 8;
}
function validateName(n) {
    return n === undefined || typeof n === "string" && n.trim().length > 0 && n.trim().length <= 200;
}
/* ---------- helper to generate a unique consumed token ---------- */ function makeConsumedToken(originalToken) {
    // safe prefix of original in case you want to keep some reference (slice short)
    const prefix = originalToken && typeof originalToken === "string" ? originalToken.slice(0, 20) : "consumed";
    const suffix = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(12).toString("hex"); // 24 hex chars, strong randomness
    // keep total under typical varchar limits
    return `${prefix}-consumed-${Date.now().toString(36)}-${suffix}`.slice(0, 255);
}
async function POST(req) {
    try {
        // defensive parse
        let body = {};
        try {
            body = await req.json() || {};
        } catch  {
            body = {};
        }
        // token: body.token or Authorization: Bearer <token>
        let token = typeof body?.token === "string" && body.token.trim() ? body.token.trim() : null;
        if (!token) {
            const authHeader = req.headers.get("authorization") || req.headers.get("Authorization");
            if (authHeader && typeof authHeader === "string" && authHeader.toLowerCase().startsWith("bearer ")) {
                token = authHeader.slice(7).trim();
            }
        }
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                message: "Missing invite token (provide body.token or Authorization: Bearer <token>)"
            }, {
                status: 400
            });
        }
        if (typeof token !== "string" || token.length < 16) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                message: "Invalid invite token"
            }, {
                status: 400
            });
        }
        // password + name + phone
        const password = body?.password;
        if (!validatePassword(password)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                message: "Invalid password — must be at least 8 characters."
            }, {
                status: 400
            });
        }
        const name = typeof body?.name === "string" && body.name.trim() ? body.name.trim() : undefined;
        if (!validateName(name)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                message: "Invalid name"
            }, {
                status: 400
            });
        }
        const phone = typeof body?.phone === "string" && body.phone.trim() ? body.phone.trim() : undefined;
        const phoneVerifiedFlag = !!body?.phoneVerified;
        const now = new Date();
        /* ---------- transaction: create user, profile, teamMember, and consume invite ---------- */ const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
            // 1) load invite by token
            const invite = await tx.invite.findUnique({
                where: {
                    token
                }
            });
            if (!invite) throw {
                code: "INVITE_NOT_FOUND"
            };
            // 2) validate invite
            if (invite.expiresAt && invite.expiresAt.getTime() <= now.getTime()) throw {
                code: "INVITE_EXPIRED"
            };
            if (invite.acceptedAt) throw {
                code: "INVITE_ALREADY_USED"
            };
            const invitedEmail = (invite.email || "").trim().toLowerCase();
            if (!invitedEmail) throw {
                code: "INVITE_MISSING_EMAIL"
            };
            // 3) ensure the invited email not already registered (global uniqueness)
            const existing = await tx.user.findUnique({
                where: {
                    email: invitedEmail
                }
            });
            if (existing) {
                if (existing.organizationId && invite.organizationId && existing.organizationId !== invite.organizationId) {
                    throw {
                        code: "EMAIL_EXISTS_OTHER_ORG"
                    };
                }
                throw {
                    code: "EMAIL_ALREADY_REGISTERED"
                };
            }
            // 4) ensure invite has organization
            if (!invite.organizationId) throw {
                code: "INVITE_MISSING_ORG"
            };
            const org = await tx.organization.findUnique({
                where: {
                    id: invite.organizationId
                }
            });
            if (!org) throw {
                code: "INVITE_ORG_NOT_FOUND"
            };
            // 5) hash password
            const passwordHash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(String(password), 10);
            // 6) normalize role
            const roleFromInvite = invite.role || "EMPLOYEE";
            const normalizedRole = typeof roleFromInvite === "string" ? roleFromInvite.toUpperCase() : "EMPLOYEE";
            const isManager = normalizedRole === "MANAGER";
            // 7) build user payload
            const createUserData = {
                email: invitedEmail,
                passwordHash,
                name: name ?? null,
                provider: "email",
                emailVerified: true,
                role: normalizedRole,
                organization: {
                    connect: {
                        id: invite.organizationId
                    }
                },
                isActive: true
            };
            if (phone) {
                createUserData.phone = phone;
                createUserData.phoneVerified = isManager ? true : !!phoneVerifiedFlag;
            }
            // 8) create the user
            const newUser = await tx.user.create({
                data: createUserData
            });
            // 9) create profile
            const profileData = {
                userId: newUser.id,
                displayName: name ?? undefined
            };
            if (phone) {
                profileData.phoneNumber = phone;
                profileData.phoneVerified = isManager ? true : !!phoneVerifiedFlag;
                if (profileData.phoneVerified) profileData.phoneVerifiedAt = now;
            }
            await tx.profile.create({
                data: profileData
            });
            // 10) create team membership when applicable (and team exists)
            if (invite.teamId) {
                const teamExists = await tx.team.findUnique({
                    where: {
                        id: invite.teamId
                    }
                });
                if (teamExists) {
                    await tx.teamMember.create({
                        data: {
                            teamId: invite.teamId,
                            userId: newUser.id,
                            role: normalizedRole ?? "EMPLOYEE"
                        }
                    });
                }
            }
            // 11) consume invite: update acceptedAt, status, and overwrite token with unique consumed value.
            // We attempt multiple times if (extremely unlikely) the generated consumed token collides with an existing token.
            const maxAttempts = 4;
            let lastErr = null;
            for(let attempt = 0; attempt < maxAttempts; attempt++){
                const consumedToken = makeConsumedToken(invite.token);
                try {
                    await tx.invite.update({
                        where: {
                            id: invite.id
                        },
                        data: {
                            acceptedAt: now,
                            status: "ACCEPTED",
                            token: consumedToken
                        }
                    });
                    // success — break loop
                    lastErr = null;
                    break;
                } catch (uErr) {
                    // If unique constraint on token triggered (very unlikely), retry with a new consumed token
                    lastErr = uErr;
                // On final attempt we'll rethrow below
                }
            }
            if (lastErr) {
                // bubble up a recognizable error to outer catch
                console.error("[invites/finalize] failed to consume invite token after retries:", lastErr);
                throw {
                    code: "INVITE_CONSUME_FAILED",
                    meta: lastErr
                };
            }
            return {
                userId: newUser.id,
                email: newUser.email,
                organizationId: invite.organizationId ?? null,
                role: normalizedRole
            };
        });
        // 12) Optionally sign a JWT if JWT_SECRET provided
        let signedToken = undefined;
        try {
            const secret = process.env.JWT_SECRET;
            if (secret) {
                const payload = {
                    sub: result.userId,
                    email: result.email,
                    org: result.organizationId,
                    role: result.role
                };
                const expiresIn = process.env.JWT_EXPIRES_IN || "7d";
                signedToken = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign(payload, secret, {
                    expiresIn
                });
            }
        } catch (jwtErr) {
            console.error("[invites/finalize] failed to sign JWT:", jwtErr);
        }
        // Redirect hint for frontend (choose page based on role). Keep conservative default to avoid 404s.
        const redirect = result.role && /MANAGER/i.test(result.role) ? "/dashboard/manager" : "/dashboard/employee/MySchedule";
        const responseBody = {
            ok: true,
            message: "Account created",
            ...result,
            redirect
        };
        if (signedToken) responseBody.token = signedToken;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(responseBody, {
            status: 201
        });
    } catch (err) {
        // map known transaction error codes thrown above
        if (err && typeof err === "object" && "code" in err) {
            switch(err.code){
                case "INVITE_NOT_FOUND":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: false,
                        message: "Invalid invite token"
                    }, {
                        status: 404
                    });
                case "INVITE_EXPIRED":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: false,
                        message: "Invite expired"
                    }, {
                        status: 410
                    });
                case "INVITE_ALREADY_USED":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: false,
                        message: "Invite already used"
                    }, {
                        status: 410
                    });
                case "INVITE_MISSING_EMAIL":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: false,
                        message: "Invite missing target email"
                    }, {
                        status: 500
                    });
                case "EMAIL_ALREADY_REGISTERED":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: false,
                        message: "Account already exists for this email"
                    }, {
                        status: 409
                    });
                case "EMAIL_EXISTS_OTHER_ORG":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: false,
                        message: "An account with this email exists under another organization"
                    }, {
                        status: 409
                    });
                case "INVITE_MISSING_ORG":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: false,
                        message: "Invite missing organization"
                    }, {
                        status: 400
                    });
                case "INVITE_ORG_NOT_FOUND":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: false,
                        message: "Invite organization not found"
                    }, {
                        status: 404
                    });
                case "INVITE_CONSUME_FAILED":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        ok: false,
                        message: "Failed to consume invite token (please retry)"
                    }, {
                        status: 500
                    });
                default:
                    break;
            }
        }
        // Prisma unique constraint fallback
        if (err && (err.code === "P2002" || err?.meta?.target)) {
            const target = Array.isArray(err?.meta?.target) ? err.meta.target.join(", ") : err?.meta?.target;
            console.error("[invites/finalize] Prisma unique constraint error:", target, err);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: false,
                message: `Unique constraint failed: ${target}`
            }, {
                status: 409
            });
        }
        console.error("[invites/finalize] Fatal error:", err);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__acd287ac._.js.map