"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Building2,
  Sparkles,
} from "lucide-react";
import { ExperienceItem } from "@/data/experienceData";
import { useLanguage } from "@/context/LanguageContext";
import { ExperienceIllustration } from "./ExperienceIllustration";

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
  milestoneNumber: string;
  onIntersect?: (index: number) => void;
}

export function ExperienceCard({
  experience,
  index,
  milestoneNumber,
  onIntersect,
}: ExperienceCardProps) {
  const { language } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasRevealed, setHasRevealed] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setHasRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasRevealed(true);
            if (onIntersect) onIntersect(index);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentElem = cardRef.current;
    if (currentElem) observer.observe(currentElem);

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [index, onIntersect]);

  const roleText = experience.role[language];
  const periodText = experience.period[language];
  const locationText = experience.location[language];
  const contextText = experience.context[language];
  const achievements = experience.achievements[language];
  const projectTitle = experience.projectTitle[language];

  // HB Dev featured: 4 bullets concise, expandable to all 7
  const initialBulletsCount = experience.isFeatured ? 4 : 3;
  const displayedAchievements =
    expanded || !experience.isFeatured
      ? achievements
      : achievements.slice(0, initialBulletsCount);

  return (
    <article
      id={`experience-${experience.id}`}
      ref={cardRef}
      className={`relative w-full rounded-3xl lg:rounded-[32px] p-6 sm:p-8 lg:p-10 transition-all duration-700 ease-out border ${
        experience.isFeatured
          ? "bg-white/95 dark:bg-[#12121a]/95 border-teal-200/90 dark:border-teal-500/30 shadow-[0_16px_48px_rgba(13,148,136,0.08)] dark:shadow-[0_16px_48px_rgba(0,212,170,0.06)] ring-1 ring-teal-500/10 dark:ring-teal-400/10"
          : "bg-white/90 dark:bg-[#12121a]/90 border-slate-200/90 dark:border-[#1e1e2e] shadow-[0_12px_36px_rgba(15,23,42,0.04)] dark:shadow-none"
      } hover:shadow-[0_20px_56px_rgba(15,23,42,0.08)] dark:hover:shadow-[0_20px_56px_rgba(0,0,0,0.4)] hover:border-teal-500/40 dark:hover:border-teal-500/40 ${
        hasRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Top Header Badge Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-slate-100 dark:border-white/5">
        <div className="flex flex-wrap items-center gap-3">
          {/* Milestone Number Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-[#181824] border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
            <span className="text-teal-600 dark:text-[#00d4aa]">Milestone</span>
            <span className="w-1 h-1 rounded-full bg-teal-500 dark:bg-[#00d4aa]" />
            <span>{milestoneNumber}</span>
          </div>

          {/* Featured Case Badge for HB Dev */}
          {experience.isFeatured && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-xs font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>
                {language === "en"
                  ? "Featured Case Study & Technical Lead"
                  : "Étude de Cas Majeure & Lead Technique"}
              </span>
            </div>
          )}
        </div>

        {/* Date & Location Pill */}
        <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5 font-mono text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-200/80 dark:border-slate-800">
            <Calendar className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            {periodText}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            {locationText}
          </span>
        </div>
      </div>

      {/* Experience Details: Role, Context, Deliverables, and Stack */}
      <div className="flex flex-col gap-5">
        {/* Company Identity & Role */}
        <div>
          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-12 h-12 rounded-xl bg-slate-900 dark:bg-black/80 flex items-center justify-center p-2 shadow-sm shrink-0 border border-slate-800 dark:border-slate-700">
              {!logoError ? (
                <Image
                  src={experience.logoSrc}
                  alt={`${experience.company} Logo`}
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <Building2 className="w-6 h-6 text-teal-400" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
                  {experience.company}
                </h3>
                {experience.companyUrl && (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    aria-label={`Visit ${experience.company} website`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-xs sm:text-sm font-mono font-semibold text-teal-700 dark:text-teal-400 tracking-wide">
                {projectTitle}
              </p>
            </div>
          </div>

          {/* Role Title */}
          <h4 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-slate-100 tracking-tight mt-1 mb-3">
            {roleText}
          </h4>
        </div>

        {/* Context Quote Block */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-2 border-teal-500/60 pl-3.5 bg-slate-50/80 dark:bg-white/[0.04] py-2 rounded-r-lg max-w-4xl">
          {contextText}
        </p>

        {/* Achievements / Deliverables */}
        <div className="my-1">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {displayedAchievements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Expand / Collapse toggle for HB Dev */}
          {experience.isFeatured && achievements.length > initialBulletsCount && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-300 mt-4 transition-colors font-mono cursor-pointer"
            >
              {expanded ? (
                <>
                  <span>{language === "en" ? "Show concise overview" : "Afficher la vue concise"}</span>
                  <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <span>
                    {language === "en"
                      ? `View all ${achievements.length} achievements & deliverables`
                      : `Voir toutes les ${achievements.length} réalisations & livrables`}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-teal-400/50 hover:bg-teal-50/80 dark:hover:bg-teal-950/40 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* FULL LARGE IMAGE PLACED DIRECTLY UNDER THE EXPERIENCE */}
      <ExperienceIllustration
        type={experience.fallbackType}
        imagePath={experience.illustrationPath}
        alt={`${experience.company} - ${projectTitle}`}
      />
    </article>
  );
}
