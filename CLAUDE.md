# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **CORPRAG Design System** - a design system and marketing website blueprint for a B2B SaaS platform selling enterprise LLM assistants with RAG (Retrieval-Augmented Generation) capabilities. This repository contains only the UI/design layer with no backend code.

## Technology Stack

- **React 18+** with TypeScript
- **Tailwind CSS 3+** with custom extended tokens
- **class-variance-authority (CVA)** for component variant management
- **lucide-react** for icons
- **clsx** + **tailwind-merge** for className utilities

Target framework: **Next.js App Router** (not included in repo)

## Key Files

| File | Purpose |
|------|---------|
| `ui.tsx` | Core design system components (Button, Card, Input, Badge, IconWrapper, Section, Container) |
| `sections.tsx` | Pre-built landing page sections (Hero, HowItWorks, Features, Security, CTA) |
| `globals.css` | CSS custom properties (65 design tokens) and base styles |
| `tailwind.config.ts` | Tailwind theme configuration extending CSS variables |
| `design-system-preview.jsx` | Interactive design system demo/showcase |

## Architecture

### Component Pattern
Components use the CVA (class-variance-authority) pattern for type-safe variants:
```typescript
const buttonVariants = cva("base-classes", {
  variants: { variant: {...}, size: {...} },
  defaultVariants: { variant: "primary", size: "md" }
});
```

### Design Token System
All design values flow from CSS custom properties in `globals.css`:
- Colors: `--primary-*`, `--accent-*`, `--neutral-*`
- Typography: `--text-xs` through `--text-7xl` (Major Third ratio 1.25)
- Spacing: 8px grid system
- Shadows: Layered shadows with color variants

Tailwind extends these tokens in `tailwind.config.ts`.

### Component Composition
```
Section (padding wrapper)
└── Container (max-width: narrow 72rem / wide 90rem)
    └── UI Components (Button, Card, Badge, etc.)
```

### Compound Components
Card uses compound pattern: `Card`, `CardHeader`, `CardTitle`, `CardDescription`

## Design Philosophy: "Refined Corporate Trust"

- Understated luxury for Enterprise B2B
- Generous whitespace
- Layered shadows instead of flat cards
- Muted color palette (trust over aggression)
- Swiss banking aesthetic

### Typography
- **Manrope** - display font for headings/buttons
- **Source Sans 3** - body font for paragraphs

## Integration into Next.js

To use this design system in a Next.js project:
1. Copy `ui.tsx`, `sections.tsx` to `components/`
2. Copy `globals.css` to `app/globals.css`
3. Copy `tailwind.config.ts` to project root
4. Install dependencies: `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`

## Documentation References

- **README.md** - Design system quick-start and token documentation (Russian)
- **PRD.md** - Complete product requirements including security considerations (Russian)
- **project-report.md** - Gap analysis and recommendations

## Content Verification

The PRD specifies that all strong claims require `[UNVERIFIED]` markers until source/case study is provided. Avoid superlatives like "100% protection" - use "under requirements" or similar safe formulations.
