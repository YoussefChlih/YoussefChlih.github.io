# 04 — Scène 3D / WebGL (Three.js)

## Objectif

Une pièce 3D discrète dans le hero, qui apporte de la profondeur sans voler la vedette au texte. Ce n'est pas une démo 3D — c'est un détail signature. Doit rester lisible, léger, et cohérent avec le thème IA/data du profil (ex. un nuage de points/particules connectés façon "réseau de neurones", ou une forme géométrique abstraite qui déforme doucement).

## Implémentation

- Composant `components/three/hero-scene.tsx`, marqué `"use client"`
- Chargé dans `hero.tsx` via `next/dynamic(() => import("@/components/three/hero-scene"), { ssr: false, loading: () => null })` pour ne jamais bloquer le rendu initial ni casser le SSR
- Stack : `@react-three/fiber` pour le canvas déclaratif, `@react-three/drei` pour les helpers (`OrbitControls` désactivé pour l'utilisateur, `Points`, `Float`, `Environment` si besoin d'un léger reflet)

## Direction artistique de la scène (choisir une des deux options, ou proposer les deux en variante)

**Option A — Nuage de particules "réseau de neurones"**
- Un ensemble de ~300-500 points en `THREE.Points`, positionnés aléatoirement dans une sphère invisible
- Quelques lignes fines connectant les points les plus proches entre eux (effet "graph"/réseau), en accord avec le profil IA/Data du candidat
- Rotation lente et continue de l'ensemble (`rotation.y += delta * 0.05` dans la boucle `useFrame`)
- Réagit légèrement au mouvement de la souris : la scène entière "suit" le curseur avec un lag doux (parallax 3D, amplitude faible, ±0.1 radian max)

**Option B — Forme abstraite déformée (blob géométrique)**
- Une géométrie type icosaèdre à haute subdivision (`IcosahedronGeometry`), avec un matériau `MeshDistortMaterial` (de `@react-three/drei`) qui déforme doucement la surface dans le temps
- Wireframe fin plutôt que surface pleine, pour rester discret et laisser le texte du hero au premier plan

## Couleur et thème

- La couleur du matériau/des particules suit la variable CSS `--accent` du thème actif (lire le thème via `useTheme()` de `next-themes`, passer la couleur correspondante au matériau Three.js)
- En light mode, réduire l'opacité/l'intensité pour ne pas créer de bruit visuel sur fond clair
- Fond du canvas toujours transparent (`gl={{ alpha: true }}`) pour se fondre avec le fond de la page

## Performance et fallback

- `dpr` limité (`[1, 1.5]`) pour éviter de surcharger le rendu sur écrans haute densité
- Désactiver complètement la scène 3D sur mobile (`< 768px`) et sur `prefers-reduced-motion: reduce` — remplacer par un simple gradient statique ou une image SVG légère en fond
- Pas d'`OrbitControls` interactif pour l'utilisateur (pas de zoom/rotation à la souris) — seulement la réaction passive au mouvement de la souris décrite plus haut
- Cleanup correct du renderer/scene dans `useEffect` pour éviter les fuites mémoire lors des re-render Next.js
