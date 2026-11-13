export interface EducationItem {
  id: string;
  period: {
    fr: string;
    en: string;
  };
  school: string;
  institutionFull: {
    fr: string;
    en: string;
  };
  logo: string;
  degree: {
    fr: string;
    en: string;
  };
  major: {
    fr: string;
    en: string;
  };
  courses: {
    fr: string[];
    en: string[];
  } | null;
  isCurrent: boolean;
  badge?: {
    fr: string;
    en: string;
  };
  accentGradient: string;
  glowColor: string;
}

export const educationData: EducationItem[] = [
  {
    id: "ensias-master",
    period: { fr: "2026 – Présent", en: "2026 – Present" },
    school: "ENSIAS",
    institutionFull: {
      fr: "ENSIAS — École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (Université Mohammed V de Rabat)",
      en: "ENSIAS — National School of Computer Science and Systems Analysis (Mohammed V University in Rabat)"
    },
    logo: "/assets/logos/ensias.png",
    degree: {
      fr: "1ère Année Master",
      en: "1st Year Master's Degree"
    },
    major: {
      fr: "Sciences des Données et Systèmes Intelligents",
      en: "Data Science and Intelligent Systems"
    },
    courses: null,
    isCurrent: true,
    badge: {
      fr: "En Cours",
      en: "Current"
    },
    accentGradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
    glowColor: "rgba(217, 70, 239, 0.35)"
  },
  {
    id: "ests-bachelor",
    period: { fr: "2025 – 2026", en: "2025 – 2026" },
    school: "EST Salé (ESTS)",
    institutionFull: {
      fr: "EST Salé — École Supérieure de Technologie de Salé (Université Mohammed V de Rabat)",
      en: "EST Salé — Higher School of Technology of Salé (Mohammed V University in Rabat)"
    },
    logo: "/assets/logos/est-sale.png",
    degree: {
      fr: "Bachelor en Technologie (Bac+3)",
      en: "Bachelor of Technology (B.Tech / Bac+3)"
    },
    major: {
      fr: "Big Data & Intelligence Artificielle (BDIA)",
      en: "Big Data & Artificial Intelligence (BDIA)"
    },
    courses: {
      fr: [
        "Architectures Big Data & Traitement distribué (Hadoop, MapReduce, Apache Spark)",
        "Bases de données NoSQL et systèmes distribués",
        "Deep Learning & Fondements avancés de l'Intelligence Artificielle",
        "Outils de développement, DevOps & Automatisation IA",
        "Architectures Cloud & Sécurité des données",
        "Outils d'aide à la décision (BI) & Statistiques appliquées"
      ],
      en: [
        "Big Data Architectures & Distributed Processing (Hadoop, MapReduce, Apache Spark)",
        "NoSQL Databases & Distributed Data Systems",
        "Deep Learning & Advanced Artificial Intelligence",
        "Software Development Tools, DevOps & AI Automation",
        "Cloud Architectures & Data Security",
        "Business Intelligence (BI) Decision Tools & Statistical Analysis"
      ]
    },
    isCurrent: false,
    badge: {
      fr: "Bachelor",
      en: "Bachelor"
    },
    accentGradient: "from-indigo-500 via-purple-500 to-pink-500",
    glowColor: "rgba(99, 102, 241, 0.35)"
  },
  {
    id: "estn-dut",
    period: { fr: "2023 – 2025", en: "2023 – 2025" },
    school: "EST Nador",
    institutionFull: {
      fr: "EST Nador — École Supérieure de Technologie de Nador (Université Mohammed Premier)",
      en: "EST Nador — Higher School of Technology of Nador (Mohammed First University)"
    },
    logo: "/assets/logos/est-nador.svg",
    degree: {
      fr: "DUT (Diplôme Universitaire de Technologie)",
      en: "DUT (University Diploma of Technology)"
    },
    major: {
      fr: "Intelligence Artificielle et Ingénierie des Données (IAID)",
      en: "Artificial Intelligence and Data Engineering (IAID)"
    },
    courses: {
      fr: [
        "Programmation & Algorithmique (Python pour la Data Science, Structures de données, Développement Web)",
        "Bases de Données Avancées, Data Warehouse & Administration des données",
        "Mathématiques Appliquées, Algèbre Linéaire, Probabilités & Statistiques",
        "Fondamentaux de l'Intelligence Artificielle, Machine Learning & Data Mining",
        "Introduction au Big Data, Cloud Computing, Virtualisation & Visualisation de données",
        "Projet de Fin d'Études (PFE) & Stage technique"
      ],
      en: [
        "Programming & Algorithms (Python for Data Science, Data Structures, Web Development)",
        "Advanced Databases, Data Warehousing & Data Management",
        "Applied Mathematics, Linear Algebra, Probability & Statistics",
        "Fundamentals of Artificial Intelligence, Machine Learning & Data Mining",
        "Big Data Foundations, Cloud Computing, Virtualization & Data Visualization",
        "Capstone Project (PFE) & Technical Internship"
      ]
    },
    isCurrent: false,
    badge: {
      fr: "Diplôme Obtenu",
      en: "Graduated"
    },
    accentGradient: "from-teal-500 via-emerald-500 to-cyan-500",
    glowColor: "rgba(13, 148, 136, 0.35)"
  }
];
