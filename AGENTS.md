# The Haven Event Space

Nuxt 4 + Vue 3 marketing site, plain CSS (no Tailwind, no CSS framework).

- Source lives in `app/` (Nuxt 4 convention): `pages/` = routes, `components/` (auto-imported with folder prefix, e.g. `<UiReveal>`, `<SectionsHero>`), `utils/`, `assets/css/main.css` (design tokens + shared classes).
- Style components with plain CSS in `<style scoped>`; reuse the shared classes and CSS variables in `main.css`.
- Commands: `npm run dev`, `npm run build`, `npm run generate` (static output).
