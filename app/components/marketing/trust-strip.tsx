import { Container } from "@/app/components/primitives/container";
import { TRUST_SIGNALS } from "@/app/lib/content";

export function TrustStrip() {
  return (
    <section aria-label="What Sycure enforces" className="border-y border-border bg-surface">
      <Container className="py-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
          Access control, enforced by the system
        </p>
        <ul className="mx-auto mt-5 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-5">
          {TRUST_SIGNALS.map(({ label, icon: Icon }) => (
            <li key={label} className="flex w-32 flex-col items-center gap-2 text-center sm:w-36">
              <Icon className="h-5 w-5 text-brand-strong" aria-hidden="true" />
              <span className="text-xs font-medium leading-4 text-ink-secondary">{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
