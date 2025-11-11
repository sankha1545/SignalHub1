// File: app/account/components/ProfileForm.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import ImageCropper from "../ui/ImageCropper";

type CountryItem = {
  name: string;
  code: string;
  region?: string;
  languages?: Record<string, string> | string[] | string;
};

type Props = { onChangePassword?: () => void };

/**
 * ProfileForm
 *
 * - Reads country/region/district/language from Profile.metadata (DB)
 * - Writes profile fields to server; server persists extras in metadata
 * - Preloads states/districts and preselects them when user has values saved
 */
export default function ProfileForm({ onChangePassword }: Props) {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState<any>({
    name: "",
    displayName: "",
    email: "",
    phone: "",
    avatarUrl: "",
    bio: "",
    country: "",
    region: "",
    postalCode: "",
    language: "",
    district: "",
  });

  // meta lists
  const [countries, setCountries] = useState<CountryItem[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);

  const [states, setStates] = useState<string[]>([]);
  const [statesLoading, setStatesLoading] = useState(false);
  const [statesError, setStatesError] = useState<string | null>(null);

  const [districts, setDistricts] = useState<string[]>([]);
  const [districtsLoading, setDistrictsLoading] = useState(false);
  const [districtsError, setDistrictsError] = useState<string | null>(null);

  // photo cropping
  const [rawFile, setRawFile] = useState<File | null>(null);
  const [cropOpen, setCropOpen] = useState(false);
  const [croppedBlobUrl, setCroppedBlobUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // -------------------------
  // Load meta data (countries + languages)
  // -------------------------
  useEffect(() => {
    let mounted = true;

    async function loadMeta() {
      try {
        const r = await fetch("/api/meta/countries");
        if (!r.ok) throw new Error("meta endpoint failed");
        const j = await r.json().catch(() => ({ ok: false }));

        const rawCountries = Array.isArray(j.countries) ? j.countries : (Array.isArray(j) ? j : j?.countries ?? null);
        if (!rawCountries || !Array.isArray(rawCountries) || rawCountries.length === 0) throw new Error("no-countries");

        const normalized = rawCountries
          .map((c: any) => {
            const name = c?.name?.common ?? c?.name ?? c?.countryName ?? "";
            const code = c?.code ?? c?.cca2 ?? "";
            const region = c?.region ?? "";
            const languages = c?.languages ?? c?.language ?? c?.langs ?? {};
            return { name, code, region, languages };
          })
          .filter((c: any) => c.name);

        const langSet = new Set<string>();
        for (const c of normalized) {
          if (!c.languages) continue;
          if (typeof c.languages === "object" && !Array.isArray(c.languages)) {
            Object.values(c.languages).forEach((ln: any) => typeof ln === "string" && ln.trim() && langSet.add(ln));
          } else if (Array.isArray(c.languages)) {
            c.languages.forEach((ln: any) => typeof ln === "string" && ln.trim() && langSet.add(ln));
          } else if (typeof c.languages === "string") {
            langSet.add(c.languages);
          }
        }

        if (!mounted) return;
        setCountries(normalized.sort((a, b) => a.name.localeCompare(b.name)));
        setLanguages(Array.from(langSet).sort((a, b) => a.localeCompare(b)));
        return;
      } catch (err) {
        // fallback to restcountries
      }

      try {
        const fields = "name,cca2,region,languages";
        const res2 = await fetch(`https://restcountries.com/v3.1/all?fields=${fields}`);
        if (!res2.ok) throw new Error("restcountries failed");
        const data = await res2.json();
        const countryList: any[] = [];
        const langSet2 = new Set<string>();
        for (const c of data) {
          const name = c?.name?.common ?? c?.name ?? "";
          const code = c?.cca2 ?? "";
          const region = c?.region ?? "";
          countryList.push({ name, code, region, languages: c?.languages ?? {} });
          if (c?.languages) Object.values(c.languages).forEach((l: any) => typeof l === "string" && l.trim() && langSet2.add(l));
        }
        if (!mounted) return;
        setCountries(countryList.sort((a, b) => a.name.localeCompare(b.name)));
        setLanguages(Array.from(langSet2).sort((a, b) => a.localeCompare(b)));
      } catch (err) {
        console.error("Failed to load countries meta", err);
        if (!mounted) return;
        setCountries([]);
        setLanguages([]);
      }
    }

    loadMeta();
    return () => {
      mounted = false;
    };
  }, []);

  // -------------------------
  // Load user on mount (preselect country/state/district)
  // -------------------------
  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      try {
        const res = await fetch("/api/me", { credentials: "include" });
        const json = await res.json().catch(() => ({ ok: false }));

        if (json?.ok && json.user) {
          const u = json.user;
          const profile = u.profile ?? {};
          const meta = (profile.metadata as any) ?? {};

          const mapped = {
            name: u.name ?? "",
            displayName: profile.displayName ?? meta.displayName ?? "",
            avatarUrl: profile.avatarUrl ?? meta.avatarUrl ?? "",
            bio: profile.bio ?? meta.bio ?? "",
            country: profile.country ?? meta.country ?? meta.countryCode ?? "",
            region: profile.region ?? meta.region ?? "",
            postalCode:
              profile.postalCode ??
              meta.postalCode ??
              meta.postal_code ??
              "",
            language: profile.language ?? meta.language ?? "",
            district: profile.district ?? meta.district ?? "",
            email: u.email ?? "",
            phone: profile.phoneNumber ?? u.phone ?? "",
          };

          if (!mounted) return;
          setUser(u);
          setForm(mapped);
          setCroppedBlobUrl(null);
          // Preload states & districts when appropriate
          if (mapped.country) {
            await fetchStates(mapped.country, mapped.region);
            if (mapped.region) {
              await fetchDistricts(mapped.country, mapped.region, mapped.district);
            }
          }
        } else {
          (window as any).location = "/login";
        }
      } catch (err) {
        console.error("Failed to load /api/me", err);
        (window as any).location = "/login";
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // -------------------------
  // Cascading fetchers
  // -------------------------
  async function fetchStates(countryName: string, preselectState: string = "") {
    setStates([]);
    setStatesError(null);
    setStatesLoading(true);
    setForm((p: any) => ({ ...p, region: "" }));
    setDistricts([]);
    setForm((p: any) => ({ ...p, district: "" }));

    try {
      const res = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country: countryName }),
      });
      if (!res.ok) throw new Error(`States fetch failed (${res.status})`);
      const json = await res.json();

      let stateNames: string[] = [];
      if (json?.data) {
        const d = json.data;
        if (Array.isArray(d)) {
          const found = d.find((x: any) => {
            const n = (x?.name ?? "").toLowerCase();
            return n === countryName.toLowerCase() || n.includes(countryName.toLowerCase());
          });
          if (found) {
            if (Array.isArray(found.states)) {
              stateNames = (found.states[0] && typeof found.states[0] === "object")
                ? found.states.map((s: any) => s.name).filter(Boolean)
                : found.states.slice();
            }
          } else {
            const first = d[0];
            if (first?.states) {
              if (Array.isArray(first.states)) {
                stateNames = (typeof first.states[0] === "object")
                  ? first.states.map((s: any) => s.name).filter(Boolean)
                  : first.states.slice();
              }
            }
          }
        } else if (typeof d === "object" && Array.isArray(d.states)) {
          stateNames = typeof d.states[0] === "object" ? d.states.map((s: any) => s.name).filter(Boolean) : d.states.slice();
        }
      } else if (Array.isArray(json?.states)) {
        stateNames = typeof json.states[0] === "object" ? json.states.map((s: any) => s.name).filter(Boolean) : json.states.slice();
      }

      stateNames = Array.from(new Set(stateNames)).sort((a, b) => a.localeCompare(b));
      setStates(stateNames);
      if (preselectState && stateNames.includes(preselectState)) {
        setForm((p: any) => ({ ...p, region: preselectState }));
      }
    } catch (err: any) {
      console.warn("fetchStates error", err);
      setStatesError("Could not load states for this country.");
    } finally {
      setStatesLoading(false);
    }
  }

  async function fetchDistricts(countryName: string, stateName: string, preselectDistrict: string = "") {
    setDistricts([]);
    setDistrictsError(null);
    setDistrictsLoading(true);
    setForm((p: any) => ({ ...p, district: "" }));

    try {
      const res = await fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country: countryName, state: stateName }),
      });
      if (!res.ok) throw new Error(`Districts fetch failed (${res.status})`);
      const json = await res.json();

      let items: string[] = [];
      if (Array.isArray(json?.data)) {
        items = json.data.slice();
      } else if (Array.isArray(json?.cities)) {
        items = json.cities.slice();
      } else if (json?.data?.cities && Array.isArray(json.data.cities)) {
        items = json.data.cities.slice();
      }

      items = Array.from(new Set(items)).sort((a, b) => a.localeCompare(b));
      setDistricts(items);
      if (preselectDistrict && items.includes(preselectDistrict)) {
        setForm((p: any) => ({ ...p, district: preselectDistrict }));
      }
    } catch (err: any) {
      console.warn("fetchDistricts error", err);
      setDistrictsError("Could not load districts for this state.");
    } finally {
      setDistrictsLoading(false);
    }
  }

  // on change handlers
  async function onCountryChange(newCountry: string) {
    setForm((p: any) => ({ ...p, country: newCountry, region: "", district: "" }));
    if (newCountry) {
      await fetchStates(newCountry);
      const found = countries.find((c) => c.name === newCountry || c.code === newCountry);
      if (found?.languages) {
        const vals = Array.isArray(found.languages) ? found.languages : Object.values(found.languages ?? {});
        if (vals.length && !form.language) setForm((p: any) => ({ ...p, language: vals[0] as string }));
      }
    } else {
      setStates([]);
      setDistricts([]);
    }
  }

  async function onStateChange(newState: string) {
    setForm((p: any) => ({ ...p, region: newState, district: "" }));
    if (newState && form.country) {
      await fetchDistricts(form.country, newState);
    } else {
      setDistricts([]);
    }
  }

  // -------------------------
  // Photo helpers
  // -------------------------
  function handleFileSelect(file?: File | null) {
    if (!file) {
      setRawFile(null);
      return;
    }
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("Max 5MB");
      return;
    }
    setRawFile(file);
    setCropOpen(true);
  }

  useEffect(() => {
    return () => {
      if (croppedBlobUrl) {
        try {
          URL.revokeObjectURL(croppedBlobUrl);
        } catch {}
      }
    };
  }, [croppedBlobUrl]);

  async function uploadPhoto(file: File | null) {
    if (!file) return form.avatarUrl || null;
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const json = await res.json();
      if (json?.ok && json.url) return json.url;
      throw new Error(json?.error || "Upload failed");
    } catch (err) {
      console.warn("uploadPhoto failed", err);
      throw err;
    }
  }

  // -------------------------
  // Save handler
  // -------------------------
  async function handleSave(e?: React.FormEvent) {
    if (e) e.preventDefault();
    setSaving(true);
    try {
      if (!form.name?.trim()) {
        alert("Please provide your full name.");
        setSaving(false);
        return;
      }

      let avatarUrl = form.avatarUrl ?? null;
      if (croppedBlobUrl) {
        const blob = await (await fetch(croppedBlobUrl)).blob();
        const file = new File([blob], "avatar.png", { type: blob.type || "image/png" });
        try {
          const uploaded = await uploadPhoto(file);
          if (uploaded) avatarUrl = uploaded;
        } catch (err) {
          alert("Failed to upload photo. Please try again.");
          setSaving(false);
          return;
        }
      }

      const body = {
        name: form.name,
        phone: form.phone,
        profile: {
          displayName: form.displayName,
          avatarUrl,
          bio: form.bio,
          country: form.country,
          region: form.region,
          district: form.district,
          postalCode: form.postalCode,
          language: form.language,
        },
      };

      const res = await fetch("/api/me", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      if (res.status === 401) {
        alert("Session expired — please log in again.");
        window.location.href = "/login";
        return;
      }

      const json = await res.json().catch(() => ({ ok: false }));
      if (json.ok && json.user) {
        // server returns canonical user with profile relation and metadata
        const u = json.user;
        const profile = u.profile ?? {};
        const meta = (profile.metadata as any) ?? {};

        const mapped = {
          name: u.name ?? "",
          displayName: profile.displayName ?? meta.displayName ?? "",
          email: u.email ?? "",
          phone: profile.phoneNumber ?? u.phone ?? "",
          avatarUrl: profile.avatarUrl ?? meta.avatarUrl ?? avatarUrl ?? "",
          bio: profile.bio ?? meta.bio ?? "",
          country: profile.country ?? meta.country ?? "",
          region: profile.region ?? meta.region ?? "",
          district: profile.district ?? meta.district ?? "",
          postalCode: profile.postalCode ?? meta.postalCode ?? meta.postal_code ?? "",
          language: profile.language ?? meta.language ?? "",
        };

        setUser(u);
        setForm(mapped);
        setEditing(false);
        setCroppedBlobUrl(null);
        setRawFile(null);

        // preload states/districts for selected country/region
        if (mapped.country) {
          await fetchStates(mapped.country, mapped.region);
          if (mapped.region) await fetchDistricts(mapped.country, mapped.region, mapped.district);
        }

      
      } else if (json.ok) {
        setUser((u: any) => ({ ...(u ?? {}), name: form.name, phone: form.phone, profile: { ...(u?.profile ?? {}), ...(body.profile ?? {}) } }));
        setEditing(false);
        alert("Profile saved (optimistic).");
      } else {
        alert(json.error || "Save failed");
      }
    } catch (err) {
      console.error("save error", err);
      alert("Unexpected error while saving.");
    } finally {
      setSaving(false);
    }
  }

  // -------------------------
  // Render
  // -------------------------
  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center p-6">
        <div className="text-slate-500 animate-pulse">Loading profile…</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-6">
        <div className="rounded bg-white p-6 shadow text-center">
          No user data — please{" "}
          <button className="text-indigo-600" onClick={() => (window.location.href = "/login")}>
            sign in
          </button>
          .
        </div>
      </div>
    );
  }

  // helpers to read metadata-aware values for display (prefer explicit columns, then metadata)
  const profile = user.profile ?? {};
  const meta = (profile.metadata as any) ?? {};

  const displayCountry = profile.country ?? meta.country ?? "—";
  const displayRegion = profile.region ?? meta.region ?? "—";
  const displayDistrict = profile.district ?? meta.district ?? "—";
  const displayPostal = profile.postalCode ?? meta.postalCode ?? meta.postal_code ?? "—";
  const displayLanguage = profile.language ?? meta.language ?? "—";

  return (
    <div className="bg-gradient-to-tr from-white via-slate-50 to-white rounded-2xl p-6 shadow-md border-none">
      <div className="flex gap-6">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-indigo-50 to-emerald-50 overflow-hidden flex items-center justify-center border-2 border-white shadow-lg">
            {croppedBlobUrl || form.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={croppedBlobUrl ?? form.avatarUrl!} alt="avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="text-4xl font-semibold text-slate-700">{(form.name || form.email || "U").charAt(0)}</div>
            )}
          </div>

          <div className="absolute -right-3 -bottom-3 flex gap-2">
            <button
              onClick={() => {
                setEditing(true);
                fileInputRef.current?.click();
              }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border shadow-sm text-xs"
            >
              Upload
            </button>

            <button
              onClick={() => {
                setRawFile(null);
                setCroppedBlobUrl(null);
                setForm((p: any) => ({ ...p, avatarUrl: profile.avatarUrl ?? meta.avatarUrl ?? "" }));
              }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border shadow-sm text-xs"
            >
              Revert
            </button>
          </div>
        </div>

        {/* Heading & actions */}
        <div className="flex-1">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900">{user.name || user.email}</h1>
              <div className="text-sm text-slate-500">{user.email}</div>
              <div className="mt-3 inline-flex items-center gap-2">
                <div className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">{user.role ?? "Member"}</div>
                <div className="text-xs px-2 py-1 rounded bg-slate-50 text-slate-600">Joined {new Date(user.createdAt).toLocaleDateString()}</div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => (editing ? handleSave() : setEditing(true))}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium shadow-sm ${editing ? "bg-indigo-600 text-white" : "bg-white border"}`}
                disabled={saving}
              >
                {editing ? (saving ? "Saving…" : "Save") : "Edit"}
              </button>

              <button onClick={() => (window.location.href = "/")} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm border bg-white">
                Back
              </button>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-600">A modern profile editor with smart cascading selects and image cropper. All changes are saved to your account.</p>
        </div>
      </div>

      <div className="mt-6">
        {!editing ? (
          // display mode
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-slate-600">Profile</h2>
              <div className="mt-3 space-y-3">
                <div>
                  <div className="text-xs text-slate-500">Full name</div>
                  <div className="font-medium text-slate-800 ">{user.name ?? "—"}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Display name</div>
                  <div className="font-medium text-slate-800">{profile.displayName ?? meta.displayName ?? "—"}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Phone</div>
                  <div className="font-medium text-slate-800">{user.phone ?? profile.phoneNumber ?? "—"}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Bio</div>
                  <div className="font-medium whitespace-pre-wrap text-slate-800">{profile.bio ?? meta.bio ?? "—"}</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-slate-600">Location & language</h2>
              <div className="mt-3 space-y-3">
                <div>
                  <div className="text-xs text-slate-500">Country</div>
                  <div className="font-medium text-slate-800">{displayCountry}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Region / State</div>
                  <div className="font-medium text-slate-800">{displayRegion}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">District</div>
                  <div className="font-medium text-slate-800">{displayDistrict}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Postal code</div>
                  <div className="font-medium text-slate-800">{displayPostal}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Language</div>
                  <div className="font-medium text-slate-800">{displayLanguage}</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // edit form
          <form onSubmit={handleSave} className="space-y-6 mt-4">
            <input ref={fileInputRef} type="file" accept="image/*" onChange={(e) => handleFileSelect(e.target.files?.[0] ?? null)} className="hidden" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <FloatingInput label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <FloatingInput label="Display name" value={form.displayName} onChange={(v) => setForm({ ...form, displayName: v })} />
              <FloatingInput label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
              <FloatingInput label="Postal code" value={form.postalCode} onChange={(v) => setForm({ ...form, postalCode: v })} />
            </div>

            <div>
              <label className="text-xs text-slate-500">Bio</label>
              <textarea value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} rows={4} className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 border-none bg-indigo-50" placeholder="Tell people about yourself — what you do and what you care about." />
            </div>

            {/* Cascading selects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-none">
                <label className="text-xs text-slate-500">Country</label>
                <div className="mt-1">
                  <select value={form.country} onChange={(e) => onCountryChange(e.target.value)} className="w-full p-3 border rounded-lg bg-indigo-50 border-none">
                    <option value="">— Select country —</option>
                    {countries.map((c) => (
                      <option key={c.name + c.code} value={c.name}>
                        {c.name} {c.region ? `(${c.region})` : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-500">Region / State</label>
                <div className="mt-1">
                  {statesLoading ? (
                    <div className="p-3 text-sm text-slate-400">Loading states…</div>
                  ) : statesError ? (
                    <div className="p-3 text-sm text-rose-500">{statesError}</div>
                  ) : (
                    <select value={form.region} onChange={(e) => onStateChange(e.target.value)} className="w-full p-3 border rounded-lg bg-indigo-50 border-none" disabled={!form.country || states.length === 0}>
                      <option value="">— Select region / state —</option>
                      {states.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <div className="text-xs text-slate-400 mt-1">{form.country ? "Select a state — loaded from public geo API." : "Select a country first."}</div>
              </div>

              <div>
                <label className="text-xs text-slate-500">District / City</label>
                <div className="mt-1">
                  {districtsLoading ? (
                    <div className="p-3 text-sm text-slate-400">Loading districts…</div>
                  ) : districtsError ? (
                    <div className="p-3 text-sm text-rose-500">{districtsError}</div>
                  ) : (
                    <select value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })} className="w-full p-3 border rounded-lg bg-indigo-50 border-none" disabled={!form.region || districts.length === 0}>
                      <option value="">— Select district / city —</option>
                      {districts.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <div className="text-xs text-slate-400 mt-1">{form.region ? "Choose district / city (if available)" : "Select a state to load districts."}</div>
              </div>
            </div>

            {/* Language */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-slate-500">Language</label>
                <div className="mt-1">
                  <select value={form.language} onChange={(e) => setForm({ ...form, language: e.target.value })} className="w-full p-3 border rounded-lg bg-indigo-50 border-none">
                    <option value="">— Preferred language —</option>
                    {languages.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div />
              <div />
            </div>

            {/* Photo UI */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div>
                <label className="text-xs text-slate-500">Profile photo</label>
                <div className="mt-2 flex items-center gap-4">
                  <div className="w-24 h-24 rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center border">
                    {croppedBlobUrl || form.avatarUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={croppedBlobUrl ?? form.avatarUrl!} alt="preview" className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-2xl text-slate-500">{(form.name || "U").charAt(0)}</div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <button type="button" onClick={() => fileInputRef.current?.click()} className="px-3 py-2 rounded-md border text-sm inline-flex items-center gap-2">
                      Upload
                    </button>
                    <button type="button" onClick={() => { setRawFile(null); setCroppedBlobUrl(null); setForm((p: any) => ({ ...p, avatarUrl: "" })); }} className="px-3 py-2 rounded-md border text-sm inline-flex items-center gap-2">
                      Remove
                    </button>

                    <div className="text-xs text-slate-400">Max 5 MB. JPG/PNG/GIF accepted.</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="text-xs text-slate-500">Profile preview URL</label>
                <input value={form.avatarUrl} onChange={(e) => setForm({ ...form, avatarUrl: e.target.value })} placeholder="Direct image URL (optional)" className="w-full mt-1 p-3 border rounded-lg bg-indigo-50 border-none" />
                <div className="text-xs text-slate-400 mt-1">If you paste an image URL it will be used unless you upload a new file.</div>
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => {
                  setEditing(false);
                  // revert from user + metadata
                  const profile = user.profile ?? {};
                  const meta = (profile.metadata as any) ?? {};
                  setForm({
                    name: user.name ?? "",
                    displayName: profile.displayName ?? meta.displayName ?? "",
                    email: user.email ?? "",
                    phone: profile.phoneNumber ?? user.phone ?? "",
                    avatarUrl: profile.avatarUrl ?? meta.avatarUrl ?? "",
                    bio: profile.bio ?? meta.bio ?? "",
                    country: profile.country ?? meta.country ?? "",
                    region: profile.region ?? meta.region ?? "",
                    postalCode: profile.postalCode ?? meta.postalCode ?? meta.postal_code ?? "",
                    language: profile.language ?? meta.language ?? "",
                    district: profile.district ?? meta.district ?? "",
                  });
                  setCroppedBlobUrl(null);
                  setRawFile(null);
                }}
                className="px-4 py-2 border rounded-lg"
                disabled={saving}
              >
                Cancel
              </button>

              <button type="submit" disabled={saving} className="px-4 py-2 bg-indigo-700 text-white rounded-lg">
                {saving ? "Saving…" : "Save profile"}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Image cropper modal */}
      {cropOpen && rawFile && (
        <ImageCropper
          file={rawFile}
          onCancel={() => {
            setCropOpen(false);
            setRawFile(null);
          }}
          onCropped={(url) => {
            setCroppedBlobUrl(url);
            setCropOpen(false);
          }}
        />
      )}
    </div>
  );
}

/** FloatingInput – small presentational input with floating label */
function FloatingInput({ label, value, onChange, required }: { label: string; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <label className="relative block">
      <span className={`pointer-events-none -translate-y-3 absolute left-3 top-2 text-xs transition-all ${value ? "-translate-y-4 text-indigo-600" : "text-slate-500"}`}>{label}{required ? " *" : ""}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full mt-4 p-3 pt-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 border-none bg-indigo-50" />
    </label>
  );
}
