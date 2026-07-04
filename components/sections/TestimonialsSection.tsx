"use client";

import React from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-transparent border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] glow-spot-purple rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-3">
            Client Feedback
          </span>
          <Reveal yOffset={25}>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-5 leading-tight">
              What Our Partners Say About <span className="text-gradient">Their Automations</span>
            </h2>
          </Reveal>
          <p className="text-text-muted text-sm leading-relaxed">
            We don't deal in hypothetical benefits. Read real verified outcomes from operational team leaders and directors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((test, idx) => {
            return (
              <motion.div
                key={test.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col justify-between hover:border-accent-purple/20 transition-all duration-300 relative group"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-accent-purple/10 transition-colors" />

                <div>
                  {/* Outcome Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-[10px] font-bold uppercase tracking-wide mb-6">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{test.badge}</span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-white/90 text-sm leading-relaxed mb-8 italic">
                    "{test.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
                  {/* Avatar bubble */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-accent-purple to-accent-cyan flex items-center justify-center font-heading font-bold text-xs text-white">
                    {test.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white leading-normal">
                      {test.author}
                    </h4>
                    <p className="text-text-muted text-xs leading-normal">
                      {test.role}, <span className="text-white/50">{test.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
