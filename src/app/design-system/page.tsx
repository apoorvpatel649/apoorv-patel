import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Design System",
  description: "Design tokens, components, and documentation for the Apoorv Patel portfolio design system.",
};

const colorTokens = [
  { name: "Background", token: "--background", light: "#FAFAFA", dark: "#09090B" },
  { name: "Surface", token: "--surface", light: "#FFFFFF", dark: "#111113" },
  { name: "Text Primary", token: "--text-primary", light: "#09090B", dark: "#FAFAFA" },
  { name: "Text Secondary", token: "--text-secondary", light: "#52525B", dark: "#A1A1AA" },
  { name: "Accent", token: "--accent", light: "#6366F1", dark: "#818CF8" },
  { name: "Border", token: "--border", light: "rgba(9,9,11,0.08)", dark: "rgba(255,255,255,0.08)" },
];

const typographyScale = [
  { name: "Display XL", size: "48-60px", weight: "700", usage: "Hero headlines" },
  { name: "Display LG", size: "36-48px", weight: "700", usage: "Page titles" },
  { name: "Heading", size: "24px", weight: "600", usage: "Section headers" },
  { name: "Body LG", size: "18px", weight: "400", usage: "Lead paragraphs" },
  { name: "Body", size: "16px", weight: "400", usage: "Default text" },
  { name: "Caption", size: "14px", weight: "400", usage: "Labels, metadata" },
  { name: "Small", size: "12px", weight: "500", usage: "Badges, tags" },
];

const spacingScale = [8, 16, 24, 32, 40, 48, 64, 80, 96];

export default function DesignSystemPage() {
  return (
    <div className="section-padding pt-[calc(var(--nav-height)+var(--space-6))]">
      <div className="container-grid max-w-5xl">
        <FadeIn>
          <p className="text-sm font-medium text-accent">Foundation</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-text-primary sm:text-5xl">Design System</h1>
          <p className="mt-4 max-w-2xl text-text-secondary">
            A cohesive system of tokens, components, and patterns ensuring consistency across the portfolio experience.
          </p>
        </FadeIn>

        <section className="mt-16">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-text-primary">Color Tokens</h2>
            <p className="mt-2 text-sm text-text-secondary">Semantic colors with light and dark mode variants.</p>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {colorTokens.map((color, i) => (
              <FadeIn key={color.name} delay={i * 0.05}>
                <Card className="p-4">
                  <div className="flex gap-3">
                    <div className="h-12 w-12 rounded-[var(--radius-md)] border border-border" style={{ background: color.dark }} />
                    <div className="h-12 w-12 rounded-[var(--radius-md)] border border-border" style={{ background: color.light }} />
                  </div>
                  <p className="mt-3 font-medium text-text-primary">{color.name}</p>
                  <p className="text-xs text-text-tertiary font-mono">{color.token}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-text-primary">Typography Scale</h2>
            <p className="mt-2 text-sm text-text-secondary">Inter for body, Syne for display headings.</p>
          </FadeIn>
          <div className="mt-8 space-y-4">
            {typographyScale.map((type, i) => (
              <FadeIn key={type.name} delay={i * 0.05}>
                <div className="flex items-center justify-between rounded-[var(--radius-md)] border border-border bg-surface p-4">
                  <div>
                    <p className="font-medium text-text-primary">{type.name}</p>
                    <p className="text-sm text-text-tertiary">{type.usage}</p>
                  </div>
                  <div className="text-right text-sm text-text-secondary">
                    <p>{type.size}</p>
                    <p>Weight {type.weight}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-text-primary">Spacing System</h2>
            <p className="mt-2 text-sm text-text-secondary">8-point grid for consistent rhythm and alignment.</p>
          </FadeIn>
          <div className="mt-8 flex flex-wrap gap-4">
            {spacingScale.map((space) => (
              <div key={space} className="flex flex-col items-center gap-2">
                <div className="bg-accent rounded-sm" style={{ width: space, height: 24 }} />
                <span className="text-xs text-text-tertiary">{space}px</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-text-primary">Grid System</h2>
            <p className="mt-2 text-sm text-text-secondary">12-column grid, max-width 1200px, responsive breakpoints.</p>
          </FadeIn>
          <Card className="mt-8">
            <div className="grid grid-cols-12 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-16 rounded bg-accent-muted flex items-center justify-center text-xs text-accent">
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-text-secondary">
              <span>sm: 640px</span>
              <span>md: 768px</span>
              <span>lg: 1024px</span>
              <span>xl: 1280px</span>
            </div>
          </Card>
        </section>

        <section className="mt-16">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-text-primary">Components</h2>
          </FadeIn>

          <div className="mt-8 space-y-12">
            <Card>
              <h3 className="font-medium text-text-primary mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </Card>

            <Card>
              <h3 className="font-medium text-text-primary mb-4">Input Fields</h3>
              <div className="max-w-md space-y-4">
                <Input label="Email" placeholder="you@example.com" />
                <Input label="With Error" error="This field is required" placeholder="Required field" />
              </div>
            </Card>

            <Card>
              <h3 className="font-medium text-text-primary mb-4">Cards & Badges</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Default</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
              <Card hover className="max-w-sm">
                <p className="font-medium text-text-primary">Card Component</p>
                <p className="mt-2 text-sm text-text-secondary">Elevated surface with border and hover state.</p>
              </Card>
            </Card>

            <Card>
              <h3 className="font-medium text-text-primary mb-4">Navigation</h3>
              <p className="text-sm text-text-secondary">
                Fixed glassmorphism navbar with responsive mobile menu, keyboard accessible, 72px height.
              </p>
            </Card>

            <Card>
              <h3 className="font-medium text-text-primary mb-4">Dark Mode Tokens</h3>
              <p className="text-sm text-text-secondary">
                All semantic tokens automatically adapt via CSS custom properties. Toggle via the theme switcher in the navbar.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
