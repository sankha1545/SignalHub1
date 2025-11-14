// src/app/api/countries/route.ts
import { NextResponse } from "next/server";

/**
 * GET /api/countries
 *
 * - Primary: fetches minimal country data from restcountries.com
 * - Fallback: uses a built-in safe list if upstream fails or returns invalid data
 * - Normalizes, deduplicates (by country code) and sorts results
 * - Returns { ok: boolean, countries: Array<{ code, name, region, languages }> }
 * - Sets CDN-friendly cache headers (s-maxage), configurable via COUNTRIES_S_MAXAGE
 *
 * Env:
 * - COUNTRIES_TIMEOUT_MS (optional) default: 5000
 * - COUNTRIES_S_MAXAGE (optional) default: 3600 (1 hour)
 */

const FIELDS = "name,cca2,region,languages";
const UPSTREAM_URL = `https://restcountries.com/v3.1/all?fields=${FIELDS}`;

const TIMEOUT_MS = Number(process.env.COUNTRIES_TIMEOUT_MS ?? 5000);
const S_MAXAGE = Number(process.env.COUNTRIES_S_MAXAGE ?? 3600);

const FALLBACK_COUNTRIES = [
  { code: "IN", name: "India", region: "Asia", languages: { hin: "Hindi", eng: "English" } },
  { code: "US", name: "United States", region: "Americas", languages: { eng: "English" } },
  { code: "GB", name: "United Kingdom", region: "Europe", languages: { eng: "English" } },
  { code: "CA", name: "Canada", region: "Americas", languages: { eng: "English", fra: "French" } },
  { code: "AU", name: "Australia", region: "Oceania", languages: { eng: "English" } },
  { code: "DE", name: "Germany", region: "Europe", languages: { deu: "German" } },
  { code: "FR", name: "France", region: "Europe", languages: { fra: "French" } },
  { code: "SG", name: "Singapore", region: "Asia", languages: { eng: "English", zho: "Chinese" } },
];

/** Fetch helper with timeout using AbortController. */
async function fetchWithTimeout(url: string, timeoutMs = TIMEOUT_MS, init?: RequestInit) {
  const controller = new AbortController();
  const signal = controller.signal;
  const t = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { signal, ...init });
    clearTimeout(t);
    return res;
  } catch (err) {
    clearTimeout(t);
    throw err;
  }
}

/** Normalize a raw upstream country object into our minimal shape, or null if invalid. */
function normalizeCountry(raw: any) {
  if (!raw || typeof raw !== "object") return null;

  // prefer cca2 (2-letter), but accept cca3 if present
  const codeRaw = raw?.cca2 ?? raw?.cca3 ?? "";
  const code = String(codeRaw).trim().toUpperCase();
  if (!code || (code.length !== 2 && code.length !== 3)) return null;

  // name: prefer name.common -> name.official -> fallback to code
  let name = "";
  try {
    if (raw?.name?.common) name = String(raw.name.common);
    else if (raw?.name?.official) name = String(raw.name.official);
    else if (typeof raw.name === "string") name = raw.name;
    else name = code;
  } catch {
    name = code;
  }

  const region = raw?.region ?? null;

  // languages: ensure mapping of string values if present
  const languages: Record<string, string> = {};
  if (raw.languages && typeof raw.languages === "object") {
    for (const [k, v] of Object.entries(raw.languages)) {
      try {
        languages[k] = typeof v === "string" ? v : String(v);
      } catch {
        // skip bad values
      }
    }
  }

  return { code, name, region, languages };
}

/** Deduplicate by code (case-insensitive) and sort by name. */
function dedupeAndSort(list: Array<{ code: string; name: string; region?: string | null; languages?: any }>) {
  const map = new Map<string, { code: string; name: string; region?: string | null; languages?: any }>();
  for (const item of list) {
    if (!item || !item.code) continue;
    const key = item.code.toUpperCase();
    if (!map.has(key)) map.set(key, item);
  }

  const arr = Array.from(map.values());
  try {
    arr.sort((a, b) => (a.name ?? "").localeCompare(b.name ?? "", undefined, { sensitivity: "base" }));
  } catch {
    arr.sort((a, b) => String(a.name).localeCompare(String(b.name)));
  }
  return arr;
}

export async function GET() {
  try {
    // Try fetching upstream with timeout
    let upstreamJson: any = null;
    try {
      const res = await fetchWithTimeout(UPSTREAM_URL, TIMEOUT_MS, { method: "GET" });
      if (!res.ok) {
        console.warn("api/countries upstream non-ok:", res.status);
        throw new Error(`Upstream returned ${res.status}`);
      }
      try {
        upstreamJson = await res.json();
      } catch (jsonErr) {
        console.warn("api/countries: failed to parse upstream JSON:", (jsonErr as any)?.message ?? jsonErr);
        upstreamJson = null;
      }
    } catch (fetchErr) {
      console.warn("api/countries upstream fetch failed:", (fetchErr as any)?.message ?? fetchErr);
      upstreamJson = null;
    }

    // Transform upstream or fallback
    let countries: Array<{ code: string; name: string; region?: string | null; languages?: any }>;
    if (Array.isArray(upstreamJson) && upstreamJson.length > 0) {
      const normalized = upstreamJson.map(normalizeCountry).filter((c): c is { code: string; name: string; region?: string | null; languages?: any } => Boolean(c));
      countries = dedupeAndSort(normalized);
      if (!countries || countries.length === 0) {
        countries = FALLBACK_COUNTRIES;
      }
    } else {
      countries = FALLBACK_COUNTRIES;
    }

    const headers = {
      "Cache-Control": `public, s-maxage=${S_MAXAGE}, stale-while-revalidate=60`,
      "Content-Type": "application/json; charset=utf-8",
    };

    return NextResponse.json({ ok: true, countries }, { status: 200, headers });
  } catch (err: any) {
    console.error("api/countries fatal error:", err);
    const headers = {
      "Cache-Control": `public, s-maxage=${S_MAXAGE}, stale-while-revalidate=60`,
      "Content-Type": "application/json; charset=utf-8",
    };
    // Always return a non-empty array so clients don't crash
    return NextResponse.json(
      { ok: false, countries: FALLBACK_COUNTRIES, error: (err && (err.message ?? String(err))) || "internal_error" },
      { status: 500, headers }
    );
  }
}
