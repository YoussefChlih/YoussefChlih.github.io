"use client";

import { Radar } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { skillLanes, type LaneSkill, type SkillLane } from "@/lib/skill-lanes-data";

function SkillBadge({ skill }: { skill: LaneSkill }) {
  const accent = skill.brandColor;

  return (
    <span
      className="skills-marquee__badge group relative inline-flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5"
      style={{
        borderColor: `${accent}55`,
        background: `linear-gradient(135deg, ${accent}14 0%, rgba(12,14,20,0.72) 55%)`,
        boxShadow: `0 0 0 1px ${accent}22, 0 0 18px ${accent}18, inset 0 1px 0 rgba(255,255,255,0.06)`,
      }}
      data-cursor="hover"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/25"
        style={{ boxShadow: `0 0 12px ${accent}33` }}
      >
        {skill.iconSlug ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://cdn.simpleicons.org/${skill.iconSlug}/${accent.replace("#", "")}`}
            alt={skill.name}
            width={20}
            height={20}
            loading="lazy"
            decoding="async"
            className="h-5 w-5 object-contain"
          />
        ) : (
          <Radar size={18} strokeWidth={1.75} style={{ color: accent }} aria-hidden />
        )}
      </span>
      <span className="whitespace-nowrap text-sm font-medium tracking-wide text-white/90">
        {skill.name}
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
            className="text-h2 text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Skills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body text-white/50">
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
