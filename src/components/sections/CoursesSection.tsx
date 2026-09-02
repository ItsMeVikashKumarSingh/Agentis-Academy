"use client";

import React, { useState } from "react";
import { COURSES } from "@/data/courses";
import PillButton from "../ui/PillButton";
import NameLabelSticker from "../ui/NameLabelSticker";
import HanddrawnArrow from "../ui/HanddrawnArrow";
import { SparkleSticker, LightningSticker } from "../ui/Stickers";
import { Check, ArrowRight, BookOpen, Clock, Layers } from "lucide-react";
import { Course } from "@/types";

export default function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section id="courses" className="py-24 bg-[#fdfbf9] relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-left mb-16 relative">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-display text-[22px] text-[#ff6f1e]">
              Production-Ready Curriculum
            </span>
            <HanddrawnArrow direction="down-right" width={44} height={28} />
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-semibold text-[#2b1a07] tracking-tight">
            Choose Your Track.
          </h2>
          <p className="font-display text-lg sm:text-xl text-[#2b1a07]/75 max-w-2xl mt-3">
            Each course is structured around real GitHub repositories, production-tested architectural diagrams, and weekly hands-on labs.
          </p>
        </div>

        {/* 2x2 Grid of Tactile Course Notebook Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COURSES.map((course, idx) => {
            const isBlue = idx === 0;
            const isPink = idx === 3;

            return (
              <div
                key={course.id}
                className="bg-[#fdfbf9] border-[1.5px] border-[#171717] rounded-[16px] p-6 sm:p-8 shadow-[rgba(0,0,0,0.06)_0px_4px_24px_0px] relative flex flex-col justify-between hover:shadow-[rgba(0,0,0,0.12)_0px_8px_32px_0px] transition-all"
              >
                {/* Decorative sticker top-right */}
                {isBlue && (
                  <div className="absolute -top-4 right-8 z-10">
                    <LightningSticker size={42} rotation={12} />
                  </div>
                )}
                {isPink && (
                  <div className="absolute -top-4 right-8 z-10">
                    <SparkleSticker size={36} color="#ff66cf" rotation={-10} />
                  </div>
                )}

                <div>
                  {/* Laminated Name Label Sticker atop the card */}
                  <div className="mb-6">
                    <NameLabelSticker
                      name={course.title}
                      classNameLabel={course.duration}
                      rollNo={course.rollNo}
                      badge={course.badge}
                      rotation={idx % 2 === 0 ? -1.5 : 1.5}
                    />
                  </div>

                  {/* Course Tagline & Description */}
                  <h3 className="font-display text-2xl font-semibold text-[#2b1a07] mb-2">
                    {course.title}
                  </h3>
                  <p className="font-display text-base text-[#171717]/80 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono font-medium px-2.5 py-1 rounded-[6px] border border-[#171717]/25 bg-[#f7efe9] text-[#171717]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Core Highlights */}
                  <div className="space-y-2.5 py-4 border-t border-[#171717]/10 mb-6">
                    {course.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-sm font-display text-[#2b1a07]">
                        <span className="w-4 h-4 rounded-full border border-[#171717] bg-[#22c55e]/20 flex items-center justify-center mt-0.5 shrink-0">
                          <Check size={11} className="text-[#171717]" />
                        </span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Price & Action Buttons */}
                <div className="pt-6 border-t border-[#171717]/15 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold text-[#2b1a07]">
                        {course.price}
                      </span>
                      <span className="font-display text-base text-[#171717]/40 line-through">
                        {course.originalPrice}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#171717]/60 block mt-0.5">
                      Single Track Pass
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="px-4 py-2 text-sm font-display text-[#ff6f1e] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      Syllabus <BookOpen size={15} />
                    </button>
                    <PillButton href="#pricing" size="default">
                      Enroll Now <ArrowRight size={15} />
                    </PillButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Syllabus Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 z-50 bg-[#171717]/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-[#fdfbf9] border-2 border-[#171717] rounded-[16px] max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl relative">
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#171717] flex items-center justify-center text-sm font-bold hover:bg-[#f7efe9]"
              >
                ✕
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded bg-[#ff6f1e]/15 text-[#ce500a] border border-[#ff6f1e]/30">
                  {selectedCourse.rollNo} • Detailed Syllabus
                </span>
                <h3 className="font-display text-3xl font-semibold text-[#2b1a07] mt-2">
                  {selectedCourse.title}
                </h3>
                <p className="text-sm text-[#171717]/70 font-display mt-1">
                  {selectedCourse.tagline}
                </p>
              </div>

              <div className="space-y-4">
                {selectedCourse.modules.map((mod, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-4 rounded-[10px] border border-[#171717] bg-[#f7efe9]"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="font-display font-semibold text-base text-[#2b1a07]">
                        {mod.title}
                      </h4>
                      <span className="text-xs font-mono bg-white px-2 py-0.5 rounded border border-[#171717]/20">
                        {mod.duration}
                      </span>
                    </div>
                    <ul className="space-y-1 mb-3 text-xs text-[#171717]/80 list-disc pl-4 font-display">
                      {mod.topics.map((top, tIdx) => (
                        <li key={tIdx}>{top}</li>
                      ))}
                    </ul>
                    <div className="pt-2 border-t border-[#171717]/15 flex items-center gap-1.5 text-xs font-display font-medium text-[#ce500a]">
                      <Layers size={13} />
                      <span>Deliverable: {mod.project}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#171717]/20 flex items-center justify-between">
                <span className="font-display text-xl font-bold text-[#2b1a07]">
                  {selectedCourse.price}
                </span>
                <PillButton
                  href="#pricing"
                  onClick={() => setSelectedCourse(null)}
                >
                  enroll in this track
                </PillButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
