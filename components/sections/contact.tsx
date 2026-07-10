"use client";

import { motion } from "motion/react";
import {
  fadeInUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { identity } from "@/lib/data";
import {
  MagneticButton,
  MagneticButtonOutline,
} from "@/components/ui/magnetic-button";
import { Mail, Phone, Download, ArrowUpRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section Title */}
          <motion.h2 variants={fadeInUp} className="text-h2 mb-4">
            Let&apos;s <span className="text-accent">Connect</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-16 h-1 rounded-full mx-auto mb-8"
            style={{ background: "var(--accent)" }}
          />

          <motion.p variants={fadeInUp} className="text-body mb-10">
            I&apos;m always open to discussing new opportunities, AI projects,
            or collaborations. Feel free to reach out!
          </motion.p>

          {/* Contact Links */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <MagneticButton
              href={`mailto:${identity.email}`}
            >
              <Mail size={18} />
              Send Email
            </MagneticButton>

            <MagneticButtonOutline
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} />
              LinkedIn
              <ArrowUpRight size={14} />
            </MagneticButtonOutline>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
          >
            <a
              href={`mailto:${identity.email}`}
              className="flex items-center gap-2 link-underline text-small"
              style={{ color: "var(--text-secondary)" }}
              data-cursor="hover"
            >
              <Mail size={16} style={{ color: "var(--accent)" }} />
              {identity.email}
            </a>
            <a
              href={`tel:${identity.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 link-underline text-small"
              style={{ color: "var(--text-secondary)" }}
              data-cursor="hover"
            >
              <Phone size={16} style={{ color: "var(--accent)" }} />
              {identity.phone}
            </a>
          </motion.div>

          {/* Download CV */}
          <motion.div variants={fadeInUp}>
            <a
              href={identity.resumeUrl}
              download="CV_CHLIH_YOUSSEF.pdf"
              className="inline-flex items-center gap-2 text-small link-underline"
              style={{ color: "var(--accent)" }}
              data-cursor="hover"
            >
              <Download size={16} />
              Download my CV (PDF)
            </a>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-20 pt-8 text-center"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-small" style={{ color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} {identity.name}. Built with Next.js,
            Three.js & Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
