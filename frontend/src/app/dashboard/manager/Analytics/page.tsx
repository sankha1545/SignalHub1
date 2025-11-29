// src/app/dashboard/manager/analytics/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  BarChart as BarIcon,
  Clock,
  CheckCircle2,
  Zap,
  Calendar,
  Download,
  TrendingUp,
  TrendingDown,
  Award,
  CalendarDays,
  FileText,
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
   Helpers & utilities
   ------------------------------ */
const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// create last `n` dates as yyyy-mm-dd (default 30 days)
const makePastDates = (n = 30) => {
  const arr: string[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    arr.push(d.toISOString().slice(0, 10));
  }
  return arr;
};

// last `n` months labels (e.g., "Aug 2025")
const makePastMonths = (n = 6) => {
  const arr: string[] = [];
  const today = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
    arr.push(d.toLocaleString(undefined, { month: "short", year: "numeric" }));
  }
  return arr;
};

/** Shade (lighten/darken) a hex color by percent (-100..100). Returns 6-digit hex. */
function shadeColor(hexInput: string, percent: number) {
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
   UI components: StatCard & ActivityItem
   (kept style but adapted text)
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
      transition={{ duration: 0.32, delay }}
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
          <span className="text-xs text-slate-500">vs previous period</span>
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
      initial={{ opacity: 0, x: -12 }}
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
   (kept from admin file)
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
      <polygon points={`${p1} ${p2} ${p3} ${p4}`} fill={sideFill} opacity={0.96} />
      <rect x={frontX} y={frontY} rx={4} ry={4} width={frontW} height={frontH} fill={fill} />
      <ellipse
        cx={frontX + frontW / 2}
        cy={Math.max(0, frontY - Math.max(2, depth / 2))}
        rx={frontW / 2.4}
        ry={Math.max(2, depth / 3)}
        fill={topFill}
        opacity={0.12}
      />
    </g>
  );
};

/* ------------------------------
   Manager Analytics Page
   - focus: team manager insights
   - charts:
     1) Line: employee performance (last 30 days)
     2) Pie: tasks accomplished till date (status breakdown)
     3) Bar: tasks completed per month (last 6 months)
   - extras: team filter, metric toggle, CSV export
   ------------------------------ */
export default function ManagerAnalyticsPage(): JSX.Element {
  // UI state
  const [selectedTeam, setSelectedTeam] = useState<string>("All teams");
  const [metric, setMetric] = useState<"avg_rating" | "throughput">("avg_rating");
  const [smooth, setSmooth] = useState<boolean>(true);

  // teams list (simulated)
  const teams = useMemo(() => ["All teams", "Sales", "Support", "Engineering", "Marketing"], []);

  // labels
  const dayLabels = useMemo(() => makePastDates(30), []);
  const monthLabels = useMemo(() => makePastMonths(6), []);

  // Simulated data sources
  const [performanceData, setPerformanceData] = useState(
    dayLabels.map((date) => ({
      date,
      // avg rating 1..5 with decimals OR throughput (tasks handled that day)
      avg_rating: Math.round((3.5 + Math.random() * 1.6) * 10) / 10,
      throughput: rand(8, 34),
    }))
  );

  const [tasksStatus, setTasksStatus] = useState([
    { name: "Completed", value: 1824, color: "#10b981" },
    { name: "In Review", value: 342, color: "#f59e0b" },
    { name: "Blocked", value: 86, color: "#ef4444" },
  ]);

  const [tasksPerMonth, setTasksPerMonth] = useState(
    monthLabels.map((m) => ({ month: m, completed: rand(120, 520), color: `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}` }))
  );

  const [topPerformers, setTopPerformers] = useState([
    { name: "Aisha Khan", metric: 4.8, tasksCompleted: 142, role: "Support" },
    { name: "Rahul Mehta", metric: 4.6, tasksCompleted: 131, role: "Sales" },
    { name: "Priya Sharma", metric: 4.5, tasksCompleted: 120, role: "Engineering" },
  ]);

  const [activities] = useState([
    { icon: FileText, title: "Sprint review scheduled", description: "Sprint demo with stakeholders", time: "5m ago", gradient: "from-blue-500 to-cyan-500" },
    { icon: Users, title: "New hire: Backend dev", description: "Onboarding starts next week", time: "20m ago", gradient: "from-emerald-500 to-teal-500" },
    { icon: Award, title: "Peer recognition", description: "Aisha completed 100 tasks this month", time: "1h ago", gradient: "from-pink-500 to-rose-500" },
  ]);

  // simulate live updates (small fluctuations)
  useEffect(() => {
    const t = setInterval(() => {
      setPerformanceData((prev) => {
        const copy = prev.map((p) => ({ ...p }));
        // small fluctuation for the latest day
        copy[copy.length - 1] = {
          ...copy[copy.length - 1],
          avg_rating: Math.round((Math.max(2.5, Math.min(5, copy[copy.length - 1].avg_rating + (Math.random() - 0.5) * 0.18))) * 10) / 10,
          throughput: Math.max(1, copy[copy.length - 1].throughput + rand(-3, 4)),
        };
        // slightly modify previous days mildly
        for (let i = 0; i < copy.length - 1; i++) {
          copy[i] = {
            ...copy[i],
            avg_rating: Math.round((Math.max(2.2, Math.min(5, copy[i].avg_rating + (Math.random() - 0.5) * 0.12))) * 10) / 10,
            throughput: Math.max(1, copy[i].throughput + rand(-2, 3)),
          };
        }
        return copy;
      });

      setTasksPerMonth((prev) => prev.map((p) => ({ ...p, completed: Math.max(10, p.completed + rand(-12, 28)) })));
      setTasksStatus((prev) => prev.map((s) => ({ ...s, value: Math.max(0, s.value + rand(-8, 18)) })));
      setTopPerformers((prev) => prev.map((t) => ({ ...t, tasksCompleted: Math.max(0, t.tasksCompleted + rand(-4, 6)) })).sort((a, b) => b.tasksCompleted - a.tasksCompleted));
    }, 4200);

    return () => clearInterval(t);
  }, []);

  // chart colors
  const pieColors = tasksStatus.map((t) => t.color);
  const barColors = tasksPerMonth.map((t) => t.color);
  const lineColor = metric === "avg_rating" ? "#06b6d4" : "#0ea5e9";

  // derived KPI values (simple aggregations)
  const totalTasks = tasksStatus.reduce((s, v) => s + v.value, 0);
  const avgRating = Math.round(performanceData.reduce((s, p) => s + p.avg_rating, 0) / performanceData.length * 10) / 10;
  const avgThroughput = Math.round(performanceData.reduce((s, p) => s + p.throughput, 0) / performanceData.length);

  // CSV export
  const exportCSV = () => {
    // compile simple CSV: date,avg_rating,throughput
    const rows = [["date", "avg_rating", "throughput"], ...performanceData.map((r) => [r.date, String(r.avg_rating), String(r.throughput)])];
    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `manager_performance_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // small UI helpers
  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedTeam(e.target.value);
  const handleMetricChange = (m: "avg_rating" | "throughput") => setMetric(m);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Team Analytics
                </h1>
                <p className="mt-1 text-sm text-slate-500 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  Manager view — performance & task metrics
                </p>
              </div>
              <motion.div animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 2, repeat: Infinity }} className="ml-2 mt-1">
                <Zap className="w-6 h-6 text-yellow-500" />
              </motion.div>
            </div>

            <div className="flex items-center gap-2">
              <select value={selectedTeam} onChange={handleTeamChange} className="rounded-md border px-3 py-1 text-sm bg-white">
                {teams.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <button
                onClick={exportCSV}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>
          </div>
        </motion.div>

        {/* top stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard title="Team Size" value="28" change="+2.5%" trend="up" icon={Users} gradient="from-blue-500 to-cyan-500" />
          <StatCard
            title={metric === "avg_rating" ? "Avg Performance" : "Avg Throughput"}
            value={metric === "avg_rating" ? `${avgRating}/5` : `${avgThroughput}/day`}
            change={metric === "avg_rating" ? "+0.4" : "+6.2%"}
            trend={metric === "avg_rating" ? "up" : "up"}
            icon={metric === "avg_rating" ? Award : BarIcon}
            gradient="from-emerald-500 to-teal-500"
          />
          <StatCard title="Tasks Completed" value={String(tasksPerMonth.reduce((s, t) => s + t.completed, 0))} change="+5.1%" trend="up" icon={CheckCircle2} gradient="from-violet-500 to-purple-500" />
          <StatCard title="Avg Response Time" value="1.8h" change="-12.3%" trend="down" icon={Clock} gradient="from-orange-500 to-rose-500" />
        </section>

        {/* control row */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-white border rounded-2xl p-3 flex items-center gap-2 text-sm">
            <span className="text-xs text-slate-500 mr-2">Metric</span>
            <button
              onClick={() => handleMetricChange("avg_rating")}
              className={`px-3 py-1 rounded-md text-sm ${metric === "avg_rating" ? "bg-slate-800 text-white" : "bg-transparent text-slate-700"}`}
            >
              Avg Rating
            </button>
            <button
              onClick={() => handleMetricChange("throughput")}
              className={`px-3 py-1 rounded-md text-sm ${metric === "throughput" ? "bg-slate-800 text-white" : "bg-transparent text-slate-700"}`}
            >
              Throughput
            </button>
          </div>

          <div className="bg-white border rounded-2xl p-3 flex items-center gap-3 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={smooth} onChange={() => setSmooth(!smooth)} />
              <span className="text-xs text-slate-600">Smoothing</span>
            </label>
          </div>
        </div>

        {/* charts row 1 */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <article className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-start justify-between mb-3 gap-4">
              <h3 className="text-lg font-semibold text-slate-800">Employee Performance (Last 30 days)</h3>
              <div className="text-sm text-slate-500">Showing: {selectedTeam}</div>
            </div>

            <div style={{ minHeight: 240, height: 340 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData} margin={{ top: 8, right: 12, left: -6, bottom: 6 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} hide={true} />
                  <YAxis
                    domain={metric === "avg_rating" ? [2, 5] : [0, "dataMax + 10"]}
                    tick={{ fontSize: 11 }}
                    allowDecimals={metric === "avg_rating"}
                  />
                  <Tooltip />
                  <Line
                    type={smooth ? "monotone" : "linear"}
                    dataKey={metric}
                    stroke={lineColor}
                    strokeWidth={3}
                    dot={true}
                    activeDot={{ r: 5 }}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </article>

          <article className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-slate-800">Tasks accomplished (status)</h3>
              <div className="text-sm text-slate-500">Total: {totalTasks}</div>
            </div>

            <div style={{ minHeight: 220, height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={tasksStatus} dataKey="value" nameKey="name" cx="50%" cy="45%" outerRadius={80} innerRadius={40} paddingAngle={4}>
                    {tasksStatus.map((entry, idx) => (
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
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-slate-800">Tasks Completed per Month</h3>
              <div className="text-sm text-slate-500">Last {tasksPerMonth.length} months</div>
            </div>

            <div style={{ minHeight: 220, height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={tasksPerMonth} margin={{ top: 12, right: 12, left: -6, bottom: 6 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completed" shape={render3DBar}>
                    {tasksPerMonth.map((entry, idx) => (
                      <Cell key={`barcell-${idx}`} fill={barColors[idx % barColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm">
              <h4 className="text-md font-semibold text-slate-800 mb-2">Top Performers</h4>
              <div className="divide-y">
                {topPerformers.map((t) => (
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
                    <div className="text-sm text-slate-800">
                      <div className="font-semibold">{t.tasksCompleted}</div>
                      <div className="text-xs text-slate-500">tasks</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm">
              <h4 className="text-md font-semibold text-slate-800 mb-2">Recent Activity</h4>
              <div className="divide-y">
                {activities.map((a, i) => (
                  <ActivityItem key={i} {...a} delay={i * 0.04} />
                ))}
              </div>
            </div>
          </aside>
        </section>

        <footer className="mt-6 text-sm text-slate-500">
          Tip: replace simulated data with your backend metrics (WebSocket/SSE) for live updates. Use CSV export to share a snapshot with stakeholders.
        </footer>
      </div>
    </main>
  );
}
