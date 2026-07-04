"use client";

import React from "react";
import { PRICING_PLANS } from "@/lib/constants";
import PricingCard from "@/components/cards/PricingCard";
import Reveal from "@/components/animations/Reveal";
import { HelpCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

const PRICING_FAQS = [
  {
    q: "Is there a monthly maintenance fee?",
    a: "We charge a one-time setup fee for the Starter and Growth blueprints. Ongoing hosting, vector node licensing, or active token API usage (e.g. OpenAI/Twilio charges) is paid directly by you, or covered in a custom SLA maintenance contract if requested."
  },
  {
    q: "Can we modify active logical steps later?",
    a: "Yes. Every client is provided with full handoff video guides. If you need our engineers to modify logic scripts, add integrations, or fine-tune prompts, you can request support credits or purchase an ongoing SLA plan."
  },
  {
    q: "What is an SLA priority support channel?",
    a: "For Custom AI systems, we provide a private Slack channel with a guaranteed response SLA (e.g. under 2 hours) to fix broken webhooks, API token refreshes, or logical bugs."
  }
];

export default function PricingPage() {
  return (
    <div className="pt-32 pb-24 grid-bg min-h-screen">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] glow-spot-cyan rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-3">
            Investment
          </span>
          <Reveal yOffset={25}>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Value-Optimized <span className="text-gradient">Pricing Plans</span>
            </h1>
          </Reveal>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Select the scale of operational automation your agency or enterprise needs. Standard handoff assets included.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
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

        {/* Pricing specific FAQs */}
        <div className="max-w-3xl mx-auto mt-16 pt-16 border-t border-white/5">
          <h3 className="font-heading font-bold text-2xl text-white mb-8 text-center">Pricing & SLA Guidelines</h3>
          <div className="flex flex-col gap-6">
            {PRICING_FAQS.map((faq, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5">
                <h4 className="font-heading font-bold text-sm text-white flex items-center gap-2 mb-2">
                  <HelpCircle className="w-4 h-4 text-accent-cyan shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-text-muted text-xs leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-cyan hover:text-white transition-colors"
            >
              <span>View expanded FAQ catalog</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
