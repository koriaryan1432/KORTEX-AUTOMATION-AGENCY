"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Bot, PhoneCall, Network, MessageSquare, Mail, UserPlus, Workflow, Cpu, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

import FloatingCard from "@/components/animations/FloatingCard";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  benefit: string;
  iconName: string;
  index: number;
}

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

export default function ServiceCard({
  id,
  title,
  description,
  benefit,
  iconName,
  index
}: ServiceCardProps) {
  const IconComponent = iconMap[iconName] || Cpu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <FloatingCard
        glowColor="cyan"
        className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between h-full group relative overflow-hidden"
      >
        <div>
          {/* Icon container */}
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent-cyan/45 group-hover:bg-accent-cyan/5 transition-colors duration-300">
            <IconComponent className="w-6 h-6 text-white group-hover:text-accent-cyan transition-colors duration-300" />
          </div>

          {/* Title */}
          <h3 className="font-heading font-semibold text-xl text-white mb-3 group-hover:text-accent-cyan transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-text-muted text-sm leading-relaxed mb-6">
            {description}
          </p>
        </div>

        {/* Benefit & CTA */}
        <div className="pt-6 border-t border-white/5 mt-auto flex flex-col gap-4">
          <div className="text-xs text-text-muted">
            <span className="text-accent-cyan font-medium">ROI Benefit:</span> {benefit}
          </div>
          <Link 
            href={`/services#${id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 group-hover:text-accent-cyan transition-colors mt-1 self-start"
          >
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 text-accent-cyan group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </FloatingCard>
    </motion.div>
  );
}
