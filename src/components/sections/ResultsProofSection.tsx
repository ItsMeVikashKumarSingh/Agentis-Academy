"use client";

import React from "react";
import { CASE_STUDIES } from "@/data/courses";
import HanddrawnArrow from "../ui/HanddrawnArrow";
import { LightningSticker } from "../ui/Stickers";
import { TrendingUp, Terminal, CheckCircle2 } from "lucide-react";

export default function ResultsProofSection() {
  return (
    <section id="proof" className="py-24 bg-[#f7efe9] border-y border-[#171717]/15">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-left mb-16 relative">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-display text-[22px] text-[#ff6f1e]">
              Real Systems in Production
            </span>
            <HanddrawnArrow direction="down-right" width={44} height={28} />
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-semibold text-[#2b1a07] tracking-tight">
            Proof of Work.
          </h2>
          <p className="font-display text-lg sm:text-xl text-[#2b1a07]/75 max-w-2xl mt-3">
            Our students don&apos;t just collect certificates. They deploy mission-critical swarms that replace brittle manual operations.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              className="bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[14px] p-6 sm:p-7 shadow-[rgba(0,0,0,0.06)_0px_4px_16px_0px] relative flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              {idx === 0 && (
                <div className="absolute -top-4 -right-2">
                  <LightningSticker size={38} rotation={12} />
                </div>
              )}

              <div>
                {/* Metric Highlight Box */}
                <div className="bg-[#f7efe9] border border-[#171717] rounded-[10px] p-4 mb-5 text-left">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#ce500a] block">
                    {study.metric}
                  </span>
                  <span className="font-display text-xs font-medium text-[#2b1a07] uppercase tracking-wider block mt-0.5">
                    {study.metricLabel}
                  </span>
                </div>

                {/* Agent Title & Student */}
                <div className="mb-4">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#171717]/5 border border-[#171717]/20 text-[#171717]">
                    {study.agentName}
                  </span>
                  <p className="font-display text-sm text-[#171717]/80 mt-3 leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </div>

              {/* Author & Tech */}
              <div className="pt-4 border-t border-[#171717]/15">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-display font-semibold text-sm text-[#2b1a07]">
                      {study.studentName}
                    </h4>
                    <p className="font-display text-xs text-[#171717]/60">
                      {study.role} • {study.company}
                    </p>
                  </div>
                  <CheckCircle2 size={16} className="text-[#22c55e]" />
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {study.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f7efe9] text-[#171717]/70 border border-[#171717]/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
