"use client";
import React from "react";
import { ChatSocketProvider } from "./ChatSocketProvider";

export default function DashboardClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ChatSocketProvider getToken={() => (window as any).__SESSION_TOKEN ?? localStorage.getItem("session")}>
      {children}
    </ChatSocketProvider>
  );
}
