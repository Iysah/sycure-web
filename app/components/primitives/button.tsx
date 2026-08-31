import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/app/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Adjust styling for placement on a dark surface. */
  onDark?: boolean;
  /** Show a trailing arrow (used for the "ghost" text links). */
  withArrow?: boolean;
  className?: string;
}

const BASE =
  "press inline-flex items-center justify-center gap-2 rounded-pill font-medium " +
  "focus-visible:outline-2 focus-visible:outline-offset-2";

const SIZES: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-[0.95rem]",
};

function variantClasses(variant: ButtonVariant, onDark: boolean): string {
  switch (variant) {
    case "primary":
      return onDark
        ? "bg-white text-ink hover:bg-white/90"
        : "bg-ink text-white hover:bg-ink-surface-2";
    case "secondary":
      return onDark
        ? "border border-white/25 text-white hover:bg-white/10"
        : "border border-border-strong bg-surface-elevated text-ink hover:border-ink hover:bg-surface";
    case "ghost":
      return onDark
        ? "text-white/80 hover:text-white"
        : "text-ink-secondary hover:text-ink";
  }
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  onDark = false,
  withArrow = false,
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        BASE,
        SIZES[size],
        variantClasses(variant, onDark),
        variant === "ghost" && "px-0 py-1",
        className,
      )}
    >
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Link>
  );
}
