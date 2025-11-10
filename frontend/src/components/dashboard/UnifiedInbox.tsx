"use client";
import React, { useEffect, useState } from "react";

interface Message {
  id: string;
  sender: { name: string };
  recipient: { name: string };
  content: string;
  channel: string;
  createdAt: string;
}

const UnifiedInbox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch("/api/dashboard/unified-inbox")
      .then((res) => res.json())
      .then((data) => setMessages(data.messages || []));
  }, []);

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="font-bold mb-2">Unified Inbox</h2>
      <ul className="space-y-2 max-h-96 overflow-y-auto">
        {messages.map((msg) => (
          <li key={msg.id} className="border-b py-2">
            <p className="text-gray-600 text-sm">
              <strong>{msg.sender.name}</strong> → {msg.recipient.name} [{msg.channel}]
            </p>
            <p>{msg.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnifiedInbox;
