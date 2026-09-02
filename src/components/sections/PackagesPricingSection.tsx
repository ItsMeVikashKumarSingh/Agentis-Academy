"use client";

import React from "react";
import { PRICING_PACKAGES } from "@/data/courses";
import PillButton from "../ui/PillButton";
import HanddrawnArrow from "../ui/HanddrawnArrow";
import { SparkleSticker, HeartEyesSticker } from "../ui/Stickers";
import { Check, X } from "lucide-react";

export default function PackagesPricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#fdfbf9] relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-left mb-16 relative">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-display text-[22px] text-[#ff6f1e]">
              transparent investment
            </span>
            <HanddrawnArrow direction="down-right" width={44} height={28} />
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-semibold text-[#2b1a07] tracking-tight">
            Pricing & Plans.
          </h2>
          <p className="font-display text-lg sm:text-xl text-[#2b1a07]/75 max-w-2xl mt-3">
            No recurring subscriptions. One single fee gives you lifetime repository access, community updates, and all future framework migrations.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg, idx) => {
            const isPopular = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[16px] p-7 sm:p-8 relative flex flex-col justify-between transition-all ${
                  isPopular
                    ? "bg-[#f7efe9] shadow-[rgba(0,0,0,0.12)_0px_8px_32px_0px] scale-100 lg:scale-[1.03] z-10"
                    : "shadow-[rgba(0,0,0,0.06)_0px_2px_20px_0px]"
                }`}
              >
                {/* Popular Recommended Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff6f1e] text-[#fdfbf9] border-[1.5px] border-[#171717] px-4 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <SparkleSticker size={16} color="#ffffff" />
                    <span>Most Recommended</span>
                  </div>
                )}

                {idx === 2 && (
                  <div className="absolute -top-3 -right-2">
                    <HeartEyesSticker size={36} rotation={14} />
                  </div>
                )}

                <div>
                  {/* Package Title & Roll Number */}
                  <div className="flex items-baseline justify-between border-b border-[#171717]/15 pb-4 mb-6">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2b1a07]">
                        {pkg.name}
                      </h3>
                      <p className="font-display text-xs text-[#171717]/70 mt-1">
                        {pkg.subtitle}
                      </p>
                    </div>
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[#fdfbf9] border border-[#171717]/30 text-[#ce500a]">
                      {pkg.rollNo}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl sm:text-5xl font-bold text-[#2b1a07]">
                        {pkg.price}
                      </span>
                      <span className="font-display text-sm text-[#171717]/60">
                        / {pkg.period}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8 text-sm font-display text-[#171717]">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        {feat.included ? (
                          <span className="w-4 h-4 rounded-full border border-[#171717] bg-[#22c55e]/20 flex items-center justify-center mt-0.5 shrink-0">
                            <Check size={11} className="text-[#171717]" />
                          </span>
                        ) : (
                          <span className="w-4 h-4 rounded-full border border-[#171717]/30 bg-transparent flex items-center justify-center mt-0.5 shrink-0 opacity-40">
                            <X size={11} className="text-[#171717]" />
                          </span>
                        )}
                        <span className={feat.included ? "" : "opacity-45 line-through"}>
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-4 border-t border-[#171717]/10">
                  <PillButton
                    href="#enroll"
                    className={`w-full !py-3 ${
                      isPopular
                        ? "!bg-[#ff6f1e] !text-[#ffffff] !border-[#171717]"
                        : "!bg-[#fdfbf9]"
                    }`}
                  >
                    {pkg.ctaText}
                  </PillButton>

                  {pkg.note && (
                    <p className="font-display text-xs text-center text-[#171717]/70 mt-2.5">
                      {pkg.note}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 p-6 rounded-[12px] border-[1.5px] border-[#171717] bg-[#f7efe9] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#171717] bg-[#fdfbf9] flex items-center justify-center shrink-0">
              <span className="font-display text-lg font-bold text-[#ff6f1e]">14d</span>
            </div>
            <div>
              <h4 className="font-display font-semibold text-lg text-[#2b1a07]">
                100% Money-Back Guarantee.
              </h4>
              <p className="font-display text-sm text-[#171717]/80">
                Join the first 2 weeks. If it doesn&apos;t fundamentally change how you build software, we refund every rupee.
              </p>
            </div>
          </div>
          <PillButton href="#enroll" size="sm">
            Read Guarantee
          </PillButton>
        </div>
      </div>
    </section>
  );
}
