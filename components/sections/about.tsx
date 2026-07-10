"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { profile, education, languages } from "@/lib/data";
import { GraduationCap, MapPin, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !timelineRef.current || !lineRef.current) return;

    // Animate the vertical timeline line
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
      }
    );

    // Reveal each education item when its point on the timeline is reached
    itemRefs.current.forEach((item, i) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { opacity: 0, x: i % 2 === 0 ? -30 : 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Title */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-h2 mb-4">
            About <span className="text-accent">Me</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-16 h-1 rounded-full mb-8"
            style={{ background: "var(--accent)" }}
          />
          <motion.p
            variants={fadeInUp}
            className="text-body max-w-3xl leading-relaxed"
          >
            {profile}
          </motion.p>
        </motion.div>

        {/* Two column: Languages + Education Timeline */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
          {/* Languages & Location */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Location */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 mb-8"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "var(--accent-soft)" }}
              >
                <MapPin size={18} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <p className="text-small" style={{ color: "var(--text-secondary)" }}>
                  Based in
                </p>
                <p className="font-medium" style={{ color: "var(--text-primary)" }}>
                  Kénitra, Morocco
                </p>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-2 mb-4">
                <Globe size={18} style={{ color: "var(--accent)" }} />
                <h3 className="text-h3" style={{ fontSize: "1.1rem" }}>
                  Languages
                </h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ color: "var(--text-primary)" }}>
                      {lang.name}
                    </span>
                    <span className="badge" style={{ fontSize: "0.75rem" }}>
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Education Timeline */}
          <div ref={timelineRef} className="relative">
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap size={20} style={{ color: "var(--accent)" }} />
              <h3 className="text-h3" style={{ fontSize: "1.1rem" }}>
                Education
              </h3>
            </div>

            <div className="relative pl-8">
              {/* Animated vertical line */}
              <div
                ref={lineRef}
                className="absolute left-3 top-0 bottom-0 w-[2px] origin-top"
                style={{
                  background: "var(--accent)",
                  transformOrigin: "top",
                }}
              />

              {/* Education items */}
              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div
                    key={edu.degree}
                    ref={(el: HTMLDivElement | null) => { itemRefs.current[i] = el; }}
                    className="relative"
                    style={{ opacity: 0 }}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-5 top-1 w-4 h-4 rounded-full border-2"
                      style={{
                        borderColor: "var(--accent)",
                        background: "var(--bg)",
                      }}
                    />

                    {/* Content */}
                    <div
                      className="p-4 rounded-lg"
                      style={{
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <span
                        className="font-mono text-small"
                        style={{ color: "var(--accent)" }}
                      >
                        {edu.period}
                      </span>
                      <h4
                        className="font-semibold mt-1"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {edu.degree}
                      </h4>
                      <p
                        className="text-small mt-1"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {edu.school}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
