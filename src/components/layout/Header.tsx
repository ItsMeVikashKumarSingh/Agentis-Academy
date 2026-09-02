"use client";

import React, { useState } from "react";
import Link from "next/link";
import PillButton from "../ui/PillButton";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdfbf9]/90 backdrop-blur-md border-b border-[#171717]/10 transition-all">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Top-left Brand Mark: Hand/pointing icon as per Superr spec */}
        <Link
          href="#home"
          className="flex items-center gap-3 group"
          aria-label="Agentis Academy Home"
        >
          <div className="w-10 h-10 rounded-full border-[1.5px] border-[#171717] bg-[#fdfbf9] flex items-center justify-center shadow-[rgba(0,0,0,0.15)_0px_1px_2px_0px] transition-transform group-hover:scale-105">
            {/* Illustrated Pointing Hand / Pen Nib Icon */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#171717"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-7 7" />
              <path d="m12 9 6 6" />
              <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="font-display font-semibold text-xl text-[#2b1a07] tracking-tight hidden sm:inline-block">
            Agentis
          </span>
        </Link>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-[#171717]/80">
          <Link
            href="#courses"
            className="hover:text-[#ff6f1e] transition-colors"
          >
            Courses
          </Link>
          <Link
            href="#curriculum"
            className="hover:text-[#ff6f1e] transition-colors"
          >
            Curriculum
          </Link>
          <Link
            href="#lab"
            className="hover:text-[#ff6f1e] transition-colors"
          >
            Live Lab
          </Link>
          <Link
            href="#pricing"
            className="hover:text-[#ff6f1e] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#proof"
            className="hover:text-[#ff6f1e] transition-colors"
          >
            Case Studies
          </Link>
          <Link
            href="#faq"
            className="hover:text-[#ff6f1e] transition-colors"
          >
            FAQ
          </Link>
        </nav>

        {/* Top-right Persistent Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <PillButton href="#pricing" size="default">
            Enroll Now
          </PillButton>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <PillButton href="#pricing" size="sm">
            Enroll
          </PillButton>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[#171717] rounded-full text-[#171717]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#171717] bg-[#fdfbf9] px-6 py-5 space-y-4">
          <Link
            href="#courses"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-[#171717]"
          >
            Courses
          </Link>
          <Link
            href="#curriculum"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-[#171717]"
          >
            Curriculum
          </Link>
          <Link
            href="#lab"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-[#171717]"
          >
            Live Lab
          </Link>
          <Link
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-[#171717]"
          >
            Pricing & Plans
          </Link>
          <Link
            href="#proof"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-[#171717]"
          >
            Case Studies
          </Link>
          <Link
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-[#171717]"
          >
            FAQ
          </Link>
        </div>
      )}
    </header>
  );
}
