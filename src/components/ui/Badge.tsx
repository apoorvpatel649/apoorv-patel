import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-surface-elevated text-text-secondary",
        variant === "accent" && "bg-accent-muted text-accent",
        variant === "outline" && "border border-border text-text-secondary",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
