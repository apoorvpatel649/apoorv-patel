"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { BehanceIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden section-padding pt-[calc(var(--nav-height)+var(--space-8))]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container-grid relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <Badge variant="accent" className="mb-6 gap-1.5">
                <Sparkles className="h-3 w-3" />
                {siteConfig.availability}
              </Badge>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                {siteConfig.headline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-xl text-lg text-text-secondary">
                {siteConfig.subheading}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/projects">
                  <Button size="lg">
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/resume">
                  <Button variant="secondary" size="lg">
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex items-center gap-4">
                <span className="text-sm text-text-tertiary">Connect</span>
                <div className="flex gap-3">
                  {[
                    { href: siteConfig.social.github, icon: GitHubIcon, label: "GitHub" },
                    { href: siteConfig.social.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
                    { href: siteConfig.social.behance, icon: BehanceIcon, label: "Behance" },
                    { href: siteConfig.social.email, icon: Mail, label: "Email" },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:border-accent hover:text-accent hover:shadow-md"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left">
            <div className="relative mx-auto w-full max-w-md">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative aspect-square overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface-elevated shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-purple-500/20" />
                <div className="flex h-full flex-col items-center justify-center p-8">
                  <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-border bg-surface shadow-md">
                    <Image
                      src="/images/apoorv.jpg"
                      alt="Apoorv Patel"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <p className="mt-6 font-display text-xl font-semibold text-text-primary">Apoorv Patel</p>
                  <p className="mt-1 text-sm text-text-secondary">UI/UX Designer & Frontend Developer</p>
                </div>
              </motion.div>

              <div className="absolute -bottom-4 -left-4 rounded-[var(--radius-md)] glass px-4 py-3 shadow-md">
                <p className="text-xs text-text-tertiary">Based in</p>
                <p className="text-sm font-medium text-text-primary">Chandigarh, India</p>
              </div>

              <div className="absolute -right-4 -top-4 rounded-[var(--radius-md)] glass px-4 py-3 shadow-md">
                <p className="text-xs text-text-tertiary">Focus</p>
                <p className="text-sm font-medium text-accent">Design + Code</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
