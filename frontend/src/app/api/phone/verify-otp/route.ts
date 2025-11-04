// app/api/phone/verify-otp/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

function safeStringify(v: any) {
  try { return JSON.stringify(v); } catch { return String(v); }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const phone: string | undefined = body?.phone;
    const otp: string | undefined = body?.otp;

    if (!phone || !otp) {
      console.warn("[verify-otp] missing phone or otp", { phone, otp });
      return NextResponse.json({ error: "Phone and OTP are required" }, { status: 400 });
    }

    // Find the most recent unused OTP record for this phone
    const record = await prisma.phoneOtp.findFirst({
      where: { phone, used: false },
      orderBy: { createdAt: "desc" },
    });

    if (!record) {
      console.warn("[verify-otp] no otp record found for phone", phone);
      return NextResponse.json({ error: "No OTP found for this phone" }, { status: 404 });
    }

    // Check expiry (5 minutes)
    const now = new Date();
    const createdAt = new Date(record.createdAt);
    const diffMins = (now.getTime() - createdAt.getTime()) / 60000;
    if (diffMins > 5) {
      console.warn("[verify-otp] otp expired", { phone, createdAt, diffMins });
      return NextResponse.json({ error: "OTP expired. Please request a new one." }, { status: 400 });
    }

    // Attempt limit
    if (record.attempts >= 5) {
      console.warn("[verify-otp] too many attempts", { phone, attempts: record.attempts });
      return NextResponse.json({ error: "Too many attempts. Request new OTP." }, { status: 429 });
    }

    // Wrong OTP -> increment attempts and return error
    if (record.otp !== otp) {
      await prisma.phoneOtp.update({
        where: { id: record.id },
        data: { attempts: record.attempts + 1 },
      });
      console.warn("[verify-otp] invalid otp attempt", { phone, attempts: record.attempts + 1 });
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }

    // Mark OTP used
    await prisma.phoneOtp.update({
      where: { id: record.id },
      data: { used: true },
    });

    // Try to find the User via profile.phoneNumber (preferred). This might throw if schema doesn't have phoneNumber.
    let matchedUser: any = null;
    try {
      matchedUser = await prisma.user.findFirst({
        where: {
          profile: {
            is: {
              phoneNumber: phone, // <-- works only if profile.phoneNumber exists in schema
            },
          },
        },
        select: { id: true, email: true, name: true, profile: true, role: true },
      });
    } catch (err) {
      // If this is a Prisma validation error because phoneNumber doesn't exist, fallback below
      if (err instanceof Prisma.PrismaClientValidationError || (err && (err as any).message && (err as any).message.includes("Unknown argument"))) {
        console.info("[verify-otp] profile.phoneNumber filter not available in schema, falling back to metadata/string-scan lookup");
        matchedUser = null;
      } else {
        // unexpected error — rethrow
        console.error("[verify-otp] unexpected error during user lookup:", err);
        throw err;
      }
    }

    // Fallback: if matchedUser is still null, attempt to find profile by inspecting stored profile fields.
    // This fallback reads a small set of candidate profiles (by phone contained in metadata or similar).
    if (!matchedUser) {
      // Try to find a profile row where metadata JSON or text fields contain the phone string.
      // We'll fetch recent profiles (safeguard) and check JS-side for phone string in candidate fields.
      // NOTE: adjust `take` if you expect many users (this is a heuristic fallback).
      const candidates = await prisma.profile.findMany({
        orderBy: { updatedAt: "desc" },
        take: 200, // limit scan size — increase if needed
        select: { id: true, userId: true, displayName: true, avatarUrl: true, bio: true, metadata: true, createdAt: true, updatedAt: true },
      });

      const phoneNormalized = String(phone).replace(/\s|-/g, "");

      const found = candidates.find((p) => {
        // check common fields and metadata
        try {
          if (p.metadata) {
            const metaStr = safeStringify(p.metadata);
            if (metaStr.includes(phone) || metaStr.includes(phoneNormalized)) return true;
          }
        } catch {}
        if (p.displayName && String(p.displayName).includes(phone)) return true;
        if (p.bio && String(p.bio).includes(phone)) return true;
        return false;
      });

      if (found) {
        matchedUser = await prisma.user.findUnique({
          where: { id: found.userId },
          select: { id: true, email: true, name: true, profile: true, role: true },
        });
        console.info("[verify-otp] matched user by scanning profiles", { phone, profileId: found.id, userId: found.userId });
      } else {
        console.warn("[verify-otp] fallback scan did not match any profile for phone", phone);
      }
    }

    if (!matchedUser) {
      // No user found; return success for OTP verification but inform caller
      console.warn("[verify-otp] otp verified but no user found for phone", phone);
      return NextResponse.json({
        ok: true,
        message: "OTP verified but no user account found for this phone.",
      });
    }

    // Update profile: try update existing profile by userId; upsert if not exists
    try {
      // Prefer update by userId
      await prisma.profile.upsert({
        where: { userId: matchedUser.id },
        create: {
          userId: matchedUser.id,
          // create minimal profile — adjust required fields accordingly
          phoneNumber: phone as any, // if your schema doesn't have phoneNumber, this will throw; wrapped below
          phoneVerified: true as any,
          phoneVerifiedAt: new Date(),
        } as any,
        update: {
          // set canonical phone + verified flags
          // if your schema doesn't have these fields, this may throw — catch below
          phoneNumber: phone as any,
          phoneVerified: true as any,
          phoneVerifiedAt: new Date(),
        } as any,
      });
    } catch (err) {
      // If upsert fails because schema doesn't have phoneNumber/phoneVerified fields,
      // attempt to store verification inside metadata JSON (non-ideal but safe).
      console.warn("[verify-otp] upsert to profile with phone fields failed — falling back to metadata patch", err);

      try {
        // load current profile
        const existing = await prisma.profile.findUnique({ where: { userId: matchedUser.id }, select: { id: true, metadata: true } });
        const newMeta = { ...(existing?.metadata ?? {} as any) };
        newMeta.phoneVerified = true;
        newMeta.phoneVerifiedAt = new Date().toISOString();
        newMeta.phone = phone;

        if (existing) {
          await prisma.profile.update({
            where: { userId: matchedUser.id },
            data: { metadata: newMeta as any },
          });
        } else {
          // if profile doesn't exist, create one with metadata
          await prisma.profile.create({
            data: {
              userId: matchedUser.id,
              metadata: newMeta as any,
            } as any,
          });
        }
      } catch (metaErr) {
        console.error("[verify-otp] fallback metadata update failed:", metaErr);
        return NextResponse.json({ error: "Failed to update profile after verifying OTP" }, { status: 500 });
      }
    }

    // Return updated user (fresh)
    const updatedUser = await prisma.user.findUnique({
      where: { id: matchedUser.id },
      select: { id: true, email: true, name: true, role: true, profile: true, updatedAt: true },
    });

    console.info("[verify-otp] phone verified and profile updated for user", matchedUser.id);
    return NextResponse.json({ ok: true, message: "Phone verified successfully", user: updatedUser });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
