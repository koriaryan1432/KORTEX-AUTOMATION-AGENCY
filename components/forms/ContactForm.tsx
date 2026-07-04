"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user edits
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setErrorMessage("");

    // Validate with Zod client side
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: any = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Could not connect to server. Please check your network.");
    }
  };

  return (
    <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent-cyan/5 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-accent-purple/5 blur-2xl pointer-events-none" />

      {status === "success" ? (
        <div className="text-center py-12 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="font-heading font-bold text-2xl text-white mb-2">Message Sent!</h3>
          <p className="text-text-muted text-sm max-w-sm mx-auto leading-relaxed">
            We have registered your lead inquiry. An automation engineer will review your operational requirements and reach out to you within 24 hours.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 px-6 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-colors"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Status Message */}
          {status === "error" && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form Fields grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-bold text-white/70 uppercase tracking-wider">
                Full Name <span className="text-accent-cyan">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Daniel Reyes"
                className={`bg-panel-dark border ${
                  errors.name ? "border-rose-500" : "border-white/10 hover:border-white/20 focus:border-accent-cyan"
                } rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors`}
                disabled={status === "submitting"}
              />
              {errors.name && <span className="text-rose-400 text-xs mt-0.5">{errors.name}</span>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-bold text-white/70 uppercase tracking-wider">
                Email Address <span className="text-accent-cyan">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="daniel@luminatech.com"
                className={`bg-panel-dark border ${
                  errors.email ? "border-rose-500" : "border-white/10 hover:border-white/20 focus:border-accent-cyan"
                } rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors`}
                disabled={status === "submitting"}
              />
              {errors.email && <span className="text-rose-400 text-xs mt-0.5">{errors.email}</span>}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs font-bold text-white/70 uppercase tracking-wider">
                Phone Number <span className="text-accent-cyan">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 019-2834"
                className={`bg-panel-dark border ${
                  errors.phone ? "border-rose-500" : "border-white/10 hover:border-white/20 focus:border-accent-cyan"
                } rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors`}
                disabled={status === "submitting"}
              />
              {errors.phone && <span className="text-rose-400 text-xs mt-0.5">{errors.phone}</span>}
            </div>

            {/* Company Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-xs font-bold text-white/70 uppercase tracking-wider">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="LuminaTech"
                className="bg-panel-dark border border-white/10 hover:border-white/20 focus:border-accent-cyan rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                disabled={status === "submitting"}
              />
            </div>

            {/* Service Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-xs font-bold text-white/70 uppercase tracking-wider">
                Service Interested In <span className="text-accent-cyan">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className={`bg-panel-dark border ${
                  errors.service ? "border-rose-500" : "border-white/10 hover:border-white/20 focus:border-accent-cyan"
                } rounded-xl px-4 py-3 text-sm text-white/70 focus:text-white focus:outline-none transition-colors`}
                disabled={status === "submitting"}
              >
                <option value="" disabled>Select a service</option>
                <option value="AI Chatbots">AI Chatbots</option>
                <option value="AI Voice Agents">AI Voice Agents</option>
                <option value="CRM Automation">CRM Automation</option>
                <option value="WhatsApp Automation">WhatsApp Automation</option>
                <option value="Email Automation">Email Automation</option>
                <option value="Lead Gen Automation">Lead Generation Automation</option>
                <option value="Workflow Automation">Workflow Automation</option>
                <option value="Custom AI Agents">Custom AI Agents</option>
                <option value="Business Dashboards">Business Dashboards</option>
              </select>
              {errors.service && <span className="text-rose-400 text-xs mt-0.5">{errors.service}</span>}
            </div>

            {/* Budget Range dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="budget" className="text-xs font-bold text-white/70 uppercase tracking-wider">
                Monthly / Project Budget <span className="text-accent-cyan">*</span>
              </label>
              <select
                id="budget"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className={`bg-panel-dark border ${
                  errors.budget ? "border-rose-500" : "border-white/10 hover:border-white/20 focus:border-accent-cyan"
                } rounded-xl px-4 py-3 text-sm text-white/70 focus:text-white focus:outline-none transition-colors`}
                disabled={status === "submitting"}
              >
                <option value="" disabled>Select budget range</option>
                <option value="Under $1,000">Under $1,000</option>
                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                <option value="$5,000+">$5,000+</option>
              </select>
              {errors.budget && <span className="text-rose-400 text-xs mt-0.5">{errors.budget}</span>}
            </div>
          </div>

          {/* Message / Requirements */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-bold text-white/70 uppercase tracking-wider">
              Project Details & Requirements <span className="text-accent-cyan">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about the manual workflows you want to automate..."
              className={`bg-panel-dark border ${
                errors.message ? "border-rose-500" : "border-white/10 hover:border-white/20 focus:border-accent-cyan"
              } rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors resize-none`}
              disabled={status === "submitting"}
            />
            {errors.message && <span className="text-rose-400 text-xs mt-0.5">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full mt-2 py-4 rounded-xl font-semibold bg-gradient-to-r from-accent-purple to-accent-cyan hover:opacity-95 text-white flex items-center justify-center gap-2 shadow-lg shadow-accent-cyan/10 hover:shadow-accent-cyan/20 transition-all disabled:opacity-50"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting Proposal...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Operational Blueprint Inquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
