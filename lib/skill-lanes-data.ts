export interface LaneSkill {
  id: string;
  name: string;
  /** Devicon icon name, or null for lucide fallback */
  deviconName: string | null;
  /** Devicon SVG variant (e.g. "original", "plain", "original-wordmark") */
  deviconVariant: string;
  brandColor: string;
}

export interface SkillLane {
  id: string;
  /** Human-readable group label shown above the row. */
  label: string;
  direction: "left" | "right";
  duration: number;
  skills: LaneSkill[];
}

export const skillLanes: SkillLane[] = [
  {
    id: "data",
    label: "Data & Cloud",
    direction: "left",
    duration: 38,
    skills: [
      { id: "postgresql", name: "PostgreSQL", deviconName: "postgresql", deviconVariant: "original", brandColor: "#4169E1" },
      { id: "mongodb", name: "MongoDB", deviconName: "mongodb", deviconVariant: "original", brandColor: "#47A248" },
      { id: "redis", name: "Redis", deviconName: "redis", deviconVariant: "original", brandColor: "#DC382D" },
      { id: "cassandra", name: "Cassandra", deviconName: "cassandra", deviconVariant: "original", brandColor: "#1287B1" },
      { id: "neo4j", name: "Neo4j", deviconName: "neo4j", deviconVariant: "original", brandColor: "#018BFF" },
      { id: "powerbi", name: "Power BI", deviconName: null, deviconVariant: "original", brandColor: "#F2C811" },
      { id: "talend", name: "Talend", deviconName: null, deviconVariant: "original", brandColor: "#1675E0" },
    ],
  },
  {
    id: "architecture",
    label: "Web & DevOps",
    direction: "right",
    duration: 42,
    skills: [
      { id: "docker", name: "Docker", deviconName: "docker", deviconVariant: "original", brandColor: "#2496ED" },
      { id: "kubernetes", name: "Kubernetes", deviconName: "kubernetes", deviconVariant: "original", brandColor: "#326CE5" },
      { id: "jenkins", name: "Jenkins", deviconName: "jenkins", deviconVariant: "original", brandColor: "#D24939" },
      { id: "terraform", name: "Terraform", deviconName: "terraform", deviconVariant: "original", brandColor: "#7B42BC" },
      { id: "cloudformation", name: "CloudFormation", deviconName: "amazonwebservices", deviconVariant: "original-wordmark", brandColor: "#FF9900" },
      { id: "react", name: "React", deviconName: "react", deviconVariant: "original", brandColor: "#61DAFB" },
      { id: "fastapi", name: "FastAPI", deviconName: "fastapi", deviconVariant: "original", brandColor: "#009688" },
    ],
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    direction: "left",
    duration: 40,
    skills: [
      { id: "python", name: "Python", deviconName: "python", deviconVariant: "original", brandColor: "#3776AB" },
      { id: "ml", name: "Machine Learning", deviconName: "scikitlearn", deviconVariant: "original", brandColor: "#F7931E" },
      { id: "dl", name: "Deep Learning", deviconName: "pytorch", deviconVariant: "original", brandColor: "#EE4C2C" },
      { id: "nlp", name: "NLP", deviconName: null, deviconVariant: "original", brandColor: "#FFD21E" },
      { id: "rag", name: "RAG", deviconName: null, deviconVariant: "original", brandColor: "#A78BFA" },
      { id: "langchain", name: "LangChain", deviconName: null, deviconVariant: "original", brandColor: "#1FA2A0" },
      { id: "yolov8", name: "YOLOv8", deviconName: null, deviconVariant: "original", brandColor: "#111F68" },
    ],
  },
];
