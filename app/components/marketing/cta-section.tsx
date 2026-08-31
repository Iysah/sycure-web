import { Container } from "@/app/components/primitives/container";
import { ButtonLink } from "@/app/components/primitives/button";
import { StoreBadges } from "@/app/components/primitives/store-badges";
import { APP_STORES, CTA } from "@/app/lib/content";

export function CtaSection() {
  return (
    <section className="bg-ink-surface py-20 text-white lg:py-28">
      <Container className="max-w-3xl text-center">
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
          See Sycure running at your gate
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/65">
          A 30-minute walkthrough of the resident app, the verifier, and the
          estate dashboard — with your estate&apos;s setup in mind.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href={CTA.primary.href} variant="primary" size="lg" onDark>
            {CTA.primary.label}
          </ButtonLink>
          <ButtonLink href={CTA.secondary.href} variant="secondary" size="lg" onDark>
            {CTA.secondary.label}
          </ButtonLink>
        </div>

        {/* <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-sm text-white/55">
            Already onboarded? Get the resident and verifier apps.
          </p>
          <StoreBadges
            items={APP_STORES}
            onDark
            height={44}
            className="mt-4 justify-center"
          />
        </div> */}
      </Container>
    </section>
  );
}
