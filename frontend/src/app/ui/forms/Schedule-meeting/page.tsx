"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { X, Clock, Calendar, User, Bell } from "lucide-react";

/**
 * ScheduleMeetingForm
 *
 * Props:
 * - team: the team object (contains members array)
 * - onClose: () => void
 * - onSchedule: (meeting) => void  // meeting contains organizer, meetingTime (ISO), reminderBefore (minutes), inviteTime (ISO), teamId
 *
 * Behavior:
 * - User selects organizer name, meeting date-time (datetime-local), reminder before (select)
 * - The component computes inviteTime = meetingTime - reminderBefore (minutes)
 * - On submit, calls onSchedule with meeting object including inviteTime
 *
 * Note: This is a client-side form. For real invites, hook onSchedule to an API that will persist & schedule notifications.
 */

type Member = { name: string; initials?: string };

export default function ScheduleMeetingForm({
  team,
  onClose,
  onSchedule,
}: {
  team: any;
  onClose: () => void;
  onSchedule: (meeting: any) => void;
}) {
  const [organizer, setOrganizer] = useState("");
  const [meetingTime, setMeetingTime] = useState<string>(() => {
    // default: next hour rounded to next 30 minutes in local time (helps UX)
    const d = new Date();
    d.setMinutes(0, 0, 0);
    d.setHours(d.getHours() + 1);
    // format to yyyy-MM-ddTHH:mm for input value
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
    const yyyy = d.getFullYear();
    const mm = pad(d.getMonth() + 1);
    const dd = pad(d.getDate());
    const hh = pad(d.getHours());
    const min = pad(d.getMinutes());
    return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
  });

  const reminderOptions = [10, 20, 30, 40, 50, 60]; // minutes
  const [reminderBefore, setReminderBefore] = useState<number>(20);

  // compute invite time (Date object) whenever meetingTime or reminderBefore changes
  const inviteTime = useMemo(() => {
    if (!meetingTime) return null;
    // meetingTime is local ISO without timezone (datetime-local). Construct Date using local parts.
    const dt = new Date(meetingTime);
    if (Number.isNaN(dt.getTime())) return null;
    const invite = new Date(dt.getTime() - reminderBefore * 60 * 1000);
    return invite;
  }, [meetingTime, reminderBefore]);

  function formatToIST(date: Date | null) {
    if (!date) return "";
    try {
      // Use Asia/Kolkata as requested — browser may support timeZone in toLocaleString
      return date.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    } catch (e) {
      // fallback to simple locale representation
      return date.toLocaleString();
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!organizer.trim()) {
      alert("Please enter the meeting organizer's name.");
      return;
    }
    if (!meetingTime) {
      alert("Please pick a meeting time.");
      return;
    }
    if (!inviteTime) {
      alert("Invalid meeting time.");
      return;
    }

    const meeting = {
      teamId: team?.id,
      teamName: team?.name,
      organizer: organizer.trim(),
      meetingTimeISO: new Date(meetingTime).toISOString(),
      reminderBeforeMinutes: reminderBefore,
      inviteTimeISO: inviteTime.toISOString(),
      // include list of invitees (team members)
      invitees: (team?.members || []).map((m: Member) => ({ name: m.name, initials: m.initials })),
    };

    // callback to parent
    onSchedule(meeting);
    // no local persistence here; parent should handle persisting/scheduling
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.16 }}
      className="w-full max-w-2xl mx-4 bg-white rounded-2xl border border-slate-200 shadow-2xl p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Schedule Meeting
          </h3>
          <p className="text-sm text-slate-500">
            Invite all members of <span className="font-medium text-slate-700">{team?.name}</span>
          </p>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close schedule meeting"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Organizer */}
        <label className="flex flex-col">
          <span className="text-xs font-medium text-slate-600 mb-1">Meeting Organizer</span>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-slate-400" />
            <input
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
              placeholder="Organizer name (e.g., Sarah Chen)"
              className="flex-1 px-3 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
        </label>

        {/* Meeting time */}
        <label className="flex flex-col">
          <span className="text-xs font-medium text-slate-600 mb-1">Meeting time</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-400" />
            <input
              type="datetime-local"
              value={meetingTime}
              onChange={(e) => setMeetingTime(e.target.value)}
              className="flex-1 px-3 py-3 rounded-xl border border-slate-200 focus:outline-none"
            />
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Time shown & calculated in your browser's local timezone. Invite times are displayed in IST below.
          </p>
        </label>

        {/* Reminder before */}
        <div>
          <span className="text-xs font-medium text-slate-600 mb-2 block">Reminder before</span>
          <div className="flex flex-wrap gap-2">
            {reminderOptions.map((mins) => (
              <button
                key={mins}
                type="button"
                onClick={() => setReminderBefore(mins)}
                className={`px-3 py-2 rounded-xl border ${
                  mins === reminderBefore ? "border-emerald-500 ring-2 ring-emerald-200" : "border-slate-200"
                }`}
              >
                {mins} mins
              </button>
            ))}
          </div>
        </div>

        {/* Computed invite time preview */}
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
          <p className="text-sm text-slate-600">
            <span className="font-medium text-slate-800">Invite time:</span>{" "}
            {inviteTime ? (
              <>
                {formatToIST(inviteTime)}{" "}
                <span className="text-xs text-slate-400">({reminderBefore} min before meeting)</span>
              </>
            ) : (
              <span className="text-slate-400">Pick a meeting time</span>
            )}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Invitations will be sent to the team's members at this time (local IST shown).
          </p>
        </div>

        {/* Invitees preview */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-xs font-medium text-slate-600">Invitees</span>
              <p className="text-xs text-slate-500">Team members who will receive the invite</p>
            </div>
            <div className="text-xs text-slate-400">{(team?.members || []).length} members</div>
          </div>

          <div className="flex flex-wrap gap-2">
            {(team?.members || []).map((m: Member, i: number) => (
              <div
                key={`${m.name}-${i}`}
                className="flex items-center gap-2 bg-white border border-slate-100 px-3 py-2 rounded-xl shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-xs font-semibold text-slate-700">
                  {m.initials ?? (m.name ? m.name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase() : "")}
                </div>
                <div className="text-sm text-slate-700">{m.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 justify-end pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
          >
            Cancel
          </button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="px-5 py-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl font-medium shadow-md flex items-center gap-2"
          >
            <Bell className="w-4 h-4" />
            Schedule & Invite
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
