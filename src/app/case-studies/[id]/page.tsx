import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CaseStudyTemplate } from "@/components/case-studies/CaseStudyTemplate";
import { getCaseStudies, getCaseStudyById } from "@/lib/content";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getCaseStudies().map((study) => ({ id: study.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const study = getCaseStudyById(id);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: `${study.title} — Case Study`,
    description: study.overview,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const study = getCaseStudyById(id);
  if (!study) notFound();

  return (
    <div className="section-padding pt-[calc(var(--nav-height)+var(--space-6))]">
      <div className="container-grid max-w-4xl">
        <Link
          href="/case-studies"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Case Studies
        </Link>
        <CaseStudyTemplate study={study} />
      </div>
    </div>
  );
}
