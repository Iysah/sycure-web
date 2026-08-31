import { Container } from "@/app/components/primitives/container";
import { SectionHeader } from "@/app/components/primitives/section-header";
import { ButtonLink } from "@/app/components/primitives/button";
import { TESTIMONIALS, CTA } from "@/app/lib/content";

/**
 * Renders real testimonials when `TESTIMONIALS` has entries; until then it
 * shows an honest early-access invitation instead of fabricated quotes.
 */
export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        {TESTIMONIALS.length > 0 ? (
          <>
            <SectionHeader eyebrow="Estates on Sycure" heading="What estate teams say" />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={`${t.name}-${t.estate}`}
                  className="rounded-card-lg border border-border bg-surface-elevated p-6"
                >
                  <blockquote className="text-sm leading-6 text-ink-secondary">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-sm">
                    <span className="font-semibold text-ink">{t.name}</span>
                    <span className="block text-ink-muted">
                      {t.role}, {t.estate}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-card-lg border border-border bg-surface p-8 text-center sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-strong">
              Early access
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-2xl leading-tight text-ink sm:text-3xl">
              Be one of the first estates to run its gate on Sycure
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-ink-secondary">
              We&apos;re onboarding estates now. Book a walkthrough and we&apos;ll
              set up your first gate, guards, and residents with you.
            </p>
            <div className="mt-7 flex justify-center">
              <ButtonLink href={CTA.primary.href} variant="primary" size="lg">
                {CTA.primary.label}
              </ButtonLink>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
