# Design System Documentation

## Component Hierarchy

```
App
├── Providers (ThemeProvider)
├── Navbar
│   ├── Logo
│   ├── NavLinks
│   ├── ThemeToggle
│   └── MobileMenu
├── Main (page content)
│   ├── Sections (Hero, Projects, Skills, etc.)
│   └── Page-specific components
└── Footer

UI Primitives
├── Button (primary | secondary | ghost | outline)
├── Card (default | glass | hover)
├── Input / Textarea
├── Badge (default | accent | outline)
├── Modal
├── FadeIn (motion wrapper)
└── ThemeToggle
```

## Design Tokens

All tokens are CSS custom properties in `src/app/globals.css`:

```css
--background, --foreground
--surface, --surface-elevated
--text-primary, --text-secondary, --text-tertiary
--accent, --accent-hover, --accent-muted
--border, --border-strong
--glass, --glass-border
--radius-sm (8px) through --radius-xl (24px)
--space-1 (8px) through --space-12 (96px)
```

## Components

### Button
- Variants: `primary`, `secondary`, `ghost`, `outline`
- Sizes: `sm` (36px), `md` (44px), `lg` (48px)
- States: hover, active (scale), focus-visible, disabled

### Card
- Props: `hover`, `glass`
- Padding: 24px default
- Border radius: 16px

### Input / Textarea
- Height: 44px (input), min 120px (textarea)
- Focus: accent border + ring
- Error state with message

### Badge
- Pill shape, 12px text
- Variants for category, accent, outline

### Modal
- Backdrop blur, escape to close
- Body scroll lock when open

## Spacing (8-Point Grid)

| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 8px | Tight gaps |
| space-2 | 16px | Component padding |
| space-3 | 24px | Card padding |
| space-4 | 32px | Section gaps |
| space-8 | 64px | Section padding (mobile) |
| space-12 | 96px | Section padding (desktop) |

## Dark Mode

Implemented via `next-themes` with `class` strategy. All semantic tokens swap automatically in `.dark` class.

## Live Documentation

Visit `/design-system` for interactive component previews.
