import type { CaseStudy } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

interface CaseStudyTemplateProps {
  study: CaseStudy;
}

const sectionOrder = [
  "problem",
  "research",
  "insights",
  "personas",
  "userJourney",
  "competitiveAnalysis",
  "wireframes",
  "designDecisions",
  "finalScreens",
  "prototype",
  "impact",
  "learnings",
] as const;

export function CaseStudyTemplate({ study }: CaseStudyTemplateProps) {
  return (
    <article>
      <header className="mb-12 border-b border-border pb-12">
        <FadeIn>
          <Badge variant="accent" className="mb-4">{study.role}</Badge>
          <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            {study.title}
          </h1>
          <p className="mt-4 text-xl text-text-secondary">{study.subtitle}</p>
          <p className="mt-6 max-w-3xl text-text-secondary">{study.overview}</p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div>
              <p className="text-text-tertiary">Timeline</p>
              <p className="font-medium text-text-primary">{study.timeline}</p>
            </div>
            <div>
              <p className="text-text-tertiary">Tools</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {study.tools.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </header>

      <div className="space-y-16">
        {sectionOrder.map((key, index) => {
          const section = study.sections[key];
          return (
            <FadeIn key={key} delay={index * 0.05}>
              <section id={key} className="scroll-mt-24">
                <h2 className="font-display text-2xl font-semibold text-text-primary">
                  {section.title}
                </h2>
                <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
                  {section.content}
                </p>
                {section.bullets && (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-text-secondary">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </FadeIn>
          );
        })}
      </div>
    </article>
  );
}
