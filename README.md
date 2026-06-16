# Apoorv Patel — Portfolio Website

Premium portfolio for UI/UX Designer & Frontend Developer internships.

## Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Email:** Resend
- **Deployment:** Vercel (frontend) + Railway/Render (API)
- **Analytics:** Google Analytics

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run frontend + API together
npm run dev
```

- Frontend: http://localhost:3000
- API: http://localhost:4000

## Project Structure

```
apoorv-portfolio/
├── content/                    # CMS-ready JSON content
│   ├── projects/               # One JSON file per project
│   ├── case-studies/           # Full case study data
│   └── blogs/                  # Blog posts
├── docs/                       # Documentation
├── public/
│   ├── resume/                 # PDF resume
│   └── images/                 # Static assets
├── server/                     # Express API
│   └── src/
│       ├── models/             # MongoDB schemas
│       ├── routes/             # API routes
│       └── lib/                # DB connection
└── src/
    ├── app/                    # Next.js App Router pages
    ├── components/             # UI components
    ├── lib/                    # Utilities, RAG, content loader
    └── types/                  # TypeScript types
```

## Adding a New Project

1. Create `content/projects/your-project.json`
2. Create `content/case-studies/your-project.json` (optional but recommended)
3. Add cover image to `public/images/projects/`

No code changes required — projects appear automatically.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home with hero, featured projects, skills |
| `/about` | Background and story |
| `/projects` | Searchable, filterable project grid |
| `/case-studies` | Case study listings |
| `/case-studies/[id]` | Full case study template |
| `/skills` | Skills with proficiency bars |
| `/design-system` | Tokens and component docs |
| `/resume` | PDF viewer + download tracking |
| `/blog` | CMS-ready blog |
| `/contact` | Contact form with DB + email |
| `/assistant` | RAG-powered AI chatbot |

## Documentation

- [UI Design Specification](docs/UI-DESIGN-SPEC.md)
- [Design System](docs/DESIGN-SYSTEM.md)
- [Database Schema](docs/DATABASE-SCHEMA.md)
- [API Architecture](docs/API-ARCHITECTURE.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [SEO Guide](docs/SEO-GUIDE.md)
- [Scalability Guide](docs/SCALABILITY.md)

## License

Private — © Apoorv Patel
