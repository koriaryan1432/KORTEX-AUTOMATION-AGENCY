"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  index: number;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  popular,
  index,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-3xl p-8 flex flex-col justify-between h-full overflow-hidden ${
        popular
          ? "bg-panel-dark border-2 border-accent-cyan/60 shadow-[0_0_40px_rgba(0,240,255,0.08)]"
          : "glass-panel border border-white/10"
      }`}
    >
      {/* Decorative Popular Badge */}
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-accent-cyan to-accent-purple px-4 py-1.5 rounded-bl-xl text-xs font-bold text-black uppercase tracking-wider">
          Most Popular
        </div>
      )}

      {/* Glow spots in popular cards */}
      {popular && (
        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-accent-purple/10 blur-2xl pointer-events-none" />
      )}

      <div>
        {/* Header */}
        <div className="mb-6">
          <h3 className="font-heading font-bold text-lg text-white mb-2">{name}</h3>
          <p className="text-text-muted text-sm leading-relaxed">{description}</p>
        </div>

        {/* Price info */}
        <div className="mb-8 flex items-baseline gap-2">
          <span className="font-heading font-bold text-4xl text-white tracking-tight">{price}</span>
          <span className="text-text-muted text-sm font-medium">/ {period}</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 w-full mb-8" />

        {/* Feature list */}
        <ul className="flex flex-col gap-4 mb-8">
          {features.map((feature, fIdx) => (
            <li key={fIdx} className="flex items-start gap-3 text-sm text-white/80">
              <div className="w-5 h-5 rounded-full bg-accent-cyan/15 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-accent-cyan" />
              </div>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="mt-auto pt-6 border-t border-white/5">
        <Link
          href="/book-call"
          className={`w-full py-3.5 rounded-xl font-semibold text-center flex items-center justify-center gap-2 transition-all duration-300 ${
            popular
              ? "bg-gradient-to-r from-accent-purple to-accent-cyan hover:opacity-95 text-white shadow-lg shadow-accent-cyan/10 hover:shadow-accent-cyan/20"
              : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white"
          }`}
        >
          <span>{cta}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
