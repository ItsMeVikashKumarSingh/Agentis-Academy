"use client";

import React, { useState } from "react";
import PillButton from "../ui/PillButton";
import HanddrawnArrow from "../ui/HanddrawnArrow";
import { SparkleSticker } from "../ui/Stickers";
import { CheckCircle2, MessageSquare, Send } from "lucide-react";

export default function ContactEnrollSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    track: "Builder Lab Pass (₹34,999)",
    experience: "Intermediate (Python/JS)",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="enroll" className="py-24 bg-[#fdfbf9] border-t border-[#171717]/15">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-left mb-14 relative">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-display text-[22px] text-[#ff6f1e]">
              Enrollment Application
            </span>
            <HanddrawnArrow direction="down-right" width={44} height={28} />
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-semibold text-[#2b1a07] tracking-tight">
            Reserve Your Seat.
          </h2>
          <p className="font-display text-lg text-[#2b1a07]/75 max-w-xl mt-3">
            Fill out the application below to secure your seat for Cohort 04 (begins April 2026). Our admissions team reviews each application within 12 hours.
          </p>
        </div>

        {/* Tactile Notebook Intake Form Card */}
        <div className="bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[16px] p-8 sm:p-10 shadow-[rgba(0,0,0,0.08)_0px_8px_32px_0px] relative">
          {/* Top Tape effect */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#e8e4de]/80 border border-[#171717]/30 rounded-xs pointer-events-none" />

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full border-2 border-[#171717] bg-[#22c55e]/20 flex items-center justify-center mx-auto text-[#22c55e]">
                <CheckCircle2 size={36} className="text-[#171717]" />
              </div>
              <h3 className="font-display text-3xl font-bold text-[#2b1a07]">
                Application Received.
              </h3>
              <p className="font-display text-base text-[#171717]/80 max-w-md mx-auto leading-relaxed">
                We&apos;ve received your application, {formData.name}. Check your inbox at <span className="font-semibold text-[#ff6f1e]">{formData.email}</span> for your curriculum packet and onboarding schedule.
              </p>
              <div className="pt-4">
                <PillButton
                  onClick={() => setSubmitted(false)}
                  size="sm"
                  className="!bg-[#f7efe9]"
                >
                  Submit Another Application
                </PillButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-display text-sm font-semibold text-[#2b1a07] mb-2">
                    Your Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Turing"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[8px] px-4 py-3 text-sm font-display text-[#171717] placeholder:text-[#171717]/40 focus:outline-none focus:ring-2 focus:ring-[#ff6f1e]"
                  />
                </div>

                <div>
                  <label className="block font-display text-sm font-semibold text-[#2b1a07] mb-2">
                    Your Work Email:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[8px] px-4 py-3 text-sm font-display text-[#171717] placeholder:text-[#171717]/40 focus:outline-none focus:ring-2 focus:ring-[#ff6f1e]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-display text-sm font-semibold text-[#2b1a07] mb-2">
                    Chosen Track / Pass:
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[8px] px-4 py-3 text-sm font-display text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#ff6f1e]"
                  >
                    <option value="Builder Lab Pass (₹34,999)">Builder Lab Pass (₹34,999) — Flagship Cohort</option>
                    <option value="Autonomous Agent Track (₹24,999)">Autonomous Agent Architect (₹24,999)</option>
                    <option value="Workflow Automation Track (₹19,999)">Production Workflow Automation (₹19,999)</option>
                    <option value="Starter Pass (₹14,999)">Starter Pass (₹14,999)</option>
                    <option value="Enterprise Fellowship (₹79,999)">Enterprise Fellowship & Audit (₹79,999)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-display text-sm font-semibold text-[#2b1a07] mb-2">
                    Programming Experience:
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[8px] px-4 py-3 text-sm font-display text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#ff6f1e]"
                  >
                    <option value="Intermediate (Python/JS)">Intermediate (Python / TypeScript)</option>
                    <option value="Senior / Lead Engineer">Senior Engineer / Tech Lead</option>
                    <option value="Product / Operations Builder">Product / Ops Builder (Low-code/n8n)</option>
                    <option value="Beginner Explorer">Beginner looking to level up</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-display text-sm font-semibold text-[#2b1a07] mb-2">
                  What agent or automation are you hoping to build?
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. A multi-agent swarm that audits internal pull requests and writes integration test suites..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[8px] px-4 py-3 text-sm font-display text-[#171717] placeholder:text-[#171717]/40 focus:outline-none focus:ring-2 focus:ring-[#ff6f1e]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-display text-xs text-[#171717]/65">
                  🔒 UPI / Cards / No-Cost EMI accepted • GST tax invoice provided • 14-day 100% refund guarantee.
                </p>

                <PillButton type="submit" size="lg" className="w-full sm:w-auto">
                  Submit Application <Send size={15} className="ml-1" />
                </PillButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
