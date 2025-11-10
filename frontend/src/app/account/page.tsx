// src/app/account/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type UserResp = {
  ok: boolean;
  user?: any;
  error?: string;
};

export default function AccountPage() {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await fetch("/api/me");
      const json: UserResp = await res.json().catch(() => ({ ok: false }));
      if (json?.ok && json.user) {
        setUser(json.user);
        setForm({
          name: json.user.name ?? "",
          phone: json.user.phone ?? "",
          displayName: json.user.profile?.displayName ?? "",
          avatarUrl: json.user.profile?.avatarUrl ?? "",
          bio: json.user.profile?.bio ?? "",
        });
      } else {
        // not authenticated -> go to login
        router.push("/login");
      }
      setLoading(false);
    }
    load();
  }, [router]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const body = {
      name: form.name,
      phone: form.phone,
      profile: {
        displayName: form.displayName,
        avatarUrl: form.avatarUrl,
        bio: form.bio,
        phoneNumber: form.phone,
      },
    };
    const res = await fetch("/api/me", { method: "PATCH", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } });
    const json = await res.json().catch(() => ({ ok: false }));
    if (json.ok) {
      setUser(json.user);
      setEditing(false);
    } else {
      alert(json.error || "Failed to update");
    }
    setLoading(false);
  }

  if (loading && !user) return <div className="p-6">Loading…</div>;
  if (!user) return <div className="p-6">No user data</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden">
          {user.profile?.avatarUrl ? <img src={user.profile.avatarUrl} alt="avatar" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-xl text-slate-500">{(user.name || user.email || "U").charAt(0)}</div>}
        </div>
        <div>
          <h1 className="text-2xl font-bold">{user.name || user.email}</h1>
          <div className="text-sm text-slate-500">{user.email}</div>
          <div className="text-xs text-slate-400">Role: {user.role}</div>
        </div>
      </div>

      <div className="bg-white rounded shadow p-4">
        {!editing ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-slate-500">Name</div>
                <div className="font-medium">{user.name}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Phone</div>
                <div className="font-medium">{user.phone || "—"}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Organization</div>
                <div className="font-medium">{user.organizationName || "—"}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Joined</div>
                <div className="font-medium">{new Date(user.createdAt).toLocaleString()}</div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded" onClick={() => setEditing(true)}>Edit profile</button>
              <button className="px-4 py-2 border rounded" onClick={() => router.push("/")}>Back to app</button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="text-xs text-slate-500">Full name</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="text-xs text-slate-500">Phone</label>
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="text-xs text-slate-500">Display name</label>
              <input value={form.displayName} onChange={(e) => setForm({ ...form, displayName: e.target.value })} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="text-xs text-slate-500">Bio</label>
              <textarea value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} className="w-full p-2 border rounded" />
            </div>

            <div className="flex gap-2">
              <button type="submit" className="px-4 py-2 bg-emerald-600 text-white rounded">Save</button>
              <button type="button" className="px-4 py-2 border rounded" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
