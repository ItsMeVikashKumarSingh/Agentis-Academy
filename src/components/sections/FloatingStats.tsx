"use client";

import React from "react";
import { STATS } from "@/data/courses";
import { SparkleSticker } from "../ui/Stickers";

export default function FloatingStats() {
  return (
    <section className="py-12 bg-[#fdfbf9] border-y border-[#171717]/15">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#f7efe9] border-[1.5px] border-[#171717] rounded-[12px] p-5 sm:p-6 shadow-[rgba(0,0,0,0.06)_0px_2px_12px_0px] relative flex flex-col justify-between transition-transform hover:-translate-y-1"
            >
              {idx === 0 && (
                <div className="absolute -top-3 -right-2">
                  <SparkleSticker size={24} color="#ff6f1e" rotation={10} />
                </div>
              )}

              <div>
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b1a07] tracking-tight block">
                  {stat.value}
                </span>
                <p className="font-display text-sm sm:text-base text-[#171717] mt-2 font-medium">
                  {stat.label}
                </p>
              </div>

              {stat.annotation && (
                <p className="font-display text-xs text-[#ff6f1e] mt-3 pt-2 border-t border-[#171717]/10 font-normal">
                  ~ {stat.annotation}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
