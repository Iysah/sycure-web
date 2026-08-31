import type { AppStore } from "@/app/lib/content";
import { cn } from "@/app/lib/cn";

interface StoreBadgesProps {
  /** Store listings to render — pass `APP_STORES` from `content.ts`. */
  items: readonly AppStore[];
  /** Use each vendor's dark-surface badge treatment. */
  onDark?: boolean;
  /** Rendered badge height in px; width scales to each badge's aspect ratio. */
  height?: number;
  className?: string;
}

/**
 * Official Apple App Store / Google Play badges, rendered at a shared height.
 * Content-agnostic: the caller supplies the store data.
 */
export function StoreBadges({
  items,
  onDark = false,
  height = 48,
  className,
}: StoreBadgesProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {items.map((store) => (
        <li key={store.id} className="leading-none">
          <a
            href={store.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={store.label}
            className="press inline-flex rounded-card focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {/* Official store badge artwork, not a Next-optimizable asset. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={onDark ? store.badge.onDark : store.badge.onLight}
              alt={store.label}
              style={{ height }}
              className="w-auto"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
