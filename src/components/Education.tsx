"use client";

import { GraduationCap, Award, ArrowDown, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface EducationItem {
  degreeEn: string;
  degreeFr: string;
  institutionEn: string;
  institutionFr: string;
  period: string;
  descriptionEn: string;
  descriptionFr: string;
}

const EDUCATION_ITEMS: EducationItem[] = [
  {
    degreeEn: "B.Sc. in Big Data & Artificial Intelligence",
    degreeFr: "Licence Professionnelle en Big Data & Intelligence Artificielle",
    institutionEn: "École Supérieure de Technologie (EST) Salé — Final Year",
    institutionFr: "École Supérieure de Technologie (EST) Salé — Dernière Année",
    period: "2025 — 2026",
    descriptionEn: "Advanced coursework in Big Data Architectures, Machine Learning, Deep Learning, Cloud Computing, and Multi-Agent AI Pipelines.",
    descriptionFr: "Formation approfondie en architectures Big Data, Machine Learning, Deep Learning, Cloud Computing et pipelines IA multi-agents."
  },
  {
    degreeEn: "Associate Degree in AI & Data Engineering (DUT)",
    degreeFr: "Diplôme Universitaire de Technologie (DUT) en IA & Ingénierie des Données",
    institutionEn: "École Supérieure de Technologie (EST) Nador",
    institutionFr: "École Supérieure de Technologie (EST) Nador",
    period: "2023 — 2025",
    descriptionEn: "Comprehensive curriculum in Data Engineering, Relational & NoSQL Databases, Algorithmics, Statistics, and Software Development.",
    descriptionFr: "Cursus complet en ingénierie des données, bases de données relationnelles & NoSQL, algorithmique, statistiques et développement logiciel."
  },
  {
    degreeEn: "High School Diploma — Mathematical Sciences (Baccalauréat)",
    degreeFr: "Baccalauréat Sciences Mathématiques A",
    institutionEn: "Lycée Moulay Rachid — Kenitra",
    institutionFr: "Lycée Moulay Rachid — Kénitra",
    period: "2022 — 2023",
    descriptionEn: "Rigorous focus on advanced mathematics, algorithmic logic, calculus, and theoretical physics.",
    descriptionFr: "Formation rigoureuse axée sur les mathématiques approfondies, la logique algorithmique, l'analyse et la physique théorique."
  },
];

export default function Education() {
  const { language } = useLanguage();

  return (
    <section id="education" className="py-24 px-6 border-t border-slate-200/80 dark:border-[#1e1e2e]/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-bold text-teal-700 dark:text-[#00d4aa] bg-teal-50 dark:bg-[#00d4aa]/10 px-2.5 py-1 rounded border border-teal-200 dark:border-[#00d4aa]/20 font-mono">
            07
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#e8e8ed] tracking-tight">
            {language === "fr" ? "Formation Académique" : "Academic Background"}
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-200 dark:from-[#1e1e2e] to-transparent ml-2" />
        </div>

        {/* Academic Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] hover:border-teal-500/40 dark:hover:border-[#00d4aa]/40 hover:bg-slate-50 dark:hover:bg-[#181824] transition-all shadow-xs hover:shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-teal-600 dark:text-[#00d4aa] font-mono bg-teal-50 dark:bg-[#00d4aa]/10 px-2.5 py-0.5 rounded border border-teal-200 dark:border-[#00d4aa]/20">
                    {item.period}
                  </span>
                  <GraduationCap className="w-5 h-5 text-teal-600 dark:text-[#00d4aa]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-[#e8e8ed] mb-1.5 leading-snug">
                  {language === "fr" ? item.degreeFr : item.degreeEn}
                </h3>
                <p className="text-sm font-medium text-slate-700 dark:text-[#b4b4c4] mb-3">
                  {language === "fr" ? item.institutionFr : item.institutionEn}
                </p>
                <p className="text-xs text-slate-500 dark:text-[#7a7a8c] leading-relaxed">
                  {language === "fr" ? item.descriptionFr : item.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition banner to Certificates */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent border border-teal-500/20 dark:border-[#00d4aa]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 dark:bg-[#00d4aa] text-white dark:text-[#0a0a0f] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-[#e8e8ed]">
                {language === "fr" ? "13 Certifications Professionnelles Vérifiées" : "13 Verified Industry Certifications"}
              </h4>
              <p className="text-xs text-slate-500 dark:text-[#9898a8]">
                {language === "fr"
                  ? "Explorez la pile interactive 3D CardSwap de certifications ci-dessous"
                  : "Explore the interactive 3D CardSwap stack of credentials below"}
              </p>
            </div>
          </div>
          <a
            href="#certificates"
            className="px-4 py-2 rounded-xl bg-white dark:bg-[#12121a] hover:bg-slate-50 dark:hover:bg-[#181824] border border-slate-200 dark:border-[#1e1e2e] text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 transition-all hover:translate-y-0.5 shrink-0"
          >
            <span>{language === "fr" ? "Explorer les Certificats" : "Explore Credentials"}</span>
            <ArrowDown className="w-3.5 h-3.5 text-teal-600 dark:text-[#00d4aa]" />
          </a>
        </div>
      </div>
    </section>
  );
}
