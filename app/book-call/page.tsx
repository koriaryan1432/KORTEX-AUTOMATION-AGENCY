"use client";

import React from "react";
import BookingForm from "@/components/forms/BookingForm";
import Reveal from "@/components/animations/Reveal";
import { CheckCircle2, Video, Calendar, ShieldCheck } from "lucide-react";

export default function BookCallPage() {
  return (
    <div className="pt-32 pb-24 grid-bg min-h-screen">
      {/* Background spotlights */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] glow-spot-purple rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Expectations */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-3">
                Calendar Booking
              </span>
              <Reveal yOffset={25}>
                <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
                  Book Your Free <span className="text-gradient">AI Audit Call</span>
                </h1>
              </Reveal>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                Reserve a complimentary 30-minute meeting. Our principal integration engineer will review your manual work bottlenecks and lay out a solution.
              </p>
            </div>

            {/* Meeting Expectations list */}
            <div className="flex flex-col gap-5 pt-6 border-t border-white/5">
              <h3 className="font-heading font-bold text-base text-white flex items-center gap-2 mb-2">
                <Video className="w-5 h-5 text-accent-cyan shrink-0" />
                <span>What we cover in this session:</span>
              </h3>

              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-purple shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Software Stack Review</h4>
                  <p className="text-text-muted text-xs leading-relaxed">We audit your current tools (HubSpot, WhatsApp, Salesforce, Gmail, Notion, etc.) to see where connections can be made.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Manual bottleneck discovery</h4>
                  <p className="text-text-muted text-xs leading-relaxed">Identify which administrative workflows waste your team's hours or leak incoming leads.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Visual workflow blueprint</h4>
                  <p className="text-text-muted text-xs leading-relaxed">We draft a live mapping flow showing exactly where AI agents fit in to perform active transactions.</p>
                </div>
              </div>
            </div>

            {/* Calendly backup note */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-3.5 items-start mt-4">
              <ShieldCheck className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
              <p className="text-xs text-text-muted leading-relaxed">
                Confirming a slot reserves it instantly in our database. We will sync this session details directly to your email calendar.
              </p>
            </div>
          </div>

          {/* Right Column: Booking form */}
          <div className="lg:col-span-7 w-full">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
