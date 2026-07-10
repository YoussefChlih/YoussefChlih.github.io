"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { projects } from "@/lib/data";
import { Calendar, Folder } from "lucide-react";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max ±6 degrees
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  // Bento grid sizing: first card is large, rest are standard
  const isLarge = index === 0;

  return (
    <motion.div
      ref={cardRef}
      className={`card p-6 md:p-8 cursor-default ${isLarge ? "md:col-span-2" : ""}`}
      variants={fadeInUp}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 40px -15px var(--accent-soft)",
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      data-cursor="hover"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "var(--accent-soft)" }}
        >
          <Folder size={22} style={{ color: "var(--accent)" }} />
        </div>
        <div className="flex items-center gap-2">
          <span className="badge font-mono" style={{ fontSize: "0.75rem" }}>
            <Calendar size={12} />
            {project.year}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-h3 mb-1" style={{ color: "var(--text-primary)" }}>
        {project.title}
      </h3>
      <p className="text-accent font-medium text-small mb-1">
        {project.subtitle}
      </p>
      <p className="text-small mb-4" style={{ color: "var(--text-secondary)" }}>
        {project.type}
      </p>

      {/* Description */}
      <ul className="space-y-2 mb-6">
        {project.description.map((item, i) => (
          <li
            key={i}
            className="relative pl-4 text-body"
            style={{ fontSize: "0.9rem" }}
          >
            <span
              className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            {item}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <motion.span
            key={tag}
            className="badge"
            style={{ fontSize: "0.75rem" }}
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ duration: 0.2 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
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
            Featured <span className="text-accent">Projects</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-16 h-1 rounded-full"
            style={{ background: "var(--accent)" }}
          />
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
