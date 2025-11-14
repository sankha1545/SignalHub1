// src/app/api/invites/creates/route.ts
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

// Optional helper to get current user from request (if you have one).
// If you don't have this helper, the route will accept invitedById in the body.
import { getSessionUser } from "@/lib/auth"; // optional; if not present, invitedById may be provided in body

// load .env from project root if present (dev fallback)
const envPath = path.join(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
  console.log("[invites/creates] Loaded .env from", envPath);
} else {
  dotenv.config(); // still try to load from process.env, no-op if not found
  console.log("[invites/creates] .env not found at", envPath, " — relying on process.env");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Helper to create a transporter with sensible defaults.
 * Uses SMTP_* env vars (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM).
 */
function createTransporter() {
  const host = process.env.SMTP_HOST || "127.0.0.1";
  const port = Number(process.env.SMTP_PORT || 25);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";
  const rejectUnauthorized = process.env.SMTP_TLS_REJECT !== "false";

  console.log("[invites/creates] SMTP config:", {
    host,
    port,
    secure,
    authProvided: !!user,
  });

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user ? { user, pass } : undefined,
    tls: {
      rejectUnauthorized,
    },
  });

  return transporter;
}

/** small helper - generate hex token */
function cryptoRandomHex(len = 24) {
  return crypto.randomBytes(len).toString("hex");
}

export async function POST(req: Request) {
  try {
    // parse body (defensive)
    const body = await req.json().catch(() => ({}));
    const rawEmail = (body?.email || "").toString().trim();
    const role = (body?.role || "MANAGER").toString().toUpperCase(); // default to MANAGER
    const providedOrgId = body?.organizationId ?? null;
    const providedInvitedById = body?.invitedById ?? null;
    const providedTeamId = body?.teamId ?? null;
    const customMessage = body?.message ?? null;
    const expiresInHours = Number(body?.expiresInHours ?? 24);

    if (!rawEmail || !isValidEmail(rawEmail)) {
      return NextResponse.json({ ok: false, message: "Invalid email address" }, { status: 400 });
    }

    const email = rawEmail.toLowerCase();

    // Determine organizationId and inviterId:
    // Prefer explicit organizationId in body; otherwise try to derive from authenticated user.
    let organizationId: string | null = providedOrgId;
    let inviterId: string | null = providedInvitedById;

    // Try to derive inviterId and/or organizationId from session if available
    try {
      const authUser = await getSessionUser(req).catch(() => null);
      if (authUser) {
        // If org not provided, derive from session
        if (!organizationId && authUser.organizationId) {
          organizationId = authUser.organizationId;
        }
        // If inviter not provided, set to authenticated user id
        if (!inviterId && authUser.id) {
          inviterId = authUser.id;
        }
      }
    } catch (e) {
      // If getSessionUser doesn't exist or throws, we gracefully fallback to provided fields
    }

    if (!organizationId) {
      return NextResponse.json(
        { ok: false, message: "organizationId required (or send request as authenticated org member)" },
        { status: 400 }
      );
    }

    // Ensure organization exists
    const org = await prisma.organization.findUnique({ where: { id: organizationId } });
    if (!org) {
      return NextResponse.json({ ok: false, message: "Organization not found" }, { status: 404 });
    }

    // Enforce global email uniqueness: cannot invite email already used by any user
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ ok: false, message: "User with this email already exists" }, { status: 409 });
    }

    // Prevent duplicate pending invite for same email in same org (and not expired)
    const now = new Date();
    const existingInvite = await prisma.invite.findFirst({
      where: {
        email,
        organizationId,
        acceptedAt: null,
        expiresAt: { gt: now },
      },
    });

    if (existingInvite) {
      return NextResponse.json(
        { ok: false, message: "Pending invite already exists for this email in this organization" },
        { status: 409 }
      );
    }

    // generate token + expiry
    const token = cryptoRandomHex(24);
    const expiresAt = new Date(Date.now() + Math.max(1, expiresInHours) * 60 * 60 * 1000); // at least 1 hour

    // Build create payload; use relation connect for inviter & organization & team
    const createData: any = {
      email,
      role,
      token,
      expiresAt,
      organization: { connect: { id: organizationId } },
    };

    // Attach inviter relation if available (preferred).
    // If inviterId is not present, we still allow creation (e.g. system invites) but it's better to have one.
    if (inviterId) {
      createData.inviter = { connect: { id: inviterId } };
    }

    if (providedTeamId) {
      createData.team = { connect: { id: providedTeamId } };
    }

    // Persist invite in DB
    let inviteRecord;
    try {
      inviteRecord = await prisma.invite.create({
        data: createData,
        select: { id: true, token: true, email: true, expiresAt: true, organizationId: true },
      });
    } catch (dbErr: any) {
      // Prisma unique constraint or other DB error
      if (dbErr instanceof Prisma.PrismaClientKnownRequestError && dbErr.code === "P2002") {
        const target = (dbErr.meta as any)?.target;
        if (Array.isArray(target) && target.includes("email")) {
          return NextResponse.json({ ok: false, message: "User with this email already exists (db)" }, { status: 409 });
        }
      }
      console.error("[invites/creates] DB error when creating invite:", dbErr);
      return NextResponse.json({ ok: false, message: "Failed to create invite record" }, { status: 500 });
    }

    // build invite link (ensure you set NEXT_PUBLIC_APP_URL in .env)
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const inviteLink = `${appUrl.replace(/\/$/, "")}/invite/accept?token=${inviteRecord.token}`;

    // prepare mail
    const fromAddress =
      process.env.INVITE_FROM || process.env.SMTP_FROM || `"SignalHub" <no-reply@yourdomain.com>`;
    const transporter = createTransporter();

    try {
      await transporter.verify();
      console.log("[invites/creates] SMTP verify OK");
    } catch (verifyErr: any) {
      console.error("[invites/creates] SMTP verify failed:", verifyErr && (verifyErr.message || verifyErr));
      // Rollback created invite to avoid orphaned invites when mail cannot be sent (optional but safer)
      try {
        await prisma.invite.delete({ where: { id: inviteRecord.id } });
      } catch (delErr) {
        console.error("[invites/creates] Failed to rollback invite after SMTP failure:", delErr);
      }
      return NextResponse.json(
        { ok: false, message: `SMTP connection failed: ${verifyErr?.message || "check server logs"}` },
        { status: 500 }
      );
    }

    const mailHtml = `
      <div style="font-family: Inter, Arial, sans-serif; color:#0f172a;">
        <h2>You're invited to join ${org.name}</h2>
        <p>Hello,</p>
        <p>You were invited to join <strong>${org.name}</strong> as a <strong>${role}</strong>.</p>
        ${customMessage ? `<p>${customMessage}</p>` : ""}
        <p style="margin: 18px 0;">
          <a href="${inviteLink}" style="display:inline-block;padding:10px 14px;background:#0f172a;color:#fff;border-radius:8px;text-decoration:none;">Accept invitation</a>
        </p>
        <p>This link will expire on <strong>${expiresAt.toUTCString()}</strong>.</p>
        <p>If you didn't request this, you can ignore this email.</p>
        <hr />
        <p style="font-size:12px;color:#6b7280">Sent by ${org.name}</p>
      </div>
    `;

    const mailOptions = {
      from: fromAddress,
      to: email,
      subject: `You're invited to join ${org.name}`,
      html: mailHtml,
    };

    // send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("[invites/creates] sendMail info:", {
        messageId: info?.messageId,
        accepted: Array.isArray(info?.accepted) ? info.accepted.length : info?.accepted || 0,
        rejected: Array.isArray(info?.rejected) ? info.rejected.length : info?.rejected || 0,
      });
    } catch (sendErr: any) {
      console.error("[invites/creates] sendMail error:", sendErr);
      // Roll back invite if email failed to send to avoid leftover invites
      try {
        await prisma.invite.delete({ where: { id: inviteRecord.id } });
      } catch (delErr) {
        console.error("[invites/creates] Failed to rollback invite after sendMail failure:", delErr);
      }
      const safeMsg = sendErr?.response || sendErr?.message || "Failed to send email";
      return NextResponse.json({ ok: false, message: `Can't send mail: ${safeMsg}` }, { status: 500 });
    }

    // Success — return invite metadata. Note: remove token from responses in production for security.
    return NextResponse.json(
      {
        ok: true,
        message: "Invite sent",
        inviteId: inviteRecord.id,
        expiresAt: inviteRecord.expiresAt?.toISOString() ?? null,
        organizationId: inviteRecord.organizationId,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("[invites/creates] Fatal error:", err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json(
      { ok: false, message: isDev ? err?.message || "Server error" : "Server error" },
      { status: 500 }
    );
  }
}
