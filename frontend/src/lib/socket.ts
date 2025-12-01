// src/lib/socket.ts
// Small helper to call the socket server's /emit endpoint from backend code.
// Usage:
//   import { emitToRooms } from "@/lib/socket";
//   await emitToRooms({ event: "chat:created", rooms: ["user:123","org:abc"], payload: {...} });

import fetch from "node-fetch";

const SOCKET_SERVER_URL = process.env.SOCKET_SERVER_URL || process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:4001";
const SOCKET_SERVER_KEY = process.env.SOCKET_SERVER_KEY || "";

type EmitArgs = {
  event: string;
  payload?: any;
  rooms?: string[] | string;
  excludeSocketId?: string;
  timeoutMs?: number;
};

export async function emitToRooms({ event, payload = {}, rooms, excludeSocketId, timeoutMs = 2000 }: EmitArgs) {
  if (!SOCKET_SERVER_URL) return { ok: false, error: "no socket server url" };
  if (!SOCKET_SERVER_KEY) {
    // still allow if no key supplied (not recommended for prod)
    console.warn("socket: no SOCKET_SERVER_KEY configured — /emit endpoint not protected");
  }

  const url = new URL("/emit", SOCKET_SERVER_URL).toString();
  const body = {
    key: SOCKET_SERVER_KEY,
    rooms,
    event,
    payload,
    excludeSocketId,
  };

  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(id);
    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      return { ok: false, status: resp.status, body: text };
    }
    const json = await resp.json().catch(() => ({}));
    return { ok: true, result: json };
  } catch (err: any) {
    return { ok: false, error: String(err?.message ?? err) };
  }
}
