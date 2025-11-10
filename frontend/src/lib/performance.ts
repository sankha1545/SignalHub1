/**
* src/lib/performance.ts
* Helpers to compute user/team scores and create alerts when thresholds are crossed.
*/
import { prisma } from '@/lib/prisma';
import { sendNotification } from './notifications';


export async function computeUserScore(userId: string, start: Date, end: Date) {
// sample factors: tasks completed ratio, messages count (placeholder), targets met
const tasksAssigned = await prisma.task.count({ where: { assignedToId: userId, createdAt: { gte: start, lte: end } } });
const tasksCompleted = await prisma.task.count({ where: { assignedToId: userId, status: 'COMPLETED', completedAt: { gte: start, lte: end } } });
const taskRatio = tasksAssigned === 0 ? 1 : tasksCompleted / tasksAssigned;


// messages (placeholder for response-time / activity metrics)
const messages = await prisma.message.count({ where: { senderId: userId, createdAt: { gte: start, lte: end } } });
const activityScore = messages > 0 ? Math.min(1, messages / 10) : 0.5; // normalize


// final combined score 0..100
const score = Math.round((0.7 * taskRatio + 0.3 * activityScore) * 100);
return { score, metrics: { tasksAssigned, tasksCompleted, messages } };
}


export async function createDailySnapshotsForOrg(orgId: string) {
const end = new Date();
const start = new Date(Date.now() - 24 * 60 * 60 * 1000);
const users = await prisma.user.findMany({ where: { organizationId: orgId } });


for (const u of users) {
const { score, metrics } = await computeUserScore(u.id, start, end);
await prisma.performanceSnapshot.create({
data: {
userId: u.id,
organizationId: orgId,
startAt: start,
endAt: end,
score,
metrics,
},
});
}
}


export async function evaluateAlertsForOrg(orgId: string) {
// for each user compute 60-day average and create warning/praise alerts
const since = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000);
const users = await prisma.user.findMany({ where: { organizationId: orgId } });
const WARN_THRESHOLD = 40; // example
const PRAISE_THRESHOLD = 85;


for (const u of users) {
const snaps = await prisma.performanceSnapshot.findMany({ where: { userId: u.id, createdAt: { gte: since } } });
if (!snaps.length) continue;
const avg = snaps.reduce((s, x) => s + x.score, 0) / snaps.length;


const alreadyAlert = await prisma.performanceAlert.findFirst({ where: { userId: u.id, createdAt: { gte: since } } });
if (avg < WARN_THRESHOLD && !alreadyAlert) {
await prisma.performanceAlert.create({ data: { userId: u.id, organizationId: orgId, kind: 'WARNING', reason: `Average ${avg.toFixed(1)} over last 60 days` } });
await sendNotification(u.id, 'IN_APP', `Warning: performance average ${avg.toFixed(1)} (60d). Please improve.`);
} else if (avg >= PRAISE_THRESHOLD && !alreadyAlert) {
await prisma.performanceAlert.create({ data: { userId: u.id, organizationId: orgId, kind: 'PRAISE', reason: `Average ${avg.toFixed(1)} over last 60 days` } });
await sendNotification(u.id, 'IN_APP', `Great job! Performance average ${avg.toFixed(1)} over 60 days.`);
}
}
}