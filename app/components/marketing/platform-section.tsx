import type { LucideIcon } from "lucide-react";
import { Container } from "@/app/components/primitives/container";
import { SectionHeader } from "@/app/components/primitives/section-header";
import { Reveal } from "@/app/components/motion/reveal";
import { PLATFORM } from "@/app/lib/content";
import { cn } from "@/app/lib/cn";

export function PlatformSection() {
  return (
    <section id="platform" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow={PLATFORM.eyebrow}
          heading={PLATFORM.heading}
          body={PLATFORM.body}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <PlatformColumn
            label={PLATFORM.live.label}
            items={PLATFORM.live.items}
            live
          />
          <PlatformColumn
            label={PLATFORM.roadmap.label}
            items={PLATFORM.roadmap.items}
          />
        </div>
      </Container>
    </section>
  );
}

interface PlatformColumnProps {
  label: string;
  items: readonly { title: string; body: string; icon: LucideIcon }[];
  live?: boolean;
}

function PlatformColumn({ label, items, live = false }: PlatformColumnProps) {
  return (
    <div
      className={cn(
        "rounded-card-lg border p-6",
        live ? "border-brand-line bg-brand-soft/50" : "border-border bg-surface",
      )}
    >
      <p
        className={cn(
          "inline-flex items-center gap-2 rounded-pill px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
          live ? "bg-brand text-ink" : "bg-surface-sunken text-ink-muted",
        )}
      >
        {live && <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />}
        {label}
      </p>

      <ul className={cn("mt-5", live ? "space-y-4" : "grid gap-4 sm:grid-cols-2")}>
        {items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 50}>
            <item.icon className="h-5 w-5 text-ink" aria-hidden="true" />
            <h3 className="mt-3 font-display text-base text-ink">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-ink-secondary">{item.body}</p>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
