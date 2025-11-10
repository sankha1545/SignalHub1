// middleware/rateLimit.ts
const attempts: Record<string, { count: number; ts: number }> = {};

export function checkRateLimit(key: string, limit = 10, windowMs = 60_000) {
  const now = Date.now();
  const info = attempts[key] ?? { count: 0, ts: now };
  if (now - info.ts > windowMs) {
    attempts[key] = { count: 1, ts: now };
    return true;
  }
  info.count++;
  attempts[key] = info;
  return info.count <= limit;
}
