"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/constants";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative py-24 bg-transparent border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] glow-spot-purple rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-3">
            Got Questions?
          </span>
          <Reveal yOffset={25}>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-5 leading-tight">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </Reveal>
          <p className="text-text-muted text-sm leading-relaxed">
            Here are clear answers on how we architect database schemas, protect client data, and handle support handoffs.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = idx === openIdx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/5 overflow-hidden transition-colors"
                style={{ borderColor: isOpen ? "rgba(0, 240, 255, 0.15)" : "rgba(255, 255, 255, 0.05)" }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 md:px-8 flex items-center justify-between text-left focus:outline-none group text-white hover:text-accent-cyan transition-colors"
                >
                  <span className="font-heading font-bold text-base md:text-lg">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-accent-cyan/30 transition-colors ${
                    isOpen ? "bg-accent-cyan/15 border-accent-cyan text-accent-cyan" : "text-white/50"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-6 text-sm text-text-muted leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
