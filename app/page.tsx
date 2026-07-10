import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Qualification } from "@/components/sections/qualification";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <hr className="dotted-rule" />
      <About />
      <hr className="dotted-rule" />
      <Skills />
      <hr className="dotted-rule" />
      <Certifications />
      <hr className="dotted-rule" />
      <Qualification />
      <hr className="dotted-rule" />
      <Projects />
      <hr className="dotted-rule" />
      <Contact />
      <Footer />
    </main>
  );
}
