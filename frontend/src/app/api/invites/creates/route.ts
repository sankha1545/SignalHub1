// src/app/api/invites/creates/route.ts
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { getSessionUser } from "@/lib/auth"; // optional helper - if absent, should be no-op

// Load .env from project root in dev (fallback)
const envPath = path.join(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else {
  dotenv.config();
}

/* ---------- helpers ---------- */
function isValidEmail(email: string) {
  // basic RFC-ish check and protect against extremely long inputs
  return (
    typeof email === "string" &&
    email.length > 3 &&
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  );
}

function createTransporter() {
  const host = process.env.SMTP_HOST || "127.0.0.1";
  const port = Number(process.env.SMTP_PORT || 25);
  const secure = (process.env.SMTP_SECURE === "true") || port === 465;
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";
  const rejectUnauthorized = process.env.SMTP_TLS_REJECT !== "false";

  const config: any = { host, port, secure, tls: { rejectUnauthorized } };
  if (user) config.auth = { user, pass };

  return nodemailer.createTransport(config);
}

function cryptoRandomHex(bytes = 32) {
  // 32 bytes -> 64 hex characters
  return crypto.randomBytes(bytes).toString("hex");
}

function safeString(v: any) {
  return v === undefined || v === null ? null : String(v);
}

/* ---------- route handler ---------- */
export async function POST(req: Request) {
  try {
    // parse body defensively
    let body: any = {};
    try {
      body = (await req.json()) || {};
    } catch (e) {
      body = {};
    }

    // normalize inputs
    const rawEmail = safeString(body?.email ?? "").trim();
    if (!isValidEmail(rawEmail)) {
      return NextResponse.json({ ok: false, message: "Invalid email address" }, { status: 400 });
    }
    const email = rawEmail.toLowerCase();

    // read optional fields
    const requestedRole = safeString(body?.role ?? "EMPLOYEE").toUpperCase();
    const allowedRoles = new Set(["EMPLOYEE", "MANAGER", "ADMIN"]);
    const roleCandidate = allowedRoles.has(requestedRole) ? requestedRole : "EMPLOYEE";

    const providedOrgId = safeString(body?.organizationId ?? null);
    const providedTeamId = safeString(body?.teamId ?? null);
    const providedInvitedById = safeString(body?.invitedById ?? null);
    const customMessage = body?.message ?? null;
    const expiresInHours = Math.max(1, Number(body?.expiresInHours ?? 48)); // default 48h

    // derive organization & inviter from session if possible
    let organizationId: string | null = providedOrgId || null;
    let inviterId: string | null = providedInvitedById || null;

    try {
      if (typeof getSessionUser === "function") {
        const sessionUser = await getSessionUser(req).catch(() => null);
        if (sessionUser) {
          if (!organizationId && sessionUser.organizationId) organizationId = sessionUser.organizationId;
          if (!inviterId && sessionUser.id) inviterId = sessionUser.id;
        }
      }
    } catch (e) {
      // non-fatal: proceed with provided fields
      console.warn("[invites/creates] getSessionUser error:", (e as any)?.message || e);
    }

    if (!organizationId) {
      return NextResponse.json(
        { ok: false, message: "organizationId required (or request must be made by an authenticated org member)" },
        { status: 400 }
      );
    }

    // ensure organization exists
    const org = await prisma.organization.findUnique({ where: { id: organizationId } });
    if (!org) {
      return NextResponse.json({ ok: false, message: "Organization not found" }, { status: 404 });
    }

    // if providedTeamId, verify team exists and belongs to org
    if (providedTeamId) {
      const team = await prisma.team.findUnique({
        where: { id: providedTeamId },
        select: { id: true, organizationId: true },
      });
      if (!team) return NextResponse.json({ ok: false, message: "Team not found" }, { status: 404 });
      if (team.organizationId !== organizationId) {
        return NextResponse.json({ ok: false, message: "Team does not belong to the organization" }, { status: 400 });
      }
    }

    // verify inviter if present and get inviterRole
    let inviterRole: string | null = null;
    if (inviterId) {
      const inviter = await prisma.user.findUnique({
        where: { id: inviterId },
        select: { id: true, organizationId: true, role: true },
      });
      if (!inviter) return NextResponse.json({ ok: false, message: "Inviter not found" }, { status: 404 });
      if (!inviter.organizationId || inviter.organizationId !== organizationId) {
        return NextResponse.json({ ok: false, message: "Inviter does not belong to the organization" }, { status: 403 });
      }
      inviterRole = inviter.role ?? null;
    }

    // enforce invitation privilege: only ADMIN can invite MANAGER/ADMIN
    let roleToSave = roleCandidate;
    if (inviterRole && inviterRole !== "ADMIN") {
      roleToSave = "EMPLOYEE"; // force to EMPLOYEE for non-admin inviters
    }

    // check existing user
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ ok: false, message: "User with this email already exists" }, { status: 409 });
    }

    // check for pending invite in same org (not accepted & not expired)
    const now = new Date();
    const pending = await prisma.invite.findFirst({
      where: {
        email,
        organizationId,
        acceptedAt: null,
        expiresAt: { gt: now },
      },
      select: { id: true, token: true, email: true, expiresAt: true, organizationId: true, teamId: true, role: true },
      orderBy: { createdAt: "desc" },
    });

    if (pending) {
      // Instead of hard 409, return existing invite metadata so UI can offer 'resend' or 'copy link'
      const appUrl = (process.env.NEXT_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000").replace(/\/$/, "");
      const encoded = encodeURIComponent(pending.token);
      const invitePath = `/invite/accept?token=${encoded}`;
      const fallbackPath = `/auth/invite/accept?token=${encoded}`;
      const inviteLink = `${appUrl}${invitePath}`;
      return NextResponse.json({
        ok: true,
        message: "Pending invite already exists",
        existing: true,
        inviteId: pending.id,
        role: pending.role ?? roleToSave,
        expiresAt: pending.expiresAt?.toISOString() ?? null,
        organizationId: pending.organizationId,
        teamId: pending.teamId ?? null,
        inviteLink,
      }, { status: 200 });
    }

    // create invite
    const token = cryptoRandomHex(32);
    const expiresAt = new Date(Date.now() + expiresInHours * 3600 * 1000);

    const inviteCreateData: any = {
      email,
      role: roleToSave,
      token,
      expiresAt,
      organization: { connect: { id: organizationId } },
    };
    if (inviterId) inviteCreateData.inviter = { connect: { id: inviterId } };
    if (providedTeamId) inviteCreateData.team = { connect: { id: providedTeamId } };

    let inviteRecord;
    try {
      inviteRecord = await prisma.invite.create({
        data: inviteCreateData,
        select: { id: true, email: true, expiresAt: true, organizationId: true, teamId: true, role: true },
      });
    } catch (dbErr: any) {
      if (dbErr instanceof Prisma.PrismaClientKnownRequestError && dbErr.code === "P2002") {
        return NextResponse.json({ ok: false, message: "Conflict creating invite (unique constraint)" }, { status: 409 });
      }
      console.error("[invites/creates] DB error:", dbErr);
      return NextResponse.json({ ok: false, message: "Failed to persist invite" }, { status: 500 });
    }

    // Build invite links
    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000").replace(/\/$/, "");
    const encoded = encodeURIComponent(token);
    const invitePath = `/invite/accept?token=${encoded}`;
    const fallbackPath = `/auth/invite/accept?token=${encoded}`;
    const inviteLink = `${appUrl}${invitePath}`;
    const fallbackLink = `${appUrl}${fallbackPath}`;

    // prepare and send email
    const transporter = createTransporter();
    try {
      await transporter.verify();
    } catch (verifyErr: any) {
      console.error("[invites/creates] SMTP verify failed:", verifyErr?.message || verifyErr);
      // rollback DB invite
      try {
        await prisma.invite.delete({ where: { id: inviteRecord.id } });
      } catch (delErr) {
        console.error("[invites/creates] rollback delete failed after SMTP verify error:", delErr);
      }
      return NextResponse.json({ ok: false, message: `SMTP connection failed: ${verifyErr?.message || "check SMTP settings"}` }, { status: 500 });
    }

    const fromAddress = process.env.INVITE_FROM || process.env.SMTP_FROM || `"SignalHub" <no-reply@yourdomain.com>`;
    const mailHtml = `
      <div style="font-family: Inter, Arial, sans-serif; color:#0f172a;">
        <h2>You're invited to join ${org.name}</h2>
        <p>Hello,</p>
        <p>You were invited to join <strong>${org.name}</strong> as a <strong>${inviteRecord.role}</strong>.</p>
        ${customMessage ? `<p>${String(customMessage)}</p>` : ""}
        <p style="margin: 18px 0;">
          <a href="${inviteLink}" style="display:inline-block;padding:10px 14px;background:#0f172a;color:#fff;border-radius:8px;text-decoration:none;">
            Accept invitation
          </a>
        </p>
        <p>If the button does not work, open this link in your browser:</p>
        <p style="word-break:break-all"><a href="${inviteLink}">${inviteLink}</a></p>
        <p style="font-size:12px;color:#6b7280;margin-top:8px;">(Fallback: <a href="${fallbackLink}">${fallbackLink}</a>)</p>
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

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("[invites/creates] Email sent", { inviteId: inviteRecord.id, messageId: info?.messageId ?? null });
    } catch (sendErr: any) {
      console.error("[invites/creates] sendMail error:", sendErr?.message || sendErr);
      // rollback invite
      try {
        await prisma.invite.delete({ where: { id: inviteRecord.id } });
      } catch (delErr) {
        console.error("[invites/creates] rollback delete failed after sendMail error:", delErr);
      }
      return NextResponse.json({ ok: false, message: `Failed to send invite email: ${sendErr?.message || "SMTP error"}` }, { status: 500 });
    }

    // Success - return safe metadata (we include inviteLink for convenience)
    return NextResponse.json(
      {
        ok: true,
        message: "Invite sent",
        inviteId: inviteRecord.id,
        expiresAt: inviteRecord.expiresAt?.toISOString() ?? null,
        organizationId: inviteRecord.organizationId,
        teamId: inviteRecord.teamId ?? null,
        inviteLink,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("[invites/creates] unexpected error:", err?.message || err);
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json({ ok: false, message: isDev ? (err?.message || "Server error") : "Server error" }, { status: 500 });
  }
}
