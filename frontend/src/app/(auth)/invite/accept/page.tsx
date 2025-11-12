// app/(auth)/invite/accept/page.tsx
"use client";
import { useSearchParams } from "next/navigation";

export default function InviteAcceptPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  if (!token) return <p>Invalid invite link</p>;

  return (
    <div style={{ padding: 24 }}>
      <h1>Accept your invite</h1>
      <p>Token: {token}</p>
      {/* Add form to complete signup */}
    </div>
  );
}
