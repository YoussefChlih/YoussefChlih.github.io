"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Download, Menu, X, ArrowUpRight, Sun, Moon, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import GooeyNav from "@/components/GooeyNav";

const NAV_ITEMS = [
  { label: "About", href: "#about", num: "01" },
  { label: "Experience", href: "#experience", num: "02" },
  { label: "Projects", href: "#projects", num: "03" },
  { label: "Skills", href: "#skills", num: "04" },
  { label: "Languages", href: "#languages", num: "05" },
  { label: "Education", href: "#education", num: "06" },
  { label: "Certificates", href: "#certificates", num: "07" },
];

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = useMemo(
    () => [
      { label: language === "fr" ? "À Propos" : "About", href: "#about", num: "01" },
      { label: language === "fr" ? "Expérience" : "Experience", href: "#experience", num: "02" },
      { label: language === "fr" ? "Projets" : "Projects", href: "#projects", num: "03" },
      { label: language === "fr" ? "Compétences" : "Skills", href: "#skills", num: "04" },
      { label: language === "fr" ? "Langues" : "Languages", href: "#languages", num: "05" },
      { label: language === "fr" ? "Formation" : "Education", href: "#education", num: "06" },
      { label: language === "fr" ? "Certificats" : "Certificates", href: "#certificates", num: "07" },
    ],
    [language]
  );

  const activeIndex = useMemo(
    () => navItems.findIndex((item) => item.href === activeSection),
    [navItems, activeSection]
  );

  // Scroll detection to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_ITEMS.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement | null;
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].href);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#0a0a0f]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-[#1e1e2e] py-2.5 shadow-xs"
          : "bg-transparent py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="#hero"
          onClick={() => setMobileMenuOpen(false)}
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-[#e8e8ed] hover:text-[#0d9488] dark:hover:text-[#00d4aa] transition-colors shrink-0"
        >
          Y<span className="text-[#0d9488] dark:text-[#00d4aa]">.</span>C
        </Link>

        {/* Desktop Gooey Navigation (>= 1024px) */}
        <div className="hidden lg:flex items-center justify-center">
          <GooeyNav
            items={navItems}
            activeIndex={activeIndex >= 0 ? activeIndex : 0}
            theme={theme === "dark" ? "dark" : "light"}
            size="sm"
            frame={true}
            particleCount={14}
            spread={48}
            animationTime={550}
            timeVariance={200}
            gooeyness={0.55}
            wobble={0.45}
            hoverEffect={true}
            color={theme === "dark" ? "#00d4aa" : "#0d9488"}
            activeTextColor={theme === "dark" ? "#0a0a0f" : "#ffffff"}
            colors={
              theme === "dark"
                ? ["#00d4aa", "#00b4d8", "#38bdf8"]
                : ["#0d9488", "#14b8a6", "#0284c7"]
            }
          />
        </div>

        {/* Desktop Actions (>= 1024px) */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] text-slate-700 dark:text-[#e8e8ed] hover:border-[#0d9488] dark:hover:border-[#00d4aa] transition-all hover:scale-105 cursor-pointer"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center rounded-lg bg-slate-100 dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                language === "en"
                  ? "bg-[#0d9488] dark:bg-[#00d4aa] text-white dark:text-[#0a0a0f] font-bold shadow-[0_0_10px_rgba(13,148,136,0.3)] dark:shadow-[0_0_10px_rgba(0,212,170,0.3)]"
                  : "text-slate-600 hover:text-slate-900 dark:text-[#9898a8] dark:hover:text-[#e8e8ed]"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("fr")}
              className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                language === "fr"
                  ? "bg-[#0d9488] dark:bg-[#00d4aa] text-white dark:text-[#0a0a0f] font-bold shadow-[0_0_10px_rgba(13,148,136,0.3)] dark:shadow-[0_0_10px_rgba(0,212,170,0.3)]"
                  : "text-slate-600 hover:text-slate-900 dark:text-[#9898a8] dark:hover:text-[#e8e8ed]"
              }`}
              aria-label="Passer en Français"
            >
              FR
            </button>
          </div>

          <a
            href="/CV_CHLIH_YOUSSEF.pdf"
            download="CV_CHLIH_YOUSSEF.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 dark:text-[#e8e8ed] bg-slate-100 dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] hover:border-[#0d9488] dark:hover:border-[#00d4aa] hover:bg-[#0d9488]/10 dark:hover:bg-[#00d4aa]/10 hover:text-[#0d9488] dark:hover:text-[#00d4aa] transition-all"
          >
            <Download className="w-3.5 h-3.5 text-[#0d9488] dark:text-[#00d4aa]" />
            CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#0d9488] dark:text-[#00d4aa] bg-[#0d9488]/10 dark:bg-[#00d4aa]/10 border border-[#0d9488]/30 dark:border-[#00d4aa]/30 hover:bg-[#0d9488]/20 dark:hover:bg-[#00d4aa]/25 hover:border-[#0d9488]/60 dark:hover:border-[#00d4aa]/60 transition-all shadow-xs"
          >
            {language === "fr" ? "Me Contacter" : "Get in Touch"}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile & Tablet Header Controls (< 1024px) */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Theme Toggle Mobile */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] text-slate-700 dark:text-[#e8e8ed] cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Language Switcher Mobile */}
          <div className="flex items-center rounded-xl bg-slate-100 dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded-lg text-xs transition-all cursor-pointer ${
                language === "en"
                  ? "bg-[#0d9488] dark:bg-[#00d4aa] text-white dark:text-[#0a0a0f] font-bold"
                  : "text-slate-600 dark:text-[#9898a8]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("fr")}
              className={`px-2 py-1 rounded-lg text-xs transition-all cursor-pointer ${
                language === "fr"
                  ? "bg-[#0d9488] dark:bg-[#00d4aa] text-white dark:text-[#0a0a0f] font-bold"
                  : "text-slate-600 dark:text-[#9898a8]"
              }`}
            >
              FR
            </button>
          </div>

          {/* Hamburger / Close Menu Trigger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-[#e8e8ed] hover:bg-slate-100 dark:hover:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-teal-600 dark:text-[#00d4aa]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Full-screen Drawer Overlay (< 1024px) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="lg:hidden fixed inset-0 top-[56px] sm:top-[64px] z-40 bg-white/95 dark:bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-slate-200 dark:border-[#1e1e2e] flex flex-col justify-between overflow-y-auto"
        >
          {/* Navigation Links List */}
          <div className="p-5 sm:p-6 flex flex-col gap-1.5 flex-1">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              {language === "fr" ? "Navigation" : "Menu Navigation"}
            </span>

            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? "bg-teal-500/10 dark:bg-[#00d4aa]/15 text-[#0d9488] dark:text-[#00d4aa] border border-teal-500/20 dark:border-[#00d4aa]/25 font-bold"
                      : "text-slate-700 dark:text-[#9898a8] hover:bg-slate-100 dark:hover:bg-[#12121a] hover:text-slate-900 dark:hover:text-[#e8e8ed]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-teal-600 dark:bg-[#00d4aa] text-white dark:text-[#0a0a0f]"
                          : "bg-slate-100 dark:bg-[#1a1a26] text-slate-400 dark:text-slate-500"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span>{item.label}</span>
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#0d9488] dark:bg-[#00d4aa] animate-pulse" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Drawer Footer Actions (CV Download & Contact) */}
          <div className="p-5 sm:p-6 border-t border-slate-200/80 dark:border-[#1e1e2e]/80 bg-slate-50/50 dark:bg-[#0e0e15]/50 flex flex-col gap-3">
            <a
              href="/CV_CHLIH_YOUSSEF.pdf"
              download="CV_CHLIH_YOUSSEF.pdf"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-[#e8e8ed] bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] shadow-xs hover:border-teal-500/40"
            >
              <Download className="w-4 h-4 text-[#0d9488] dark:text-[#00d4aa]" />
              {language === "fr" ? "Télécharger le CV (PDF)" : "Download Resume (PDF)"}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white dark:text-[#0a0a0f] bg-[#0d9488] dark:bg-[#00d4aa] hover:bg-[#0f766e] dark:hover:bg-[#00e6b8] shadow-sm"
            >
              <span>{language === "fr" ? "Me Contacter" : "Get in Touch"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
