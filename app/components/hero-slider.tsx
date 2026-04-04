"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: "resident",
    eyebrow: "Resident experience",
    label: "Residents",
    title: "Pre-authorize visitors in seconds from the resident mobile app.",
    description:
      "Residents create estate-specific visitor passes, set entry windows, and receive live updates the moment a guest is verified at the gate.",
    primaryCta: "Explore Resident App",
    secondaryCta: "See Verification Flow",
    metrics: [
      "Create visitor passes",
      "Share QR or access code",
      "Receive check-in alerts",
    ],
    panelTitle: "Resident app",
    panelTag: "Mobile",
    timeline: [
      "Create visitor pass",
      "Set time and estate access",
      "Guest arrives and gets verified",
    ],
  },
  {
    id: "verifier",
    eyebrow: "Gate operations",
    label: "Verifiers",
    title: "Verify visitors faster with a dedicated mobile experience for guards.",
    description:
      "Verifiers scan or enter codes, confirm the correct estate, and instantly approve or reject access without relying on paper registers.",
    primaryCta: "View Verifier App",
    secondaryCta: "Review Security Rules",
    metrics: [
      "Scan QR at the gate",
      "Confirm estate match",
      "Log approval or rejection",
    ],
    panelTitle: "Verifier app",
    panelTag: "Gate",
    timeline: [
      "Scan visitor code",
      "Validate estate and time window",
      "Record gate decision instantly",
    ],
  },
  {
    id: "owner",
    eyebrow: "Estate management",
    label: "Estate owners",
    title: "Oversee estates, guards, and access logs from one control dashboard.",
    description:
      "Estate admins and owners assign verifiers, monitor approvals across properties, and keep complete digital audit trails for every entry event.",
    primaryCta: "Open Owner Dashboard",
    secondaryCta: "Talk to Sales",
    metrics: [
      "Manage estates centrally",
      "Invite and assign guards",
      "Audit every visitor record",
    ],
    panelTitle: "Owner dashboard",
    panelTag: "Admin",
    timeline: [
      "Invite gate teams",
      "Monitor cross-estate activity",
      "Review audit logs and alerts",
    ],
  },
];

const AUTO_SLIDE_MS = 5000;

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTO_SLIDE_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="overview"
      className="overflow-hidden rounded-[2rem] border border-[#03BDE9]/20 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.08)]"
    >
      <div className="border-b border-slate-200/70 px-6 py-5 sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          </div>

          <div className="flex flex-wrap gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  index === activeIndex
                    ? "bg-slate-950 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
                aria-pressed={index === activeIndex}
                aria-label={`Show ${slide.label} slide`}
              >
                {slide.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <article
            key={slide.id}
            className="min-w-full px-6 py-8 sm:px-8 sm:py-10"
            aria-hidden={index !== activeIndex}
          >
            <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0287A8]">
                    {slide.eyebrow}
                  </p>
                  <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                    {slide.title}
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                    {slide.description}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {slide.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
                    >
                      <div className="mb-3 h-2 w-14 rounded-full bg-[#03BDE9]/30" />
                      <p className="text-sm font-medium text-slate-700">
                        {metric}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={
                      slide.id === "resident"
                        ? "#solutions"
                        : slide.id === "verifier"
                          ? "#security"
                          : "#audit-logs"
                    }
                    className="rounded-full bg-[#03BDE9] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#1fd2fc]"
                  >
                    {slide.primaryCta}
                  </Link>
                  <Link
                    href={slide.id === "owner" ? "#contact" : "#solutions"}
                    className="rounded-full border border-[#03BDE9]/25 bg-white px-5 py-3 text-sm font-medium text-[#0287A8] transition hover:border-[#03BDE9]/40 hover:bg-[#03BDE9]/5"
                  >
                    {slide.secondaryCta}
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 rounded-[1.75rem] border border-[#03BDE9]/20 bg-[linear-gradient(180deg,#f8fdff_0%,#eefafe_100%)] p-4 sm:p-5">
                <div className="rounded-[1.5rem] border border-white bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {slide.panelTitle}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        Sycure persona preview
                      </p>
                    </div>
                    <span className="rounded-full border border-[#03BDE9]/20 bg-[#03BDE9]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0287A8]">
                      {slide.panelTag}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.25rem] bg-slate-950 p-4 text-white">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm font-semibold">
                          {slide.label}
                        </span>
                        <span className="rounded-full bg-white/10 px-2 py-1 text-xs">
                          Active
                        </span>
                      </div>
                      <div className="grid gap-2">
                        <div className="h-2 w-24 rounded-full bg-white/20" />
                        <div className="h-2 w-40 rounded-full bg-white/15" />
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-[0.95fr_1.05fr]">
                      <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Live flow
                        </p>
                        <div className="mt-4 space-y-3">
                          {slide.timeline.map((item, itemIndex) => (
                            <div
                              key={item}
                              className="flex items-start gap-3 rounded-2xl bg-white p-3"
                            >
                              <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#03BDE9]/15 text-xs font-semibold text-[#0287A8]">
                                {itemIndex + 1}
                              </div>
                              <p className="text-sm leading-6 text-slate-700">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[1.25rem] border border-slate-200 bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Snapshot
                        </p>
                        <div className="mt-4 space-y-3">
                          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
                            <div className="h-24 rounded-2xl bg-[linear-gradient(135deg,#03BDE9_0%,#87e8fb_100%)]" />
                          </div>
                          <div className="rounded-2xl bg-slate-50 p-4">
                            <div className="mb-3 h-2 w-20 rounded-full bg-slate-200" />
                            <div className="space-y-2">
                              <div className="h-3 rounded-full bg-slate-200" />
                              <div className="h-3 w-5/6 rounded-full bg-slate-200" />
                              <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {slides.map((item, itemIndex) => (
                    <div
                      key={item.id}
                      className={`rounded-2xl border p-4 transition ${
                        itemIndex === activeIndex
                          ? "border-[#03BDE9]/30 bg-[#03BDE9]/8"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Persona
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="border-t border-slate-200/70 px-6 py-4 sm:px-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {slides.map((slide, index) => (
            <div key={slide.id} className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                <span>{slide.label}</span>
                <span>{index === activeIndex ? "Live" : "Queued"}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full bg-[#03BDE9] transition-all duration-700 ${
                    index === activeIndex ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
