"use client";

import React from "react";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/constants";
import CaseStudyCard from "@/components/cards/CaseStudyCard";
import Reveal from "@/components/animations/Reveal";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesSection() {
  // Show first 3 for homepage preview, or all 4
  const previewStudies = CASE_STUDIES.slice(0, 3);

  return (
    <section className="relative py-24 bg-transparent border-t border-white/5 overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] glow-spot-cyan rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-accent-purple uppercase tracking-widest block mb-3">
              Case Studies
            </span>
            <Reveal yOffset={25}>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-tight">
                Real Automation <span className="text-gradient">Results</span> From Fast-Scaling Partners
              </h2>
            </Reveal>
          </div>
          <p className="text-text-muted text-sm leading-relaxed max-w-sm md:mb-1">
            See how our client partners eliminated operational bottlenecks, lowered customer support costs, and captured lost lead flows.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {previewStudies.map((study, index) => (
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

        {/* Footnote Link */}
        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold text-white transition-all group"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4 text-accent-cyan group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
