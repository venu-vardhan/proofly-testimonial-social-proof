# Proofly — Testimonial & Social Proof Collector
## Stack
- MongoDB + Mongoose
- Express.js + Node.js
- React + Vite
- JWT access/refresh authentication with httpOnly cookies
- Multer image uploads
- Tailwind CSS v4
- Coss UI registry primitives
- Responsive animated UI

## Core workflow
1. Owner creates an account and signs in.
2. Owner creates a branded Space with a unique slug, prompt, rating/avatar settings and custom questions.
3. Customers submit testimonials publicly without creating an account.
4. Owner moderates submissions using All, Pending, Approved and Archived views.
5. Approved testimonials appear on the responsive Wall of Love.
6. Owner views rating statistics and generates Grid, Carousel or Badge embed code.

## Local setup
Requirements: Node.js 20+ and MongoDB.

```bash
cp server/.env.example server/.env
npm run install:all
npm run dev
```

The frontend runs on `http://localhost:5173` and the API on `http://localhost:4000`.

### Coss UI setup
The frontend is configured for the official Coss registry. From `client/`:

```bash
npm install
npm run ui:sync
```

The project keeps Coss registry source under `client/src/registry/default/ui/` and uses a compatibility facade so feature pages consume the shared primitives consistently.

### Optional demo seed
Set a local `DEMO_PASSWORD` environment variable and run:

```bash
npm run seed
```

Never commit real passwords, tokens, API keys or database credentials.

## Documentation
- [API reference](docs/API.md)
- [Requirement map](docs/REQUIREMENT-MAP.md)
- [Security notes](docs/SECURITY.md)
- [Coss UI integration note](docs/COSS-UI.md)
- [Video explanation summary](docs/VIDEO-SUMMARY.md)

## UI / UX
The interface is intentionally professional and product-oriented: responsive layouts, layered cards, gradient accents, hover elevation, floating hero elements and reduced-motion support. The animation layer is subordinate to the required product workflow.

## Assessment alignment
The supplied assessment requires the selected project to implement its core requirements, use MERN or Python, provide a working frontend/backend where applicable, store and retrieve data appropriately, implement APIs/business logic, handle validation/errors, maintain clean structure, document external libraries/services, and submit a public Git repository. This repository is organized around those requirements.

## Coss UI
Project 05 explicitly requires interface components using `coss.com/ui` primitives. Proofly uses the Coss UI registry source for its shared Button, Card, Badge, Input, Textarea and Spinner primitives, with Tailwind CSS v4 and semantic Coss design tokens. The project also contains `client/components.json` pointing at the official `@coss` registry.
