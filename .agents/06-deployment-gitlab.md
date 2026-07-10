# 06 — Déploiement GitLab Pages

## Contraintes

- Le site est exporté en statique (`output: "export"` dans `next.config.ts`, voir `01-tech-stack.md`)
- GitLab Pages exige que les fichiers finaux soient dans un dossier nommé exactement `public`
- Aucune logique serveur : tout le formulaire de contact et les interactions doivent fonctionner côté client uniquement

## Fichiers à créer

### `.gitlab-ci.yml` (à la racine du repo)

```yaml
image: node:20

pages:
  stage: deploy
  script:
    - npm install
    - npm run build
    - mkdir -p public
    - cp -r out/* public/
  artifacts:
    paths:
      - public
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
```

### Mise à jour du `README.md`

Ajouter une section "Déploiement" expliquant :

- Le déploiement se déclenche automatiquement à chaque push sur `main` via GitLab CI/CD
- URL finale : `https://<username>.gitlab.io/<repo-name>`
- Pour un domaine personnalisé : Settings → Pages → Add new domain, dans le projet GitLab
- Pour tester le build en local avant de pousser : `npm run build && npx serve out`

## Checklist avant chaque déploiement

- Aucune route n'utilise `getServerSideProps`, de Route Handler dynamique, ou de middleware serveur
- Toutes les librairies client-only (`gsap`, `lenis`, `three`, `@react-three/fiber`) sont bien chargées uniquement dans des composants `"use client"`, avec `next/dynamic({ ssr: false })` pour la scène 3D
- Le build local (`npm run build`) se termine sans erreur et génère bien un dossier `out/`
- Le contenu de `out/` servi localement (`npx serve out`) affiche correctement le site, y compris le toggle light/dark, les animations, et le lien de téléchargement du CV (`/resume.pdf`)
