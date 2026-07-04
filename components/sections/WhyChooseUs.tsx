"use client";

import React from "react";
import { Zap, ShieldAlert, Cpu, Layers } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

const PILLARS = [
  {
    icon: Zap,
    title: "Exceptional Speed",
    description: "Launch systems in weeks instead of quarters. We leverage modular, pre-tested cognitive workflows to accelerate deployment without cutting corners on robustness.",
    highlight: "Time-to-value is prioritized"
  },
  {
    icon: Cpu,
    title: "Deep Capabilities",
    description: "Our agents do not simply run static prompt templates. They execute logical loops, retrieve context via vector search, reference business schemas, and execute multi-step tool calls.",
    highlight: "Advanced LLM reasoning"
  },
  {
    icon: ShieldAlert,
    title: "Granular Control",
    description: "You maintain complete oversight. We design custom monitoring dashboards, activity auditories, approval gateways, and fallback fallbacks to make sure you stay in control.",
    highlight: "Human-in-the-loop safeguards"
  },
  {
    icon: Layers,
    title: "Adaptive Flexibility",
    description: "Connect all your existing SaaS tools, databases, custom backends, and public APIs. Our systems are built ecosystem-agnostic to integrate into your stack smoothly.",
    highlight: "Ecosystem agnostic design"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-transparent border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] glow-spot-purple rounded-full opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent-purple uppercase tracking-widest block mb-3">
            Why Partner With Us
          </span>
          <Reveal yOffset={25}>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-5 leading-tight">
              Built for the Demands of <span className="text-gradient">Modern Enterprise</span> Operations
            </h2>
          </Reveal>
          <p className="text-text-muted text-sm leading-relaxed">
            We bridge the gap between bleeding-edge generative AI research and robust, production-grade business execution.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col justify-between hover:border-accent-cyan/20 transition-colors group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/5 transition-colors">
                    <Icon className="w-5.5 h-5.5 text-white/80 group-hover:text-accent-cyan transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="text-xs text-accent-cyan/70 font-semibold uppercase tracking-wider mt-4">
                  {pillar.highlight}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
