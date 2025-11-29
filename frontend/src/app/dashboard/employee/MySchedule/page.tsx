// src/app/dashboard/employee/myschedule/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Plus } from "lucide-react";
import ReminderForm, { ReminderData } from "@/components/forms/reminder";

type StoredReminder = ReminderData & { id: string; timestamp: number };

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function endOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

// localStorage key
const LS_KEY = "employee:myschedule:reminders";

/* schedule notification for a reminder (returns timeout id or null) */
function scheduleNotification(rem: StoredReminder) {
  if (!("Notification" in window)) {
    return null;
  }
  const now = Date.now();
  const msUntil = rem.timestamp - now;
  if (msUntil <= 0) return null; // past time

  // ensure permission
  if (Notification.permission === "granted") {
    const id = window.setTimeout(() => {
      new Notification(rem.title || "Reminder", { body: rem.message || "You have a reminder", tag: rem.id });
    }, msUntil);
    return id;
  } else {
    // if not granted, do nothing (the page will request when user saves)
    return null;
  }
}

export default function MySchedulePage(): JSX.Element {
  const today = useMemo(() => new Date(), []);
  const [viewMonth, setViewMonth] = useState<Date>(startOfMonth(today));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [reminders, setReminders] = useState<StoredReminder[]>([]);
  const [timeoutsMap, setTimeoutsMap] = useState<Record<string, number | null>>({});

  // load reminders from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed: StoredReminder[] = JSON.parse(raw);
        setReminders(parsed);
      }
    } catch (e) {
      console.warn("Failed to read reminders", e);
    }
  }, []);

  // schedule notification timeouts for upcoming reminders (and clear old timeouts)
  useEffect(() => {
    // clear previous
    Object.values(timeoutsMap).forEach((tid) => {
      if (tid) window.clearTimeout(tid);
    });

    const nextMap: Record<string, number | null> = {};
    reminders.forEach((r) => {
      const tid = scheduleNotification(r);
      nextMap[r.id] = tid;
    });

    setTimeoutsMap(nextMap);

    // persist to storage
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(reminders));
    } catch (e) {
      console.warn("Failed to save reminders", e);
    }

    return () => {
      Object.values(nextMap).forEach((tid) => {
        if (tid) window.clearTimeout(tid);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reminders]);

  // request notification permission once user interacts with scheduling (we'll prompt when modal opens)
  const ensureNotificationPermission = async () => {
    if (!("Notification" in window)) return;
    if (Notification.permission === "default") {
      try {
        await Notification.requestPermission();
      } catch (e) {
        // ignore
      }
    }
  };

  const openForDate = (d: Date) => {
    setSelectedDate(d);
    setModalOpen(true);
    ensureNotificationPermission();
  };

  const handleSaveReminder = (data: ReminderData) => {
    // data contains time string (HH:MM), message, title, optionally repeat
    if (!selectedDate) return;
    // compose timestamp from selectedDate + data.time
    const [hh, mm] = data.time.split(":").map((v) => parseInt(v, 10));
    const ts = new Date(selectedDate);
    ts.setHours(hh, mm, 0, 0);
    const id = uid();
    const stored: StoredReminder = {
      id,
      title: data.title || "Reminder",
      message: data.message || "",
      time: data.time,
      date: selectedDate.toISOString().slice(0, 10),
      timestamp: ts.getTime(),
    };
    setReminders((prev) => [...prev, stored].sort((a, b) => a.timestamp - b.timestamp));
    setModalOpen(false);
  };

  const handleDeleteReminder = (id: string) => {
    setReminders((prev) => prev.filter((r) => r.id !== id));
  };

  // calendar helpers
  const monthStart = startOfMonth(viewMonth);
  const monthEnd = endOfMonth(viewMonth);
  const firstDayIndex = monthStart.getDay();
  const daysInMonth = monthEnd.getDate();

  const gridDates: (Date | null)[] = [];
  // previous month filler
  for (let i = 0; i < firstDayIndex; i++) gridDates.push(null);
  for (let d = 1; d <= daysInMonth; d++) gridDates.push(new Date(viewMonth.getFullYear(), viewMonth.getMonth(), d));
  // push trailing nulls to fill 7x6 grid
  while (gridDates.length % 7 !== 0) gridDates.push(null);

  const goPrev = () => setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1));
  const goNext = () => setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1));

  // events grouped by date (YYYY-MM-DD)
  const eventsByDate = reminders.reduce<Record<string, StoredReminder[]>>((acc, r) => {
    acc[r.date] = acc[r.date] || [];
    acc[r.date].push(r);
    return acc;
  }, {});

  return (
    <main className={`min-h-screen p-4 sm:p-6 lg:p-8 transition-filter ${modalOpen ? "backdrop-blur-sm" : ""}`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-2">
              <CalendarIcon className="w-6 h-6 text-slate-600" />
              My Schedule
            </h1>
            <p className="text-sm text-slate-500 mt-1">Create reminders by clicking a date. Notifications will be delivered at chosen time.</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                // quick add today at 10:00
                setViewMonth(startOfMonth(today));
                openForDate(today);
              }}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 text-white text-sm hover:brightness-105"
            >
              <Plus className="w-4 h-4" />
              Quick Add
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <section className="col-span-2 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <button onClick={goPrev} className="p-2 rounded-md hover:bg-slate-100">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div>
                  <div className="text-sm text-slate-500">Month</div>
                  <div className="text-lg font-semibold text-slate-800">
                    {viewMonth.toLocaleString(undefined, { month: "long", year: "numeric" })}
                  </div>
                </div>
                <button onClick={goNext} className="p-2 rounded-md hover:bg-slate-100">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="text-sm text-slate-500">Local reminders saved to your browser</div>
            </div>

            {/* week days header */}
            <div className="grid grid-cols-7 text-xs text-slate-500 border-b pb-2 mb-2">
              {DAYS.map((d) => (
                <div key={d} className="text-center">
                  {d}
                </div>
              ))}
            </div>

            {/* dates grid */}
            <div className="grid grid-cols-7 gap-2">
              {gridDates.map((g, idx) => {
                if (!g) {
                  return <div key={`empty-${idx}`} className="h-20 rounded-lg" />;
                }
                const ymd = g.toISOString().slice(0, 10);
                const hasEvents = !!eventsByDate[ymd];
                const isToday = g.toDateString() === new Date().toDateString();
                return (
                  <button
                    key={ymd}
                    onClick={() => openForDate(g)}
                    className={`h-28 p-2 rounded-lg text-left transition-shadow border ${isToday ? "border-slate-300 shadow-sm" : "border-transparent"} hover:shadow-md bg-white`}
                    aria-label={`Open reminders for ${ymd}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="text-sm font-medium text-slate-700">{g.getDate()}</div>
                      {hasEvents && <div className="flex items-center gap-1">
                        {/* show up to 3 colored dots */}
                        {eventsByDate[ymd].slice(0, 3).map((e) => (
                          <span key={e.id} className="w-2 h-2 rounded-full" style={{ background: "#60a5fa" }} />
                        ))}
                      </div>}
                    </div>

                    <div className="mt-2 text-xs text-slate-500 truncate">
                      {hasEvents ? eventsByDate[ymd].slice(0, 2).map((e) => `${e.time} • ${e.title}`).join(" · ") : "No reminders"}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* right column: upcoming reminders */}
          <aside className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-md font-semibold text-slate-800">Upcoming</h3>
              <div className="text-xs text-slate-500">{reminders.length} total</div>
            </div>

            <div className="divide-y">
              {reminders.length === 0 && <div className="text-sm text-slate-500 py-4">No reminders yet — click any date to add one.</div>}
              {reminders.slice(0, 6).map((r) => (
                <div key={r.id} className="py-3 flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-slate-800 truncate">{r.title}</div>
                    <div className="text-xs text-slate-500">{r.date} • {r.time}</div>
                    <div className="text-xs text-slate-500 mt-1 line-clamp-3">{r.message}</div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button onClick={() => handleDeleteReminder(r.id)} className="text-xs text-rose-600 hover:underline">Delete</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button onClick={() => { setSelectedDate(new Date()); setModalOpen(true); }} className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-slate-800 text-white">
                <Plus className="w-4 h-4" /> Add reminder
              </button>
            </div>
          </aside>
        </div>

        {/* modal for adding reminder */}
        <AnimatePresence>
          {modalOpen && selectedDate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 flex items-center justify-center px-4"
            >
              {/* backdrop */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black" />

              <motion.div
                initial={{ y: 30, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.22 }}
                className="relative z-50 w-full max-w-2xl mx-auto"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xl">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">Add reminder — {selectedDate.toDateString()}</h3>
                      <p className="text-xs text-slate-500 mt-1">Set a time and a short message (max 400 chars). You’ll get a browser notification when it’s time.</p>
                    </div>
                    <div>
                      <button onClick={() => setModalOpen(false)} className="text-sm text-slate-500 hover:text-slate-700">Close</button>
                    </div>
                  </div>

                  <ReminderForm
                    defaultDate={selectedDate}
                    onCancel={() => setModalOpen(false)}
                    onSave={(data) => {
                      handleSaveReminder(data);
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
