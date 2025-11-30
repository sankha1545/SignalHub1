"use client";


import React, { useEffect, useRef, useState } from "react";
import { Message } from "@/types/chat";
import socketClient from "@/lib/socketClient";
import MessageBubble from "@/components/chat/MessageBubble";


export default function TeamChat({ chatId, currentUser }: { chatId: string; currentUser: any }) {
const [messages, setMessages] = useState<Message[]>([]);
const [text, setText] = useState("");
const listRef = useRef<HTMLDivElement | null>(null);


useEffect(() => {
let mounted = true;
// fetch history
fetch(`/api/chats/${chatId}`)
.then((r) => r.json())
.then((data) => {
if (!mounted) return;
setMessages(data.messages || []);
// join room
socketClient.emit("join", { room: `team:${chatId}` });
});


const onMessage = (msg: Message) => setMessages((m) => [...m, msg]);
socketClient.on("message", (payload: any) => {
if (payload.chatId === chatId) onMessage(payload.message);
});


return () => {
mounted = false;
socketClient.emit("leave", { room: `team:${chatId}` });
socketClient.off("message");
};
}, [chatId]);


useEffect(() => {
// scroll to bottom
if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
}, [messages.length]);


const send = async () => {
if (!text.trim()) return;
const payload = {
chatId,
content: text.trim(),
senderId: currentUser.id,
meta: { role: currentUser.role },
};
// optimistic UI
setMessages((m) => [...m, { id: `local-${Date.now()}`, ...payload, createdAt: new Date().toISOString() } as any]);
setText("");
socketClient.emit("message", payload);
// fallback persist
await fetch(`/api/chats/${chatId}`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(payload),
});
};


return (
<div className="flex flex-col h-full">
<div ref={listRef} className="flex-1 overflow-auto p-4 space-y-3">
{messages.map((m) => (
<MessageBubble key={m.id} message={m} currentUserId={currentUser.id} />
))}
</div>


<div className="p-3 border-t flex gap-2">
<input
value={text}
onChange={(e) => setText(e.target.value)}
onKeyDown={(e) => e.key === "Enter" && send()}
placeholder="Write a message..."
className="flex-1 rounded-md border px-3 py-2"
/>
<button onClick={send} className="btn">Send</button>
</div>
</div>
);
}