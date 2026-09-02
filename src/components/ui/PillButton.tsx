"use client";

import React from "react";
import Link from "next/link";

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "cream" | "dark";
  size?: "default" | "sm" | "lg";
  type?: "button" | "submit" | "reset";
}

export default function PillButton({
  children,
  href,
  onClick,
  className = "",
  variant = "cream",
  size = "default",
  type = "button"
}: PillButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-150 cursor-pointer select-none rounded-[20px]";

  const variantStyles =
    variant === "cream"
      ? "bg-[var(--color-cream-paper)] text-[var(--color-charcoal)] border-[1.5px] border-[var(--color-charcoal)] shadow-[rgba(0,0,0,0.25)_0px_1px_2px_0px] hover:shadow-[rgba(0,0,0,0.18)_0px_3px_8px_0px] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[rgba(0,0,0,0.25)_0px_1px_2px_0px]"
      : "bg-[var(--color-charcoal)] text-[var(--color-cream-paper)] border-[1.5px] border-[var(--color-charcoal)] shadow-[rgba(0,0,0,0.2)_0px_2px_4px_0px] hover:bg-[#2b1a07] hover:-translate-y-0.5";

  const sizeStyles =
    size === "sm"
      ? "px-5 py-1.5 text-sm"
      : size === "lg"
      ? "px-9 py-3.5 text-lg"
      : "px-7 py-2.5 text-[16px]";

  const combinedClass = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
}
