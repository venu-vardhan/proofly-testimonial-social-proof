# Coss UI Integration

Project 05 explicitly requires all interface components to use `coss.com/ui` primitives.

## Official references
- https://coss.com/ui
- https://coss.com/ui/docs/get-started
- https://coss.com/ui/docs/styling
- Registry: https://coss.com/ui/r/{name}.json
- Source repository: https://github.com/cosscom/coss

## Repository implementation

Proofly now uses Coss UI registry components for the shared Button, Card, Badge, Input, Textarea, and Spinner primitives under `client/src/registry/default/ui/`.

The compatibility facade at `client/src/components/ui.jsx` routes existing page-level imports through those Coss primitives.

Tailwind CSS v4 is configured through `@tailwindcss/vite`, with Coss semantic design tokens in `client/src/coss-theme.css`. `client/components.json` is configured for the official `@coss` registry.

## Reproducible registry sync

From `client/`:

```bash
npm install
npm run ui:sync
```

The sync command uses the official shadcn CLI and Coss registry.

## Source ownership

Coss UI is designed around a source-owned, copy/paste model. Keeping the primitives in the repository makes the UI auditable and customizable while retaining the Coss component APIs and Base UI foundation.
