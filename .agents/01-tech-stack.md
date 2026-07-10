# 01 — Stack technique & setup

## Stack

- **Framework** : Next.js 15, App Router, TypeScript strict
- **Styling** : Tailwind CSS v4, avec CSS variables pour le theming (light/dark)
- **Animation UI** : `motion` (le package renommé de Framer Motion — `import { motion } from "motion/react"`)
- **Animation scroll avancée** : `gsap` + `gsap/ScrollTrigger`
- **Scroll fluide** : `lenis` (react wrapper `lenis/react` ou init manuelle dans un provider client)
- **3D/WebGL** : `three`, `@react-three/fiber`, `@react-three/drei`
- **Icônes** : `lucide-react` (icônes UI génériques) + `react-icons/si` uniquement pour les logos de technologies précis (Python, Docker, PostgreSQL, LangChain, n8n, Redis, Neo4j, etc.)
- **Fonts** : `next/font/google` ou `next/font/local` — jamais de `<link>` externe vers Google Fonts (perf + FOUT)
- **Thème** : `next-themes` pour la gestion du light/dark mode (évite le flash de mauvais thème au chargement)

## Setup initial

```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --no-src-dir
cd portfolio
npm install motion gsap lenis three @react-three/fiber @react-three/drei lucide-react react-icons next-themes
```

## Configuration export statique

Dans `next.config.ts` :

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
```

Règles strictes liées à l'export statique :

- Aucune Route Handler dynamique, aucun `getServerSideProps`, aucun middleware avec logique serveur
- Le formulaire de contact ne doit PAS appeler une API interne — utiliser un lien `mailto:` simple, ou un service tiers compatible statique (Formspree/EmailJS) si un vrai formulaire est voulu
- Toute librairie qui touche au `window`/`document` (GSAP, Lenis, Three.js) doit être dans un composant marqué `"use client"` et idéalement chargée via `next/dynamic` avec `ssr: false`

## Arborescence attendue

```
app/
  layout.tsx          → fonts, ThemeProvider, structure HTML de base
  page.tsx             → assemble les sections dans l'ordre
  globals.css           → variables CSS light/dark, reset, styles de base
components/
  providers/
    theme-provider.tsx
    smooth-scroll-provider.tsx   → init Lenis + sync avec ScrollTrigger
  ui/
    theme-toggle.tsx
    magnetic-button.tsx
    custom-cursor.tsx
    animated-nav.tsx
  sections/
    hero.tsx
    about.tsx
    experience.tsx
    projects.tsx
    skills.tsx
    certifications.tsx
    contact.tsx
  three/
    hero-scene.tsx        → composant client, dynamic import
lib/
  animations.ts          → variants motion réutilisables + helpers GSAP
  data.ts                → contenu du CV structuré en objets TS (voir 05-content-cv.md)
public/
  resume.pdf              → CV PDF de l'utilisateur (à ajouter manuellement)
  fonts/                   → si polices locales
```

## Performance

- Score Lighthouse cible : Performance > 90 sur desktop et > 80 sur mobile, Accessibility > 95
- `three`/`@react-three/fiber` chargés uniquement via `next/dynamic(() => import(...), { ssr: false })`
- Respecter `prefers-reduced-motion` partout : fournir un fallback statique pour chaque animation
- Toutes les animations n'affectent que `transform` et `opacity` (jamais `width`, `height`, `top`, `left`)
