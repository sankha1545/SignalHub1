import { NextRequest, NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { getSessionUser } from '@/lib/auth';

type TicketDelegateLike = {
  update: (...args: unknown[]) => Promise<unknown>;
  delete: (...args: unknown[]) => Promise<unknown>;
};

const TICKET_STATUSES = new Set(['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED']);

function getTicketDelegateOrNull() {
  return (prisma as unknown as { ticket?: TicketDelegateLike })?.ticket ?? null;
}

function safeStatus(value: unknown) {
  const normalized = String(value ?? 'OPEN').toUpperCase();
  return TICKET_STATUSES.has(normalized) ? normalized : 'OPEN';
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getSessionUser(req);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const id = await params.then(p => p.id);
    const body = await req.json();
    const status = safeStatus(body?.status);

    const delegate = getTicketDelegateOrNull();
    const ticket = delegate
      ? await delegate.update({
          where: { id },
          data: {
            status,
            resolvedById: (status === 'RESOLVED' || status === 'CLOSED') ? session.id : null,
          },
          include: {
            createdBy: true,
            resolvedBy: true,
          },
        })
      : ((await prisma.$queryRaw(
          Prisma.sql`
            UPDATE "Ticket"
            SET
              "status" = CAST(${status} AS "TicketStatus"),
              "resolvedById" = ${(status === 'RESOLVED' || status === 'CLOSED') ? session.id : null},
              "updatedAt" = NOW()
            WHERE "id" = ${id}
            RETURNING *
          `
        )) as unknown[])[0];

    if (!ticket) {
      return NextResponse.json({ error: 'Ticket not found' }, { status: 404 });
    }

    return NextResponse.json({ ticket });
  } catch (error) {
    console.error('[ticket PATCH]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getSessionUser(req);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const id = await params.then(p => p.id);

    const delegate = getTicketDelegateOrNull();
    if (delegate) {
      await delegate.delete({
        where: { id },
      });
    } else {
      await prisma.$executeRaw(
        Prisma.sql`
          DELETE FROM "Ticket"
          WHERE "id" = ${id}
        `
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[ticket DELETE]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
