// src/app/api/socketio/route.ts
import { NextResponse } from "next/server";

/**
 * Socket info endpoint
 *
 * Purpose:
 *  - This route does NOT run a Socket.IO server (Next.js routes are not persistent).
 *  - It exposes the URL where your actual Socket.IO server is running so the frontend
 *    can discover it at runtime (useful across environments).
 *
 * Behavior:
 *  - GET  -> { ok: true, socketURL, websocketURL, message }
 *  - HEAD -> same headers as GET with no body
 *  - OPTIONS -> responds for CORS preflight
 *
 * Environment variables (preferred order):
 *  - process.env.SOCKET_SERVER_URL
 *  - process.env.NEXT_PUBLIC_SOCKET_URL
 *  - fallback: http://localhost:4001
 *
 * Bonus: If the request contains header `x-organization-id`, we attempt to resolve
 * an organization-specific env var: SOCKET_SERVER_URL_<ORG_ID> (uppercased, non-alphanum -> _).
 * This is optional and useful when each org has a dedicated real-time host.
 */

/* ---------- Utilities ---------- */

function normalizeEnvKeyForOrg(orgId: string) {
  // normalize to safe env var fragment: only letters, numbers, underscore, uppercase
  return orgId.replace(/[^a-zA-Z0-9]/g, "_").toUpperCase();
}

function ensureAbsolute(url: string) {
  // if user passed a scheme-less host like "localhost:4001", normalize to http://...
  if (!/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(url)) {
    return `http://${url}`;
  }
  return url;
}

function toWebSocketUrl(httpUrl: string) {
  try {
    const u = new URL(httpUrl);
    if (u.protocol === "https:") {
      u.protocol = "wss:";
    } else {
      u.protocol = "ws:";
    }
    return u.toString();
  } catch {
    // best-effort fallback
    if (httpUrl.startsWith("https://")) return httpUrl.replace(/^https:\/\//, "wss://");
    if (httpUrl.startsWith("http://")) return httpUrl.replace(/^http:\/\//, "ws://");
    return `ws://${httpUrl}`;
  }
}

const DEFAULT_SOCKET = "http://localhost:4001";

/* ---------- Helpers ---------- */

function resolveSocketURLForOrg(orgId?: string | null) {
  // If client requested org-specific socket host via env var SOCKET_SERVER_URL_<ORG>
  // use that first, then fall back to global SOCKET_SERVER_URL, NEXT_PUBLIC_SOCKET_URL, DEFAULT_SOCKET.
  if (orgId) {
    try {
      const frag = normalizeEnvKeyForOrg(orgId);
      const key = `SOCKET_SERVER_URL_${frag}`;
      const val = (process.env as any)[key];
      if (val && typeof val === "string" && val.trim().length > 0) {
        return ensureAbsolute(val.trim());
      }
    } catch {
      // ignore and continue to global fallbacks
    }
  }

  const raw = process.env.SOCKET_SERVER_URL ?? process.env.NEXT_PUBLIC_SOCKET_URL ?? DEFAULT_SOCKET;
  return ensureAbsolute(String(raw));
}

/* ---------- Route handlers ---------- */

export async function OPTIONS() {
  // CORS preflight support (adjust origin or headers as needed)
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Organization-Id",
      "Access-Control-Max-Age": "600",
    },
  });
}

export async function HEAD(req: Request) {
  // Allow clients to inspect headers without body
  const orgId = req.headers.get("x-organization-id");
  const socketURL = resolveSocketURLForOrg(orgId);
  const websocketURL = toWebSocketUrl(socketURL);

  return new NextResponse(null, {
    status: 200,
    headers: {
      "Cache-Control": "no-store",
      "X-Socket-URL": socketURL,
      "X-WebSocket-URL": websocketURL,
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export async function GET(req: Request) {
  try {
    const orgId = req.headers.get("x-organization-id");
    const socketURL = resolveSocketURLForOrg(orgId);
    const websocketURL = toWebSocketUrl(socketURL);

    return NextResponse.json(
      {
        ok: true,
        socketURL,
        websocketURL,
        message:
          "Socket.IO server info endpoint — your frontend should connect to socketURL (websocketURL is the ws/wss equivalent).",
        orgId: orgId ?? null,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (err) {
    console.error("GET /api/socketio error:", err);
    return NextResponse.json(
      { ok: false, socketURL: null, websocketURL: null, message: "Unable to determine socket URL" },
      { status: 500 }
    );
  }
}
