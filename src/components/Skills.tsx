"use client";

import React from "react";
import {
  ROW_1_SKILLS,
  ROW_2_SKILLS,
  ROW_3_SKILLS,
  SkillItem,
} from "@/data/skillsData";

interface MarqueeRowProps {
  skills: SkillItem[];
  direction: "ltr" | "rtl" | "ltr-fast";
  rowId: string;
}

function MarqueeRow({ skills, direction, rowId }: MarqueeRowProps) {
  const animClass =
    direction === "ltr"
      ? "animate-marquee-ltr"
      : direction === "rtl"
      ? "animate-marquee-rtl"
      : "animate-marquee-ltr-fast";

  return (
    <div className="relative w-full overflow-hidden py-1.5 select-none marquee-track-hover">
      {/* Moving Track */}
      <div className={`flex shrink-0 gap-3.5 sm:gap-4 w-max ${animClass}`}>
        {/* Set 1: Primary accessible items */}
        <div className="flex shrink-0 items-center gap-3.5 sm:gap-4">
          {skills.map((skill) => (
            <div
              key={`${rowId}-a-${skill.id}`}
              className="group/item flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-white dark:bg-[#12121a]/95 border border-slate-200 dark:border-[#1e1e2e] hover:border-teal-500/40 dark:hover:border-[#00d4aa]/40 hover:bg-slate-50 dark:hover:bg-[#181824] shadow-xs hover:shadow-[0_4px_20px_rgba(13,148,136,0.12)] dark:hover:shadow-[0_0_20px_rgba(0,212,170,0.12)] transition-all duration-200 cursor-default"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center">
                {skill.renderIcon(`${rowId}-a-${skill.id}`)}
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-[#e8e8ed] group-hover/item:text-slate-950 dark:group-hover/item:text-white whitespace-nowrap tracking-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Set 2: Seamless loop clone (aria-hidden for accessibility) */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-3.5 sm:gap-4"
        >
          {skills.map((skill) => (
            <div
              key={`${rowId}-b-${skill.id}`}
              className="group/item flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-white dark:bg-[#12121a]/95 border border-slate-200 dark:border-[#1e1e2e] hover:border-teal-500/40 dark:hover:border-[#00d4aa]/40 hover:bg-slate-50 dark:hover:bg-[#181824] shadow-xs hover:shadow-[0_4px_20px_rgba(13,148,136,0.12)] dark:hover:shadow-[0_0_20px_rgba(0,212,170,0.12)] transition-all duration-200 cursor-default"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center">
                {skill.renderIcon(`${rowId}-b-${skill.id}`)}
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-[#e8e8ed] group-hover/item:text-slate-950 dark:group-hover/item:text-white whitespace-nowrap tracking-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 bg-slate-100/70 dark:bg-[#0e0e15] border-t border-slate-200/80 dark:border-[#1e1e2e]/60 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold text-teal-700 dark:text-[#00d4aa] bg-teal-50 dark:bg-[#00d4aa]/10 px-2.5 py-1 rounded border border-teal-200 dark:border-[#00d4aa]/20 font-mono">
            04
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#e8e8ed] tracking-tight">
            Technical Skills &amp; Stack
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-200 dark:from-[#1e1e2e] to-transparent ml-2" />
        </div>

        <p className="text-sm sm:text-base text-slate-600 dark:text-[#9898a8] max-w-2xl mb-12">
          Production technologies, distributed architectures, and intelligent
          model orchestration platforms leveraged across real-world AI and data
          engineering systems.
        </p>
      </div>

      {/* Marquee Showcase Container with Edge Gradient Fade */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        {/* Left & Right Ambient Fades for smooth edge occlusion */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-slate-100/90 dark:from-[#0e0e15] via-slate-100/50 dark:via-[#0e0e15]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-slate-100/90 dark:from-[#0e0e15] via-slate-100/50 dark:via-[#0e0e15]/80 to-transparent z-10" />

        {/* 3 Animated Rows */}
        <div className="flex flex-col gap-3 sm:gap-4 py-2">
          {/* Row 1: Left to Right */}
          <MarqueeRow
            skills={ROW_1_SKILLS}
            direction="ltr"
            rowId="row1"
          />

          {/* Row 2: Right to Left */}
          <MarqueeRow
            skills={ROW_2_SKILLS}
            direction="rtl"
            rowId="row2"
          />

          {/* Row 3: Left to Right (varied tempo) */}
          <MarqueeRow
            skills={ROW_3_SKILLS}
            direction="ltr-fast"
            rowId="row3"
          />
        </div>

        {/* Interactive Indicator / Subtitle Bar */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-[#5c5c6e]">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-[#00d4aa] animate-pulse" />
          <span>Continuous showcase — Hover row to pause track</span>
        </div>
      </div>
    </section>
  );
}
