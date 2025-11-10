import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserFromRequest, requireRole } from "@/lib/rbac";

export async function POST(req: Request) {
  try {
    const user = await getUserFromRequest(req);
    requireRole(user, "MANAGER"); // Only manager assigns tasks

    const { title, description, assignedToId, dueDate } = await req.json();

    if (!title || !assignedToId) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        assignedToId,
        assignedById: user.id,
        dueDate: dueDate ? new Date(dueDate) : null,
        status: "PENDING",
      },
    });

    return NextResponse.json({ ok: true, task });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const user = await getUserFromRequest(req);

    // Employees see only their tasks; managers/admins can filter by team
    const tasks = await prisma.task.findMany({
      where: user.role === "EMPLOYEE" ? { assignedToId: user.id } : {},
      include: { assignedBy: true, assignedTo: true },
    });

    return NextResponse.json({ ok: true, tasks });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
