import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-[#1e1e2e] py-8 px-6 bg-white dark:bg-[#0a0a0f] transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="font-bold text-base text-slate-900 dark:text-[#e8e8ed]">
            Youssef CHLIH <span className="text-teal-600 dark:text-[#00d4aa]">.</span>
          </span>
          <p className="text-xs text-slate-500 dark:text-[#5c5c6e] mt-0.5">
            &copy; 2026 — Built with Next.js 14+, TypeScript &amp; Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-4 text-slate-500 dark:text-[#5c5c6e]">
          <a
            href="mailto:youssefchlih.ait@gmail.com"
            aria-label="Email"
            className="hover:text-teal-600 dark:hover:text-[#00d4aa] transition-colors hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/youssef-chlih"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-teal-600 dark:hover:text-[#00d4aa] transition-colors hover:-translate-y-0.5"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/youssefchlih"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-teal-600 dark:hover:text-[#00d4aa] transition-colors hover:-translate-y-0.5"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
