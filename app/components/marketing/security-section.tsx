import { Container } from "@/app/components/primitives/container";
import { SectionHeader } from "@/app/components/primitives/section-header";
import { Reveal } from "@/app/components/motion/reveal";
import { StatusBadge } from "@/app/components/primitives/status-badge";
import { SECURITY, type VerificationStateKey } from "@/app/lib/content";

const STATE_MEANING: Record<VerificationStateKey, string> = {
  verified: "Code valid, estate and window matched",
  approved: "Guard admitted the visitor",
  pending: "Awaiting a resident decision",
  expired: "Presented outside its time window",
  rejected: "Guard denied entry",
  mismatch: "Right code, wrong estate",
};

const STATE_ORDER: readonly VerificationStateKey[] = [
  "verified",
  "approved",
  "pending",
  "expired",
  "rejected",
  "mismatch",
];

export function SecuritySection() {
  return (
    <section id="security" className="scroll-mt-24 bg-ink-surface py-20 text-white lg:py-28">
      <Container>
        <SectionHeader
          eyebrow={SECURITY.eyebrow}
          heading={SECURITY.heading}
          body={SECURITY.body}
          onDark
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {SECURITY.boundaries.map((boundary, i) => (
            <Reveal
              key={boundary.title}
              delay={i * 60}
              className="rounded-card-lg bg-ink-surface-2 p-6"
            >
              <boundary.icon className="h-6 w-6 text-brand" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg text-white">{boundary.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{boundary.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-card-lg  bg-ink-surface-2 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            Every check resolves to one clear state
          </p>
          <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {STATE_ORDER.map((key) => (
              <li key={key} className="flex items-center gap-3">
                <StatusBadge state={key} size="sm" />
                <span className="text-sm text-white/60">{STATE_MEANING[key]}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
