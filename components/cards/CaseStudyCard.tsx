"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Trophy, AlertCircle, Wrench, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
  id: string;
  title: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  toolsUsed: string[];
  index: number;
}

import FloatingCard from "@/components/animations/FloatingCard";

interface CaseStudyCardProps {
  id: string;
  title: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  toolsUsed: string[];
  index: number;
}

export default function CaseStudyCard({
  id,
  title,
  industry,
  problem,
  solution,
  result,
  toolsUsed,
  index,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <FloatingCard
        glowColor="purple"
        className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between h-full group relative overflow-hidden"
      >
        {/* Background neon blur */}
        <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-accent-purple/5 blur-2xl group-hover:bg-accent-purple/10 transition-colors duration-500 pointer-events-none" />

        <div>
          {/* Industry Badge */}
          <div className="flex items-center justify-between mb-6">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-accent-cyan tracking-wider uppercase">
              {industry}
            </span>
            <div className="flex items-center gap-1 text-emerald-400 font-semibold text-sm">
              <Trophy className="w-4 h-4" />
              <span>ROI Verified</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-heading font-semibold text-xl text-white mb-6 group-hover:text-accent-cyan transition-colors duration-300">
            {title}
          </h3>

          {/* Problem block */}
          <div className="flex gap-3 mb-4">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-0.5">Problem</span>
              <p className="text-text-muted text-sm leading-relaxed">{problem}</p>
            </div>
          </div>

          {/* Solution block */}
          <div className="flex gap-3 mb-6">
            <Lightbulb className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-white/40 uppercase tracking-wider block mb-0.5">AI Solution</span>
              <p className="text-text-muted text-sm leading-relaxed">{solution}</p>
            </div>
          </div>
        </div>

        {/* Result & Tools */}
        <div className="pt-6 border-t border-white/5 mt-auto flex flex-col gap-5">
          {/* Highlighted Result Badge */}
          <div className="bg-gradient-to-r from-accent-purple/10 to-accent-cyan/10 border border-accent-cyan/20 p-4 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest block">Metric Outcome</span>
              <span className="text-white font-heading font-bold text-base leading-tight mt-0.5 block">{result}</span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 items-center">
            <Wrench className="w-3.5 h-3.5 text-white/30 shrink-0" />
            {toolsUsed.map((tool, tIdx) => (
              <span
                key={tIdx}
                className="text-[10px] bg-white/5 border border-white/5 text-white/70 px-2.5 py-0.5 rounded"
              >
                {tool}
              </span>
            ))}
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 group-hover:text-accent-cyan transition-colors self-start mt-1"
          >
            <span>View study details</span>
            <ArrowRight className="w-4 h-4 text-accent-cyan group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </FloatingCard>
    </motion.div>
  );
}
