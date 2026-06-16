import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Apoorv Patel for UI/UX and Frontend internship opportunities.",
};

export default function ContactPage() {
  return (
    <div className="section-padding pt-[calc(var(--nav-height)+var(--space-6))]">
      <div className="container-grid">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <FadeIn>
              <p className="text-sm font-medium text-accent">Contact</p>
              <h1 className="mt-2 font-display text-4xl font-bold text-text-primary sm:text-5xl">
                Let&apos;s Connect
              </h1>
              <p className="mt-4 text-text-secondary">
                Whether you&apos;re a recruiter, founder, or collaborator — I&apos;d love to hear from you.
                I typically respond within 24-48 hours.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-10 space-y-6">
                <a href={siteConfig.social.email} className="flex items-center gap-4 text-text-secondary transition-colors hover:text-accent">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-muted text-accent">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>{siteConfig.email}</span>
                </a>
                <div className="flex items-center gap-4 text-text-secondary">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-muted text-accent">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>{siteConfig.phone}</span>
                </div>
                <div className="flex items-center gap-4 text-text-secondary">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-muted text-accent">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>Chandigarh, India</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
