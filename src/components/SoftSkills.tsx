"use client";

import React from "react";
import {
  Users,
  MessageSquare,
  ShieldAlert,
  Lightbulb,
  Clock,
  CheckCircle2,
  Sparkles,
  Workflow,
  Compass,
  Layers,
  ArrowRight,
} from "lucide-react";

interface SubSkill {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface CapabilityPillar {
  number: string;
  category: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: [SubSkill, SubSkill];
}

const CAPABILITY_PILLARS: CapabilityPillar[] = [
  {
    number: "01",
    category: "Collaboration",
    subtitle: "Cross-functional synergy & executive articulation",
    icon: <Users className="w-5 h-5 text-teal-600 dark:text-[#00d4aa]" />,
    skills: [
      {
        title: "Teamwork & Leadership",
        desc: "Collaborating smoothly across cross-functional engineering and product units, fostering trust, technical alignment, and mutual growth.",
        icon: <Users className="w-4 h-4 text-teal-600 dark:text-[#00d4aa]" />,
      },
      {
        title: "Clear Communication",
        desc: "Translating nuanced AI architectures and complex algorithmic results into clear, decision-ready insights for non-technical stakeholders.",
        icon: <MessageSquare className="w-4 h-4 text-teal-600 dark:text-[#00d4aa]" />,
      },
    ],
  },
  {
    number: "02",
    category: "Thinking & Innovation",
    subtitle: "Empirical precision & cutting-edge exploration",
    icon: <Lightbulb className="w-5 h-5 text-teal-600 dark:text-[#00d4aa]" />,
    skills: [
      {
        title: "Problem-Solving & Rigor",
        desc: "Disciplined mathematical reasoning combined with systematic edge-case evaluation, benchmark tracking, and reproducibility.",
        icon: <ShieldAlert className="w-4 h-4 text-teal-600 dark:text-[#00d4aa]" />,
      },
      {
        title: "Creativity & Innovation",
        desc: "Exploring novel multi-modal architectures (VLM + RAG + Computer Vision) to build high-impact real-world solutions.",
        icon: <Sparkles className="w-4 h-4 text-teal-600 dark:text-[#00d4aa]" />,
      },
    ],
  },
  {
    number: "03",
    category: "Execution & Excellence",
    subtitle: "Delivery cadence & rigorous data governance",
    icon: <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-[#00d4aa]" />,
    skills: [
      {
        title: "Time Management",
        desc: "Delivering sprint objectives on schedule using Agile/Scrum methodologies without cutting corners on architectural standards.",
        icon: <Clock className="w-4 h-4 text-teal-600 dark:text-[#00d4aa]" />,
      },
      {
        title: "Work Ethic & Precision",
        desc: "Commitment to strict data quality protocols, reliable data governance, clean code formatting, and robust documentation.",
        icon: <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-[#00d4aa]" />,
      },
    ],
  },
  {
    number: "04",
    category: "Adaptability & Impact",
    subtitle: "Continuous evolution & business modernization",
    icon: <Workflow className="w-5 h-5 text-teal-600 dark:text-[#00d4aa]" />,
    skills: [
      {
        title: "Adaptability & Autonomy",
        desc: "Rapid learner in evolving technical paradigms, quickly synthesizing and mastering emerging model frameworks and agentic architectures.",
        icon: <Compass className="w-4 h-4 text-teal-600 dark:text-[#00d4aa]" />,
      },
      {
        title: "Digital Transformation",
        desc: "Modernizing operational business workflows through automated pipelines, OLAP analytics, and intelligent AI decision support.",
        icon: <Workflow className="w-4 h-4 text-teal-600 dark:text-[#00d4aa]" />,
      },
    ],
  },
];

export default function SoftSkills() {
  return (
    <section
      id="soft-skills"
      className="py-24 px-4 sm:px-6 bg-[#f8fafc] dark:bg-[#0a0a0f] border-t border-slate-200/80 dark:border-[#1e1e2e]/60 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold text-teal-700 dark:text-[#00d4aa] bg-teal-50 dark:bg-[#00d4aa]/10 px-2.5 py-1 rounded border border-teal-200 dark:border-[#00d4aa]/20 font-mono">
            05
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#e8e8ed] tracking-tight">
            Core &amp; Interpersonal Skills
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-200 dark:from-[#1e1e2e] to-transparent ml-2" />
        </div>

        {/* Section Subtitle with Capability Matrix Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14">
          <p className="text-sm sm:text-base text-slate-600 dark:text-[#9898a8] max-w-2xl">
            Professional competencies structured as four interdependent capability
            pillars that translate algorithmic complexity into measurable organizational value.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] text-xs text-slate-600 dark:text-[#9898a8] shrink-0 self-start sm:self-auto shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-[#00d4aa]" />
            <span className="font-mono text-slate-800 dark:text-[#e8e8ed]">4 Capability Pillars</span>
          </div>
        </div>

        {/* Bento Grid with Signature Central Matrix Visual Detail */}
        <div className="relative">
          {/* Central Nexus Signature Motif (Visible on desktop lg screens) */}
          <div
            aria-hidden="true"
            className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center"
          >
            {/* Horizontal & Vertical Crosshair Guidelines */}
            <div className="absolute w-[calc(100%+80px)] h-[1px] bg-gradient-to-r from-transparent via-slate-300 dark:via-[#1e1e2e] to-transparent" />
            <div className="absolute h-[calc(100%+80px)] w-[1px] bg-gradient-to-b from-transparent via-slate-300 dark:via-[#1e1e2e] to-transparent" />

            {/* Central Node Badge */}
            <div className="relative w-12 h-12 rounded-full bg-white dark:bg-[#0a0a0f] border border-teal-500/30 dark:border-[#00d4aa]/30 flex items-center justify-center shadow-md dark:shadow-[0_0_24px_rgba(0,212,170,0.18)]">
              <div className="w-7 h-7 rounded-full bg-teal-50 dark:bg-[#00d4aa]/10 flex items-center justify-center">
                <Layers className="w-3.5 h-3.5 text-teal-600 dark:text-[#00d4aa] animate-pulse" />
              </div>
            </div>
          </div>

          {/* 4 Bento Panels in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {CAPABILITY_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="group relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] hover:border-teal-500/40 dark:hover:border-[#00d4aa]/40 hover:bg-slate-50/50 dark:hover:bg-[#151520] transition-all duration-300 shadow-xs hover:shadow-lg dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] flex flex-col justify-between"
              >
                {/* Ambient Top Glow on Hover */}
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-teal-500/0 dark:via-[#00d4aa]/0 group-hover:via-teal-500/50 dark:group-hover:via-[#00d4aa]/50 to-transparent transition-all duration-300" />

                {/* Pillar Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-[#00d4aa]/10 border border-teal-200 dark:border-[#00d4aa]/20 flex items-center justify-center group-hover:scale-105 group-hover:border-teal-400 dark:group-hover:border-[#00d4aa]/40 transition-all">
                        {pillar.icon}
                      </div>
                      <div>
                        <span className="font-mono text-xs font-semibold text-teal-600 dark:text-[#00d4aa] tracking-widest uppercase">
                          {pillar.number} — Pillar
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#e8e8ed] group-hover:text-teal-700 dark:group-hover:text-white transition-colors">
                          {pillar.category}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-slate-500 dark:text-[#5c5c6e] group-hover:text-slate-700 dark:group-hover:text-[#9898a8] transition-colors">
                      2 Capabilities
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-[#5c5c6e] pl-12 font-medium">
                    {pillar.subtitle}
                  </p>
                </div>

                {/* Connected Capability Sub-Items */}
                <div className="space-y-3.5 relative">
                  {/* Subtle Connecting Line between the two skills in this pillar */}
                  <div className="absolute left-[19px] top-6 bottom-6 w-[1.5px] bg-gradient-to-b from-teal-500/30 dark:from-[#00d4aa]/30 via-slate-200 dark:via-[#1e1e2e] to-teal-500/30 dark:to-[#00d4aa]/30 pointer-events-none" />

                  {pillar.skills.map((sub, sIdx) => (
                    <div
                      key={sub.title}
                      className="relative pl-10 p-4 rounded-xl bg-slate-50/80 dark:bg-[#0a0a0f]/75 border border-slate-200/80 dark:border-[#1e1e2e]/80 hover:border-teal-500/30 dark:hover:border-[#00d4aa]/25 hover:bg-white dark:hover:bg-[#0a0a0f] transition-all"
                    >
                      {/* Sub-item Icon Node */}
                      <div className="absolute left-2.5 top-4 w-6 h-6 rounded-lg bg-white dark:bg-[#181824] border border-slate-200 dark:border-[#1e1e2e] flex items-center justify-center z-10 group-hover:border-teal-400 dark:group-hover:border-[#00d4aa]/30 transition-colors shadow-2xs">
                        {sub.icon}
                      </div>

                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-[#e8e8ed] tracking-tight">
                          {sub.title}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-[#5c5c6e] px-1.5 py-0.5 rounded bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e]/60">
                          {pillar.number}.{sIdx + 1}
                        </span>
                      </div>

                      <p className="text-xs sm:text-[13px] text-slate-600 dark:text-[#9898a8] leading-relaxed">
                        {sub.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Pillar Bottom Integrated State */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-[#1e1e2e]/50 flex items-center justify-between text-xs text-slate-500 dark:text-[#5c5c6e]">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50 dark:bg-[#00d4aa]/50" />
                    Interdependent System
                  </span>
                  <span className="font-mono text-[11px] text-teal-600 dark:text-[#00d4aa]/70 flex items-center gap-1 group-hover:text-teal-700 dark:group-hover:text-[#00d4aa] transition-colors">
                    Operationalized
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
