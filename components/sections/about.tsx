"use client";

import { motion } from "motion/react";
import { Award, Briefcase, Headset } from "lucide-react";
import { identity, profile, stats } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function About() {
  // Mapping icons to string IDs
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return <Award size={22} className="text-[var(--text-primary)]" />;
      case "briefcase":
        return <Briefcase size={22} className="text-[var(--text-primary)]" />;
      case "headset":
        return <Headset size={22} className="text-[var(--text-primary)]" />;
      default:
        return <Award size={22} className="text-[var(--text-primary)]" />;
    }
  };

  return (
    <section id="about" className="section bg-[var(--bg)]">
      <div className="container">
        
        {/* Eyebrow + Title */}
        <div className="text-center mb-16">
          <span className="eyebrow">My introduction</span>
          <h2
            className="text-h2 text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About Me
          </h2>
          <div className="w-12 h-[1px] bg-[var(--border)] mx-auto mt-4" />
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
          
          {/* Left: Professional Headshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div
              className="relative aspect-[4/5] w-full max-w-[340px] overflow-hidden border border-[var(--border)] bg-[var(--bg-elevated)]"
              style={{ borderRadius: "16px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/headshot.png"
                alt="Youssef Headshot"
                className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Right: Stats & Bio */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-8"
          >
            
            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="card p-4 text-center flex flex-col items-center justify-center border border-[var(--border)] bg-[var(--bg-elevated)]"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  data-cursor="hover"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                    style={{ background: "var(--accent-soft)" }}
                  >
                    {getIcon(stat.icon)}
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] text-body leading-tight">
                    {stat.number}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-[11px] uppercase tracking-wider font-mono mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Paragraph Bio */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-body text-[var(--text-secondary)] leading-relaxed">
                {profile}
              </p>
              <p className="text-body text-[var(--text-secondary)] leading-relaxed">
                Focused on clean architecture, performance, and user experience. Whether developing 
                cross-platform mobile apps with Flutter or scalable full-stack web platforms 
                using Next.js and Django, I enjoy bringing robust digital solutions to life.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <a
                href={identity.resumeUrl}
                download="CV_CHLIH_YOUSSEF.pdf"
                className="inline-flex items-center gap-2 text-small font-mono uppercase tracking-wider link-underline text-[var(--text-primary)]"
                data-cursor="hover"
              >
                Download my CV (PDF)
              </a>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
