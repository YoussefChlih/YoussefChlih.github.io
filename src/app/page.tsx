import GlobalGlowCursor from "@/components/GlobalGlowCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SoftSkills from "@/components/SoftSkills";
import Languages from "@/components/Languages";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <GlobalGlowCursor />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <SoftSkills />
        <Languages />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
