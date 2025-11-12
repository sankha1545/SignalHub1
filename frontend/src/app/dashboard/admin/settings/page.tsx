"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  User,
  Bell,
  Shield,
  Globe,
  Palette,
  Key,
  Mail,
  Smartphone,
  Lock,
  Eye,
  EyeOff,
  Check,
  ChevronRight,
  Zap,
  Moon,
  Sun,
  Monitor,
} from "lucide-react";

const SettingsSection = ({ title, description, children, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm"
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 mb-1">{title}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
      {children}
    </motion.div>
  );
};

const SettingRow = ({ icon: Icon, title, description, children }: any) => {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-slate-100 last:border-0 last:pb-0">
      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-slate-600" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-slate-800 mb-1">{title}</h4>
        <p className="text-xs text-slate-500">{description}</p>
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );
};

const Toggle = ({ checked, onChange }: any) => {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
        checked ? "bg-gradient-to-r from-blue-500 to-cyan-500" : "bg-slate-200"
      }`}
    >
      <motion.div
        className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md"
        animate={{ x: checked ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  );
};

const TabButton = ({ active, icon: Icon, label, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 w-full ${
        active
          ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg"
          : "text-slate-600 hover:bg-slate-50"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="flex-1 text-left">{label}</span>
      {active && <ChevronRight className="w-4 h-4" />}
    </button>
  );
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    desktop: false,
    messages: true,
    updates: false,
  });
  const [theme, setTheme] = useState("light");
  const [showPassword, setShowPassword] = useState(false);

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "integrations", label: "Integrations", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Settings
            </h1>
          </div>
          <p className="text-slate-500 flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Manage your account and preferences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm sticky top-6">
              <div className="space-y-2">
                {tabs.map((tab, index) => (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  >
                    <TabButton
                      active={activeTab === tab.id}
                      icon={tab.icon}
                      label={tab.label}
                      onClick={() => setActiveTab(tab.id)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3 space-y-6">
            {activeTab === "profile" && (
              <>
                <SettingsSection
                  title="Personal Information"
                  description="Update your personal details and contact information"
                  delay={0.2}
                >
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 px-6 py-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Save Changes
                  </motion.button>
                </SettingsSection>

                <SettingsSection
                  title="Profile Photo"
                  description="Update your profile picture"
                  delay={0.3}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      JD
                    </div>
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-medium transition-colors"
                      >
                        Upload New
                      </motion.button>
                      <button className="px-4 py-2 text-rose-600 hover:bg-rose-50 rounded-xl text-sm font-medium transition-colors">
                        Remove
                      </button>
                    </div>
                  </div>
                </SettingsSection>
              </>
            )}

            {activeTab === "notifications" && (
              <SettingsSection
                title="Notification Preferences"
                description="Choose how you want to be notified"
                delay={0.2}
              >
                <div className="space-y-1">
                  <SettingRow
                    icon={Mail}
                    title="Email Notifications"
                    description="Receive updates and alerts via email"
                  >
                    <Toggle
                      checked={notifications.email}
                      onChange={(val: boolean) =>
                        setNotifications({ ...notifications, email: val })
                      }
                    />
                  </SettingRow>
                  <SettingRow
                    icon={Smartphone}
                    title="Push Notifications"
                    description="Get notifications on your mobile device"
                  >
                    <Toggle
                      checked={notifications.push}
                      onChange={(val: boolean) =>
                        setNotifications({ ...notifications, push: val })
                      }
                    />
                  </SettingRow>
                  <SettingRow
                    icon={Monitor}
                    title="Desktop Notifications"
                    description="Show notifications on your desktop"
                  >
                    <Toggle
                      checked={notifications.desktop}
                      onChange={(val: boolean) =>
                        setNotifications({ ...notifications, desktop: val })
                      }
                    />
                  </SettingRow>
                  <SettingRow
                    icon={Bell}
                    title="Message Notifications"
                    description="Notify me about new messages"
                  >
                    <Toggle
                      checked={notifications.messages}
                      onChange={(val: boolean) =>
                        setNotifications({ ...notifications, messages: val })
                      }
                    />
                  </SettingRow>
                  <SettingRow
                    icon={Zap}
                    title="Product Updates"
                    description="Get notified about new features"
                  >
                    <Toggle
                      checked={notifications.updates}
                      onChange={(val: boolean) =>
                        setNotifications({ ...notifications, updates: val })
                      }
                    />
                  </SettingRow>
                </div>
              </SettingsSection>
            )}

            {activeTab === "security" && (
              <>
                <SettingsSection
                  title="Password"
                  description="Update your password to keep your account secure"
                  delay={0.2}
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="w-full px-4 py-2.5 pr-12 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 px-6 py-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    Update Password
                  </motion.button>
                </SettingsSection>

                <SettingsSection
                  title="Two-Factor Authentication"
                  description="Add an extra layer of security to your account"
                  delay={0.3}
                >
                  <div className="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-emerald-800">2FA Enabled</p>
                        <p className="text-xs text-emerald-600">Your account is protected</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-white border border-emerald-200 text-emerald-700 rounded-lg text-sm font-medium hover:bg-emerald-50 transition-colors">
                      Manage
                    </button>
                  </div>
                </SettingsSection>
              </>
            )}

            {activeTab === "appearance" && (
              <SettingsSection
                title="Theme"
                description="Choose your preferred color scheme"
                delay={0.2}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: "light", label: "Light", icon: Sun },
                    { id: "dark", label: "Dark", icon: Moon },
                    { id: "system", label: "System", icon: Monitor },
                  ].map((option) => (
                    <motion.button
                      key={option.id}
                      onClick={() => setTheme(option.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                        theme === option.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <option.icon
                        className={`w-8 h-8 mx-auto mb-3 ${
                          theme === option.id ? "text-blue-600" : "text-slate-400"
                        }`}
                      />
                      <p
                        className={`text-sm font-semibold ${
                          theme === option.id ? "text-blue-700" : "text-slate-700"
                        }`}
                      >
                        {option.label}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </SettingsSection>
            )}

            {activeTab === "integrations" && (
              <SettingsSection
                title="Connected Apps"
                description="Manage your third-party integrations"
                delay={0.2}
              >
                <div className="space-y-4">
                  {[
                    {
                      name: "Slack",
                      description: "Connect your workspace",
                      connected: true,
                      gradient: "from-purple-500 to-pink-500",
                    },
                    {
                      name: "Google Calendar",
                      description: "Sync your events",
                      connected: true,
                      gradient: "from-blue-500 to-cyan-500",
                    },
                    {
                      name: "Microsoft Teams",
                      description: "Enable team collaboration",
                      connected: false,
                      gradient: "from-indigo-500 to-blue-500",
                    },
                  ].map((app) => (
                    <div
                      key={app.name}
                      className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-md`}
                        >
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800">{app.name}</h4>
                          <p className="text-xs text-slate-500">{app.description}</p>
                        </div>
                      </div>
                      <button
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          app.connected
                            ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                            : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                        }`}
                      >
                        {app.connected ? "Connected" : "Connect"}
                      </button>
                    </div>
                  ))}
                </div>
              </SettingsSection>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
