import { io, Socket } from "socket.io-client";


let socket: Socket | null = null;


function getSocket() {
if (!socket) {
socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "", {
path: "/api/socketio",
autoConnect: true,
transports: ["websocket"],
});
}
return socket;
}


export default getSocket();