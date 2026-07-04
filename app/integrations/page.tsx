"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INTEGRATIONS } from "@/lib/constants";
import { Workflow, Layers, ShieldCheck, Mail, Database, Cable, Sparkles, MessageSquare, ShoppingCart, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

const CATEGORIES = ["All", "Automation", "CRM", "Data", "Email", "E-commerce", "Messaging", "Scheduling"];

const categoryIcons: Record<string, React.ComponentType<any>> = {
  Automation: Workflow,
  CRM: Layers,
  Data: Database,
  Email: Mail,
  "E-commerce": ShoppingCart,
  Messaging: MessageSquare,
  Scheduling: Cable,
};

export default function IntegrationsPage() {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredIntegrations = selectedCat === "All"
    ? INTEGRATIONS
    : INTEGRATIONS.filter(item => item.category === selectedCat || (selectedCat === "Automation" && (item.name === "Zapier" || item.name === "Make.com")));

  return (
    <div className="pt-32 pb-24 grid-bg min-h-screen">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] glow-spot-cyan rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-3">
            Ecosystem
          </span>
          <Reveal yOffset={25}>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Synchronized <span className="text-gradient">Integrations</span>
            </h1>
          </Reveal>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            We bridge custom cognitive agents to popular enterprise SaaS tools via secure auth tokens, webhook listeners, or custom database drivers.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider border transition-all ${
                selectedCat === cat
                  ? "bg-accent-cyan/15 border-accent-cyan text-accent-cyan shadow-[0_0_15px_rgba(0,240,255,0.1)]"
                  : "bg-panel-dark/50 border-white/5 text-white/50 hover:text-white/80 hover:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {filteredIntegrations.map((item, index) => {
            const Icon = categoryIcons[item.category] || HelpCircle;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-accent-cyan/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/5 transition-colors">
                  <Icon className="w-5 h-5 text-white/70 group-hover:text-accent-cyan transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white leading-normal">
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-mono text-white/40 block leading-normal uppercase">
                    {item.category} Link-ready
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom endpoints block */}
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-10 rounded-[32px] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/5 blur-2xl rounded-full pointer-events-none" />
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-accent-cyan" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">Need a custom REST / Database integration?</h3>
              <p className="text-text-muted text-sm leading-relaxed max-w-lg">
                We design custom database drivers, SQL triggers, REST API request structures, and OAuth authorization wrappers for proprietary in-house software stacks.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent-purple to-accent-cyan text-white text-sm font-bold shadow-lg shadow-accent-cyan/10 hover:shadow-accent-cyan/20 shrink-0 text-center w-full md:w-auto"
          >
            Custom API Setup
          </Link>
        </div>
      </div>
    </div>
  );
}
