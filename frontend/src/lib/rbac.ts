// src/lib/rbac.ts
import { prisma } from '@/lib/prisma';
import type { SessionUser } from './auth';
import { getSessionUser } from './auth';

/**
 * Extract user from request and return SessionUser
 */
export async function getUserFromRequest(req: Request): Promise<SessionUser | null> {
  return await getSessionUser(req);
}

/**
 * Ensure user is logged in
 */
export function requireAuth(user: SessionUser | null) {
  if (!user) throw new Error('unauthenticated');
}

/**
 * Ensure user has the required role
 */
export function requireRole(
  user: SessionUser | null,
  role: 'ADMIN' | 'MANAGER' | 'EMPLOYEE'
) {
  requireAuth(user);
  if (user!.role !== role) throw new Error('forbidden');
}

/**
 * Check if user is admin of the organization
 */
export async function isOrgAdmin(userId: string, orgId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  return !!user && user.role === 'ADMIN' && user.organizationId === orgId;
}

/**
 * Check if user is manager of the team
 */
export async function isTeamManager(userId: string, teamId: string) {
  const tm = await prisma.teamMember.findFirst({
    where: { userId, teamId, role: 'MANAGER' },
  });
  return !!tm;
}

/**
 * Check if user can view a team
 * Admins of org or members of team
 */
export async function canViewTeam(userId: string, teamId: string) {
  const tm = await prisma.teamMember.findFirst({ where: { userId, teamId } });
  if (tm) return true;

  const user = await prisma.user.findUnique({ where: { id: userId } });
  return !!user && user.role === 'ADMIN' && !!user.organizationId;
}
