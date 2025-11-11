// src/app/api/upload/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");
const MAX_BYTES = 2 * 1024 * 1024; // 2 MB

async function ensureUploadDir() {
  try {
    await fs.promises.access(UPLOAD_DIR);
  } catch (err) {
    await fs.promises.mkdir(UPLOAD_DIR, { recursive: true });
  }
}

function safeFilename(originalName: string) {
  const ext = path.extname(originalName).slice(0, 20); // keep short
  const base = path.basename(originalName, ext).replace(/[^a-zA-Z0-9-_]/g, "-").slice(0, 40);
  const suffix = `${Date.now().toString(36)}-${Math.floor(Math.random() * 1e6).toString(36)}`;
  return `${base}-${suffix}${ext || ".bin"}`;
}

export async function POST(req: Request) {
  try {
    // Ensure upload dir exists
    await ensureUploadDir();

    // Read form data from the incoming request
    const formData = await req.formData();
    const file = formData.get("file") as unknown as File | null;

    if (!file) {
      return NextResponse.json({ ok: false, error: "No file provided" }, { status: 400 });
    }

    // file is a web File object with .name and .size and .stream()/arrayBuffer()
    const name = (file as any).name ?? "upload.bin";
    const size = Number((file as any).size ?? 0);

    if (size > MAX_BYTES) {
      return NextResponse.json({ ok: false, error: "File too large (max 2 MB)" }, { status: 413 });
    }

    // read file bytes
    const arrayBuffer = await (file as any).arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // generate safe filename and write to public/uploads
    const filename = safeFilename(name);
    const filepath = path.join(UPLOAD_DIR, filename);
    await fs.promises.writeFile(filepath, buffer);

    // Public URL (served from /uploads/<filename>)
    const origin = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? (process.env.NEXTAUTH_URL ?? "");
    // If origin not set, fallback to relative url
    const url = origin ? `${origin.replace(/\/$/, "")}/uploads/${filename}` : `/uploads/${filename}`;

    return NextResponse.json({ ok: true, url });
  } catch (err: any) {
    console.error("upload route error:", err);
    return NextResponse.json({ ok: false, error: "Upload failed" }, { status: 500 });
  }
}
