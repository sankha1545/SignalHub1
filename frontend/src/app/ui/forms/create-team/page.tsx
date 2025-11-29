// src/app/ui/forms/create-team/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { X, Plus, UserPlus, Star, Trash2 } from "lucide-react";

type User = { id: string; name?: string; email?: string };
type TeamMemberShape = { id?: string; user?: { id?: string; name?: string; email?: string } };

type Team = {
  id?: string;
  name?: string;
  description?: string | null;
  manager?: { id?: string; name?: string };
  managerId?: string | null;
  featured?: boolean;
  gradient?: string;
  projects?: number;
  completion?: number;
  members?: TeamMemberShape[];
};

type Props = {
  managers?: User[]; // optional pre-provided lists (if parent fetched)
  employees?: User[];
  loadingUsers?: boolean;
  initialTeam?: Team | null;
  onCreate?: (teamOrResponse: any) => void;
  onUpdate?: (id: string, payload: any) => void;
  onDelete?: (id: string) => void;
  onClose: () => void;
};

/* ---------- Helpers ---------- */
function getInitialsFromName(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Fetches a URL expecting a list or wrapper object { users: [...] } etc.
 * Returns array or throws on HTTP error.
 */
async function fetchJsonList(url: string) {
  const res = await fetch(url, { credentials: "same-origin" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const j = await res.json().catch(() => null);
  if (!j) return [];
  if (Array.isArray(j)) return j;
  if (Array.isArray((j as any).users)) return (j as any).users;
  if (Array.isArray((j as any).data)) return (j as any).data;
  if (Array.isArray((j as any).teams)) return (j as any).teams;
  return [];
}

/* ---------- Component ---------- */
export default function CreateTeamForm({
  managers: managersProp,
  employees: employeesProp,
  loadingUsers: loadingUsersProp = false,
  initialTeam = null,
  onCreate,
  onUpdate,
  onDelete,
  onClose,
}: Props) {
  const isEdit = Boolean(initialTeam?.id);

  // Controlled form state (initialize from initialTeam if present)
  const [name, setName] = useState(initialTeam?.name ?? "");
  const [description, setDescription] = useState(initialTeam?.description ?? "");
  const [managerId, setManagerId] = useState<string | "">(initialTeam?.manager?.id ?? initialTeam?.managerId ?? "");
  const [featured, setFeatured] = useState<boolean>(initialTeam?.featured ?? false);
  const [gradient, setGradient] = useState<string>(initialTeam?.gradient ?? "from-blue-500 to-cyan-500");
  // Use number | "" pattern so empty field stays empty
  const [projects, setProjects] = useState<number | "">(initialTeam?.projects ?? "");
  const [completion, setCompletion] = useState<number | "">(initialTeam?.completion ?? "");
  const [memberIds, setMemberIds] = useState<string[]>(
    () =>
      (initialTeam?.members ?? []).map((m: any) => String(m?.user?.id ?? m?.userId ?? m?.id ?? m)) ?? []
  );

  // Directory users (fetched or from props)
  const [employees, setEmployees] = useState<User[]>(employeesProp ?? []);
  const [managers, setManagers] = useState<User[]>(managersProp ?? []);
  const [loadingManagers, setLoadingManagers] = useState<boolean>(!!loadingUsersProp);
  const [loadingEmployees, setLoadingEmployees] = useState<boolean>(!!loadingUsersProp);

  // UI
  const [membersInput, setMembersInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Gradient choices
  const gradientOptions = [
    { id: "blue", label: "Blue / Cyan", value: "from-blue-500 to-cyan-500" },
    { id: "violet", label: "Violet / Purple", value: "from-violet-500 to-purple-500" },
    { id: "orange", label: "Orange / Rose", value: "from-orange-500 to-rose-500" },
    { id: "emerald", label: "Emerald / Teal", value: "from-emerald-500 to-teal-500" },
    { id: "cyan", label: "Cyan / Blue", value: "from-cyan-500 to-blue-500" },
    { id: "pink", label: "Pink / Rose", value: "from-pink-500 to-rose-500" },
  ];

  // Fetch lists if parent didn't provide them
  useEffect(() => {
    let mounted = true;

    if (!managersProp) {
      setLoadingManagers(true);
      fetchJsonList("/api/users?role=MANAGER")
        .then((list) => {
          if (!mounted) return;
          setManagers(list.map((u: any) => ({ id: String(u.id), name: u.name ?? u.email ?? u.id, email: u.email })));
        })
        .catch((err) => {
          console.warn("Could not load managers:", err);
          if (mounted) setManagers([]);
        })
        .finally(() => {
          if (mounted) setLoadingManagers(false);
        });
    } else {
      setManagers(managersProp);
      setLoadingManagers(false);
    }

    if (!employeesProp) {
      setLoadingEmployees(true);
      fetchJsonList("/api/users?role=EMPLOYEE")
        .then((list) => {
          if (!mounted) return;
          setEmployees(list.map((u: any) => ({ id: String(u.id), name: u.name ?? u.email ?? u.id, email: u.email })));
        })
        .catch((err) => {
          console.warn("Could not load employees:", err);
          if (mounted) setEmployees([]);
        })
        .finally(() => {
          if (mounted) setLoadingEmployees(false);
        });
    } else {
      setEmployees(employeesProp);
      setLoadingEmployees(false);
    }

    return () => {
      mounted = false;
    };
  }, [managersProp, employeesProp]);

  // Keep initialTeam changes in sync
  useEffect(() => {
    if (!initialTeam) return;
    setName(initialTeam.name ?? "");
    setDescription(initialTeam.description ?? "");
    setManagerId(initialTeam.manager?.id ?? initialTeam.managerId ?? "");
    setFeatured(initialTeam.featured ?? false);
    setGradient(initialTeam.gradient ?? "from-blue-500 to-cyan-500");
    setProjects(initialTeam.projects ?? "");
    setCompletion(initialTeam.completion ?? "");
    setMemberIds((initialTeam.members ?? []).map((m: any) => String(m?.user?.id ?? m?.userId ?? m?.id ?? m)));
  }, [initialTeam]);

  // Selected member objects for chips UI
  const selectedMembers = useMemo(() => {
    return memberIds
      .map((id) => employees.find((e) => e.id === id))
      .filter(Boolean)
      .map((e: any) => ({ id: e.id, name: e.name, initials: getInitialsFromName(e.name ?? "") }));
  }, [memberIds, employees]);

  function toggleMember(id: string) {
    setMemberIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  // Add ad-hoc member (not in directory): create synthetic id and include in payload as adhocMembers
  function addAdhocMember(nameStr: string) {
    const trimmed = (nameStr || "").trim();
    if (!trimmed) return;
    const fakeId = `adhoc-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    setEmployees((prev) => [{ id: fakeId, name: trimmed }, ...prev]);
    setMemberIds((prev) => [...prev, fakeId]);
    setMembersInput("");
  }

  function buildPayload() {
    // clamp completion to 0..100
    const comp = typeof completion === "number" ? Math.max(0, Math.min(100, completion)) : 0;
    const proj = typeof projects === "number" ? Math.max(0, projects) : 0;

    return {
      name: name.trim(),
      description: description?.trim() || null,
      managerId: managerId || null,
      featured: !!featured,
      gradient,
      projects: proj,
      completion: comp,
      memberUserIds: memberIds.filter((id) => !id.startsWith("adhoc-")),
      adhocMembers: memberIds
        .filter((id) => id.startsWith("adhoc-"))
        .map((id) => {
          const u = employees.find((x) => x.id === id);
          return { name: u?.name ?? "" };
        }),
    };
  }

  async function createTeamServer(payload: any) {
    const res = await fetch("/api/teams", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const j = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(j?.message || `Failed to create team (${res.status})`);
    return j?.team ?? j;
  }

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setErrorMsg(null);
    if (!name.trim()) {
      setErrorMsg("Team name is required");
      return;
    }
    setSubmitting(true);
    const payload = buildPayload();
    try {
      if (isEdit && initialTeam?.id) {
        // update
        if (onUpdate) {
          await Promise.resolve(onUpdate(initialTeam.id as string, payload));
        } else {
          const res = await fetch(`/api/teams/${encodeURIComponent(String(initialTeam.id))}`, {
            method: "PUT",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const j = await res.json().catch(() => ({}));
          if (!res.ok) throw new Error(j?.message || `Update failed (${res.status})`);
        }
      } else {
        // create
        if (onCreate) {
          // call server and pass the server response (or optimistic) to parent
          try {
            const created = await createTeamServer(payload);
            await Promise.resolve(onCreate(created));
          } catch (err) {
            // server create failed — still return optimistic object to parent so UI reflects inputs
            const optimistic = {
              id: `tmp-${Date.now()}`,
              ...payload,
              manager: managers.find((m) => m.id === payload.managerId) ?? null,
              members: memberIds.map((id) => {
                const u = employees.find((e) => e.id === id);
                return { id, user: u ? { id: u.id, name: u.name, email: u.email } : undefined, initials: u ? getInitialsFromName(u.name ?? "") : undefined };
              }),
            };
            console.warn("Create failed, returning optimistic:", err);
            await Promise.resolve(onCreate(optimistic));
          }
        } else {
          // no parent handler — attempt server create and ignore response except errors
          await createTeamServer(payload);
        }
      }

      onClose();
    } catch (err: any) {
      console.error("Create/Update team error:", err);
      setErrorMsg(err?.message || "Operation failed");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeleteClick() {
    if (!initialTeam?.id) return;
    const yes = window.confirm(`Delete team "${initialTeam.name ?? initialTeam.id}"? This cannot be undone.`);
    if (!yes) return;
    setDeleting(true);
    setErrorMsg(null);
    try {
      if (onDelete) {
        await Promise.resolve(onDelete(initialTeam.id as string));
      } else {
        const res = await fetch(`/api/teams/${encodeURIComponent(String(initialTeam.id))}`, {
          method: "DELETE",
          credentials: "same-origin",
        });
        const j = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(j?.message || `Delete failed (${res.status})`);
      }
      onClose();
    } catch (err: any) {
      console.error("Delete team failed:", err);
      setErrorMsg(err?.message || "Failed to delete team");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.18 }}
      className="w-full max-w-2xl mx-4 bg-white rounded-2xl border border-slate-200 shadow-2xl p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <UserPlus className="w-5 h-5" />
            {isEdit ? "Edit Team" : "Create Team"}
          </h3>
          <p className="text-sm text-slate-500">{isEdit ? "Update team details" : "Add a new team to your workspace"}</p>
        </div>

        <div className="flex items-center gap-2">
          {isEdit && (
            <button
              onClick={handleDeleteClick}
              disabled={deleting}
              className="px-3 py-2 rounded-md hover:bg-red-50 text-rose-600 flex items-center gap-2"
              title="Delete team"
            >
              <Trash2 className="w-4 h-4" />
              {deleting ? "Deleting…" : "Delete"}
            </button>
          )}

          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Close">
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name + Manager */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="flex flex-col">
            <span className="text-xs font-medium text-slate-600 mb-1">Team name</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-3 rounded-xl border border-slate-200 focus:outline-none"
              placeholder="Product Development"
              aria-label="Team name"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-xs font-medium text-slate-600 mb-1">Team lead (manager)</span>
            {loadingManagers ? (
              <div className="px-3 py-3 rounded-xl border border-slate-200 text-sm text-slate-500">Loading managers…</div>
            ) : managers.length === 0 ? (
              <input
                value={managerId}
                onChange={(e) => setManagerId(e.target.value)}
                placeholder="No managers found — type manager id"
                className="px-3 py-3 rounded-xl border border-slate-200"
                aria-label="Manager id"
              />
            ) : (
              <select value={managerId} onChange={(e) => setManagerId(e.target.value)} className="px-3 py-3 rounded-xl border border-slate-200" aria-label="Manager select">
                <option value="">— Select manager —</option>
                {managers.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name ?? m.email ?? m.id}
                    {m.email ? ` — ${m.email}` : ""}
                  </option>
                ))}
              </select>
            )}
          </label>
        </div>

        {/* Description */}
        <label className="flex flex-col">
          <span className="text-xs font-medium text-slate-600 mb-1">Description</span>
          <textarea value={description ?? ""} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="Short description..." className="px-3 py-3 rounded-xl border border-slate-200" aria-label="Description" />
        </label>

        {/* Projects, completion, featured */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
          <label className="flex flex-col">
            <span className="text-xs font-medium text-slate-600 mb-1">Projects</span>
            <input
              type="number"
              min={0}
              value={projects}
              onChange={(e) => {
                const v = e.target.value;
                setProjects(v === "" ? "" : Math.max(0, Number(v)));
              }}
              className="px-3 py-3 rounded-xl border border-slate-200"
              placeholder="0"
              aria-label="Projects count"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-xs font-medium text-slate-600 mb-1">Completion (%)</span>
            <input
              type="number"
              min={0}
              max={100}
              value={completion}
              onChange={(e) => {
                const v = e.target.value;
                if (v === "") return setCompletion("");
                const n = Math.max(0, Math.min(100, Number(v)));
                setCompletion(Number.isNaN(n) ? 0 : n);
              }}
              className="px-3 py-3 rounded-xl border border-slate-200"
              placeholder="0"
              aria-label="Completion percent"
            />
          </label>

          <label className="flex items-center gap-3">
            <input id="featured" type="checkbox" checked={featured} onChange={() => setFeatured((f) => !f)} className="w-4 h-4 rounded" aria-label="Featured" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-700">Featured</span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Star className="w-3.5 h-3.5" />
                Highlight in the UI
              </span>
            </div>
          </label>
        </div>

        {/* Gradient selector */}
        <div>
          <span className="text-xs font-medium text-slate-600 mb-2 block">Accent gradient</span>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Accent gradient">
            {gradientOptions.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setGradient(g.value)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${g.value === gradient ? "border-blue-500 ring-2 ring-blue-200" : "border-slate-200"}`}
                aria-pressed={g.value === gradient}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${g.value}`} />
                <span className="text-sm text-slate-700">{g.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Members selection + ad-hoc input */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-xs font-medium text-slate-600">Members</span>
              <p className="text-xs text-slate-500">Select existing employees or add a name</p>
            </div>
            <div className="text-xs text-slate-400">{memberIds.length} selected</div>
          </div>

          <div className="grid grid-cols-1 gap-2 max-h-40 overflow-auto p-2 border rounded-md bg-white">
            {loadingEmployees ? (
              <div className="text-sm text-slate-500">Loading employees…</div>
            ) : employees.length === 0 ? (
              <div className="text-sm text-slate-500">No employees found</div>
            ) : (
              employees.map((u) => (
                <label key={u.id} className="flex items-center gap-2 py-1 px-2 rounded hover:bg-slate-50">
                  <input type="checkbox" checked={memberIds.includes(u.id)} onChange={() => toggleMember(u.id)} className="w-4 h-4" />
                  <div className="text-sm text-slate-700">{u.name ?? u.email ?? u.id}{u.email ? ` — ${u.email}` : ""}</div>
                </label>
              ))
            )}
          </div>

          <div className="mt-3 flex gap-2">
            <input
              value={membersInput}
              onChange={(e) => setMembersInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addAdhocMember(membersInput);
                }
              }}
              placeholder="Type a name and press Enter to add someone not in directory"
              className="flex-1 px-3 py-3 rounded-xl border border-slate-200"
              aria-label="Add ad-hoc member"
            />
            <button type="button" onClick={() => addAdhocMember(membersInput)} className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200" aria-label="Add member">
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {selectedMembers.map((m) => (
              <div key={m.id} className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-xs font-semibold text-slate-700">
                  {m.initials}
                </div>
                <div className="text-sm text-slate-700">{m.name}</div>
                <button type="button" onClick={() => toggleMember(m.id)} className="ml-2 p-1 rounded-md hover:bg-slate-100" aria-label={`Remove ${m.name}`}>
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        {errorMsg && <div className="text-sm text-rose-600" role="alert">{errorMsg}</div>}

        <div className="flex items-center gap-3 justify-end pt-2">
          <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200">
            Cancel
          </button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={submitting}
            className="px-5 py-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl font-medium shadow-md disabled:opacity-60"
            aria-disabled={submitting}
          >
            <div className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              {submitting ? (isEdit ? "Updating…" : "Creating…") : isEdit ? "Update Team" : "Create Team"}
            </div>
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
