"use client";

import React, { useState } from "react";
import HanddrawnArrow from "../ui/HanddrawnArrow";
import { SparkleSticker } from "../ui/Stickers";
import { ChevronDown, ChevronUp, Code2, Check, FileCode2 } from "lucide-react";

interface CurriculumWeek {
  week: string;
  title: string;
  tag: string;
  summary: string;
  sessions: {
    name: string;
    description: string;
    deliverable: string;
  }[];
}

const WEEKS: CurriculumWeek[] = [
  {
    week: "Weeks 1 & 2",
    title: "ReAct Loops, Tool Registries & Structured Schemas",
    tag: "Foundations",
    summary: "Stop sending unstructured chat strings. Build deterministic tool registries with Pydantic v2 and reliable function calling.",
    sessions: [
      {
        name: "Lab 01: The Flaw of Plain Chat Completions",
        description: "Diagnosing failure modes, hallucinated arguments, and loop exhaustion in basic ReAct loops.",
        deliverable: "Deterministic Retry Engine with Exponential Backoff"
      },
      {
        name: "Lab 02: Pydantic Tool Registries & Type Enforcement",
        description: "Binding Python callables to strict JSON schema definitions for local & cloud models.",
        deliverable: "Sandboxed SQL & Filesystem Tool Execution Node"
      }
    ]
  },
  {
    week: "Weeks 3 & 4",
    title: "Cyclic State Machines with LangGraph",
    tag: "Core Framework",
    summary: "Model complex, multi-turn agent logic as directed cyclic graphs with conditional branches, checkpoints, and time travel.",
    sessions: [
      {
        name: "Lab 03: Graph States, Reducers & Router Nodes",
        description: "Managing shared agent memory schemas without race conditions or memory leaks.",
        deliverable: "Self-Healing Bug Fixing Agent that Runs Tests"
      },
      {
        name: "Lab 04: Human-in-the-Loop Interrupts & Resumes",
        description: "Inserting approval gates into production state machines before executing irreversible operations.",
        deliverable: "Payment Authorization & Deployment Approver Graph"
      }
    ]
  },
  {
    week: "Weeks 5 & 6",
    title: "Multi-Agent Swarms & CrewAI Delegation",
    tag: "Multi-Agent",
    summary: "Orchestrate teams of specialized agents with distinct personas, manager hierarchies, and consensus mechanisms.",
    sessions: [
      {
        name: "Lab 05: Hierarchical Teams vs Flat Swarms",
        description: "When to use central manager dispatch vs decentralized peer-to-peer message passing.",
        deliverable: "Autonomous Competitive Intelligence Research Team"
      },
      {
        name: "Lab 06: Model Context Protocol (MCP) Integration",
        description: "Connecting local models to external standardized tool servers using FastMCP.",
        deliverable: "Local MCP Server connecting SQLite, GitHub & Slack"
      }
    ]
  },
  {
    week: "Weeks 7 & 8",
    title: "Enterprise Observability, Evals & Temporal Deployment",
    tag: "Production",
    summary: "Move beyond the localhost demo. Add tracing with Langfuse, synthetic benchmark evaluations, and durable orchestration.",
    sessions: [
      {
        name: "Lab 07: Tracing, Latency & Automated Evals",
        description: "Measuring cost-per-task, hallucination frequency, and agent drift using DeepEval & Langfuse.",
        deliverable: "Automated Regression Test Suite for Agents"
      },
      {
        name: "Lab 08: Durable Long-Running Workflows with Temporal",
        description: "Deploying multi-day agent loops that survive server reboots and API outages without losing state.",
        deliverable: "Enterprise-Ready 24/7 Production Deployment Blueprint"
      }
    ]
  }
];

export default function CurriculumBreakdown() {
  const [openWeek, setOpenWeek] = useState<number | null>(0);

  return (
    <section id="curriculum" className="py-24 bg-[#fdfbf9] border-b border-[#171717]/15">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-display text-[22px] text-[#ff6f1e]">
              No Fluff, Only Blueprints
            </span>
            <HanddrawnArrow direction="down-right" width={44} height={28} />
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-semibold text-[#2b1a07] tracking-tight">
            The 8-Week Lab Syllabus.
          </h2>
          <p className="font-display text-lg sm:text-xl text-[#2b1a07]/75 max-w-2xl mt-3">
            Every single week includes 2 production repositories to clone, 1 live architecture teardown, and 1 deliverable you push to your personal portfolio.
          </p>
        </div>

        {/* Syllabus Accordion Stack */}
        <div className="space-y-4">
          {WEEKS.map((item, idx) => {
            const isOpen = openWeek === idx;

            return (
              <div
                key={idx}
                className="bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[12px] overflow-hidden transition-all shadow-[rgba(0,0,0,0.04)_0px_2px_8px_0px]"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => setOpenWeek(isOpen ? null : idx)}
                  className="w-full text-left p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#f7efe9]/50 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="font-mono text-xs uppercase px-3 py-1 rounded-[20px] bg-[#f7efe9] border border-[#171717] font-semibold text-[#2b1a07]">
                      {item.week}
                    </span>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#2b1a07]">
                        {item.title}
                      </h3>
                      <p className="font-display text-sm text-[#171717]/70 mt-1 max-w-2xl">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-xs font-mono text-[#ff6f1e] font-semibold">
                      {isOpen ? "Close" : "Inspect"}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[#171717] flex items-center justify-center bg-[#fdfbf9]">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>
                </button>

                {/* Expanded Session Details */}
                {isOpen && (
                  <div className="p-6 sm:p-7 pt-0 border-t border-[#171717]/10 bg-[#f7efe9]/40 space-y-4 mt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                      {item.sessions.map((sess, sIdx) => (
                        <div
                          key={sIdx}
                          className="bg-[#ffffff] border border-[#171717] rounded-[10px] p-5 shadow-xs flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Code2 size={16} className="text-[#ff6f1e]" />
                              <h4 className="font-display font-semibold text-base text-[#2b1a07]">
                                {sess.name}
                              </h4>
                            </div>
                            <p className="font-display text-xs text-[#171717]/80 leading-relaxed mb-4">
                              {sess.description}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-[#171717]/10 flex items-center gap-2 text-xs font-mono text-[#ce500a] font-medium">
                            <FileCode2 size={14} />
                            <span>Repo: {sess.deliverable}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
