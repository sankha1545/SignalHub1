// src/types/chat.ts
export type Role = 'ADMIN' | 'MANAGER' | 'EMPLOYEE';

export type UserSummary = {
  id: string;
  name?: string | null;
  avatarUrl?: string | null;
  role: Role;
  designation?: string | null;
};

export type Message = {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  contentType: 'TEXT' | 'IMAGE' | 'FILE';
  createdAt: string;
  sender?: UserSummary;
};

export type ChatType = 'GROUP' | 'PRIVATE';

export type Chat = {
  id: string;
  organizationId: string;
  name?: string | null;
  type: ChatType;
  members?: UserSummary[]; // for group chats (admin excluded)
  lastMessage?: Message | null;
  unreadCount?: number;
  isAdminView?: boolean; // server-side flag to indicate admin has view access
};
