"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { skillCategories } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function Skills() {
  return (
    <section id="skills" className="section bg-[var(--bg)]">
      <div className="container">
        
        {/* Eyebrow + Title */}
        <div className="text-center mb-16">
          <span className="eyebrow">My technical level</span>
          <h2
            className="text-h2 text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Skills
          </h2>
          <div className="w-12 h-[1px] bg-[var(--border)] mx-auto mt-4" />
        </div>

        {/* 3 Equal-Width Bordered Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="card p-6 border border-[var(--border)] bg-[var(--bg-elevated)]"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              data-cursor="hover"
            >
              {/* Category Title */}
              <h3 className="font-bold text-center text-body text-[var(--text-primary)] mb-6 border-b border-[var(--border)] pb-4">
                {category.title}
              </h3>

              {/* Two-Column Checklist */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--accent-soft)" }}
                    >
                      <Check size={10} className="text-[var(--text-primary)]" />
                    </div>
                    <span className="text-[13px] text-[var(--text-secondary)] font-medium leading-none">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
