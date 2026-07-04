"use client";

import React, { useState } from "react";
import { INDUSTRIES } from "@/lib/constants";
import { Building, ShoppingCart, Stethoscope, GraduationCap, Store, Briefcase, Users, Compass, AlertCircle, Sparkles, CheckSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

const iconMap: Record<string, React.ComponentType<any>> = {
  Building,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Store,
  Briefcase,
  Users,
  Compass
};

export default function IndustriesSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section className="relative py-24 bg-transparent border-t border-white/5 overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] glow-spot-cyan rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent-purple uppercase tracking-widest block mb-3">
            Industry Frameworks
          </span>
          <Reveal yOffset={25}>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-5 leading-tight">
              Vertical Solutions Tailored For <span className="text-gradient">Your Market</span>
            </h2>
          </Reveal>
          <p className="text-text-muted text-sm leading-relaxed">
            Every industry has unique bottlenecks. We build custom logic models fitted specifically to solve your specific market constraints.
          </p>
        </div>

        {/* Tab List Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-12">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = iconMap[ind.iconName] || Compass;
            const isSelected = idx === selectedIdx;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIdx(idx)}
                className={`py-4 px-3 rounded-xl border flex flex-col items-center gap-2.5 transition-all text-center focus:outline-none ${
                  isSelected
                    ? "bg-accent-purple/10 border-accent-purple text-white shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                    : "bg-panel-dark/50 border-white/5 text-white/50 hover:text-white/80 hover:border-white/10"
                }`}
              >
                <Icon className={`w-5.5 h-5.5 ${isSelected ? "text-accent-purple" : "text-white/40"}`} />
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider block">
                  {ind.industry.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Display Container with AnimatePresence */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
          {/* Decorative neon corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent-purple/20 to-transparent blur-md pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Details */}
              <div className="md:col-span-8 flex flex-col gap-6">
                <div>
                  <span className="text-xs font-bold text-accent-cyan uppercase tracking-wider block mb-1">
                    Market Focus
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    {INDUSTRIES[selectedIdx].industry} Solutions
                  </h3>
                </div>

                {/* Problem */}
                <div className="flex gap-3">
                  <AlertCircle className="w-5.5 h-5.5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-0.5">Problem</span>
                    <p className="text-text-muted text-sm leading-relaxed">{INDUSTRIES[selectedIdx].problem}</p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex gap-3">
                  <Sparkles className="w-5.5 h-5.5 text-accent-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-0.5">Solution Blueprint</span>
                    <p className="text-text-muted text-sm leading-relaxed">{INDUSTRIES[selectedIdx].solution}</p>
                  </div>
                </div>

                {/* Outcome */}
                <div className="flex gap-3">
                  <CheckSquare className="w-5.5 h-5.5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-0.5">ROI Outcome</span>
                    <p className="text-text-muted text-sm leading-relaxed">{INDUSTRIES[selectedIdx].benefit}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Large Icon Visual */}
              <div className="md:col-span-4 flex justify-center">
                <div className="w-40 h-40 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg relative group">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent-purple/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {React.createElement(iconMap[INDUSTRIES[selectedIdx].iconName] || Compass, {
                    className: "w-20 h-20 text-accent-cyan group-hover:scale-105 transition-transform duration-500"
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
