"use client";

import React from "react";

interface MarkerHighlightProps {
  children: React.ReactNode;
  className?: string;
}

export default function MarkerHighlight({ children, className = "" }: MarkerHighlightProps) {
  return (
    <span className={`relative inline-block text-[var(--color-marker-orange)] font-semibold ${className}`}>
      {children}
      <svg
        className="absolute left-0 -bottom-1 w-full h-[6px] pointer-events-none overflow-visible"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5.5C28 2.5 72 6.5 99 3.5"
          stroke="#ff6f1e"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
