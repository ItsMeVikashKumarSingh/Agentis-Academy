"use client";

import React from "react";
import Link from "next/link";
import PillButton from "../ui/PillButton";
import { SparkleSticker } from "../ui/Stickers";

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* Signature Superr Footer Brand Band: Marker Orange (#ff6f1e) with 56px top border-radius */}
      <div className="w-full bg-[#ff6f1e] rounded-t-[56px] border-t-2 border-x-2 border-[#171717] pt-16 pb-12 px-6 sm:px-12 text-[#171717]">
        <div className="max-w-[1200px] mx-auto">
          {/* Top closing row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-14 border-b border-[#171717]/30">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-3 bg-[#fdfbf9] border border-[#171717] px-3 py-1 rounded-full text-xs font-semibold text-[#171717]">
                <SparkleSticker size={18} color="#ff6f1e" />
                <span>Cohort 04 Registration Open</span>
              </div>
              <h3 className="font-display text-3xl sm:text-5xl font-semibold text-[#2b1a07] leading-tight">
                Build Autonomous Systems That Scale.
              </h3>
              <p className="mt-3 text-[#2b1a07]/80 text-lg font-normal">
                Start building production-grade workflows today. No toy wrappers, no fragile scripts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <PillButton
                href="#pricing"
                size="lg"
                className="!bg-[#fdfbf9] !text-[#171717] !border-[#171717] shadow-[rgba(0,0,0,0.25)_0px_2px_4px_0px]"
              >
                Apply for Cohort 04
              </PillButton>
              <PillButton
                href="https://wa.me/"
                size="lg"
                className="!bg-transparent !text-[#2b1a07] !border-[#2b1a07]"
              >
                Chat on WhatsApp
              </PillButton>
            </div>
          </div>

          {/* Middle links row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-sm font-medium text-[#2b1a07]">
            <div>
              <p className="font-display font-semibold text-lg text-[#2b1a07] mb-3">
                Tracks
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="#courses" className="hover:underline">
                    Autonomous Agents (LangGraph)
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="hover:underline">
                    Production Workflow (n8n)
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="hover:underline">
                    Local LLM & MCP Protocol
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="hover:underline">
                    Enterprise Agent Swarms
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-display font-semibold text-lg text-[#2b1a07] mb-3">
                Learning
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="#curriculum" className="hover:underline">
                    8-Week Syllabus
                  </Link>
                </li>
                <li>
                  <Link href="#lab" className="hover:underline">
                    Live Lab Simulator
                  </Link>
                </li>
                <li>
                  <Link href="#proof" className="hover:underline">
                    Student Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:underline">
                    Starter Pass vs Builder Lab
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-display font-semibold text-lg text-[#2b1a07] mb-3">
                Resources
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="#lab" className="hover:underline">
                    Agent Playground
                  </a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">
                    Starter Repos on GitHub
                  </a>
                </li>
                <li>
                  <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:underline">
                    Engineering Discord
                  </a>
                </li>
                <li>
                  <a href="https://modelcontextprotocol.io" target="_blank" rel="noreferrer" className="hover:underline">
                    MCP Protocol Docs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-display font-semibold text-lg text-[#2b1a07] mb-3">
                Contact & Office
              </p>
              <p className="text-[#2b1a07]/85 text-xs leading-relaxed mb-2 font-medium">
                AgentCraft Academy<br />
                Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051, India
              </p>
              <p className="font-mono text-xs text-[#2b1a07]/75">
                lab@agentcraft.academy<br />
                +91 98200 41289
              </p>
            </div>
          </div>

          {/* Bottom fine print */}
          <div className="pt-8 border-t border-[#171717]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#2b1a07]/80 gap-4">
            <p>© 2026 AgentCraft Academy. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:underline">
                Terms of Service
              </Link>
              <Link href="/refund-policy" className="hover:underline">
                14-Day Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
