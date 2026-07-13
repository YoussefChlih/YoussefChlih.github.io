"use client";

import dynamic from "next/dynamic";

const Certifications = dynamic(
  () => import("@/components/sections/certifications").then((m) => m.Certifications),
  { ssr: false, loading: () => <section className="section" id="certifications" /> }
);
const Projects = dynamic(
  () => import("@/components/sections/projects").then((m) => m.Projects),
  { ssr: false, loading: () => <section className="section" id="projects" /> }
);
const Contact = dynamic(
  () => import("@/components/sections/contact").then((m) => m.Contact),
  { ssr: false, loading: () => <section className="section" id="contact" /> }
);

export function BelowFoldSections() {
  return (
    <>
      <hr className="dotted-rule" />
      <Certifications />
      <hr className="dotted-rule" />
      <Projects />
      <hr className="dotted-rule" />
      <Contact />
    </>
  );
}