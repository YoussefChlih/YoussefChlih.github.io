import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { AnimatedNav } from "@/components/ui/animated-nav";
import { NonCriticalChrome } from "@/components/providers/non-critical-chrome";
import "./globals.css";

// next/font: self-hosts the fonts (no render-blocking Google Fonts <link>),
// injects preload + font-display: swap automatically, and exposes a CSS
// variable per family that globals.css consumes. This eliminates the layout
// shift and network waterfall the old invisible <link> approach caused (the
// fonts were never actually loaded before).
const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display-loaded",
  weight: ["600", "700", "800"],
  preload: true,
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-loaded",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-loaded",
  weight: ["400", "500", "600"],
  preload: false, // mono is decorative; keep main bytes for display+body.
});

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
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <body>
        <ThemeProvider>
          <SmoothScrollProvider>
            <NonCriticalChrome />
            <AnimatedNav />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
