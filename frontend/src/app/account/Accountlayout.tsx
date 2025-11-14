"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import ProfileForm from "../../components/forms/ProfileForm";
import PasswordModal from "../../components/modals/PasswordModal";
import ProfileMenu from "../../components/forms/ProfileMenu";

type MeResponse = {
  ok: boolean;
  user?: {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    role?: "ADMIN" | "MANAGER" | "EMPLOYEE" | string;
    createdAt?: string;
    profile?: any;
    organization?: {
      id: string;
      name: string;
    } | null;
  } | null;
  error?: string | null;
};

export default function AccountLayout() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [me, setMe] = useState<MeResponse["user"] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch("/api/me", { cache: "no-store" })
      .then((res) => res.json())
      .then((data: MeResponse) => {
        if (!mounted) return;
        if (data?.ok && data.user) {
          setMe(data.user);
          setError(null);
        } else {
          setError(data?.error ?? "Failed to load profile");
        }
      })
      .catch((err) => {
        console.error("Failed to fetch /api/me:", err);
        if (!mounted) return;
        setError("Failed to load profile");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const orgName = me?.organization?.name ?? null;
  const orgId = me?.organization?.id ?? null;
  const role = me?.role ?? null;
  const memberSince = me?.createdAt ? new Date(me.createdAt).toLocaleDateString() : "—";

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Page header */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <div className="flex items-baseline gap-3">
            <h1 className="text-2xl font-bold text-slate-800">Account settings</h1>
            {/* organization name (shows once loaded) */}
            {loading ? (
              <div className="text-sm text-slate-400">Loading organization…</div>
            ) : orgName ? (
              <div className="text-sm text-slate-600 bg-slate-50 px-2 py-1 rounded-full border border-slate-100">
                Organization: <strong className="ml-2">{orgName}</strong>
              </div>
            ) : (
              <div className="text-sm text-rose-500">No organization</div>
            )}
          </div>

          <div className="mt-1 text-sm text-slate-500 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-slate-400" />
            Manage your personal info, security, and visibility
            {/* small role badge */}
            {!loading && role ? (
              <span
                className={`ml-3 inline-flex items-center gap-2 px-2 py-0.5 text-xs rounded-full border ${
                  role === "ADMIN"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                    : "bg-slate-50 text-slate-700 border-slate-100"
                }`}
                title={`Role: ${role}`}
              >
                {role}
              </span>
            ) : null}
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          {/* Quick access button (styled like Sidebar Quick Actions) */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/20"
            onClick={() => {
              // Example: open billing or upgrade modal — keep stubbed here
              console.log("Upgrade clicked");
            }}
            aria-label="Upgrade account"
          >
            Upgrade
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          {/* Optional profile quick menu (keeps feel consistent with Sidebar profile) */}
          <div className="bg-white rounded-xl p-1 border border-slate-100">
            <ProfileMenu />
          </div>
        </div>
      </motion.header>

      {/* Main grid: left = form, right = aside (mirrors Sidebar column proportions) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Main form area */}
        <motion.main
          className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">Profile</h2>
              <div className="text-sm text-slate-500">Edit your profile details and preferences.</div>
            </div>

            {/* Mobile-only quick action: show password modal */}
            <div className="sm:hidden">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowPasswordModal(true)}
                className="px-3 py-2 rounded-lg border text-sm bg-slate-50"
              >
                Change password
              </motion.button>
            </div>
          </div>

          {/* Show any fetch error */}
          {error ? (
            <div className="mb-4 rounded-md bg-rose-50 border border-rose-100 p-3 text-sm text-rose-700">
              {error}
            </div>
          ) : null}

          {/* Profile form component (keeps onChangePassword hook similar to original) */}
          <ProfileForm onChangePassword={() => setShowPasswordModal(true)} />
        </motion.main>

        {/* Aside: account summary + quick actions (styled to match Sidebar) */}
        <motion.aside
          className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 flex flex-col gap-6"
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div>
            <h3 className="text-sm font-semibold text-slate-700">Account</h3>
            <div className="mt-3 text-sm text-slate-500">Manage your account settings and profile visibility.</div>
          </div>

          <div className="pt-2 border-t" />

          {/* Organization card */}
          <div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500">Organization</div>
                <div className="text-sm font-medium text-slate-800">
                  {loading ? "Loading…" : orgName ?? "—"}
                </div>
                <div className="text-xs text-slate-500 mt-1">Member since: <span id="member-since">{memberSince}</span></div>
              </div>

              {/* Admin quick action */}
              {!loading && role === "ADMIN" && orgId ? (
                <div>
                  <a
                    href={`/dashboard/admin/overview`}
                    onClick={(e) => {
                      // let the link navigate naturally; if you want client routing replace with router.push
                    }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-md border bg-white hover:bg-slate-50 text-sm"
                    title="Manage organization"
                  >
                    Manage
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              ) : null}
            </div>
          </div>

          <div className="pt-2 border-t" />

          {/* Actions list (styled like buttons in your original but with hover/motion) */}
          <div className="flex flex-col gap-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowPasswordModal(true)}
              className="w-full text-left px-3 py-2 rounded-md border border-slate-100 bg-white hover:bg-slate-50 transition"
            >
              Security & password
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full text-left px-3 py-2 rounded-md border border-slate-100 bg-white hover:bg-slate-50 transition"
              onClick={() => {
                // Open notification settings route/modal
                console.log("Notifications clicked");
              }}
            >
              Notifications
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full text-left px-3 py-2 rounded-md border border-slate-100 bg-white hover:bg-slate-50 transition"
              onClick={() => {
                // Open billing
                console.log("Billing clicked");
              }}
            >
              Billing
            </motion.button>
          </div>

          <div className="pt-2 border-t" />

          {/* Keep a small ProfileMenu copy for quick access, matching Sidebar's bottom area */}
          <div className="pt-1">
            <ProfileMenu />
          </div>
        </motion.aside>
      </div>

      {/* Password modal */}
      <PasswordModal open={showPasswordModal} onClose={() => setShowPasswordModal(false)} />
    </div>
  );
}
