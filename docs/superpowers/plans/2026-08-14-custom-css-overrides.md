# Custom CSS Overrides File — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `src/app/custom.css` — one unlayered stylesheet whose rules are guaranteed to override Tailwind v4's layered styles — and wire it into the root layout.

**Architecture:** Tailwind v4 emits all styles inside native cascade layers (`theme`, `base`, `components`, `utilities`). Unlayered author CSS always beats layered CSS regardless of specificity or order, so hand-written rules in `custom.css` (no `@layer` wrapper) win with no `!important`. The file is imported once in `src/app/layout.tsx`, after `globals.css`.

**Tech Stack:** Next 16.2.9 (App Router), React 19, Tailwind CSS v4 via `@tailwindcss/postcss`. No test framework exists in this repo — verification is lint, typecheck, production build, and one manual dev-browser check.

## Global Constraints

- File must be `src/app/custom.css` (user preference).
- All rules in it must be unlayered — never wrap any rule in `@layer`; that is the override guarantee.
- No `!important` except to beat inline `style=""` attributes.
- Import must come after `import "./globals.css";` in `src/app/layout.tsx`.
- No new dependencies.
- While the file contains only comments, existing styles and behavior must be unchanged.

---

### Task 1: Create `custom.css` and wire it into the root layout

**Files:**
- Create: `src/app/custom.css`
- Modify: `src/app/layout.tsx:3` (import block)

**Interfaces:**
- Consumes: Tailwind v4 layer setup in `src/app/globals.css` (unchanged).
- Produces: `src/app/custom.css` imported after `globals.css` in the root layout — the permanent override spot.

- [ ] **Step 1: Create the stylesheet**

Create `src/app/custom.css` with exactly this content:

```css
/* ============================================================
   CUSTOM OVERRIDES
   ------------------------------------------------------------
   Rules here are NOT wrapped in a CSS @layer. Tailwind v4 puts
   all of its styles inside cascade layers (theme, base,
   components, utilities), and unlayered CSS always wins over
   layered CSS — regardless of specificity or order.

   So any rule in this file beats any Tailwind class, with no
   !important needed. The one exception: an inline style=""
   attribute on an element can only be beaten with !important.
   ============================================================ */

/* Example 1: override what a Tailwind utility does everywhere.
   Uncomment to change every element using .font-display.

.font-display {
  letter-spacing: 0.1em;
}
*/

/* Example 2: restyle a global element site-wide.

::selection {
  background-color: #1c1c1c;
  color: #ffffff;
}
*/
```

- [ ] **Step 2: Import it in the root layout**

In `src/app/layout.tsx`, change the import block from:

```tsx
import "./globals.css";
```

to:

```tsx
import "./globals.css";
import "./custom.css";
```

- [ ] **Step 3: Prove the cascade guarantee in the dev browser**

Append this temporary rule to the end of `src/app/custom.css` (below the examples):

```css
body {
  background-color: #ff0000;
}
```

Run `npm run dev`, open `http://localhost:3000`, and confirm the page background is red. This proves the unlayered rule beats Tailwind's `bg-canvas` utility (which is inside a cascade layer) with no `!important`.

Expected: red background. Then delete the temporary rule and confirm the background returns to the normal canvas color on refresh. (The dev check only proves the layering guarantee; final CSS order is verified in Task 3 against a production build, since CSS ordering can differ between dev and prod.)

- [ ] **Step 4: Lint**

Run: `npm run lint`
Expected: passes with no errors or warnings.

- [ ] **Step 5: Commit**

```bash
git add src/app/custom.css src/app/layout.tsx
git commit -m "feat: add custom.css override stylesheet wired after globals"
```

---

### Task 2: Remove the unused `HeroStats` import in `Hero.tsx`

**Files:**
- Modify: `src/components/sections/Hero.tsx:2`

**Interfaces:**
- Consumes: nothing.
- Produces: a clean `Hero.tsx` that lints and typechecks; `<HeroStats />` is commented out and its import must be re-added when re-enabled.

- [ ] **Step 1: Delete the import line**

In `src/components/sections/Hero.tsx`, change the top from:

```tsx
import Link from "next/link";
import HeroStats from "@/components/sections/HeroStats";
```

to:

```tsx
import Link from "next/link";
```

(Leave the commented-out `<HeroStats />` in the JSX exactly as it is.)

- [ ] **Step 2: Typecheck and lint**

Run: `npx tsc --noEmit && npm run lint`
Expected: both pass; no "declared but never read" (ts 6133) diagnostic.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "chore: drop unused HeroStats import while component is disabled"
```

---

### Task 3: Production build verification

**Files:**
- None (verification only).

**Interfaces:**
- Consumes: Tasks 1 and 2 complete.

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 2: Confirm commented examples emit no CSS**

Run:

```bash
grep -rn "letter-spacing: 0.1em" .next/static/css/
grep -rn "::selection" .next/static/css/
```

Expected: no matches — production minification strips comments, so the examples emit nothing. If a match does appear, open the file and confirm the text sits inside a `/* ... */` comment and not a rule; that is acceptable.

- [ ] **Step 3: Smoke-check the built app**

Run `npm run start`, open `http://localhost:3000`, and confirm the homepage renders exactly as before (no stray text, background unchanged).

- [ ] **Step 4: Done — no commit**

Nothing changed on disk in this task, so there is no commit.

---

## Plan Self-Review Notes

- Spec coverage: spec item 1 → Task 1; spec item 2 → Task 1; spec item 3 (Hero cleanup) → Task 2; spec verification items → Task 1 Step 3, Task 1 Step 4, Task 3 Steps 1–3.
- No placeholders: all file contents and commands are fully specified.
- Type consistency: no cross-task APIs.
