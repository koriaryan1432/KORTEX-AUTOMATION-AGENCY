"use client";

import React from "react";
import { CASE_STUDIES } from "@/lib/constants";
import CaseStudyCard from "@/components/cards/CaseStudyCard";
import Reveal from "@/components/animations/Reveal";
import { HelpCircle, Star, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-24 grid-bg min-h-screen">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] glow-spot-cyan rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-3">
            Portfolio Outcomes
          </span>
          <Reveal yOffset={25}>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Verified Operational <span className="text-gradient">Case Studies</span>
            </h1>
          </Reveal>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Every partnership is built around clear operational metrics. Read how we architected workflows to capture lost lead flows and drop costs.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              id={study.id}
              title={study.title}
              industry={study.industry}
              problem={study.problem}
              solution={study.solution}
              result={study.result}
              toolsUsed={study.toolsUsed}
              index={index}
            />
          ))}
        </div>

        {/* Callout box for new projects */}
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-[40px] border border-white/10 text-center relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent-purple/10 blur-xl rounded-full" />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
            <Sparkles className="w-4 h-4 text-accent-cyan animate-pulse" />
            <span className="text-[10px] font-bold tracking-wider text-white uppercase">Your ROI outcome next</span>
          </div>
          <h3 className="font-heading font-bold text-2xl text-white mb-4">Want to map out your own operational savings blueprint?</h3>
          <p className="text-text-muted text-sm max-w-xl mx-auto leading-relaxed mb-8">
            Schedule a free discovery session with an automation engineer. We will review your current software stack and draft a workflow blueprint.
          </p>
          <Link
            href="/book-call"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-cyan hover:opacity-95 text-white font-bold rounded-xl shadow-lg shadow-accent-cyan/15 transition-all"
          >
            Schedule Free Strategy Session
          </Link>
        </div>
      </div>
    </div>
  );
}
