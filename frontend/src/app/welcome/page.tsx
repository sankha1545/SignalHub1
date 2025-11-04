"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProfileMenu from "@/components/profile/ProfileMenu";

type Role = "VIEWER" | "EDITOR" | "ADMIN" | string;

type User = {
  id: string;
  email: string;
  name?: string;
  role?: Role;
  tenantId?: string | null;
};

type AnalyticsSummary = {
  messages7d: number;
  avgResponseMins: number;
  openRatePct: number;
  sparkline: number[];
};

type ThreadPreviewItem = {
  id: string;
  contactName: string;
  contactPhone?: string;
  channels: string[];
  snippet: string;
  lastAt: string; // ISO
  unreadCount?: number;
  status?: string;
};

type ProviderNumber = {
  id: string;
  phone: string;
  provider: string;
  capabilities?: Record<string, boolean>;
  purchased: boolean;
};

export default function WelcomePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [threads, setThreads] = useState<ThreadPreviewItem[]>([]);
  const [numbers, setNumbers] = useState<ProviderNumber[]>([]);

  const [composerOpen, setComposerOpen] = useState(false);
  const [contactModal, setContactModal] = useState<{ contactId: string } | null>(null);
  const [buying, setBuying] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();
    const signal = controller.signal;

    async function loadAll() {
      setLoading(true);
      try {
        const [meRes, analyticsRes, threadsRes, numbersRes] = await Promise.all([
          fetch(`/api/me`, { signal }),
          fetch(`/api/analytics/summary`, { signal }),
          fetch(`/api/threads?limit=5`, { signal }),
          fetch(`/api/twilio/numbers`, { signal }),
        ]);

        if (!mounted) return;

        // /api/me
        if (meRes.ok) {
          try {
            const j = await meRes.json();
            setUser(j.user ?? null);
          } catch (err) {
            console.warn("welcome: /api/me parse error", err);
            setUser(null);
          }
        } else {
          setUser(null);
        }

        // analytics
        if (analyticsRes.ok) {
          try {
            const j = await analyticsRes.json();
            setAnalytics({
              messages7d: j.messages7d ?? 0,
              avgResponseMins: j.avgResponseMins ?? 0,
              openRatePct: j.openRatePct ?? 0,
              sparkline: Array.isArray(j.sparkline) && j.sparkline.length ? j.sparkline : [1, 2, 3, 2, 4],
            });
          } catch (e) {
            console.warn("welcome: analytics parse error", e);
            setAnalytics(null);
          }
        }

        // threads
        if (threadsRes.ok) {
          try {
            const j = await threadsRes.json();
            setThreads(Array.isArray(j.threads) ? j.threads : []);
          } catch (e) {
            console.warn("welcome: threads parse error", e);
            setThreads([]);
          }
        }

        // numbers
        if (numbersRes.ok) {
          try {
            const j = await numbersRes.json();
            setNumbers(Array.isArray(j.numbers) ? j.numbers : []);
          } catch (e) {
            console.warn("welcome: numbers parse error", e);
            setNumbers([]);
          }
        }
      } catch (e) {
        if ((e as any).name === "AbortError") {
          // expected on unmount
        } else {
          console.error("welcome: loadAll error", e);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadAll();

    return () => {
      mounted = false;
      controller.abort();
    };
  }, []);

  const role = (user?.role ?? "VIEWER").toString().toUpperCase();
  const isAdmin = role === "ADMIN";
  const isEditor = role === "EDITOR" || isAdmin;

  function handlePrimary() {
    if (isAdmin) router.push("/admin");
    else router.push("/inbox");
  }

  async function handleBuyNumber(id: string) {
    setBuying(id);
    try {
      const res = await fetch(`/api/twilio/buy`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error("failed to buy");
      const refreshed = await fetch(`/api/twilio/numbers`);
      if (refreshed.ok) {
        const j = await refreshed.json();
        setNumbers(Array.isArray(j.numbers) ? j.numbers : []);
      }
    } catch (e) {
      console.error(e);
      // prefer a user-visible message
      alert("Failed to buy number. Check logs or sandbox mode.");
    } finally {
      setBuying(null);
    }
  }

  function openComposer(threadId?: string) {
    if (!isEditor) return;
    setComposerOpen(true);
  }

  function closeComposer() {
    setComposerOpen(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 12h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M7 6v12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-900">SignalHub</div>
              <div className="text-xs text-slate-500">Unified Inbox • Multi-channel outreach</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1 bg-slate-100 text-slate-800 text-sm">
              <strong className="uppercase">{role}</strong>
              <span className="text-xs text-slate-600">access</span>
            </div>

            <ProfileMenu email={user?.email} avatarUrl={undefined} />
          </div>
        </div>

        {/* hero + features */}
        <header className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M3 12h18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 6v12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                    SignalHub — Unified Inbox for Multi-Channel Outreach
                  </h1>
                  <p className="mt-3 text-slate-600 max-w-2xl">
                    Manage SMS, WhatsApp and Email threads in one place, collaborate with your team in
                    real time, schedule messages, and measure impact — built with secure webhooks and
                    role-based controls.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 items-center">
                    <button
                      type="button"
                      onClick={handlePrimary}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:scale-[1.01] transition-transform"
                    >
                      {isAdmin ? "Open Admin Dashboard" : "Go to Inbox"}
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>

                    <Link href="/settings" className="px-4 py-2 rounded-lg border text-slate-700 hover:bg-slate-50">
                      Configure Integrations
                    </Link>

                    {isEditor && (
                      <button
                        type="button"
                        onClick={() => openComposer()}
                        className="px-4 py-2 rounded-lg border bg-white text-slate-700 hover:bg-slate-50"
                      >
                        Quick Compose
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* quick feature cards */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <FeatureCard
                  title="Unified Threads"
                  desc="All messages normalized into threads per contact — SMS, WhatsApp, Email. Click a thread to preview."
                />
                <FeatureCard
                  title="Schedule & Automate"
                  desc="Schedule outbound messages and run background workers for timed delivery."
                />
                <FeatureCard
                  title="Team Collaboration"
                  desc="Real-time presence, shared notes, and role-based permissions."
                />
                <FeatureCard
                  title="Analytics"
                  desc="Quick insights: volume, response time and delivery KPIs. Exportable CSVs."
                />
              </div>

              {/* twilio sandbox status + numbers */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-rose-50 p-4 bg-rose-50/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">Twilio Sandbox</div>
                      <div className="text-xs text-slate-600">Trial mode — numbers are simulated unless purchased</div>
                    </div>
                    <div className="text-xs text-slate-500">Sandbox</div>
                  </div>

                  <div className="mt-3">
                    <div className="text-xs text-slate-700 mb-2">Available numbers</div>
                    <div className="space-y-2">
                      {numbers.length === 0 ? (
                        <div className="text-xs text-slate-500">No sandbox numbers found.</div>
                      ) : (
                        numbers.slice(0, 4).map((n) => (
                          <div key={n.id} className="flex items-center justify-between bg-white rounded-lg p-2 border">
                            <div>
                              <div className="font-medium">{n.phone}</div>
                              <div className="text-xs text-slate-500">
                                {n.provider} • {n.capabilities ? Object.keys(n.capabilities).filter((k) => n.capabilities?.[k]).join(", ") : "—"}
                              </div>
                            </div>
                            <div>
                              {n.purchased ? (
                                <span className="text-xs text-green-600">Purchased</span>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => handleBuyNumber(n.id)}
                                  className="px-3 py-1 rounded bg-indigo-600 text-white text-xs"
                                  disabled={!!buying}
                                >
                                  {buying === n.id ? "Buying…" : "Buy Now"}
                                </button>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">Integration status</div>
                      <div className="text-xs text-slate-600">Connected providers & webhook health</div>
                    </div>
                    <div className="text-xs text-slate-500">OK</div>
                  </div>

                  <div className="mt-3 text-sm text-slate-700">
                    Twilio (Sandbox) — Webhook configured
                    <div className="mt-2 text-xs text-slate-500">Resend (Email) — Not connected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right column: analytics + quick stats */}
          <aside className="space-y-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-700">Last 7 days</h3>
                <span className="text-xs text-slate-500">{loading ? "Loading…" : "Updated"}</span>
              </div>

              <div className="mt-3">
                <div className="flex items-end gap-6">
                  <div>
                    <div className="text-2xl font-bold">{analytics?.messages7d ?? "—"}</div>
                    <div className="text-xs text-slate-500">Messages</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{analytics?.avgResponseMins ?? "—"}m</div>
                    <div className="text-xs text-slate-500">Avg response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{analytics?.openRatePct ?? "—"}%</div>
                    <div className="text-xs text-slate-500">Open rate</div>
                  </div>
                </div>

                <div className="mt-4">
                  <Sparkline data={analytics?.sparkline ?? [1, 2, 3, 2, 4]} />
                </div>

                <div className="mt-4 text-xs text-slate-500">View full analytics for channel breakdown, response time histograms, and exportable reports.</div>
              </div>
            </div>

            {/* Quick actions card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Quick actions</h4>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  className={`text-left px-3 py-2 rounded-lg ${isEditor ? "bg-blue-50" : "bg-slate-50 text-slate-500 cursor-not-allowed"}`}
                  onClick={() => (isEditor ? openComposer() : null)}
                  aria-disabled={!isEditor}
                >
                  Compose message {isEditor ? "" : "(editor required)"}
                </button>
                <button
                  type="button"
                  className={`text-left px-3 py-2 rounded-lg ${isAdmin ? "bg-indigo-50" : "bg-slate-50 text-slate-500 cursor-not-allowed"}`}
                  onClick={() => (isAdmin ? router.push("/admin") : null)}
                  aria-disabled={!isAdmin}
                >
                  Manage team {isAdmin ? "" : "(admin only)"}
                </button>
                <Link className="text-left px-3 py-2 rounded-lg bg-slate-50" href="/analytics">
                  View analytics
                </Link>
                <Link className="text-left px-3 py-2 rounded-lg bg-slate-50" href="/settings">
                  Integrations & webhooks
                </Link>
              </div>
            </div>
          </aside>
        </header>

        {/* middle: thread preview + tasks */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Live thread preview</h2>
              <div className="text-sm text-slate-500">Normalized view • unified timeline</div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-100">
              <div className="p-4 bg-gradient-to-r from-slate-50 to-white">
                <ThreadsList threads={threads} onOpenContact={(id) => setContactModal({ contactId: id })} onCompose={() => openComposer()} />
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              This preview demonstrates how inbound messages from different channels are shown
              as one thread per contact. The composer is role-gated — viewers can only
              read, editors can send/schedule, admins can manage settings & team.
            </div>
          </div>

          <aside className="bg-white rounded-3xl p-6 shadow border border-slate-100">
            <h3 className="text-sm font-semibold mb-3">Get started — suggested next steps</h3>

            <ol className="text-sm space-y-3 list-decimal list-inside text-slate-700">
              <li>
                Open <Link href="/inbox" className="text-blue-600">Inbox</Link> and review threads.
              </li>
              <li>{isEditor ? "Compose and schedule a test message." : "Request editor access to send messages."}</li>
              <li>Verify Twilio Sandbox under <Link href="/settings" className="text-blue-600">Settings</Link>.</li>
              <li>{isAdmin ? <><Link href="/admin" className="text-blue-600">Manage team</Link> & set roles.</> : "Ask an admin to add you to a team."}</li>
              <li>Open <Link href="/analytics" className="text-blue-600">Analytics</Link> to review KPIs.</li>
            </ol>

            <div className="mt-6">
              <Link href="/inbox" className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                Start working
              </Link>
            </div>
          </aside>
        </section>

        <footer className="mt-12 text-center text-sm text-slate-500">
          Built for the Attack Capital assignment — multi-channel outreach, scheduling, team
          collaboration and analytics.
        </footer>

        {/* Composer Modal (lightweight) */}
        {composerOpen && (
          <ComposerModal onClose={closeComposer} onSent={() => { closeComposer(); /* refresh threads if needed */ }} />
        )}

        {/* Contact modal (lightweight) */}
        {contactModal && (
          <ContactProfileModal contactId={contactModal.contactId} onClose={() => setContactModal(null)} />
        )}
      </div>
    </main>
  );
}

/* ----------------------------- Small components ---------------------------- */

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 7h16M4 12h10M4 17h7" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-800">{title}</div>
        <div className="text-xs text-slate-500 mt-1">{desc}</div>
      </div>
    </div>
  );
}

function ThreadsList({ threads, onOpenContact, onCompose }: { threads: ThreadPreviewItem[]; onOpenContact: (id: string) => void; onCompose?: (t?: any) => void }) {
  if (!threads || threads.length === 0) {
    return <div className="p-6 text-sm text-slate-500">No recent threads yet.</div>;
  }

  return (
    <div className="divide-y">
      {threads.map((t) => (
        <div key={t.id} className="p-3 hover:bg-slate-50 flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-medium">{t.contactName}</div>
                <div className="text-xs text-slate-500">{t.contactPhone ?? "—"} • {t.channels.join(" • ")}</div>
              </div>
              <div className="text-xs text-slate-400">{new Date(t.lastAt).toLocaleTimeString()}</div>
            </div>
            <div className="mt-2 text-sm text-slate-700">{t.snippet}</div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <button type="button" onClick={() => onOpenContact(t.id)} className="text-xs px-3 py-1 rounded bg-slate-50">Profile</button>
            <button type="button" onClick={() => (onCompose ? onCompose(t) : null)} className="text-xs px-3 py-1 rounded bg-indigo-600 text-white">Reply</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function ContactProfileModal({ contactId, onClose }: { contactId: string; onClose: () => void }) {
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState<any | null>(null);
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();
    const signal = controller.signal;

    async function load() {
      try {
        const [cRes, nRes] = await Promise.all([
          fetch(`/api/contacts/${contactId}`, { signal }),
          fetch(`/api/contacts/${contactId}/notes`, { signal }),
        ]);
        if (!mounted) return;
        if (cRes.ok) setContact(await cRes.json());
        if (nRes.ok) setNotes(await nRes.json());
      } catch (e) {
        if ((e as any).name !== "AbortError") console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
      controller.abort();
    };
  }, [contactId]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative max-w-3xl w-full bg-white rounded-2xl p-6 shadow-lg z-10">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">Contact profile</h3>
          <button type="button" onClick={onClose} className="text-sm text-slate-500">Close</button>
        </div>

        {loading ? (
          <div className="mt-4">Loading…</div>
        ) : (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="text-sm font-semibold">{contact?.name ?? contact?.phone ?? "Contact"}</div>
              <div className="text-xs text-slate-500 mt-1">{contact?.email ?? "—"}</div>

              <div className="mt-4">
                <div className="text-sm font-medium">Notes</div>
                <div className="mt-2 space-y-2">
                  {notes.length === 0 ? (
                    <div className="text-xs text-slate-500">No notes</div>
                  ) : (
                    notes.map((n) => (
                      <div key={n.id} className="p-2 bg-slate-50 rounded">{n.encrypted ? "(encrypted)" : n.body}</div>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="text-sm font-medium">Quick actions</div>
              <div className="mt-2 flex flex-col gap-2">
                <Link href={`/inbox?contact=${contactId}`} className="px-3 py-2 rounded bg-blue-600 text-white text-sm text-center">Open thread</Link>
                <button type="button" className="px-3 py-2 rounded bg-slate-50 text-sm">Add private note</button>
                <button type="button" className="px-3 py-2 rounded bg-slate-50 text-sm">Merge duplicates</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ComposerModal({ onClose, onSent }: { onClose: () => void; onSent?: () => void }) {
  const [to, setTo] = useState("");
  const [channel, setChannel] = useState<"SMS" | "WHATSAPP" | "EMAIL">("SMS");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSend() {
    setSending(true);
    try {
      const res = await fetch(`/api/messages/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to, channel, body }),
      });
      if (!res.ok) throw new Error("send failed");
      onSent?.();
      onClose();
    } catch (e) {
      console.error(e);
      alert("Failed to send message");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative max-w-2xl w-full bg-white rounded-2xl p-6 shadow-lg z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Compose message</h3>
          <button type="button" onClick={onClose} className="text-sm text-slate-500">Close</button>
        </div>

        <div className="mt-4 space-y-3">
          <div>
            <label className="text-xs text-slate-600">To</label>
            <input className="w-full rounded border px-3 py-2 mt-1" value={to} onChange={(e) => setTo(e.target.value)} placeholder="E.164 phone or email" />
          </div>

          <div>
            <label className="text-xs text-slate-600">Channel</label>
            <select className="w-full rounded border px-3 py-2 mt-1" value={channel} onChange={(e) => setChannel(e.target.value as any)}>
              <option value="SMS">SMS</option>
              <option value="WHATSAPP">WhatsApp</option>
              <option value="EMAIL">Email</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-slate-600">Message</label>
            <textarea className="w-full rounded border px-3 py-2 mt-1" rows={4} value={body} onChange={(e) => setBody(e.target.value)} />
          </div>

          <div className="flex items-center justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
            <button type="button" onClick={handleSend} disabled={sending || !to || !body} className="px-4 py-2 rounded bg-indigo-600 text-white">{sending ? "Sending…" : "Send"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkline({ data }: { data: number[] }) {
  const width = 160;
  const height = 40;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1 || 1)) * width;
      const y = height - ((v - min) / (max - min || 1)) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden>
      <polyline
        fill="none"
        stroke="#4F46E5"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
        points={points}
      />
    </svg>
  );
}
