// src/lib/socketAdapter.ts
// Adapter to forward legacy `global.io` / `global._io` / `global.socketServer`
// calls to the standalone socket server via the /emit HTTP endpoint.

import { emitToRooms } from "@/lib/socket";

type EmitFn = (event: string, payload?: any) => Promise<void> | void;

function makeRoomEmitter(room: string | string[]) {
  return {
    emit: (event: string, payload?: any) => {
      return emitToRooms({ event, payload, rooms: room });
    },
    // allow io.to(room).except(socketId).emit(...) pattern
    except: (socketId: string) => ({
      emit: (event: string, payload?: any) => {
        return emitToRooms({ event, payload, rooms: room, excludeSocketId: socketId });
      },
    }),
  };
}

// Single shared adapter instance
const adapter = {
  /**
   * io.emit("event", payload)
   *  -> broadcast globally
   */
  emit: ((event: string, payload?: any) => {
    return emitToRooms({ event, payload });
  }) as EmitFn,

  /**
   * io.to("room").emit("event", payload)
   *  -> broadcast to specific room(s)
   */
  to: (room: string | string[]) => makeRoomEmitter(room),
};

// Attach to global only once
declare global {
  // eslint-disable-next-line no-var
  var __socketAdapterInitialized: boolean | undefined;
}

function attachGlobals() {
  if (global.__socketAdapterInitialized) return;
  global.__socketAdapterInitialized = true;

  // These are the names used in your API code:
  // (global as any).io || (global as any)._io || (global as any).socketServer
  const g: any = global;

  if (!g.io) g.io = adapter;
  if (!g._io) g._io = adapter;
  if (!g.socketServer) g.socketServer = adapter;
}

// Run immediately on import (server-only)
attachGlobals();

export { adapter as socketAdapter };
