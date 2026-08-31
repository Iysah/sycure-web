import { Check, Clock, CircleSlash, X, ShieldAlert } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/app/lib/cn";
import {
  VERIFICATION_STATES,
  type StateTone,
  type VerificationStateKey,
} from "@/app/lib/content";

/* Literal class strings so Tailwind can see every variant at build time. */
const TONE_CLASSES: Record<StateTone, string> = {
  approved: "bg-approved-soft text-approved",
  pending: "bg-pending-soft text-pending",
  expired: "bg-expired-soft text-expired",
  rejected: "bg-rejected-soft text-rejected",
  mismatch: "bg-mismatch-soft text-mismatch",
};

const TONE_ICON: Record<StateTone, LucideIcon> = {
  approved: Check,
  pending: Clock,
  expired: CircleSlash,
  rejected: X,
  mismatch: ShieldAlert,
};

interface StatusBadgeProps {
  state: VerificationStateKey;
  size?: "sm" | "md";
  withIcon?: boolean;
  className?: string;
}

export function StatusBadge({
  state,
  size = "sm",
  withIcon = true,
  className,
}: StatusBadgeProps) {
  const { label, tone } = VERIFICATION_STATES[state];
  const Icon = TONE_ICON[tone];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill font-semibold",
        size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm",
        TONE_CLASSES[tone],
        className,
      )}
    >
      {withIcon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      {label}
    </span>
  );
}
