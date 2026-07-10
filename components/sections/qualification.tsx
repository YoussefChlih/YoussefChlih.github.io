"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, GraduationCap, Briefcase } from "lucide-react";
import { qualifications } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function Qualification() {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");

  const filteredItems = qualifications.filter((q) => q.type === activeTab);

  return (
    <section id="qualification" className="section bg-[var(--bg)]">
      <div className="container">
        
        {/* Eyebrow + Title */}
        <div className="text-center mb-12">
          <span className="eyebrow">My personal journey</span>
          <h2
            className="text-h2 text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Qualification
          </h2>
          <div className="w-12 h-[1px] bg-[var(--border)] mx-auto mt-4" />
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]">
            <button
              onClick={() => setActiveTab("education")}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-small font-mono uppercase tracking-wider transition-all duration-300"
              style={{
                background: activeTab === "education" ? "var(--accent)" : "transparent",
                color: activeTab === "education" ? "var(--bg)" : "var(--text-secondary)",
              }}
              data-cursor="hover"
            >
              <GraduationCap size={16} />
              Education
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-small font-mono uppercase tracking-wider transition-all duration-300"
              style={{
                background: activeTab === "experience" ? "var(--accent)" : "transparent",
                color: activeTab === "experience" ? "var(--bg)" : "var(--text-secondary)",
              }}
              data-cursor="hover"
            >
              <Briefcase size={16} />
              Experience
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative px-4">
          
          {/* Centered Dotted Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-[var(--border-dotted)] -translate-x-1/2" />

          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.title + item.date}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex flex-col md:flex-row items-start md:items-center w-full"
                  >
                    
                    {/* Timeline Node */}
                    <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full border border-[var(--border)] bg-[var(--bg)] -translate-x-1/2 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    </div>

                    {/* Alternating Columns */}
                    <div className="w-full flex flex-col md:flex-row">
                      
                      {/* Left Side Content Box (Hidden on odd indexes on desktop, handles spacing) */}
                      <div className={`hidden md:block w-1/2 pr-12 text-right ${isEven ? "" : "md:order-last"}`}>
                        {isEven && (
                          <div className="card p-5 border border-[var(--border)] bg-[var(--bg-elevated)] inline-block text-left w-full max-w-[340px]">
                            <h3 className="font-bold text-[var(--text-primary)] text-body">
                              {item.title}
                            </h3>
                            <p className="text-[13px] text-[var(--text-secondary)] mt-1 font-medium">
                              {item.subtitle}
                            </p>
                            <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-secondary)] mt-4">
                              <Calendar size={12} className="text-[var(--text-primary)]" />
                              {item.date}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Spacer or ordered box */}
                      <div className="w-4 md:w-0" />

                      {/* Right Side Content Box (Or left side box pushed to ordering) */}
                      <div className={`w-full md:w-1/2 pl-8 md:pl-12 ${isEven ? "" : "md:order-first"}`}>
                        {!isEven && (
                          <div className="card p-5 border border-[var(--border)] bg-[var(--bg-elevated)] inline-block text-left w-full max-w-[340px]">
                            <h3 className="font-bold text-[var(--text-primary)] text-body">
                              {item.title}
                            </h3>
                            <p className="text-[13px] text-[var(--text-secondary)] mt-1 font-medium">
                              {item.subtitle}
                            </p>
                            <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-secondary)] mt-4">
                              <Calendar size={12} className="text-[var(--text-primary)]" />
                              {item.date}
                            </span>
                          </div>
                        )}
                        {/* Mobile fallback (render all boxes on right side if mobile) */}
                        <div className="block md:hidden">
                          {isEven && (
                            <div className="card p-5 border border-[var(--border)] bg-[var(--bg-elevated)] inline-block text-left w-full">
                              <h3 className="font-bold text-[var(--text-primary)] text-body">
                                {item.title}
                              </h3>
                              <p className="text-[13px] text-[var(--text-secondary)] mt-1 font-medium">
                                {item.subtitle}
                              </p>
                              <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-secondary)] mt-4">
                                <Calendar size={12} className="text-[var(--text-primary)]" />
                                {item.date}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
