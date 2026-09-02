"use client";

import React from "react";

interface StickerProps {
  className?: string;
  rotation?: number;
  size?: number;
}

// 1. High-Throughput Speed Lightning Sticker in Sky Blue (#3b82f6)
export function LightningSticker({ className = "", rotation = 12, size = 48 }: StickerProps) {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`inline-block select-none filter drop-shadow-[0_2px_0_rgba(0,0,0,0.08)] pointer-events-none transition-transform hover:scale-105 ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 4L8 28H22L18 44L38 18H24L26 4Z"
          fill="#3b82f6"
          stroke="#171717"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 8L12 26H21L19 36L31 20H23L24 8Z"
          fill="#60a5fa"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

// 2. Multi-Agent Graph Node Sticker in Bubblegum (#ff66cf)
export function AgentNodeSticker({ className = "", rotation = -6, size = 48 }: StickerProps) {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`inline-block select-none filter drop-shadow-[0_2px_0_rgba(0,0,0,0.08)] pointer-events-none transition-transform hover:scale-105 ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="6"
          width="36"
          height="36"
          rx="10"
          fill="#ff66cf"
          stroke="#171717"
          strokeWidth="2.5"
        />
        {/* Network Graph Nodes & Connections */}
        <circle cx="16" cy="18" r="4" fill="#ffffff" stroke="#171717" strokeWidth="2" />
        <circle cx="32" cy="18" r="4" fill="#ffffff" stroke="#171717" strokeWidth="2" />
        <circle cx="24" cy="32" r="4" fill="#ffffff" stroke="#171717" strokeWidth="2" />
        <line x1="19" y1="20" x2="22" y2="29" stroke="#171717" strokeWidth="2" />
        <line x1="29" y1="20" x2="26" y2="29" stroke="#171717" strokeWidth="2" />
        <line x1="20" y1="18" x2="28" y2="18" stroke="#171717" strokeWidth="2" />
      </svg>
    </div>
  );
}

// Backwards compatibility alias
export const RobotBearSticker = AgentNodeSticker;

// 3. Technical Sparkle / Star Mark in Marker Orange (#ff6f1e) or Sprout Green (#22c55e)
export function SparkleSticker({
  className = "",
  rotation = 6,
  size = 32,
  color = "#22c55e"
}: StickerProps & { color?: string }) {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`inline-block select-none pointer-events-none transition-transform hover:scale-105 ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 2C18 10 26 18 34 18C26 18 18 26 18 34C18 26 10 18 2 18C10 18 18 10 18 2Z"
          fill={color}
          stroke="#171717"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// 4. Git Branch / Directed Graph Merge Sticker
export function GitBranchSticker({ className = "", rotation = -8, size = 44 }: StickerProps) {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`inline-block select-none pointer-events-none transition-transform hover:scale-105 ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="4"
          width="36"
          height="36"
          rx="8"
          fill="#f7efe9"
          stroke="#171717"
          strokeWidth="2.5"
        />
        <circle cx="14" cy="30" r="3.5" fill="#171717" />
        <circle cx="14" cy="14" r="3.5" fill="#171717" />
        <circle cx="28" cy="20" r="3.5" fill="#ff6f1e" stroke="#171717" strokeWidth="1.5" />
        <line x1="14" y1="17.5" x2="14" y2="26.5" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 24C20 24 22 20 25 20" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

// Backwards compatibility alias
export const GhostAgentSticker = GitBranchSticker;

// 5. Terminal CLI Prompt Sticker
export function TerminalSticker({ className = "", rotation = 6, size = 42 }: StickerProps) {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`inline-block select-none pointer-events-none transition-transform hover:scale-105 ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="6"
          width="36"
          height="30"
          rx="6"
          fill="#171717"
          stroke="#171717"
          strokeWidth="2"
        />
        <path
          d="M9 16L15 21L9 26"
          stroke="#22c55e"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="18"
          y1="26"
          x2="26"
          y2="26"
          stroke="#ff6f1e"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

// 6. Verified Architecture Shield Sticker
export function VerifiedShieldSticker({ className = "", rotation = -6, size = 40 }: StickerProps) {
  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`inline-block select-none pointer-events-none transition-transform hover:scale-105 ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 4L7 9V19C7 27 12 33 20 36C28 33 33 27 33 19V9L20 4Z"
          fill="#22c55e"
          stroke="#171717"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M14 20L18 24L26 15"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// Backwards compatibility alias
export const HeartEyesSticker = VerifiedShieldSticker;
