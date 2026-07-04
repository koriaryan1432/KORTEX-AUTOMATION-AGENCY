"use client";

import React from "react";
import { PRICING_PLANS } from "@/lib/constants";
import PricingCard from "@/components/cards/PricingCard";
import Reveal from "@/components/animations/Reveal";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 bg-transparent border-t border-white/5 overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] glow-spot-cyan rounded-full opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-3">
            Pricing Plans
          </span>
          <Reveal yOffset={25}>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-5 leading-tight">
              Transparent, Value-Driven <span className="text-gradient">Pricing Models</span>
            </h2>
          </Reveal>
          <p className="text-text-muted text-sm leading-relaxed">
            Select the scale that matches your operational needs. Every project is built custom with clear handoff documentation.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              cta={plan.cta}
              popular={plan.popular}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
