import { KeyRound, LayoutDashboard, ScanLine, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const solutionGroups = [
  {
    title: "Solutions",
    links: ["Estate owners", "Residents", "Gate verifiers"],
  },
  {
    title: "Products",
    links: ["Resident mobile app", "Verifier mobile app", "Owner dashboard"],
  },
  {
    title: "Why Sycure",
    links: ["Audit trails", "Estate-level control", "Faster visitor entry"],
  },
];

const platformHighlights = [
  {
    title: "Resident App",
    text: "Generate time-bound visitor passes and receive entry updates instantly.",
    icon: KeyRound,
  },
  {
    title: "Verifier App",
    text: "Scan or validate codes at the gate with estate-specific checks built in.",
    icon: ScanLine,
  },
  {
    title: "Owner Dashboard",
    text: "Invite guards, monitor estates, and review entry logs from one control center.",
    icon: LayoutDashboard,
  },
  {
    title: "Security Layer",
    text: "Keep every visitor action traceable with digital logs and live notifications.",
    icon: ShieldCheck,
  },
] as const;

export function SiteFooter() {
  return (
    <footer id="contact" className="overflow-hidden bg-ink text-white">
      {/* CTA band */}
      <div className="border-b border-white/10 px-6 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-10 xl:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div className="space-y-6">
            <span className="inline-flex rounded-pill bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Sycure Platform
            </span>
            <div className="space-y-3">
              <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                Secure visitor access for residents, verifiers, and estate
                owners — from one connected system.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-white/60">
                Sycure combines mobile experiences for residents and gate
                verifiers with a management dashboard that gives estate owners
                visibility, control, and accountability across every property.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <Link
                href="#solutions"
                className="rounded-pill bg-primary px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-primary-emphasis"
              >
                Book a Product Walkthrough
              </Link>
              <Link
                href="#overview"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-pill bg-primary text-ink transition-colors hover:bg-primary-emphasis"
                aria-label="Explore platform"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M3 13 13 3M13 3H5M13 3v8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Platform cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {platformHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-card-lg border border-white/10 bg-white/5 p-5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-muted text-primary-emphasis">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Links band */}
      <div className="mx-auto max-w-7xl grid gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <Image
            src="/sycureLogoWhite.svg"
            alt="Sycure"
            width={130}
            height={36}
            className="h-9 w-auto"
          />
          <p className="max-w-xs text-sm leading-7 text-white/50">
            Estate access management built for modern residential communities
            that want faster entries, stronger security, and complete digital
            accountability.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {solutionGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {group.title}
              </p>
              <div className="mt-4 space-y-3 text-sm text-white/60">
                {group.links.map((link) => (
                  <p key={link}>{link}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl flex flex-col gap-3 border-t border-white/10 px-6 py-5 text-xs text-white/40 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <p>Designed for gated estates, secure visitor approvals, and digital gate operations.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/privacy" className="transition-colors hover:text-white/70">
            Privacy Policy
          </Link>
          <p>Copyright {new Date().getFullYear()} Sycure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}