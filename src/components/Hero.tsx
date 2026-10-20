"use client";

import { useState, useEffect } from "react";
import { Download, Mail, FolderGit2, MapPin, ArrowDown } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { useTheme } from "@/context/ThemeContext";
import TechText from "@/components/TechText";

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const { theme } = useTheme();
  const [align, setAlign] = useState<'left' | 'center'>('left');

  useEffect(() => {
    const handleResize = () => {
      setAlign(window.innerWidth < 1024 ? 'center' : 'left');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const accentColor = theme === 'dark' ? '#00d4aa' : '#0d9488';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 overflow-hidden bg-[#f8fafc] dark:bg-transparent transition-colors duration-300"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-[-25%] right-[-15%] w-[600px] h-[600px] rounded-full bg-teal-500/10 dark:bg-[#00d4aa]/15 blur-[120px] pointer-events-none animate-hero-glow" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/5 dark:bg-[#00d4aa]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left Column: Hero Copy */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-teal-700 dark:text-[#00d4aa] bg-teal-50 dark:bg-[#00d4aa]/10 border border-teal-200 dark:border-[#00d4aa]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500 dark:bg-[#00d4aa] animate-pulse-glow" />
            Available for Opportunities &bull; Remote & Morocco
          </div>

          {/* Heading with React Bits TechText Component */}
          <h1 className="sr-only">Youssef CHLIH — AI &amp; Data Science Engineer</h1>
          <div className="w-full max-w-xl h-24 sm:h-28 lg:h-32 relative mb-4 text-slate-900 dark:text-[#e8e8ed]">
            <TechText
              text="Youssef CHLIH"
              fontFamily='"Space Grotesk", system-ui, -apple-system, sans-serif'
              fontWeight={700}
              fontSize={85}
              letterSpacing={-0.02}
              align={align}
              color="currentColor"
              accentColor={accentColor}
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              intro="none"
              introDuration={2}
              clickKick
              draggable
              guides={false}
              sweep
              speed={1}
            />
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-[#9898a8] mb-6">
            AI &amp; Data Science{" "}
            <span className="text-slate-300 dark:text-[#5c5c6e] mx-2">|</span> Digital Innovation
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#9898a8] leading-relaxed max-w-xl mb-8">
            Final-year B.Sc. student in Big Data &amp; Artificial Intelligence at EST Salé, 
            currently interning at <strong className="text-slate-900 dark:text-[#e8e8ed] font-semibold">HB Dev</strong> on the{" "}
            <em className="text-teal-600 dark:text-[#00d4aa] not-italic font-semibold">Mentora AI</em> educational platform. 
            Engineering automated multi-agent pipelines (LangChain, LangGraph, LangSmith) and 
            combining Computer Vision with enterprise data governance and ETL.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-teal-600 dark:bg-[#00d4aa] text-white dark:text-[#0a0a0f] hover:bg-teal-700 dark:hover:bg-[#00e6b8] hover:-translate-y-0.5 transition-all shadow-[0_8px_25px_rgba(13,148,136,0.25)] dark:shadow-[0_8px_25px_rgba(0,212,170,0.3)]"
            >
              <FolderGit2 className="w-4 h-4" />
              View Projects
            </a>
            <a
              href="/CV_CHLIH_YOUSSEF.pdf"
              download="CV_CHLIH_YOUSSEF.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-teal-50 dark:bg-[#00d4aa]/10 text-teal-700 dark:text-[#00d4aa] border border-teal-200 dark:border-[#00d4aa]/30 hover:bg-teal-600 hover:text-white dark:hover:bg-[#00d4aa] dark:hover:text-[#0a0a0f] hover:-translate-y-0.5 transition-all shadow-xs"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white dark:bg-transparent text-slate-700 dark:text-[#e8e8ed] border border-slate-300 dark:border-[#1e1e2e] hover:border-teal-500 hover:text-teal-600 dark:hover:border-[#00d4aa] dark:hover:text-[#00d4aa] hover:-translate-y-0.5 transition-all shadow-xs"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>

          {/* Meta Tags Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-[#5c5c6e]">
            <div className="inline-flex items-center gap-1.5 text-slate-600 dark:text-[#9898a8]">
              <MapPin className="w-4 h-4 text-teal-600 dark:text-[#00d4aa]" />
              Kenitra, Morocco
            </div>
            <a
              href="https://github.com/youssefchlih"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] text-slate-600 dark:text-[#9898a8] hover:text-slate-900 dark:hover:text-[#e8e8ed] hover:border-teal-500 dark:hover:border-[#00d4aa] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-teal-600 dark:text-[#00d4aa]" />
              github.com/youssefchlih
            </a>
          </div>
        </div>

        {/* Right Column: Visual Avatar & Tech Orbits */}
        <div className="flex justify-center items-center relative order-first lg:order-last">
          {/* Outer Rotating Ring */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-slate-300/80 dark:border-[#1e1e2e] flex items-center justify-center animate-ring-rotate shadow-[0_0_30px_rgba(13,148,136,0.1)] dark:shadow-[0_0_40px_rgba(0,212,170,0.1)]">
            {/* Inner Avatar Container */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-2 border-teal-500 dark:border-[#00d4aa] bg-gradient-to-tr from-teal-50 dark:from-[#00d4aa]/20 to-white dark:to-[#12121a] overflow-hidden flex items-center justify-center relative shadow-[0_0_35px_rgba(13,148,136,0.15)] dark:shadow-[0_0_35px_rgba(0,212,170,0.25)] group">
              {!imgError ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src="https://png.pngtree.com/png-vector/20230109/ourmid/pngtree-cyberpunk-hacker-man-png-image_6577562.png"
                  alt="Youssef Chlih Avatar"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="text-5xl font-bold tracking-tight text-teal-600 dark:text-[#00d4aa]">
                  YC
                </span>
              )}
            </div>

            {/* Orbiting Tech Tags */}
            <div className="absolute inset-[-40px] pointer-events-none animate-orbit">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] text-teal-700 dark:text-[#00d4aa] shadow-md animate-counter-orbit">
                LangChain
              </span>
              <span className="absolute top-[22%] right-[-5px] px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] text-teal-700 dark:text-[#00d4aa] shadow-md animate-counter-orbit">
                PyTorch
              </span>
              <span className="absolute bottom-[20%] right-[-2px] px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] text-teal-700 dark:text-[#00d4aa] shadow-md animate-counter-orbit">
                YOLOv8
              </span>
              <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] text-teal-700 dark:text-[#00d4aa] shadow-md animate-counter-orbit">
                Talend
              </span>
              <span className="absolute top-[22%] left-[-5px] px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] text-teal-700 dark:text-[#00d4aa] shadow-md animate-counter-orbit">
                Docker
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="mt-16 flex justify-center text-slate-400 dark:text-[#5c5c6e] animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="w-5 h-5 text-slate-400 hover:text-teal-600 dark:text-[#5c5c6e] dark:hover:text-[#00d4aa] transition-colors" />
        </a>
      </div>
    </section>
  );
}
