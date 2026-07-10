# 03 — Animations : Framer Motion (motion) + GSAP/ScrollTrigger

## Répartition des responsabilités

- **`motion` (Framer Motion)** : tout ce qui est micro-interaction et lié au composant (hover, tap, reveal simple au scroll via `whileInView`, transitions de layout, toggle de thème)
- **GSAP + ScrollTrigger** : tout ce qui est séquence de scroll orchestrée sur plusieurs éléments, pin de section, timeline complexe (ex. la timeline du parcours académique)
- **Lenis** : gère le scroll physique (inertie), synchronisé avec `ScrollTrigger.update` dans le `smooth-scroll-provider.tsx`

Ne jamais faire faire à GSAP ce que `motion` fait déjà bien (hover/tap) — évite la duplication de logique.

## Setup Lenis + ScrollTrigger (dans `smooth-scroll-provider.tsx`)

- Initialiser Lenis avec un `lerp` entre `0.08` et `0.12` (scroll rapide mais doux, cohérent avec la demande "speed to scroll")
- Sur `requestAnimationFrame`, appeler `lenis.raf(time)` et `ScrollTrigger.update()`
- Cleanup impératif dans le `return` du `useEffect` (destroy Lenis, kill tous les ScrollTriggers) pour éviter les fuites mémoire en navigation client

## Variants Framer Motion à centraliser dans `lib/animations.ts`

- `fadeInUp` : `opacity: 0, y: 40` → `opacity: 1, y: 0`, `duration: 0.6`, `ease: [0.16, 1, 0.3, 1]` (expo-out)
- `staggerContainer` : `staggerChildren: 0.08` pour les listes/grilles
- `wordReveal` : découpage du titre du hero en mots (ou lettres), chaque mot part de `opacity: 0, y: 20, filter: "blur(8px)"` vers l'état final, avec un `stagger` de `0.04s`
- `cardHover` : `whileHover={{ y: -8, scale: 1.02 }}`, transition `duration: 0.3, ease: [0.16, 1, 0.3, 1]`
- `magneticButton` : le bouton suit le curseur dans un rayon de ~40px (calcul de la distance souris/centre du bouton via `onMouseMove`, applique une translation proportionnelle avec un spring `motion` — `stiffness: 150, damping: 15`)

## Hovers spécifiques à implémenter

- **Liens de navigation** : trait qui se dessine de gauche à droite sous le lien au survol (`scaleX: 0 → 1`, `transform-origin: left`)
- **Cards projets** : légère élévation + zoom d'image (`scale: 1.05`) + ombre colorée qui apparaît (voir `02-design-system.md`) + léger tilt 3D suivant la position du curseur dans la card (`rotateX`/`rotateY` calculés à partir de `mouseX`/`mouseY` relatifs à la card, amplitude max ±6deg)
- **Boutons CTA** : effet magnétique + changement de couleur de fond en douceur
- **Badges de compétences** : petit `scale: 1.08` + légère rotation aléatoire (`rotate: 2deg`) au survol, pour un effet "vivant" sans être distrayant
- **Curseur personnalisé** (`custom-cursor.tsx`) : un point qui suit la souris avec un lag doux (spring `motion`), qui grossit (`scale: 2.5`) et change d'opacité/couleur au survol de tout élément `data-cursor="hover"`. Désactivé sur mobile/tactile (détection via `matchMedia("(hover: hover)")`)

## Séquences GSAP + ScrollTrigger à implémenter

- **Timeline du parcours académique** (section À propos) : une ligne verticale dont le tracé (`stroke-dashoffset` d'un SVG, ou `scaleY` d'un `div`) se remplit progressivement pendant que l'utilisateur scrolle dans la section, avec chaque étape (Bac → DUT → Licence) qui apparaît en fade quand son point sur la timeline est atteint. Utiliser `ScrollTrigger` avec `scrub: 1` pour lier la progression au scroll exact (pas d'animation "one-shot")
- **Section Expérience** : `ScrollTrigger` avec `pin: true` sur le titre de section pendant que les 3 cards d'expérience défilent horizontalement ou se révèlent une par une avec un léger décalage de profondeur (`z-index` + `scale`)
- **Section Hero** : au chargement, une timeline GSAP orchestre dans l'ordre : (1) reveal du titre mot par mot, (2) fade-in du sous-titre, (3) apparition des CTA, (4) fade-in de la scène 3D en arrière-plan — délais échelonnés de ~0.15s entre chaque étape

## Règles de performance des animations

- Toujours `will-change: transform` uniquement sur les éléments activement animés (retirer après l'animation pour ne pas saturer le compositing)
- Toutes les animations `whileInView` avec `viewport={{ once: true, amount: 0.2 }}` — ne pas rejouer une animation de reveal à chaque passage
- Respecter `prefers-reduced-motion: reduce` : désactiver Lenis (scroll natif), désactiver le curseur personnalisé, remplacer les reveals par de simples fade rapides (`duration: 0.15`, sans translation)
