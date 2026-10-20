import {
  Mail,
  Phone,
  Globe,
  ArrowRight,
  Download,
  FileText,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "youssefchlih.ait@gmail.com",
    href: "mailto:youssefchlih.ait@gmail.com",
    icon: <Mail className="w-5 h-5 text-teal-600 dark:text-[#00d4aa]" />,
  },
  {
    label: "Phone",
    value: "+212 6-654498",
    href: "tel:+2126654498",
    icon: <Phone className="w-5 h-5 text-teal-600 dark:text-[#00d4aa]" />,
  },
  {
    label: "GitHub",
    value: "github.com/youssefchlih",
    href: "https://github.com/youssefchlih",
    icon: <GithubIcon className="w-5 h-5 text-teal-600 dark:text-[#00d4aa]" />,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/youssef-chlih",
    href: "https://linkedin.com/in/youssef-chlih",
    icon: <LinkedinIcon className="w-5 h-5 text-teal-600 dark:text-[#00d4aa]" />,
    external: true,
  },
  {
    label: "Live Portfolio",
    value: "youssefchlih.vercel.app",
    href: "https://youssefchlih.vercel.app",
    icon: <Globe className="w-5 h-5 text-teal-600 dark:text-[#00d4aa]" />,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-100/70 dark:bg-[#0e0e15] border-t border-slate-200/80 dark:border-[#1e1e2e]/60 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-bold text-teal-700 dark:text-[#00d4aa] bg-teal-50 dark:bg-[#00d4aa]/10 px-2.5 py-1 rounded border border-teal-200 dark:border-[#00d4aa]/20 font-mono">
            08
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#e8e8ed] tracking-tight">
            Get in Touch
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-200 dark:from-[#1e1e2e] to-transparent ml-2" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Narrative & CV Download Card */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#e8e8ed] leading-snug mb-4">
              Let&apos;s build intelligent, scalable solutions together.
            </h3>
            <p className="text-base text-slate-600 dark:text-[#9898a8] leading-relaxed mb-8">
              Whether you have an AI pipeline in development, an ambitious computer vision
              challenge, a data governance mandate, or an exciting career opportunity — feel
              free to reach out. I am open to discussing full-time opportunities, high-impact
              collaborations, and cutting-edge engineering initiatives.
            </p>

            {/* CV Download Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] hover:border-teal-500/40 dark:hover:border-[#00d4aa]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs hover:shadow-md dark:shadow-[0_4px_25px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-[#00d4aa]/10 text-teal-600 dark:text-[#00d4aa] flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <strong className="block text-base font-bold text-slate-900 dark:text-[#e8e8ed]">
                    Curriculum Vitae (PDF)
                  </strong>
                  <p className="text-xs text-slate-500 dark:text-[#5c5c6e]">
                    Detailed one-page overview of background, stack, and achievements.
                  </p>
                </div>
              </div>
              <a
                href="/CV_CHLIH_YOUSSEF.pdf"
                download="CV_CHLIH_YOUSSEF.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-teal-600 dark:bg-[#00d4aa] text-white dark:text-[#0a0a0f] hover:bg-teal-700 dark:hover:bg-[#00e6b8] hover:-translate-y-0.5 transition-all shadow-xs shrink-0"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>

          {/* Contact Direct Links */}
          <div className="flex flex-col gap-3">
            {CONTACT_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#12121a] border border-slate-200 dark:border-[#1e1e2e] hover:border-teal-500/40 dark:hover:border-[#00d4aa]/40 hover:bg-slate-50 dark:hover:bg-[#181824] hover:translate-x-1.5 transition-all group flex items-center gap-4 shadow-xs hover:shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-[#00d4aa]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-[#5c5c6e]">
                    {link.label}
                  </span>
                  <span className="block text-sm sm:text-base font-medium text-slate-800 dark:text-[#e8e8ed] truncate group-hover:text-teal-600 dark:group-hover:text-[#00d4aa] transition-colors">
                    {link.value}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 dark:text-[#5c5c6e] group-hover:text-teal-600 dark:group-hover:text-[#00d4aa] group-hover:translate-x-1 transition-all shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
