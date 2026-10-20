"use client";

import React, { useState } from "react";
import { EXPERIENCES_DATA } from "@/data/experienceData";
import { useLanguage } from "@/context/LanguageContext";
import { ExperienceCard } from "./ExperienceCard";
import { Sparkles, ArrowDown } from "lucide-react";

export default function Experience() {
  const { language } = useLanguage();
  const [activeMilestone, setActiveMilestone] = useState(0);

  const sectionBadge = "03";
  const sectionTitle =
    language === "en" ? "Professional Experience" : "Expériences Professionnelles";
  const sectionSubtitle =
    language === "en"
      ? "An interactive technical journey through real-world AI, Computer Vision, and multi-agent system engineering."
      : "Un parcours technique interactif à travers l'IA réelle, la Vision par Ordinateur et l'ingénierie multi-agents.";

  const milestones = [
    {
      number: "01",
      id: "hb-dev",
      company: "HB Dev",
      focus: "Mentora AI (Multi-Agent)",
      period: language === "en" ? "Apr 2026 – Present" : "04/2026 – Présent",
      isCurrent: true,
    },
    {
      number: "02",
      id: "3d-smart-factory",
      company: "3D Smart Factory",
      focus: "3D Point Cloud DGCNN",
      period: language === "en" ? "Feb 2025 – Jun 2025" : "02/2025 – 06/2025",
    },
    {
      number: "03",
      id: "hardtech-maroc",
      company: "HardTech Maroc",
      focus: "Predictive IT Telemetry",
      period: language === "en" ? "Aug 2024 – Sep 2024" : "08/2024 – 09/2024",
    },
  ];

  const handleScrollToExperience = (id: string) => {
    const el = document.getElementById(`experience-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] dark:bg-[#0a0a0f] text-slate-900 dark:text-[#e8e8ed] border-t border-slate-200/80 dark:border-[#1e1e2e] relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Editorial Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(13,148,136,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,212,170,0.08),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-teal-700 dark:text-[#00d4aa] bg-teal-100/70 dark:bg-[#00d4aa]/10 px-2.5 py-1 rounded-md border border-teal-200 dark:border-[#00d4aa]/30 font-mono">
              {sectionBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 dark:text-[#e8e8ed] tracking-tight font-heading">
              {sectionTitle}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#9898a8] leading-relaxed">
            {sectionSubtitle}
          </p>
        </div>

        {/* Interactive Experience Timeline Stepper */}
        <div className="mb-14 sm:mb-20">
          <div className="p-2 sm:p-3 rounded-2xl bg-white/80 dark:bg-[#12121a]/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {milestones.map((m, idx) => {
                const isActive = activeMilestone === idx;
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      setActiveMilestone(idx);
                      handleScrollToExperience(m.id);
                    }}
                    className={`flex items-center gap-3.5 p-3 rounded-xl transition-all duration-300 text-left cursor-pointer group ${
                      isActive
                        ? "bg-slate-50 dark:bg-slate-900/90 border border-teal-400/50 dark:border-teal-500/50 shadow-xs"
                        : "hover:bg-slate-50/60 dark:hover:bg-slate-900/40 border border-transparent"
                    }`}
                  >
                    {/* Number Node with Indicator Pulse */}
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all shrink-0 ${
                        isActive
                          ? "bg-teal-600 dark:bg-[#00d4aa] text-white dark:text-[#0a0a0f] shadow-[0_0_12px_rgba(13,148,136,0.3)] dark:shadow-[0_0_12px_rgba(0,212,170,0.3)]"
                          : "bg-slate-100 dark:bg-[#181824] text-slate-600 dark:text-slate-400 group-hover:text-teal-600"
                      }`}
                    >
                      {m.number}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-sm font-bold truncate transition-colors ${
                            isActive
                              ? "text-slate-950 dark:text-white"
                              : "text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white"
                          }`}
                        >
                          {m.company}
                        </span>
                        {m.isCurrent && (
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-[#00d4aa] animate-pulse" />
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {m.focus}
                      </p>
                    </div>

                    <span className="hidden lg:inline text-[11px] font-mono text-slate-400 dark:text-slate-500 shrink-0">
                      {m.period}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Vertical Connecting Timeline Container */}
        <div className="relative">
          {/* Subtle Vertical Track Line connecting experiences on Desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-teal-500/40 via-slate-200 dark:via-slate-800 to-teal-500/20 pointer-events-none"
          />

          {/* Alternating Experience Showcases */}
          <div className="space-y-16 sm:space-y-24 lg:space-y-28">
            {EXPERIENCES_DATA.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={index}
                milestoneNumber={milestones[index].number}
                onIntersect={(idx) => setActiveMilestone(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
