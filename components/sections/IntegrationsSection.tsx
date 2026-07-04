"use client";

import React from "react";
import { INTEGRATIONS } from "@/lib/constants";
import Reveal from "@/components/animations/Reveal";
import { Check } from "lucide-react";

export default function IntegrationsSection() {
  // Duplicate integrations list to create seamless infinite scrolling marquee
  const doubleIntegrations = [...INTEGRATIONS, ...INTEGRATIONS, ...INTEGRATIONS];

  return (
    <section className="relative py-24 bg-transparent border-t border-white/5 overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] glow-spot-purple rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-3">
            Ecosystem Integrations
          </span>
          <Reveal yOffset={25}>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-5 leading-tight">
              Connect With Your <span className="text-gradient">Existing Stack</span> Seamlessly
            </h2>
          </Reveal>
          <p className="text-text-muted text-sm leading-relaxed">
            We don't force you to change your workflows. We securely hook AI agents directly into your current CRM, databases, spreadsheets, and messaging platforms.
          </p>
        </div>
      </div>

      {/* Infinite scrolling logo marquee */}
      <div className="relative w-full overflow-hidden py-4 bg-white/[0.02] border-y border-white/5 mask-image-[linear-gradient(to_right,transparent_0%,white_15%,white_85%,transparent_100%)]">
        <div className="animate-marquee flex items-center gap-6">
          {doubleIntegrations.map((item, idx) => (
            <div
              key={idx}
              className="px-6 py-3.5 rounded-xl bg-panel-dark border border-white/5 hover:border-accent-cyan/30 flex items-center gap-3 shrink-0 select-none group transition-all duration-300"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan group-hover:animate-ping" />
              <div>
                <span className="text-sm font-heading font-bold text-white block">
                  {item.name}
                </span>
                <span className="text-[9px] font-mono text-white/40 block">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl flex gap-4">
          <div className="w-8 h-8 rounded-full bg-accent-cyan/10 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 text-accent-cyan" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-1.5">No-code integrations</h4>
            <p className="text-text-muted text-xs leading-relaxed">Fast connectivity using robust Webhook protocols on Make.com and Zapier.</p>
          </div>
        </div>
        <div className="glass-panel p-6 rounded-2xl flex gap-4">
          <div className="w-8 h-8 rounded-full bg-accent-purple/10 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 text-accent-purple" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-1.5">Custom REST/GraphQL APIs</h4>
            <p className="text-text-muted text-xs leading-relaxed">Direct software bridge integrations matching security tokens and payloads.</p>
          </div>
        </div>
        <div className="glass-panel p-6 rounded-2xl flex gap-4">
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-1.5">Robust Webhook Triggers</h4>
            <p className="text-text-muted text-xs leading-relaxed">Instant, event-driven processes executing state transfers automatically.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
