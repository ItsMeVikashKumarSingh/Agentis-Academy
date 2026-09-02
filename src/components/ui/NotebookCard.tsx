"use client";

import React from "react";
import NameLabelSticker from "./NameLabelSticker";

interface NotebookCardProps {
  children?: React.ReactNode;
  variant?: "cream" | "brown-leather" | "blue-cloud" | "rose-pink" | "dew-drop";
  tilt?: number;
  name?: string;
  classNameLabel?: string;
  rollNo?: string;
  badge?: string;
  className?: string;
  hasBinding?: boolean;
}

export default function NotebookCard({
  children,
  variant = "cream",
  tilt = 0,
  name,
  classNameLabel,
  rollNo,
  badge,
  className = "",
  hasBinding = true,
}: NotebookCardProps) {
  // Variant surface tones
  const variantStyles = {
    cream: "bg-[#fdfbf9] border-[1.5px] border-[#171717] text-[#171717]",
    "dew-drop": "bg-[#f7efe9] border-[1.5px] border-[#171717] text-[#171717]",
    "brown-leather": "bg-[#4a2e18] border-[2px] border-[#171717] text-[#fdfbf9]",
    "blue-cloud": "bg-[#3b82f6] border-[2px] border-[#171717] text-white",
    "rose-pink": "bg-[#f472b6] border-[2px] border-[#171717] text-white",
  };

  const isDarkCover = variant === "brown-leather" || variant === "blue-cloud" || variant === "rose-pink";

  return (
    <div
      style={{
        transform: tilt ? `rotate(${tilt}deg)` : undefined,
      }}
      className={`relative rounded-[16px] shadow-[rgba(0,0,0,0.12)_0px_8px_30px_0px] transition-transform duration-300 hover:rotate-0 ${variantStyles[variant]} ${className}`}
    >
      {/* Notebook spine / stitched border edge */}
      {hasBinding && (
        <div className="absolute left-0 top-0 bottom-0 w-6 border-r border-[#171717]/30 flex flex-col justify-between py-5 items-center pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-[#171717]/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#171717]/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#171717]/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#171717]/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#171717]/40" />
        </div>
      )}

      {/* Ribbon bookmark placeholder */}
      {isDarkCover && (
        <div className="absolute -top-3 right-8 w-4 h-12 bg-[#ff6f1e] border-x border-[#171717] shadow-sm rounded-b-sm pointer-events-none z-10" />
      )}

      <div className={hasBinding ? "pl-8 pr-6 py-6" : "p-6"}>
        {name && (
          <div className="mb-4">
            <NameLabelSticker
              name={name}
              classNameLabel={classNameLabel}
              rollNo={rollNo}
              badge={badge}
            />
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
