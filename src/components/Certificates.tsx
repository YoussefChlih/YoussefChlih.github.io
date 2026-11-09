"use client";

import React, { useState, useRef, useMemo } from "react";
import Image from "next/image";
import {
  ExternalLink,
  FileText,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Eye,
  X,
  Sparkles,
  Award,
  ShieldCheck,
  Play,
  Pause,
  Download,
  Calendar,
  Search
} from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Certificate01Icon,
  Award01Icon,
  CpuIcon,
  CodeIcon,
  Database01Icon
} from "@hugeicons/core-free-icons";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import CardSwap, { Card, CardSwapRef } from "@/components/CardSwap";
import { certificatesData, CertificateItem } from "@/data/certificatesData";

type CategoryFilter = "ALL" | "ML / AI" | "Data Engineering" | "SQL / Databases" | "Python Programming";

const CATEGORIES: { id: CategoryFilter; labelEn: string; labelFr: string }[] = [
  { id: "ALL", labelEn: "All Credentials", labelFr: "Tous les Certificats" },
  { id: "ML / AI", labelEn: "ML & AI", labelFr: "ML & IA" },
  { id: "Data Engineering", labelEn: "Data Engineering", labelFr: "Ingénierie Données" },
  { id: "SQL / Databases", labelEn: "SQL & Databases", labelFr: "SQL & Bases de Données" },
  { id: "Python Programming", labelEn: "Python", labelFr: "Python" }
];

export default function Certificates() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("ALL");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedModalCert, setSelectedModalCert] = useState<CertificateItem | null>(null);
  const [modalViewMode, setModalViewMode] = useState<"certificate" | "badge">("certificate");
  const [isAutoplay, setIsAutoplay] = useState(true);

  const cardSwapRef = useRef<CardSwapRef>(null);

  // Close modal on Escape and lock background scroll
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedModalCert(null);
    };
    if (selectedModalCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedModalCert]);

  // Filter certificates based on category
  const filteredCerts = useMemo(() => {
    if (activeCategory === "ALL") return certificatesData;
    return certificatesData.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  // Ensure activeIndex is in bounds
  const currentCert = filteredCerts[activeIndex] || filteredCerts[0] || certificatesData[0];

  const handleCategoryChange = (category: CategoryFilter) => {
    setActiveCategory(category);
    setActiveIndex(0);
  };

  const handleCopyId = (id?: string) => {
    if (!id) return;
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCategoryIcon = (category: CertificateItem["category"]) => {
    switch (category) {
      case "ML / AI":
        return CpuIcon;
      case "Data Engineering":
        return Award01Icon;
      case "SQL / Databases":
        return Database01Icon;
      case "Python Programming":
      default:
        return CodeIcon;
    }
  };

  return (
    <section
      id="certificates"
      className="py-24 px-6 border-t border-slate-200/80 dark:border-[#1e1e2e]/60 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/5 dark:bg-[#00d4aa]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold text-teal-700 dark:text-[#00d4aa] bg-teal-50 dark:bg-[#00d4aa]/10 px-2.5 py-1 rounded border border-teal-200 dark:border-[#00d4aa]/20 font-mono">
                08
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-[#e8e8ed] tracking-tight">
                {language === "fr" ? "Certifications & Diplômes" : "Certifications & Credentials"}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-500 dark:text-[#9898a8] max-w-2xl">
              {language === "fr"
                ? "13 certifications professionnelles vérifiées couvrant le Machine Learning, MLOps, l'ingénierie des données, le Big Data, SQL avancé et la programmation Python."
                : "13 verified industry certifications across Machine Learning, MLOps, Data Engineering, Big Data pipelines, Advanced SQL, and Python programming."}
            </p>
          </div>

          {/* Quick Counter Badge */}
          <div className="flex items-center gap-2 self-start md:self-auto px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#181824] border border-slate-200 dark:border-[#1e1e2e] text-xs font-mono text-slate-700 dark:text-slate-300">
            <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-[#00d4aa]" />
            <span>
              <strong>13</strong> {language === "fr" ? "Accréditations Vérifiées" : "Verified Credentials"}
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            const count =
              cat.id === "ALL"
                ? certificatesData.length
                : certificatesData.filter((c) => c.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-teal-600 text-white dark:bg-[#00d4aa] dark:text-[#0a0a0f] shadow-sm font-semibold scale-102"
                    : "bg-white dark:bg-[#12121a] text-slate-600 dark:text-[#9898a8] border border-slate-200 dark:border-[#1e1e2e] hover:border-teal-500/40 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span>{language === "fr" ? cat.labelFr : cat.labelEn}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected
                      ? "bg-black/15 text-white dark:bg-black/20 dark:text-black font-bold"
                      : "bg-slate-100 dark:bg-[#1a1a26] text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: React Bits <CardSwap /> 3D Stack */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* CardSwap Stage Container */}
            <div className="w-full relative h-[380px] sm:h-[440px] flex items-center justify-center">
              <CardSwap
                key={activeCategory} // Reset deck when category filter changes
                ref={cardSwapRef}
                width={460}
                height={330}
                cardDistance={55}
                verticalDistance={48}
                depth={75}
                skewAmount={5}
                visibleCards={4}
                delay={4200}
                autoplay={isAutoplay}
                pauseOnHover={true}
                draggable={true}
                speed={1}
                bounce={0.35}
                parallax={0.55}
                hoverSpread={0.14}
                dim={0.42}
                cardRadius={20}
                theme={theme === "dark" ? "dark" : "light"}
                onChange={(index) => setActiveIndex(index)}
                onCardClick={(index) => {
                  setActiveIndex(index);
                  setSelectedModalCert(filteredCerts[index]);
                }}
                className="w-full h-full"
              >
                {filteredCerts.map((cert) => {
                  const IconComponent = getCategoryIcon(cert.category);
                  return (
                    <Card key={cert.id} className="cursor-pointer group">
                      <div className="card-swap-item">
                        {/* Header Bar */}
                        <div className="card-swap-head justify-between">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="card-swap-icon">
                              <HugeiconsIcon icon={IconComponent} size={14} strokeWidth={1.8} />
                            </span>
                            <span className="card-swap-title font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-100">
                              {cert.title}
                            </span>
                          </div>
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-700 dark:text-[#00d4aa] border border-teal-500/20 shrink-0 font-bold">
                            {cert.issuer.includes("Coursera")
                              ? "Coursera"
                              : cert.issuer.includes("365")
                              ? "365 Data"
                              : cert.issuer.includes("Cisco")
                              ? "Cisco"
                              : "IBM"}
                          </span>
                        </div>

                        {/* Certificate Image Media */}
                        <div className="card-swap-media relative group/media overflow-hidden">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            draggable={false}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/media:scale-[1.03]"
                          />
                          {/* Hover Overlay Affordance */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                            <span className="text-[11px] text-white/95 flex items-center gap-1.5 font-medium bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                              <Eye className="w-3.5 h-3.5 text-teal-400" />
                              {language === "fr" ? "Agrandir le certificat" : "Click to inspect"}
                            </span>
                            <span className="text-[10px] text-teal-300 font-mono bg-teal-950/80 px-2 py-0.5 rounded border border-teal-500/30">
                              {cert.date[language]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </CardSwap>
            </div>

            {/* Deck Controls (Prev / Next, Autoplay toggle, Drag Hint) */}
            <div className="flex items-center justify-between w-full max-w-[460px] mt-4 px-2 text-xs text-slate-500 dark:text-[#5c5c6e]">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => cardSwapRef.current?.prev()}
                  className="w-9 h-9 rounded-xl bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] hover:border-teal-500/40 text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-[#00d4aa] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Previous card"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => cardSwapRef.current?.next()}
                  className="w-9 h-9 rounded-xl bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] hover:border-teal-500/40 text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-[#00d4aa] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
                  aria-label="Next card"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsAutoplay((prev) => !prev)}
                  className={`px-2.5 py-1.5 rounded-lg border text-[11px] font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                    isAutoplay
                      ? "border-teal-500/30 text-teal-700 dark:text-[#00d4aa] bg-teal-500/10"
                      : "border-slate-200 dark:border-[#1e1e2e] text-slate-500 dark:text-slate-400 bg-white dark:bg-[#12121a]"
                  }`}
                  title={isAutoplay ? "Pause autoplay" : "Resume autoplay"}
                >
                  {isAutoplay ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>{isAutoplay ? "Auto" : "Paused"}</span>
                </button>
              </div>

              {/* Indicator & Drag Hint */}
              <div className="flex items-center gap-2 text-[11px] font-mono">
                <span className="text-slate-700 dark:text-slate-300 font-bold">
                  {activeIndex + 1}
                </span>
                <span>/</span>
                <span>{filteredCerts.length}</span>
                <span className="hidden sm:inline text-slate-400 dark:text-slate-600 ml-1">
                  • {language === "fr" ? "Glisser ou cliquer" : "Drag or click card"}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Active Certificate Inspector / Detail Card */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#12121a] border border-slate-200/90 dark:border-[#1e1e2e] shadow-sm dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] relative overflow-hidden transition-all">
              {/* Corner Ambient Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 dark:bg-[#00d4aa]/10 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16" />

              {/* Header: Category + Index Badge */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-[#00d4aa] bg-teal-50 dark:bg-[#00d4aa]/10 px-3 py-1 rounded-full border border-teal-200 dark:border-[#00d4aa]/25 font-mono flex items-center gap-1.5">
                  <HugeiconsIcon icon={getCategoryIcon(currentCert.category)} size={13} strokeWidth={2} />
                  {currentCert.category}
                </span>

                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  ID: #{String(activeIndex + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Certificate Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#e8e8ed] mb-3 leading-snug">
                {currentCert.title}
              </h3>

              {/* Issuer & Date Metadata */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600 dark:text-[#9898a8] mb-5 pb-5 border-b border-slate-100 dark:border-[#1e1e2e]">
                <div className="flex items-center gap-1.5 font-medium text-slate-900 dark:text-slate-200">
                  <Award className="w-4 h-4 text-teal-600 dark:text-[#00d4aa]" />
                  <span>{currentCert.issuer}</span>
                </div>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <div className="flex items-center gap-1.5 font-mono text-slate-500 dark:text-[#7a7a8c]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{currentCert.date[language]}</span>
                </div>
              </div>

              {/* Credential ID Copy Bar */}
              {currentCert.credentialId && (
                <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-[#181824] border border-slate-200/80 dark:border-[#222232] mb-5 text-xs font-mono">
                  <div className="flex items-center gap-2 truncate mr-2">
                    <span className="text-slate-400 dark:text-slate-500">Credential ID:</span>
                    <span className="text-slate-800 dark:text-slate-200 font-semibold truncate select-all">
                      {currentCert.credentialId}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyId(currentCert.credentialId)}
                    className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-[#28283a] text-slate-600 dark:text-slate-300 transition-colors shrink-0 flex items-center gap-1 text-[11px] cursor-pointer"
                    title="Copy Credential ID"
                  >
                    {copiedId === currentCert.credentialId ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-teal-600 dark:text-[#00d4aa]" />
                        <span className="text-teal-600 dark:text-[#00d4aa] font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Rich Description (FR or EN) */}
              <p className="text-sm leading-relaxed text-slate-600 dark:text-[#9898a8] mb-6">
                {currentCert.description[language]}
              </p>

              {/* Acquired Skills Pills */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2 font-mono">
                  {language === "fr" ? "Compétences clés validées" : "Key Competencies Mastered"}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentCert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#181824] text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-[#1e1e2e]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* External Verification URL */}
                {currentCert.verificationUrl && (
                  <a
                    href={currentCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 dark:bg-[#00d4aa] dark:hover:bg-[#00bb96] text-white dark:text-[#0a0a0f] text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all hover:scale-102 active:scale-98"
                  >
                    <span>{language === "fr" ? "Vérifier le diplôme" : "Verify Credential"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {/* Credly Badge Link if available */}
                {currentCert.credlyUrl && (
                  <a
                    href={currentCert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all hover:scale-102"
                  >
                    <span>Credly Badge</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {/* View Full PDF File */}
                <a
                  href={currentCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#181824] hover:bg-slate-200 dark:hover:bg-[#202030] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#1e1e2e] text-xs font-medium flex items-center gap-1.5 transition-all hover:scale-102"
                >
                  <FileText className="w-3.5 h-3.5 text-teal-600 dark:text-[#00d4aa]" />
                  <span>{language === "fr" ? "Voir le PDF" : "View Original PDF"}</span>
                </a>

                {/* Lightbox / Zoom Preview Button */}
                <button
                  type="button"
                  onClick={() => setSelectedModalCert(currentCert)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-[#181824] hover:bg-slate-200 dark:hover:bg-[#202030] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1e1e2e] transition-all cursor-pointer"
                  title="Full Preview"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULL LIGHTBOX / PREVIEW MODAL */}
      {selectedModalCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedModalCert(null)}
        >
          <div
            className="bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 dark:border-[#1e1e2e]">
              <div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-teal-600 dark:text-[#00d4aa]">
                  {selectedModalCert.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-[#e8e8ed] mt-0.5">
                  {selectedModalCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedModalCert(null)}
                className="w-9 h-9 rounded-full bg-slate-100 dark:bg-[#181824] hover:bg-slate-200 dark:hover:bg-[#252538] text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Image Viewer */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col items-center justify-center bg-slate-50 dark:bg-black/40">
              {/* Badge Toggle for IBM Certificate with Badge */}
              {selectedModalCert.badgeImage && (
                <div className="flex items-center gap-2 mb-4 bg-white dark:bg-[#181824] p-1 rounded-xl border border-slate-200 dark:border-[#1e1e2e]">
                  <button
                    type="button"
                    onClick={() => setModalViewMode("certificate")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      modalViewMode === "certificate"
                        ? "bg-teal-600 dark:bg-[#00d4aa] text-white dark:text-black font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Certificate
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalViewMode("badge")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      modalViewMode === "badge"
                        ? "bg-teal-600 dark:bg-[#00d4aa] text-white dark:text-black font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Digital Credly Badge
                  </button>
                </div>
              )}

              <div className="w-full max-w-3xl rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg bg-white dark:bg-[#100e15]">
                <img
                  src={
                    modalViewMode === "badge" && selectedModalCert.badgeImage
                      ? selectedModalCert.badgeImage
                      : selectedModalCert.image
                  }
                  alt={selectedModalCert.title}
                  className="w-full h-auto object-contain max-h-[60vh] mx-auto"
                />
              </div>

              {/* Description inside Modal */}
              <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-[#9898a8] max-w-2xl text-center leading-relaxed">
                {selectedModalCert.description[language]}
              </p>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-[#1e1e2e] flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-[#12121a]">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                {selectedModalCert.issuer} • {selectedModalCert.date[language]}
              </div>

              <div className="flex items-center gap-2">
                {selectedModalCert.verificationUrl && (
                  <a
                    href={selectedModalCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 dark:bg-[#00d4aa] dark:hover:bg-[#00bb96] text-white dark:text-black text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>{language === "fr" ? "Vérifier en ligne" : "Verify Online"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={selectedModalCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-[#181824] hover:bg-slate-200 dark:hover:bg-[#202030] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#1e1e2e] text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{language === "fr" ? "Télécharger le PDF" : "Download PDF"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

