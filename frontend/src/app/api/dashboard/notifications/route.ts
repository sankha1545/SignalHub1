import { NextResponse } from "next/server";
import { sendNotification } from "@/lib/notifications";
import { getUserFromRequest, requireRole } from "@/lib/rbac";

export async function POST(req: Request) {
  const user = await getUserFromRequest(req);
  requireRole(user, "ADMIN"); // Only admin/manager can send notifications

  const { recipientId, type, message } = await req.json();

  await sendNotification(recipientId, type, message);

  return NextResponse.json({ ok: true });
}
