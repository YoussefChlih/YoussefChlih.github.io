"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  GraduationCap,
  Calendar,
  Sparkles,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Award,
  CheckCircle2,
  ArrowDown,
  Compass,
  MapPin
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { educationData, EducationItem } from "@/data/educationData";

export default function Education() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  // State to track expanded coursework lists
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    "ests-bachelor": true,
    "estn-dut": true,
  });

  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const toggleCoursework = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 border-t border-slate-200/80 dark:border-[#1e1e2e]/60 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Subtle Ambient Glows & Grid */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/10 dark:bg-[#00d4aa]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Subtle Isometric Grid Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold text-teal-700 dark:text-[#00d4aa] bg-teal-50 dark:bg-[#00d4aa]/10 px-2.5 py-1 rounded border border-teal-200 dark:border-[#00d4aa]/20 font-mono">
                06
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-[#e8e8ed] tracking-tight">
                {language === "fr"
                  ? "Formation & Parcours Académique"
                  : "Academic Background & Milestones"}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#9898a8] max-w-2xl">
              {language === "fr"
                ? "Parcours d'excellence en Intelligence Artificielle, Big Data et Sciences des Données, des bases algorithmiques fondamentales au Master spécialisé."
                : "Continuous academic advancement in Artificial Intelligence, Big Data Architectures, and Data Science from foundational engineering to Master's studies."}
            </p>
          </div>

          {/* Quick Academic Trajectory Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] text-xs font-mono text-slate-700 dark:text-slate-300 shadow-xs self-start md:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500" />
            </span>
            <span>
              <strong>3</strong> {language === "fr" ? "Étapes Académiques" : "Key Milestones"} • ENSIAS Master
            </span>
          </div>
        </div>

        {/* 3D ISOMETRIC WINDING TIMELINE CONTAINER */}
        <div className="relative">
          {/* ================= DESKTOP VIEW (>= 1024px) ================= */}
          <div className="hidden lg:block relative py-8">
            {/* Central 3D Ribbon SVG Path */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 950"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="windingRibbon" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#d946ef" stopOpacity="0.9" />
                  <stop offset="45%" stopColor="#8b5cf6" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#0d9488" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="ribbonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#d946ef" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0d9488" stopOpacity="0.25" />
                </linearGradient>
                <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Ambient Glow Shadow Ribbon */}
              <path
                d="M 500,40 C 620,120 720,220 500,340 C 280,460 280,600 500,720 C 620,800 600,880 500,920"
                fill="none"
                stroke="url(#ribbonGlow)"
                strokeWidth="14"
                strokeLinecap="round"
                filter="url(#neonBlur)"
              />

              {/* Main Glowing Ribbon Core */}
              <path
                d="M 500,40 C 620,120 720,220 500,340 C 280,460 280,600 500,720 C 620,800 600,880 500,920"
                fill="none"
                stroke="url(#windingRibbon)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="8 6"
              />

              {/* Node Connectors */}
              {/* Node 1 (ENSIAS): (500, 100) -> right card */}
              <line x1="500" y1="90" x2="560" y2="90" stroke="#d946ef" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
              {/* Node 2 (EST Salé): (400, 480) -> left card */}
              <line x1="400" y1="460" x2="440" y2="460" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
              {/* Node 3 (EST Nador): (500, 780) -> right card */}
              <line x1="500" y1="780" x2="560" y2="780" stroke="#0d9488" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
            </svg>

            {/* Alternating 3D Milestones */}
            <div className="space-y-16 relative z-10">
              {educationData.map((item, index) => {
                const isEven = index % 2 === 0;
                const isHovered = hoveredNode === item.id;

                return (
                  <div
                    key={item.id}
                    className={`grid grid-cols-12 gap-8 items-center ${
                      isEven ? "" : "flex-row-reverse"
                    }`}
                    onMouseEnter={() => setHoveredNode(item.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Left Slot: Card (if odd) or Pin Node (if even) */}
                    {isEven ? (
                      <>
                        {/* Empty spacing column with floating decorative badge */}
                        <div className="col-span-5 flex justify-end pr-8">
                          <div
                            className={`p-4 rounded-2xl border transition-all duration-300 text-right ${
                              isHovered
                                ? "bg-white/80 dark:bg-[#12121a]/90 border-purple-500/40 shadow-lg scale-102"
                                : "bg-transparent border-transparent opacity-80"
                            }`}
                          >
                            <span className="text-xs font-mono font-bold text-fuchsia-600 dark:text-fuchsia-400 block mb-1">
                              {item.period[language]}
                            </span>
                            <span className="text-sm font-bold text-slate-800 dark:text-slate-200 block">
                              {item.school}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {item.degree[language]}
                            </span>
                          </div>
                        </div>

                        {/* Center Pin Node on Ribbon */}
                        <div className="col-span-2 flex justify-center items-center">
                          <div
                            className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 ${
                              isHovered ? "scale-125" : "scale-100"
                            }`}
                          >
                            {/* Outer pulsing ring */}
                            <span
                              className="absolute inset-0 rounded-full animate-ping opacity-35"
                              style={{ backgroundColor: item.glowColor }}
                            />
                            {/* Inner circle */}
                            <div
                              className="relative w-10 h-10 rounded-full border-2 border-white dark:border-[#0a0a0f] flex items-center justify-center shadow-md shadow-purple-500/30 text-white font-mono text-xs font-bold"
                              style={{
                                background: `linear-gradient(135deg, ${
                                  index === 0
                                    ? "#d946ef, #8b5cf6"
                                    : index === 1
                                    ? "#8b5cf6, #6366f1"
                                    : "#0d9488, #10b981"
                                })`,
                              }}
                            >
                              <GraduationCap className="w-5 h-5" />
                            </div>
                          </div>
                        </div>

                        {/* Right Slot: Milestone Glassmorphism Card */}
                        <div className="col-span-5">
                          <TimelineCard
                            item={item}
                            language={language}
                            theme={theme}
                            isExpanded={!!expandedCards[item.id]}
                            onToggle={() => toggleCoursework(item.id)}
                            isHovered={isHovered}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Left Slot: Milestone Glassmorphism Card */}
                        <div className="col-span-5">
                          <TimelineCard
                            item={item}
                            language={language}
                            theme={theme}
                            isExpanded={!!expandedCards[item.id]}
                            onToggle={() => toggleCoursework(item.id)}
                            isHovered={isHovered}
                          />
                        </div>

                        {/* Center Pin Node on Ribbon */}
                        <div className="col-span-2 flex justify-center items-center">
                          <div
                            className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 ${
                              isHovered ? "scale-125" : "scale-100"
                            }`}
                          >
                            <span
                              className="absolute inset-0 rounded-full animate-ping opacity-35"
                              style={{ backgroundColor: item.glowColor }}
                            />
                            <div
                              className="relative w-10 h-10 rounded-full border-2 border-white dark:border-[#0a0a0f] flex items-center justify-center shadow-md shadow-indigo-500/30 text-white font-mono text-xs font-bold"
                              style={{
                                background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                              }}
                            >
                              <GraduationCap className="w-5 h-5" />
                            </div>
                          </div>
                        </div>

                        {/* Right Slot: Information preview */}
                        <div className="col-span-5 pl-8">
                          <div
                            className={`p-4 rounded-2xl border transition-all duration-300 text-left ${
                              isHovered
                                ? "bg-white/80 dark:bg-[#12121a]/90 border-indigo-500/40 shadow-lg scale-102"
                                : "bg-transparent border-transparent opacity-80"
                            }`}
                          >
                            <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 block mb-1">
                              {item.period[language]}
                            </span>
                            <span className="text-sm font-bold text-slate-800 dark:text-slate-200 block">
                              {item.school}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {item.degree[language]}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= MOBILE & TABLET VIEW (< 1024px) ================= */}
          <div className="lg:hidden relative pl-6 sm:pl-8 py-2">
            {/* Vertical Glowing 3D Track Line pinned to left */}
            <div className="absolute top-4 bottom-4 left-3 sm:left-4 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-fuchsia-500 via-purple-500 to-teal-500 shadow-[0_0_12px_rgba(217,70,239,0.4)]" />

            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Glowing Track Pin Node */}
                  <div className="absolute -left-6 sm:-left-8 top-5 w-6 h-6 -translate-x-1/2 rounded-full bg-white dark:bg-[#0a0a0f] border-2 border-purple-500 shadow-md flex items-center justify-center z-10">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        backgroundColor:
                          index === 0
                            ? "#d946ef"
                            : index === 1
                            ? "#8b5cf6"
                            : "#0d9488",
                      }}
                    />
                  </div>

                  {/* Glassmorphism Card */}
                  <TimelineCard
                    item={item}
                    language={language}
                    theme={theme}
                    isExpanded={!!expandedCards[item.id]}
                    onToggle={() => toggleCoursework(item.id)}
                    isHovered={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transition Banner to Section 07 (Certifications) */}
        <div className="mt-16 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-purple-500/10 via-teal-500/10 to-transparent border border-purple-500/20 dark:border-[#00d4aa]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-teal-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-[#e8e8ed]">
                {language === "fr"
                  ? "13 Certifications Professionnelles & Accréditations"
                  : "13 Verified Professional Certifications"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-[#9898a8]">
                {language === "fr"
                  ? "Explorez la pile interactive 3D CardSwap de certificats vérifiés (Coursera, DeepLearning.AI, IBM, 365 Data Science, Cisco)."
                  : "Explore the interactive 3D CardSwap stack of verified credentials (Coursera, DeepLearning.AI, IBM, 365 Data Science, Cisco)."}
              </p>
            </div>
          </div>

          <a
            href="#certificates"
            className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#12121a] hover:bg-slate-50 dark:hover:bg-[#181824] border border-slate-200 dark:border-[#1e1e2e] text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 transition-all hover:translate-y-0.5 shrink-0 shadow-xs"
          >
            <span>{language === "fr" ? "Voir les Certificats" : "Explore Credentials"}</span>
            <ArrowDown className="w-4 h-4 text-teal-600 dark:text-[#00d4aa]" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================= REUSABLE GLASSMORPHISM TIMELINE CARD ================= */
interface TimelineCardProps {
  item: EducationItem;
  language: "fr" | "en";
  theme: string;
  isExpanded: boolean;
  onToggle: () => void;
  isHovered: boolean;
}

function TimelineCard({
  item,
  language,
  isExpanded,
  onToggle,
  isHovered,
}: TimelineCardProps) {
  return (
    <div
      className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 relative backdrop-blur-xl ${
        item.isCurrent
          ? "bg-white/90 dark:bg-[#13111c]/90 border-fuchsia-500/40 dark:border-fuchsia-500/40 shadow-lg dark:shadow-[0_8px_30px_rgba(217,70,239,0.18)] ring-1 ring-fuchsia-500/25"
          : "bg-white/80 dark:bg-[#12121a]/85 border-slate-200/90 dark:border-[#1e1e2e] shadow-sm hover:border-purple-500/40 dark:hover:border-purple-500/40 dark:shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
      } ${isHovered ? "-translate-y-1.5 shadow-xl" : ""}`}
    >
      {/* Top Header Row: School Crest Badge + Period + Status */}
      <div className="flex items-start justify-between gap-4 mb-4">
        {/* Circular Frosted Badge for School Logo */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-white/95 p-2 border border-slate-200/80 dark:border-white/20 shadow-md flex items-center justify-center shrink-0">
          <img
            src={item.logo}
            alt={item.school}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Period & Status Badges */}
        <div className="flex flex-col items-end gap-1.5">
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-[#1c1a29] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 shadow-xs">
            {item.period[language]}
          </span>

          {item.badge && (
            <span
              className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                item.isCurrent
                  ? "bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300 border border-fuchsia-500/30"
                  : "bg-teal-500/10 text-teal-700 dark:text-[#00d4aa] border border-teal-500/20"
              }`}
            >
              {item.isCurrent && (
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse" />
              )}
              {item.badge[language]}
            </span>
          )}
        </div>
      </div>

      {/* Degree Title */}
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#e8e8ed] leading-snug mb-1">
        {item.degree[language]}
      </h3>

      {/* Major / Filière */}
      <div className="flex items-center gap-1.5 mb-2.5 text-sm font-semibold text-purple-700 dark:text-purple-400">
        <Sparkles className="w-3.5 h-3.5 shrink-0" />
        <span>{item.major[language]}</span>
      </div>

      {/* Institution Name */}
      <p className="text-xs sm:text-sm text-slate-500 dark:text-[#9898a8] mb-4 leading-relaxed font-medium">
        {item.institutionFull[language]}
      </p>

      {/* Coursework Modules (If applicable, e.g. EST Salé and EST Nador) */}
      {item.courses && (
        <div className="pt-3 border-t border-slate-100 dark:border-[#1e1e2e]">
          <button
            type="button"
            onClick={onToggle}
            className="w-full flex items-center justify-between text-xs font-mono font-semibold text-slate-600 dark:text-[#9898a8] hover:text-purple-600 dark:hover:text-[#00d4aa] transition-colors cursor-pointer py-1"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>
                {language === "fr"
                  ? `Ce que j'ai étudié (${item.courses[language].length} modules)`
                  : `Core Coursework & Skills (${item.courses[language].length} modules)`}
              </span>
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {/* Collapsible Coursework Grid */}
          {isExpanded && (
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs animate-in fade-in duration-200">
              {item.courses[language].map((course, cIdx) => (
                <li
                  key={cIdx}
                  className="flex items-start gap-2 p-2 rounded-xl bg-slate-50/80 dark:bg-[#181824]/80 border border-slate-100 dark:border-white/5 text-slate-700 dark:text-[#c4c4d4] leading-snug"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
