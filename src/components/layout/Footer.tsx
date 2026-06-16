import Link from "next/link";
import { Mail } from "lucide-react";
import { BehanceIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-grid section-padding">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-text-primary">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              UI/UX Designer & Frontend Developer
            </p>
            <p className="mt-1 text-sm text-accent">{siteConfig.availability}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-text-primary">Quick Links</p>
            <ul className="mt-3 space-y-2">
              {siteConfig.nav.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-text-secondary transition-colors hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-text-primary">Connect</p>
            <div className="mt-3 flex gap-3">
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-secondary transition-colors hover:text-accent">
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-secondary transition-colors hover:text-accent">
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance" className="text-text-secondary transition-colors hover:text-accent">
                <BehanceIcon className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.email} aria-label="Email" className="text-text-secondary transition-colors hover:text-accent">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-text-tertiary">
            © {currentYear} {siteConfig.name}. Crafted with intention.
          </p>
          <p className="text-sm text-text-tertiary">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
