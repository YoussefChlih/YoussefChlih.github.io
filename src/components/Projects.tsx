"use client";

import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  FolderOpen,
  Layers,
  Sparkles,
  CheckCircle2,
  X,
  Code2,
  Calendar,
  Info,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import Folder from "./Folder";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export interface ProjectData {
  id: string;
  number: string;
  category: "ai" | "data" | "web";
  title: {
    en: string;
    fr: string;
  };
  subtitle: {
    en: string;
    fr: string;
  };
  period: {
    en: string;
    fr: string;
  };
  badge: {
    en: string;
    fr: string;
  };
  desc: {
    en: string;
    fr: string;
  };
  highlights: {
    en: string[];
    fr: string[];
  };
  engineering?: {
    en: string[];
    fr: string[];
  };
  tags: string[];
  image: string;
  color: string;
  githubUrl: string;
  liveDemoUrl: string;
}

export const PROJECTS: ProjectData[] = [
  {
    id: "kwizy",
    number: "01",
    category: "ai",
    title: {
      en: "Kwizy: RAG-Based Quiz Platform",
      fr: "Kwizy : Plateforme de quiz basée sur le RAG",
    },
    subtitle: {
      en: "Automated Self-Assessment via Retrieval-Augmented Generation",
      fr: "Auto-évaluation automatisée par Génération Augmentée de Récupération (RAG)",
    },
    period: {
      en: "Personal Project · December 2025",
      fr: "Projet personnel · Décembre 2025",
    },
    badge: {
      en: "Personal Project",
      fr: "Projet Personnel",
    },
    desc: {
      en: "A full-featured web application that dynamically generates context-aware quizzes from user-uploaded documents so learners can evaluate their knowledge retention with instant feedback.",
      fr: "Une application web complète qui génère des quiz contextualisés à partir de documents importés afin de permettre aux apprenants de s'auto-évaluer avec un feedback instantané.",
    },
    highlights: {
      en: [
        "Generates contextual quizzes directly from documents, built on a robust RAG approach.",
        "Interactive quiz interface supporting instant grading, explanations, and learner self-assessment.",
        "Vector search embeddings pipeline for granular semantic retrieval across document chapters.",
      ],
      fr: [
        "Génération de quiz contextuels à partir de documents, selon une approche RAG robuste.",
        "Interface de quiz interactive avec correction immédiate, explications et auto-évaluation.",
        "Pipeline d'embeddings vectoriels pour une recherche sémantique granulaire par chapitre.",
      ],
    },
    engineering: {
      en: [
        "Automated CI/CD delivery pipeline engineered with Jenkins and Docker containerization.",
        "Agile/Scrum development methodology with sprint planning and user stories.",
        "Comprehensive automated testing suites ensuring reliability and fast deployments.",
      ],
      fr: [
        "Pipeline CI/CD automatisé conçu avec Jenkins et conteneurisation Docker.",
        "Méthodologie Agile/Scrum avec gestion de sprints et suivi de user stories.",
        "Suites de tests automatisés garantissant la fiabilité et les déploiements continus.",
      ],
    },
    tags: ["Python", "Flask", "RAG", "Jenkins", "Docker", "CI/CD", "Vector Search"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&fit=crop",
    color: "#00d4aa",
    githubUrl: "https://github.com/YoussefChlih",
    liveDemoUrl: "https://github.com/YoussefChlih",
  },
  {
    id: "data-warehouse",
    number: "02",
    category: "data",
    title: {
      en: "Data Warehouse: Academic Programs & Job Market",
      fr: "Entrepôt de données : Formations & Marché du travail",
    },
    subtitle: {
      en: "End-to-End Star Schema Modeling, Talend ETL & OLAP Dashboards",
      fr: "Modélisation en schéma en étoile, ETL Talend & Tableaux de bord OLAP",
    },
    period: {
      en: "Academic Project, EST Salé · January 2026",
      fr: "Projet académique, EST Salé · Janvier 2026",
    },
    badge: {
      en: "EST Salé · Academic",
      fr: "EST Salé · Académique",
    },
    desc: {
      en: "A data warehouse project establishing a data-driven bridge between academic programs and current labor market requirements, from conceptual modeling to multidimensional analytics.",
      fr: "Un projet d'entrepôt de données reliant les programmes académiques et les offres réelles du marché du travail, de la modélisation conceptuelle à l'analyse multidimensionnelle.",
    },
    highlights: {
      en: [
        "Star Schema Modeling: Optimized dimensional schema connecting Moroccan academic curricula with LinkedIn job demand metrics.",
        "ETL Pipeline: Production-grade data integration pipeline built with Talend Open Studio, cleaning and transforming 7,700+ raw records.",
        "Business Intelligence: Rich interactive executive dashboards built with Power BI and optimized SQL queries.",
        "OLAP Analytics: Multi-dimensional cubes supporting deep slicing, dicing, drill-down, and roll-up across skill categories.",
      ],
      fr: [
        "Modélisation en étoile : Conception d'un schéma dimensionnel reliant cursus académiques et compétences demandées sur le marché.",
        "Pipeline ETL : Pipeline d'intégration de données robuste développé avec Talend Open Studio, traitant plus de 7 700 enregistrements.",
        "Reporting décisionnel : Tableaux de bord interactifs réalisés sous Power BI avec requêtes SQL analytiques.",
        "Analyse OLAP : Cubes multidimensionnels permettant des opérations de slicing, dicing et drill-down approfondies.",
      ],
    },
    tags: ["Star Schema", "Talend (ETL)", "SQL", "Power BI", "OLAP", "Data Warehouse", "Data Modeling"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&fit=crop",
    color: "#3b82f6",
    githubUrl: "https://github.com/YoussefChlih",
    liveDemoUrl: "https://github.com/YoussefChlih",
  },
  {
    id: "hiregenius",
    number: "03",
    category: "ai",
    title: {
      en: "HireGenius: AI-Based Intelligent Recruitment System",
      fr: "HireGenius : Système de recrutement intelligent basé sur l'IA",
    },
    subtitle: {
      en: "End-to-End Automated Talent Screening, Facial & Voice Emotion Analysis",
      fr: "Tri automatisé de talents par NLP, analyse faciale YOLOv8 et émotion vocale",
    },
    period: {
      en: "Final Project · April 2025",
      fr: "Projet de fin d'études · Avril 2025",
    },
    badge: {
      en: "Capstone Project",
      fr: "Projet de Fin d'Études",
    },
    desc: {
      en: "An end-to-end recruitment platform that leverages multimodal artificial intelligence to streamline hiring workflows, from automated CV screening to real-time candidate emotion and expression analysis during video interviews.",
      fr: "Une plateforme de recrutement de bout en bout qui utilise l'IA multimodale pour automatiser les processus d'embauche, du filtrage des CV jusqu'à l'analyse émotionnelle des candidats pendant les entretiens vidéo.",
    },
    highlights: {
      en: [
        "CV Analysis with NLP: Automatically parses candidate CVs, extracts key proficiencies, and ranks applicants by objective qualification match.",
        "Facial Expression Classification: Integrates a fine-tuned YOLOv8 model to monitor candidate micro-expressions during interview sessions.",
        "Voice Emotion Sentiment: Dual CNN-BiLSTM deep neural architecture evaluating vocal prosody and emotional cadence.",
        "Unified Full-Stack Architecture: Consolidates computer vision, speech analytics, and NLP modules into a single production web dashboard.",
      ],
      fr: [
        "Analyse de CV par NLP : Analyse sémantique des CV et classement automatisé des candidats selon leur adéquation aux fiches de poste.",
        "Analyse des expressions faciales : Intégration de YOLOv8 pour classifier les micro-expressions du candidat pendant l'entretien.",
        "Analyse des émotions vocales : Architecture neuronale hybride CNN-BiLSTM évaluant la prosodie et les sentiments vocaux.",
        "Plateforme Full-Stack Unifiée : Intégration de tous les modules d'IA (vision, voix, texte) dans une interface de recrutement ergonomique.",
      ],
    },
    tags: ["NLP", "YOLOv8", "CNN-BiLSTM", "Computer Vision", "Deep Learning", "FastAPI", "Python"],
    image: "https://cdn.stocksnap.io/img-thumbs/960w/person-computer-night.jpg",
    color: "#8b5cf6",
    githubUrl: "https://github.com/YoussefChlih",
    liveDemoUrl: "https://github.com/YoussefChlih",
  },
  {
    id: "web-scraper",
    number: "04",
    category: "web",
    title: {
      en: "Web Scraper Application",
      fr: "Application de Web Scraping",
    },
    subtitle: {
      en: "Full-Stack Dynamic Extractor with Real-Time WebSockets & Multi-Format Export",
      fr: "Extracteur dynamique full-stack avec WebSockets temps réel et exports multiples",
    },
    period: {
      en: "Personal Project · May 2025",
      fr: "Projet personnel · Mai 2025",
    },
    badge: {
      en: "Personal Project",
      fr: "Projet Personnel",
    },
    desc: {
      en: "A full-stack web scraping platform with a modern responsive frontend, asynchronous Python backend, live progress streaming over WebSockets, and headless browser automation.",
      fr: "Une application full-stack de web scraping avec interface réactive, backend asynchrone en Python, suivi de progression en temps réel par WebSockets et automatisation par navigateur sans tête.",
    },
    highlights: {
      en: [
        "Responsive Frontend: Built with React and Material-UI with pagination, instant search, and export to CSV, JSON, Excel, and TXT.",
        "Asynchronous REST API: High-throughput endpoints powered by FastAPI with non-blocking concurrency.",
        "Live WebSocket Feedback: Streams scraping status, crawl depth, and record extraction progress in real time to the browser.",
        "Headless Automation: Integrates Selenium to execute client-side JavaScript on single-page apps alongside high-speed HTML parsers.",
      ],
      fr: [
        "Frontend Réactif : Développé avec React et Material-UI, incluant pagination multi-pages et export en CSV, JSON, Excel et TXT.",
        "API REST Asynchrone : Points d'accès haute performance propulsés par FastAPI avec exécution non-bloquante.",
        "Suivi en Temps Réel : WebSockets pour diffuser le statut d'extraction, la cadence et les erreurs en direct.",
        "Automatisation Selenium : Exécution du JavaScript client sur les pages dynamiques et parseur HTML haute vitesse.",
      ],
    },
    tags: ["React", "Material-UI", "FastAPI", "WebSocket", "Selenium", "Python", "Data Extraction"],
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&fit=crop",
    color: "#06b6d4",
    githubUrl: "https://github.com/YoussefChlih",
    liveDemoUrl: "https://github.com/YoussefChlih",
  },
  {
    id: "3d-object-classification",
    number: "05",
    category: "ai",
    title: {
      en: "3D Object Classification System",
      fr: "Système de classification d'objets 3D",
    },
    subtitle: {
      en: "DGCNN Dynamic Graph Neural Network on ModelNet10 with Streamlit UI",
      fr: "Réseau de neurones sur graphes dynamiques (DGCNN) sur ModelNet10 et Streamlit",
    },
    period: {
      en: "3D Smart Factory, AI Developer Intern · Feb – Jun 2025 · Mohammedia",
      fr: "3D Smart Factory, Stagiaire Développeur IA · Fév – Juin 2025 · Mohammedia",
    },
    badge: {
      en: "3D Smart Factory",
      fr: "3D Smart Factory",
    },
    desc: {
      en: "A 3D spatial object classification system developed during an internship at 3D Smart Factory, implementing dynamic graph convolutional neural networks directly on raw point cloud datasets.",
      fr: "Un système de classification d'objets 3D développé lors d'un stage chez 3D Smart Factory, exploitant les réseaux de neurones sur graphes dynamiques directement sur des nuages de points 3D.",
    },
    highlights: {
      en: [
        "Dynamic Graph CNN: Implements DGCNN with EdgeConv operators to dynamically capture local geometric neighborhood structures in point clouds.",
        "Benchmark Validation: Trained and benchmarked on the ModelNet10 dataset for multi-class 3D geometric shape recognition.",
        "Interactive Web Platform: Streamlit application allowing engineers to upload 3D meshes/point clouds and receive instant classification confidence.",
        "3D Spatial Visualization: Integrated interactive 3D rotation and rendering tools directly in the browser.",
      ],
      fr: [
        "Dynamic Graph CNN : Implémentation du modèle DGCNN avec opérations EdgeConv pour capturer la géométrie locale des nuages de points.",
        "Validation sur Benchmark : Entraîné et évalué sur le benchmark ModelNet10 pour la reconnaissance précise de formes 3D.",
        "Application Streamlit : Interface interactive permettant de charger des fichiers 3D et d'obtenir l'inférence temps réel avec score de confiance.",
        "Visualisation Spatiale 3D : Outils de rotation et manipulation 3D interactive directement dans le navigateur.",
      ],
    },
    tags: ["DGCNN", "ModelNet10", "Streamlit", "Machine Learning", "Deep Learning", "Point Clouds", "PyTorch"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&fit=crop",
    color: "#ec4899",
    githubUrl: "https://github.com/YoussefChlih",
    liveDemoUrl: "https://github.com/YoussefChlih",
  },
  {
    id: "fault-detection",
    number: "06",
    category: "data",
    title: {
      en: "Automated IT Fault Detection System",
      fr: "Système automatisé de détection de pannes IT",
    },
    subtitle: {
      en: "Machine Learning Predictive Maintenance & Server Anomaly Detection",
      fr: "Maintenance prédictive et détection d'anomalies serveur par Machine Learning",
    },
    period: {
      en: "HardTech Maroc, AI Development Intern · Aug – Sep 2024 · Casablanca",
      fr: "HardTech Maroc, Stagiaire Développement IA · Août – Sep 2024 · Casablanca",
    },
    badge: {
      en: "HardTech Maroc",
      fr: "HardTech Maroc",
    },
    desc: {
      en: "An intelligent automated system that predicts and identifies IT hardware and network faults using machine learning models, enhancing infrastructure reliability and slashing system downtime.",
      fr: "Un système intelligent et automatisé qui détecte et anticipe les pannes matérielles et réseau grâce au machine learning, renforçant la fiabilité des infrastructures et diminuant les interruptions de service.",
    },
    highlights: {
      en: [
        "Automated Fault Detection: Recognizes anomalous telemetry signals across hardware and server logs before critical failure.",
        "Advanced Data Preprocessing: Rigorous pipeline for noise elimination, missing value imputation, and feature engineering from log streams.",
        "Predictive Modeling: Machine learning models predicting time-to-failure to enable proactive preventive maintenance.",
        "Infrastructure Reliability: Automated diagnostic alerts providing IT operations teams with actionable mitigation steps.",
      ],
      fr: [
        "Détection Automatisée : Identification d'anomalies de télémétrie sur les serveurs et composants avant toute panne critique.",
        "Prétraitement Avancé des Données : Pipeline complet de nettoyage, réduction du bruit et ingénierie de variables sur les journaux d'événements.",
        "Modèles Prédictifs : Modèles d'apprentissage automatique anticipant les défaillances pour déclencher la maintenance préventive.",
        "Fiabilité de l'Infrastructure IT : Alertes automatiques fournissant aux administrateurs des diagnostics actionnables.",
      ],
    },
    tags: ["Machine Learning", "Predictive Models", "Telemetry Analysis", "Python", "Scikit-Learn", "Data Preprocessing"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&fit=crop",
    color: "#f59e0b",
    githubUrl: "https://github.com/YoussefChlih",
    liveDemoUrl: "https://github.com/YoussefChlih",
  },
  {
    id: "image-generation-gans",
    number: "07",
    category: "ai",
    title: {
      en: "Realistic Image Generation with CNNs & GANs",
      fr: "Génération d'images réalistes avec les CNN et les GAN",
    },
    subtitle: {
      en: "Synthetic Face Synthesis & Neural Visual Enhancement with Generative Networks",
      fr: "Synthèse de visages et amélioration visuelle par réseaux antagonistes génératifs",
    },
    period: {
      en: "Research & Experimentation · 2024",
      fr: "Recherche & Expérimentation · 2024",
    },
    badge: {
      en: "Research & Experimentation",
      fr: "Recherche & R&D",
    },
    desc: {
      en: "A computer vision and generative AI research project focused on deep adversarial architectures for photorealistic synthetic facial image synthesis and neural enhancement.",
      fr: "Un projet de recherche en vision par ordinateur et IA générative centré sur les architectures antagonistes profondes pour la génération de visages synthétiques photoréalistes et l'amélioration d'images.",
    },
    highlights: {
      en: [
        "Synthetic Image Generation: Created neural generative pipelines capable of generating photorealistic synthetic human portraits from scratch.",
        "GAN Architectures: Implemented and tuned Generative Adversarial Networks with custom loss formulations for stability.",
        "Image Enhancement: Developed CNN-based enhancement modules to sharpen, denoise, and upscale low-resolution visual inputs.",
        "Latent Space Exploration: Experimented with latent interpolation to achieve smooth attribute transitions (e.g. lighting, pose).",
      ],
      fr: [
        "Génération d'Images Synthétiques : Création de pipelines neuronaux produisant des portraits humains synthétiques photoréalistes.",
        "Architectures GAN : Implémentation et optimisation de GANs avec formulation personnalisée de fonctions de perte.",
        "Amélioration d'Images : Modules basés sur les CNN pour le débruitage, la netteté et la super-résolution d'images dégradées.",
        "Exploration de l'Espace Latent : Expérimentation sur l'interpolation dans l'espace latent pour des transitions d'attributs fluides.",
      ],
    },
    tags: ["CNN", "GANs", "Computer Vision", "Generative AI", "PyTorch", "Python", "Deep Learning"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&fit=crop",
    color: "#10b981",
    githubUrl: "https://github.com/YoussefChlih",
    liveDemoUrl: "https://github.com/YoussefChlih",
  },
];

export default function Projects() {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  const [isFolderOpen, setIsFolderOpen] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Items formatted for <Folder />
  const folderItems = PROJECTS.map((project) => {
    const isEn = language === "en";
    const title = isEn ? project.title.en : project.title.fr;
    const desc = isEn ? project.desc.en : project.desc.fr;
    const badge = isEn ? project.badge.en : project.badge.fr;

    return {
      title,
      description: desc,
      content: (
        <div className="w-full h-full p-2.5 sm:p-3 flex flex-col justify-between text-left select-none overflow-hidden bg-white dark:bg-[#151522] border border-slate-200/90 dark:border-white/10 rounded-lg shadow-sm hover:border-teal-400 dark:hover:border-[#00d4aa] transition-colors">
          <div>
            <div className="flex items-center justify-between gap-1 mb-1.5">
              <span
                className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded font-mono"
                style={{ backgroundColor: `${project.color}22`, color: project.color }}
              >
                #{project.number}
              </span>
              <span className="text-[9px] font-medium text-slate-500 dark:text-slate-400 truncate max-w-[80px]">
                {badge}
              </span>
            </div>

            <div className="w-full h-16 sm:h-20 rounded-md overflow-hidden bg-slate-100 dark:bg-slate-800 mb-2 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute bottom-1 left-1.5 right-1.5 text-[10px] font-bold text-white truncate drop-shadow-sm">
                {title.split(":")[0]}
              </span>
            </div>
          </div>

          <div>
            <p className="text-[9.5px] sm:text-[10px] text-slate-600 dark:text-slate-300 line-clamp-2 leading-tight mb-2">
              {desc}
            </p>
            <div className="flex items-center justify-between pt-1.5 border-t border-slate-100 dark:border-white/10 text-[9px] font-semibold text-teal-600 dark:text-[#00d4aa]">
              <span>{language === "fr" ? "Détails & Liens" : "Details & Links"}</span>
              <span className="text-xs transition-transform group-hover:translate-x-0.5">→</span>
            </div>
          </div>
        </div>
      ),
    };
  });

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 border-t border-slate-200/80 dark:border-[#1e1e2e]/60 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold text-teal-700 dark:text-[#00d4aa] bg-teal-50 dark:bg-[#00d4aa]/10 px-2.5 py-1 rounded border border-teal-200 dark:border-[#00d4aa]/20 font-mono">
                02
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-[#e8e8ed] tracking-tight">
                {language === "fr" ? "Projets Réalisés" : "Featured Projects"}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-[#9898a8] max-w-2xl">
              {language === "fr"
                ? "Dossier interactif 3D regroupant 7 projets clés en Intelligence Artificielle, Data Warehousing et Ingénierie Logicielle."
                : "Interactive 3D folder archiving 7 key systems spanning Artificial Intelligence, Data Warehousing, and Software Engineering."}
            </p>
          </div>

          {/* Folder Open / Close Control Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFolderOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-teal-500/10 dark:bg-[#00d4aa]/15 text-teal-700 dark:text-[#00d4aa] border border-teal-500/30 dark:border-[#00d4aa]/30 hover:bg-teal-500/20 transition-all cursor-pointer shadow-xs hover:scale-102"
            >
              <FolderOpen className="w-4 h-4" />
              <span>
                {isFolderOpen
                  ? language === "fr"
                    ? "Fermer le dossier"
                    : "Close Folder"
                  : language === "fr"
                    ? "Ouvrir le dossier"
                    : "Open Folder"}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] bg-teal-600 dark:bg-[#00d4aa] text-white dark:text-slate-950 font-bold font-mono">
                7
              </span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE 3D FOLDER SHOWCASE (EXCLUSIVE VIEW) */}
        {/* ======================================================== */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-[#0d0d14] dark:via-[#12121c] dark:to-[#0a0a0f] border border-slate-200 dark:border-[#1e1e2e] shadow-lg dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] overflow-visible">
          {/* Decorative top pill */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200/70 dark:border-white/5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 font-mono">
                {language === "fr" ? "Dossier Numérique des Projets" : "Interactive Digital Project Folder"}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                • 7 {language === "fr" ? "projets archivés" : "archived projects"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-teal-500 dark:text-[#00d4aa]" />
              <span>
                {language === "fr"
                  ? "Cliquez sur un document pour afficher la fiche complète & les liens"
                  : "Click any document to inspect full details, live demo & code"}
              </span>
            </div>
          </div>

          {/* 3D Folder Component Host */}
          <div className="w-full min-h-[380px] sm:min-h-[460px] flex items-center justify-center py-6 sm:py-10 overflow-visible">
            <div className="transform scale-95 sm:scale-105 md:scale-115 transition-transform duration-300">
              <Folder
                items={folderItems}
                label={language === "fr" ? "Projets Youssef" : "Projects Youssef"}
                mode="flap"
                variant="solid"
                color={theme === "dark" ? "#00d4aa" : "#0d9488"}
                paperColor={theme === "dark" ? "#161622" : "#ffffff"}
                size={1.35}
                tabPosition="right"
                layout="spread"
                open={isFolderOpen}
                onOpenChange={setIsFolderOpen}
                onItemClick={(_item, index) => {
                  setSelectedProject(PROJECTS[index]);
                }}
                draggable={true}
                zoomOnClick={true}
                peek={true}
                intro={true}
                tilt={0.6}
                bounce={0.4}
                speed={1}
                theme={theme === "dark" ? "dark" : "light"}
              />
            </div>
          </div>

          {/* Quick Select Carousel / Bar below Folder */}
          <div className="mt-6 pt-5 border-t border-slate-200/70 dark:border-white/5">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-teal-600 dark:text-[#00d4aa]" />
                {language === "fr" ? "Sélection rapide des 7 projets :" : "Quick 7-Project Selector:"}
              </span>
              <span className="text-[11px] text-slate-400">
                {language === "fr" ? "Cliquez pour ouvrir la fiche détaillée" : "Click any card to open modal"}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {PROJECTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProject(p)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-[#161624] border border-slate-200 dark:border-[#222234] hover:border-teal-500/50 dark:hover:border-[#00d4aa]/50 hover:bg-teal-50/50 dark:hover:bg-[#00d4aa]/5 text-slate-800 dark:text-slate-200 transition-all cursor-pointer shadow-2xs hover:-translate-y-0.5"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                  <span className="font-semibold font-mono text-[11px]">#{p.number}</span>
                  <span>{p.title[language].split(":")[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* DETAILED PROJECT MODAL (BILINGUAL WITH LIVE DEMO & GITHUB) */}
      {/* ======================================================== */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl bg-white dark:bg-[#12121c] border border-slate-200 dark:border-[#222234] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Hero Header with Image */}
            <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title[language]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12121c] via-[#12121c]/60 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white hover:scale-105 transition-all cursor-pointer backdrop-blur-md border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500 dark:bg-[#00d4aa] text-slate-950 font-mono shadow-sm">
                  #{selectedProject.number}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md border border-white/20">
                  {selectedProject.badge[language]}
                </span>
              </div>

              {/* Title inside hero banner */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight mb-1 drop-shadow-md">
                  {selectedProject.title[language]}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-teal-300 dark:text-[#00d4aa] flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedProject.period[language]}</span>
                </p>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">
              {/* Subtitle / Focus */}
              <div className="p-3.5 rounded-xl bg-teal-50/70 dark:bg-[#00d4aa]/10 border border-teal-200/60 dark:border-[#00d4aa]/20">
                <p className="text-xs sm:text-sm font-semibold text-teal-800 dark:text-[#00d4aa]">
                  {selectedProject.subtitle[language]}
                </p>
              </div>

              {/* Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#9898a8] mb-2 font-mono flex items-center gap-2">
                  <Info className="w-3.5 h-3.5 text-teal-600 dark:text-[#00d4aa]" />
                  {language === "fr" ? "Présentation du projet" : "Project Overview"}
                </h4>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedProject.desc[language]}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#9898a8] mb-3 font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-[#00d4aa]" />
                  {language === "fr" ? "Fonctionnalités & Réalisations clés" : "Key Highlights & Capabilities"}
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.highlights[language].map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-[#00d4aa] flex-none" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Practices if present */}
              {selectedProject.engineering && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#9898a8] mb-3 font-mono flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-teal-600 dark:text-[#00d4aa]" />
                    {language === "fr" ? "Pratiques d'ingénierie & CI/CD" : "Engineering & Delivery Practices"}
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.engineering[language].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-none" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#9898a8] mb-2.5 font-mono flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-teal-600 dark:text-[#00d4aa]" />
                  {language === "fr" ? "Technologies & Outils" : "Technologies & Tools"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-[#161622] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#222234]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Action Footer with Live Demo and GitHub Links */}
            <div className="p-4 sm:p-6 bg-slate-50 dark:bg-[#0d0d14] border-t border-slate-200 dark:border-[#222234] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>{language === "fr" ? "Langue de la fiche :" : "Language:"}</span>
                <button
                  onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                  className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-[#1e1e2e] text-slate-800 dark:text-slate-200 font-bold uppercase text-[11px] hover:bg-teal-500 hover:text-white transition-colors cursor-pointer"
                >
                  {language === "en" ? "Français 🇫🇷" : "English 🇬🇧"}
                </button>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* Live Demo Link */}
                <a
                  href={selectedProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-teal-600 hover:bg-teal-700 dark:bg-[#00d4aa] dark:hover:bg-[#00bb96] text-white dark:text-slate-950 transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{language === "fr" ? "Démo en direct" : "Live Demo"}</span>
                </a>

                {/* GitHub Code Link */}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 dark:bg-[#1e1e2e] dark:hover:bg-[#28283d] text-white transition-all shadow-md hover:shadow-lg cursor-pointer border border-slate-800 dark:border-white/10"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>{language === "fr" ? "Code GitHub" : "GitHub Repo"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
