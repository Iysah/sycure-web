"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { PhoneFrame } from "./device-frame";
import { StatusBadge } from "@/app/components/primitives/status-badge";
import { cn } from "@/app/lib/cn";

interface GuardVerifyMockProps {
  className?: string;
  /** Play the scan → check → result sequence once when scrolled into view. */
  animate?: boolean;
}

const CHECKS = [
  { key: "estate", label: "Estate", value: "Green Oaks" },
  { key: "window", label: "Time window", value: "10:00 – 14:00" },
  { key: "resident", label: "Authorized by", value: "Unit 14B" },
] as const;

/** Guard view — verifying a scanned code at the gate. */
export function GuardVerifyMock({ className, animate = false }: GuardVerifyMockProps) {
  // step: 0 scanning · 1..3 checks resolving · 4 result.
  // Starts at the resolved state so SSR + reduced-motion show the outcome;
  // the effect rewinds to 0 and plays forward only when it should.
  const [step, setStep] = useState(4);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!animate) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const node = ref.current;
    if (!node) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          setStep(0);
          [400, 900, 1400, 1900].forEach((delay, i) =>
            timers.push(setTimeout(() => setStep(i + 1), delay)),
          );
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [animate]);

  const scanning = step === 0;
  const result = step >= 4;

  return (
    <div ref={ref}>
      <PhoneFrame
        className={className}
        label="Sycure verifier app confirming a visitor code: estate and time window checked, entry approved"
      >
        <div className="space-y-4 px-5 pb-6 pt-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Verify entry
            </p>
            <span className="font-mono text-sm tracking-[0.25em] text-ink">
              7K4P-9QX
            </span>
          </div>

          <div
            className={cn(
              "flex items-center gap-2 rounded-card border px-3 py-2 text-sm transition-colors",
              scanning
                ? "border-brand-line bg-brand-soft text-brand-strong"
                : "border-border bg-surface text-ink-muted",
            )}
          >
            <Loader2
              className={cn("h-4 w-4", scanning && "animate-spin")}
              aria-hidden="true"
            />
            {scanning ? "Scanning code…" : "Code read"}
          </div>

          <ul className="space-y-2">
            {CHECKS.map((check, i) => {
              const done = step >= i + 1;
              return (
                <li
                  key={check.key}
                  className="flex items-center justify-between rounded-card border border-border bg-surface-elevated px-3 py-2.5 text-sm"
                >
                  <span className="text-ink-muted">{check.label}</span>
                  <span
                    className={cn(
                      "flex items-center gap-1.5 font-medium transition-opacity duration-200",
                      done ? "text-ink opacity-100" : "opacity-40",
                    )}
                  >
                    {check.value}
                    <Check
                      className={cn(
                        "h-4 w-4 text-approved transition-transform duration-200",
                        done ? "scale-100" : "scale-0",
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </li>
              );
            })}
          </ul>

          <div
            className={cn(
              "flex items-center justify-between rounded-card border px-4 py-3 transition-all duration-300",
              result
                ? "border-approved/30 bg-approved-soft opacity-100"
                : "border-border bg-surface opacity-60",
            )}
          >
            <span className="text-sm font-semibold text-ink">
              {result ? "Entry approved" : "Checking…"}
            </span>
            {result && <StatusBadge state="approved" size="md" />}
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}
