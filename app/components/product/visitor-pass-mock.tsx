import { CalendarClock, MapPin } from "lucide-react";
import { PhoneFrame } from "./device-frame";
import { QrGlyph } from "./qr-glyph";
import { StatusBadge } from "@/app/components/primitives/status-badge";

/** Resident view — a single generated visitor pass. */
export function VisitorPassMock({ className }: { className?: string }) {
  return (
    <PhoneFrame className={className} label="Sycure resident app showing a visitor pass for Grace Adeyemi, valid today between 10am and 2pm at Green Oaks estate">
      <div className="space-y-4 px-5 pb-6 pt-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Visitor pass
          </p>
          <StatusBadge state="approved" size="sm" />
        </div>

        <div>
          <p className="font-display text-lg text-ink">Grace Adeyemi</p>
          <p className="text-xs text-ink-muted">Guest of Unit 14B</p>
        </div>

        <div className="rounded-card border border-border bg-surface p-4">
          <div className="mx-auto aspect-square w-32 text-ink">
            <QrGlyph seed={14} />
          </div>
          <p className="mt-3 text-center font-mono text-sm tracking-[0.3em] text-ink">
            7K4P-9QX
          </p>
        </div>

        <dl className="space-y-2.5 text-sm">
          <div className="flex items-center gap-2.5 text-ink-secondary">
            <MapPin className="h-4 w-4 text-brand-strong" aria-hidden="true" />
            <dt className="sr-only">Estate</dt>
            <dd>Green Oaks</dd>
          </div>
          <div className="flex items-center gap-2.5 text-ink-secondary">
            <CalendarClock className="h-4 w-4 text-brand-strong" aria-hidden="true" />
            <dt className="sr-only">Valid window</dt>
            <dd>Today, 10:00 – 14:00</dd>
          </div>
        </dl>
      </div>
    </PhoneFrame>
  );
}
