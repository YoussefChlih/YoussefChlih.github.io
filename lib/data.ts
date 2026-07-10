// ===== All content from 05-content-cv.md — translated to English =====
// No content is invented. Strict 1:1 mapping from the CV.

export const identity = {
  name: "Youssef CHLIH",
  title: "AI & Data Developer",
  email: "youssefchlih.ai@gmail.com",
  phone: "+212 6 06 54 44 98",
  linkedin: "https://linkedin.com/in/youssef-chlih",
  location: "Kénitra, Morocco",
  resumeUrl: "/CV_CHLIH_YOUSSEF.pdf",
};

export const profile =
  "Student in Big Data & Artificial Intelligence, currently interning at HB Dev on the Mentora AI educational platform: designing databases and AI pipelines (LangChain, LangGraph, LangSmith) for automated generation of personalized multimodal educational content. Strong experience in ML, Deep Learning, Computer Vision, and NLP. Trilingual (Arabic, French, English), detail-oriented and results-driven.";

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: "hbdev",
    company: "HB Dev",
    role: "AI & Data Engineering Intern",
    period: "Apr 2026 – Present",
    location: "Tétouan",
    description: [
      "Designed and structured the Mentora AI platform database to organize AI pipeline data",
      "Developed n8n workflows (Gemini VLM, Claude API) and Python pipelines (LangChain, LangGraph, LangSmith) for automated generation of personalized multimodal educational content",
    ],
  },
  {
    id: "3dsmartfactory",
    company: "3D Smart Factory",
    role: "AI Developer Intern",
    period: "Feb 2025 – Jun 2025",
    location: "Mohammedia",
    description: [
      "Developed a 3D object classification system based on a DGCNN model trained on ModelNet10",
      "Built an interactive Streamlit application for real-time classification and visualization",
    ],
  },
  {
    id: "hardtech",
    company: "HardTech Maroc",
    role: "AI Development Intern",
    period: "Aug 2024 – Sep 2024",
    location: "Casablanca",
    description: [
      "Designed an automated computer fault detection system using Machine Learning",
      "Analyzed and preprocessed data to optimize predictive model performance",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  type: string;
  description: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "hiregenius",
    title: "HireGenius",
    subtitle: "Intelligent AI-Powered Recruitment System",
    year: "2025",
    type: "End-of-studies Project",
    description: [
      "NLP-based CV analysis for ranking candidates by relevance",
      "Facial expression analysis with YOLOv8 and voice emotion analysis with CNN-BiLSTM during interviews",
    ],
    tags: ["NLP", "YOLOv8", "CNN-BiLSTM", "Deep Learning", "Computer Vision"],
  },
  {
    id: "kwizy",
    title: "Kwizy",
    subtitle: "Intelligent Quiz Platform with RAG",
    year: "Dec 2025",
    type: "Personal Project",
    description: [
      "AI-powered web application based on Retrieval-Augmented Generation (RAG), built with Python and Flask",
      "CI/CD pipeline with Jenkins and Docker, Agile/Scrum methodology and automated testing",
    ],
    tags: ["RAG", "Python", "Flask", "Docker", "Jenkins", "CI/CD"],
  },
  {
    id: "datawarehouse",
    title: "Data Warehouse",
    subtitle: "LinkedIn Academic Program Analysis",
    year: "Jan 2026",
    type: "Academic Project — EST Salé",
    description: [
      "Star schema Data Warehouse modeling to analyze the link between academic programs and job market needs",
      "Complete ETL pipeline with Talend Open Studio on 7,700+ records with data quality controls",
      "Power BI and SQL dashboards with business KPIs and OLAP analysis (slicing, dicing, drill-down)",
    ],
    tags: ["Talend", "Power BI", "SQL", "ETL", "Data Modeling", "OLAP"],
  },
];

export interface Education {
  degree: string;
  period: string;
  school: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor's in Big Data & Artificial Intelligence",
    period: "2025 – 2026",
    school: "EST Salé",
  },
  {
    degree: "DUT in Artificial Intelligence & Data Engineering",
    period: "2023 – 2025",
    school: "EST Nador",
  },
  {
    degree: "Baccalaureate in Mathematical Sciences A",
    period: "2022 – 2023",
    school: "Lycée Moulay Rachid",
  },
];

export interface Certification {
  id: string;
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  {
    id: "oci-foundations",
    name: "Oracle Cloud Infrastructure 2024 — Foundations Associate",
    issuer: "Oracle",
  },
  {
    id: "oci-genai",
    name: "Generative AI Professional",
    issuer: "Oracle Cloud Infrastructure (2025)",
  },
  {
    id: "ml-process",
    name: "The Machine Learning Process A–Z",
    issuer: "365 Data Science",
  },
  {
    id: "python-bootcamp",
    name: "Python Programmer Bootcamp",
    issuer: "365 Data Science",
  },
  {
    id: "data-science-intro",
    name: "Intro to Data Science",
    issuer: "Cisco Academy",
  },
  {
    id: "mlops",
    name: "MLOps Level 2",
    issuer: "Coursera",
  },
];

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "GANs",
      "LLMs",
      "RAG",
      "Predictive Models",
    ],
  },
  {
    id: "ai-pipelines",
    name: "AI Pipelines & Orchestration",
    skills: [
      "LangChain",
      "LangGraph",
      "LangSmith",
      "n8n",
      "Gemini VLM",
      "Claude API",
    ],
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    skills: ["OpenCV", "YOLOv8", "3D CNN", "Pillow"],
  },
  {
    id: "data-bi",
    name: "Data & BI",
    skills: [
      "Talend",
      "ETL",
      "Data Modeling",
      "Power BI",
      "Advanced SQL",
      "OLAP",
    ],
  },
  {
    id: "languages",
    name: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "Scala"],
  },
  {
    id: "databases",
    name: "Databases",
    skills: ["SQL", "PostgreSQL", "MongoDB", "Redis", "Cassandra", "Neo4j"],
  },
  {
    id: "web-apis",
    name: "Web & APIs",
    skills: ["HTML", "CSS", "React", "FastAPI", "REST APIs"],
  },
  {
    id: "devops",
    name: "DevOps & Infrastructure",
    skills: [
      "Git/GitHub",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitLab CI",
      "Terraform",
      "CloudFormation",
    ],
  },
];

export const softSkills = [
  "Teamwork",
  "Communication",
  "Analytical Thinking",
  "Adaptability",
  "Time Management",
  "Problem Solving",
  "Autonomy",
  "Rigor",
];

export interface Language {
  name: string;
  level: string;
}

export const languages: Language[] = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Fluent" },
];

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
