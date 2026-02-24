# AGENTS.md

## Cursor Cloud specific instructions

This is a single-page Astro static portfolio site styled with TailwindCSS v4. No backend, database, or external services required.

### Running the dev server

```
pnpm dev
```

The dev server runs on `http://localhost:4321` by default. Use `--host 0.0.0.0` for external access.

### Available scripts

See `package.json` `scripts` — key commands: `pnpm dev`, `pnpm build`, `pnpm preview`, `pnpm format`.

### Notes

- **pnpm version**: Enforced via `packageManager` field in `package.json` (pnpm 10.15.1). Corepack must be enabled (`corepack enable`) to auto-resolve the correct version.
- **No lint command**: The project uses Prettier for formatting (`pnpm format`) but has no ESLint config. Use `pnpm format --check` for CI-style checks.
- **Build scripts warning**: `pnpm install` may warn about ignored build scripts for `esbuild` and `sharp`. The build still works correctly without approving them on linux x64, as platform-specific pre-built binaries are used.
- **No env vars needed**: No `.env` file or secrets are required for local development.
