# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/product website for **Sycure** (Sycure Estate), an estate access-control platform: residents issue time-bound visitor passes, guards verify them at the gate, and estate managers get an audit trail. This repo is the Next.js marketing site — not the resident/guard/manager application itself. See `SYCURE_ESTATE_COMPANY_PROFILE.md` for full product/business context if you need to understand claims made in the copy.

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test suite configured in this repo.

Deployed via Netlify (`netlify.toml`); Next.js is auto-detected, build command is `npm run build`.

## Architecture

**Everything lives under `app/`.** This is a single-page marketing site (`app/page.tsx`) composed of ordered section components, plus a few standalone routes (`/demo`, `/privacy`, `/delete-account`).

### Content is centralized, not hardcoded

`app/lib/content.ts` is the single source of truth for all marketing copy and structured data (nav links, CTAs, role descriptions, FAQ, testimonials, platform roadmap, etc.). **Components render this data; they do not hardcode strings.** When changing copy, edit `content.ts`, not the component. Records use `as const` / `satisfies` so literal types (e.g. `RoleId`, `VerificationStateKey`) flow from data to components — adding a new item to an array often just works against existing component code due to these derived types.

`content.ts` also defines the semantic verification-state system (`approved | pending | expired | rejected | mismatch`) used across every product mock (gate log, guard verify, visitor pass) — this maps directly to the design tokens in `globals.css` (`--color-approved`, `--color-pending`, etc.).

### Component layers (`app/components/`)

- `primitives/` — generic, content-agnostic building blocks (`ButtonLink`, `Container`, `SectionHeader`, `StatusBadge`). No marketing copy lives here.
- `marketing/` — one component per homepage section (`hero`, `trust-strip`, `problem-section`, `how-it-works`, `role-tabs`, `security-section`, `platform-section`, `use-cases`, `testimonials`, `faq`, `cta-section`), composed in order in `app/page.tsx`. Each pulls its copy from `content.ts`.
- `product/` — visual mocks of the actual product UI (device frame, gate log, guard verify screen, visitor pass, QR glyph) used to illustrate the product within marketing sections.
- `motion/reveal.tsx` — scroll-triggered reveal wrapper (`IntersectionObserver` adds `.is-visible`); pairs with the `.reveal` CSS class in `globals.css`. Respects `prefers-reduced-motion` (becomes a no-op).
- `site-navbar.tsx` / `site-footer.tsx` — global chrome, also driven by `content.ts` (`NAV_LINKS`, `FOOTER_GROUPS`).

`app/lib/cn.ts` is a deliberately minimal `cn()` (join truthy class names) — no `clsx`/`tailwind-merge` dependency.

### Design system (`app/globals.css`)

Tailwind v4 with all design tokens defined via `@theme` (no `tailwind.config`) — colors, radii, shadows, and motion durations/easings are CSS custom properties consumed as Tailwind utilities (e.g. `bg-ink`, `text-brand-strong`, `rounded-card`, `shadow-float`). Key conventions:

- Brand cyan (`--color-brand*`) is the "verified/secure" accent signal, not the primary button color — primary actions use `ink` (near-black) for a premium, architectural feel. Keep this distinction when adding UI.
- Light-only design currently (`color-scheme: light` is fixed in `:root`; no dark-mode theme is implemented).
- Two shared interaction primitives, applied via class names rather than reimplemented per component: `.press` (scale-down active state for buttons) and `.reveal`/`.is-visible` (scroll reveal, used with the `Reveal` component).
- Semantic verification-state colors (`approved`, `pending`, `expired`, `rejected`, `mismatch`) are tokens, not one-off hex values — reuse them for any new status UI.

Fonts are loaded via `next/font/google` in `app/layout.tsx` (Inter for body, Plus Jakarta Sans for display/headings) and exposed as CSS variables consumed in `globals.css`'s `@theme inline` block.

### Path alias

`@/*` maps to the repo root (`tsconfig.json`), so imports use `@/app/lib/cn` etc. rather than relative paths across directories.

## Repo-specific agent rules

- **This project's Next.js version (16.2.2) may differ from training data in breaking ways.** `node_modules/next` ships pre-release docs at `node_modules/next/dist/docs/` — read the relevant guide there before writing Next.js code that relies on API/convention assumptions, and heed any deprecation notices found there.
- Installed skills (`.agents/skills/`, tracked via `skills-lock.json`) include `apple-design` and `find-animation-opportunities` — consult these for motion/interaction work, since the existing `.press`/`.reveal` primitives and reduced-motion handling already follow their guidance.
