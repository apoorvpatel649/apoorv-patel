# API Architecture

## Overview

```
Client (Next.js)  →  Next.js API Routes  →  Express Server  →  MongoDB
                         ↓ (fallback)
                      Resend Email
```

## Express Server (`server/src/`)

Base URL: `http://localhost:4000` (dev) | `API_URL` (prod)

### Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/resume/download` | Track resume download |
| GET | `/api/resume/download/stats` | Download count |

### Contact Flow

1. Validate with Zod schema
2. Save to MongoDB (if `MONGODB_URI` set)
3. Send email via Resend (if `RESEND_API_KEY` set)
4. Return success response

## Next.js API Routes (`src/app/api/`)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/contact` | Proxy to Express or Resend fallback |
| POST | `/api/assistant` | RAG chatbot responses |
| POST | `/api/resume/download` | Proxy download tracking |
| GET | `/api/projects` | JSON project list |

## AI Assistant (RAG)

Architecture:
1. **Knowledge Base** — Built from resume, projects, case studies, skills
2. **Retrieval** — Keyword + semantic scoring against chunks
3. **Generation** — Template-based response assembly (upgradeable to LLM)

Knowledge sources:
- `content/projects/*.json`
- `content/case-studies/*.json`
- `src/lib/site-config.ts`
- Resume PDF metadata

To upgrade to OpenAI/Anthropic:
```typescript
// In src/lib/rag.ts
const context = retrieveContext(query);
const response = await openai.chat.completions.create({
  messages: [
    { role: "system", content: `Answer using: ${context}` },
    { role: "user", content: query }
  ]
});
```

## Error Handling

- Zod validation → 400 with details
- DB unavailable → graceful fallback to email-only
- Email unavailable → dev mode logs submission

## CORS

Express allows `FRONTEND_URL` origin (default: `http://localhost:3000`)
