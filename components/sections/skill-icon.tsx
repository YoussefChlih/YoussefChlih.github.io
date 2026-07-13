"use client";

import dynamic from "next/dynamic";
import { getSkillIconConfig } from "@/lib/skill-icons";

const LazySiIcon = dynamic(
  () =>
    import("@/components/sections/si-icon-renderer").then((mod) => ({
      default: mod.SiIconRenderer,
    })),
  {
    ssr: false,
    loading: () => (
      <span
        className="inline-block h-[18px] w-[18px] shrink-0 rounded-sm bg-[var(--accent-soft)]"
        aria-hidden
      />
    ),
  }
);

interface SkillIconProps {
  skill: string;
}

export function SkillIcon({ skill }: SkillIconProps) {
  const config = getSkillIconConfig(skill);

  if (config.kind === "si") {
    return (
      <LazySiIcon
        name={config.icon}
        className="h-[18px] w-[18px] shrink-0 text-[var(--text-primary)]"
      />
    );
  }

  if (config.kind === "cdn") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://cdn.simpleicons.org/${config.slug}`}
        alt=""
        width={18}
        height={18}
        loading="lazy"
        decoding="async"
        className="skill-cdn-icon h-[18px] w-[18px] shrink-0"
        aria-hidden
      />
    );
  }

  const LucideIcon = config.icon;
  return (
    <LucideIcon
      size={18}
      strokeWidth={1.75}
      className="shrink-0 text-[var(--text-primary)]"
      aria-hidden
    />
  );
}
