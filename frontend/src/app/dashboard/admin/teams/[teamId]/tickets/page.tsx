"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import {
  Plus,
  TicketCheck,
  Bug,
  Zap,
  MessageSquare,
  CheckCircle,
  XCircle,
  Edit,
  Eye,
} from 'lucide-react';
import Modal from '@/components/ui/modal';

type Ticket = {
  id: string;
  title: string;
  description: string;
  type: 'BUG' | 'FEATURE' | 'QUERY' | 'IMPROVEMENT';
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  createdBy: { id: string; name: string; email: string };
  resolvedBy?: { id: string; name: string; email: string } | null;
  createdAt: string;
  updatedAt: string;
};

type TicketForm = {
  title: string;
  description: string;
  type: 'BUG' | 'FEATURE' | 'QUERY' | 'IMPROVEMENT';
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
};

const PRIORITY_COLORS: Record<string, string> = {
  LOW: 'bg-green-100 text-green-800',
  MEDIUM: 'bg-yellow-100 text-yellow-800',
  HIGH: 'bg-orange-100 text-orange-800',
  CRITICAL: 'bg-red-100 text-red-800',
};

const TYPE_ICONS: Record<string, React.ReactNode> = {
  BUG: <Bug className="w-4 h-4" />,
  FEATURE: <Zap className="w-4 h-4" />,
  QUERY: <MessageSquare className="w-4 h-4" />,
  IMPROVEMENT: <TicketCheck className="w-4 h-4" />,
};

const STATUS_BADGES: Record<string, { color: string; label: string }> = {
  OPEN: { color: 'bg-blue-100 text-blue-800', label: 'Open' },
  IN_PROGRESS: { color: 'bg-yellow-100 text-yellow-800', label: 'In Progress' },
  RESOLVED: { color: 'bg-emerald-100 text-emerald-800', label: 'Resolved' },
  CLOSED: { color: 'bg-slate-100 text-slate-800', label: 'Closed' },
};

export default function TicketsPage() {
  const params = useParams();
  const teamId = params.teamId as string;

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);
  const initialFormData: TicketForm = {
    title: '',
    description: '',
    type: 'BUG',
    priority: 'MEDIUM',
  };
  const [formData, setFormData] = useState<TicketForm>(initialFormData);
  const [submitting, setSubmitting] = useState(false);

  const closeTicketModal = () => {
    setShowCreateModal(false);
    setEditingTicket(null);
    setFormData(initialFormData);
  };

  const openCreateModal = () => {
    setEditingTicket(null);
    setFormData(initialFormData);
    setShowCreateModal(true);
  };

  const fetchTickets = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/tickets?teamId=${teamId}`);
      if (response.ok) {
        const result = await response.json();
        setTickets(result.tickets || []);
      }
    } catch (error) {
      console.error('Failed to fetch tickets:', error);
    } finally {
      setLoading(false);
    }
  }, [teamId]);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  const submitTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const url = editingTicket 
        ? `/api/tickets/${editingTicket.id}`
        : `/api/tickets?teamId=${teamId}`;
      
      const method = editingTicket ? 'PATCH' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Close immediately on success for better UX, then refresh list.
        closeTicketModal();
        await fetchTickets();
      }
    } catch (error) {
      console.error('Failed to save ticket:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const deleteTicket = async (id: string) => {
    if (!confirm('Are you sure you want to delete this ticket?')) return;

    try {
      const response = await fetch(`/api/tickets/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchTickets();
      }
    } catch (error) {
      console.error('Failed to delete ticket:', error);
    }
  };

  const editTicket = (ticket: Ticket) => {
    setEditingTicket(ticket);
    setFormData({
      title: ticket.title,
      description: ticket.description || '',
      type: ticket.type,
      priority: ticket.priority,
    });
    setShowCreateModal(true);
  };

  const ticketsByStatus = {
    OPEN: tickets.filter(t => t.status === 'OPEN'),
    IN_PROGRESS: tickets.filter(t => t.status === 'IN_PROGRESS'),
    RESOLVED: tickets.filter(t => t.status === 'RESOLVED' || t.status === 'CLOSED'),
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Team Tickets</h1>
          <p className="text-slate-500 mt-1">Manage bugs, features, and queries for this team</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={openCreateModal}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl flex items-center gap-2 self-start sm:self-auto"
        >
          <Plus className="w-5 h-5" />
          Create Ticket
        </motion.button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(ticketsByStatus).map(([status, count]) => (
          <div key={status} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${STATUS_BADGES[status as keyof typeof STATUS_BADGES].color}`}>
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="text-sm font-medium text-slate-600 capitalize">{status.replace('_', ' ').toLowerCase()}</div>
            </div>
            <div className="text-3xl font-bold text-slate-900">{count.length}</div>
          </div>
        ))}
      </div>

      {/* Tickets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full flex items-center justify-center py-12">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-3 text-slate-400" />
              <p className="text-slate-500">Loading tickets...</p>
            </div>
          </div>
        ) : tickets.length === 0 ? (
          <div className="col-span-full text-center py-20">
            <TicketCheck className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No tickets yet</h3>
            <p className="text-slate-500 mb-6">Create your first ticket to get started.</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg"
              onClick={openCreateModal}
            >
              <Plus className="w-4 h-4 inline mr-2" />
              Create Ticket
            </motion.button>
          </div>
        ) : (
          tickets.map((ticket) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-slate-300 p-6 shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className={`px-2.5 py-1 rounded-full text-xs font-semibold ${PRIORITY_COLORS[ticket.priority]}`}>
                    {ticket.priority}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    {TYPE_ICONS[ticket.type]}
                    {ticket.type.replace('_', ' ').toLowerCase()}
                  </div>
                </div>
                <div className={`px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_BADGES[ticket.status].color}`}>
                  {STATUS_BADGES[ticket.status].label}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2 group-hover:line-clamp-none">
                {ticket.title}
              </h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2 group-hover:line-clamp-none">
                {ticket.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-4">
                  <span>@{ticket.createdBy.name}</span>
                  <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Edit className="w-4 h-4 cursor-pointer hover:text-slate-700" onClick={() => editTicket(ticket)} />
                  <Eye className="w-4 h-4 cursor-pointer hover:text-slate-700" />
                  <XCircle className="w-4 h-4 cursor-pointer hover:text-rose-500" onClick={() => deleteTicket(ticket.id)} />
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Create/Edit Modal */}
      {showCreateModal && (
      <Modal onClose={closeTicketModal} ariaLabel={editingTicket ? "Edit Ticket" : "Create Ticket"}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <TicketCheck className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {editingTicket ? 'Edit Ticket' : 'Create New Ticket'}
            </h2>
          </div>

          <form onSubmit={submitTicket} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter ticket title..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-vertical"
                placeholder="Describe the issue, feature request, or query in detail..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as 'BUG' | 'FEATURE' | 'QUERY' | 'IMPROVEMENT' })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="BUG">Bug</option>
                  <option value="FEATURE">Feature Request</option>
                  <option value="QUERY">Query/Question</option>
                  <option value="IMPROVEMENT">Improvement</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Priority</label>
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value as 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="LOW">Low</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HIGH">High</option>
                  <option value="CRITICAL">Critical</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={closeTicketModal}
                className="flex-1 px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting || !formData.title.trim()}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 transition-all"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Saving...
                  </>
                ) : editingTicket ? (
                  'Update Ticket'
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    Create Ticket
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </Modal>
      )}
    </div>
  );
}

