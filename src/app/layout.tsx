import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { Providers } from "@/providers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Youssef CHLIH — AI & Data Science Engineer | Digital Innovation",
  description:
    "Portfolio of Youssef CHLIH — AI & Data Science Engineer specializing in Machine Learning, Deep Learning, LLM Pipelines (LangChain, LangGraph), Computer Vision, ETL, and Business Intelligence.",
  keywords: [
    "Youssef Chlih",
    "AI Engineer",
    "Data Scientist",
    "Big Data",
    "LangChain",
    "LangGraph",
    "Machine Learning",
    "Computer Vision",
    "Morocco",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Youssef CHLIH", url: "https://youssefchlih.vercel.app" }],
  openGraph: {
    title: "Youssef CHLIH — AI & Data Science Engineer",
    description:
      "Turning complex research and multimodal data into robust, automated digital solutions.",
    url: "https://youssefchlih.vercel.app",
    siteName: "Youssef CHLIH Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('portfolio_theme');
                let t = saved;
                if (!t) {
                  t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                if (t === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.style.colorScheme = 'dark';
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.style.colorScheme = 'light';
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-[var(--accent)]/30 selection:text-[var(--accent)]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
