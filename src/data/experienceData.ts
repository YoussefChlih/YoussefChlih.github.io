export interface LocalizedText {
  en: string;
  fr: string;
}

export interface LocalizedList {
  en: string[];
  fr: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string; // Valid external URL if available; undefined if not discovered
  logoSrc: string;
  projectTitle: LocalizedText;
  role: LocalizedText;
  period: LocalizedText;
  location: LocalizedText;
  context: LocalizedText;
  achievements: LocalizedList;
  tags: string[];
  isFeatured?: boolean;
  illustrationPath: string;
  fallbackType: "mentora" | "dgcnn" | "hardtech";
}

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "hb-dev",
    company: "HB Dev",
    companyUrl: undefined,
    logoSrc: "/experiences/hb-dev-logo.png",
    isFeatured: true,
    projectTitle: {
      en: "Mentora AI — AI-Powered Educational Platform",
      fr: "Mentora AI — Plateforme Éducative Propulsée par l'IA",
    },
    role: {
      en: "AI & Data Developer Intern (Technical Lead)",
      fr: "Stagiaire Développeur IA & Data (Lead Technique)",
    },
    period: {
      en: "April 2026 – Present",
      fr: "04/2026 – Présent",
    },
    location: {
      en: "Tétouan, Morocco (Remote)",
      fr: "Tétouan, Maroc (Remote)",
    },
    context: {
      en: "Internship at HB Dev on Mentora AI, an AI-powered educational platform, where I served as Technical Lead.",
      fr: "Stage au sein de HB Dev sur Mentora AI, une plateforme éducative propulsée par l'intelligence artificielle. J'y ai assuré le rôle de Lead Technique.",
    },
    achievements: {
      en: [
        "Designed a multi-tenant database architecture with Supabase/PostgreSQL, including row-level security (RLS).",
        "Defined canonical data contracts (LessonDataIndex, LessonBlueprint, FinalLessonDocument) for standardizing exchanges between system components.",
        "Built multi-agent AI pipelines with LangChain, LangGraph, and LangSmith (orchestration, tracing, and evaluation), plus an LLM abstraction layer.",
        "Automated educational content generation from course materials.",
        "Built multimodal workflows with n8n, Gemini VLM, and Claude APIs.",
        "Automated PDF processing and image generation/upload workflows using Python and Supabase Storage.",
        "Produced UML use-case modeling for Mentora AI 2.0.",
      ],
      fr: [
        "Conception de l'architecture de la base de données de la plateforme : modèle multi-tenant sur Supabase avec sécurité au niveau des lignes (RLS).",
        "Définition de contrats de données canoniques (LessonDataIndex, LessonBlueprint, FinalLessonDocument) pour standardiser les échanges entre les composants du système.",
        "Développement de pipelines IA multi-agents avec LangChain, LangGraph et LangSmith (orchestration, traçage et évaluation), ainsi que d'une couche d'abstraction pour les LLM.",
        "Automatisation de la génération de contenu pédagogique à partir de supports de cours.",
        "Mise en place de workflows de génération de contenu multimodal avec n8n, en utilisant Gemini (VLM) et les API Claude.",
        "Automatisation en Python du traitement de PDF stockés sur Supabase Storage : conversion des pages en images, téléversement et mise à jour des tables associées.",
        "Modélisation UML (diagramme de cas d'utilisation) de Mentora AI 2.0.",
      ],
    },
    tags: [
      "Python",
      "Supabase",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "n8n",
      "Gemini VLM",
      "Claude API",
      "UML",
    ],
    illustrationPath: "/experiences/mentora-ai-experience-4k.png",
    fallbackType: "mentora",
  },
  {
    id: "3d-smart-factory",
    company: "3D Smart Factory",
    companyUrl: undefined,
    logoSrc: "/experiences/3d-smart-factory-logo.png",
    projectTitle: {
      en: "3D Object Classification System",
      fr: "Système de Classification d'Objets 3D",
    },
    role: {
      en: "AI Developer Intern",
      fr: "Stagiaire Développeur IA",
    },
    period: {
      en: "February 2025 – June 2025",
      fr: "02/2025 – 06/2025",
    },
    location: {
      en: "Mohammedia, Morocco",
      fr: "Mohammedia, Maroc",
    },
    context: {
      en: "4-month internship focused on 3D object classification using deep learning.",
      fr: "Stage de 4 mois consacré à la classification d'objets 3D par apprentissage profond.",
    },
    achievements: {
      en: [
        "Developed a complete 3D object classification system using advanced Machine Learning techniques.",
        "Implemented the DGCNN (Dynamic Graph Convolutional Neural Network) model trained on the ModelNet10 dataset for accurate 3D shape recognition.",
        "Built an interactive Streamlit application for real-time 3D object classification with clear, user-friendly visualization.",
      ],
      fr: [
        "Conception d'un système complet de classification d'objets 3D reposant sur des techniques avancées de Machine Learning.",
        "Implémentation du modèle DGCNN (Dynamic Graph Convolutional Neural Network) entraîné sur le jeu de données ModelNet10 pour une reconnaissance précise des formes 3D.",
        "Développement d'une application interactive avec Streamlit permettant la classification en temps réel et la visualisation des résultats de manière claire et intuitive.",
      ],
    },
    tags: [
      "Python",
      "Deep Learning",
      "DGCNN",
      "ModelNet10",
      "Streamlit",
      "Point Clouds",
    ],
    illustrationPath: "/experiences/3d-smart-factory-experience-4k.png",
    fallbackType: "dgcnn",
  },
  {
    id: "hardtech-maroc",
    company: "HardTech Maroc",
    companyUrl: undefined,
    logoSrc: "/experiences/hardtech-maroc-logo.png",
    projectTitle: {
      en: "Automated IT Fault Detection System",
      fr: "Système de Détection de Pannes IT",
    },
    role: {
      en: "AI Development Intern — IT Fault Detection System",
      fr: "Stagiaire Développeur IA – Système de détection de pannes IT",
    },
    period: {
      en: "August 2024 – September 2024",
      fr: "08/2024 – 09/2024",
    },
    location: {
      en: "Casablanca, Morocco",
      fr: "Casablanca, Maroc",
    },
    context: {
      en: "Internship on improving IT infrastructure reliability through Machine Learning.",
      fr: "Stage portant sur la fiabilité des infrastructures informatiques grâce au Machine Learning.",
    },
    achievements: {
      en: [
        "Designed and implemented an automated IT fault detection system using Machine Learning algorithms.",
        "Analyzed and preprocessed data to optimize model performance and accuracy.",
        "Developed predictive models to anticipate system failures and improve overall infrastructure reliability.",
      ],
      fr: [
        "Conception et implémentation d'un système automatisé de détection de pannes IT basé sur des algorithmes de Machine Learning.",
        "Analyse approfondie et prétraitement des données afin d'optimiser les performances et la précision des modèles.",
        "Développement de modèles prédictifs pour anticiper les défaillances système et améliorer la fiabilité globale de l'infrastructure.",
      ],
    },
    tags: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Data Preprocessing",
      "Predictive Modeling",
    ],
    illustrationPath: "/experiences/hardtech-maroc-experience-4k.png",
    fallbackType: "hardtech",
  },
];
