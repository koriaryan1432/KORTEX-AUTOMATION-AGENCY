"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Bot, Sparkles, Play, CheckCircle, Terminal, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

const mockLogs = [
  "⚡ Initializing Cognitive Workflow...",
  "🔍 Listening to webhook: Lead Inflow",
  "🤖 Triggering Qualifier Agent (GPT-4o)",
  "📊 Analyzing budget: '$5,000+' -> HIGH_INTENT",
  "📨 Preparing automated WhatsApp reply",
  "📅 Auto-scheduling strategy call slot",
  "✅ CRM HubSpot record synchronized successfully"
];

export default function Hero() {
  const [logIndex, setLogIndex] = useState(0);
  const [activeLogs, setActiveLogs] = useState<string[]>([mockLogs[0]]);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % mockLogs.length;
        setActiveLogs((prevLogs) => {
          const updated = [...prevLogs, mockLogs[nextIndex]];
          if (updated.length > 5) updated.shift();
          return updated;
        });
        return nextIndex;
      });
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden grid-bg">
      {/* Background glow nodes */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] glow-spot-cyan rounded-full opacity-35 -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] glow-spot-purple rounded-full opacity-35 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Content Column */}
        <div className="lg:col-span-6 flex flex-col gap-8 text-center lg:text-left">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit self-center lg:self-start">
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider text-white uppercase">
              Enterprise AI Automation Platform
            </span>
          </div>

          {/* Heading */}
          <Reveal delay={0.1} yOffset={30}>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Automate Your Business With <span className="text-gradient">AI Agents</span> That Work 24/7
            </h1>
          </Reveal>

          {/* Subheading */}
          <Reveal delay={0.25} yOffset={30}>
            <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              We build intelligent AI workflows, autonomous voice bots, CRM integrations, and custom business systems that save time, eliminate manual labor, and help businesses scale.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.4} yOffset={30}>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/book-call"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-accent-purple to-accent-cyan text-white flex items-center justify-center gap-2 shadow-lg shadow-accent-cyan/15 hover:shadow-accent-cyan/30 hover:scale-[1.02] transition-all duration-300 group"
              >
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white flex items-center justify-center gap-2 transition-all duration-300"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </Reveal>

          {/* Trust stats */}
          <Reveal delay={0.5} yOffset={20}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 border-t border-white/5">
              <div>
                <span className="font-heading font-bold text-2xl text-white block">98%</span>
                <span className="text-xs text-text-muted">Accuracy Rate</span>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div>
                <span className="font-heading font-bold text-2xl text-white block">10x</span>
                <span className="text-xs text-text-muted">Process Speedup</span>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div>
                <span className="font-heading font-bold text-2xl text-white block">15,000+</span>
                <span className="text-xs text-text-muted">Hours Saved</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual Dashboard Column */}
        <div className="lg:col-span-6 w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl mx-auto glass-panel p-6 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Window bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="px-3 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-white/50">
                nexus-core-agent.config
              </div>
            </div>

            {/* Dashboard grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Agent status */}
              <div className="bg-panel-dark border border-white/5 p-4 rounded-2xl flex flex-col gap-2 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-muted">Agent Engine</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="font-heading font-bold text-lg text-white mt-1">Autonomous</div>
                <div className="text-[10px] text-accent-cyan flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Vapi voice queue loaded</span>
                </div>
              </div>

              {/* API Load */}
              <div className="bg-panel-dark border border-white/5 p-4 rounded-2xl flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-muted">Process Load</span>
                  <span className="text-[10px] font-mono text-accent-purple font-bold">2.4ms avg</span>
                </div>
                <div className="font-heading font-bold text-lg text-white mt-1">99.98% Up</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>SSL encrypted vault</span>
                </div>
              </div>
            </div>

            {/* Workflow nodes diagram */}
            <div className="bg-panel-dark border border-white/5 p-5 rounded-2xl mb-6 relative overflow-hidden h-44 flex flex-col justify-center">
              {/* Interactive nodes */}
              <div className="flex items-center justify-between relative z-10 px-2">
                {/* Node 1 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/15 border border-accent-cyan/35 flex items-center justify-center shadow-lg shadow-accent-cyan/10">
                    <Zap className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <span className="text-[10px] font-bold text-white/60">Lead Trigger</span>
                </motion.div>

                {/* Node 2 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/15 border border-accent-purple/35 flex items-center justify-center shadow-lg shadow-accent-purple/10">
                    <Bot className="w-5 h-5 text-accent-purple" />
                  </div>
                  <span className="text-[10px] font-bold text-white/60">AI Qualifier</span>
                </motion.div>

                {/* Node 3 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-500/5">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-[10px] font-bold text-white/60">CRM Sync</span>
                </motion.div>
              </div>

              {/* Animated connector SVGs */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 50,88 L 225,88"
                  fill="none"
                  stroke="rgba(0, 240, 255, 0.4)"
                  strokeWidth="2"
                  className="animate-flow-line"
                />
                <path
                  d="M 225,88 L 400,88"
                  fill="none"
                  stroke="rgba(168, 85, 247, 0.4)"
                  strokeWidth="2"
                  className="animate-flow-line"
                />
              </svg>
            </div>

            {/* Console Terminal Logs */}
            <div className="bg-black/80 border border-white/5 rounded-xl p-4 font-mono text-[11px] text-emerald-400 leading-relaxed min-h-36 flex flex-col justify-end">
              <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-3 text-white/50">
                <Terminal className="w-3.5 h-3.5" />
                <span>realtime_flow_stream.sh</span>
              </div>
              <div className="flex flex-col gap-1.5 overflow-hidden">
                {activeLogs.map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {log}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating cards decoration */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-6 -right-6 bg-panel-dark/95 border border-white/10 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 relative z-20 shrink-0 hidden sm:flex"
          >
            <div className="w-8 h-8 rounded-lg bg-accent-cyan/15 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-accent-cyan" />
            </div>
            <div>
              <span className="text-[9px] font-bold text-white/40 uppercase block">Performance</span>
              <span className="text-white text-xs font-bold font-heading">Lighthouse 98+</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
