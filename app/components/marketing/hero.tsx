import { ShieldCheck } from "lucide-react";
import { Container } from "@/app/components/primitives/container";
import { ButtonLink } from "@/app/components/primitives/button";
import { VisitorPassMock } from "@/app/components/product/visitor-pass-mock";
import { GuardVerifyMock } from "@/app/components/product/guard-verify-mock";
import { CTA } from "@/app/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pt-14 lg:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
          {/* Copy */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-pill border border-border bg-surface-elevated px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-secondary">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-strong" aria-hidden="true" />
              Estate access control
            </span>

            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-ink sm:text-5xl md:text-[3.5rem]">
              Know who enters your estate, when, and who approved it
            </h1>

            <p className="mt-5 text-lg leading-8 text-ink-secondary">
              Sycure is one system for residents, guards, and estate managers.
              Residents pre-authorize visitors, guards verify them at the gate in
              seconds, and every entry is written to a record you can trust.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href={CTA.primary.href} variant="primary" size="lg">
                {CTA.primary.label}
              </ButtonLink>
              <ButtonLink href={CTA.secondary.href} variant="secondary" size="lg">
                {CTA.secondary.label}
              </ButtonLink>
            </div>

            <p className="mt-5 text-sm text-ink-muted">
              Replaces the paper register, the WhatsApp approval, and the call to
              the gate.
            </p>
          </div>

          {/* Product */}
          <div className="rounded-card-lg border border-border bg-surface p-5 sm:p-7">
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-4">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Resident creates a pass
                </p>
                <VisitorPassMock />
              </div>
              <div className="sm:translate-y-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Guard verifies at the gate
                </p>
                <GuardVerifyMock animate />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
