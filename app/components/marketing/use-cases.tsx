import { Container } from "@/app/components/primitives/container";
import { SectionHeader } from "@/app/components/primitives/section-header";
import { Reveal } from "@/app/components/motion/reveal";
import { USE_CASES } from "@/app/lib/content";

export function UseCases() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="Who it's for"
          heading="Built for communities that have outgrown the notebook"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {USE_CASES.map((useCase, i) => (
            <Reveal
              key={useCase.title}
              delay={i * 60}
              className="rounded-card-lg border border-border bg-surface-elevated p-6"
            >
              <useCase.icon className="h-6 w-6 text-ink" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-ink">{useCase.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-secondary">{useCase.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
