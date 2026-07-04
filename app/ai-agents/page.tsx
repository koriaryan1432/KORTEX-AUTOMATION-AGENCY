"use client";

import React from "react";
import Link from "next/link";
import { Cpu, Bot, Zap, CheckCircle2, MessageSquare, PhoneCall, FileText, Database, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

const AGENTS = [
  {
    name: "Lead Qualification Agent",
    tagline: "Autonomous WhatsApp & Web qualifier",
    icon: MessageSquare,
    intelligence: "GPT-4o / Claude 3.5 Sonnet",
    speed: "250ms token delay",
    description: "Monitors website chat flows, WhatsApp Business webhooks, and contact forms. Instantly greets prospects, queries budget and interest, qualifies intent, and schedules a calendar invite automatically.",
    features: [
      "Semantic intent classification",
      "Dynamic follow-ups on silent leads",
      "Automatic CRM contact provisioning",
      "Fallback trigger on negative sentiment"
    ]
  },
  {
    name: "Customer Support Agent",
    tagline: "Shopify & Database integrated chatbot",
    icon: Bot,
    intelligence: "GPT-4o-mini / Fine-tuned LLM",
    speed: "180ms token delay",
    description: "Acts as a front-line support specialist. Synchronizes with Shopify APIs or custom databases to fetch real-time tracking numbers, answer FAQ shipping guidelines, issue refund requests, or log support tickets.",
    features: [
      "Secure read-only API tokens",
      "Vector database FAQ retrieval",
      "Multi-language resolution support",
      "Human-handoff fallback gateway"
    ]
  },
  {
    name: "Voice Outreach Agent",
    tagline: "LLM-powered phone system scheduler",
    icon: PhoneCall,
    intelligence: "GPT-4o Realtime Audio / Vapi / Retell",
    speed: "Under 1s voice latency",
    description: "Natural-sounding voice agent executing inbound support answers or outbound appointment scheduling. Can understand conversational context, accents, pauses, and books slots in real-time.",
    features: [
      "Ultra-low latency audio processing",
      "Custom brand voice cloning",
      "Calendar Calendly synchronization",
      "Post-call email follow-up dispatch"
    ]
  },
  {
    name: "Content Scanning Agent",
    tagline: "Data compilation & report compiler",
    icon: FileText,
    intelligence: "DeepSeek / Gemini 1.5 Pro",
    speed: "Execution-based batches",
    description: "Scrapes competitor websites, monitors price tables, compiles daily financial transactions, compiles invoices, and generates structured executive markdown summaries sent to Slack.",
    features: [
      "Dynamic browser page execution",
      "Structured JSON compilation outputs",
      "Automated Slack/Email briefing updates",
      "Weekly diagnostic dashboards"
    ]
  }
];

export default function AIAgentsPage() {
  return (
    <div className="pt-32 pb-24 grid-bg min-h-screen">
      {/* Background spotlights */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] glow-spot-purple rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-3">
            AI Fleet
          </span>
          <Reveal yOffset={25}>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Pre-Engineered <span className="text-gradient">AI Agent</span> Personas
            </h1>
          </Reveal>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Meet our specialized cognitive agent architectures, ready to connect with your systems and perform transactions on autopilot.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {AGENTS.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel p-8 md:p-10 rounded-[32px] border border-white/5 flex flex-col justify-between hover:border-accent-cyan/15 transition-all group"
              >
                <div>
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest block mb-1">
                        {agent.tagline}
                      </span>
                      <h3 className="font-heading font-bold text-xl md:text-2xl text-white group-hover:text-accent-cyan transition-colors">
                        {agent.name}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent-cyan/25 transition-colors">
                      <Icon className="w-6 h-6 text-white/80 group-hover:text-accent-cyan transition-colors" />
                    </div>
                  </div>

                  {/* Core details tags */}
                  <div className="flex flex-wrap gap-4 mb-6 pt-4 border-t border-white/5">
                    <div>
                      <span className="text-[9px] font-bold text-white/40 uppercase block">Model Core</span>
                      <span className="text-xs text-white/80 font-medium">{agent.intelligence}</span>
                    </div>
                    <div className="w-px h-6 bg-white/10" />
                    <div>
                      <span className="text-[9px] font-bold text-white/40 uppercase block">Execution Latency</span>
                      <span className="text-xs text-white/80 font-medium">{agent.speed}</span>
                    </div>
                  </div>

                  <p className="text-text-muted text-sm leading-relaxed mb-8">
                    {agent.description}
                  </p>
                </div>

                {/* Features Checklist */}
                <div>
                  <div className="h-px bg-white/5 w-full mb-6" />
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider block mb-4">Capabilities:</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                    {agent.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/book-call"
                    className="w-full py-3.5 rounded-xl font-bold bg-white/5 hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-cyan hover:border-transparent border border-white/10 hover:shadow-lg hover:shadow-accent-cyan/10 text-center flex items-center justify-center text-sm transition-all"
                  >
                    Deploy {agent.name.split(" ")[0]} Persona
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Security & Oversight Banner */}
        <div className="max-w-4xl mx-auto glass-panel p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
            <Shield className="w-6 h-6 text-accent-cyan" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-1">Human Override Gateways Standard</h4>
            <p className="text-text-muted text-sm leading-relaxed">
              Every agent persona we build is equipped with sandbox testing modes, real-time activity logs, role-based safety gates, and manual takeover fallback triggers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
