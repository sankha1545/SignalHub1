// src/components/forms/reminder.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Edit3 } from "lucide-react";

export type ReminderData = {
  title: string;
  message: string;
  time: string; // "HH:MM"
  date?: string; // optional iso date "YYYY-MM-DD"
};

type Props = {
  defaultDate?: Date;
  defaultData?: Partial<ReminderData>;
  onSave: (data: ReminderData) => void;
  onCancel?: () => void;
};

const MAX_LEN = 400;

export default function ReminderForm({ defaultDate, defaultData = {}, onSave, onCancel }: Props) {
  const isoDate = useMemo(() => (defaultDate ? defaultDate.toISOString().slice(0, 10) : undefined), [defaultDate]);

  // default time — next quarter hour
  const defaultTime = useMemo(() => {
    const now = new Date();
    now.setMinutes(Math.ceil(now.getMinutes() / 15) * 15, 0, 0);
    return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  }, []);

  const [title, setTitle] = useState(defaultData.title ?? "");
  const [message, setMessage] = useState(defaultData.message ?? "");
  const [time, setTime] = useState(defaultData.time ?? defaultTime);
  const [charCount, setCharCount] = useState((defaultData.message ?? "").length);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setCharCount(message.length);
  }, [message]);

  const validate = () => {
    setError(null);
    if (!time) {
      setError("Please set a time for the reminder.");
      return false;
    }
    if (message.trim().length === 0 && title.trim().length === 0) {
      setError("Please provide a title or a message for the reminder.");
      return false;
    }
    if (message.length > MAX_LEN) {
      setError(`Message must be ${MAX_LEN} characters or less.`);
      return false;
    }
    // ensure selected datetime is in the future
    if (isoDate) {
      const [hh, mm] = time.split(":").map((v) => parseInt(v, 10));
      const ts = new Date(isoDate);
      ts.setHours(hh, mm, 0, 0);
      if (ts.getTime() <= Date.now()) {
        setError("Please choose a future time for the selected date.");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (submitting) return;
    if (!validate()) return;
    setSubmitting(true);

    // request notification permission proactively if available
    if ("Notification" in window && Notification.permission === "default") {
      try {
        await Notification.requestPermission();
      } catch {
        // ignore
      }
    }

    onSave({
      title: title.trim(),
      message: message.trim(),
      time,
      date: isoDate,
    });

    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs text-slate-600 mb-1">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Short title (e.g. 'Call with client')"
          className="w-full rounded-md border px-3 py-2 text-sm bg-white"
          maxLength={80}
        />
      </div>

      <div>
        <label className="block text-xs text-slate-600 mb-1">Message (max {MAX_LEN} chars)</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Reminder message (what should you remember?)"
          className="w-full min-h-[110px] rounded-md border px-3 py-2 text-sm bg-white resize-vertical"
          maxLength={MAX_LEN}
        />
        <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
          <div>{charCount}/{MAX_LEN}</div>
          <div className="flex items-center gap-2">
            <div className="text-xs text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> Time</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-slate-600 mb-1">Time</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full rounded-md border px-3 py-2 text-sm bg-white" required />
        </div>

        <div>
          <label className="block text-xs text-slate-600 mb-1">Date</label>
          <input type="date" value={isoDate ?? ""} disabled className="w-full rounded-md border px-3 py-2 text-sm bg-slate-50 text-slate-500" />
        </div>
      </div>

      {error && <div className="text-sm text-rose-600">{error}</div>}

      <div className="flex items-center justify-end gap-3">
        <button type="button" onClick={onCancel} className="px-3 py-2 rounded-md text-sm border hover:bg-slate-50">
          Cancel
        </button>
        <button type="submit" disabled={submitting} className="px-4 py-2 rounded-md bg-slate-800 text-white text-sm">
          <span className="inline-flex items-center gap-2">
            <Edit3 className="w-4 h-4" />
            Save reminder
          </span>
        </button>
      </div>
    </form>
  );
}
