"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Users,
  Plus,
  MoreVertical,
  Mail,
  MessageSquare,
  Crown,
  Star,
  UserPlus,
  Settings,
  TrendingUp,
  Activity,
  Award,
  Target,
} from "lucide-react";

// Team Card Component
const TeamCard = ({ team, delay }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 group overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/0 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${team.gradient} flex items-center justify-center shadow-lg`}
              animate={isHovered ? { scale: 1.05, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Users className="w-7 h-7 text-white" />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">{team.name}</h3>
              <p className="text-sm text-slate-500">{team.description}</p>
            </div>
          </div>
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <MoreVertical className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Lead & Featured */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {team.lead && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-xs font-medium">
              <Crown className="w-3.5 h-3.5" />
              {team.lead}
            </div>
          )}
          {team.featured && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">
              <Star className="w-3.5 h-3.5" />
              Featured
            </div>
          )}
        </div>

        {/* Members */}
        <div className="flex -space-x-2 mb-4 flex-wrap">
          {team.members.slice(0, 5).map((member: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, delay: delay + idx * 0.05 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-700 shadow-sm"
              title={member.name}
            >
              {member.initials}
            </motion.div>
          ))}
          {team.members.length > 5 && (
            <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-600">
              +{team.members.length - 5}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div>
            <p className="text-2xl font-bold text-slate-800">{team.members.length}</p>
            <p className="text-xs text-slate-500">Members</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">{team.projects}</p>
            <p className="text-xs text-slate-500">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-emerald-600">{team.completion}%</p>
            <p className="text-xs text-slate-500">Complete</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-4 py-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            Message
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all duration-200 flex items-center justify-center"
          >
            <Settings className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Stats Card Component
const StatCard = ({ icon: Icon, label, value, subtitle, gradient, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay }}
    className="p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300"
  >
    <div className="flex items-start justify-between mb-4">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <TrendingUp className="w-5 h-5 text-emerald-500" />
    </div>
    <h3 className="text-3xl font-bold text-slate-800 mb-1">{value}</h3>
    <p className="text-sm font-medium text-slate-600 mb-1">{label}</p>
    <p className="text-xs text-slate-500">{subtitle}</p>
  </motion.div>
);

// Main Page
export default function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const teams = [
    {
      id: 1,
      name: "Product Development",
      description: "Building the next generation platform",
      lead: "Sarah Chen",
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
      projects: 8,
      completion: 92,
      members: [
        { name: "Sarah Chen", initials: "SC" },
        { name: "Mike Ross", initials: "MR" },
        { name: "Emma Wilson", initials: "EW" },
        { name: "John Doe", initials: "JD" },
        { name: "Lisa Park", initials: "LP" },
        { name: "Alex Kim", initials: "AK" },
      ],
    },
    {
      id: 2,
      name: "Design Team",
      description: "Creating beautiful user experiences",
      lead: "Emily Rodriguez",
      featured: true,
      gradient: "from-violet-500 to-purple-500",
      projects: 12,
      completion: 88,
      members: [
        { name: "Emily Rodriguez", initials: "ER" },
        { name: "David Lee", initials: "DL" },
        { name: "Sophie Turner", initials: "ST" },
        { name: "James Wilson", initials: "JW" },
      ],
    },
    {
      id: 3,
      name: "Marketing",
      description: "Growing our brand and reach",
      lead: "Michael Brown",
      featured: false,
      gradient: "from-orange-500 to-rose-500",
      projects: 15,
      completion: 95,
      members: [
        { name: "Michael Brown", initials: "MB" },
        { name: "Anna Taylor", initials: "AT" },
        { name: "Chris Martin", initials: "CM" },
        { name: "Rachel Green", initials: "RG" },
        { name: "Tom Hardy", initials: "TH" },
      ],
    },
    {
      id: 4,
      name: "Customer Success",
      description: "Ensuring customer satisfaction",
      lead: "Jennifer Lopez",
      featured: false,
      gradient: "from-emerald-500 to-teal-500",
      projects: 6,
      completion: 90,
      members: [
        { name: "Jennifer Lopez", initials: "JL" },
        { name: "Robert Brown", initials: "RB" },
        { name: "Maria Garcia", initials: "MG" },
      ],
    },
    {
      id: 5,
      name: "Engineering",
      description: "Building scalable infrastructure",
      lead: "Alex Thompson",
      featured: true,
      gradient: "from-cyan-500 to-blue-500",
      projects: 10,
      completion: 87,
      members: [
        { name: "Alex Thompson", initials: "AT" },
        { name: "Kevin Zhang", initials: "KZ" },
        { name: "Nina Patel", initials: "NP" },
        { name: "Oscar Lee", initials: "OL" },
        { name: "Paula White", initials: "PW" },
        { name: "Quinn Davis", initials: "QD" },
      ],
    },
    {
      id: 6,
      name: "Sales",
      description: "Driving revenue growth",
      lead: "Daniel Kim",
      featured: false,
      gradient: "from-pink-500 to-rose-500",
      projects: 20,
      completion: 93,
      members: [
        { name: "Daniel Kim", initials: "DK" },
        { name: "Samantha Cole", initials: "SC" },
        { name: "Tyler Adams", initials: "TA" },
        { name: "Uma Singh", initials: "US" },
      ],
    },
  ];

  const filteredTeams = teams.filter(
    (team) =>
      team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = [
    {
      icon: Users,
      label: "Total Teams",
      value: teams.length.toString(),
      subtitle: "+2 this month",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Activity,
      label: "Active Members",
      value: teams.reduce((acc, t) => acc + t.members.length, 0).toString(),
      subtitle: "Across all teams",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Target,
      label: "Active Projects",
      value: teams.reduce((acc, t) => acc + t.projects, 0).toString(),
      subtitle: "In progress",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Award,
      label: "Avg Completion",
      value:
        Math.round(teams.reduce((acc, t) => acc + t.completion, 0) / teams.length) + "%",
      subtitle: "+5% from last month",
      gradient: "from-orange-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
            Teams
          </h1>
          <p className="text-slate-500 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Manage and collaborate with your teams
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} delay={index * 0.1} />
          ))}
        </div>

        {/* Search & Create */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-6 flex flex-col sm:flex-row gap-4"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search teams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm transition-all duration-200"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Create Team
          </motion.button>
        </motion.div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map((team, index) => (
            <TeamCard key={team.id} team={team} delay={0.3 + index * 0.1} />
          ))}
        </div>

        {/* No Teams Found */}
        {filteredTeams.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-16 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <Users className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">No teams found</h3>
            <p className="text-slate-500 mb-4">Try adjusting your search query</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
