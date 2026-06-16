# UI Design Specification

## Design Philosophy

Apple-inspired minimalism meets Stripe-level polish. The portfolio communicates premium craft within 30 seconds through strong typography, generous whitespace, and purposeful motion.

## Visual Principles

1. **Clarity over decoration** — Every element serves scanning or action
2. **Hierarchy through scale** — Display type (Syne) for headlines, Inter for body
3. **Breathing room** — 8-point grid with section padding 64–96px
4. **Subtle depth** — Glassmorphism on navbar, soft shadows on cards
5. **Dark-first** — Default dark mode; light mode fully supported

## Typography

| Level | Font | Size | Weight | Use |
|-------|------|------|--------|-----|
| Display XL | Syne | 48–60px | 700 | Hero headline |
| Display LG | Syne | 36–48px | 700 | Page titles |
| Heading | Syne | 24px | 600 | Section headers |
| Body LG | Inter | 18px | 400 | Lead text |
| Body | Inter | 16px | 400 | Default |
| Caption | Inter | 14px | 400 | Metadata |
| Small | Inter | 12px | 500 | Badges |

## Color System

### Dark Mode (Default)
- Background: `#09090B`
- Surface: `#111113`
- Text Primary: `#FAFAFA`
- Text Secondary: `#A1A1AA`
- Accent: `#818CF8`

### Light Mode
- Background: `#FAFAFA`
- Surface: `#FFFFFF`
- Text Primary: `#09090B`
- Accent: `#6366F1`

## Layout

- **Max width:** 1200px
- **Grid:** 12 columns, 16–32px gutters
- **Nav height:** 72px fixed
- **Breakpoints:** 640 / 768 / 1024 / 1280px

## Motion

- Page sections: fade-in + 24px translateY, 600ms ease
- Cards: hover lift (-4px) + shadow, 300ms
- Hero profile: gentle float animation, 6s loop
- Buttons: scale 0.98 on press

## Accessibility (WCAG 2.1 AA)

- 4.5:1 contrast on all text
- 44px minimum touch targets
- Focus-visible rings on interactive elements
- Semantic HTML landmarks (`main`, `nav`, `footer`)
- Keyboard navigation throughout
- `aria-label` on icon-only buttons
- Skip link to main content

## 30-Second Scan Pattern

1. Hero headline + availability badge (0–5s)
2. Animated profile + social proof (5–10s)
3. Featured project cards (10–20s)
4. Skills snapshot + CTA (20–30s)
