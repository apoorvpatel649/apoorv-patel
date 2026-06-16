"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { Search, X } from "lucide-react";
import type { Project, ProjectCategory } from "@/types";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";

const categories: Array<ProjectCategory | "All"> = [
  "All",
  "UI/UX Design",
  "Frontend Development",
  "Full Stack",
];

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "All">("All");

  const fuse = useMemo(
    () =>
      new Fuse(projects, {
        keys: ["title", "description", "tags", "category"],
        threshold: 0.4,
      }),
    [projects],
  );

  const filtered = useMemo(() => {
    let result = projects;
    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }
    if (search.trim()) {
      result = fuse.search(search).map((r) => r.item);
      if (category !== "All") {
        result = result.filter((p) => p.category === category);
      }
    }
    return result;
  }, [projects, category, search, fuse]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-tertiary" />
          <input
            type="search"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-11 w-full rounded-[var(--radius-md)] border border-border bg-surface pl-10 pr-10 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            aria-label="Search projects"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? "primary" : "secondary"}
              size="sm"
              onClick={() => setCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-12 text-center">
          <p className="text-text-secondary">No projects match your search.</p>
          <Button variant="ghost" className="mt-4" onClick={() => { setSearch(""); setCategory("All"); }}>
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
