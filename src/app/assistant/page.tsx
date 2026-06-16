import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { AIAssistant } from "@/components/assistant/AIAssistant";

export const metadata: Metadata = {
  title: "AI Assistant",
  description: "Ask questions about Apoorv Patel's background, projects, and skills.",
};

export default function AssistantPage() {
  return (
    <div className="section-padding pt-[calc(var(--nav-height)+var(--space-6))]">
      <div className="container-grid max-w-3xl">
        <FadeIn>
          <p className="text-sm font-medium text-accent">AI Assistant</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-text-primary sm:text-5xl">
            Ask Me Anything
          </h1>
          <p className="mt-4 text-text-secondary">
            Powered by RAG architecture with knowledge from resume, projects, and case studies.
          </p>
        </FadeIn>

        <div className="mt-8">
          <AIAssistant />
        </div>
      </div>
    </div>
  );
}
