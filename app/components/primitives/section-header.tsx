import type { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

interface SectionHeaderProps {
  eyebrow: string;
  heading: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  body,
  align = "left",
  onDark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.18em]",
          onDark ? "text-brand" : "text-brand-strong",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "font-display text-3xl leading-[1.1] sm:text-4xl md:text-[2.75rem]",
          onDark ? "text-white" : "text-ink",
        )}
      >
        {heading}
      </h2>
      {body ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-7",
            align === "center" && "mx-auto",
            onDark ? "text-white/65" : "text-ink-secondary",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
