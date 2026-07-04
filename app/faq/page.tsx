"use client";

import React from "react";
import FAQSection from "@/components/sections/FAQSection";
import Reveal from "@/components/animations/Reveal";
import { MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="pt-32 pb-24 grid-bg min-h-screen">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] glow-spot-cyan rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Renders the full FAQ section */}
        <FAQSection />

        {/* Callout box for unresolved questions */}
        <div className="max-w-3xl mx-auto glass-panel p-8 md:p-10 rounded-[32px] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 mt-16">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 text-accent-cyan" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-1.5">Have a different query?</h3>
              <p className="text-text-muted text-sm leading-relaxed max-w-sm">
                If you have custom integration requirements or proprietary tech stacks, write directly to our principal engineers.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all group shrink-0"
          >
            <span>Write to Engineers</span>
            <ArrowRight className="w-4 h-4 text-accent-cyan group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
