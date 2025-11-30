"use client";


import React from "react";


export default function MessageBubble({ message, currentUserId }: any) {
const mine = message.senderId === currentUserId;
const role = message.meta?.role || "employee";
return (
<div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
<div className={`max-w-[70%] p-2 rounded-lg ${mine ? "bg-blue-600 text-white" : "bg-gray-100 text-black"}`}>
<div className="text-xs opacity-70">{message.senderName || message.senderId} • {role}</div>
<div className="mt-1 whitespace-pre-wrap">{message.content}</div>
<div className="text-[10px] opacity-60 text-right mt-1">{new Date(message.createdAt).toLocaleTimeString()}</div>
</div>
</div>
);
}