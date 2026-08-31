"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Check } from "lucide-react";
import { Container } from "@/app/components/primitives/container";
import { SectionHeader } from "@/app/components/primitives/section-header";
import { ButtonLink } from "@/app/components/primitives/button";
import { AppScreenshot } from "@/app/components/product/app-screenshot";
import { GateLogMock } from "@/app/components/product/gate-log-mock";
import { ROLES, CTA, type RoleId } from "@/app/lib/content";
import { SCREENS } from "@/app/lib/screens";
import { cn } from "@/app/lib/cn";

const MOCKS: Record<RoleId, ReactNode> = {
  residents: (
    <AppScreenshot
      src={SCREENS.residentAccess}
      alt="Sycure resident app Access Tokens screen: Guest Code for a single visitor, Event Code for multiple attendees, and a list of recently generated codes with pending status"
    />
  ),
  guards: (
    <AppScreenshot
      src={SCREENS.verifierOrganization}
      alt="Sycure verifier app Organization screen: generate a new guest access code, verify a guest by entering their code, and review verification history"
    />
  ),
  managers: <GateLogMock />,
};

export function RoleTabs() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = ROLES.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section id="roles" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="For your team"
          heading="One system, three jobs"
          body="Residents, guards, and estate managers each get an interface built for their part of the same flow."
        />

        <div
          role="tablist"
          aria-label="Sycure by role"
          className="mt-10 flex flex-wrap gap-2"
        >
          {ROLES.map((r, i) => (
            <button
              key={r.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${r.id}`}
              aria-selected={i === active}
              aria-controls={`${baseId}-panel-${r.id}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={onKeyDown}
              className={cn(
                "press rounded-pill px-4 py-2 text-sm font-medium transition-colors",
                i === active
                  ? "bg-ink text-white"
                  : "border border-border text-ink-secondary hover:border-ink hover:text-ink",
              )}
            >
              {r.tabLabel}
            </button>
          ))}
        </div>

        {ROLES.map((r, i) => (
          <div
            key={r.id}
            role="tabpanel"
            id={`${baseId}-panel-${r.id}`}
            aria-labelledby={`${baseId}-tab-${r.id}`}
            hidden={i !== active}
            className="mt-8"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-strong">
                  {r.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
                  {r.headline}
                </h3>
                <p className="mt-3 text-base leading-7 text-ink-secondary">{r.summary}</p>
                <ul className="mt-6 space-y-2.5">
                  {r.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-ink-secondary">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-approved" aria-hidden="true" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <ButtonLink href={CTA.primary.href} variant="primary">
                    {CTA.primary.label}
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded-card-lg border border-border bg-surface p-6">
                {MOCKS[r.id]}
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
