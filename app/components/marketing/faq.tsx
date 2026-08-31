import { Plus } from "lucide-react";
import { Container } from "@/app/components/primitives/container";
import { SectionHeader } from "@/app/components/primitives/section-header";
import { FAQS } from "@/app/lib/content";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-surface py-20 lg:py-28">
      <Container className="max-w-3xl">
        <SectionHeader eyebrow="FAQ" heading="Questions estates ask first" />

        <ul className="mt-10 border-y border-border">
          {FAQS.map((faq) => (
            <li key={faq.q} className="border-b border-border last:border-b-0">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-base text-ink">{faq.q}</span>
                  <Plus
                    className="h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-4 pr-8 text-sm leading-6 text-ink-secondary">{faq.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
