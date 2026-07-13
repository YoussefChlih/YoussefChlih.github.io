export interface LaneSkill {
  id: string;
  name: string;
  /** Simple Icons slug, or null for lucide fallback */
  iconSlug: string | null;
  brandColor: string;
}

export interface SkillLane {
  id: string;
  direction: "left" | "right";
  duration: number;
  skills: LaneSkill[];
}

export const skillLanes: SkillLane[] = [
  {
    id: "data",
    direction: "left",
    duration: 38,
    skills: [
      { id: "postgresql", name: "PostgreSQL", iconSlug: "postgresql", brandColor: "#4169E1" },
      { id: "mongodb", name: "MongoDB", iconSlug: "mongodb", brandColor: "#47A248" },
      { id: "redis", name: "Redis", iconSlug: "redis", brandColor: "#DC382D" },
      { id: "cassandra", name: "Cassandra", iconSlug: "apachecassandra", brandColor: "#1287B1" },
      { id: "neo4j", name: "Neo4j", iconSlug: "neo4j", brandColor: "#018BFF" },
      { id: "powerbi", name: "Power BI", iconSlug: "powerbi", brandColor: "#F2C811" },
      { id: "talend", name: "Talend", iconSlug: "talend", brandColor: "#1675E0" },
    ],
  },
  {
    id: "architecture",
    direction: "right",
    duration: 42,
    skills: [
      { id: "docker", name: "Docker", iconSlug: "docker", brandColor: "#2496ED" },
      { id: "kubernetes", name: "Kubernetes", iconSlug: "kubernetes", brandColor: "#326CE5" },
      { id: "jenkins", name: "Jenkins", iconSlug: "jenkins", brandColor: "#D24939" },
      { id: "terraform", name: "Terraform", iconSlug: "terraform", brandColor: "#7B42BC" },
      { id: "cloudformation", name: "CloudFormation", iconSlug: "amazonaws", brandColor: "#FF9900" },
      { id: "react", name: "React", iconSlug: "react", brandColor: "#61DAFB" },
      { id: "fastapi", name: "FastAPI", iconSlug: "fastapi", brandColor: "#009688" },
    ],
  },
  {
    id: "ai",
    direction: "left",
    duration: 40,
    skills: [
      { id: "python", name: "Python", iconSlug: "python", brandColor: "#3776AB" },
      { id: "ml", name: "Machine Learning", iconSlug: "scikitlearn", brandColor: "#F7931E" },
      { id: "dl", name: "Deep Learning", iconSlug: "pytorch", brandColor: "#EE4C2C" },
      { id: "nlp", name: "NLP", iconSlug: "huggingface", brandColor: "#FFD21E" },
      { id: "rag", name: "RAG", iconSlug: null, brandColor: "#A78BFA" },
      { id: "langchain", name: "LangChain", iconSlug: "langchain", brandColor: "#1FA2A0" },
      { id: "yolov8", name: "YOLOv8", iconSlug: "ultralytics", brandColor: "#111F68" },
    ],
  },
];
