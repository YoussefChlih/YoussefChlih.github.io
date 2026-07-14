import { Certifications } from "@/components/sections/certifications";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

// These sections are rendered as part of the static, server-rendered page so
// their content exists in the initial HTML (SEO + no-JS visitors). They stay
// client components for their interactive bits (carousel/filter/form) but are
// no longer hidden behind `ssr: false`, which previously bailed them out to
// client-only rendering and left empty <section> placeholders in the HTML.
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
