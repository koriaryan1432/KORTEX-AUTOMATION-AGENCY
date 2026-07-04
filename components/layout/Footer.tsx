"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cpu, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you! You have subscribed to our newsletter.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Subscription failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <footer className="bg-bg-dark border-t border-white/5 relative z-10 pt-16 pb-12">
      {/* Background glow spot */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] glow-spot-purple -z-10 rounded-full opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        {/* Brand Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 group self-start">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-accent-purple to-accent-cyan flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-accent-cyan transition-colors">
              KORTEX<span className="text-accent-cyan">.AI</span>
            </span>
          </Link>
          <p className="text-text-muted text-sm max-w-sm leading-relaxed">
            Automating enterprise workflows and customer operations with custom cognitive architectures and intelligent AI agents. Available 24/7.
          </p>
          <div className="flex items-center gap-4 text-white/50">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-accent-cyan transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-accent-cyan transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent-cyan transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">Services</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-text-muted">
            <li>
              <Link href="/services#ai-chatbots" className="hover:text-accent-cyan transition-colors">AI Chatbots</Link>
            </li>
            <li>
              <Link href="/services#ai-voice-agents" className="hover:text-accent-cyan transition-colors">AI Voice Agents</Link>
            </li>
            <li>
              <Link href="/services#crm-automation" className="hover:text-accent-cyan transition-colors">CRM Integrations</Link>
            </li>
            <li>
              <Link href="/services#workflow-automation" className="hover:text-accent-cyan transition-colors">Workflow Automation</Link>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">Company</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-text-muted">
            <li>
              <Link href="/case-studies" className="hover:text-accent-cyan transition-colors">Case Studies</Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-accent-cyan transition-colors">Pricing Plans</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-accent-cyan transition-colors">FAQs</Link>
            </li>
            <li>
              <Link href="/admin" className="hover:text-accent-purple font-medium transition-colors">Admin Dashboard</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">Newsletter</h4>
          <p className="text-text-muted text-sm leading-relaxed">
            Get the latest automation blueprints and insights.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-panel-dark border border-white/10 hover:border-white/20 focus:border-accent-cyan focus:outline-none rounded-lg py-2.5 pl-3.5 pr-10 text-sm text-white placeholder-white/40 transition-colors"
                disabled={status === "loading"}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="absolute right-1 top-1 bottom-1 px-3 bg-gradient-to-r from-accent-purple to-accent-cyan hover:opacity-90 rounded text-white flex items-center justify-center transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <span className="text-emerald-400 text-xs flex items-center gap-1.5 mt-1 leading-normal">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{message}</span>
              </span>
            )}
            {status === "error" && (
              <span className="text-rose-400 text-xs flex items-center gap-1.5 mt-1 leading-normal">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{message}</span>
              </span>
            )}
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
        <p>&copy; {new Date().getFullYear()} Kortex Automation. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
