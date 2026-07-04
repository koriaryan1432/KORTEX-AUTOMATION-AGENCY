"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-transparent border-t border-white/5 overflow-hidden">
      {/* Glow spots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-spot-purple rounded-full opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-8 md:p-16 rounded-[40px] text-center border border-white/10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
        >
          {/* Decorative floating shapes */}
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent-cyan/10 blur-xl rounded-full" />
          <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-accent-purple/10 blur-xl rounded-full" />

          {/* Sparkles tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span className="text-[10px] font-bold tracking-wider text-white uppercase">
              Schedule A Session
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-white mb-6 leading-tight max-w-2xl mx-auto">
            Ready to Automate <span className="text-gradient">Your Business</span> Operations?
          </h2>

          {/* Subheading */}
          <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10">
            Book a complimentary 30-minute operational audit. An engineer will analyze your bottlenecks and map out a visual flow of how AI agents can run your workflows.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-call"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-accent-purple to-accent-cyan text-white flex items-center justify-center gap-2.5 shadow-lg shadow-accent-cyan/15 hover:shadow-accent-cyan/30 hover:scale-[1.02] transition-all group"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Free Discovery Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center gap-2.5 transition-all"
            >
              <Phone className="w-4 h-4 text-accent-cyan" />
              <span>Contact Our Team</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
