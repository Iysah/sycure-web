import { ShieldCheck } from "lucide-react";
import { Container } from "@/app/components/primitives/container";
import { ButtonLink } from "@/app/components/primitives/button";
import { StoreBadges } from "@/app/components/primitives/store-badges";
import { AppScreenshot } from "@/app/components/product/app-screenshot";
import { APP_STORES, CTA } from "@/app/lib/content";
import { SCREENS } from "@/app/lib/screens";

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

            {/* <div className="mt-7">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
                Get the resident &amp; verifier apps
              </p>
              <StoreBadges items={APP_STORES} height={40} className="mt-2.5" />
            </div> */}
          </div>

          {/* Product — real app screens */}
          <div className="relative rounded-card-lg border border-border bg-surface p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-4">
              <figure>
                <AppScreenshot
                  src={SCREENS.residentHome}
                  alt="Sycure resident app home screen showing guest codes remaining, a Generate Access Code shortcut, estate bills, and recent activity"
                  priority
                />
                <figcaption className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  Resident app
                </figcaption>
              </figure>
              <figure className="translate-y-8">
                <AppScreenshot
                  src={SCREENS.verifierOrganization}
                  alt="Sycure verifier app showing the Verify Guest panel where a guard enters an access code, plus recent verification activity"
                />
                <figcaption className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  Verifier app
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
