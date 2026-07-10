"use client";

import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { skillCategories, softSkills } from "@/lib/data";
import {
  Brain,
  Workflow,
  Eye,
  BarChart3,
  Code2,
  Database,
  Globe,
  Container,
  Users,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "ai-ml": <Brain size={20} />,
  "ai-pipelines": <Workflow size={20} />,
  "computer-vision": <Eye size={20} />,
  "data-bi": <BarChart3 size={20} />,
  languages: <Code2 size={20} />,
  databases: <Database size={20} />,
  "web-apis": <Globe size={20} />,
  devops: <Container size={20} />,
};

export function Skills() {
  return (
    <section id="skills" className="section">
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
            Technical <span className="text-accent">Skills</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-16 h-1 rounded-full"
            style={{ background: "var(--accent)" }}
          />
        </motion.div>

        {/* Bento Grid — asymmetric layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {skillCategories.map((category, i) => {
            // Make first two and last categories span 2 cols on large screens
            const isWide = i === 0 || i === 1;

            return (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                className={`card p-6 ${isWide ? "lg:col-span-1" : ""}`}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 40px -15px var(--accent-soft)",
                }}
                transition={{ duration: 0.3 }}
                data-cursor="hover"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    {categoryIcons[category.id] || <Code2 size={20} />}
                  </div>
                  <h3
                    className="font-semibold"
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                    }}
                  >
                    {category.name}
                  </h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="badge"
                      style={{ fontSize: "0.75rem" }}
                      whileHover={{ scale: 1.08, rotate: Math.random() > 0.5 ? 2 : -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          className="mt-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div
            variants={fadeInUp}
            className="card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                }}
              >
                <Users size={20} />
              </div>
              <h3
                className="font-semibold"
                style={{
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                }}
              >
                Soft Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <motion.span
                  key={skill}
                  className="badge"
                  style={{ fontSize: "0.75rem" }}
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
