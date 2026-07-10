"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Mail } from "lucide-react";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { identity } from "@/lib/data";

export function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="py-16 border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="container text-center flex flex-col items-center gap-8">
          
          {/* Logo repeated */}
          <a
            href="#"
            className="text-h3 font-bold text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
            data-cursor="hover"
          >
            {identity.logoText}
          </a>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-small font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              data-cursor="hover"
            >
              About
            </a>
            <a
              href="#certifications"
              className="text-small font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              data-cursor="hover"
            >
              Certifications
            </a>
            <a
              href="#projects"
              className="text-small font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              data-cursor="hover"
            >
              Portfolio
            </a>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${identity.email}`}
              className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-200"
              aria-label="Email"
              data-cursor="hover"
            >
              <Mail size={16} />
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-200"
              aria-label="LinkedIn"
              data-cursor="hover"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href={identity.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-200"
              aria-label="Instagram"
              data-cursor="hover"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href={identity.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-200"
              aria-label="YouTube"
              data-cursor="hover"
            >
              <FaYoutube size={16} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[12px] text-[var(--text-secondary)] font-mono mt-4">
            © {new Date().getFullYear()} {identity.name}. All rights reserved.
          </p>

        </div>
      </footer>

      {/* Floating Scroll to Top button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[90] w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform duration-200"
            style={{
              background: "var(--accent)",
              color: "var(--bg)",
            }}
            aria-label="Scroll to top"
            data-cursor="hover"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
