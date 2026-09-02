"use client";

import React, { useState } from "react";
import PillButton from "../ui/PillButton";
import { TerminalSticker, SparkleSticker } from "../ui/Stickers";
import { Play, RotateCcw, CheckCircle2, Bot, Wrench, ShieldCheck, Terminal } from "lucide-react";

interface Scenario {
  id: string;
  title: string;
  badge: string;
  steps: {
    agent: string;
    action: string;
    tool?: string;
    output: string;
    type: "planner" | "tool" | "eval" | "result";
  }[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "mca-audit",
    title: "Autonomous GST & MCA Compliance Audit Swarm",
    badge: "LangGraph + FastMCP",
    steps: [
      {
        agent: "Lead Auditor Agent",
        action: "Decomposed annual MCA-21 and GSTR-3B filings into 4 reconciliation subtasks.",
        type: "planner",
        output: "Generated subtask graph: [FetchGSTData] -> [ExtractITC] -> [CrossVerifyERP] -> [ValidateCompliance]"
      },
      {
        agent: "GSTN Database Worker",
        tool: "mcp_gstn_filings.query({ gstin: '27AABCU9603R1ZM', fy: '2025-26' })",
        action: "Invoked local MCP tool server to fetch GSTR-2B JSON invoices without cloud data leakage.",
        type: "tool",
        output: "Retrieved 1,840 invoice lines in 140ms (local encrypted cache hit)."
      },
      {
        agent: "Deterministic Guardrail Node",
        action: "Enforcing Pydantic v2 schema validation on Input Tax Credit (ITC) deltas. Zero tolerance for unverified claims.",
        type: "eval",
        output: "Schema passed. ITC reconciliation verified: 99.8% match with Tally/SAP ERP ledger."
      },
      {
        agent: "Executive Synthesizer",
        action: "Final structured compliance memo compiled and pushed to CFO Slack and WhatsApp alert.",
        type: "result",
        output: "Audit complete. 0 hallucinated numbers. Execution time: 1.62s. Discrepancy report pushed."
      }
    ]
  },
  {
    id: "upi-heal",
    title: "Self-Healing UPI & Razorpay Incident Swarm",
    badge: "CrewAI + Temporal",
    steps: [
      {
        agent: "Incident Supervisor",
        action: "Detected spike in UPI payment callback webhook latency (>1200ms) via Prometheus.",
        type: "planner",
        output: "Root cause candidate: OutOfMemoryException or unhandled database pool connection timeout."
      },
      {
        agent: "Diagnostics Worker",
        tool: "mcp_kubernetes.fetch_pod_logs({ pod: 'payment-service-v2', tail: 50 })",
        action: "Extracted stack trace: Redis pool connection exhausted under 8,000 req/sec burst.",
        type: "tool",
        output: "Found exact line in src/db/redis.py: connection timeout exceeded after 5000ms."
      },
      {
        agent: "Code Patch Agent",
        action: "Spawned sandboxed docker container, applied connection pooling fix, ran test suite.",
        type: "eval",
        output: "42/42 unit tests passed. Pool size scaled from 20 -> 100 with dynamic keepalive."
      },
      {
        agent: "Release Bot",
        action: "Generated GitHub draft PR #412 with benchmark diff and automated rollback safeguard.",
        type: "result",
        output: "Incident resolved in 44 seconds. Ready for 1-click human merge."
      }
    ]
  }
];

export default function InteractiveAgentDemo() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const scenario = SCENARIOS[activeScenarioIdx];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setCurrentStep(1);

    const timer1 = setTimeout(() => setCurrentStep(2), 700);
    const timer2 = setTimeout(() => setCurrentStep(3), 1500);
    const timer3 = setTimeout(() => {
      setCurrentStep(4);
      setIsRunning(false);
    }, 2300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsRunning(false);
  };

  return (
    <section id="lab" className="py-20 bg-[#f7efe9] border-y border-[#171717]/15">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-display text-lg text-[#ff6f1e]">
                The Laboratory Bench
              </span>
              <SparkleSticker size={20} color="#ff6f1e" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[#2b1a07] tracking-tight">
              Test-Drive an Autonomous Swarm.
            </h2>
            <p className="font-display text-base sm:text-lg text-[#2b1a07]/75 mt-2 max-w-xl">
              See how an agent system plans, calls tools deterministically via MCP, verifies guardrails, and completes tasks without hallucination.
            </p>
          </div>

          {/* Scenario toggle pills */}
          <div className="flex flex-wrap gap-2">
            {SCENARIOS.map((sc, idx) => (
              <button
                key={sc.id}
                onClick={() => {
                  setActiveScenarioIdx(idx);
                  setCurrentStep(0);
                  setIsRunning(false);
                }}
                className={`px-4 py-2 rounded-[20px] text-xs font-display font-semibold transition-all border border-[#171717] cursor-pointer ${
                  activeScenarioIdx === idx
                    ? "bg-[#171717] text-[#fdfbf9]"
                    : "bg-[#fdfbf9] text-[#171717] hover:bg-white"
                }`}
              >
                {sc.title}
              </button>
            ))}
          </div>
        </div>

        {/* The Lab Console Card */}
        <div className="bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[16px] p-6 sm:p-8 shadow-[rgba(0,0,0,0.08)_0px_8px_30px_0px]">
          {/* Top terminal status bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#171717]/15 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff6f1e] border border-[#171717]" />
                <span className="w-3 h-3 rounded-full bg-[#3b82f6] border border-[#171717]" />
                <span className="w-3 h-3 rounded-full bg-[#22c55e] border border-[#171717]" />
              </div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#171717]/60">
                ARCHITECTURE: {scenario.badge}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                disabled={isRunning || currentStep === 0}
                className="text-xs font-display text-[#171717]/60 hover:text-[#171717] flex items-center gap-1 disabled:opacity-30 cursor-pointer"
              >
                <RotateCcw size={13} /> Reset
              </button>

              <PillButton
                onClick={handleRunSimulation}
                size="sm"
                className="!bg-[#22c55e]/15 hover:!bg-[#22c55e]/25 !border-[#171717]"
              >
                {isRunning ? (
                  <span className="animate-pulse flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#22c55e]" /> Executing...
                  </span>
                ) : currentStep === 4 ? (
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#22c55e]" /> Re-run Swarm
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <Play size={14} /> Run Swarm Live
                  </span>
                )}
              </PillButton>
            </div>
          </div>

          {/* Execution Trace Timeline */}
          <div className="py-6 space-y-4 font-mono text-xs">
            {scenario.steps.map((step, sIdx) => {
              const isVisible = currentStep > sIdx;
              const isCurrent = currentStep === sIdx + 1 && isRunning;

              const icon =
                step.type === "planner" ? (
                  <Bot size={15} className="text-[#3b82f6]" />
                ) : step.type === "tool" ? (
                  <Wrench size={15} className="text-[#ff6f1e]" />
                ) : step.type === "eval" ? (
                  <ShieldCheck size={15} className="text-[#22c55e]" />
                ) : (
                  <CheckCircle2 size={15} className="text-[#22c55e]" />
                );

              return (
                <div
                  key={sIdx}
                  className={`p-4 rounded-[10px] border transition-all duration-300 ${
                    isVisible
                      ? "bg-[#ffffff] border-[#171717] shadow-xs opacity-100"
                      : "bg-[#f7efe9]/40 border-dashed border-[#171717]/20 opacity-40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded bg-[#f7efe9] border border-[#171717]/30">
                        {icon}
                      </span>
                      <span className="font-bold text-[#2b1a07] font-display text-sm">
                        {step.agent}
                      </span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#f7efe9] text-[#171717]/70 border border-[#171717]/15">
                        {step.type}
                      </span>
                    </div>

                    {isCurrent && (
                      <span className="text-[10px] font-mono text-[#ff6f1e] animate-pulse">
                        processing node...
                      </span>
                    )}
                  </div>

                  <p className="font-sans text-xs text-[#171717]/85 mt-1 font-normal">
                    {step.action}
                  </p>

                  {step.tool && isVisible && (
                    <div className="mt-2 p-2 rounded bg-[#171717] text-[#22c55e] font-mono text-[11px] overflow-x-auto">
                      &gt; {step.tool}
                    </div>
                  )}

                  {isVisible && (
                    <div className="mt-2 pt-2 border-t border-[#171717]/10 text-[11px] text-[#2b1a07] font-mono">
                      ✓ {step.output}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="pt-4 border-t border-[#171717]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#171717]/70 gap-3 font-display">
            <p>
              💡 This state machine design is what you will write in Module 2 of the <span className="font-semibold text-[#ff6f1e]">Autonomous Agent Architect</span> track.
            </p>
            <PillButton href="#courses" size="sm">
              View Curriculum
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
