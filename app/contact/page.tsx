"use client";

import React from "react";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import Reveal from "@/components/animations/Reveal";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 grid-bg min-h-screen">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] glow-spot-cyan rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest block mb-3">
                Connect With Us
              </span>
              <Reveal yOffset={25}>
                <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
                  Design Your <span className="text-gradient">AI Blueprint</span>
                </h1>
              </Reveal>
              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                Have questions about database safety or custom REST integrations? Write to us, and an automation engineer will reply within 24 hours.
              </p>
            </div>

            {/* Information List */}
            <div className="flex flex-col gap-6 pt-6 border-t border-white/5">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-white/40 uppercase block mb-0.5">Phone Line</span>
                  <span className="text-sm font-semibold text-white">+1 (555) 019-2834</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-white/40 uppercase block mb-0.5">Direct Email</span>
                  <span className="text-sm font-semibold text-white">solutions@kortexautomation.com</span>
                </div>
              </div>

              {/* Office hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-white/40 uppercase block mb-0.5">Response SLA</span>
                  <span className="text-sm font-semibold text-white">Under 24 hours (Mon - Fri)</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-white/40 uppercase block mb-0.5">Office Hub</span>
                  <span className="text-sm font-semibold text-white">New York, NY</span>
                </div>
              </div>
            </div>

            {/* Quick statement */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-3.5 items-start mt-4">
              <MessageSquare className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
              <p className="text-xs text-text-muted leading-relaxed">
                Looking for a calendar meeting immediately? Use our <Link href="/book-call" className="text-accent-cyan hover:underline font-semibold">Booking Portal</Link> to reserve a 30-minute video slot.
              </p>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
