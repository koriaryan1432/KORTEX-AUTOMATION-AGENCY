"use client";

import React, { useState } from "react";
import { Calendar, CheckCircle2, AlertCircle, Loader2, Clock } from "lucide-react";
import { bookingFormSchema, type BookingFormData } from "@/lib/validations";

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    businessType: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setErrorMessage("");

    // Validate with Zod client side
    const result = bookingFormSchema.safeParse(formData);
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
      const response = await fetch("/api/booking", {
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
          preferredDate: "",
          preferredTime: "",
          businessType: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to schedule booking. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Could not connect to server. Please check your network.");
    }
  };

  // Get tomorrow's date for minimum calendar selection
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  return (
    <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-accent-purple/5 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-accent-cyan/5 blur-2xl pointer-events-none" />

      {status === "success" ? (
        <div className="text-center py-12 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-accent-cyan" />
          </div>
          <h3 className="font-heading font-bold text-2xl text-white mb-2">Strategy Call Scheduled!</h3>
          <p className="text-text-muted text-sm max-w-sm mx-auto leading-relaxed">
            Your free 30-minute AI strategy blueprint call has been booked. A calendar invite and calendar link details have been sent to your email.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 px-6 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-colors"
          >
            Schedule another session
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
                placeholder="Sarah Mitchell"
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
                placeholder="sarah@nexora.com"
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
                placeholder="+1 (555) 012-3456"
                className={`bg-panel-dark border ${
                  errors.phone ? "border-rose-500" : "border-white/10 hover:border-white/20 focus:border-accent-cyan"
                } rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors`}
                disabled={status === "submitting"}
              />
              {errors.phone && <span className="text-rose-400 text-xs mt-0.5">{errors.phone}</span>}
            </div>

            {/* Business Type dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="businessType" className="text-xs font-bold text-white/70 uppercase tracking-wider">
                Business Type <span className="text-accent-cyan">*</span>
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                value={formData.businessType}
                onChange={handleChange}
                className={`bg-panel-dark border ${
                  errors.businessType ? "border-rose-500" : "border-white/10 hover:border-white/20 focus:border-accent-cyan"
                } rounded-xl px-4 py-3 text-sm text-white/70 focus:text-white focus:outline-none transition-colors`}
                disabled={status === "submitting"}
              >
                <option value="" disabled>Select business type</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Healthcare">Healthcare Clinic</option>
                <option value="Marketing Agency">Marketing Agency</option>
                <option value="SaaS / Tech">SaaS / Tech</option>
                <option value="Local Business">Local Business</option>
                <option value="Coaching / Consulting">Coaching / Consulting</option>
                <option value="Other">Other</option>
              </select>
              {errors.businessType && <span className="text-rose-400 text-xs mt-0.5">{errors.businessType}</span>}
            </div>

            {/* Date Picker */}
            <div className="flex flex-col gap-2">
              <label htmlFor="preferredDate" className="text-xs font-bold text-white/70 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Preferred Date <span className="text-accent-cyan">*</span></span>
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                required
                min={getMinDate()}
                value={formData.preferredDate}
                onChange={handleChange}
                className={`bg-panel-dark border ${
                  errors.preferredDate ? "border-rose-500" : "border-white/10 hover:border-white/20 focus:border-accent-cyan"
                } rounded-xl px-4 py-3 text-sm text-white/75 focus:text-white focus:outline-none transition-colors`}
                disabled={status === "submitting"}
              />
              {errors.preferredDate && <span className="text-rose-400 text-xs mt-0.5">{errors.preferredDate}</span>}
            </div>

            {/* Time Picker dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="preferredTime" className="text-xs font-bold text-white/70 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent-purple" />
                <span>Preferred Time Slot <span className="text-accent-cyan">*</span></span>
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                required
                value={formData.preferredTime}
                onChange={handleChange}
                className={`bg-panel-dark border ${
                  errors.preferredTime ? "border-rose-500" : "border-white/10 hover:border-white/20 focus:border-accent-cyan"
                } rounded-xl px-4 py-3 text-sm text-white/70 focus:text-white focus:outline-none transition-colors`}
                disabled={status === "submitting"}
              >
                <option value="" disabled>Select a timeslot (EST)</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
              </select>
              {errors.preferredTime && <span className="text-rose-400 text-xs mt-0.5">{errors.preferredTime}</span>}
            </div>
          </div>

          {/* Message / context */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-bold text-white/70 uppercase tracking-wider">
              Notes or Specific Goals for the Call
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you'd like to accomplish during this call..."
              className="bg-panel-dark border border-white/10 hover:border-white/20 focus:border-accent-cyan rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors resize-none"
              disabled={status === "submitting"}
            />
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
                <span>Reserving Timeslot...</span>
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4" />
                <span>Confirm Strategy Booking</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
