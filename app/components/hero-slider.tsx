"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import residentsPreview from "../../public/role-previews/residents-preview.png";
import guardPreview from "../../public/role-previews/guard-preview.png";
import estatePreview from "../../public/role-previews/estate-management-preview.png";

const slides = [
  {
    id: "resident",
    label: "Residents",
    eyebrow: "Resident experience",
    lines: ["Pre-authorize", "visitors in", "seconds."],
    description:
      "Residents create estate-specific visitor passes, set entry windows, and receive live updates the moment a guest is verified at the gate.",
    cta: "Explore Resident App",
    ctaHref: "#solutions",
    badge: "+3K passes created",
    stat: { value: "3K+", label: "Visitor passes created daily" },
    image: residentsPreview,
    imageAlt: "Resident mobile app showing visitor pass creation and QR code sharing.",
  },
  {
    id: "verifier",
    label: "Verifiers",
    eyebrow: "Gate operations",
    lines: ["Verify access.", "Protect the", "gate."],
    description:
      "Verifiers scan or enter codes, confirm the correct estate, and instantly approve or reject access — without relying on paper registers.",
    cta: "View Verifier App",
    ctaHref: "#security",
    badge: "Estate-grade checks",
    stat: { value: "99%", label: "Verification accuracy rate" },
    image: guardPreview,
    imageAlt: "Guard verification app showing QR scan result and estate confirmation.",
  },
  {
    id: "owner",
    label: "Estate Owners",
    eyebrow: "Estate management",
    lines: ["One platform.", "Every estate.", "Full control."],
    description:
      "Estate admins assign guards, monitor live approvals across properties, and maintain complete digital audit trails for every entry event.",
    cta: "Open Owner Dashboard",
    ctaHref: "#audit-logs",
    badge: "500+ estates",
    stat: { value: "500+", label: "Estates managed on Sycure" },
    image: estatePreview,
    imageAlt: "Estate management dashboard showing activity logs and guard assignments.",
  },
] as const;

const AUTO_MS = 5000;

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = window.setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      AUTO_MS,
    );
    return () => window.clearInterval(t);
  }, []);

  const slide = slides[active];

  return (
    <section
      id="overview"
      className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28"
    >
      {/* ── Left ──────────────────────────────────────────────────── */}
      <div className="space-y-8">
        {/* Persona tabs */}
        <div className="flex flex-wrap gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`rounded-pill px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                i === active
                  ? "bg-ink text-white"
                  : "bg-surface text-ink-muted hover:bg-border hover:text-ink-secondary"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Heading */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary-emphasis">
            {slide.eyebrow}
          </p>
          <h1 className="text-[clamp(2.75rem,6vw,5rem)] font-black uppercase leading-[1.02] tracking-tight text-ink">
            {slide.lines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
        </div>

        <p className="max-w-lg text-base leading-8 text-ink-secondary">
          {slide.description}
        </p>

        {/* Split-pill CTA */}
        <div className="flex items-center gap-1">
          <Link
            href={slide.ctaHref}
            className="rounded-pill bg-primary px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-primary-emphasis"
          >
            {slide.cta}
          </Link>
          <Link
            href={slide.ctaHref}
            aria-hidden="true"
            tabIndex={-1}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-pill bg-primary text-ink transition-colors hover:bg-primary-emphasis"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <Link
          href="#solutions"
          className="flex w-fit items-center gap-2 text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
        >
          Explore the platform
          <ArrowRight className="h-4 w-4" />
        </Link>

        {/* Progress indicators */}
        <div className="grid grid-cols-3 gap-4 pt-2">
          {slides.map((s, i) => (
            <div key={s.id}>
              <p className="mb-2 text-xs font-medium text-ink-muted">{s.label}</p>
              <div className="h-0.5 overflow-hidden rounded-full bg-border">
                <div
                  className={`h-full rounded-full bg-ink transition-all duration-700 ${
                    i === active ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right ─────────────────────────────────────────────────── */}
      <div className="relative pb-6">
        {/* Floating badge */}
        <div className="absolute right-4 top-4 z-10 flex items-center gap-1">
          <span className="rounded-pill bg-primary px-4 py-2 text-xs font-semibold text-ink shadow-float">
            {slide.badge}
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-pill bg-primary text-ink shadow-float">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>

        {/* Preview image */}
        <div className="overflow-hidden rounded-card-lg shadow-float">
          <div className="relative aspect-4/3">
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="object-cover transition-opacity duration-500"
              priority
            />
          </div>
        </div>

        {/* Floating stat card */}
        <div className="absolute -bottom-2 left-4 right-4 flex items-center justify-between rounded-card bg-white px-5 py-4 shadow-float">
          <div className="flex items-center gap-3">
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border-2 border-white bg-primary-muted" />
              <div className="h-8 w-8 rounded-full border-2 border-white bg-primary" />
              <div className="h-8 w-8 rounded-full border-2 border-white bg-primary-emphasis" />
            </div>
            <div>
              <p className="text-xl font-black text-ink">{slide.stat.value}</p>
              <p className="text-xs text-ink-muted">{slide.stat.label}</p>
            </div>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-pill bg-ink text-white">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </section>
  );
}
