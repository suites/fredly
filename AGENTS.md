# AGENTS.md - Developer Guide for Agents

## Project Overview
This is a technical blog built with **Astro**, **TypeScript**, and **MDX**. It uses **pnpm** for package management and deploys to **Netlify**.

## Build & Development Commands
- **Install**: `pnpm install`
- **Start Dev Server**: `pnpm dev` (Runs on http://localhost:4321)
- **Build**: `pnpm build` (Production build)
- **Preview**: `pnpm preview` (Preview production build)
- **Lint**: `pnpm lint` (ESLint)
- **Format**: `pnpm format` (Prettier)

> **Note on Testing**: There is no dedicated test runner (Jest/Vitest) configured. 
> Verification relies on:
> 1. Static analysis (`pnpm lint`, `tsc` via build)
> 2. `pnpm build` success
> 3. Manual verification of the dev server

## Code Style & Conventions

### TypeScript
- **Strict Mode**: Enabled. `noImplicitAny` is true. Avoid `any`.
- **Path Aliases**: Use `@/` for imports (configured in `tsconfig.json`).
  - `@/components/*`
  - `@/layouts/*`
  - `@/utils/*`
  - `@/types/*`
- **Interfaces**: Define `Props` interface for Astro components.
  ```typescript
  interface Props {
    title: string;
    post: BlogPost;
  }
  const { title, post } = Astro.props;
  ```

### Naming Conventions
- **Files**:
  - Components: PascalCase (`PostCard.astro`)
  - Utils: camelCase with descriptor (`post-slug.util.ts`) or simple name (`date.ts`).
  - Pages: kebab-case or `[slug].astro`.
- **Variables/Functions**: camelCase (`getPostRouteSlug`).
- **Constants**: UPPER_SNAKE_CASE (`SITE_TITLE`).

### Component Structure (.astro)
1. **Frontmatter**:
   - Imports (ordered: types -> utils -> components)
   - Interface definitions (`Props`)
   - Prop destructuring
   - Logic/Data preparation
2. **Template**: HTML/JSX-like syntax.
3. **Styles**: Scoped `<style>` tags at the bottom.
   - Use CSS variables for colors (e.g., `var(--color-bg-secondary)`).

### styling
- **Scoped CSS**: Default in Astro. Use `is:global` only when necessary.
- **Variables**: Global theme variables are defined in global CSS (check `src/styles`).
- **Responsive**: Use media queries for mobile/desktop split (e.g., `@media screen and (max-width: 950px)`).

### Language
- **Code**: English naming for all variables/functions.
- **Comments**: Existing comments are often in **Korean**. Maintain this for consistency if modifying existing logic, but English is acceptable for new code.

## File Structure Key Points
- `src/content/blog/`: MDX source files.
- `src/pages/[...slug].astro`: Dynamic route for blog posts.
- `src/consts.ts`: Global configuration and constants.
- `src/utils/`: Shared logic (date formatting, slug generation).

## Workflow for Agents
1. **Explore**: Check `src/consts.ts` for global settings before hardcoding.
2. **Modify**: specific `.astro` or `.ts` files.
3. **Verify**:
   - Run `pnpm lint` to check for style violations.
   - Run `pnpm build` to ensure type safety and build integrity.
