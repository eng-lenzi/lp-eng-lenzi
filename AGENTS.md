# AGENTS

## Overview

Base SaaS boilerplate with Bun, ORPC, Kysely, React 19, TanStack Router, and Tailwind.

## Where to look

- API router and auth: `src/api/router.ts`, `src/api/auth/`
- DB connection and queries: `src/api/db/`
- UI primitives: `src/components/ui/`
- Compound components: `src/components/shared/`
- Routes: `src/routes/`

## Conventions

- Use named exports only
- No comments in code
- Use `Title` and `Text` instead of `h1` or `p`
- Use `&&` for conditional rendering
- Use `lucide-react` for icons
- Use `tailwind-variants` for variants
- Keep route-specific UI under `-components/` and hooks under `-utils/`

## Anti-patterns (do not)

- Default exports
- Inline complex styles or className concatenation without variants
- Ternary rendering for simple on/off UI
- Editing generated files like `src/routeTree.gen.ts`
- Adding new icons from other libraries

## Commands

- `bun dev`
- `bun check`
- `bun lint`
- `bun new-project`
