"use client";

import React from "react";
import { Clock, PhoneOff, Users2, ShieldAlert, AlertTriangle, EyeOff, Bot } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

const PROBLEMS = [
  {
    icon: Clock,
    title: "Time Wasted on Repetitive Tasks",
    description: "Teams waste hours copying data, writing manual emails, and following up on basic administrative chores instead of doing strategic work.",
    solution: "AI agents take over the busywork, executing data entries and follow-ups in milliseconds."
  },
  {
    icon: PhoneOff,
    title: "Leads Missed or Replied to Late",
    description: "Inbound enquiries from WhatsApp, forms, or chat arrive 24/7. When response times exceed 5 minutes, conversion rates drop by 80%.",
    solution: "Interactive AI Qualifiers respond to every inbound query in under 30 seconds."
  },
  {
    icon: Users2,
    title: "Overloaded Support Pipelines",
    description: "Your human reps are stuck answering the same simple tracking, billing, or FAQ questions repeatedly, stalling complex tickets.",
    solution: "Shopify or database-connected support bots automatically resolve up to 70% of tickets."
  },
  {
    icon: ShieldAlert,
    title: "Manual Data Entry Mistakes",
    description: "Typing contact info, pasting invoices, or transferring lead details manually introduces errors that affect operations and tracking.",
    solution: "Type-safe automated bridges sync records across tools flawlessly."
  },
  {
    icon: AlertTriangle,
    title: "Disconnected Operations",
    description: "Your CRM, chat support, scheduling, and billing platforms are isolated, forcing your team to act as manual data routers.",
    solution: "Unified API wrappers connect all systems into a single self-correcting grid."
  },
  {
    icon: EyeOff,
    title: "Zero Operational Visibility",
    description: "Owners and managers lack real-time visibility into active lead stages, system health, conversion statistics, or automation ROI.",
    solution: "Live analytics dashboards compile all operational statistics in real-time."
  }
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 bg-transparent border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent-purple uppercase tracking-widest block mb-3">
            The Cost of Manual Work
          </span>
          <Reveal yOffset={25}>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-5 leading-tight">
              Operational Bottlenecks That <span className="text-gradient">Drain Revenue</span> and Energy
            </h2>
          </Reveal>
          <p className="text-text-muted text-sm leading-relaxed">
            Running a modern business with manual operations is slow, expensive, and error-prone. Here are the core issues we help you eliminate.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col justify-between border border-white/5 relative group hover:border-rose-500/10 transition-colors"
              >
                {/* Glowing subtle hover spot */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:border-rose-500/30 group-hover:bg-rose-500/5 transition-colors">
                    <Icon className="w-5 h-5 text-white/70 group-hover:text-rose-400 transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-3">
                    {prob.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    {prob.description}
                  </p>
                </div>

                {/* Solution tagline */}
                <div className="pt-4 border-t border-white/5 mt-auto flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5 text-accent-cyan" />
                  </div>
                  <p className="text-[11px] text-accent-cyan leading-normal">
                    <span className="font-semibold uppercase tracking-wider block">Solution</span>
                    {prob.solution}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
