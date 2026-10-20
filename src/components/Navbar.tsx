"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Download, Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import GooeyNav from "@/components/GooeyNav";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Soft Skills", href: "#soft-skills" },
  { label: "Languages", href: "#languages" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = useMemo(
    () => [
      { label: language === "fr" ? "À Propos" : "About", href: "#about" },
      { label: language === "fr" ? "Expérience" : "Experience", href: "#experience" },
      { label: language === "fr" ? "Projets" : "Projects", href: "#projects" },
      { label: language === "fr" ? "Compétences" : "Skills", href: "#skills" },
      { label: "Soft Skills", href: "#soft-skills" },
      { label: language === "fr" ? "Langues" : "Languages", href: "#languages" },
      { label: language === "fr" ? "Formation" : "Education", href: "#education" },
    ],
    [language]
  );

  const activeIndex = useMemo(
    () => navItems.findIndex((item) => item.href === activeSection),
    [navItems, activeSection]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-[#0a0a0f]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-[#1e1e2e] py-2.5 shadow-xs"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="#hero"
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-[#e8e8ed] hover:text-[#0d9488] dark:hover:text-[#00d4aa] transition-colors shrink-0"
        >
          Y<span className="text-[#0d9488] dark:text-[#00d4aa]">.</span>C
        </Link>

        {/* Desktop Gooey Navigation */}
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

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] text-slate-700 dark:text-[#e8e8ed] hover:border-[#0d9488] dark:hover:border-[#00d4aa] transition-all hover:scale-105"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center rounded-lg bg-slate-100 dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded-md transition-all ${
                language === "en"
                  ? "bg-[#0d9488] dark:bg-[#00d4aa] text-white dark:text-[#0a0a0f] font-bold shadow-[0_0_10px_rgba(13,148,136,0.3)] dark:shadow-[0_0_10px_rgba(0,212,170,0.3)]"
                  : "text-slate-600 hover:text-slate-900 dark:text-[#9898a8] dark:hover:text-[#e8e8ed]"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-2 py-1 rounded-md transition-all ${
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
            Get in Touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] text-slate-700 dark:text-[#e8e8ed]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <div className="flex items-center rounded-lg bg-slate-100 dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-md text-[11px] transition-all ${
                language === "en"
                  ? "bg-[#0d9488] dark:bg-[#00d4aa] text-white dark:text-[#0a0a0f] font-bold"
                  : "text-slate-600 dark:text-[#9898a8]"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-2 py-0.5 rounded-md text-[11px] transition-all ${
                language === "fr"
                  ? "bg-[#0d9488] dark:bg-[#00d4aa] text-white dark:text-[#0a0a0f] font-bold"
                  : "text-slate-600 dark:text-[#9898a8]"
              }`}
            >
              FR
            </button>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-[#9898a8] hover:text-slate-950 dark:hover:text-[#e8e8ed] hover:bg-slate-100 dark:hover:bg-[#12121a]"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white/95 dark:bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-slate-200 dark:border-[#1e1e2e] p-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-700 hover:text-[#0d9488] dark:text-[#9898a8] dark:hover:text-[#00d4aa] py-2 border-b border-slate-200/60 dark:border-[#1e1e2e]/40 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e]">
              <span className="text-xs text-slate-600 dark:text-[#9898a8] font-medium">Theme</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1 rounded bg-slate-200 dark:bg-[#1e1e2e] text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-slate-700" /> Dark Mode
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e]">
              <span className="text-xs text-slate-600 dark:text-[#9898a8] font-medium">Language / Langue</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2.5 py-1 rounded text-xs font-bold ${
                    language === "en"
                      ? "bg-[#0d9488] dark:bg-[#00d4aa] text-white dark:text-[#0a0a0f]"
                      : "text-slate-600 dark:text-[#9898a8] hover:text-slate-900 dark:hover:text-[#e8e8ed]"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("fr")}
                  className={`px-2.5 py-1 rounded text-xs font-bold ${
                    language === "fr"
                      ? "bg-[#0d9488] dark:bg-[#00d4aa] text-white dark:text-[#0a0a0f]"
                      : "text-slate-600 dark:text-[#9898a8] hover:text-slate-900 dark:hover:text-[#e8e8ed]"
                  }`}
                >
                  FR
                </button>
              </div>
            </div>
            <a
              href="/CV_CHLIH_YOUSSEF.pdf"
              download="CV_CHLIH_YOUSSEF.pdf"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-[#e8e8ed] bg-slate-100 dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e]"
            >
              <Download className="w-4 h-4 text-[#0d9488] dark:text-[#00d4aa]" />
              Download Resume (PDF)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-white dark:text-[#0a0a0f] bg-[#0d9488] dark:bg-[#00d4aa] hover:bg-[#0f766e] dark:hover:bg-[#00e6b8]"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
