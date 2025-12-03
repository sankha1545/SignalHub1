// socket-server/index.js
// Simple standalone Socket.IO server with an HTTP /emit endpoint
// Usage: NODE_ENV=production node index.js
// Environment:
//  - PORT (default 4001)
//  - JWT_SECRET (optional) — if provided, verifies client tokens
//  - SOCKET_SERVER_KEY (required for backend → server emit endpoint)
require('dotenv').config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");



const PORT = process.env.PORT ? Number(process.env.PORT) : 4001;
const JWT_SECRET = process.env.JWT_SECRET || "";
const SOCKET_SERVER_KEY = process.env.SOCKET_SERVER_KEY || "";

if (!SOCKET_SERVER_KEY) {
  console.warn("⚠️  Warning: SOCKET_SERVER_KEY not set. Set this to a shared secret for the /emit endpoint.");
}

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "1mb" }));

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: true, methods: ["GET", "POST"] },
  pingTimeout: 30000,
});

// Simple middleware to parse auth token (either query token or header)
async function authFromSocket(socket, next) {
  try {
    const token = socket.handshake.auth?.token || socket.handshake.headers?.authorization?.split?.("Bearer ")?.[1];
    if (!token) {
      // allow anonymous connection (still can join rooms later if client requests)
      socket._auth = null;
      return next();
    }
    if (JWT_SECRET) {
      const payload = jwt.verify(token, JWT_SECRET);
      // expect payload contains at least { id, organizationId, role }
      socket._auth = payload;
      return next();
    } else {
      // no JWT_SECRET configured — accept token as JSON-stringified payload
      try {
        socket._auth = JSON.parse(Buffer.from(token, "base64").toString("utf8"));
      } catch {
        socket._auth = null;
      }
      return next();
    }
  } catch (err) {
    console.warn("socket auth error:", err.message || err);
    // still allow (or disconnect?) — we'll allow but mark unauthenticated
    socket._auth = null;
    return next();
  }
}

io.use(authFromSocket);

io.on("connection", (socket) => {
  const auth = socket._auth || null;
  // Join rooms for authenticated user
  if (auth && auth.id) {
    const userRoom = `user:${auth.id}`;
    socket.join(userRoom);
  }
  if (auth && auth.organizationId) {
    socket.join(`org:${auth.organizationId}`);
  }

  // Optional client-driven join/leave for chat rooms:
  socket.on("join_chat", (data) => {
    try {
      const chatId = data?.chatId;
      if (chatId) socket.join(`chat:${chatId}`);
    } catch {}
  });
  socket.on("leave_chat", (data) => {
    try {
      const chatId = data?.chatId;
      if (chatId) socket.leave(`chat:${chatId}`);
    } catch {}
  });

  // Allow client to request a presence ping
  socket.on("ping:user", (cb) => {
    try {
      cb && cb({ ok: true, ts: Date.now() });
    } catch {}
  });

  socket.on("disconnect", (reason) => {
    // noop for now
  });
});

/**
 * POST /emit
 * Body: { key: string, rooms?: string[] | string, event: string, payload: any, excludeSocketId?: string }
 * - key required and must match SOCKET_SERVER_KEY
 * - rooms can be a single string or array; if omitted emits globally
 * Example:
 *  POST /emit { key: "...", rooms: ["user:abc","chat:123"], event: "chat:message", payload: {...} }
 */
app.post("/emit", (req, res) => {
  try {
    const { key, rooms, event, payload, excludeSocketId } = req.body || {};
    if (!SOCKET_SERVER_KEY || key !== SOCKET_SERVER_KEY) {
      return res.status(401).json({ ok: false, message: "Invalid server key" });
    }
    if (!event || typeof event !== "string") {
      return res.status(400).json({ ok: false, message: "Missing event" });
    }

    // normalize rooms
    const roomList = Array.isArray(rooms) ? rooms.filter(Boolean) : (rooms ? [rooms] : []);

    if (roomList.length === 0) {
      // emit globally
      io.emit(event, payload);
      return res.json({ ok: true, broadcast: "global" });
    }

    // emit to each room
    for (const r of roomList) {
      try {
        if (excludeSocketId) {
          io.to(r).except(excludeSocketId).emit(event, payload);
        } else {
          io.to(r).emit(event, payload);
        }
      } catch (e) {
        console.warn("emit to room failed:", r, e?.message || e);
      }
    }

    return res.json({ ok: true, rooms: roomList });
  } catch (err) {
    console.error("/emit error:", err);
    return res.status(500).json({ ok: false, message: "server error" });
  }
});

server.listen(PORT, () => {
  console.log(`✅ Socket server listening on port ${PORT}`);
  console.log(` - POST /emit protected by SOCKET_SERVER_KEY`);
});
