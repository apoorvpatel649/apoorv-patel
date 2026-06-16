# Deployment Guide

## Frontend (Vercel)

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial portfolio deployment"
git push origin main
```

### 2. Import to Vercel

1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repository
3. Framework: Next.js (auto-detected)
4. Add environment variables:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://yourdomain.vercel.app
API_URL=https://your-api.railway.app
RESEND_API_KEY=re_xxxx
RESEND_FROM_EMAIL=onboarding@yourdomain.com
CONTACT_EMAIL=apoorvpatel649@gmail.com
MONGODB_URI=mongodb+srv://...
```

### 3. Deploy

Vercel auto-deploys on push. Custom domain: Settings → Domains.

## Backend API (Railway / Render)

### Railway

1. New Project → Deploy from GitHub
2. Set start command: `npx tsx server/src/index.ts`
3. Add env vars: `MONGODB_URI`, `RESEND_API_KEY`, `PORT`, `FRONTEND_URL`
4. Copy the public URL to Vercel's `API_URL`

### Render

1. New Web Service → Connect repo
2. Build: `npm install`
3. Start: `npx tsx server/src/index.ts`
4. Add environment variables

## MongoDB Atlas

1. Create free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Database Access → Create user
3. Network Access → Allow `0.0.0.0/0` (or Vercel/Railway IPs)
4. Connect → Copy connection string to `MONGODB_URI`

## Resend Email

1. Sign up at [resend.com](https://resend.com)
2. Add and verify your domain
3. Create API key → `RESEND_API_KEY`
4. Set `RESEND_FROM_EMAIL` to verified address

## Google Analytics

1. Create GA4 property
2. Copy Measurement ID → `NEXT_PUBLIC_GA_ID`

## Post-Deploy Checklist

- [ ] All pages load correctly
- [ ] Contact form sends email
- [ ] Resume download tracks in MongoDB
- [ ] Dark/light mode works
- [ ] Mobile responsive
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] OG image displays on social shares
