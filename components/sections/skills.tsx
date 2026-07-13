"use client";

import { motion } from "motion/react";
import {
  Bot,
  Brain,
  Database,
  Globe,
  Layers,
  Network,
  Radar,
  Server,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { SkillIcon } from "@/components/sections/skill-icon";
import type { LucideIcon } from "lucide-react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface SkillCategoryDef {
  title: string;
  /** Icon shown in the category header — one icon for the whole group */
  headerIcon: LucideIcon;
  skills: string[];
  tier: 1 | 2 | 3;
}

/**
 * Tier 1 — Core stack (larger cards, full 3-col row)
 * Tier 2 — Secondary tech (equal-height cards in 2→3 col grid)
 * Tier 3 — Soft skills (flat pill strip, no card wrapper)
 */
const categories: SkillCategoryDef[] = [
  // ── Tier 1 ────────────────────────────────────────────────────────────────
  {
    title: "IA & Machine Learning",
    headerIcon: Brain,
    tier: 1,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "GANs",
      "LLMs",
      "RAG",
      "Modèles prédictifs",
    ],
  },
  {
    title: "Langages de Programmation",
    headerIcon: Sparkles,
    tier: 1,
    skills: ["Python", "Java", "JavaScript", "Scala"],
  },
  {
    title: "Web & APIs",
    headerIcon: Globe,
    tier: 1,
    skills: ["HTML", "CSS", "React", "FastAPI", "REST APIs"],
  },

  // ── Tier 2 ────────────────────────────────────────────────────────────────
  {
    title: "Pipelines IA & Orchestration",
    headerIcon: Workflow,
    tier: 2,
    skills: ["LangChain", "LangGraph", "LangSmith", "n8n", "Gemini VLM", "Claude API"],
  },
  {
    title: "Computer Vision",
    headerIcon: Layers,
    tier: 2,
    skills: ["OpenCV", "YOLOv8", "3D CNN", "Pillow"],
  },
  {
    title: "Data & BI",
    headerIcon: TrendingUp,
    tier: 2,
    skills: ["Talend", "ETL", "Data Modeling", "Power BI", "SQL Avancé", "OLAP"],
  },
  {
    title: "Bases de Données",
    headerIcon: Database,
    tier: 2,
    skills: ["SQL", "PostgreSQL", "MongoDB", "Redis", "Cassandra", "Neo4j"],
  },
  {
    title: "DevOps & Infrastructure",
    headerIcon: Server,
    tier: 2,
    skills: [
      "Git/GitHub",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitLab CI",
      "Terraform",
      "CloudFormation",
    ],
  },

  // ── Tier 3 ────────────────────────────────────────────────────────────────
  {
    title: "Compétences Interpersonnelles",
    headerIcon: Users,
    tier: 3,
    skills: [
      "Travail d'équipe",
      "Communication",
      "Esprit d'analyse",
      "Adaptabilité",
      "Gestion du temps",
      "Résolution de problèmes",
      "Autonomie",
      "Rigueur",
    ],
  },
];

// ---------------------------------------------------------------------------
// Skill icons that have a real brand logo (SI or CDN).
// Everything NOT in this set renders text-only — no fake bullet.
// ---------------------------------------------------------------------------
const BRAND_ICON_SKILLS = new Set([
  // SI react-icons
  "Machine Learning", // scikit-learn
  "Deep Learning",    // pytorch
  "NLP",              // huggingface
  "LangChain",
  "LangGraph",
  "Gemini VLM",
  "Claude API",
  "OpenCV",
  "YOLOv8",
  "Talend",
  "Python",
  "Java",
  "JavaScript",
  "Scala",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Cassandra",
  "HTML",
  "CSS",
  "React",
  "FastAPI",
  "Git/GitHub",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "GitLab CI",
  "Terraform",
  // CDN
  "n8n",
  "Power BI",
  "Neo4j",
  "CloudFormation",
]);

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------

function SkillPill({ skill }: { skill: string }) {
  const hasBrandIcon = BRAND_ICON_SKILLS.has(skill);
  return (
    <span
      className="
        skill-pill inline-flex items-center gap-1.5
        rounded-[6px] border border-[var(--border)]
        bg-[var(--bg-elevated)]
        px-3 py-1.5
        text-[13px] font-medium leading-none text-[var(--text-primary)]
        transition-all duration-[150ms] ease-[ease]
        hover:-translate-y-0.5 hover:border-[var(--text-primary)]
        select-none cursor-default
      "
      data-cursor="hover"
    >
      {hasBrandIcon && <SkillIcon skill={skill} />}
      <span>{skill}</span>
    </span>
  );
}

interface CategoryCardProps {
  category: SkillCategoryDef;
  animVariant?: "fadeInUp";
}

function CategoryCard({ category }: CategoryCardProps) {
  const HeaderIcon = category.headerIcon;
  return (
    <motion.article
      variants={fadeInUp}
      className="
        flex flex-col
        rounded-[12px] border border-[var(--border)] bg-[var(--bg-elevated)]
        p-6
      "
      data-cursor="hover"
    >
      {/* Header */}
      <h3 className="mb-4 flex items-center gap-2 border-b border-[var(--border)] pb-3">
        <HeaderIcon
          size={15}
          strokeWidth={1.75}
          className="shrink-0 text-[var(--text-secondary)]"
          aria-hidden
        />
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-primary)]">
          {category.title}
        </span>
      </h3>

      {/* Pills */}
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillPill key={skill} skill={skill} />
        ))}
      </div>
    </motion.article>
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export function Skills() {
  const tier1 = categories.filter((c) => c.tier === 1);
  const tier2 = categories.filter((c) => c.tier === 2);
  const tier3 = categories.filter((c) => c.tier === 3)[0];

  return (
    <section id="skills" className="section bg-[var(--bg)]">
      <div className="container">
        {/* Section heading */}
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

        {/* ── Tier 1: Core stack ─────────────────────────────────────────── */}
        {/* 3 equal-height cards in one row. min-h ensures they feel "large". */}
        <motion.div
          className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3"
          style={{ alignItems: "stretch" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {tier1.map((cat) => (
            <CategoryCard key={cat.title} category={cat} />
          ))}
        </motion.div>

        {/* ── Tier 2: Secondary tech ─────────────────────────────────────── */}
        {/* CSS grid with grid-auto-rows: 1fr forces every card in the same
            implicit row to share the same height — no ragged bottom edges.
            The inline style is required because Tailwind v4 doesn't expose
            grid-auto-rows as a utility class yet.                           */}
        <motion.div
          className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          style={{ gridAutoRows: "1fr", alignItems: "stretch" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {tier2.map((cat) => (
            <CategoryCard key={cat.title} category={cat} />
          ))}
        </motion.div>

        {/* ── Tier 3: Soft skills — flat pill strip, no card wrapper ─────── */}
        {tier3 && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="
              rounded-[12px] border border-[var(--border)] border-dashed
              bg-[var(--bg-elevated)] px-6 py-5
            "
          >
            <div className="mb-3 flex items-center gap-2 border-b border-[var(--border)] pb-3">
              <Users
                size={15}
                strokeWidth={1.75}
                className="shrink-0 text-[var(--text-secondary)]"
                aria-hidden
              />
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-primary)]">
                Also working with · {tier3.title}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {tier3.skills.map((skill) => (
                /* Soft skills: text-only pills — no missing/fake icon */
                <span
                  key={skill}
                  className="
                    inline-flex items-center
                    rounded-[6px] border border-[var(--border)]
                    bg-[var(--bg-elevated)]
                    px-3 py-1.5
                    text-[13px] font-medium leading-none text-[var(--text-secondary)]
                    transition-all duration-[150ms] ease-[ease]
                    hover:-translate-y-0.5 hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]
                    select-none cursor-default
                  "
                  data-cursor="hover"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
