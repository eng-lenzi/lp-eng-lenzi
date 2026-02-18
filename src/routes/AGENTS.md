# ROUTES AGENTS

## Focus

Use TanStack Router file-based routing consistently.

## Structure

- `src/routes/__root.tsx` for the root layout
- `src/routes/_app.tsx` for authenticated layout
- Route folders should include `-components/` and `-utils/`

## Rules

- Export `Route` with `createFileRoute`
- Keep route-specific UI under `-components/`
- Keep route-specific hooks under `-utils/`
- Do not edit `src/routeTree.gen.ts`

## Anti-patterns

- Default exports
- Conditional rendering using simple ternaries instead of `&&`
