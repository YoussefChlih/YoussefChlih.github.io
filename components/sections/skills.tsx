"use client";

import { motion } from "motion/react";
import { skillCategories } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { SkillIcon } from "@/components/sections/skill-icon";

function SkillPill({ skill }: { skill: string }) {
  return (
    <span
      className="skill-pill inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1.5 text-[13px] font-medium leading-none text-[var(--text-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--text-primary)] hover:bg-[var(--accent-soft)]"
      data-cursor="hover"
    >
      <SkillIcon skill={skill} />
      <span>{skill}</span>
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section bg-[var(--bg)]">
      <div className="container">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="eyebrow">Capability map</span>
          <h2
            className="text-h2 text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Skills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body text-[var(--text-secondary)]">
            A structured view of the tools and technologies I use in real builds,
            from AI orchestration to data systems, APIs, and infrastructure.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              variants={fadeInUp}
              className="card flex flex-col border border-[var(--border)] bg-[var(--bg-elevated)] p-5 md:p-6"
              data-cursor="hover"
            >
              <h3 className="mb-4 border-b border-[var(--border)] pb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-primary)]">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillPill key={`${index}-${skill}`} skill={skill} />
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
