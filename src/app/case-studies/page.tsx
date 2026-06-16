import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { getCaseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "In-depth case studies documenting design process, research, and impact.",
};

export default function CaseStudiesPage() {
  const studies = getCaseStudies();

  return (
    <div className="section-padding pt-[calc(var(--nav-height)+var(--space-6))]">
      <div className="container-grid">
        <FadeIn>
          <p className="text-sm font-medium text-accent">Process</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-text-primary sm:text-5xl">Case Studies</h1>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Deep dives into problem framing, research, design decisions, and measurable impact.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-8">
          {studies.map((study, i) => (
            <FadeIn key={study.id} delay={i * 0.1}>
              <Link
                href={`/case-studies/${study.id}`}
                className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface transition-all hover:border-border-strong hover:shadow-md sm:flex-row"
              >
                <div className="relative aspect-[16/9] w-full bg-surface-elevated sm:aspect-auto sm:w-2/5">
                  <Image
                    src={study.coverImage}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-8">
                  <Badge variant="outline" className="w-fit">{study.role}</Badge>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {study.title}
                  </h2>
                  <p className="mt-2 text-text-secondary">{study.subtitle}</p>
                  <p className="mt-4 line-clamp-2 text-sm text-text-tertiary">{study.overview}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Read Case Study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
