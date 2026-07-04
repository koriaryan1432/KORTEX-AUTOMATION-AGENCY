"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/cards/ServiceCard";
import Reveal from "@/components/animations/Reveal";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="relative py-24 bg-transparent border-t border-white/5 overflow-hidden">
      {/* Decorative glow spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] glow-spot-cyan rounded-full opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-3">
              Our Capabilities
            </span>
            <Reveal yOffset={25}>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white leading-tight">
                Enterprise-Grade <span className="text-gradient">AI Solutions</span> Tailored For Scaling
              </h2>
            </Reveal>
          </div>
          <p className="text-text-muted text-sm leading-relaxed max-w-sm md:mb-1">
            We architect and build full-stack automated operations connecting your software systems directly with state-of-the-art cognitive LLMs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              benefit={service.benefit}
              iconName={service.iconName}
              index={index}
            />
          ))}
        </div>

        {/* Footnote Link */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold text-white transition-all group"
          >
            <span>View All Service Blueprints</span>
            <ArrowRight className="w-4 h-4 text-accent-cyan group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
