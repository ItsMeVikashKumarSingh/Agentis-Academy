"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsAppButton() {
  return (
    <aside
      aria-label="Contact via WhatsApp"
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-2.5 bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[20px] shadow-[rgba(0,0,0,0.25)_0px_2px_8px_0px] hover:shadow-[rgba(0,0,0,0.3)_0px_4px_12px_0px] hover:-translate-y-1 transition-all duration-150"
      >
        <div className="relative">
          <MessageCircle size={20} className="text-[#22c55e]" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
        </div>
        <span className="font-display text-sm font-semibold text-[#171717] hidden sm:inline-block">
          Chat with Lab Lead
        </span>
      </a>
    </aside>
  );
}
