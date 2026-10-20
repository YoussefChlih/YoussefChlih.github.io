interface LanguageItem {
  code: string;
  name: string;
  level: string;
  badge: string;
  desc: string;
  percent: number;
}

const LANGUAGES: LanguageItem[] = [
  {
    code: "AR",
    name: "Arabic",
    level: "Native Proficiency",
    badge: "Native",
    desc: "Mother tongue with full native proficiency in classical written and spoken professional communication.",
    percent: 100,
  },
  {
    code: "FR",
    name: "French",
    level: "Professional Working Proficiency",
    badge: "Fluent",
    desc: "Primary language of Moroccan higher education, technical research, and enterprise corporate environments.",
    percent: 95,
  },
  {
    code: "EN",
    name: "English",
    level: "Professional Working Proficiency",
    badge: "Fluent",
    desc: "Full professional working fluency for AI papers, technical documentation, and international distributed collaboration.",
    percent: 95,
  },
];

export default function Languages() {
  return (
    <section id="languages" className="py-24 px-6 bg-slate-100/70 dark:bg-[#0e0e15] border-t border-slate-200/80 dark:border-[#1e1e2e]/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold text-teal-700 dark:text-[#00d4aa] bg-teal-50 dark:bg-[#00d4aa]/10 px-2.5 py-1 rounded border border-teal-200 dark:border-[#00d4aa]/20 font-mono">
            06
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#e8e8ed] tracking-tight">
            Languages
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-200 dark:from-[#1e1e2e] to-transparent ml-2" />
        </div>

        <p className="text-base text-slate-600 dark:text-[#9898a8] max-w-2xl mb-12">
          Polyglot fluency enables seamless collaboration across international research teams and global organizations.
        </p>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LANGUAGES.map((lang, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] hover:border-teal-500/40 dark:hover:border-[#00d4aa]/40 hover:bg-slate-50 dark:hover:bg-[#181824] hover:-translate-y-1 transition-all shadow-xs hover:shadow-lg dark:shadow-[0_4px_25px_rgba(0,0,0,0.3)] flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-[#00d4aa]/10 border border-teal-200 dark:border-[#00d4aa]/25 text-teal-700 dark:text-[#00d4aa] font-bold text-base flex items-center justify-center">
                    {lang.code}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-[#e8e8ed]">
                      {lang.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-[#5c5c6e] font-medium">
                      {lang.level}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-teal-700 dark:text-[#00d4aa] bg-teal-50 dark:bg-[#00d4aa]/10 border border-teal-200 dark:border-[#00d4aa]/20">
                  {lang.badge}
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-[#9898a8] leading-relaxed mb-6 flex-1">
                {lang.desc}
              </p>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between items-center text-xs font-medium text-slate-500 dark:text-[#5c5c6e] mb-1.5">
                  <span>Proficiency</span>
                  <span className="text-teal-600 dark:text-[#00d4aa] font-bold">{lang.percent}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-[#0a0a0f] border border-slate-200 dark:border-[#1e1e2e] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-400 dark:from-[#00d4aa] dark:to-[#00ffcc] shadow-[0_0_8px_rgba(13,148,136,0.4)] dark:shadow-[0_0_8px_rgba(0,212,170,0.5)]"
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
