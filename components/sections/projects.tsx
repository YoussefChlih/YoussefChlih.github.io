"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Laptop, Smartphone, Eye, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig, cardHover } from "@/lib/animations";

type ProjectFilter = "all" | "web" | "mobile" | "cv";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  const categoryLabels: Record<ProjectFilter, string> = {
    all: "All",
    web: "Web",
    mobile: "Mobile",
    cv: "Computer Vision",
  };

  const categoryCounts: Record<ProjectFilter, number> = {
    all: projects.length,
    web: projects.filter((project) => project.category === "web").length,
    mobile: projects.filter((project) => project.category === "mobile").length,
    cv: projects.filter((project) => project.category === "cv").length,
  };

  const getGradient = (category: string) => {
    switch (category) {
      case "web":
        return "linear-gradient(135deg, #111111 0%, #333333 100%)";
      case "mobile":
        return "linear-gradient(135deg, #1C1C1C 0%, #4A4A4A 100%)";
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
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="eyebrow">Selected work</span>
          <h2
            className="text-h2 text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body text-[var(--text-secondary)]">
            A concise view of the product, data, and computer vision work I have
            shipped. Each card highlights the domain, the delivery state, and the
            stack footprint behind it.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: "Projects", value: categoryCounts.all },
              { label: "Web", value: categoryCounts.web },
              { label: "CV", value: categoryCounts.cv },
            ].map((item) => (
              <div
                key={item.label}
                className="badge border border-[var(--border)] bg-[var(--bg-elevated)]"
              >
                <span className="text-[var(--text-secondary)]">{item.label}</span>
                <span className="font-semibold text-[var(--text-primary)]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {(["all", "web", "mobile", "cv"] as const).map((tab) => {
            const isActive = filter === tab;

            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[12px] font-mono uppercase tracking-wider transition-all duration-300 border"
                style={{
                  background: isActive ? "var(--accent)" : "transparent",
                  color: isActive ? "var(--bg)" : "var(--text-secondary)",
                  borderColor: isActive ? "var(--accent)" : "var(--border)",
                }}
                data-cursor="hover"
              >
                {categoryLabels[tab]}
                <span className="opacity-70">({categoryCounts[tab]})</span>
              </button>
            );
          })}
        </div>

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
                  key={`${project.title}-${index}`}
                  layout
                  variants={fadeInUp}
                  className="card overflow-hidden flex flex-col border border-[var(--border)] bg-[var(--bg-elevated)]"
                  whileHover={cardHover}
                  data-cursor="hover"
                >
                  <div
                    className="relative aspect-[16/10] w-full p-6 flex flex-col justify-between overflow-hidden border-b border-[var(--border)]"
                    style={{ background: getGradient(project.category) }}
                  >
                    <div className="absolute inset-0 opacity-40 mix-blend-soft-light bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.28),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.1),_transparent_35%)]" />

                    <div className="relative flex items-center justify-between w-full pb-2 mb-3 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/80" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <span className="w-2 h-2 rounded-full bg-green-500/80" />
                      </div>
                      <div className="px-3 py-0.5 rounded-full bg-white/10 text-[9px] font-mono text-white/70 w-2/3 text-center truncate backdrop-blur-sm">
                        {project.title.toLowerCase().replace(/\s+/g, "")}.studio
                      </div>
                      <div className="w-6" />
                    </div>

                    <div className="relative flex-grow flex items-center justify-center">
                      <div className="absolute right-[-10px] bottom-[-20px] opacity-10 scale-150">
                        {getCategoryIcon(project.category)}
                      </div>
                      <div className="max-w-[80%] text-center p-4 rounded-2xl border border-white/10 bg-black/10 backdrop-blur-sm">
                        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-white/70">
                          {project.category} project
                        </span>
                        <h4 className="font-bold text-white text-body mt-3 leading-tight">
                          {project.title}
                        </h4>
                        <p className="mt-2 text-[11px] leading-relaxed text-white/65">
                          {project.description.slice(0, 84)}...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="badge border border-[var(--border)] bg-[var(--accent-soft)]">
                              {project.category === "cv"
                                ? "Computer Vision"
                                : project.category === "mobile"
                                  ? "Mobile"
                                  : "Web"}
                            </span>
                            <span className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                              {project.date}
                            </span>
                          </div>
                          <h3 className="font-bold text-body text-[var(--text-primary)]">
                            {project.title}
                          </h3>
                        </div>

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

                      {project.tags?.length ? (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[var(--border)] mt-auto gap-4">
                      {project.url ? (
                        <a
                          href={project.url}
                          target={project.url.startsWith("http") ? "_blank" : undefined}
                          rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-1.5 text-small font-mono uppercase tracking-wider text-[var(--text-primary)] hover:translate-x-1 transition-transform duration-200"
                        >
                          {project.isLive ? "Visit Live" : "Learn More"}
                          <ArrowRight size={13} />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-small font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                          Details soon
                        </span>
                      )}

                      <span className="text-[11px] text-[var(--text-secondary)] font-mono flex items-center gap-1 whitespace-nowrap">
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
