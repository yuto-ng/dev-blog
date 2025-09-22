# Repository Guidelines

## Project Structure & Module Organization
- Source: `src/` using the Next.js App Router (`src/app`).
- UI: `src/components` (ui-elements, ui-parts, organisms) and `src/features/*` for feature-scoped components.
- State: `src/store` (Recoil atoms/selectors/keys).
- Utilities: `src/lib`.
- Assets: `public/`.
- Stories: `*.stories.tsx` co-located with components.

## Build, Test, and Development Commands
- `yarn dev` — Run Next.js locally on http://localhost:3000.
- `yarn build` — Production build (`.next/`).
- `yarn start` — Start production server.
- `yarn sb` — Run Storybook on http://localhost:6006.
- `yarn build-storybook` — Static Storybook build.
- `yarn lint` — Biome lint and checks.
- `yarn format` — Biome format (writes changes).

## Coding Style & Naming Conventions
- Language: TypeScript; components in PascalCase (e.g., `ArticleCard/index.tsx`).
- Files: Prefer `index.tsx` for component entry and `ComponentName.stories.tsx` for stories.
- Styling: Tailwind CSS (`src/app/globals.css`, `tailwind.config.js`).
- State: Recoil atoms/selectors in `src/store`; keep keys centralized in `recoilKeys.ts`.
- Formatting/Linting: Use Biome. Before committing: `yarn lint && yarn format`.

## Testing Guidelines
- Primary: Storybook stories; add interaction tests via `@storybook/test` where useful.
- Co-locate stories next to components; keep stories minimal but representative.
- No unit-test framework is configured; prefer visual/interaction coverage via Storybook.

## Commit & Pull Request Guidelines
- Commits: Use clear, imperative subjects. Optional scope prefix (e.g., `feat(CategoryMenu): add keyboard nav`).
- PRs: Include description, screenshots for UI changes, and any linked issues.
- Checklist before opening PR:
  - `yarn lint` passes and `yarn format` applied.
  - New/changed components have stories.
  - No secrets or `.env*` files committed.

## Security & Configuration Tips
- Use environment variables via `.env.local`; never commit secrets.
- Review external links/assets in `public/` and components for safety.
- Keep dependencies up to date; prefer minor bumps unless breaking.

## Codex Agent Instructions
- Role: Act as a focused repo maintainer. Prefer minimal, targeted changes aligned with this document.
- Priorities: Correctness first, then DX (readability, reuse), then performance. Avoid scope creep.

### Approvals
- Mode: on-request — ask before actions that are destructive or outside workspace.
- Requires approval:
  - Installing/upgrading packages (`npm/pnpm/yarn install`, `brew`), network fetches that change state.
  - Deleting/moving many files, rewriting history, or modifying CI/workflows.
  - Running long tasks that write outside the repo or need elevated permissions.
- Safe without approval:
  - Editing files via `apply_patch` in this repo.
  - Read-only commands (listing, grep/rg, showing file contents).

### Tools & Conventions
- Editing: Use `apply_patch`. Keep diffs minimal and consistent with existing style.
- Search: Prefer `rg` for file/text search.
- Package manager: Use `yarn` scripts defined in this repo.
- Lint/format: Use Biome (`yarn lint`, `yarn format`). Do not introduce new linters/formatters.
- Stories: For changed UI components, ensure/update `*.stories.tsx` next to the component.
- MCP: GitHub MCP is allowed for read operations; no secrets printed. Use env var tokens.

### Definition of Done
- Build: `yarn build` completes without errors (no unintended type errors).
- Lint/Format: `yarn lint` passes and formatting applied.
- Stories: New or modified components have up-to-date stories that render.
- Docs: README or in-file docs updated if behavior or usage changed.
- Security: No secrets added; uses `.env.local` or environment variables.

### Coding Notes
- TypeScript: Prefer explicit types for public APIs and props. Avoid `any`.
- Components: PascalCase directories with `index.tsx` entry; colocate CSS/vanilla-extract where applicable.
- State: Use Recoil; centralize keys in `src/store/recoilKeys.ts`.
- Styles: Tailwind utility-first; keep class lists readable and deduplicated.

### JSX Spacing
- Do not insert blank lines between sibling JSX elements/components inside a return block. Keep elements contiguous. Use blank lines only when separating with a comment or control block where it materially improves readability.
