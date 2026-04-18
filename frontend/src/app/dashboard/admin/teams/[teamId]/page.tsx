"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Calendar,
  Loader2,
  MessageSquare,
  Minus,
  Plus,
  Settings,
  Trash2,
  Users,
  Play,
  Link2,
} from "lucide-react";
import Modal from "@/components/ui/modal";
import ScheduleMeetingForm from "@/app/ui/forms/Schedule-meeting/page";

type ApiTeamMember = {
  teamMemberId?: string | null;
  userId?: string | null;
  id?: string | null;
  name?: string | null;
  email?: string | null;
  role?: string | null;
};

type TeamDetails = {
  id: string;
  name: string;
  description?: string | null;
  members?: ApiTeamMember[];
  manager?: {
    id?: string;
    name?: string | null;
    email?: string | null;
  } | null;
};

type Member = {
  id: string;
  name: string;
  email?: string;
  role: string;
};

type PlacedNode = {
  id: string;
  memberId: string;
  x: number;
  y: number;
};

type HierarchyEdge = {
  id: string;
  from: string;
  to: string;
};

const WORKSPACE_WIDTH = 1180;
const WORKSPACE_HEIGHT = 760;
const NODE_WIDTH = 140;
const NODE_HEIGHT = 126;

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

function initials(name: string) {
  const value = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return value || "TM";
}

function isCyclic(edges: HierarchyEdge[], from: string, to: string) {
  const graph = new Map<string, string[]>();
  edges.forEach((edge) => {
    if (!graph.has(edge.from)) graph.set(edge.from, []);
    graph.get(edge.from)?.push(edge.to);
  });
  if (!graph.has(from)) graph.set(from, []);
  graph.get(from)?.push(to);

  const seen = new Set<string>();
  const stack = new Set<string>();

  const dfs = (node: string): boolean => {
    if (stack.has(node)) return true;
    if (seen.has(node)) return false;
    seen.add(node);
    stack.add(node);
    const next = graph.get(node) ?? [];
    for (const child of next) {
      if (dfs(child)) return true;
    }
    stack.delete(node);
    return false;
  };

  const allNodes = new Set<string>([
    ...Array.from(graph.keys()),
    ...edges.map((edge) => edge.to),
    from,
    to,
  ]);

  for (const node of allNodes) {
    if (dfs(node)) return true;
  }

  return false;
}

export default function TeamHierarchyDashboardPage() {
  const params = useParams<{ teamId: string }>();
  const router = useRouter();
  const teamId = params?.teamId;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [team, setTeam] = useState<TeamDetails | null>(null);
  const [members, setMembers] = useState<Member[]>([]);

  const [nodes, setNodes] = useState<PlacedNode[]>([]);
  const [edges, setEdges] = useState<HierarchyEdge[]>([]);
  const [pendingSourceNodeId, setPendingSourceNodeId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(100);

  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [taskForm, setTaskForm] = useState({ title: "", assigneeId: "", dueDate: "" });
  const [taskMap, setTaskMap] = useState<Record<string, string[]>>({});
  const [savingTask, setSavingTask] = useState(false);
  const [flashMessage, setFlashMessage] = useState<string | null>(null);
  const [rightPanelVisible, setRightPanelVisible] = useState(true);

  const workspaceRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<{
    nodeId: string;
    pointerOffsetX: number;
    pointerOffsetY: number;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadTeam() {
      if (!teamId) return;
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/teams/${encodeURIComponent(teamId)}`, {
          credentials: "same-origin",
        });

        if (!res.ok) {
          const body = await res.json().catch(() => null);
          throw new Error(body?.message || "Failed to load team details");
        }

        const body = await res.json().catch(() => null);
        const t: TeamDetails | undefined = body?.team;

        if (!t) {
          throw new Error("Team payload missing");
        }

        const map = new Map<string, Member>();

        if (t.manager?.id) {
          map.set(t.manager.id, {
            id: t.manager.id,
            name: t.manager.name || "Manager",
            email: t.manager.email || undefined,
            role: "MANAGER",
          });
        }

        (t.members ?? []).forEach((m) => {
          const id = m.userId || m.id || m.teamMemberId;
          if (!id) return;
          map.set(id, {
            id,
            name: m.name || "Unnamed Member",
            email: m.email || undefined,
            role: (m.role || "EMPLOYEE").toUpperCase(),
          });
        });

        if (!cancelled) {
          setTeam(t);
          setMembers(Array.from(map.values()));
        }
      } catch (err) {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : "Failed to load team";
          setError(message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadTeam();

    return () => {
      cancelled = true;
    };
  }, [teamId]);

  useEffect(() => {
    if (!flashMessage) return;
    const timeout = window.setTimeout(() => setFlashMessage(null), 2200);
    return () => window.clearTimeout(timeout);
  }, [flashMessage]);

  useEffect(() => {
    const onResize = () => {
      setRightPanelVisible(window.innerWidth >= 1280);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const memberById = useMemo(() => {
    return members.reduce<Record<string, Member>>((acc, member) => {
      acc[member.id] = member;
      return acc;
    }, {});
  }, [members]);

  const placedMemberIds = useMemo(() => new Set(nodes.map((node) => node.memberId)), [nodes]);

  const availableMembers = useMemo(
    () => members.filter((member) => !placedMemberIds.has(member.id)),
    [members, placedMemberIds]
  );

  const scale = zoom / 100;

  const memberForSchedule = useMemo(() => {
    return {
      ...(team ?? {}),
      members: members.map((member) => ({
        name: member.name,
        initials: initials(member.name),
      })),
    };
  }, [team, members]);

  const updateNodePosition = useCallback((nodeId: string, clientX: number, clientY: number) => {
    const ref = workspaceRef.current;
    const dragData = dragRef.current;
    if (!ref || !dragData || dragData.nodeId !== nodeId) return;

    const bounds = ref.getBoundingClientRect();
    const pointerX = (clientX - bounds.left) / scale;
    const pointerY = (clientY - bounds.top) / scale;

    const nextX = clamp(pointerX - dragData.pointerOffsetX, 10, WORKSPACE_WIDTH - NODE_WIDTH - 10);
    const nextY = clamp(pointerY - dragData.pointerOffsetY, 10, WORKSPACE_HEIGHT - NODE_HEIGHT - 10);

    setNodes((prev) => prev.map((node) => (node.id === nodeId ? { ...node, x: nextX, y: nextY } : node)));
  }, [scale]);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      const dragData = dragRef.current;
      if (!dragData) return;
      updateNodePosition(dragData.nodeId, event.clientX, event.clientY);
    };

    const onPointerUp = () => {
      dragRef.current = null;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [updateNodePosition]);

  const placeMember = useCallback((memberId: string, clientX: number, clientY: number) => {
    if (!memberById[memberId]) return;
    if (placedMemberIds.has(memberId)) return;

    const ref = workspaceRef.current;
    if (!ref) return;

    const bounds = ref.getBoundingClientRect();
    const x = clamp((clientX - bounds.left) / scale - NODE_WIDTH / 2, 10, WORKSPACE_WIDTH - NODE_WIDTH - 10);
    const y = clamp((clientY - bounds.top) / scale - NODE_HEIGHT / 2, 10, WORKSPACE_HEIGHT - NODE_HEIGHT - 10);

    setNodes((prev) => [
      ...prev,
      {
        id: `node_${memberId}`,
        memberId,
        x,
        y,
      },
    ]);
  }, [memberById, placedMemberIds, scale]);

  const onWorkspaceDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const memberId = event.dataTransfer.getData("text/member-id");
    if (!memberId) return;
    placeMember(memberId, event.clientX, event.clientY);
  };

  const onWorkspaceDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onNodePointerDown = (event: React.PointerEvent<HTMLDivElement>, node: PlacedNode) => {
    if ((event.target as HTMLElement).closest("[data-connector='true']")) return;
    if ((event.target as HTMLElement).closest("button")) return;

    const ref = workspaceRef.current;
    if (!ref) return;

    const bounds = ref.getBoundingClientRect();
    const pointerX = (event.clientX - bounds.left) / scale;
    const pointerY = (event.clientY - bounds.top) / scale;

    dragRef.current = {
      nodeId: node.id,
      pointerOffsetX: pointerX - node.x,
      pointerOffsetY: pointerY - node.y,
    };

    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  };

  const onConnect = (nodeId: string, type: "from" | "to") => {
    if (type === "from") {
      setPendingSourceNodeId(nodeId);
      return;
    }

    if (!pendingSourceNodeId || pendingSourceNodeId === nodeId) return;

    const duplicate = edges.some((edge) => edge.from === pendingSourceNodeId && edge.to === nodeId);
    if (duplicate) {
      setPendingSourceNodeId(null);
      return;
    }

    const targetAlreadyHasParent = edges.some((edge) => edge.to === nodeId);
    if (targetAlreadyHasParent) {
      setFlashMessage("Each member can only have one direct parent in the hierarchy.");
      setPendingSourceNodeId(null);
      return;
    }

    const wouldCycle = isCyclic(edges, pendingSourceNodeId, nodeId);
    if (wouldCycle) {
      setFlashMessage("This link creates a cycle. Choose a different connection.");
      setPendingSourceNodeId(null);
      return;
    }

    setEdges((prev) => [
      ...prev,
      { id: `edge_${pendingSourceNodeId}_${nodeId}_${Date.now()}`, from: pendingSourceNodeId, to: nodeId },
    ]);
    setPendingSourceNodeId(null);
  };

  const removeNode = (nodeId: string) => {
    setNodes((prev) => prev.filter((node) => node.id !== nodeId));
    setEdges((prev) => prev.filter((edge) => edge.from !== nodeId && edge.to !== nodeId));
    setPendingSourceNodeId((prev) => (prev === nodeId ? null : prev));
  };

  const removeAllLinksForNode = (nodeId: string) => {
    setEdges((prev) => prev.filter((edge) => edge.from !== nodeId && edge.to !== nodeId));
  };

  async function submitTask() {
    const title = taskForm.title.trim();
    if (!title || !taskForm.assigneeId) {
      setFlashMessage("Task title and assignee are required.");
      return;
    }

    setSavingTask(true);
    const assignedMember = memberById[taskForm.assigneeId];

    try {
      const res = await fetch("/api/dashboard/tasks", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description: `Assigned from team hierarchy workspace (${team?.name ?? "Team"})`,
          assignedToId: taskForm.assigneeId,
          dueDate: taskForm.dueDate ? new Date(taskForm.dueDate).toISOString() : undefined,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        const text = err?.error || "Task API unavailable for current role.";
        setFlashMessage(`Task saved in workspace only: ${text}`);
      } else {
        setFlashMessage(`Task allotted to ${assignedMember?.name ?? "member"}.`);
      }
    } catch {
      setFlashMessage("Task API unreachable. Task kept in workspace only.");
    } finally {
      setTaskMap((prev) => ({
        ...prev,
        [taskForm.assigneeId]: [...(prev[taskForm.assigneeId] ?? []), title],
      }));

      setTaskForm({ title: "", assigneeId: "", dueDate: "" });
      setSavingTask(false);
      setShowTaskModal(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="mx-auto h-10 w-10 animate-spin text-slate-500" />
          <p className="mt-3 text-sm text-slate-500">Loading team dashboard...</p>
        </div>
      </div>
    );
  }

  if (error || !team) {
    return (
      <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
        <h2 className="text-lg font-semibold">Unable to load team dashboard</h2>
        <p className="mt-2 text-sm">{error || "Team not found"}</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-120px)] bg-slate-100/70 rounded-3xl p-3 lg:p-5">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 xl:grid-cols-[220px_minmax(0,1fr)_240px] gap-4">
        <aside className="bg-white rounded-3xl border border-slate-200 p-4 shadow-sm h-fit xl:sticky xl:top-24">
          <h1 className="text-3xl font-semibold text-slate-900 leading-tight">Product Development</h1>
          <p className="text-sm text-slate-500 mt-2 line-clamp-2">{team.name}</p>

          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={() => setShowTaskModal(true)}
              className="w-full rounded-2xl bg-emerald-500 text-white px-4 py-3.5 font-semibold shadow-sm hover:bg-emerald-600 transition flex items-center justify-center gap-2"
            >
              <Play className="h-4 w-4" />
              Allot Task
            </button>

            <button
              type="button"
              onClick={() => setShowMeetingModal(true)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 font-medium hover:bg-slate-100 transition flex items-center justify-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Schedule Meeting
            </button>

            <button
              type="button"
              onClick={() => router.push(`/dashboard/admin/inbox?teamId=${encodeURIComponent(team.id)}`)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 font-medium hover:bg-slate-100 transition flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              Team Message
            </button>

            <button
              type="button"
              onClick={() => router.push("/dashboard/admin/teams")}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 font-medium hover:bg-slate-100 transition flex items-center justify-center gap-2"
            >
              <Settings className="h-4 w-4" />
              Team Settings
            </button>
          </div>
        </aside>

        <section className="min-w-0 bg-white rounded-3xl border border-slate-200 p-4 lg:p-5 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Team Hierarchy</h2>
              <p className="text-sm text-slate-500">
                Drag members from the right panel to the workspace. Use connector dots to draw hierarchy lines.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setZoom((z) => clamp(z - 10, 70, 160))}
                className="h-9 w-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 inline-flex items-center justify-center"
                aria-label="Zoom out"
              >
                <Minus className="h-4 w-4" />
              </button>
              <div className="min-w-[64px] text-center rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5 text-sm font-medium text-slate-700">
                {zoom}%
              </div>
              <button
                type="button"
                onClick={() => setZoom((z) => clamp(z + 10, 70, 160))}
                className="h-9 w-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 inline-flex items-center justify-center"
                aria-label="Zoom in"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative w-full min-w-0 rounded-2xl border border-dashed border-slate-300 overflow-auto bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:14px_14px]">
            <div
              ref={workspaceRef}
              className="relative origin-top-left"
              style={{
                width: `${WORKSPACE_WIDTH}px`,
                height: `${WORKSPACE_HEIGHT}px`,
                transform: `scale(${scale})`,
              }}
              onDragOver={onWorkspaceDragOver}
              onDrop={onWorkspaceDrop}
            >
              <svg className="pointer-events-none absolute inset-0" width={WORKSPACE_WIDTH} height={WORKSPACE_HEIGHT}>
                {edges.map((edge) => {
                  const fromNode = nodes.find((node) => node.id === edge.from);
                  const toNode = nodes.find((node) => node.id === edge.to);
                  if (!fromNode || !toNode) return null;

                  const startX = fromNode.x + NODE_WIDTH / 2;
                  const startY = fromNode.y + NODE_HEIGHT - 8;
                  const endX = toNode.x + NODE_WIDTH / 2;
                  const endY = toNode.y + 8;
                  const controlY = startY + (endY - startY) / 2;

                  return (
                    <path
                      key={edge.id}
                      d={`M ${startX} ${startY} C ${startX} ${controlY}, ${endX} ${controlY}, ${endX} ${endY}`}
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="2"
                    />
                  );
                })}
              </svg>

              {nodes.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                  <div>
                    <Users className="mx-auto h-12 w-12 text-slate-400" />
                    <p className="mt-3 text-lg font-semibold text-slate-700">Drop team members here</p>
                    <p className="text-sm text-slate-500">Build the hierarchy by connecting members with top and bottom nodes.</p>
                  </div>
                </div>
              )}

              {nodes.map((node) => {
                const member = memberById[node.memberId];
                if (!member) return null;
                const connectedFrom = pendingSourceNodeId === node.id;
                const assignedTasks = taskMap[member.id]?.length ?? 0;

                return (
                  <div
                    key={node.id}
                    className="absolute"
                    style={{ left: node.x, top: node.y, width: NODE_WIDTH, height: NODE_HEIGHT }}
                    onPointerDown={(event) => onNodePointerDown(event, node)}
                  >
                    <button
                      type="button"
                      data-connector="true"
                      onClick={() => onConnect(node.id, "to")}
                      className="absolute left-1/2 -translate-x-1/2 -top-1.5 h-3 w-3 rounded-full border border-blue-500 bg-white hover:bg-blue-50"
                      title="Target connector"
                    />

                    <div className="mx-auto h-16 w-16 rounded-full border-2 border-slate-200 bg-white shadow-sm flex items-center justify-center text-sm font-bold text-slate-700">
                      {initials(member.name)}
                    </div>

                    <div className="mt-2 rounded-xl bg-white border border-slate-200 px-2.5 py-2 text-center shadow-sm">
                      <p className="text-sm font-semibold text-slate-800 truncate">{member.name}</p>
                      <p className="text-[11px] text-slate-500 truncate">{member.role}</p>
                      <div className="mt-1 text-[11px] text-emerald-600 font-medium">{assignedTasks} task(s)</div>
                    </div>

                    <div className="absolute -right-2 -top-2 flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => removeAllLinksForNode(node.id)}
                        className="h-6 w-6 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 inline-flex items-center justify-center"
                        title="Remove links"
                      >
                        <Link2 className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeNode(node.id)}
                        className="h-6 w-6 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-rose-600 inline-flex items-center justify-center"
                        title="Remove member from workspace"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <button
                      type="button"
                      data-connector="true"
                      onClick={() => onConnect(node.id, "from")}
                      className={`absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-3 w-3 rounded-full border ${
                        connectedFrom ? "border-emerald-600 bg-emerald-500" : "border-blue-500 bg-white hover:bg-blue-50"
                      }`}
                      title="Source connector"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-600">
            <span className="rounded-lg bg-slate-100 px-2.5 py-1">Click bottom node = source</span>
            <span className="rounded-lg bg-slate-100 px-2.5 py-1">Click top node = target</span>
            {pendingSourceNodeId && <span className="rounded-lg bg-emerald-50 text-emerald-700 px-2.5 py-1">Source selected</span>}
          </div>

          {flashMessage && (
            <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-sm text-blue-700">{flashMessage}</div>
          )}
        </section>

        <aside
          className={`min-w-0 bg-white rounded-3xl border border-slate-200 p-4 shadow-sm h-fit xl:sticky xl:top-24 ${
            rightPanelVisible ? "block" : "hidden xl:block"
          }`}
        >
          <h3 className="text-2xl font-semibold text-slate-900">Available Members</h3>
          <p className="text-sm text-slate-500 mt-1">{availableMembers.length} ready to place</p>

          <div className="mt-4 space-y-3 max-h-[64vh] overflow-auto pr-1">
            {availableMembers.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 text-center">
                All current team members are already in workspace.
              </div>
            ) : (
              availableMembers.map((member) => (
                <div
                  key={member.id}
                  draggable
                  onDragStart={(event) => {
                    event.dataTransfer.setData("text/member-id", member.id);
                    event.dataTransfer.effectAllowed = "move";
                  }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 cursor-grab active:cursor-grabbing hover:border-blue-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-semibold flex items-center justify-center">
                      {initials(member.name)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-800 truncate">{member.name}</p>
                      <p className="text-xs text-slate-500 truncate">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <button
            type="button"
            onClick={() => router.push("/dashboard/admin/teams")}
            className="mt-4 w-full rounded-2xl bg-slate-100 text-slate-700 px-4 py-2.5 hover:bg-slate-200 mb-3"
          >
            + Add More Members
          </button>

          <button
            type="button"
            onClick={() => router.push(`/dashboard/admin/teams/${teamId}/tickets`)}
            className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2.5 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            📋 Raise Ticket
          </button>
        </aside>
        </div>
      </div>
      {!rightPanelVisible && (
        <div className="mx-auto max-w-[1320px] mt-4">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-700">
            Expand the window width to view the full right members panel exactly like desktop layout.
          </div>
        </div>
      )}

      {showTaskModal && (
        <Modal onClose={() => setShowTaskModal(false)} ariaLabel="Allot Task" className="max-w-xl">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Allot Task</h2>
            <p className="mt-1 text-sm text-slate-500">Assign a task to any member already placed in hierarchy workspace.</p>

            <div className="mt-4 space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-600">Task Title</label>
                <input
                  type="text"
                  value={taskForm.title}
                  onChange={(event) => setTaskForm((prev) => ({ ...prev, title: event.target.value }))}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm"
                  placeholder="Ex: Prepare Q3 launch brief"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">Assignee</label>
                <select
                  value={taskForm.assigneeId}
                  onChange={(event) => setTaskForm((prev) => ({ ...prev, assigneeId: event.target.value }))}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm"
                >
                  <option value="">Select member</option>
                  {nodes.map((node) => {
                    const member = memberById[node.memberId];
                    if (!member) return null;
                    return (
                      <option key={member.id} value={member.id}>
                        {member.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600">Due Date (optional)</label>
                <input
                  type="date"
                  value={taskForm.dueDate}
                  onChange={(event) => setTaskForm((prev) => ({ ...prev, dueDate: event.target.value }))}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm"
                />
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowTaskModal(false)}
                className="rounded-xl px-4 py-2 text-sm bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={submitTask}
                disabled={savingTask || nodes.length === 0}
                className="rounded-xl px-4 py-2 text-sm bg-emerald-500 text-white hover:bg-emerald-600 disabled:opacity-60"
              >
                {savingTask ? "Saving..." : "Assign Task"}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {showMeetingModal && (
        <Modal onClose={() => setShowMeetingModal(false)} ariaLabel="Schedule Meeting" className="max-w-2xl p-0 bg-transparent border-none shadow-none overflow-visible">
          <ScheduleMeetingForm
            team={memberForSchedule}
            onClose={() => setShowMeetingModal(false)}
            onSchedule={(meeting) => {
              setShowMeetingModal(false);
              setFlashMessage(
                `Meeting scheduled for ${new Date(meeting.meetingTimeISO).toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}.`
              );
            }}
          />
        </Modal>
      )}
    </div>
  );
}
