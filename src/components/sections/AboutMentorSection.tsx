"use client";

import React from "react";
import HanddrawnArrow from "../ui/HanddrawnArrow";
import NameLabelSticker from "../ui/NameLabelSticker";
import MarkerHighlight from "../ui/MarkerHighlight";
import { SparkleSticker, GhostAgentSticker } from "../ui/Stickers";
import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutMentorSection() {
  return (
    <section id="mentor" className="py-24 bg-[#f7efe9] border-y border-[#171717]/15">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Photo Card styled like a Student Lab ID */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute -top-6 -left-4 z-10">
              <GhostAgentSticker size={46} rotation={-12} />
            </div>

            <div className="relative w-full max-w-[360px] bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[16px] p-5 shadow-[rgba(0,0,0,0.1)_0px_8px_24px_0px] rotate-[-2deg] hover:rotate-0 transition-transform">
              <div className="relative aspect-[4/5] rounded-[10px] overflow-hidden border border-[#171717] mb-5 bg-[#e0deda]">
                <Image
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80"
                  alt="Rohan Deshmukh"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Laminated Instructor Sticker */}
              <NameLabelSticker
                name="Rohan Deshmukh"
                classNameLabel="Lead AI Systems Architect"
                rollNo="DIR-01"
                badge="Lead Instructor"
                rotation={1}
              />
            </div>
          </div>

          {/* Right Column: Bio & Core Beliefs */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-display text-[22px] text-[#ff6f1e]">
                The Engineer Behind the Blackboard
              </span>
              <HanddrawnArrow direction="down-right" width={44} height={28} />
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[#2b1a07] tracking-tight mb-6">
              Meet Your Instructor.
            </h2>

            <div className="font-display text-base sm:text-lg text-[#171717]/85 space-y-4 leading-relaxed mb-8">
              <p>
                I&apos;ve spent the last 7 years architecting high-scale distributed systems and autonomous multi-agent pipelines for leading fintechs and global AI SaaS products.
              </p>
              <p>
                When LLMs first emerged, bootcamps and influencers rushed to sell prompt-engineering tricks and toy wrapper scripts. But in production, naive loops crash on turn three, burn through unnecessary cloud token bills, and fail compliance audits.
              </p>
              <p>
                Agentis was founded on one clear premise: building autonomous systems is an <MarkerHighlight>engineering discipline</MarkerHighlight>, not prompt witchcraft. We teach cyclic state machines, local MCP tool execution, and deterministic guardrails so your agents become your most reliable teammates.
              </p>
            </div>

            {/* Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#171717]/15">
              {[
                "Deterministic over mystical loops",
                "Local-first model privacy & MCP",
                "Zero tolerance for toy demo code",
                "Code you can debug at 3 AM"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-display font-medium text-[#2b1a07]">
                  <span className="w-4 h-4 rounded-full border border-[#171717] bg-[#22c55e]/20 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-[#171717]" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
