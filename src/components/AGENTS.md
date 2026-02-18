# COMPONENTS AGENTS

## Focus

Keep UI primitives and shared components consistent and variant-driven.

## Where to look

- UI primitives: `src/components/ui/`
- Compound components: `src/components/shared/`
- Typography: `src/components/typography.tsx`

## Rules

- Use `tailwind-variants` for component variants
- Use `Title` and `Text` for typography
- Use `lucide-react` for icons
- Keep components under 200 lines

## Anti-patterns

- Default exports
- Inline complex styles or string concatenation for className
- Icons from other libraries
