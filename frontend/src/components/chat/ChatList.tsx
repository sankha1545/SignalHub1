"use client";


import React, { useEffect, useState } from "react";


export default function ChatList({ onOpenChat }: { onOpenChat: (chatId: string) => void }) {
const [chats, setChats] = useState<any[]>([]);


useEffect(() => {
fetch(`/api/chats`).then((r) => r.json()).then((data) => setChats(data.chats || []));
const onTeamCreated = (payload: any) => {
// reload minimal list or optimistic push
setChats((c) => [payload.chat, ...c]);
};
// subscribe to socket event
import("@/lib/socketClient").then((mod) => {
const socket = mod.default;
socket.on("team:created", onTeamCreated);
});
return () => {
import("@/lib/socketClient").then((mod) => mod.default.off("team:created"));
};
}, []);


return (
<div className="divide-y">
{chats.map((c) => (
<div key={c.id} className="p-3 hover:bg-muted cursor-pointer" onClick={() => onOpenChat(c.id)}>
<div className="font-medium">{c.name}</div>
<div className="text-sm text-muted-foreground">{c.lastMessagePreview || "No messages yet"}</div>
</div>
))}
</div>
);
}