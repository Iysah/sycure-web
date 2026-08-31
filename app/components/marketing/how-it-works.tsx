import { Container } from "@/app/components/primitives/container";
import { SectionHeader } from "@/app/components/primitives/section-header";
import { Reveal } from "@/app/components/motion/reveal";
import { GateLog } from "@/app/components/product/gate-log-mock";
import { HOW_IT_WORKS } from "@/app/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-surface py-20 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow={HOW_IT_WORKS.eyebrow}
          heading={HOW_IT_WORKS.heading}
          body={HOW_IT_WORKS.body}
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 70} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-brand-strong">{step.n}</span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
                <step.icon className="h-5 w-5 text-ink" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-secondary">{step.body}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Every check lands here
          </p>
          <Reveal>
            <GateLog />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
