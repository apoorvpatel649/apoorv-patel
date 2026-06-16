import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={index * 0.1}>
      <Card hover className="group flex h-full flex-col overflow-hidden p-0">
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-elevated">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {project.featured && (
            <div className="absolute left-4 top-4">
              <Badge variant="accent">Featured</Badge>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-2 flex items-center justify-between">
            <Badge variant="outline">{project.category}</Badge>
            {project.year && <span className="text-xs text-text-tertiary">{project.year}</span>}
          </div>

          <h3 className="font-display text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-sm text-text-secondary line-clamp-2">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
            <Link
              href={project.caseStudyLink}
              className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Case Study
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                Live
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </Card>
    </FadeIn>
  );
}
