import type { ElementType, ReactNode } from "react";
import { cn } from "@/app/lib/cn";

interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

/** Centered content column with the site's standard gutters and max width. */
export function Container({ as: As = "div", children, className }: ContainerProps) {
  return (
    <As className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </As>
  );
}
