import { BookOpen, Globe2, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-slate-200/80 dark:border-[#1e1e2e]/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-bold text-teal-700 dark:text-[#00d4aa] bg-teal-50 dark:bg-[#00d4aa]/10 px-2.5 py-1 rounded border border-teal-200 dark:border-[#00d4aa]/20">
            01
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#e8e8ed] tracking-tight">
            About Me
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-200 dark:from-[#1e1e2e] to-transparent ml-2" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          {/* Bio Story */}
          <div className="space-y-5 text-slate-600 dark:text-[#9898a8] leading-relaxed text-base sm:text-lg">
            <p>
              I am a final-year{" "}
              <strong className="text-slate-900 dark:text-[#e8e8ed] font-semibold">
                Bachelor&apos;s student in Big Data &amp; Artificial Intelligence
              </strong>{" "}
              at EST Salé, currently interning at{" "}
              <strong className="text-slate-900 dark:text-[#e8e8ed] font-semibold">HB Dev</strong> on the{" "}
              <em className="text-teal-600 dark:text-[#00d4aa] not-italic font-semibold">Mentora AI</em> educational
              platform. In this role, I architect databases and build multi-agent AI pipelines using{" "}
              <strong className="text-slate-900 dark:text-[#e8e8ed] font-semibold">
                LangChain, LangGraph, and LangSmith
              </strong>{" "}
              for automated, personalized educational generation.
            </p>
            <p>
              My expertise spans{" "}
              <strong className="text-slate-900 dark:text-[#e8e8ed] font-semibold">
                Machine Learning, Deep Learning, Computer Vision, and NLP
              </strong>
              , deeply grounded in practical enterprise data engineering:{" "}
              <strong className="text-slate-900 dark:text-[#e8e8ed] font-semibold">
                data governance, ETL pipelines, and Business Intelligence
              </strong>{" "}
              (Talend Open Studio, Power BI, Advanced SQL, OLAP). I specialize in translating
              academic research and high-dimensional analytics into high-impact digital solutions.
            </p>
            <p>
              Fluent in{" "}
              <strong className="text-slate-900 dark:text-[#e8e8ed] font-semibold">
                English, French, and Arabic
              </strong>
              , I am passionate about applying intelligent AI systems and analytical rigor to
              sustainable development, global digital transformation, and forward-looking
              innovation hubs.
            </p>
          </div>

          {/* Value Prop Highlight Cards */}
          <div className="flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] shadow-xs hover:border-teal-500/40 dark:hover:border-[#00d4aa]/40 hover:bg-slate-50 dark:hover:bg-[#181824] transition-all group">
              <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-[#00d4aa]/10 text-teal-600 dark:text-[#00d4aa] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-[#e8e8ed] mb-1">
                Research &amp; Empirical Analytics
              </h3>
              <p className="text-sm text-slate-500 dark:text-[#5c5c6e]">
                Translating theoretical modeling into robust, high-performance algorithms,
                predictive systems, and reproducible pipelines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] shadow-xs hover:border-teal-500/40 dark:hover:border-[#00d4aa]/40 hover:bg-slate-50 dark:hover:bg-[#181824] transition-all group">
              <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-[#00d4aa]/10 text-teal-600 dark:text-[#00d4aa] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-[#e8e8ed] mb-1">
                Multilingual &amp; Cross-Cultural
              </h3>
              <p className="text-sm text-slate-500 dark:text-[#5c5c6e]">
                Native Arabic, fluent French, and fluent English — comfortable operating with
                distributed teams and international stakeholders.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] shadow-xs hover:border-teal-500/40 dark:hover:border-[#00d4aa]/40 hover:bg-slate-50 dark:hover:bg-[#181824] transition-all group">
              <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-[#00d4aa]/10 text-teal-600 dark:text-[#00d4aa] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-[#e8e8ed] mb-1">
                Full-Stack AI Lifecycle
              </h3>
              <p className="text-sm text-slate-500 dark:text-[#5c5c6e]">
                From data governance &amp; star schema ETL to LLM agent workflows, containerized
                CI/CD deployment, and interactive BI dashboards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
