# TechSprint 2.0

**Ideathon + Hackathon | Feb 24 - 26, 2026**

A premium, modern event website for **TechSprint 2.0** -- a 3-day Ideathon + Hackathon organized by the **Department of Computer Science & Engineering, Punjabi University Patiala**.

Built with a glassmorphism UI, scroll-reveal animations, and an Apple-inspired light aesthetic.

---

## Live Preview

> Hosted on [Replit](https://replit.com) -- click **Run** to launch the dev server on port 5000.

---

## About the Event

TechSprint 2.0 is a college-level technical competition spread across three days:

| Day | Date | Theme | Highlights |
|-----|------|-------|------------|
| Day 1 | 24 Feb | Ideation | Registration, PPT Preparation, Pitching Round & Results |
| Day 2 | 25 Feb | Development | MVP Link Preparation, Buffer Time, MVP Final Touches |
| Day 3 | 26 Feb | Showdown | MVP Presentation + Judges Q&A, Results & Prize Distribution |

### Prizes

| Place | Prize | Extras |
|-------|-------|--------|
| Winner | Rs. 2,000 | Medals, Certificates, Goodies |
| 1st Runner-up | Rs. 1,500 | Medals, Certificates, Goodies |
| 2nd Runner-up | Rs. 1,000 | Medals, Certificates, Goodies |
| 3rd Runner-up | -- | Medals, Certificates, Goodies |
| Top 10 Teams | -- | Diary and Pen Set |

---

## Features

- **Glassmorphism UI** -- Frosted-glass cards with `backdrop-filter: blur(10px)` and translucent white backgrounds
- **Gradient Text Effects** -- Animated gradient headings using `linear-gradient(135deg, #1E3A8A, #3B82F6, #06B6D4)`
- **Floating Register Button** -- CTA with a pulsing blue glow animation
- **Scroll-Reveal Animations** -- Framer Motion `fadeUp` variants on all sections
- **Sticky Glassmorphism Navbar** -- Always-present frosted navbar with blur effect
- **Metallic Prize Tints** -- Gold, silver, and bronze gradient overlays on prize cards
- **Lucide Icons** -- Context-aware icons for each timeline event (UserCheck, ClipboardList, Coffee, Presentation, etc.)
- **Mesh Gradient Backgrounds** -- Soft blue/violet blurred circles for a premium feel
- **Fully Responsive** -- Mobile-first grid layout that stacks gracefully on small screens
- **shadcn/ui Components** -- Built on Radix UI primitives with consistent design tokens

---

## Tech Stack

### Frontend

| Technology | Purpose |
|-----------|---------|
| [React](https://react.dev) | UI library |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Vite](https://vite.dev) | Bundler & dev server |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com) | Component library (Radix UI) |
| [Framer Motion](https://motion.dev) | Scroll & reveal animations |
| [Wouter](https://github.com/molefrog/wouter) | Lightweight client-side routing |
| [TanStack React Query](https://tanstack.com/query) | Server state management |
| [React Hook Form](https://react-hook-form.com) | Form handling |
| [Lucide React](https://lucide.dev) | Icon library |

### Backend

| Technology | Purpose |
|-----------|---------|
| [Express 5](https://expressjs.com) | HTTP server & API |
| [Node.js](https://nodejs.org) | Runtime |
| [tsx](https://github.com/privatenumber/tsx) | TypeScript execution |
| [Drizzle ORM](https://orm.drizzle.team) | Database ORM (PostgreSQL) |
| [Zod](https://zod.dev) | Schema validation |

### Fonts

- **Plus Jakarta Sans** -- Primary headings & body text
- **Inter** -- Fallback sans-serif
- **JetBrains Mono** -- Monospace (timestamps, code)

---

## Project Structure

```
techsprint-2.0/
  client/                    # React frontend (SPA)
    index.html               # HTML entry point
    public/
      favicon.png            # Site favicon
    src/
      App.tsx                # Root component & routing
      main.tsx               # React entry point
      index.css              # Global styles, Tailwind, animations
      pages/
        home.tsx             # All sections (Hero, About, Timeline, Prizes, Team, Contact, Footer)
        not-found.tsx        # 404 page
      components/
        ui/                  # 47 shadcn/ui components (Card, Button, Badge, Avatar, etc.)
      hooks/
        use-toast.ts         # Toast notification hook
        use-mobile.tsx       # Mobile detection hook
      lib/
        queryClient.ts       # TanStack Query config
        utils.ts             # Utility functions (cn, etc.)
  server/                    # Express backend
    index.ts                 # Server entry point
    routes.ts                # API route registration
    storage.ts               # Storage interface (IStorage / MemStorage)
    static.ts                # Static file serving (production)
  shared/                    # Shared types & schemas
    schema.ts                # Drizzle schema + Zod validation
  script/
    build.ts                 # Production build script
  attached_assets/           # Logo images & assets
  drizzle.config.ts          # Drizzle Kit config
  tailwind.config.ts         # Tailwind CSS config
  postcss.config.js          # PostCSS config
  components.json            # shadcn/ui config
  tsconfig.json              # TypeScript config
  package.json               # Dependencies & scripts
```

---

## Getting Started

### Prerequisites

- **Node.js** 20+
- **npm** 9+
- **PostgreSQL** (optional -- app works with in-memory storage by default)

### Installation

```bash
# Clone the repository
git clone https://github.com/aioad/techsprint-2.0.git
cd techsprint-2.0

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server (frontend + backend on port 5000)
npm run dev
```

Open [http://localhost:5000](http://localhost:5000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start the production server
npm start
```

### Database (Optional)

If you want persistent storage with PostgreSQL:

```bash
# Set the connection string
export DATABASE_URL="postgresql://user:pass@host:5432/dbname"

# Push the schema to the database
npm run db:push
```

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server with HMR |
| `build` | `npm run build` | Build client (Vite) + server (esbuild) for production |
| `start` | `npm start` | Run the production build |
| `check` | `npm run check` | TypeScript type checking |
| `db:push` | `npm run db:push` | Push Drizzle schema to PostgreSQL |

---

## Sections Overview

### Hero
Large gradient "TechSprint 2.0" title text, animated floating Register button with blue glow, university and event logos, mesh gradient background with soft blurred circles.

### About
Three glassmorphism feature cards highlighting Innovation, Collaboration, and Competition -- each with unique accent colors and Lucide icons.

### Timeline
Card-based 3-day schedule with contextual Lucide icons for each event. Color-coded by day (blue for Ideation, indigo for Development, violet for Showdown).

### Prizes
Three main prize columns with metallic gradient tints (gold/silver/bronze) and hover-elevate effects. Additional cards for 3rd Runner-up and Top 10 Teams.

### Team
Grid of team member avatars with gradient hover glow effects. Displays faculty advisors and event organizers.

### Contact
Glassmorphism contact card with clickable phone and email links, styled with hover-elevate interactions.

### Footer
Minimal footer with gradient "TechSprint 2.0" branding and department attribution.

---

## Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FFFFFF` | Page background |
| Surface | `#F8FAFC` | Alternate section backgrounds |
| Heading | `#1E3A8A` | Deep Navy Blue headings |
| Accent | `#3B82F6` | Electric Blue buttons & accents |
| Gradient | `#1E3A8A -> #3B82F6 -> #06B6D4` | Animated gradient text |
| Glass | `rgba(255,255,255,0.6)` | Glassmorphism card backgrounds |
| Border | `#F1F5F9` | Subtle card borders |

### Custom CSS Classes

| Class | Effect |
|-------|--------|
| `.gradient-text` | Animated gradient text with background-clip |
| `.glass-card` | Glassmorphism with backdrop-blur and translucent bg |
| `.animate-float` | Subtle vertical bounce animation |
| `.animate-glow` | Pulsing blue box-shadow glow |

---

## Deployment

The app is configured for deployment on **Replit**:

1. Click the **Run** button to start the dev server
2. Use Replit's built-in deployment to publish with a `.replit.app` domain
3. Optionally configure a custom domain

For other platforms, run `npm run build` and deploy the `dist/` folder.

---

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

Requires support for `backdrop-filter` (CSS) and ES2020+ (JavaScript).

---

## License

This project is open source and available for educational purposes.

---

## Acknowledgments

- **Department of CSE, Punjabi University Patiala** -- Event organizers
- [shadcn/ui](https://ui.shadcn.com) -- Component library
- [Lucide](https://lucide.dev) -- Icon set
- [Framer Motion](https://motion.dev) -- Animation library

---

<p align="center">
  <strong>Innovate. Build. Compete.</strong>
</p>
