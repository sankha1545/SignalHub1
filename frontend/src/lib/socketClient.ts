// src/lib/socketClient.ts

import { io, Socket } from "socket.io-client";

const DEFAULT_SOCKET_URL = (process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:4001").replace(/\/$/, "");
const DEFAULT_PATH = "/"; // if your socket server serves at root; otherwise adjust

let socket: Socket | null = null;
let currentToken: string | null = null;

/**
 * createSocket() - internal helper to (re)create socket with token
 */
function createSocket(token?: string) {
  const url = DEFAULT_SOCKET_URL;
  const opts: any = {
    path: DEFAULT_PATH,
    transports: ["websocket"],
    autoConnect: false,
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelayMax: 5000,
    timeout: 20000,
  };

  if (token) {
    opts.auth = { token };
  }

  const s = io(url, opts);
  // helpful debug logs
  s.on("connect", () => {
    // eslint-disable-next-line no-console
    console.debug("[socket] connected", s.id);
  });
  s.on("connect_error", (err: any) => {
    // eslint-disable-next-line no-console
    console.warn("[socket] connect_error", err && err.message ? err.message : err);
  });
  s.on("disconnect", (reason: any) => {
    // eslint-disable-next-line no-console
    console.debug("[socket] disconnected", reason);
  });

  return s;
}

/**
 * connectWithToken(token)
 * - creates (or recreates) the socket with token and connects
 */
export async function connectWithToken(token?: string) {
  // prefer explicit token, otherwise attempt to read global/local fallback
  const t = token ?? (typeof window !== "undefined" ? (window as any).__SESSION_TOKEN ?? (localStorage.getItem("session") ?? null) : null);
  currentToken = t;

  // if socket exists and token unchanged, just ensure connected
  if (socket && socket.connected && currentToken === t) {
    return socket;
  }

  // if socket exists but token changed, clean up
  if (socket) {
    try {
      socket.removeAllListeners();
      socket.disconnect();
    } catch {}
    socket = null;
  }

  socket = createSocket(t ?? undefined);

  // Connect
  try {
    socket.connect();
    // wait for connect with a Promise (timeout)
    await new Promise<void>((resolve, reject) => {
      const to = setTimeout(() => {
        // don't reject — leave to app to handle offline mode
        clearTimeout(to);
        resolve();
      }, 3000);
      socket!.once("connect", () => {
        clearTimeout(to);
        resolve();
      });
      socket!.once("connect_error", () => {
        clearTimeout(to);
        resolve(); // resolve so UI can continue; connection may recover
      });
    });
  } catch (err) {
    // swallow; connect errors are non-fatal for UI
  }

  return socket;
}

/**
 * disconnectSocket()
 */
export function disconnectSocket() {
  try {
    if (socket) {
      socket.disconnect();
      socket.removeAllListeners();
      socket = null;
      currentToken = null;
    }
  } catch {}
}

/**
 * joinRoom / leaveRoom helpers
 * rooms are plain strings (e.g., `chat:abc`, `user:xxx`, `org:yyy`)
 */
export async function joinRoom(room: string) {
  if (!socket) await connectWithToken();
  try {
    socket?.emit("join_chat", { chatId: room.startsWith("chat:") ? room.split("chat:")[1] : room });
    // also call socket.join on server-side; client telling server via join_chat is typical
  } catch {}
}

export async function leaveRoom(room: string) {
  try {
    socket?.emit("leave_chat", { chatId: room.startsWith("chat:") ? room.split("chat:")[1] : room });
  } catch {}
}

/**
 * sendEvent(event, payload)
 */
export function sendEvent(event: string, payload?: any) {
  try {
    if (!socket) {
      // call connectWithToken but do not await long
      connectWithToken().then(() => {
        socket?.emit(event, payload);
      });
      return;
    }
    socket.emit(event, payload);
  } catch {}
}

/**
 * on(event, handler) / off(event, handler)
 */
export function onEvent(event: string, handler: (...args: any[]) => void) {
  try {
    if (!socket) {
      // best-effort connect
      connectWithToken().then(() => {
        socket?.on(event, handler);
      });
      return;
    }
    socket.on(event, handler);
  } catch {}
}

export function offEvent(event: string, handler?: (...args: any[]) => void) {
  try {
    if (!socket) return;
    if (handler) socket.off(event, handler);
    else socket.removeAllListeners(event);
  } catch {}
}

/**
 * getSocket() - returns the underlying socket instance (may be null)
 */
export function getSocketInstance() {
  return socket;
}

export default {
  connectWithToken,
  disconnectSocket,
  joinRoom,
  leaveRoom,
  sendEvent,
  onEvent,
  offEvent,
  getSocketInstance,
};
