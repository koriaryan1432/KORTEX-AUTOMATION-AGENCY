"use client";

import React from "react";
import { SECURITY_FEATURES } from "@/lib/constants";
import { ShieldCheck, Eye, ToggleLeft, Key, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

const iconMap = [Key, ToggleLeft, ShieldCheck, Eye];

export default function SecuritySection() {
  return (
    <section className="relative py-24 bg-transparent border-t border-white/5 overflow-hidden">
      {/* Background neon blur */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] glow-spot-cyan rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-3">
            Security & Oversight
          </span>
          <Reveal yOffset={25}>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-5 leading-tight">
              Enterprise-Grade <span className="text-gradient">Security & Control</span> Built-In
            </h2>
          </Reveal>
          <p className="text-text-muted text-sm leading-relaxed">
            We understand that deploying AI agents requires strict trust boundaries. Our workflows protect data integrity and respect compliance.
          </p>
        </div>

        {/* Highlight Callout Box */}
        <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-accent-purple/10 to-accent-cyan/10 border border-accent-cyan/20 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/35 flex items-center justify-center shrink-0">
            <Lock className="w-7 h-7 text-accent-cyan" />
          </div>
          <div>
            <blockquote className="text-white text-base md:text-lg font-medium leading-relaxed mb-2">
              "AI automation should not mean losing control. Every workflow includes monitoring, fallback handling, and human override."
            </blockquote>
            <cite className="text-xs text-text-muted not-italic block uppercase tracking-wider font-bold">
              — Kortex Automation Core Guardrail Principle
            </cite>
          </div>
        </div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {SECURITY_FEATURES.map((feat, idx) => {
            const Icon = iconMap[idx] || ShieldCheck;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 flex gap-5 hover:border-accent-cyan/15 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/5 transition-colors">
                  <Icon className="w-6 h-6 text-white/80 group-hover:text-accent-cyan transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-accent-cyan transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {feat.description}
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
