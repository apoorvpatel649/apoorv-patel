import type { Metadata } from "next";
import { GraduationCap, Lightbulb, Code, Palette } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Apoorv Patel — UI/UX Designer and Frontend Developer passionate about user-centered design.",
};

const storySections = [
  {
    icon: Palette,
    title: "Interest in Design",
    content:
      "My journey into design began with curiosity about why some digital products feel effortless while others frustrate. I started exploring Figma, studying interfaces I admired, and deconstructing what made them work. Design became my language for empathy—translating user needs into visual solutions.",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving Mindset",
    content:
      "Every project starts with a question: What problem are we solving, and for whom? I approach challenges systematically—research first, assumptions second. Whether it's optimizing a checkout flow or building a responsive navigation, I break complex problems into testable hypotheses.",
  },
  {
    icon: Code,
    title: "Design Thinking Process",
    content:
      "I follow a human-centered process: empathize through research, define clear problem statements, ideate multiple solutions, prototype rapidly, and test with real users. This iterative loop ensures designs are validated, not just visually polished.",
  },
  {
    icon: Code,
    title: "Frontend Development Journey",
    content:
      "Learning to code transformed how I design. Understanding HTML semantics, CSS layout systems, and JavaScript interactivity helps me create designs that are not just beautiful but buildable. Projects like Campus Connect bridged my design thinking with hands-on development.",
  },
];

export default function AboutPage() {
  return (
    <div className="section-padding pt-[calc(var(--nav-height)+var(--space-6))]">
      <div className="container-grid max-w-4xl">
        <FadeIn>
          <p className="text-sm font-medium text-accent">About</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-text-primary sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-xl text-text-secondary">
            UI/UX Designer and Frontend Developer
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex items-start gap-4 rounded-[var(--radius-lg)] border border-border bg-surface p-6">
            <GraduationCap className="h-6 w-6 shrink-0 text-accent" />
            <div>
              <p className="font-medium text-text-primary">{siteConfig.education.degree}</p>
              <p className="text-text-secondary">{siteConfig.education.university}</p>
              <p className="text-sm text-text-tertiary">{siteConfig.education.period} · {siteConfig.education.location}</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-text-primary">My Story</h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              I&apos;m an aspiring UI/UX Designer and Frontend Developer passionate about creating intuitive,
              user-centered digital experiences. Currently pursuing my Bachelor of Engineering in Computer Science
              at Chandigarh University, I blend design thinking with technical execution to build products that
              solve real problems.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              From designing mobile commerce experiences in ShopBazaar to building and deploying Campus Connect,
              I&apos;ve learned that great products emerge at the intersection of research, design, and code.
              I actively participate in hackathons, mentor peers, and continuously push my skills forward.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 space-y-12">
          {storySections.map((section, i) => (
            <FadeIn key={section.title} delay={i * 0.1}>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-accent-muted text-accent">
                  <section.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-text-primary">{section.title}</h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">{section.content}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
