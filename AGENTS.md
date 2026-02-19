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

<!-- KOWORKER-BOOTSTRAP:START -->
## Koworker Bootstrap (Managed)

- Objective: Landing page para captação de serviços de perícia judicial e assistência técnica em engenharia mecânica.
- Audience: Empresas e pessoas físicas com processos jurídicos envolvendo máquinas e ferramentas, com foco em elevadores e caldeiras.

- Scope V1:
  - Hero com posicionamento pericial
  - Seção de serviços (Perito Judicial, Assistente Técnico, Parecer Técnico)
  - Áreas de atuação com foco em elevadores e caldeiras
  - Credenciais técnicas e profissionais
  - CTA de contato direto
  - Aviso de atuação técnica dentro de normas e limites legais

- Non-goals:
  - Blog e conteúdo recorrente
  - Área do cliente com login
  - Agendamento online complexo
  - Simuladores técnicos interativos
  - Multilíngue

- Constraints:
  - Comunicação juridicamente adequada e profissional
  - Sem promessa de resultado processual
  - Entrega V1 em página única
  - Foco em conversão para contato rápido
  - Terminologia técnica consistente com prática pericial

- UI:
  - Direction: `editorial`
  - Density: `balanced`
  - Radius: `0.5rem`
  - Fonts:
    - `sans`: `"IBM Plex Sans", "Segoe UI", sans-serif`
    - `heading`: `"IBM Plex Serif", "Georgia", serif`
    - `mono`: `"IBM Plex Mono", "SFMono-Regular", monospace`

- CSS target path: `src/index.css`
- Source of truth: `PROJECT_PROFILE.md`
<!-- KOWORKER-BOOTSTRAP:END -->
