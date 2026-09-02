"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/courses";
import HanddrawnArrow from "../ui/HanddrawnArrow";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#fdfbf9]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-left mb-16 relative">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-display text-[22px] text-[#ff6f1e]">
              Clarifications & Details
            </span>
            <HanddrawnArrow direction="down-right" width={44} height={28} />
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-semibold text-[#2b1a07] tracking-tight">
            Frequently Asked Questions.
          </h2>
          <p className="font-display text-lg sm:text-xl text-[#2b1a07]/75 max-w-2xl mt-3">
            Everything you might be wondering about prerequisites, equipment, live recordings, and our refund policy.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[12px] overflow-hidden transition-all shadow-[rgba(0,0,0,0.03)_0px_2px_8px_0px]"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#f7efe9]/60 transition-colors"
                >
                  <span className="font-display text-lg sm:text-xl font-semibold text-[#2b1a07]">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#171717] flex items-center justify-center shrink-0 bg-[#fdfbf9]">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-6 pt-0 border-t border-[#171717]/10 bg-[#f7efe9]/40 mt-1">
                    <p className="font-display text-base text-[#171717]/85 leading-relaxed pt-3">
                      {faq.answer}
                    </p>
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
