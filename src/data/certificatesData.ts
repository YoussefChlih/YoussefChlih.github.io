export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: "ML / AI" | "Data Engineering" | "SQL / Databases" | "Python Programming";
  date: {
    fr: string;
    en: string;
  };
  credentialId?: string;
  verificationUrl?: string;
  credlyUrl?: string;
  image: string;
  pdfUrl: string;
  badgeImage?: string;
  description: {
    fr: string;
    en: string;
  };
  skills: string[];
}

export const certificatesData: CertificateItem[] = [
  {
    id: "ml-in-production",
    title: "Machine Learning in Production",
    issuer: "DeepLearning.AI (via Coursera)",
    category: "ML / AI",
    date: {
      fr: "14 Mai 2025",
      en: "May 14, 2025",
    },
    credentialId: "10K1HE7QGCXG",
    verificationUrl: "https://coursera.org/verify/10K1HE7QGCXG",
    image: "/certificates/ml-in-production.png",
    pdfUrl: "/certificates/ml-in-production.pdf",
    description: {
      fr: "Maîtrise du déploiement de modèles d'apprentissage automatique en environnement de production (MLOps). Couvre la gestion du cycle de vie complet des projets d'IA, l'identification et la correction de la dérive des données (data drift), l'optimisation des performances des modèles et la mise en place de systèmes d'apprentissage automatique évolutifs et fiables.",
      en: "Mastery of deploying machine learning models into production environments (MLOps). Covers managing the full AI project lifecycle, identifying and mitigating data drift, optimizing model performance, and building scalable, reliable machine learning systems.",
    },
    skills: ["MLOps", "Model Deployment", "Data Drift", "Scalable ML", "Production AI"],
  },
  {
    id: "ml-process-a-z",
    title: "The Machine Learning Process A-Z",
    issuer: "365 Data Science",
    category: "ML / AI",
    date: {
      fr: "13 Novembre 2024",
      en: "November 13, 2024",
    },
    credentialId: "CC-3C7E2841DC",
    image: "/certificates/ml-process-a-z.png",
    pdfUrl: "/certificates/ml-process-a-z.pdf",
    description: {
      fr: "Compréhension globale du flux de travail de bout en bout en Machine Learning : de la définition du problème métier et la collecte des données jusqu'au prétraitement, l'ingénierie des caractéristiques (feature engineering), la sélection, l'évaluation et le déploiement de modèles prédictifs.",
      en: "Comprehensive understanding of the end-to-end Machine Learning workflow: from business problem definition and data collection to preprocessing, feature engineering, model selection, evaluation, and deployment of predictive models.",
    },
    skills: ["Machine Learning", "Feature Engineering", "Data Preprocessing", "Model Evaluation"],
  },
  {
    id: "airflow-data-pipelines",
    title: "Building Data Pipelines with Apache Airflow",
    issuer: "365 Data Science",
    category: "Data Engineering",
    date: {
      fr: "19 Novembre 2025",
      en: "November 19, 2025",
    },
    credentialId: "CC-1033859FF8",
    image: "/certificates/airflow-data-pipelines.png",
    pdfUrl: "/certificates/airflow-data-pipelines.pdf",
    description: {
      fr: "Conception, planification et surveillance de flux de travail de données automatisés (ETL/ELT) à l'aide d'Apache Airflow. Maîtrise de la création de graphes orientés acycliques (DAGs), de la gestion des dépendances complexes entre les tâches et de l'orchestration robuste de pipelines de données.",
      en: "Design, scheduling, and monitoring of automated data workflows (ETL/ELT) using Apache Airflow. Proficiency in creating Directed Acyclic Graphs (DAGs), managing complex task dependencies, and orchestrating robust data pipelines.",
    },
    skills: ["Apache Airflow", "Data Pipelines", "DAGs", "ETL / ELT", "Orchestration"],
  },
  {
    id: "python-project-data-engineering",
    title: "Python Project for Data Engineering",
    issuer: "IBM (via Coursera)",
    category: "Data Engineering",
    date: {
      fr: "17 Avril 2026",
      en: "April 17, 2026",
    },
    credentialId: "H6INL8R91G1I",
    verificationUrl: "https://coursera.org/verify/H6INL8R91G1I",
    image: "/certificates/python-project-data-engineering.png",
    pdfUrl: "/certificates/python-project-data-engineering.pdf",
    description: {
      fr: "Mise en pratique des compétences d'ingénierie des données via la réalisation de pipelines ETL complets en Python. Acquisition et extraction de données à partir d'API et par Web Scraping, transformation et nettoyage des données avec Pandas, et chargement dans des bases de données relationnelles.",
      en: "Hands-on application of data engineering skills through building complete ETL pipelines in Python. Extracting data via APIs and Web Scraping, transforming and cleaning datasets using Pandas, and loading processed data into relational databases.",
    },
    skills: ["Python", "ETL Pipelines", "Web Scraping", "APIs", "Data Engineering"],
  },
  {
    id: "advanced-sql-data-engineering",
    title: "Advanced SQL for Data Engineering",
    issuer: "365 Data Science",
    category: "SQL / Databases",
    date: {
      fr: "20 Novembre 2025",
      en: "November 20, 2025",
    },
    credentialId: "CC-B7D8BBA052",
    image: "/certificates/advanced-sql-data-engineering.png",
    pdfUrl: "/certificates/advanced-sql-data-engineering.pdf",
    description: {
      fr: "Maîtrise des concepts avancés de SQL appliqués à l'ingénierie des données. Création et optimisation de requêtes complexes, utilisation des fonctions de fenêtrage (Window Functions), des expressions de table communes (CTEs), des procédures stockées, et structuration d'entrepôts de données performants.",
      en: "Mastery of advanced SQL concepts tailored for data engineering. Writing and optimizing complex queries, utilizing Window Functions, Common Table Expressions (CTEs), stored procedures, and structuring high-performance data warehouses.",
    },
    skills: ["Advanced SQL", "Window Functions", "CTEs", "Stored Procedures", "Data Warehousing"],
  },
  {
    id: "databases-sql-python-data-science",
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM (via Coursera)",
    category: "SQL / Databases",
    date: {
      fr: "2 Juin 2026",
      en: "June 2, 2026",
    },
    credentialId: "DVPMZHTFEFIZ",
    verificationUrl: "https://coursera.org/verify/DVPMZHTFEFIZ",
    image: "/certificates/databases-sql-python-data-science.png",
    pdfUrl: "/certificates/databases-sql-python-data-science.pdf",
    description: {
      fr: "Exploitation des bases de données relationnelles dans un contexte de science des données. Écriture de requêtes SQL (DDL et DML) et interfaçage direct avec des environnements Python (Jupyter Notebooks) via SQLAlchemy et Pandas pour extraire et analyser des ensembles de données réels.",
      en: "Leveraging relational databases for data science applications. Writing SQL queries (DDL and DML) and interfacing directly with Python environments (Jupyter Notebooks) using SQLAlchemy and Pandas to extract and analyze real-world datasets.",
    },
    skills: ["Relational Databases", "SQLAlchemy", "Python", "Jupyter", "Data Science"],
  },
  {
    id: "sql-fundamentals",
    title: "SQL",
    issuer: "365 Data Science",
    category: "SQL / Databases",
    date: {
      fr: "18 Novembre 2025",
      en: "November 18, 2025",
    },
    credentialId: "CC-4AB8978148",
    image: "/certificates/sql-fundamentals.png",
    pdfUrl: "/certificates/sql-fundamentals.pdf",
    description: {
      fr: "Fondamentaux approfondis de la gestion des bases de données relationnelles et du langage SQL. Conception de schémas relationnels, création de tables, manipulation de données, jointures multiples (JOINs), agrégations et sous-requêtes pour l'analyse de données.",
      en: "In-depth fundamentals of relational database management and SQL. Designing relational schemas, creating tables, manipulating data, and executing complex joins, aggregations, and subqueries for data analysis.",
    },
    skills: ["SQL", "Relational Schemas", "Joins", "Aggregations", "Subqueries"],
  },
  {
    id: "data-analysis-with-python",
    title: "Data Analysis with Python",
    issuer: "IBM (via Coursera & Credly)",
    category: "Python Programming",
    date: {
      fr: "26–27 Juillet 2025",
      en: "July 26–27, 2025",
    },
    credentialId: "UI50S81G8MJP",
    verificationUrl: "https://coursera.org/verify/UI50S81G8MJP",
    credlyUrl: "https://www.credly.com/badges/5cb2668e-27c0-4f29-ad66-6c1ba5cb5908",
    image: "/certificates/data-analysis-with-python.png",
    pdfUrl: "/certificates/data-analysis-with-python.pdf",
    badgeImage: "/certificates/data-analysis-with-python-badge.png",
    description: {
      fr: "Analyse complète de données avec Python. Importation, nettoyage et préparation des données, analyse exploratoire (EDA), visualisation statistique et développement de modèles prédictifs (régression linéaire, polynomiale et pipelines d'évaluation) à l'aide de Pandas, NumPy, Matplotlib, Seaborn et Scikit-Learn.",
      en: "Comprehensive data analysis using Python. Importing, cleaning, and wrangling data, performing Exploratory Data Analysis (EDA), statistical visualization, and building predictive models (linear/polynomial regression and evaluation pipelines) using Pandas, NumPy, Matplotlib, Seaborn, and Scikit-Learn.",
    },
    skills: ["Data Analysis", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn"],
  },
  {
    id: "data-ingestion-pandas",
    title: "Data Ingestion with Pandas",
    issuer: "365 Data Science",
    category: "Python Programming",
    date: {
      fr: "18 Novembre 2025",
      en: "November 18, 2025",
    },
    credentialId: "CC-303FB5AC40",
    image: "/certificates/data-ingestion-pandas.png",
    pdfUrl: "/certificates/data-ingestion-pandas.pdf",
    description: {
      fr: "Techniques spécialisées d'importation et d'ingestion de données avec la bibliothèque Pandas. Collecte et lecture efficace de données issues de formats variés (CSV, JSON, Excel, APIs web et bases de données SQL), gestion de l'encodage et prétraitement initial pour les flux analytiques.",
      en: "Specialized techniques for data importing and ingestion using the Pandas library. Efficiently collecting and reading data from diverse sources (CSV, JSON, Excel, Web APIs, and SQL databases), handling encodings, and performing initial preprocessing for analytical workflows.",
    },
    skills: ["Pandas", "Data Ingestion", "CSV / JSON / Excel", "Web APIs", "Data Wrangling"],
  },
  {
    id: "python-data-science-ai-dev",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM (via Coursera)",
    category: "Python Programming",
    date: {
      fr: "18 Avril 2026",
      en: "April 18, 2026",
    },
    credentialId: "LDI2T7QY7K0W",
    verificationUrl: "https://coursera.org/verify/LDI2T7QY7K0W",
    image: "/certificates/python-data-science-ai-dev.png",
    pdfUrl: "/certificates/python-data-science-ai-dev.pdf",
    description: {
      fr: "Maîtrise de la programmation Python appliquée à la science des données, à l'intelligence artificielle et au développement logiciel. Utilisation des structures de données, de la programmation orientée objet, de la manipulation de fichiers, des requêtes d'API REST, et des bibliothèques scientifiques NumPy et Pandas.",
      en: "Mastery of Python programming applied to data science, artificial intelligence, and software development. Utilizing data structures, object-oriented programming, file handling, REST API requests, and scientific libraries such as NumPy and Pandas.",
    },
    skills: ["Python", "Artificial Intelligence", "OOP", "REST APIs", "NumPy & Pandas"],
  },
  {
    id: "intermediate-python",
    title: "Intermediate Python Programming",
    issuer: "365 Data Science",
    category: "Python Programming",
    date: {
      fr: "12 Novembre 2024",
      en: "November 12, 2024",
    },
    credentialId: "CC-A6F645104A",
    image: "/certificates/intermediate-python.png",
    pdfUrl: "/certificates/intermediate-python.pdf",
    description: {
      fr: "Approfondissement des concepts de programmation en Python. Maîtrise des compréhensions de listes et de dictionnaires, des fonctions anonymes (lambda), de la gestion avancée des erreurs et exceptions, de l'utilisation de modules externes et de l'écriture d'un code modulaire et optimisé.",
      en: "Deepening core Python programming concepts. Mastering list and dictionary comprehensions, lambda functions, advanced error and exception handling, working with external modules, and writing modular, optimized code.",
    },
    skills: ["Python", "Comprehensions", "Error Handling", "Modular Code", "Lambdas"],
  },
  {
    id: "python-bootcamp",
    title: "Python Programmer Bootcamp",
    issuer: "365 Data Science",
    category: "Python Programming",
    date: {
      fr: "9 Novembre 2024",
      en: "November 9, 2024",
    },
    credentialId: "CC-48C94DF557",
    image: "/certificates/python-bootcamp.png",
    pdfUrl: "/certificates/python-bootcamp.pdf",
    description: {
      fr: "Formation intensive couvrant les bases solides et la logique algorithmique en Python. Maîtrise de la syntaxe, des structures de contrôle, des fonctions, des principes de la Programmation Orientée Objet (POO), des algorithmes de recherche et de tri, et de la résolution de problèmes pratiques.",
      en: "Intensive bootcamp covering solid foundations and algorithmic logic in Python. Mastery of syntax, control flow, functions, Object-Oriented Programming (OOP) principles, search and sort algorithms, and practical problem-solving.",
    },
    skills: ["Algorithmic Logic", "OOP", "Data Structures", "Sorting & Searching", "Problem Solving"],
  },
  {
    id: "python-essentials-1",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy & Python Institute",
    category: "Python Programming",
    date: {
      fr: "30 Octobre 2025",
      en: "October 30, 2025",
    },
    credentialId: "8dec54b0-6102-4be2-a9d3-c7b3027834c7",
    image: "/certificates/python-essentials-1.png",
    pdfUrl: "/certificates/python-essentials-1.pdf",
    description: {
      fr: "Acquisition des concepts fondamentaux de la programmation informatique et du développement logiciel en Python. Compréhension de l'exécution du code, des types de données, des opérateurs, des boucles, des collections de données (listes, tuples, dictionnaires) et des bonnes pratiques de codage.",
      en: "Acquisition of fundamental computer programming concepts and software development in Python. Understanding code execution, data types, operators, loops, data collections (lists, tuples, dictionaries), and coding best practices.",
    },
    skills: ["Python Fundamentals", "Control Flow", "Data Types", "Best Practices", "Cisco Academy"],
  },
];

