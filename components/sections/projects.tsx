"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Laptop, Smartphone, Eye, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function Projects() {
  const [filter, setFilter] = useState<"all" | "web" | "mobile" | "cv">("all");

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  // Gradient helper for mockups based on category
  const getGradient = (category: string) => {
    switch (category) {
      case "web":
        return "linear-gradient(135deg, #111111 0%, #333333 100%)";
      case "mobile":
        return "linear-gradient(135deg, #222222 0%, #555555 100%)";
      case "cv":
        return "linear-gradient(135deg, #0A0F0D 0%, #1c2e24 100%)";
      default:
        return "linear-gradient(135deg, #111111 0%, #333333 100%)";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return <Laptop size={16} className="text-[#FFFFFF]" />;
      case "mobile":
        return <Smartphone size={16} className="text-[#FFFFFF]" />;
      case "cv":
        return <Eye size={16} className="text-[#FFFFFF]" />;
      default:
        return <Laptop size={16} className="text-[#FFFFFF]" />;
    }
  };

  return (
    <section id="projects" className="section bg-[var(--bg)]">
      <div className="container">
        
        {/* Eyebrow + Title */}
        <div className="text-center mb-12">
          <span className="eyebrow">Most recent works</span>
          <h2
            className="text-h2 text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Portfolio
          </h2>
          <div className="w-12 h-[1px] bg-[var(--border)] mx-auto mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center flex-wrap gap-2 mb-16">
          {(["all", "web", "mobile", "cv"] as const).map((tab) => {
            const label = tab === "all" ? "All" : tab === "cv" ? "Computer Vision" : tab.charAt(0).toUpperCase() + tab.slice(1);
            const isActive = filter === tab;

            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className="px-5 py-2 rounded-full text-[12px] font-mono uppercase tracking-wider transition-all duration-300 border"
                style={{
                  background: isActive ? "var(--accent)" : "transparent",
                  color: isActive ? "var(--bg)" : "var(--text-secondary)",
                  borderColor: isActive ? "var(--accent)" : "var(--border)",
                }}
                data-cursor="hover"
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Projects 2-Column Grid */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            layout
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  variants={fadeInUp}
                  className="card overflow-hidden flex flex-col border border-[var(--border)] bg-[var(--bg-elevated)]"
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 40px -15px var(--accent-soft)",
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  data-cursor="hover"
                >
                  {/* Mockup Preview Area */}
                  <div
                    className="relative aspect-[16/10] w-full p-6 flex flex-col justify-between overflow-hidden border-b border-[var(--border)]"
                    style={{ background: getGradient(project.category) }}
                  >
                    {/* Simulated Browser Bar */}
                    <div className="flex items-center justify-between w-full pb-2 mb-2 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/80" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <span className="w-2 h-2 rounded-full bg-green-500/80" />
                      </div>
                      <div className="px-3 py-0.5 rounded bg-white/10 text-[9px] font-mono text-white/50 w-2/3 text-center truncate">
                        {project.title.toLowerCase().replace(/\s+/g, "")}.com
                      </div>
                      <div className="w-6" />
                    </div>

                    {/* Content Placeholder in Mockup */}
                    <div className="flex-grow flex items-center justify-center relative">
                      <div className="absolute right-[-10px] bottom-[-20px] opacity-10 scale-150">
                        {getCategoryIcon(project.category)}
                      </div>
                      <div className="text-center p-4">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                          {project.category} project
                        </span>
                        <h4 className="font-bold text-white text-body mt-1 leading-tight">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Card Description */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Title & Status */}
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-body text-[var(--text-primary)]">
                          {project.title}
                        </h3>

                        {project.isLive ? (
                          <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#22C55E]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                            Live
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-[var(--text-secondary)]">
                            Archive
                          </span>
                        )}
                      </div>

                      <p className="text-small text-[var(--text-secondary)] leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-[var(--border)] mt-auto">
                      <a
                        href={project.url || "#"}
                        className="inline-flex items-center gap-1.5 text-small font-mono uppercase tracking-wider text-[var(--text-primary)] hover:translate-x-1 transition-transform duration-200"
                      >
                        Learn More <ArrowRight size={13} />
                      </a>

                      <span className="text-[11px] text-[var(--text-secondary)] font-mono flex items-center gap-1">
                        <Calendar size={12} />
                        {project.date}
                      </span>
                    </div>

                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
