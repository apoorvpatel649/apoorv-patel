import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glass?: boolean;
}

export function Card({ className, hover = false, glass = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-border bg-surface p-6",
        glass && "glass",
        hover && "transition-all duration-300 hover:border-border-strong hover:shadow-md hover:-translate-y-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
