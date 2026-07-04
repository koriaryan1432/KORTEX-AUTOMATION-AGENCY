"use client";

import React, { useState, useEffect } from "react";
import { Lock, Loader2, RefreshCw, Search, Phone, Mail, Clock, MessageSquare, Save, Users, Calendar, Newspaper, ArrowUpRight } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  service: string;
  budget: string;
  message: string;
  status: string;
  notes: string | null;
  createdAt: string;
}

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  businessType: string;
  message: string | null;
  status: string;
  createdAt: string;
}

interface Newsletter {
  id: string;
  email: string;
  createdAt: string;
}

const LEAD_STATUSES = ["NEW", "CONTACTED", "CALL_BOOKED", "PROPOSAL_SENT", "CLOSED", "LOST"];

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");

  const [leads, setLeads] = useState<Lead[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);

  const [activeTab, setActiveTab] = useState<"leads" | "bookings" | "newsletter">("leads");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  // Notes state mapping lead ID to current notes string
  const [editingNotes, setEditingNotes] = useState<Record<string, string>>({});
  const [savingLeadId, setSavingLeadId] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple placeholder password check
    if (password === "admin123") {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Invalid credentials. Try 'admin123'.");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin", {
        headers: {
          "x-admin-password": password
        }
      });
      const result = await response.json();
      if (response.ok) {
        setLeads(result.data.leads);
        setBookings(result.data.bookings);
        setNewsletters(result.data.newsletter);

        // Prepopulate notes state
        const notesMap: Record<string, string> = {};
        result.data.leads.forEach((l: Lead) => {
          notesMap[l.id] = l.notes || "";
        });
        setEditingNotes(notesMap);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const handleStatusChange = async (leadId: string, newStatus: string) => {
    try {
      const response = await fetch("/api/admin/lead", {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          "x-admin-password": password
        },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });
      if (response.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveNotes = async (leadId: string) => {
    setSavingLeadId(leadId);
    try {
      const response = await fetch("/api/admin/lead", {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          "x-admin-password": password
        },
        body: JSON.stringify({ id: leadId, notes: editingNotes[leadId] }),
      });
      if (response.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, notes: editingNotes[leadId] } : l))
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSavingLeadId(null);
    }
  };

  const handleNotesChange = (leadId: string, val: string) => {
    setEditingNotes((prev) => ({ ...prev, [leadId]: val }));
  };

  // Filter routines
  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (l.company && l.company.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === "ALL" || l.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredBookings = bookings.filter((b) =>
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.businessType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredNewsletters = newsletters.filter((n) =>
    n.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center grid-bg">
        <div className="glass-panel p-8 md:p-10 rounded-3xl w-full max-w-md border border-white/10 text-center relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center mx-auto mb-6">
            <Lock className="w-5 h-5 text-accent-cyan" />
          </div>
          <h2 className="font-heading font-bold text-2xl text-white mb-2">Admin Gate</h2>
          <p className="text-text-muted text-sm mb-6">Enter password to review client inquiries.</p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password (hint: admin123)"
              className="bg-panel-dark border border-white/10 focus:border-accent-cyan rounded-xl px-4 py-3 text-sm text-white text-center focus:outline-none transition-colors"
            />
            {authError && <span className="text-rose-400 text-xs">{authError}</span>}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-accent-purple to-accent-cyan text-white text-sm font-bold hover:opacity-95 shadow-lg"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 bg-bg-dark grid-bg px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <h1 className="font-heading font-extrabold text-3xl text-white leading-normal">
              Operations Control Panel
            </h1>
            <p className="text-text-muted text-sm">Monitor business opportunities, schedules, and broadcasts.</p>
          </div>
          <button
            onClick={fetchData}
            disabled={loading}
            className="self-start sm:self-center px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-accent-cyan/50 text-white text-xs font-semibold flex items-center gap-2 transition-all disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin text-accent-cyan" />
            ) : (
              <RefreshCw className="w-3.5 h-3.5 text-accent-cyan" />
            )}
            <span>Refresh Databases</span>
          </button>
        </div>

        {/* Counter cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-accent-cyan" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-white/40 uppercase block">Total Leads</span>
              <span className="text-white font-heading font-bold text-2xl">{leads.length}</span>
            </div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-accent-purple" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-white/40 uppercase block">Active Sessions</span>
              <span className="text-white font-heading font-bold text-2xl">{bookings.length}</span>
            </div>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Newspaper className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-white/40 uppercase block">News Subscribers</span>
              <span className="text-white font-heading font-bold text-2xl">{newsletters.length}</span>
            </div>
          </div>
        </div>

        {/* Tab switcher + Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-panel-dark/60 border border-white/5 p-3 rounded-2xl">
          {/* Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => { setActiveTab("leads"); setSearchQuery(""); }}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                activeTab === "leads"
                  ? "bg-accent-cyan/15 border border-accent-cyan/20 text-accent-cyan"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Leads
            </button>
            <button
              onClick={() => { setActiveTab("bookings"); setSearchQuery(""); }}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                activeTab === "bookings"
                  ? "bg-accent-cyan/15 border border-accent-cyan/20 text-accent-cyan"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Bookings
            </button>
            <button
              onClick={() => { setActiveTab("newsletter"); setSearchQuery(""); }}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                activeTab === "newsletter"
                  ? "bg-accent-cyan/15 border border-accent-cyan/20 text-accent-cyan"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Newsletter
            </button>
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/40 border border-white/10 hover:border-white/20 focus:border-accent-cyan rounded-xl py-2 pl-3.5 pr-8 text-xs text-white placeholder-white/40 focus:outline-none transition-colors"
              />
              <Search className="absolute right-2.5 top-2.5 w-3.5 h-3.5 text-white/30" />
            </div>

            {/* Filter by status (leads tab only) */}
            {activeTab === "leads" && (
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-black/40 border border-white/10 hover:border-white/20 focus:border-accent-cyan rounded-xl py-2 px-3 text-xs text-white/70 focus:text-white focus:outline-none transition-colors"
              >
                <option value="ALL">All Statuses</option>
                {LEAD_STATUSES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        {/* Database Tables */}
        {loading ? (
          <div className="py-24 text-center flex flex-col items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-accent-cyan mb-4" />
            <p className="text-text-muted text-sm">Querying SQLite database...</p>
          </div>
        ) : (
          <div className="w-full overflow-hidden">
            {/* LEADS TAB */}
            {activeTab === "leads" && (
              <div className="flex flex-col gap-6">
                {filteredLeads.length === 0 ? (
                  <div className="py-12 text-center text-text-muted text-sm">No leads match the filters.</div>
                ) : (
                  filteredLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col lg:flex-row justify-between gap-6 relative"
                    >
                      {/* Left Block: Lead details */}
                      <div className="lg:w-2/3 flex flex-col gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-heading font-bold text-lg text-white">{lead.name}</h3>
                          {lead.company && (
                            <span className="text-xs bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/70">
                              {lead.company}
                            </span>
                          )}
                          <span className="text-[10px] font-mono text-white/40">
                            {new Date(lead.createdAt).toLocaleString()}
                          </span>
                        </div>

                        {/* Contacts grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/80">
                          <div className="flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                            <a href={`mailto:${lead.email}`} className="hover:underline">{lead.email}</a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-accent-purple shrink-0" />
                            <a href={`tel:${lead.phone}`} className="hover:underline">{lead.phone}</a>
                          </div>
                          <div className="flex items-center gap-2">
                            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>Service: <strong>{lead.service}</strong></span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            <span>Budget: <strong>{lead.budget}</strong></span>
                          </div>
                        </div>

                        {/* Message */}
                        <div className="mt-2 bg-black/30 border border-white/5 p-4 rounded-xl text-xs text-text-muted leading-relaxed">
                          <span className="font-bold text-white/40 uppercase tracking-wider block mb-1">Requirements message</span>
                          {lead.message}
                        </div>
                      </div>

                      {/* Right Block: Status controls & Notes */}
                      <div className="lg:w-1/3 flex flex-col gap-4 pt-6 lg:pt-0 lg:pl-6 lg:border-l lg:border-white/5">
                        {/* Status update */}
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider">Lead Status</span>
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                            className="bg-black/50 border border-white/10 focus:border-accent-cyan rounded-xl py-2 px-3 text-xs text-white focus:outline-none transition-colors"
                          >
                            {LEAD_STATUSES.map((st) => (
                              <option key={st} value={st}>
                                {st}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Admin Notes */}
                        <div className="flex flex-col gap-1.5 mt-2">
                          <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider">Admin Notes</span>
                          <div className="relative">
                            <textarea
                              value={editingNotes[lead.id] || ""}
                              onChange={(e) => handleNotesChange(lead.id, e.target.value)}
                              rows={2}
                              placeholder="Add follow-up notes..."
                              className="w-full bg-black/50 border border-white/10 focus:border-accent-cyan rounded-xl p-3 text-xs text-white focus:outline-none transition-colors resize-none pr-8"
                            />
                            <button
                              onClick={() => handleSaveNotes(lead.id)}
                              disabled={savingLeadId === lead.id}
                              className="absolute right-2 bottom-3 p-1.5 bg-accent-cyan/15 hover:bg-accent-cyan/30 text-accent-cyan rounded-lg border border-accent-cyan/30 transition-colors disabled:opacity-50"
                              title="Save Notes"
                            >
                              {savingLeadId === lead.id ? (
                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              ) : (
                                <Save className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* BOOKINGS TAB */}
            {activeTab === "bookings" && (
              <div className="flex flex-col gap-4">
                {filteredBookings.length === 0 ? (
                  <div className="py-12 text-center text-text-muted text-sm">No bookings scheduled.</div>
                ) : (
                  <div className="overflow-x-auto bg-panel-dark border border-white/5 rounded-2xl">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-white/5 text-[10px] font-bold text-white/40 uppercase tracking-wider">
                          <th className="p-4 pl-6">Client</th>
                          <th className="p-4">Contact</th>
                          <th className="p-4">Business</th>
                          <th className="p-4">Date Slot</th>
                          <th className="p-4">Time Slot</th>
                        </tr>
                      </thead>
                      <tbody className="text-xs text-white/80">
                        {filteredBookings.map((booking) => (
                          <tr key={booking.id} className="border-b border-white/5 hover:bg-white/[0.01]">
                            <td className="p-4 pl-6 font-bold">{booking.name}</td>
                            <td className="p-4">
                              <div className="flex flex-col">
                                <span>{booking.email}</span>
                                <span className="text-[10px] text-white/40">{booking.phone}</span>
                              </div>
                            </td>
                            <td className="p-4">
                              <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-white/70">
                                {booking.businessType}
                              </span>
                            </td>
                            <td className="p-4 font-mono">
                              {new Date(booking.preferredDate).toLocaleDateString()}
                            </td>
                            <td className="p-4 font-mono text-accent-cyan">{booking.preferredTime}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* NEWSLETTER TAB */}
            {activeTab === "newsletter" && (
              <div className="max-w-md mx-auto">
                {filteredNewsletters.length === 0 ? (
                  <div className="py-12 text-center text-text-muted text-sm">No newsletter signups.</div>
                ) : (
                  <div className="bg-panel-dark border border-white/5 rounded-2xl">
                    <div className="p-4 border-b border-white/5 text-[10px] font-bold text-white/40 uppercase tracking-wider pl-6">
                      Registered Newsletter Emails
                    </div>
                    <ul className="divide-y divide-white/5">
                      {filteredNewsletters.map((news) => (
                        <li key={news.id} className="p-4 pl-6 flex items-center justify-between text-xs">
                          <span className="text-white font-medium">{news.email}</span>
                          <span className="text-[10px] font-mono text-white/30">
                            {new Date(news.createdAt).toLocaleDateString()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
