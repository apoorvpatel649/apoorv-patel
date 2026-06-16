import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { skillsData } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Skills",
  description: "Design, frontend development, and tool expertise of Apoorv Patel.",
};

export default function SkillsPage() {
  return (
    <div className="section-padding pt-[calc(var(--nav-height)+var(--space-6))]">
      <div className="container-grid max-w-4xl">
        <FadeIn>
          <p className="text-sm font-medium text-accent">Capabilities</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-text-primary sm:text-5xl">Skills</h1>
          <p className="mt-4 text-text-secondary">
            A blend of design craft and frontend engineering, continuously refined through projects and practice.
          </p>
        </FadeIn>

        <div className="mt-16 space-y-16">
          {skillsData.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 0.1}>
              <section>
                <h2 className="font-display text-2xl font-semibold text-text-primary">{group.category}</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="rounded-[var(--radius-lg)] border border-border bg-surface p-5">
                      <div className="flex justify-between">
                        <span className="font-medium text-text-primary">{skill.name}</span>
                        <span className="text-sm text-accent">{skill.level}%</span>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-elevated">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-purple-400"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
