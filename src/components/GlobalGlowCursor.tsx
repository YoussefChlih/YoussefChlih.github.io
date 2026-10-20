"use client";

import React, { useState, useEffect } from "react";
import GlowCursor from "@/components/GlowCursor";
import { useTheme } from "@/context/ThemeContext";

export default function GlobalGlowCursor() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only mount on client and non-touch devices for optimal performance
    if (typeof window !== "undefined") {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      if (!isTouch) {
        setMounted(true);
      }
    }
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      aria-hidden="true"
    >
      <GlowCursor
        color={theme === "dark" ? "#00d4aa" : "#0d9488"}
        secondaryColor={theme === "dark" ? "#00b4d8" : "#14b8a6"}
        intensity={1.2}
        trailWidth={3.5}
        linger={1.3}
        glow={1.1}
        hotspot={0.75}
        clickBurst={true}
        theme={theme === "dark" ? "dark" : "light"}
        className="w-full h-full pointer-events-none"
      />
    </div>
  );
}
