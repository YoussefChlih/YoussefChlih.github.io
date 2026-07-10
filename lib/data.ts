// ===== New Editorial Monochrome Portfolio Content =====
// Pulls real data from CV: Youssef El Yarchouhi (Software Engineer)

export const identity = {
  name: "Youssef El Yarchouhi",
  title: "Software Engineer",
  logoText: "YoussefEL01",
  email: "youssefchlih.ai@gmail.com", // Keeping real email from CV
  whatsapp: "+212606544498", // WhatsApp link / contact number
  phone: "+212 6 06 54 44 98",
  linkedin: "https://linkedin.com/in/youssef-chlih",
  github: "https://github.com/YoussefChlih",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  location: "Kénitra, Morocco",
  resumeUrl: "/CV_CHLIH_YOUSSEF.pdf",
};

export const profile =
  "Passionate about building digital solutions, web/mobile development, and artificial intelligence. My journey started with Harvard's CS50x, which sparked a deep-seated passion for full-stack engineering, problem-solving, and continuous learning.";

export interface Stat {
  icon: string;
  number: string;
  label: string;
}

export const stats: Stat[] = [
  { icon: "award", number: "3 Years", label: "Experience" },
  { icon: "briefcase", number: "12+", label: "Completed Projects" },
  { icon: "headset", number: "Online 24/7", label: "Support" },
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
    company: "HB Dev (Mentora AI)",
    role: "AI & Data Engineering Intern",
    period: "Apr 2026 – Present",
    location: "Tétouan",
    description: [
      "Conceived and structured databases for the Mentora AI educational platform to optimize content pipelines",
      "Developed Python pipelines (LangChain, LangGraph, LangSmith) and n8n workflows for automated generation of personalized pedagogical content",
    ],
  },
  {
    id: "3dsmartfactory",
    company: "3D Smart Factory",
    role: "AI Developer Intern",
    period: "Feb 2025 – Jun 2025",
    location: "Mohammedia",
    description: [
      "Developed a 3D object classification system using a DGCNN deep learning model trained on ModelNet10",
      "Built an interactive Streamlit application for real-time inference and visualization",
    ],
  },
  {
    id: "hardtech",
    company: "HardTech Maroc (BabyBain)",
    role: "AI Development Intern",
    period: "Aug 2024 – Sep 2024",
    location: "Casablanca",
    description: [
      "Designed an automated hardware fault detection system using Machine Learning algorithms",
      "Analyzed and preprocessed telemetry data to optimize predictive performance",
    ],
  },
];

export interface Qualification {
  title: string;
  subtitle: string;
  date: string;
  type: "education" | "experience";
}

export const qualifications: Qualification[] = [
  // Education
  {
    title: "ENAID",
    subtitle: "Software Engineering Degree",
    date: "Oct 2024 – Jun 2027",
    type: "education",
  },
  {
    title: "Higher School of Technology - EST",
    subtitle: "DUT Web & Mobile App Dev",
    date: "Sep 2022 – Apr 2024",
    type: "education",
  },
  {
    title: "Multidisciplinary Faculty",
    subtitle: "Biology Studies",
    date: "Sep 2021 – Feb 2022",
    type: "education",
  },
  {
    title: "Ibn Nafis High School",
    subtitle: "Baccalauréat, Science Physique",
    date: "Sep 2020 – Jun 2021",
    type: "education",
  },
  // Experience
  {
    title: "HB Dev",
    subtitle: "AI & Data Engineering Intern",
    date: "Apr 2026 – Present",
    type: "experience",
  },
  {
    title: "3D Smart Factory",
    subtitle: "AI Developer Intern",
    date: "Feb 2025 – Jun 2025",
    type: "experience",
  },
  {
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
    title: "Frameworks & Libraries",
    skills: [
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js",
      "Tailwind",
      "Django",
      "Flask",
      "Laravel",
      "Bootstrap",
      "jQuery",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Git",
      "Postman",
      "PostgreSQL",
      "Wordpress",
      "MySQL",
      "Firebase",
      "Figma",
      "Jira",
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "Java",
      "C#",
      "C++",
      "Go",
    ],
  },
];

export interface Project {
  title: string;
  category: "web" | "mobile" | "cv"; // cv = computer vision
  description: string;
  date: string;
  url?: string;
  isLive?: boolean;
}

export const projects: Project[] = [
  {
    title: "RezAdapt.com",
    category: "web",
    description: "Adaptive web platform optimizing layout structures for responsive business displays.",
    date: "March 2026",
    isLive: true,
  },
  {
    title: "Tadartino Real Estate Platform",
    category: "web",
    description: "Comprehensive property listings search platform featuring interactive geolocation features.",
    date: "January 2026",
    isLive: true,
  },
  {
    title: "CoStudy Learning Sessions Platform",
    category: "web",
    description: "Peer-to-peer virtual sessions booking platform for university study clubs.",
    date: "December 2025",
  },
  {
    title: "Quiz Master",
    category: "web",
    description: "Intelligent web-based quiz orchestrator utilizing RAG (Retrieval-Augmented Generation).",
    date: "November 2025",
  },
  {
    title: "Flutter Club Community App",
    category: "mobile",
    description: "Cross-platform mobile application providing real-time event booking and updates for communities.",
    date: "October 2025",
  },
  {
    title: "Hand Tracking Project",
    category: "cv",
    description: "Real-time gestures-based controls implementation using OpenCV and MediaPipe.",
    date: "September 2025",
  },
  {
    title: "Django Auctions Website",
    category: "web",
    description: "Interactive real-time bid orchestrator complete with notifications and checkout forms.",
    date: "June 2025",
  },
  {
    title: "Flask Ecommerce Website",
    category: "web",
    description: "Microservices-ready shopping cart platform featuring secure payment processors.",
    date: "May 2025",
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
    title: "CS50's Introduction to Computer Science",
    issuer: "HarvardX",
    description: "Rigorous entry-level computer science foundations course covering C, Python, SQL, and Web structures.",
    date: "2024",
  },
  {
    title: "CS50's Web Programming with Python and JavaScript",
    issuer: "HarvardX",
    description: "Full-stack programming course deep diving into Django, React, CI/CD, SQL, and CSS layout controls.",
    date: "2024",
  },
];
