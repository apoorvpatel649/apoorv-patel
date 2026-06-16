# SEO Guide

## Built-in SEO Features

- Dynamic metadata per page (`generateMetadata`)
- Open Graph tags (title, description, image)
- Twitter Card (`summary_large_image`)
- `sitemap.xml` auto-generated from content
- `robots.txt` with sitemap reference
- Semantic HTML structure
- Image optimization via `next/image`

## Configuration

Update `src/lib/site-config.ts`:

```typescript
url: "https://apoorvpatel.dev",  // Production URL
ogImage: "/og-image.png",         // 1200x630px
```

## Page Titles

Format: `{Page} | Apoorv Patel`

Examples:
- Home: "Apoorv Patel — UI/UX Designer & Frontend Developer"
- Projects: "Projects | Apoorv Patel"
- Case Study: "ShopBazaar — Case Study | Apoorv Patel"

## Keywords Target

Primary: UI/UX Designer, Frontend Developer, Portfolio, Figma, React
Secondary: Internship, Design Systems, User Research, Chandigarh

## Content SEO Tips

1. **Case studies** — Rich, keyword-natural content in JSON files
2. **Blog** — Publish regularly; each post gets unique metadata
3. **Alt text** — All images have descriptive alt attributes
4. **Internal linking** — Projects link to case studies, home links to all sections

## Performance (Core Web Vitals)

- `next/image` with lazy loading and WebP/AVIF
- `optimizePackageImports` for lucide-react, framer-motion
- Font display: swap (Inter, Syne)
- Minimal client JS on static pages

## Social Sharing

Create `public/og-image.png` (1200×630) with:
- Name + role
- Tagline
- Clean dark background with accent

## Google Search Console

1. Verify domain ownership
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`
3. Monitor indexing and Core Web Vitals

## Structured Data (Future)

Add JSON-LD for Person and CreativeWork:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Apoorv Patel",
  "jobTitle": "UI/UX Designer",
  "url": "https://apoorvpatel.dev"
}
```
