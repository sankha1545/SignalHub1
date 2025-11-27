"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Plus, UserPlus, Star, Crown } from "lucide-react";

type Member = { name: string; initials: string };

type CreateTeamFormProps = {
  onCreate: (team: any) => void;
  onClose: () => void;
};

export default function CreateTeamForm({ onCreate, onClose }: CreateTeamFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [lead, setLead] = useState("");
  const [featured, setFeatured] = useState(false);
  const [gradient, setGradient] = useState("from-blue-500 to-cyan-500");
  const [projects, setProjects] = useState<number | "">("");
  const [completion, setCompletion] = useState<number | "">("");
  const [members, setMembers] = useState<Member[]>([]);

  const gradientOptions = [
    { id: "blue", label: "Blue / Cyan", value: "from-blue-500 to-cyan-500" },
    { id: "violet", label: "Violet / Purple", value: "from-violet-500 to-purple-500" },
    { id: "orange", label: "Orange / Rose", value: "from-orange-500 to-rose-500" },
    { id: "emerald", label: "Emerald / Teal", value: "from-emerald-500 to-teal-500" },
    { id: "cyan", label: "Cyan / Blue", value: "from-cyan-500 to-blue-500" },
    { id: "pink", label: "Pink / Rose", value: "from-pink-500 to-rose-500" },
  ];

  function getInitials(nameStr: string) {
    if (!nameStr) return "";
    const parts = nameStr.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function addMember(name: string) {
    const trimmed = name.trim();
    if (!trimmed) return;
    setMembers((m) => [...m, { name: trimmed, initials: getInitials(trimmed) }]);
  }

  function removeMember(idx: number) {
    setMembers((m) => m.filter((_, i) => i !== idx));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please provide a team name.");
      return;
    }
    const parsedProjects = projects === "" ? 0 : Number(projects);
    const parsedCompletion = completion === "" ? 0 : Number(completion);

    const team = {
      id: Date.now(),
      name: name.trim(),
      description: description.trim(),
      lead: lead.trim() || undefined,
      featured,
      gradient,
      projects: parsedProjects,
      completion: Math.min(100, Math.max(0, parsedCompletion)),
      members: members.map((m) => ({ name: m.name, initials: m.initials })),
    };

    onCreate(team);
    // Reset fields after creation
    setName("");
    setDescription("");
    setLead("");
    setFeatured(false);
    setGradient("from-blue-500 to-cyan-500");
    setProjects("");
    setCompletion("");
    setMembers([]);
    onClose();
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
            Create Team
          </h3>
          <p className="text-sm text-slate-500">Add a new team to your workspace</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close create team"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Lead */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="flex flex-col">
            <span className="text-xs font-medium text-slate-600 mb-1">Team name</span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              placeholder="Product Development"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-xs font-medium text-slate-600 mb-1">Team lead</span>
            <input
              value={lead}
              onChange={(e) => setLead(e.target.value)}
              className="px-3 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              placeholder="Sarah Chen"
            />
          </label>
        </div>

        {/* Description */}
        <label className="flex flex-col">
          <span className="text-xs font-medium text-slate-600 mb-1">Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            placeholder="Short description..."
            className="px-3 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500/10"
          />
        </label>

        {/* Flags & numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
          <label className="flex flex-col">
            <span className="text-xs font-medium text-slate-600 mb-1">Projects</span>
            <input
              type="number"
              min={0}
              value={projects}
              onChange={(e) => setProjects(e.target.value === "" ? "" : Number(e.target.value))}
              className="px-3 py-3 rounded-xl border border-slate-200"
              placeholder="0"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-xs font-medium text-slate-600 mb-1">Completion (%)</span>
            <input
              type="number"
              min={0}
              max={100}
              value={completion}
              onChange={(e) =>
                setCompletion(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="px-3 py-3 rounded-xl border border-slate-200"
              placeholder="0"
            />
          </label>

          <label className="flex items-center gap-3">
            <input
              id="featured"
              type="checkbox"
              checked={featured}
              onChange={() => setFeatured((f) => !f)}
              className="w-4 h-4 rounded"
            />
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
          <div className="flex flex-wrap gap-2">
            {gradientOptions.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setGradient(g.value)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${
                  g.value === gradient ? "border-blue-500 ring-2 ring-blue-200" : "border-slate-200"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${g.value}`} />
                <span className="text-sm text-slate-700">{g.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Members */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-xs font-medium text-slate-600">Members</span>
              <p className="text-xs text-slate-500">Add team members (name only)</p>
            </div>
            <div className="text-xs text-slate-400">{members.length} added</div>
          </div>

          <MemberInput onAdd={(nameVal) => addMember(nameVal)} />

          <div className="mt-3 flex flex-wrap gap-2">
            {members.map((m, i) => (
              <div
                key={`${m.name}-${i}`}
                className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-xs font-semibold text-slate-700">
                  {m.initials}
                </div>
                <div className="text-sm text-slate-700">{m.name}</div>
                <button
                  type="button"
                  onClick={() => removeMember(i)}
                  className="ml-2 p-1 rounded-md hover:bg-slate-100"
                  aria-label={`Remove ${m.name}`}
                >
                  ✕
                </button>
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
            className="px-5 py-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl font-medium shadow-md"
          >
            <div className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Create Team
            </div>
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}

/** Small member input subcomponent to add a single member quickly */
function MemberInput({ onAdd }: { onAdd: (name: string) => void }) {
  const [val, setVal] = useState("");
  return (
    <div className="flex gap-2">
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (val.trim()) {
              onAdd(val.trim());
              setVal("");
            }
          }
        }}
        placeholder="Type a member name and press Enter"
        className="flex-1 px-3 py-3 rounded-xl border border-slate-200 focus:outline-none"
      />
      <button
        type="button"
        onClick={() => {
          if (val.trim()) {
            onAdd(val.trim());
            setVal("");
          }
        }}
        className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
