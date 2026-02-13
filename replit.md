# TechSprint 2.0 — Event Website

## Overview

This is a full-stack web application for **TechSprint 2.0**, a college technical event (Ideathon + Hackathon) organized by the Department of CSE at Punjabi University Patiala. The site features a futuristic dark-themed UI with neon blue accents, showcasing event details, timeline, prizes, team info, and contact information. It's built as a single-page application with a React frontend and an Express backend, following a monorepo structure.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure
The project uses a three-folder monorepo layout:
- **`client/`** — React frontend (SPA)
- **`server/`** — Express backend (API + static file serving)
- **`shared/`** — Shared types and schemas used by both client and server

### Frontend (`client/`)
- **Framework**: React with TypeScript
- **Bundler**: Vite (config in `vite.config.ts`)
- **Routing**: Wouter (lightweight client-side router)
- **Styling**: Tailwind CSS with CSS variables for theming, dark mode by default
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives — all components live in `client/src/components/ui/`
- **Animations**: Framer Motion for scroll/reveal animations
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod resolvers via `@hookform/resolvers`
- **Fonts**: Plus Jakarta Sans (headings + body), Inter (fallback), JetBrains Mono (monospace)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend (`server/`)
- **Framework**: Express 5 running on Node.js via `tsx`
- **HTTP Server**: Node `http.createServer` wrapping Express (supports WebSocket upgrades if needed)
- **API Pattern**: All API routes prefixed with `/api`, registered in `server/routes.ts`
- **Storage Layer**: Abstracted via `IStorage` interface in `server/storage.ts`. Currently uses in-memory `MemStorage`, but designed to be swapped for a database-backed implementation.
- **Dev Server**: Vite dev server is integrated as middleware in development (`server/vite.ts`), providing HMR
- **Production**: Static files served from `dist/public/` with SPA fallback to `index.html`

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` using Drizzle's `pgTable` helpers
- **Validation**: `drizzle-zod` generates Zod schemas from Drizzle table definitions
- **Migrations**: Drizzle Kit configured in `drizzle.config.ts`, outputs to `./migrations/`
- **Connection**: Requires `DATABASE_URL` environment variable
- **Push command**: `npm run db:push` to sync schema to database
- **Current schema**: A `users` table with `id` (UUID), `username`, and `password` fields

### Build System
- **Client build**: Vite builds to `dist/public/`
- **Server build**: esbuild bundles server code to `dist/index.cjs` (CommonJS format for production)
- **Build script**: `script/build.ts` handles both builds, with an allowlist of dependencies to bundle (reduces cold start syscalls)

### Key Design Decisions
1. **In-memory storage default**: The app ships with `MemStorage` so it works without a database during development. The `IStorage` interface makes it straightforward to add PostgreSQL-backed storage using the Drizzle schema.
2. **Light minimalist theme**: CSS variables set for a modern light look — pure white (#FFFFFF) and light gray (#F8FAFC) backgrounds, Deep Navy Blue (#1E3A8A) headings, Electric Blue (#3B82F6) buttons/accents. Glassmorphism cards with subtle borders and soft shadows. Mesh gradient blobs (pale blue/lavender) in background corners for premium feel.
3. **Single-page app**: Only two routes — Home (`/`) and a 404 catch-all. The home page contains all event sections (hero, about, timeline, prizes, team, contact).
4. **shadcn/ui components**: Full library of pre-built components is available. These are source-copied into the project (not installed as a package), so they can be freely customized.

## External Dependencies

- **PostgreSQL**: Required for persistent data storage. Connection via `DATABASE_URL` environment variable. Used with Drizzle ORM.
- **Google Fonts**: Plus Jakarta Sans, Inter, JetBrains Mono loaded from `fonts.googleapis.com`
- **Replit Plugins** (dev only): `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` — conditionally loaded in non-production Replit environments
- **Session Storage**: `connect-pg-simple` is available for PostgreSQL-backed session storage (not currently wired up but listed as a dependency)
- **No external APIs currently integrated**: The routes file is empty, ready for API endpoint registration