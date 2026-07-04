"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { Bot, PhoneCall, Network, MessageSquare, Mail, UserPlus, Workflow, Cpu, LayoutDashboard, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

const iconMap: Record<string, React.ComponentType<any>> = {
  Bot,
  PhoneCall,
  Network,
  MessageSquare,
  Mail,
  UserPlus,
  Workflow,
  Cpu,
  LayoutDashboard
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 grid-bg min-h-screen">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] glow-spot-cyan rounded-full opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] glow-spot-purple rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-3">
            Service Catalog
          </span>
          <Reveal yOffset={25}>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Operational Automation <span className="text-gradient">Blueprints</span>
            </h1>
          </Reveal>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Explore our specialized AI agent integrations. Every capability is engineered custom to hook into your data structures securely.
          </p>
        </div>

        {/* Detailed services list */}
        <div className="flex flex-col gap-12">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Cpu;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`glass-panel p-8 md:p-12 rounded-[32px] border border-white/5 flex flex-col lg:flex-row gap-10 items-stretch relative overflow-hidden scroll-mt-24 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual/Icon side */}
                <div className="lg:w-1/3 flex flex-col justify-between bg-panel-dark/50 border border-white/5 rounded-2xl p-8 relative">
                  {/* Decorative glowing card element */}
                  <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent-cyan/10 blur-xl rounded-full" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10">
                    <IconComponent className="w-8 h-8 text-accent-cyan animate-pulse" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest block mb-1">ROI Metrics</span>
                    <h4 className="text-white font-heading font-bold text-lg leading-tight mb-2">
                      {service.benefit}
                    </h4>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-2/3 flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <span className="text-xs font-bold text-accent-purple uppercase tracking-wider block">
                      Blueprint 0{index + 1}
                    </span>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">
                      {service.title}
                    </h3>
                    <p className="text-text-muted text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-white/5 mt-4">
                    <Link
                      href="/book-call"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-accent-purple to-accent-cyan text-white text-sm flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Free Strategy Call</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm flex items-center justify-center gap-2 group"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight className="w-4 h-4 text-accent-cyan group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
