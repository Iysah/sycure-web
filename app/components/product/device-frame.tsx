import type { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

interface FrameProps {
  children: ReactNode;
  className?: string;
  label?: string;
}

/** Minimal phone chrome for resident / guard mobile mocks. */
export function PhoneFrame({ children, className, label }: FrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-70 rounded-[2.25rem] border border-border-strong bg-ink-surface p-2.5 shadow-float",
        className,
      )}
      role="img"
      aria-label={label ?? "Sycure app screen"}
    >
      <div className="overflow-hidden rounded-[1.75rem] bg-surface-elevated">
        <div className="flex items-center justify-between px-5 pt-3 text-[0.65rem] font-medium text-ink-muted">
          <span>9:41</span>
          <span className="h-1.5 w-16 rounded-full bg-ink/10" aria-hidden="true" />
        </div>
        <div aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

/** Minimal browser chrome for the estate-manager dashboard mock. */
export function BrowserFrame({ children, className, label }: FrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-card-lg border border-border-strong bg-surface-elevated shadow-float",
        className,
      )}
      role="img"
      aria-label={label ?? "Sycure dashboard"}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" aria-hidden="true" />
        <span className="ml-3 rounded-md bg-surface-elevated px-2 py-0.5 text-[0.7rem] text-ink-muted">
          app.sycureestate.com
        </span>
      </div>
      <div aria-hidden="true">{children}</div>
    </div>
  );
}
