# Future Scalability Guide

## Content Management

### Current: JSON Files (Zero-code updates)

```
content/
├── projects/new-project.json      → Auto-appears on /projects
├── case-studies/new-project.json  → Auto-appears on /case-studies/[id]
└── blogs/new-post.json            → Set published: true to show
```

### Future: Headless CMS

Migrate to Sanity, Contentful, or Notion API:
1. Replace `src/lib/content.ts` fetch logic
2. Keep same TypeScript interfaces
3. Add webhook for ISR revalidation

## Adding Features

### New Page
1. Create `src/app/new-page/page.tsx`
2. Add to `siteConfig.nav`
3. Add to `sitemap.ts`

### New Project Category
1. Add to `ProjectCategory` type in `src/types/index.ts`
2. Add to filter in `ProjectGrid.tsx`

### Admin Dashboard (Future)
- Protected route `/admin`
- CRUD for contacts, download stats
- Visual editor for JSON content

## AI Assistant Upgrade Path

1. **Current:** Keyword RAG with knowledge chunks
2. **Phase 2:** Add OpenAI/Anthropic with retrieved context
3. **Phase 3:** Vector embeddings (Pinecone/Supabase pgvector)
4. **Phase 4:** Conversation memory + analytics

## Performance Scaling

- Enable Vercel ISR for project/case study pages
- CDN for images (Vercel Blob or Cloudinary)
- Edge functions for assistant API
- MongoDB indexes on high-query fields

## Analytics Expansion

Track events beyond resume downloads:
- Project card clicks
- Case study read time
- Contact form conversion
- Assistant query topics

## Internationalization (i18n)

Structure ready for `next-intl`:
- Extract strings to `messages/en.json`
- Add `messages/hi.json` for Hindi

## Testing

Recommended additions:
- Playwright E2E for critical flows
- Vitest for RAG retrieval logic
- Lighthouse CI in GitHub Actions

## Monorepo Split (if needed)

```
apps/web/          → Next.js frontend
apps/api/          → Express backend
packages/shared/   → Types, schemas
```

Current single-repo works well until team grows or deploy targets diverge significantly.
