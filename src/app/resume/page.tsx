"use client";

import { Download, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function ResumePage() {
  const handleDownload = async () => {
    try {
      await fetch("/api/resume/download", { method: "POST" });
    } catch {
      // Track silently, still allow download
    }
    window.open("/resume/apoorv-patel.pdf", "_blank");
  };

  return (
    <div className="section-padding pt-[calc(var(--nav-height)+var(--space-6))]">
      <div className="container-grid max-w-5xl">
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-accent">Resume</p>
              <h1 className="mt-2 font-display text-4xl font-bold text-text-primary sm:text-5xl">
                Apoorv Patel
              </h1>
              <p className="mt-2 text-text-secondary">UI/UX Designer & Frontend Developer</p>
            </div>
            <div className="flex gap-3">
              <Button onClick={handleDownload}>
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
              <a href="/resume/apoorv-patel.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">
                  <ExternalLink className="h-4 w-4" />
                  Open in Tab
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card className="mt-8 overflow-hidden p-0">
            <iframe
              src="/resume/apoorv-patel.pdf"
              title="Apoorv Patel Resume"
              className="h-[80vh] w-full border-0"
            />
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
