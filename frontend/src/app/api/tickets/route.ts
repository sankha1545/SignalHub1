import { NextRequest, NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
import { randomUUID } from 'crypto';
import { prisma } from '@/lib/prisma';
import { getSessionUser } from '@/lib/auth';

type TicketDelegateLike = {
  findMany: (...args: unknown[]) => Promise<unknown>;
  create: (...args: unknown[]) => Promise<unknown>;
};

const TICKET_TYPES = new Set(['BUG', 'FEATURE', 'QUERY', 'IMPROVEMENT']);
const TICKET_PRIORITIES = new Set(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']);

function getTicketDelegateOrNull() {
  return (prisma as unknown as { ticket?: TicketDelegateLike })?.ticket ?? null;
}

function safeTicketType(value: unknown) {
  const normalized = String(value ?? 'BUG').toUpperCase();
  return TICKET_TYPES.has(normalized) ? normalized : 'BUG';
}

function safeTicketPriority(value: unknown) {
  const normalized = String(value ?? 'MEDIUM').toUpperCase();
  return TICKET_PRIORITIES.has(normalized) ? normalized : 'MEDIUM';
}

export async function GET(req: NextRequest) {
  try {
    const session = await getSessionUser(req);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const teamId = searchParams.get('teamId');
    if (!teamId) {
      return NextResponse.json({ error: 'teamId required' }, { status: 400 });
    }

    const delegate = getTicketDelegateOrNull();
    const tickets = delegate
      ? await delegate.findMany({
          where: {
            teamId,
            organizationId: session.organizationId,
          },
          include: {
            createdBy: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        })
      : await prisma.$queryRaw(
          Prisma.sql`
            SELECT
              t.*,
              json_build_object(
                'id', u.id,
                'name', u.name,
                'email', u.email
              ) AS "createdBy"
            FROM "Ticket" t
            LEFT JOIN "User" u ON u.id = t."createdById"
            WHERE t."teamId" = ${teamId}
              AND t."organizationId" = ${session.organizationId}
            ORDER BY t."createdAt" DESC
          `
        );

    return NextResponse.json({ tickets });
  } catch (error) {
    console.error('[tickets GET]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSessionUser(req);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const teamId = searchParams.get('teamId');
    if (!teamId) {
      return NextResponse.json({ error: 'teamId required' }, { status: 400 });
    }

    const body = await req.json();
    const title = String(body?.title ?? '').trim();
    if (!title) {
      return NextResponse.json({ error: 'title required' }, { status: 400 });
    }

    const type = safeTicketType(body?.type);
    const priority = safeTicketPriority(body?.priority);
    const description =
      body?.description === undefined || body?.description === null || String(body.description).trim() === ''
        ? null
        : String(body.description);

    const delegate = getTicketDelegateOrNull();
    if (delegate) {
      await delegate.create({
        data: {
          organizationId: session.organizationId,
          teamId,
          title,
          description,
          type,
          priority,
          status: 'OPEN',
          createdById: session.id,
        },
      });
    } else {
      // Runtime-safe fallback while Prisma client cache is stale.
      await prisma.$executeRaw(
        Prisma.sql`
          INSERT INTO "Ticket"
            ("id", "organizationId", "teamId", "title", "description", "type", "priority", "status", "createdById", "createdAt", "updatedAt")
          VALUES
            (
              ${randomUUID()},
              ${session.organizationId},
              ${teamId},
              ${title},
              ${description},
              CAST(${type} AS "TicketType"),
              CAST(${priority} AS "TicketPriority"),
              'OPEN'::"TicketStatus",
              ${session.id},
              NOW(),
              NOW()
            )
        `
      );
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('[tickets POST]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

