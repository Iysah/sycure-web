"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/app/lib/cn";

interface RevealProps {
  children: ReactNode;
  /** Stagger offset in ms, applied as transition-delay. */
  delay?: number;
  as?: ElementType;
  className?: string;
}

/**
 * Scroll-in reveal. The element carries `.reveal` (opacity/translateY in CSS);
 * this adds `.is-visible` once, when it first enters the viewport. Under
 * `prefers-reduced-motion` the CSS neutralises the transform, so this is a
 * no-op there by design.
 */
export function Reveal({ children, delay = 0, as: As = "div", className }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <As
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </As>
  );
}
