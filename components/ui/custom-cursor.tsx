"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// Lightweight custom cursor. Uses motion's springy motion values so we avoid
// per-frame React state updates (which were the source of jank in the prior
// implementation: every `mousemove` pushed through `useState`).
export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasCursor, setHasCursor] = useState(false);

  // Raw pointer position drives spring-smoothed x/y.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const hoveringRef = useRef(false);

  useEffect(() => {
    // Only show custom cursor on devices with hover capability.
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    setHasCursor(true);

    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);

      // Delegated hover detection via elementFromPoint/ancestor closest — one
      // listener instead of separate mouseover + mouseout handlers per element.
      const target = e.target as HTMLElement | null;
      const wantsHover = !!(target && target.closest("[data-cursor='hover']"));
      if (wantsHover !== hoveringRef.current) {
        hoveringRef.current = wantsHover;
        setIsHovering(wantsHover);
      }
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y]);

  if (!hasCursor) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
      style={{
        x: sx,
        y: sy,
        scale: isHovering ? 2.5 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
    >
      <div
        className="rounded-full"
        style={{
          width: 12,
          height: 12,
          marginLeft: isHovering ? -20 : -6,
          marginTop: isHovering ? -20 : -6,
          background: "var(--accent)",
          opacity: isHovering ? 0.5 : 0.8,
        }}
      />
    </motion.div>
  );
}
