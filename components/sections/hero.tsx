"use client";

import { motion } from "motion/react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { identity, heroTagline } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { Picture } from "@/components/ui/picture";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="container relative z-10">
        <div className="grid md:grid-cols-[auto_1fr_1.2fr] gap-8 md:gap-12 items-center">
          
          {/* Vertical Social Rail */}
          <motion.div
            className="flex md:flex-col items-center justify-center gap-6 py-4 md:py-0"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              variants={fadeInUp}
              href={`mailto:${identity.email}`}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              aria-label="Email"
              data-cursor="hover"
            >
              <MessageSquare size={18} />
            </motion.a>
            <motion.a
              variants={fadeInUp}
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              aria-label="LinkedIn"
              data-cursor="hover"
            >
              <FaLinkedin size={18} />
            </motion.a>
            <motion.a
              variants={fadeInUp}
              href={identity.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              aria-label="Instagram"
              data-cursor="hover"
            >
              <FaInstagram size={18} />
            </motion.a>
            <motion.a
              variants={fadeInUp}
              href={identity.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              aria-label="YouTube"
              data-cursor="hover"
            >
              <FaYoutube size={18} />
            </motion.a>
          </motion.div>

          {/* Left Column Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-left flex flex-col items-start"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-hero leading-[1.1] mb-4 text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {identity.name} <span className="inline-block animate-wave">👋</span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 w-full my-4"
            >
              <div className="h-[1px] bg-[var(--border)] flex-grow max-w-[80px]" />
              <span className="font-mono text-small uppercase tracking-wider text-[var(--text-secondary)]">
                {identity.title}
              </span>
            </motion.div>

            <motion.p
              variants={fadeInUp}
               className="text-body mb-8 text-[var(--text-secondary)] max-w-md"
              style={{ fontSize: "15px" }}
            >
              {heroTagline}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium transition-transform duration-300 hover:scale-105"
                style={{
                  background: "var(--accent)",
                  color: "var(--bg)",
                }}
                data-cursor="hover"
              >
                Say hello <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div
              className="relative aspect-square w-full max-w-[380px] md:max-w-[420px] overflow-hidden shadow-lg border border-[var(--border)]"
              style={{ borderRadius: "24px" }}
            >
              {/* Above-the-fold hero portrait — priority + eager loading. */}
              <Picture
                srcBase="/portrait"
                sources={[
                  { width: 480, avif: "/opt/portrait/480.avif", webp: "/opt/portrait/480.webp" },
                  { width: 768, avif: "/opt/portrait/768.avif", webp: "/opt/portrait/768.webp" },
                  { width: 960, avif: "/opt/portrait/960.avif", webp: "/opt/portrait/960.webp" },
                ]}
                fallbackSrc="/portrait.webp"
                alt={identity.name}
                width={960}
                height={960}
                sizes="(min-width: 768px) 420px, 90vw"
                priority
                decoding="auto"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
        }
        .animate-wave {
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </section>
  );
}
