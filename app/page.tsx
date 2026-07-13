import dynamicImport from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Qualification } from "@/components/sections/qualification";
import { BelowFoldSections } from "@/components/sections/below-fold-sections";

const Footer = dynamicImport(
  () => import("@/components/sections/footer").then((m) => m.Footer),
  { loading: () => null }
);

// Route segment config: this page is 100% static content. Confirm to the
// compiler that we never need per-request server compute, so Vercel serves it
// straight from the CDN edge with zero function invocation.
export const dynamic = "force-static";
export const revalidate = false;

export default function Home() {
  return (
    <main>
      <Hero />
      <hr className="dotted-rule" />
      <About />
      <hr className="dotted-rule" />
      <Skills />
      <hr className="dotted-rule" />
      <Qualification />
      <BelowFoldSections />
      <Footer />
    </main>
  );
}
