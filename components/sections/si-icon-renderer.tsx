"use client";

import {
  SiAnthropic,
  SiApachecassandra,
  SiCss,
  SiDocker,
  SiFastapi,
  SiGithub,
  SiGitlab,
  SiGooglegemini,
  SiHtml5,
  SiHuggingface,
  SiJavascript,
  SiJenkins,
  SiKubernetes,
  SiLangchain,
  SiLanggraph,
  SiMongodb,
  SiOpencv,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiScala,
  SiScikitlearn,
  SiTalend,
  SiTerraform,
  SiUltralytics,
} from "react-icons/si";
import type { SiIconName } from "@/lib/skill-icons";

const ICON_MAP = {
  SiPython,
  SiOpenjdk,
  SiJavascript,
  SiScala,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiApachecassandra,
  SiHtml5,
  SiCss,
  SiReact,
  SiFastapi,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGitlab,
  SiTerraform,
  SiLangchain,
  SiLanggraph,
  SiGooglegemini,
  SiAnthropic,
  SiOpencv,
  SiUltralytics,
  SiTalend,
  SiPytorch,
  SiScikitlearn,
  SiHuggingface,
} as const;

interface SiIconRendererProps {
  name: SiIconName;
  className?: string;
}

export function SiIconRenderer({ name, className }: SiIconRendererProps) {
  const Icon = ICON_MAP[name];
  return <Icon className={className} aria-hidden />;
}
