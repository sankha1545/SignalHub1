// src/app/dashboard/admin/analytics/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Users,
  MessageSquare,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Calendar,
  Zap,
  Target,
  Award,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";

/* ------------------------------
   Helpers & small utilities
   ------------------------------ */
const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const DAYS = 14;
const makePastDates = (n = DAYS) => {
  const arr: string[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    arr.push(d.toISOString().slice(0, 10));
  }
  return arr;
};

/** Shade (lighten/darken) a hex color by percent (-100..100). Returns 6-digit hex. */
function shadeColor(hexInput: string, percent: number) {
  // normalize
  let hex = hexInput.replace("#", "");
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  const num = parseInt(hex, 16);
  const r = (num >> 16) & 0xff;
  const g = (num >> 8) & 0xff;
  const b = num & 0xff;
  const adj = (v: number) => {
    const out = Math.round(v + (percent / 100) * 255);
    return Math.max(0, Math.min(255, out));
  };
  const rr = adj(r);
  const gg = adj(g);
  const bb = adj(b);
  return `#${((rr << 16) | (gg << 8) | bb).toString(16).padStart(6, "0")}`;
}

/* ------------------------------
   Components: StatCard & ActivityItem
   (preserve look & animations, typed)
   ------------------------------ */
type StatCardProps = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ComponentType<any>;
  gradient: string;
  delay?: number;
};
function StatCard({ title, value, change, trend, icon: Icon, gradient, delay = 0 }: StatCardProps) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, delay }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative group"
    >
      <div className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">{value}</h3>
          </div>

          <motion.div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md flex-shrink-0`}
            animate={hover ? { scale: 1.08, rotate: 6 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.28 }}
          >
            <Icon className="w-5 h-5 text-white" />
          </motion.div>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${
              trend === "up" ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
            }`}
          >
            {trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {change}
          </div>
          <span className="text-xs text-slate-500">vs last month</span>
        </div>
      </div>
    </motion.div>
  );
}

type ActivityItemProps = {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  time: string;
  gradient: string;
  delay?: number;
};
function ActivityItem({ icon: Icon, title, description, time, gradient, delay = 0 }: ActivityItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.28, delay }}
      className="flex items-start gap-3 p-3 sm:p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200"
    >
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-slate-800 mb-1 truncate">{title}</h4>
        <p className="text-xs text-slate-500 truncate">{description}</p>
      </div>
      <div className="flex items-center gap-1 text-xs text-slate-400">
        <Clock className="w-3 h-3" />
        {time}
      </div>
    </motion.div>
  );
}

/* ------------------------------
   Custom Recharts shape: 3D Bar
   - draws front rect + slanted side + top highlight
   ------------------------------ */
const render3DBar = (props: any) => {
  const { x, y, width, height, fill } = props;
  const depth = Math.max(6, Math.min(14, Math.round(width * 0.12)));
  const frontX = x;
  const frontY = y;
  const frontW = width;
  const frontH = height;

  const p1 = `${frontX + frontW},${frontY}`; // top-right
  const p2 = `${frontX + frontW + depth},${frontY - depth}`; // top-right slant
  const p3 = `${frontX + frontW + depth},${frontY - depth + frontH}`; // bottom-right slant
  const p4 = `${frontX + frontW},${frontY + frontH}`; // bottom-right

  const sideFill = shadeColor(fill || "#000000", -18);
  const topFill = shadeColor(fill || "#000000", 12);

  return (
    <g>
      {/* side polygon */}
      <polygon points={`${p1} ${p2} ${p3} ${p4}`} fill={sideFill} opacity={0.96} />
      {/* front face */}
      <rect x={frontX} y={frontY} rx={4} ry={4} width={frontW} height={frontH} fill={fill} />
      {/* top highlight */}
      <ellipse cx={frontX + frontW / 2} cy={Math.max(0, frontY - Math.max(2, depth / 2))} rx={frontW / 2.4} ry={Math.max(2, depth / 3)} fill={topFill} opacity={0.12} />
    </g>
  );
};

/* ------------------------------
   Page - Analytics
   - mobile-first responsive layout
   - simulated live updates (useEffect interval)
   ------------------------------ */
export default function AnalyticsPage(): JSX.Element {
  const [activeTab] = useState<"overview" | "analytics">("analytics");

  const stats = [
    { title: "Total Messages", value: "2,845", change: "+12.5%", trend: "up", icon: MessageSquare, gradient: "from-blue-500 to-cyan-500" },
    { title: "Active Users", value: "1,234", change: "+8.2%", trend: "up", icon: Users, gradient: "from-emerald-500 to-teal-500" },
    { title: "Response Time", value: "2.4h", change: "-15.3%", trend: "down", icon: Clock, gradient: "from-violet-500 to-purple-500" },
    { title: "Completion Rate", value: "94.2%", change: "+3.1%", trend: "up", icon: CheckCircle2, gradient: "from-orange-500 to-rose-500" },
  ];

  const activities = [
    { icon: MessageSquare, title: "New message from Sarah Johnson", description: "Regarding project timeline and deliverables", time: "2m ago", gradient: "from-blue-500 to-cyan-500" },
    { icon: Users, title: "Team meeting scheduled", description: "Weekly sync-up with development team", time: "15m ago", gradient: "from-emerald-500 to-teal-500" },
    { icon: CheckCircle2, title: "Task completed", description: "UI/UX design review has been finalized", time: "1h ago", gradient: "from-violet-500 to-purple-500" },
    { icon: AlertCircle, title: "Attention required", description: "3 messages awaiting your response", time: "2h ago", gradient: "from-orange-500 to-rose-500" },
    { icon: Target, title: "Goal achieved", description: "Monthly target reached ahead of schedule", time: "3h ago", gradient: "from-pink-500 to-rose-500" },
  ];

  const labels = useMemo(() => makePastDates(14), []);
  const [messagesPerDay, setMessagesPerDay] = useState(labels.map((label) => ({ date: label, messages: rand(120, 420) })));
  const [roleBreakdown, setRoleBreakdown] = useState([{ name: "Admin", value: 1200 }, { name: "Employee", value: 820 }, { name: "Manager", value: 825 }]);
  const [teamBreakdown, setTeamBreakdown] = useState([
    { team: "Sales", messages: 820, color: "#60a5fa" },
    { team: "Support", messages: 1120, color: "#34d399" },
    { team: "Engineering", messages: 630, color: "#f472b6" },
    { team: "Marketing", messages: 410, color: "#f59e0b" },
  ]);
  const [topResponders, setTopResponders] = useState([
    { name: "Aisha Khan", messages: 420, role: "Support" },
    { name: "Rahul Mehta", messages: 388, role: "Sales" },
    { name: "Priya Sharma", messages: 335, role: "Support" },
  ]);
  const [topPerformers, setTopPerformers] = useState([
    { name: "Team Alpha", metric: "94.2%" },
    { name: "Team Beta", metric: "91.8%" },
    { name: "Team Gamma", metric: "89.6%" },
  ]);

  useEffect(() => {
    const t = setInterval(() => {
      setMessagesPerDay((prev) => {
        const copy = prev.map((p) => ({ ...p }));
        // bump today randomly and slightly adjust others
        copy[copy.length - 1].messages = Math.max(10, copy[copy.length - 1].messages + rand(1, 15));
        for (let i = 0; i < copy.length - 1; i++) copy[i].messages = Math.max(5, copy[i].messages + rand(-4, 6));
        return copy;
      });

      setRoleBreakdown((prev) => prev.map((r) => ({ ...r, value: Math.max(5, r.value + rand(-8, 12)) })));
      setTeamBreakdown((prev) => prev.map((t) => ({ ...t, messages: Math.max(5, t.messages + rand(-12, 18)) })));
      setTopResponders((prev) => prev.map((p) => ({ ...p, messages: Math.max(5, p.messages + rand(-6, 10)) })).sort((a, b) => b.messages - a.messages));
    }, 3500);

    return () => clearInterval(t);
  }, []);

  // chart colors
  const pieColors = ["#0ea5e9", "#34d399", "#fb7185"];
  const barColors = teamBreakdown.map((t) => t.color);
  const lineColor = "#06b6d4";

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Analytics
                </h1>
                <p className="mt-1 text-sm text-slate-500 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Live insights & trends
                </p>
              </div>
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity }} className="ml-2 mt-1">
                <Zap className="w-6 h-6 text-yellow-500" />
              </motion.div>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-md text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                Export
                <ArrowUpRight className="w-4 h-4 inline-block ml-1" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* top stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((s, i) => (
            <StatCard key={s.title} {...s} delay={i * 0.06} />
          ))}
        </section>

        {/* charts row 1 */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <article className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Messages (Last 14 days)</h3>
            <div style={{ minHeight: 220, height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={messagesPerDay} margin={{ top: 6, right: 12, left: -6, bottom: 6 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="messages" stroke={lineColor} strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">By Role</h3>
            <div style={{ minHeight: 220, height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  {/* depth pie (darker, slightly lower) */}
                  <Pie
                    data={roleBreakdown}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={46}
                    outerRadius={84}
                    startAngle={90}
                    endAngle={-270}
                    isAnimationActive={false}
                  >
                    {roleBreakdown.map((entry, idx) => (
                      <Cell key={`depth-${idx}`} fill={shadeColor(pieColors[idx % pieColors.length], -26)} />
                    ))}
                  </Pie>

                  {/* top pie slightly shifted up to show depth */}
                  <Pie
                    data={roleBreakdown}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="47%"
                    innerRadius={52}
                    outerRadius={78}
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={2}
                  >
                    {roleBreakdown.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={pieColors[idx % pieColors.length]} />
                    ))}
                  </Pie>

                  <Tooltip />
                  <Legend verticalAlign="bottom" height={28} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </article>
        </section>

        {/* charts row 2 */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Messages by Team</h3>
            <div style={{ minHeight: 220, height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={teamBreakdown} margin={{ top: 12, right: 12, left: -6, bottom: 6 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="team" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="messages" shape={render3DBar}>
                    {teamBreakdown.map((entry, idx) => (
                      <Cell key={`barcell-${idx}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm">
              <h4 className="text-md font-semibold text-slate-800 mb-2">Top Responders</h4>
              <div className="divide-y">
                {topResponders.map((t) => (
                  <div key={t.name} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-md bg-slate-100 flex items-center justify-center font-semibold text-slate-700">
                        {t.name.split(" ")[0][0]}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-800">{t.name}</div>
                        <div className="text-xs text-slate-500">{t.role}</div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-slate-800">{t.messages}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm">
              <h4 className="text-md font-semibold text-slate-800 mb-2">Top Performers</h4>
              <div className="divide-y">
                {topPerformers.map((p) => (
                  <div key={p.name} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-md bg-slate-100 flex items-center justify-center font-semibold text-slate-700">
                        {p.name.split(" ")[0][0]}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-800">{p.name}</div>
                        <div className="text-xs text-slate-500">Performance</div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-emerald-600">{p.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <footer className="mt-6 text-sm text-slate-500">
          Tip: replace the simulated interval with your backend WebSocket/SSE for live data. For interactive 3D (rotate/zoom) use a WebGL chart library.
        </footer>
      </div>
    </main>
  );
}
