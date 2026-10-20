import { Info } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  desc: string;
  image: string;
  tags: string[];
  status: string;
  note: string;
  wide?: boolean;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "hiregenius",
    title: "HireGenius",
    subtitle: "AI-Powered Intelligent Recruitment System",
    type: "Capstone Project • 2025",
    desc: "Engineered an end-to-end recruitment platform utilizing NLP to parse, score, and rank CVs against specific job specifications. Integrated YOLOv8 for facial-expression classification alongside a dual CNN-BiLSTM neural network for voice-emotion sentiment analysis during candidate interviews.",
    image: "https://cdn.stocksnap.io/img-thumbs/960w/person-computer-night.jpg",
    tags: ["NLP", "YOLOv8", "CNN-BiLSTM", "Computer Vision", "Audio Emotion", "Python"],
    status: "Complete",
    note: "Repository to be published soon",
  },
  {
    id: "kwizy",
    title: "Kwizy",
    subtitle: "Intelligent RAG-Based Quiz Platform",
    type: "Personal Project • Dec 2025",
    desc: "Developed an AI web platform leveraging Retrieval-Augmented Generation (RAG) with Python and Flask. Processes source documents to dynamically synthesize high-quality context-grounded quiz items. Built an end-to-end CI/CD delivery pipeline using Jenkins and Docker with automated unit testing.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&h=450&fit=crop",
    tags: ["RAG", "Flask", "Python", "Jenkins", "Docker", "CI/CD", "Vector Search"],
    status: "Complete",
    note: "Repository to be published soon",
  },
  {
    id: "data-warehouse",
    title: "Data Warehouse & Labor Market Analytics",
    subtitle: "LinkedIn Academic Program Analysis (EST Salé)",
    type: "Academic Project • Jan 2026",
    desc: "Designed and modeled a Star Schema Data Warehouse to research the alignment between Moroccan academic curricula and real labor-market demands. Built a production-grade ETL pipeline with Talend Open Studio processing 7,700+ raw records under strict data governance. Delivered interactive Power BI and SQL dashboards supporting multi-dimensional OLAP analytics (slicing, dicing, drill-down).",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=450&fit=crop",
    tags: ["Talend", "ETL", "Data Governance", "Power BI", "Star Schema", "Advanced SQL", "OLAP"],
    status: "Complete",
    note: "Academic Project Dataset & Reports",
    wide: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-slate-200/80 dark:border-[#1e1e2e]/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-bold text-teal-700 dark:text-[#00d4aa] bg-teal-50 dark:bg-[#00d4aa]/10 px-2.5 py-1 rounded border border-teal-200 dark:border-[#00d4aa]/20 font-mono">
            02
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#e8e8ed] tracking-tight">
            Featured Projects
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-200 dark:from-[#1e1e2e] to-transparent ml-2" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className={`rounded-2xl bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] overflow-hidden flex flex-col hover:border-teal-500/40 dark:hover:border-[#00d4aa]/40 hover:-translate-y-1 transition-all shadow-xs hover:shadow-lg dark:shadow-[0_4px_25px_rgba(0,0,0,0.3)] ${
                project.wide ? "lg:col-span-2" : ""
              }`}
            >
              {/* Project Image banner */}
              <div
                className={`relative w-full overflow-hidden bg-slate-100 dark:bg-[#0c0c14] ${
                  project.wide ? "h-64 sm:h-72" : "h-56 sm:h-64"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 dark:from-[#12121a] dark:via-[#12121a]/30 to-transparent flex items-end p-5">
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-white/90 dark:bg-[#0a0a0f]/90 backdrop-blur-md text-teal-700 dark:text-[#00d4aa] border border-slate-200 dark:border-[#1e1e2e] shadow-xs">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#e8e8ed]">
                    {project.title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-teal-700 dark:text-[#00d4aa] bg-teal-50 dark:bg-[#00d4aa]/10 border border-teal-200 dark:border-[#00d4aa]/20">
                    {project.status}
                  </span>
                </div>

                <p className="text-sm font-medium text-teal-600 dark:text-[#00d4aa] mb-4">
                  {project.subtitle}
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-[#9898a8] leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-700 dark:text-[#9898a8] bg-slate-50 dark:bg-[#0a0a0f] border border-slate-200 dark:border-[#1e1e2e] hover:border-teal-500/40 dark:hover:border-[#00d4aa]/40 hover:text-teal-700 dark:hover:text-[#00d4aa] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-[#1e1e2e] flex items-center gap-2 text-xs text-slate-500 dark:text-[#5c5c6e]">
                  <Info className="w-3.5 h-3.5 text-teal-600 dark:text-[#00d4aa]" />
                  <span>{project.note}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
