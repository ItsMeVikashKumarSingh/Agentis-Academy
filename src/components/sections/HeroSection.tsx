"use client";

import React from "react";
import PillButton from "../ui/PillButton";
import NameLabelSticker from "../ui/NameLabelSticker";
import MarkerHighlight from "../ui/MarkerHighlight";
import HanddrawnArrow from "../ui/HanddrawnArrow";
import {
  LightningSticker,
  RobotBearSticker,
  TerminalSticker,
  SparkleSticker,
} from "../ui/Stickers";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#fdfbf9]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Asymmetric Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography Stack */}
          <div className="lg:col-span-7 z-10 text-left">
            {/* Handwritten script caption with hand-drawn arrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-display text-[22px] sm:text-[24px] text-[#ff6f1e] font-normal tracking-tight">
                Production Multi-Agent Engineering
              </span>
              <HanddrawnArrow direction="down-right" width={46} height={32} className="rotate-12" />
            </div>

            {/* Display Headline: Cocoa Ink 104px */}
            <h1 className="headline-display mb-6 tracking-tight">
              Meet AgentCraft.
            </h1>

            {/* Body Copy with inline marker highlight */}
            <p className="font-display text-[20px] sm:text-[22px] text-[#2b1a07] font-normal leading-[1.45] max-w-xl mb-8">
              We don&apos;t teach toy chatbots that hallucinate on prompt three. You will{" "}
              <MarkerHighlight>actually!</MarkerHighlight> build autonomous multi-agent swarms, self-healing code loops, and self-hosted automation pipelines that run real operations while you sleep.
            </p>

            {/* CTA and Info Block Stack */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-4">
                <PillButton href="#pricing" size="lg">
                  Enroll in Cohort 04
                </PillButton>
                <PillButton href="#courses" size="lg" className="!bg-[#f7efe9]">
                  Explore Courses
                </PillButton>
              </div>

              {/* Cohort Info Block */}
              <p className="font-display text-[15px] sm:text-[16px] text-[#2b1a07]/80 pt-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] inline-block animate-pulse" />
                Cohort 04 begins April 2026 • Live weekend labs • 16 seats left.
              </p>
            </div>
          </div>

          {/* Right Column: Physical Product Notebook with Sticker Clusters */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6">
            {/* Decorative Illustrated Sticker Cluster */}
            <div className="absolute -top-6 left-6 z-20">
              <LightningSticker size={58} rotation={-14} />
            </div>
            <div className="absolute -top-8 right-12 z-20">
              <RobotBearSticker size={64} rotation={12} />
            </div>
            <div className="absolute -bottom-6 right-8 z-20">
              <TerminalSticker size={54} rotation={-8} />
            </div>
            <div className="absolute top-1/2 -left-8 z-20 hidden sm:block">
              <SparkleSticker size={38} rotation={18} color="#ff6f1e" />
            </div>

            {/* Tilted Brown Leather Notebook Asset */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] bg-[#3e2714] rounded-[16px] border-[2px] border-[#171717] shadow-[rgba(0,0,0,0.18)_0px_16px_40px_0px] rotate-[6deg] hover:rotate-0 transition-transform duration-300 p-6 flex flex-col justify-between overflow-hidden">
              {/* Notebook spine details */}
              <div className="absolute left-0 top-0 bottom-0 w-8 border-r border-[#171717]/40 bg-[#34200f] flex flex-col justify-around items-center py-8">
                <div className="w-2 h-2 rounded-full bg-[#171717]/60" />
                <div className="w-2 h-2 rounded-full bg-[#171717]/60" />
                <div className="w-2 h-2 rounded-full bg-[#171717]/60" />
                <div className="w-2 h-2 rounded-full bg-[#171717]/60" />
              </div>

              {/* Marker Orange Bookmark Ribbon */}
              <div className="absolute top-0 right-10 w-5 h-16 bg-[#ff6f1e] border-x border-b border-[#171717] shadow-md z-10" />

              {/* Inside cover text preview */}
              <div className="pl-6 space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#fdfbf9]/60 font-semibold">
                  CONFIDENTIAL • LAB LOG 04
                </span>

                <div className="mt-4">
                  {/* Laminated Name Label Sticker */}
                  <NameLabelSticker
                    name="Autonomous Agent Studio"
                    classNameLabel="LangGraph & MCP"
                    rollNo="AGT-01"
                    badge="Verified Lab"
                    rotation={-3}
                  />
                </div>
              </div>

              {/* Bottom Notebook Spec stamp */}
              <div className="pl-6 pt-6 border-t border-[#fdfbf9]/15 text-[#fdfbf9]/80 font-display text-sm">
                <p className="font-semibold text-white">Project: 5-Node Self-Correcting Agent Swarm</p>
                <p className="text-xs text-[#fdfbf9]/60 font-mono mt-1">Tools: SQL • Browser • Webhook • Memory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
