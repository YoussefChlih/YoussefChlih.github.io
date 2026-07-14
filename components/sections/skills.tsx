"use client";

import { Radar } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { skillLanes, type LaneSkill, type SkillLane } from "@/lib/skill-lanes-data";

function SkillBadge({ skill }: { skill: LaneSkill }) {
  const accent = skill.brandColor;

  return (
    <span
      className="skills-marquee__badge group relative inline-flex shrink-0 items-center justify-center rounded-2xl border p-3 backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1"
      style={{
        borderColor: `${accent}55`,
        background: `linear-gradient(135deg, ${accent}14 0%, var(--marquee-badge-bg-end) 55%)`,
        boxShadow: `0 0 0 1px ${accent}22, 0 0 18px ${accent}18, inset 0 1px 0 var(--marquee-badge-inset-highlight)`,
      }}
      data-cursor="hover"
      title={skill.name}
    >
      <span
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
        style={{
          borderColor: 'var(--marquee-badge-border-tint)',
          borderWidth: '1px',
          background: 'var(--marquee-badge-icon-bg)',
          boxShadow: `0 0 12px ${accent}33`,
        }}
      >
        {skill.deviconName ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.deviconName}/${skill.deviconName}-${skill.deviconVariant}.svg`}
            alt={skill.name}
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
            className="h-10 w-10 object-contain"
          />
        ) : (
          <Radar size={32} strokeWidth={1.75} style={{ color: accent }} aria-hidden />
        )}
      </span>
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `0 0 28px ${accent}55, 0 0 0 1px ${accent}88` }}
        aria-hidden
      />
    </span>
  );
}

function MarqueeLane({ lane }: { lane: SkillLane }) {
  // Two identical halves → animate exactly -50% for a seamless loop.
  const half = [...lane.skills, ...lane.skills];
  const sequence = [...half, ...half];
  const animClass =
    lane.direction === "left"
      ? "skills-marquee__track--left"
      : "skills-marquee__track--right";

  return (
    <div className="skills-marquee__row">
      <span className="skills-marquee__row-label">{lane.label}</span>
      <div className="skills-marquee__lane relative overflow-hidden py-2">
        <div
          className={`skills-marquee__track flex w-max gap-4 ${animClass}`}
          style={{ ["--marquee-duration" as string]: `${lane.duration}s` }}
          aria-hidden={false}
        >
          {sequence.map((skill, index) => (
            <SkillBadge key={`${lane.id}-${skill.id}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="skills-marquee section relative overflow-hidden">
      <div className="skills-marquee__ambient pointer-events-none absolute inset-0" aria-hidden>
        <div className="skills-marquee__glow skills-marquee__glow--a" />
        <div className="skills-marquee__glow skills-marquee__glow--b" />
        <div className="skills-marquee__glow skills-marquee__glow--c" />
        <div className="skills-marquee__grid" />
      </div>

      <div className="container relative z-[1]">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="skills-marquee__eyebrow eyebrow">Capability map</span>
          <h2
            className="text-h2"
            style={{ fontFamily: "var(--font-display)", color: "var(--marquee-text)" }}
          >
            Skills
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-body"
            style={{ color: "var(--marquee-text-muted)" }}
          >
            A continuous stream of the tools behind data systems, cloud
            architecture, and AI-driven builds.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="relative z-[1] space-y-5 sm:space-y-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {skillLanes.map((lane) => (
          <MarqueeLane key={lane.id} lane={lane} />
        ))}
      </motion.div>
    </section>
  );
}
