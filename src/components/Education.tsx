import { GraduationCap, Award } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

interface CertItem {
  name: string;
  issuer: string;
}

const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "B.Sc. in Big Data & Artificial Intelligence",
    institution: "École Supérieure de Technologie (EST) Salé — Final Year",
    period: "2025 — 2026",
  },
  {
    degree: "Associate Degree in AI & Data Engineering",
    institution: "École Supérieure de Technologie (EST) Nador",
    period: "2023 — 2025",
  },
  {
    degree: "High School Diploma — Mathematical Sciences",
    institution: "Lycée Moulay Rachid",
    period: "2022 — 2023",
  },
];

const CERT_ITEMS: CertItem[] = [
  {
    name: "Oracle Cloud Infrastructure 2024 Foundations Associate",
    issuer: "Oracle University",
  },
  {
    name: "Generative AI Professional Foundations — OCI 2025",
    issuer: "Oracle University",
  },
  {
    name: "The Machine Learning Process A–Z",
    issuer: "365 Data Science",
  },
  {
    name: "Python Programmer Bootcamp",
    issuer: "365 Data Science",
  },
  {
    name: "Intro to Data Science",
    issuer: "Cisco Networking Academy",
  },
  {
    name: "MLOps Level 2",
    issuer: "Coursera",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 border-t border-slate-200/80 dark:border-[#1e1e2e]/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-bold text-teal-700 dark:text-[#00d4aa] bg-teal-50 dark:bg-[#00d4aa]/10 px-2.5 py-1 rounded border border-teal-200 dark:border-[#00d4aa]/20 font-mono">
            07
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#e8e8ed] tracking-tight">
            Education &amp; Certifications
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-200 dark:from-[#1e1e2e] to-transparent ml-2" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-teal-600 dark:text-[#00d4aa]" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-[#e8e8ed]">
                Academic Background
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] hover:border-teal-500/40 dark:hover:border-[#00d4aa]/40 hover:bg-slate-50 dark:hover:bg-[#181824] hover:translate-x-1 transition-all shadow-xs hover:shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
                >
                  <span className="text-xs font-semibold text-teal-600 dark:text-[#00d4aa] block mb-1.5 font-mono">
                    {item.period}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-[#e8e8ed] mb-1">
                    {item.degree}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-[#5c5c6e] font-medium">
                    {item.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-teal-600 dark:text-[#00d4aa]" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-[#e8e8ed]">
                Professional Certifications
              </h3>
            </div>

            <div className="space-y-3.5">
              {CERT_ITEMS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] hover:border-teal-500/40 dark:hover:border-[#00d4aa]/40 hover:bg-slate-50 dark:hover:bg-[#181824] hover:translate-x-1 transition-all shadow-xs hover:shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-[#00d4aa]/10 text-teal-600 dark:text-[#00d4aa] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-[#e8e8ed] leading-snug">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-[#5c5c6e] font-medium mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
