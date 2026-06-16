"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const primaryNav = siteConfig.nav.slice(0, 6);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border glass">
      <nav className="container-grid flex h-[var(--nav-height)] items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-text-primary">
          AP<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-[var(--radius-sm)] px-3 py-2 text-sm transition-colors hover:text-accent",
                pathname === item.href ? "text-accent" : "text-text-secondary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact" className="hidden sm:block">
            <Button size="sm">Contact</Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-surface lg:hidden">
          <div className="container-grid flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-[var(--radius-sm)] px-3 py-3 text-sm transition-colors",
                  pathname === item.href ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
