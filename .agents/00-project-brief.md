# 00 — Project Brief

## Qui

Portfolio personnel de **Youssef CHLIH**, AI & Data Developer basé à Kénitra, Maroc. Étudiant en Licence Big Data & Intelligence Artificielle, actuellement en stage chez HB Dev sur la plateforme éducative **Mentora AI**.

## Objectif du site

Un portfolio one-page, **simple mais créatif** : pas surchargé, pas 15 sections avec des effets partout, mais 5-6 sections propres où chaque animation a une raison d'être. L'idée directrice est "minimalisme animé" — beaucoup d'espace négatif, une palette réduite, et 3-4 moments forts (hero 3D, reveals au scroll, hovers soignés) plutôt que des effets sur chaque pixel.

## Contraintes non négociables

1. **Next.js 15 (App Router) + TypeScript + Tailwind CSS**
2. **Light mode ET dark mode**, avec un toggle, dark mode par défaut
3. Typographie soignée : une police display expressive pour les titres + une police lisible pour le corps
4. Animations via **Framer Motion (`motion`)** pour les micro-interactions/hovers, **GSAP + ScrollTrigger** pour les séquences de scroll
5. Une pièce **3D/WebGL avec Three.js** (via `@react-three/fiber` + `@react-three/drei`) dans le hero, légère et optionnelle sur mobile
6. Export **statique** (`output: "export"`) car le site sera déployé sur GitLab Pages — donc pas d'API routes, pas de SSR dynamique
7. Le CV PDF de l'utilisateur sera ajouté dans `/public/resume.pdf` — prévoir un bouton "Télécharger mon CV" qui pointe dessus

## Comment lire ce dossier `.agents/`

Chaque fichier de ce dossier est un prompt/spec autonome pour une partie du projet. Traite-les dans cet ordre :

1. `00-project-brief.md` — ce fichier, contexte général
2. `01-tech-stack.md` — stack technique exacte et setup du projet
3. `02-design-system.md` — couleurs, typographie, light/dark mode, spacing
4. `03-animations-motion-gsap.md` — specs Framer Motion + GSAP/ScrollTrigger
5. `04-three-webgl.md` — spec de la scène 3D du hero
6. `05-content-cv.md` — contenu exact du CV à utiliser, section par section
7. `06-deployment-gitlab.md` — configuration du déploiement GitLab Pages

Construis le projet fichier par fichier, en respectant chaque spec avant de passer à la suivante. Ne jamais inventer de contenu (expériences, dates, chiffres) qui n'est pas dans `05-content-cv.md`.
