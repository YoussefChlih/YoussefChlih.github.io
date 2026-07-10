"use client";

import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { certifications } from "@/lib/data";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="section">
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
            Certifications
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-16 h-1 rounded-full"
            style={{ background: "var(--accent)" }}
          />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              className="card p-6 group"
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px -15px var(--accent-soft)",
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              data-cursor="hover"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--accent-soft)" }}
                >
                  <Award size={18} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1 leading-tight"
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                    }}
                  >
                    {cert.name}
                  </h3>
                  <p
                    className="text-small"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
