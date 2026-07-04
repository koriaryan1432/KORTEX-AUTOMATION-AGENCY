"use client";

import React, { useState } from "react";
import { MessageSquareCode, Brain, Settings, Play, ArrowRight, ShieldCheck, Mail, Database } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

const STEPS = [
  {
    title: "1. Structured Input Ingestion",
    icon: MessageSquareCode,
    description: "The workflow listens. Incoming webhook requests, website chats, incoming emails, phone calls, or WhatsApp messages are ingested securely.",
    details: ["Sentiment analysis", "Intent parsing", "Metadata extraction"]
  },
  {
    title: "2. Cognitive Comprehension",
    icon: Brain,
    description: "The AI agent retrieves appropriate knowledge base nodes via vector embedding matching and processes user intent against guardrails.",
    details: ["Vector search (RAG)", "Constraint validation", "Prompt compilation"]
  },
  {
    title: "3. Direct Software Tool Call",
    icon: Settings,
    description: "The agent generates structured tool calls (JSON/arguments) to connect with external software, database tables, or custom internal APIs.",
    details: ["API integrations", "Dynamic query parameters", "Error checking"]
  },
  {
    title: "4. Autonomous Workflow execution",
    icon: Play,
    description: "The CRM record is updated, an email sequence is launched, folders are created, or invoices are compiled. The heavy operations are done on autopilot.",
    details: ["State management", "Retries & logs", "Human-in-the-loop flags"]
  },
  {
    title: "5. Contextual Output Delivery",
    icon: ShieldCheck,
    description: "The operation terminates. The qualified lead receives a WhatsApp text, the client receives a scheduling invite, or a success response is sent.",
    details: ["Natural language drafting", "Auto follow-ups", "Audit logs closed"]
  }
];

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-24 bg-transparent border-t border-white/5 overflow-hidden">
      {/* Glow spots */}
      <div className="absolute top-1/4 left-1/12 w-[400px] h-[400px] glow-spot-cyan rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-3">
            System Mechanics
          </span>
          <Reveal yOffset={25}>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-5 leading-tight">
              Anatomy of an <span className="text-gradient">Autonomous AI Agent</span> Workflow
            </h2>
          </Reveal>
          <p className="text-text-muted text-sm leading-relaxed">
            See how our cognitive architectures ingest data, comprehend business constraints, connect to software tools, and perform transactions.
          </p>
        </div>

        {/* Visual Line connector - Desktop */}
        <div className="hidden lg:flex items-center justify-between gap-2 mb-16 relative px-10">
          <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-0.5 bg-white/5 -z-10">
            <motion.div 
              className="h-full bg-gradient-to-r from-accent-purple via-accent-cyan to-emerald-400"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx === activeStep;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`relative flex flex-col items-center gap-3 group focus:outline-none z-10 transition-all duration-300 ${
                  isActive ? "scale-110" : "scale-100 opacity-60 hover:opacity-90"
                }`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isActive 
                    ? "bg-bg-dark border-accent-cyan shadow-[0_0_20px_rgba(0,240,255,0.2)] text-accent-cyan" 
                    : "bg-panel-dark border-white/10 text-white/70"
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className={`text-xs font-heading font-bold uppercase tracking-wider ${
                  isActive ? "text-accent-cyan" : "text-white/50"
                }`}>
                  Step 0{idx + 1}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Active Detail Text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">
              {STEPS[activeStep].title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {STEPS[activeStep].description}
            </p>
            <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
              <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Sub-routine tasks:</span>
              <div className="flex flex-wrap gap-2.5">
                {STEPS[activeStep].details.map((detail, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white/5 border border-white/10 text-white/95 px-3 py-1.5 rounded-lg"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Quick manual selection buttons - mobile only */}
            <div className="flex flex-wrap gap-2 lg:hidden mt-4">
              {STEPS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                    idx === activeStep 
                      ? "bg-accent-cyan/15 border-accent-cyan text-accent-cyan" 
                      : "bg-white/5 border-white/10 text-white/70"
                  }`}
                >
                  Step 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Visual Animation Box */}
          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-square max-w-sm mx-auto bg-panel-dark/80 rounded-3xl border border-white/10 flex items-center justify-center p-8 relative overflow-hidden shadow-2xl">
              {/* Inner details animation */}
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center gap-6"
              >
                {/* Simulated processing node */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-accent-purple/20 to-accent-cyan/20 border border-accent-cyan/40 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                    {React.createElement(STEPS[activeStep].icon, { className: "w-10 h-10 text-accent-cyan animate-pulse" })}
                  </div>
                  {/* Glowing orbital ring */}
                  <div className="absolute inset-0 rounded-full border border-white/5 scale-[1.3] animate-spin" style={{ animationDuration: "12s" }} />
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-cyan/10 scale-[1.5] animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
                </div>

                <div>
                  <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest block mb-1">Active Stage</span>
                  <span className="text-white font-heading font-bold text-lg">{STEPS[activeStep].title.split(".")[1]}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
