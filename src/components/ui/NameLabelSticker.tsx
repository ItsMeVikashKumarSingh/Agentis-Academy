"use client";

import React from "react";

interface NameLabelStickerProps {
  name: string;
  classNameLabel?: string;
  rollNo?: string;
  badge?: string;
  rotation?: number;
  className?: string;
}

export default function NameLabelSticker({
  name,
  classNameLabel = "AI Agentic Systems",
  rollNo = "AGT-04",
  badge,
  rotation = -2,
  className = "",
}: NameLabelStickerProps) {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`bg-white border border-[var(--color-charcoal)] rounded-[8px] p-3 sm:p-4 shadow-[rgba(0,0,0,0.1)_0px_2px_8px_0px] relative select-none inline-block transition-transform hover:rotate-0 duration-200 ${className}`}
    >
      {/* Top sticker tape effect simulation */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3 bg-[#e8e4de]/60 border border-[var(--color-charcoal)]/20 rounded-sm pointer-events-none" />

      {badge && (
        <span className="absolute -top-3 -right-2 text-[11px] font-semibold uppercase px-2 py-0.5 rounded-full bg-[var(--color-dew-drop)] border border-[var(--color-charcoal)] text-[var(--color-charcoal)] shadow-xs">
          {badge}
        </span>
      )}

      <div className="space-y-1.5 text-left font-display">
        <div className="flex items-baseline gap-2 border-b border-[var(--color-charcoal)]/20 pb-1">
          <span className="font-sans text-[11px] uppercase tracking-wider text-[var(--color-charcoal)]/70 font-semibold">
            Name:
          </span>
          <span className="text-[17px] sm:text-[19px] font-semibold text-[var(--color-cocoa-ink)] leading-none truncate max-w-[200px]">
            {name}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-0.5">
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans text-[11px] uppercase tracking-wider text-[var(--color-charcoal)]/70 font-semibold">
              Class:
            </span>
            <span className="text-[13px] sm:text-[14px] text-[var(--color-cocoa-ink)] truncate font-medium">
              {classNameLabel}
            </span>
          </div>

          <div className="flex items-baseline gap-1.5 justify-end">
            <span className="font-sans text-[11px] uppercase tracking-wider text-[var(--color-charcoal)]/70 font-semibold">
              Roll No:
            </span>
            <span className="text-[13px] sm:text-[14px] font-mono font-semibold text-[var(--color-burnt-sienna)]">
              {rollNo}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
