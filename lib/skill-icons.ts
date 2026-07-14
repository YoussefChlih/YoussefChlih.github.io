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
  | { kind: "cdn"; slug: string; variant?: string }
  | { kind: "lucide"; icon: LucideIcon };

export const skillIconMap: Record<string, SkillIconConfig> = {
  "Machine Learning": { kind: "cdn", slug: "scikitlearn", variant: "original" },
  "Deep Learning": { kind: "cdn", slug: "pytorch", variant: "original" },
  NLP: { kind: "lucide", icon: Brain },
  GANs: { kind: "lucide", icon: Sparkles },
  LLMs: { kind: "lucide", icon: Bot },
  RAG: { kind: "lucide", icon: Radar },
  "Modèles prédictifs": { kind: "lucide", icon: TrendingUp },
  LangChain: { kind: "lucide", icon: Workflow },
  LangGraph: { kind: "lucide", icon: Network },
  LangSmith: { kind: "lucide", icon: Target },
  n8n: { kind: "cdn", slug: "nodejs", variant: "original" },
  "Gemini VLM": { kind: "cdn", slug: "google", variant: "original" },
  "Claude API": { kind: "lucide", icon: Bot },
  OpenCV: { kind: "cdn", slug: "opencv", variant: "original" },
  YOLOv8: { kind: "lucide", icon: Radar },
  "3D CNN": { kind: "lucide", icon: Layers },
  Pillow: { kind: "lucide", icon: Image },
  Talend: { kind: "lucide", icon: Workflow },
  ETL: { kind: "lucide", icon: Workflow },
  "Data Modeling": { kind: "lucide", icon: Network },
  "Power BI": { kind: "lucide", icon: TrendingUp },
  "SQL Avancé": { kind: "lucide", icon: Database },
  OLAP: { kind: "lucide", icon: Boxes },
  Python: { kind: "cdn", slug: "python", variant: "original" },
  Java: { kind: "cdn", slug: "java", variant: "original" },
  JavaScript: { kind: "cdn", slug: "javascript", variant: "original" },
  Scala: { kind: "cdn", slug: "scala", variant: "original" },
  SQL: { kind: "lucide", icon: Database },
  PostgreSQL: { kind: "cdn", slug: "postgresql", variant: "original" },
  MongoDB: { kind: "cdn", slug: "mongodb", variant: "original" },
  Redis: { kind: "cdn", slug: "redis", variant: "original" },
  Cassandra: { kind: "cdn", slug: "cassandra", variant: "original" },
  Neo4j: { kind: "cdn", slug: "neo4j", variant: "original" },
  HTML: { kind: "cdn", slug: "html5", variant: "original" },
  CSS: { kind: "cdn", slug: "css3", variant: "original" },
  React: { kind: "cdn", slug: "react", variant: "original" },
  FastAPI: { kind: "cdn", slug: "fastapi", variant: "original" },
  "REST APIs": { kind: "lucide", icon: Globe },
  "Git/GitHub": { kind: "cdn", slug: "github", variant: "original" },
  Docker: { kind: "cdn", slug: "docker", variant: "original" },
  Kubernetes: { kind: "cdn", slug: "kubernetes", variant: "original" },
  Jenkins: { kind: "cdn", slug: "jenkins", variant: "original" },
  "GitLab CI": { kind: "cdn", slug: "gitlab", variant: "original" },
  Terraform: { kind: "cdn", slug: "terraform", variant: "original" },
  CloudFormation: { kind: "cdn", slug: "amazonwebservices", variant: "original-wordmark" },
  "Travail d'équipe": { kind: "lucide", icon: Users },
  Communication: { kind: "lucide", icon: MessageCircle },
  "Esprit d'analyse": { kind: "lucide", icon: Lightbulb },
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
  { skill: "Travail d'équipe", icon: "Users" },
  { skill: "Communication", icon: "MessageCircle" },
  { skill: "Esprit d'analyse", icon: "Lightbulb" },
  { skill: "Adaptabilité", icon: "RefreshCw" },
  { skill: "Gestion du temps", icon: "Clock" },
  { skill: "Résolution de problèmes", icon: "Puzzle" },
  { skill: "Autonomie", icon: "UserCheck" },
  { skill: "Rigueur", icon: "Target" },
];

/** Skills using Devicon CDN. */
export const cdnSubstitutions: { skill: string; slug: string; variant?: string }[] = [
  { skill: "Python", slug: "python", variant: "original" },
  { skill: "Java", slug: "java", variant: "original" },
  { skill: "JavaScript", slug: "javascript", variant: "original" },
  { skill: "Scala", slug: "scala", variant: "original" },
  { skill: "PostgreSQL", slug: "postgresql", variant: "original" },
  { skill: "MongoDB", slug: "mongodb", variant: "original" },
  { skill: "Redis", slug: "redis", variant: "original" },
  { skill: "Neo4j", slug: "neo4j", variant: "original" },
  { skill: "HTML", slug: "html5", variant: "original" },
  { skill: "CSS", slug: "css3", variant: "original" },
  { skill: "React", slug: "react", variant: "original" },
  { skill: "FastAPI", slug: "fastapi", variant: "original" },
  { skill: "Docker", slug: "docker", variant: "original" },
  { skill: "Kubernetes", slug: "kubernetes", variant: "original" },
  { skill: "Jenkins", slug: "jenkins", variant: "original" },
  { skill: "GitLab CI", slug: "gitlab", variant: "original" },
  { skill: "Terraform", slug: "terraform", variant: "original" },
  { skill: "CloudFormation", slug: "amazonwebservices", variant: "original-wordmark" },
  { skill: "Machine Learning", slug: "scikitlearn", variant: "original" },
  { skill: "Deep Learning", slug: "pytorch", variant: "original" },
  { skill: "OpenCV", slug: "opencv", variant: "original" },
  { skill: "Git/GitHub", slug: "github", variant: "original" },
];
