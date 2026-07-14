// ===== New Editorial Monochrome Portfolio Content =====
// Pulls real data from CV: Youssef El Yarchouhi (Software Engineer)

export const identity = {
  name: "Youssef CHLIH",
  title: "AI & Data Developer",
  logoText: "YoussefEL01",
  email: "youssefchlih.ai@gmail.com", // Keeping real email from CV
  whatsapp: "+212606544498", // WhatsApp link / contact number
  phone: "+212 6 06 54 44 98",
  linkedin: "https://linkedin.com/in/youssef-chlih",
  github: "https://github.com/YoussefChlih",
  // Real handles (not bare domains) — external links must point at the profile.
  instagram: "https://instagram.com/youssefchlih",
  youtube: "https://youtube.com/@YoussefChlih",
  location: "Kenitra, Morocco",
  resumeUrl: "/CV_CHLIH_YOUSSEF.pdf",
};

export const heroTagline =
  "AI & Data Developer building intelligent systems with machine learning, NLP, and computer vision — from research to production.";

export const profile =
  "AI & Data Developer focused on machine learning, deep learning, NLP, computer vision, and data engineering. Currently interning at HB Dev on the Mentora AI platform, building databases and AI pipelines with LangChain, LangGraph, LangSmith, n8n, Gemini VLM, and Claude API. Trilingual in Arabic, French, and English, with a strong bias for rigor and results.";

export interface Stat {
  icon: string;
  number: string;
  label: string;
}

export const stats: Stat[] = [
  { icon: "award", number: "3+", label: "Years Experience" },
  { icon: "briefcase", number: "6", label: "Projects & Research" },
  { icon: "headset", number: "3", label: "Languages Spoken" },
];

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
      "Conceived and structured the Mentora AI database to organize data for the educational pipeline",
      "Developed n8n workflows (Gemini VLM, Claude API) and Python pipelines with LangChain, LangGraph, and LangSmith for automated multimodal educational content generation",
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
      "Designed an automated computer fault detection system using machine learning",
      "Analyzed and preprocessed data to improve predictive model performance",
    ],
  },
];

export interface Qualification {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  type: "education" | "experience";
}

export const qualifications: Qualification[] = [
  // Education
  {
    id: "est-big-data",
    title: "Licence Big Data & Intelligence Artificielle",
    subtitle: "EST Salé",
    date: "2025 – 2026",
    type: "education",
  },
  {
    id: "dut-iai-de",
    title: "DUT Intelligence Artificielle & Data Engineering",
    subtitle: "EST Nador",
    date: "2023 – 2025",
    type: "education",
  },
  {
    id: "bac-sm-a",
    title: "Baccalauréat Sciences Mathématiques A",
    subtitle: "Lycée Moulay Rachid",
    date: "2022 – 2023",
    type: "education",
  },
  // Experience
  {
    id: "hb-dev",
    title: "HB Dev",
    subtitle: "AI & Data Engineering Intern",
    date: "Apr 2026 – Present",
    type: "experience",
  },
  {
    id: "3d-smart-factory",
    title: "3D Smart Factory",
    subtitle: "AI Developer Intern",
    date: "Feb 2025 – Jun 2025",
    type: "experience",
  },
  {
    id: "hardtech-maroc",
    title: "HardTech Maroc",
    subtitle: "AI Development Intern",
    date: "Aug 2024 – Sep 2024",
    type: "experience",
  },
];

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "IA & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "GANs",
      "LLMs",
      "RAG",
      "Modèles prédictifs",
    ],
  },
  {
    title: "Pipelines IA & Orchestration",
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
    title: "Computer Vision",
    skills: [
      "OpenCV",
      "YOLOv8",
      "3D CNN",
      "Pillow",
    ],
  },
  {
    title: "Data & BI",
    skills: [
      "Talend",
      "ETL",
      "Data Modeling",
      "Power BI",
      "SQL Avancé",
      "OLAP",
    ],
  },
  {
    title: "Langages de Programmation",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "Scala",
    ],
  },
  {
    title: "Bases de Données",
    skills: [
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Cassandra",
      "Neo4j",
    ],
  },
  {
    title: "Web & APIs",
    skills: [
      "HTML",
      "CSS",
      "React",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    title: "DevOps & Infrastructure",
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
  {
    title: "Compétences Interpersonnelles",
    skills: [
      "Travail d’équipe",
      "Communication",
      "Esprit d’analyse",
      "Adaptabilité",
      "Gestion du temps",
      "Résolution de problèmes",
      "Autonomie",
      "Rigueur",
    ],
  },
];

export interface Project {
  title: string;
  category: "web" | "mobile" | "cv"; // cv = computer vision
  description: string;
  date: string;
  tags?: string[];
  url?: string;
  isLive?: boolean;
}

export const projects: Project[] = [
  {
    title: "HireGenius",
    category: "web",
    description: "Intelligent recruitment system that analyzes CVs with NLP and evaluates interview emotions with facial and voice analysis.",
    date: "2025",
    tags: ["NLP", "Computer vision", "Recruitment"],
  },
  {
    title: "Kwizy",
    category: "web",
    description: "AI-powered quiz platform built with Retrieval-Augmented Generation, Python, and Flask, with CI/CD and automated testing.",
    date: "December 2025",
    tags: ["RAG", "Flask", "CI/CD"],
  },
  {
    title: "Data Warehouse",
    category: "web",
    description: "Data warehouse built in star schema to analyze academic programs and job market needs, with ETL, Power BI dashboards, and OLAP analysis.",
    date: "January 2026",
    tags: ["ETL", "Power BI", "OLAP"],
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  description: string;
  date: string;
  url?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Oracle Cloud Infrastructure 2024 Foundations Associate",
    issuer: "Oracle",
    description: "Foundational Oracle Cloud certification covering core cloud services and concepts.",
    date: "2024",
  },
  {
    title: "Generative AI Professional",
    issuer: "Oracle Cloud Infrastructure",
    description: "Professional certification focused on practical generative AI concepts and usage.",
    date: "2025",
  },
  {
    title: "The Machine Learning Process A–Z",
    issuer: "365 Data Science",
    description: "Machine learning workflow and methodology course from data preparation to deployment.",
    date: "2025",
  },
  {
    title: "Python Programmer Bootcamp",
    issuer: "365 Data Science",
    description: "Python programming bootcamp focused on practical coding foundations and problem solving.",
    date: "2025",
  },
  {
    title: "Intro to Data Science",
    issuer: "Cisco Academy",
    description: "Introductory data science certification covering core analysis and data concepts.",
    date: "2025",
  },
  {
    title: "MLOps Level 2",
    issuer: "Coursera",
    description: "Operational machine learning certification focused on model lifecycle and deployment workflows.",
    date: "2025",
  },
];
