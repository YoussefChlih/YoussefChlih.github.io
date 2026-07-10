"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { experiences } from "@/lib/data";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    // Reveal each card with depth offset
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: i * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="section">
      <div className="container">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-h2 mb-4">
            Work <span className="text-accent">Experience</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-16 h-1 rounded-full"
            style={{ background: "var(--accent)" }}
          />
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              ref={(el: HTMLDivElement | null) => { cardsRef.current[i] = el; }}
              className="card p-6 md:p-8"
              style={{ opacity: 0 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                {/* Left: Role + Company */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--accent-soft)" }}
                  >
                    <Briefcase size={20} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <h3
                      className="text-h3 mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="font-medium text-accent"
                      style={{ fontSize: "1rem" }}
                    >
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Right: Period + Location */}
                <div className="flex flex-col items-start md:items-end gap-1 flex-shrink-0">
                  <span className="flex items-center gap-1.5 font-mono text-small">
                    <Calendar size={14} style={{ color: "var(--accent)" }} />
                    <span style={{ color: "var(--text-secondary)" }}>
                      {exp.period}
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5 text-small">
                    <MapPin size={14} style={{ color: "var(--accent)" }} />
                    <span style={{ color: "var(--text-secondary)" }}>
                      {exp.location}
                    </span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-2 ml-16 md:ml-16">
                {exp.description.map((item, j) => (
                  <li
                    key={j}
                    className="relative pl-4 text-body"
                    style={{ fontSize: "0.95rem" }}
                  >
                    <span
                      className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
