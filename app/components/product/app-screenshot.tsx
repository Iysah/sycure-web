import Image, { type StaticImageData } from "next/image";
import { cn } from "@/app/lib/cn";

interface AppScreenshotProps {
  src: StaticImageData;
  /** Describe what the screen shows — real product UI, so be specific. */
  alt: string;
  className?: string;
  priority?: boolean;
  /** Rendered max width of the phone. */
  size?: "sm" | "md";
}

/**
 * A real Sycure app screenshot in a thin device bezel. The screenshots already
 * include their own status bar, so this frame stays minimal.
 */
export function AppScreenshot({
  src,
  alt,
  className,
  priority = false,
  size = "md",
}: AppScreenshotProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full rounded-[2rem] border border-border-strong bg-ink-surface p-1.5 shadow-float",
        size === "sm" ? "max-w-56" : "max-w-72",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        priority={priority}
        sizes="(max-width: 640px) 80vw, 320px"
        className="h-auto w-full rounded-[1.6rem]"
      />
    </div>
  );
}
