import fs from "fs";
import path from "path";
import type { BlogPost, CaseStudy, Project } from "@/types";

const contentDir = path.join(process.cwd(), "content");

function readJsonFiles<T>(dir: string): T[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      return JSON.parse(raw) as T;
    });
}

export function getProjects(): Project[] {
  return readJsonFiles<Project>(path.join(contentDir, "projects")).sort((a, b) =>
    (b.year ?? "").localeCompare(a.year ?? ""),
  );
}

export function getProjectById(id: string): Project | undefined {
  return getProjects().find((project) => project.id === id);
}

export function getCaseStudies(): CaseStudy[] {
  return readJsonFiles<CaseStudy>(path.join(contentDir, "case-studies"));
}

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return getCaseStudies().find((study) => study.id === id);
}

export function getCaseStudyByProjectId(projectId: string): CaseStudy | undefined {
  return getCaseStudies().find((study) => study.projectId === projectId);
}

export function getBlogs(): BlogPost[] {
  return readJsonFiles<BlogPost>(path.join(contentDir, "blogs"))
    .filter((post) => post.published)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return getBlogs().find((post) => post.slug === slug);
}
