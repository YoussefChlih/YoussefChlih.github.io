"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { certificates } from "@/lib/data";
import { fadeInUp, viewportConfig } from "@/lib/animations";

export function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="certifications" className="section bg-[var(--bg)]">
      <div className="container">
        
        {/* Eyebrow + Title */}
        <div className="text-center mb-16">
          <span className="eyebrow">Showcase of Achievements</span>
          <h2
            className="text-h2 text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Certifications
          </h2>
          <div className="w-12 h-[1px] bg-[var(--border)] mx-auto mt-4" />
        </div>

        {/* Carousel Area */}
        <div className="max-w-2xl mx-auto relative px-4">
          
          <div className="overflow-hidden min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {certificates.map(
                (cert, index) =>
                  index === activeIndex && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full card p-6 md:p-8 border border-[var(--border)] bg-[var(--bg-elevated)] flex flex-col justify-between"
                      data-cursor="hover"
                    >
                      <div>
                        {/* Circular Logo/Badge */}
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: "var(--accent-soft)" }}
                          >
                            <Award size={20} className="text-[var(--text-primary)]" />
                          </div>
                          <div>
                            <h3 className="font-bold text-body text-[var(--text-primary)] leading-tight">
                              {cert.title}
                            </h3>
                            <p className="text-[12px] text-[var(--text-secondary)] font-mono uppercase mt-1">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-small text-[var(--text-secondary)] leading-relaxed mb-6">
                          {cert.description}
                        </p>
                      </div>

                      {/* Footer Actions */}
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
                        <a
                          href={cert.url || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-mono uppercase tracking-wider transition-all duration-300 hover:scale-105"
                          style={{
                            background: "var(--accent)",
                            color: "var(--bg)",
                          }}
                        >
                          View Certificate →
                        </a>

                        <div className="flex items-center gap-1.5 text-small text-[var(--text-secondary)] font-mono">
                          <Calendar size={13} />
                          {cert.date}
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--accent-soft)] transition-colors duration-200"
            aria-label="Previous"
            data-cursor="hover"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--accent-soft)] transition-colors duration-200"
            aria-label="Next"
            data-cursor="hover"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dot Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: index === activeIndex ? "var(--accent)" : "var(--border-dotted)",
                  transform: index === activeIndex ? "scale(1.2)" : "scale(1)",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
