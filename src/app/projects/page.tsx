import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore UI/UX design and frontend development projects by Apoorv Patel.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="section-padding pt-[calc(var(--nav-height)+var(--space-6))]">
      <div className="container-grid">
        <FadeIn>
          <p className="text-sm font-medium text-accent">Work</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-text-primary sm:text-5xl">Projects</h1>
          <p className="mt-4 max-w-2xl text-text-secondary">
            A collection of design and development work showcasing research-driven UX and clean frontend implementation.
          </p>
        </FadeIn>

        <div className="mt-12">
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </div>
  );
}
