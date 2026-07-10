# Portfolio — Youssef CHLIH

Personal portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Three.js**, **Framer Motion**, and **GSAP**.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router, static export)
- **Styling**: Tailwind CSS v4 + CSS variables for theming
- **Animation**: Framer Motion (`motion`) + GSAP/ScrollTrigger
- **Smooth Scroll**: Lenis
- **3D/WebGL**: Three.js via @react-three/fiber + @react-three/drei
- **Icons**: Lucide React + React Icons
- **Theme**: next-themes (light/dark mode)

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npx serve out
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Next.js and deploy
4. Each push to `main` triggers automatic deployment

### Local Build

```bash
npm run build
npx serve out
```

The site is exported as static HTML to the `out/` directory.

## 📁 Project Structure

```
app/
  layout.tsx          → Fonts, ThemeProvider, SEO
  page.tsx            → Assembles all sections
  globals.css         → Design system, CSS variables
components/
  providers/          → Theme & smooth scroll providers
  ui/                 → Theme toggle, magnetic button, custom cursor, nav
  sections/           → Hero, About, Experience, Projects, Skills, Certifications, Contact
  three/              → 3D neural network particle cloud
lib/
  animations.ts       → Framer Motion variants
  data.ts             → All CV content (typed TypeScript)
public/
  CV_CHLIH_YOUSSEF.pdf → Downloadable CV
```

## ✨ Features

- **Light/Dark Mode** with smooth transitions
- **3D Neural Network** particle cloud in hero (disabled on mobile)
- **GSAP ScrollTrigger** academic timeline
- **Magnetic buttons** with spring physics
- **Custom cursor** with hover detection
- **Smooth scrolling** via Lenis
- **Fully responsive** design
- **Reduced motion** support
- **Static export** — no server required

## 📄 License

MIT
