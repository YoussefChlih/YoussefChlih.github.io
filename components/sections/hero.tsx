"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Download, ArrowDown } from "lucide-react";
import { MagneticButton, MagneticButtonOutline } from "@/components/ui/magnetic-button";
import { identity } from "@/lib/data";
import { staggerContainer, wordReveal } from "@/lib/animations";
import dynamic from "next/dynamic";
import gsap from "gsap";

const HeroScene = dynamic(
  () => import("@/components/three/hero-scene"),
  { ssr: false, loading: () => null }
);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleWords = identity.name.split(" ");
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ delay: 0.3 });

    // Fade in subtitle after title reveal
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "+=0.2"
      );
    }

    // Fade in CTAs
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <HeroScene />

      {/* Content */}
      <div className="container relative z-10 text-center">
        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span className="badge">{identity.title}</span>
        </motion.div>

        {/* Name — word by word reveal */}
        <motion.h1
          className="text-hero mb-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordReveal}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-body max-w-2xl mx-auto mb-10"
          style={{ opacity: 0 }}
        >
          Building intelligent systems at the intersection of AI, Data
          Engineering, and Computer Vision. Currently crafting{" "}
          <span className="text-accent font-medium">Mentora AI</span> at HB Dev.
        </p>

        {/* CTA buttons */}
        <div
          ref={ctaRef}
          className="flex flex-wrap items-center justify-center gap-4"
          style={{ opacity: 0 }}
        >
          <MagneticButton
            href={identity.resumeUrl}
            download="CV_CHLIH_YOUSSEF.pdf"
          >
            <Download size={18} />
            Download CV
          </MagneticButton>

          <MagneticButtonOutline href="#contact">
            Get in Touch
          </MagneticButtonOutline>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown
            size={20}
            style={{ color: "var(--text-secondary)", opacity: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
