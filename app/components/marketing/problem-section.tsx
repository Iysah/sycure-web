import { Container } from "@/app/components/primitives/container";
import { SectionHeader } from "@/app/components/primitives/section-header";
import { Reveal } from "@/app/components/motion/reveal";
import { PROBLEM } from "@/app/lib/content";

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow={PROBLEM.eyebrow}
          heading={PROBLEM.heading}
          body={PROBLEM.body}
          className="max-w-2xl"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PROBLEM.points.map((point, i) => (
            <Reveal
              key={point.title}
              delay={i * 60}
              className="rounded-card-lg border border-border bg-surface-elevated p-6"
            >
              <point.icon className="h-6 w-6 text-ink" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-ink">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-secondary">{point.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
