# 02 — Design System (typographie, couleurs, light/dark mode)

## Philosophie

"Simple mais créatif" : peu de couleurs, une typographie forte qui fait tout le travail visuel, beaucoup d'espace négatif, et 2-3 détails signature (grain de fond, curseur magnétique, accent qui pulse légèrement) plutôt qu'un site chargé.

## Typographie

- **Police display (titres, hero)** : une police géométrique/expressive avec du caractère — utiliser via `next/font/google` :
  - `Bricolage Grotesque` (variable, très polyvalente, moderne) — recommandée en premier choix
  - alternative : `Clash Display` ou `General Sans` (via fichiers locaux si non dispo sur Google Fonts, sinon `next/font/local`)
- **Police de corps (paragraphes, UI)** : `Geist` ou `Inter` — lisible, neutre, excellente en petites tailles
- **Police mono (badges de tech, dates)** : `Geist Mono` ou `JetBrains Mono` — pour un détail "developer" subtil sur les tags de compétences et les dates

Échelle typographique (rem, mobile-first, à scaler avec `clamp()`) :

```css
--text-hero: clamp(2.5rem, 8vw, 6rem);      /* titre du hero */
--text-h2: clamp(1.75rem, 4vw, 3rem);        /* titres de section */
--text-h3: clamp(1.25rem, 2.5vw, 1.75rem);   /* sous-titres */
--text-body: clamp(1rem, 1.2vw, 1.125rem);
--text-small: 0.875rem;
```

## Couleurs

Utiliser des CSS variables définies dans `globals.css`, exposées via `[data-theme="dark"]` et `[data-theme="light"]` (compatible `next-themes`).

**Dark mode (par défaut)**
```css
--bg: #0a0a0f;
--bg-elevated: #121218;
--text-primary: #f5f5f7;
--text-secondary: #a1a1aa;
--border: rgba(255,255,255,0.08);
--accent: #7c5cff;        /* violet électrique — ou cyan #00e5ff selon préférence finale */
--accent-soft: rgba(124,92,255,0.15);
```

**Light mode**
```css
--bg: #fafafa;
--bg-elevated: #ffffff;
--text-primary: #14141a;
--text-secondary: #52525b;
--border: rgba(0,0,0,0.08);
--accent: #6d3fff;        /* légèrement plus saturé pour rester lisible sur fond clair */
--accent-soft: rgba(109,63,255,0.1);
```

Règle stricte : l'accent est utilisé avec parcimonie — liens actifs, CTA principal, glow au hover, accent de la scène 3D. Jamais en fond de section large.

## Transition light/dark

- Toggle avec icône soleil/lune (`lucide-react`: `Sun`, `Moon`) qui pivote/fade au clic via `motion`
- Transition globale douce sur `background-color` et `color` (`transition: background-color 0.4s ease, color 0.4s ease` au niveau `html`)
- Utiliser `next-themes` avec `attribute="data-theme"` et `disableTransitionOnChange={false}` désactivé volontairement pour garder la transition
- La scène 3D (Three.js) doit aussi changer de teinte de lumière/particules selon le thème actif (écouter le thème via le hook `useTheme` et adapter la couleur des matériaux)

## Layout & spacing

- Container max-width : `1200px`, padding horizontal fluide (`clamp(1.5rem, 5vw, 4rem)`)
- Grille "bento" asymétrique pour Projets et Compétences (pas une grille uniforme 3x3 — mélanger des cards de tailles différentes pour créer du rythme visuel)
- Rayon de bordure cohérent : `--radius: 1rem` sur les cards, `--radius-sm: 0.5rem` sur les badges
- Ombres douces et colorées (jamais de gris plat) : `box-shadow: 0 20px 40px -15px var(--accent-soft)` sur les cards au hover

## Texture

- Overlay de bruit/grain très léger en `position: fixed` sur tout le viewport (opacité ~3-4%, `mix-blend-mode: overlay`), pour casser le plat du fond — un simple SVG `feTurbulence` en data-URI suffit, pas besoin d'image externe
