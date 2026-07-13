import {
  Bot,
  Boxes,
  Brain,
  Clock,
  Cloud,
  Database,
  GitBranch,
  Globe,
  Image,
  Layers,
  Lightbulb,
  MessageCircle,
  Network,
  Puzzle,
  Radar,
  RefreshCw,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type SiIconName =
  | "SiPython"
  | "SiOpenjdk"
  | "SiJavascript"
  | "SiScala"
  | "SiPostgresql"
  | "SiMongodb"
  | "SiRedis"
  | "SiApachecassandra"
  | "SiHtml5"
  | "SiCss"
  | "SiReact"
  | "SiFastapi"
  | "SiGithub"
  | "SiDocker"
  | "SiKubernetes"
  | "SiJenkins"
  | "SiGitlab"
  | "SiTerraform"
  | "SiLangchain"
  | "SiLanggraph"
  | "SiGooglegemini"
  | "SiAnthropic"
  | "SiOpencv"
  | "SiUltralytics"
  | "SiTalend"
  | "SiPytorch"
  | "SiScikitlearn"
  | "SiHuggingface";

export type SkillIconConfig =
  | { kind: "si"; icon: SiIconName }
  | { kind: "cdn"; slug: string }
  | { kind: "lucide"; icon: LucideIcon };

export const skillIconMap: Record<string, SkillIconConfig> = {
  "Machine Learning": { kind: "si", icon: "SiScikitlearn" },
  "Deep Learning": { kind: "si", icon: "SiPytorch" },
  NLP: { kind: "si", icon: "SiHuggingface" },
  GANs: { kind: "lucide", icon: Sparkles },
  LLMs: { kind: "lucide", icon: Bot },
  RAG: { kind: "lucide", icon: Radar },
  "Modèles prédictifs": { kind: "lucide", icon: TrendingUp },
  LangChain: { kind: "si", icon: "SiLangchain" },
  LangGraph: { kind: "si", icon: "SiLanggraph" },
  LangSmith: { kind: "lucide", icon: Target },
  n8n: { kind: "cdn", slug: "n8n" },
  "Gemini VLM": { kind: "si", icon: "SiGooglegemini" },
  "Claude API": { kind: "si", icon: "SiAnthropic" },
  OpenCV: { kind: "si", icon: "SiOpencv" },
  YOLOv8: { kind: "si", icon: "SiUltralytics" },
  "3D CNN": { kind: "lucide", icon: Layers },
  Pillow: { kind: "lucide", icon: Image },
  Talend: { kind: "si", icon: "SiTalend" },
  ETL: { kind: "lucide", icon: Workflow },
  "Data Modeling": { kind: "lucide", icon: Network },
  "Power BI": { kind: "cdn", slug: "powerbi" },
  "SQL Avancé": { kind: "lucide", icon: Database },
  OLAP: { kind: "lucide", icon: Boxes },
  Python: { kind: "si", icon: "SiPython" },
  Java: { kind: "si", icon: "SiOpenjdk" },
  JavaScript: { kind: "si", icon: "SiJavascript" },
  Scala: { kind: "si", icon: "SiScala" },
  SQL: { kind: "lucide", icon: Database },
  PostgreSQL: { kind: "si", icon: "SiPostgresql" },
  MongoDB: { kind: "si", icon: "SiMongodb" },
  Redis: { kind: "si", icon: "SiRedis" },
  Cassandra: { kind: "si", icon: "SiApachecassandra" },
  Neo4j: { kind: "cdn", slug: "neo4j" },
  HTML: { kind: "si", icon: "SiHtml5" },
  CSS: { kind: "si", icon: "SiCss" },
  React: { kind: "si", icon: "SiReact" },
  FastAPI: { kind: "si", icon: "SiFastapi" },
  "REST APIs": { kind: "lucide", icon: Globe },
  "Git/GitHub": { kind: "si", icon: "SiGithub" },
  Docker: { kind: "si", icon: "SiDocker" },
  Kubernetes: { kind: "si", icon: "SiKubernetes" },
  Jenkins: { kind: "si", icon: "SiJenkins" },
  "GitLab CI": { kind: "si", icon: "SiGitlab" },
  Terraform: { kind: "si", icon: "SiTerraform" },
  CloudFormation: { kind: "cdn", slug: "amazonaws" },
  "Travail d’équipe": { kind: "lucide", icon: Users },
  Communication: { kind: "lucide", icon: MessageCircle },
  "Esprit d’analyse": { kind: "lucide", icon: Lightbulb },
  Adaptabilité: { kind: "lucide", icon: RefreshCw },
  "Gestion du temps": { kind: "lucide", icon: Clock },
  "Résolution de problèmes": { kind: "lucide", icon: Puzzle },
  Autonomie: { kind: "lucide", icon: UserCheck },
  Rigueur: { kind: "lucide", icon: Target },
};

export const lucideFallbackSkills: Record<string, LucideIcon> = {
  "Machine Learning": Brain,
  "Deep Learning": Layers,
  NLP: Brain,
  GANs: Sparkles,
  LLMs: Bot,
  RAG: Radar,
  LangSmith: Target,
  "3D CNN": Layers,
  Pillow: Image,
  ETL: Workflow,
  "Data Modeling": Network,
  "SQL Avancé": Database,
  OLAP: Boxes,
  SQL: Database,
  "REST APIs": Globe,
  CloudFormation: Cloud,
  "Git/GitHub": GitBranch,
};

export function getSkillIconConfig(skill: string): SkillIconConfig {
  return (
    skillIconMap[skill] ?? {
      kind: "lucide",
      icon: lucideFallbackSkills[skill] ?? Sparkles,
    }
  );
}

/** Skills rendered with Lucide instead of a Simple Icons brand logo. */
export const lucideSubstitutions: { skill: string; icon: string }[] = [
  { skill: "GANs", icon: "Sparkles" },
  { skill: "LLMs", icon: "Bot" },
  { skill: "RAG", icon: "Radar" },
  { skill: "Modèles prédictifs", icon: "TrendingUp" },
  { skill: "LangSmith", icon: "Target" },
  { skill: "3D CNN", icon: "Layers" },
  { skill: "Pillow", icon: "Image" },
  { skill: "ETL", icon: "Workflow" },
  { skill: "Data Modeling", icon: "Network" },
  { skill: "SQL Avancé", icon: "Database" },
  { skill: "OLAP", icon: "Boxes" },
  { skill: "SQL", icon: "Database" },
  { skill: "REST APIs", icon: "Globe" },
  { skill: "Travail d’équipe", icon: "Users" },
  { skill: "Communication", icon: "MessageCircle" },
  { skill: "Esprit d’analyse", icon: "Lightbulb" },
  { skill: "Adaptabilité", icon: "RefreshCw" },
  { skill: "Gestion du temps", icon: "Clock" },
  { skill: "Résolution de problèmes", icon: "Puzzle" },
  { skill: "Autonomie", icon: "UserCheck" },
  { skill: "Rigueur", icon: "Target" },
];

/** Skills using Simple Icons CDN (no react-icons export available). */
export const cdnSubstitutions: { skill: string; slug: string }[] = [
  { skill: "n8n", slug: "n8n" },
  { skill: "Power BI", slug: "powerbi" },
  { skill: "Neo4j", slug: "neo4j" },
  { skill: "CloudFormation", slug: "amazonaws" },
];
