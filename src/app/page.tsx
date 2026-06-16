import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { getProjects } from "@/lib/content";
import { skillsData } from "@/lib/site-config";

export default function HomePage() {
  const featuredProjects = getProjects().filter((p) => p.featured).slice(0, 2);

  return (
    <>
      <HeroSection />

      <section className="section-padding border-t border-border">
        <div className="container-grid">
          <FadeIn>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="text-sm font-medium text-accent">Selected Work</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-text-primary sm:text-4xl">
                  Featured Projects
                </h2>
              </div>
              <Link href="/projects" className="hidden sm:block">
                <Button variant="ghost">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-grid">
          <FadeIn>
            <p className="text-sm font-medium text-accent">Expertise</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-text-primary sm:text-4xl">
              Skills at a Glance
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {skillsData.map((group, i) => (
              <FadeIn key={group.category} delay={i * 0.1}>
                <div className="rounded-[var(--radius-lg)] border border-border bg-background p-6">
                  <h3 className="font-display text-lg font-semibold text-text-primary">{group.category}</h3>
                  <ul className="mt-4 space-y-3">
                    {group.skills.slice(0, 4).map((skill) => (
                      <li key={skill.name}>
                        <div className="flex justify-between text-sm">
                          <span className="text-text-secondary">{skill.name}</span>
                          <span className="text-text-tertiary">{skill.level}%</span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-surface-elevated">
                          <div
                            className="h-full rounded-full bg-accent transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-12 text-center">
              <Link href="/skills">
                <Button variant="outline">Explore All Skills</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-grid text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
              Let&apos;s build something meaningful
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-secondary">
              Open to UI/UX and Frontend internship opportunities. Let&apos;s connect and create experiences users love.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">Get in Touch</Button>
              </Link>
              <Link href="/assistant">
                <Button variant="secondary" size="lg">Ask AI Assistant</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
