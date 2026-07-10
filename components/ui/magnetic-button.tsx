"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  download,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    setPosition({ x: distX * 0.3, y: distY * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Tag = href ? "a" : "button";

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block" }}
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        <Tag
          href={href}
          onClick={onClick}
          download={download || undefined}
          target={target}
          rel={rel}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors duration-300 ${className}`}
          data-cursor="hover"
          style={{
            background: "var(--accent)",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
          }}
        >
          {children}
        </Tag>
      </motion.div>
    </div>
  );
}

export function MagneticButtonOutline({
  children,
  className = "",
  href,
  onClick,
  download,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    setPosition({ x: distX * 0.3, y: distY * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Tag = href ? "a" : "button";

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block" }}
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        <Tag
          href={href}
          onClick={onClick}
          download={download || undefined}
          target={target}
          rel={rel}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors duration-300 ${className}`}
          data-cursor="hover"
          style={{
            background: "transparent",
            color: "var(--text-primary)",
            border: "1px solid var(--border)",
            cursor: "pointer",
          }}
        >
          {children}
        </Tag>
      </motion.div>
    </div>
  );
}
