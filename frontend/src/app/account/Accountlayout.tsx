"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import ProfileForm from "../../components/forms/ProfileForm";
import PasswordModal from "../../components/modals/PasswordModal";
import ProfileMenu from "../../components/forms/ProfileMenu"; // optional, mirrors Sidebar's profile area

export default function AccountLayout() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Page header */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-6 flex items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Account settings</h1>
          <div className="mt-1 text-sm text-slate-500 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-slate-400" />
            Manage your personal info, security, and visibility
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
              <div className="text-sm text-slate-500">
                Edit your profile details and preferences.
              </div>
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
            <div className="mt-3 text-sm text-slate-500">
              Manage your account settings and profile visibility.
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

          {/* Membership info + small footer area */}
          <div className="text-xs text-slate-500">
            Member since: <span id="member-since">—</span>
          </div>

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
