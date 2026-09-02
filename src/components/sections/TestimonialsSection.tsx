"use client";

import React from "react";
import { TESTIMONIALS } from "@/data/courses";
import HanddrawnArrow from "../ui/HanddrawnArrow";
import { SparkleSticker } from "../ui/Stickers";
import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#fdfbf9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-left mb-16 relative">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-display text-[22px] text-[#ff6f1e]">
              Verified Alumni Reviews
            </span>
            <HanddrawnArrow direction="down-right" width={44} height={28} />
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-semibold text-[#2b1a07] tracking-tight">
            Words From the Lab.
          </h2>
          <p className="font-display text-lg sm:text-xl text-[#2b1a07]/75 max-w-2xl mt-3">
            Engineers, tech leads, and founders who went from toy prompts to production autonomous swarms.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.id}
              style={{
                transform: idx === 1 ? "rotate(-1deg)" : idx === 2 ? "rotate(1.5deg)" : "rotate(-1.5deg)"
              }}
              className="bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[16px] p-6 sm:p-7 shadow-[rgba(0,0,0,0.06)_0px_4px_20px_0px] relative flex flex-col justify-between hover:rotate-0 transition-transform duration-200"
            >
              {/* Top tape piece effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#e8e4de]/80 border border-[#171717]/25 rounded-xs pointer-events-none" />

              <div>
                {/* Star rating stamp */}
                <div className="flex items-center gap-1 mb-4 text-[#ff6f1e]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#ff6f1e" stroke="#171717" strokeWidth={1.5} />
                  ))}
                </div>

                {/* Quote with marker orange word highlight */}
                <p className="font-display text-base text-[#171717] leading-relaxed mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#171717]/15 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full border border-[#171717] overflow-hidden shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-[#2b1a07]">
                    {item.author}
                  </h4>
                  <p className="font-display text-xs text-[#171717]/60">
                    {item.role}
                  </p>
                  <span className="font-mono text-[10px] text-[#ff6f1e] font-semibold">
                    {item.cohort}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
