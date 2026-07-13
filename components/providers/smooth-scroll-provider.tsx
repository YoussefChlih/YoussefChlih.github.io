"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register once at module scope (idempotent — gsap ignores duplicate registration)
// so plugin registration survives Fast Refresh / re-renders without stacking.
gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect reduced motion preference — bail with no listeners attached.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Guard against double init across Strict Mode remounts / Fast Refresh.
    if (lenisRef.current) return;

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.15,
    });
    lenisRef.current = lenis;

    // Sync Lenis scroll updates into GSAP ScrollTrigger.
    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    // Drive Lenis via the GSAP ticker so we have one RAF loop globally.
    // IMPORTANT: keep a stable reference so the cleanup removes the *same*
    // callback that was registered (the original code removed `lenis.raf`,
    // which is NOT the function that was added, leaking a ticker callback).
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
