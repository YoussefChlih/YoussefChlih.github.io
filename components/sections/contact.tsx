"use client";

import { motion } from "motion/react";
import { Mail, Phone, ArrowRight, MessageSquare, Compass } from "lucide-react";
import { identity } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function Contact() {
  return (
    <section id="contact" className="section bg-[var(--bg)]">
      <div className="container">
        
        {/* Eyebrow + Title */}
        <div className="text-center mb-16">
          <span className="eyebrow">Contact Me</span>
          <h2
            className="text-h2 text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get in touch
          </h2>
          <div className="w-12 h-[1px] bg-[var(--border)] mx-auto mt-4" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Left Column: Talk to me */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-6"
          >
            <h3 className="font-bold text-[var(--text-primary)] font-mono text-small uppercase tracking-wider mb-2">
              Talk to me
            </h3>

            {/* Email Card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 border border-dashed border-[var(--border-dotted)] bg-[var(--bg-elevated)]"
              style={{ borderRadius: "16px" }}
              data-cursor="hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "var(--accent-soft)" }}
                >
                  <Mail size={18} className="text-[var(--text-primary)]" />
                </div>
                <div>
                  <h4 className="font-bold text-body text-[var(--text-primary)] leading-tight">
                    Email
                  </h4>
                  <p className="text-[12px] text-[var(--text-secondary)] mt-0.5">
                    {identity.email}
                  </p>
                </div>
              </div>
              <a
                href={`mailto:${identity.email}`}
                className="inline-flex items-center gap-1.5 text-small font-mono uppercase tracking-wider text-[var(--text-primary)] hover:translate-x-1 transition-transform duration-200"
              >
                Write me <ArrowRight size={13} />
              </a>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 border border-dashed border-[var(--border-dotted)] bg-[var(--bg-elevated)]"
              style={{ borderRadius: "16px" }}
              data-cursor="hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "var(--accent-soft)" }}
                >
                  <MessageSquare size={18} className="text-[var(--text-primary)]" />
                </div>
                <div>
                  <h4 className="font-bold text-body text-[var(--text-primary)] leading-tight">
                    WhatsApp
                  </h4>
                  <p className="text-[12px] text-[var(--text-secondary)] mt-0.5">
                    {identity.phone}
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/${identity.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-small font-mono uppercase tracking-wider text-[var(--text-primary)] hover:translate-x-1 transition-transform duration-200"
              >
                Write me <ArrowRight size={13} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Write me your Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-bold text-[var(--text-primary)] font-mono text-small uppercase tracking-wider mb-2">
              Write me your Message
            </h3>

            <div
              className="p-6 border border-dashed border-[var(--border-dotted)] bg-[var(--bg-elevated)]"
              style={{ borderRadius: "16px" }}
            >
              {/* Simple Mailto-Backed Client Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get("name") as string;
                  const email = formData.get("email") as string;
                  const message = formData.get("message") as string;
                  const mailtoUrl = `mailto:${identity.email}?subject=Message from ${encodeURIComponent(
                    name
                  )} (${encodeURIComponent(email)})&body=${encodeURIComponent(
                    message
                  )}`;
                  window.location.href = mailtoUrl;
                }}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Insert your name"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-small text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Insert your email"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-small text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Write your project message"
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-small text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-primary)] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full font-mono uppercase tracking-wider text-small transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                  style={{
                    background: "var(--accent)",
                    color: "var(--bg)",
                  }}
                  data-cursor="hover"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
