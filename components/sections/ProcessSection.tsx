"use client";

import React from "react";
import { PROCESS_STEPS } from "@/lib/constants";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

export default function ProcessSection() {
  return (
    <section className="relative py-24 bg-transparent border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] glow-spot-cyan rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold text-accent-purple uppercase tracking-widest block mb-3">
            How We Partner
          </span>
          <Reveal yOffset={25}>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-5 leading-tight">
              From Discovery to Live <span className="text-gradient">Automation Success</span>
            </h2>
          </Reveal>
          <p className="text-text-muted text-sm leading-relaxed">
            Our systematic engineering roadmap makes sure your workflows are launched quickly, test-verified, and run with human fallback safeguards.
          </p>
        </div>

        {/* Process Steps (Vertical Timeline) */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line through timeline */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/5 -translate-x-1/2 pointer-events-none" />

          <div className="flex flex-col gap-12 md:gap-16">
            {PROCESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col md:flex-row relative items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Bubble marker */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-panel-dark border-2 border-accent-cyan flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <span className="text-[10px] font-heading font-bold text-accent-cyan">
                      {step.step}
                    </span>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 relative group hover:border-accent-cyan/15 transition-colors">
                      <span className="text-[10px] font-mono text-accent-cyan font-bold tracking-widest block mb-2 uppercase">
                        Phase {step.step}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
