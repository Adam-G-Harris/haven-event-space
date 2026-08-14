# CSS Overrides File — Design

Date: 2026-08-14

## Goal

One obvious, guaranteed-to-win place for custom CSS that overrides any framework
styles — Tailwind utilities, base styles, theme tokens — without `!important`.

## Context

- Next 16.2.9 + React 19, styled with Tailwind CSS v4 via `@tailwindcss/postcss`.
- All styles flow through `src/app/globals.css` (`@import "tailwindcss"` + `@theme`
  tokens), imported once in `src/app/layout.tsx`. No other stylesheets or CSS modules exist.
- Tailwind v4 emits its styles inside native CSS cascade layers (`theme`, `base`,
  `components`, `utilities`). **Unlayered author CSS always beats layered CSS**,
  regardless of specificity or source order. The only thing an unlayered rule cannot
  beat without `!important` is an inline `style=""` attribute on an element.

## Design

### 1. New file: `src/app/custom.css`

- Plain, unlayered CSS — no `@layer` wrapper (that's the guarantee).
- Header comment documents the cascade rule above and the inline-style caveat,
  so future editors don't accidentally wrap the file's rules in a layer.
- Includes 2–3 commented-out examples showing both use cases:
  - overriding a Tailwind-utility-driven style on a component
  - restyling a global element (e.g. `::selection`)
- Inert until the user writes rules into it; existing styles unchanged.

### 2. `src/app/layout.tsx`

Add `import "./custom.css";` directly after `import "./globals.css";`.
This is the only change to existing code.

### 3. Related cleanup: unused import in `Hero.tsx`

`Hero.tsx` currently imports `HeroStats` but the component is commented out,
which fails lint/typecheck at build time. Remove the unused import line as part
of this change. (Re-add it when `<HeroStats />` is re-enabled.)

## Decisions

| Decision                                    | Choice                       | Why                                                                                            |
| ------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------- |
| File name                                   | `custom.css`                 | User preference — reads as the hand-written CSS spot                                           |
| Mechanism                                   | Unlayered file imported last | Guaranteed to beat all Tailwind layers, no `!important`                                        |
| Rejected: region at bottom of `globals.css` | No                           | A region can later be accidentally moved into `@layer`, silently breaking the guarantee        |
| Rejected: `@utility` / `!important`         | No                           | `@utility` is for defining new utilities, not overriding; `!important` fights future overrides |

## Verification

- `npm run build` and `npm run lint` pass with the new file and import in place.
- Manual cascade check: add one temporary rule to `custom.css` (e.g. restyle a
  Tailwind-styled element), confirm in the dev browser that it wins, then remove it.
- Confirm the commented-out examples do not emit CSS.
