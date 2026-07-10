import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { AnimatedNav } from "@/components/ui/animated-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Youssef CHLIH — AI & Data Developer",
  description:
    "Portfolio of Youssef CHLIH — AI & Data Developer specializing in Machine Learning, Deep Learning, NLP, Computer Vision, and Data Engineering. Based in Kénitra, Morocco.",
  keywords: [
    "AI Developer",
    "Data Engineering",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Portfolio",
    "Youssef CHLIH",
  ],
  authors: [{ name: "Youssef CHLIH" }],
  openGraph: {
    title: "Youssef CHLIH — AI & Data Developer",
    description:
      "AI & Data Developer specializing in ML, DL, NLP, and Computer Vision.",
    type: "website",
    locale: "en_US",
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
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <AnimatedNav />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
