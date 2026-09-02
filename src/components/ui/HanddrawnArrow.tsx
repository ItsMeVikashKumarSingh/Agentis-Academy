"use client";

import React from "react";

interface HanddrawnArrowProps {
  direction?: "down-right" | "down-left" | "curved-right" | "curved-left";
  className?: string;
  width?: number;
  height?: number;
}

export default function HanddrawnArrow({
  direction = "down-right",
  className = "",
  width = 64,
  height = 48,
}: HanddrawnArrowProps) {
  if (direction === "down-left") {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 64 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`select-none pointer-events-none ${className}`}
      >
        <path
          d="M58 6C42 10 24 16 12 36"
          stroke="#171717"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6 34C9 38 11 42 12 43C15 40 21 38 25 37"
          stroke="#171717"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === "curved-left") {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 64 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`select-none pointer-events-none ${className}`}
      >
        <path
          d="M56 8C52 26 36 38 14 36"
          stroke="#171717"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M20 28L11 36L18 44"
          stroke="#171717"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Default: down-right
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      {/* Hand-drawn curved stem with slight organic wobble */}
      <path
        d="M6 8C18 10 38 18 52 38"
        stroke="#171717"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Arrowhead (no fill, thin stroke) */}
      <path
        d="M40 37C46 39 50 41 53 43C53 38 52 32 50 28"
        stroke="#171717"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
