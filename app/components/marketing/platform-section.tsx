import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/app/components/primitives/container";
import { SectionHeader } from "@/app/components/primitives/section-header";
import { Reveal } from "@/app/components/motion/reveal";
import { PLATFORM, type PlatformModule } from "@/app/lib/content";
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

        <Reveal className="mt-12 overflow-hidden rounded-card-lg border border-border">
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORM.modules.map((module, i) => (
              <ModuleCell key={module.title} module={module} n={i + 1} />
            ))}
            <CtaCell />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ModuleCell({ module, n }: { module: PlatformModule; n: number }) {
  const live = module.status === "live";
  const Icon = module.icon;

  return (
    <div
      className={cn(
        "flex flex-col p-8 lg:p-10",
        live ? "bg-ink text-white" : "bg-surface-elevated text-ink",
      )}
    >
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-xl border",
            live ? "border-white/20" : "border-border",
          )}
        >
          <Icon
            className={cn("h-6 w-6", live ? "text-white" : "text-ink")}
            aria-hidden="true"
          />
        </span>
        <span
          className={cn(
            "font-mono text-sm tabular-nums",
            live ? "text-white/40" : "text-ink-muted",
          )}
        >
          {String(n).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-6 font-display text-lg">{module.title}</h3>

      <span
        className={cn(
          "mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em]",
          live ? "text-brand" : "text-ink-muted",
        )}
      >
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            live ? "bg-brand" : "bg-ink-muted",
          )}
          aria-hidden="true"
        />
        {PLATFORM.statusLabels[module.status]}
      </span>

      <p
        className={cn(
          "mt-3 text-sm leading-6",
          live ? "text-white/65" : "text-ink-secondary",
        )}
      >
        {module.body}
      </p>
    </div>
  );
}

function CtaCell() {
  return (
    <div className="flex flex-col justify-center bg-surface p-8 lg:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-strong">
        {PLATFORM.cta.eyebrow}
      </p>
      <Link
        href={PLATFORM.cta.href}
        className="press mt-3 inline-flex items-center gap-2 font-display text-lg text-ink transition-colors hover:text-brand-strong"
      >
        {PLATFORM.cta.label}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
