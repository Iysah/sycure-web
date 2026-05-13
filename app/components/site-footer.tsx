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
    <footer
      id="contact"
      className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-[0_24px_80px_rgba(15,23,42,0.25)]"
    >
      <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(3,189,233,0.28),_transparent_40%),linear-gradient(180deg,_rgba(15,23,42,0.92),_rgba(2,6,23,1))] px-6 py-8 sm:px-8">
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] mb-8">
          <div className="space-y-5">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#7DE9FF]">
              Sycure Platform
            </span>
            <div className="space-y-3">
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Secure visitor access for residents, verifiers, and estate
                owners from one connected system.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Sycure combines mobile experiences for residents and gate
                verifiers with a management dashboard that gives estate owners
                visibility, control, and accountability across every property.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#solutions"
                className="rounded-full bg-[#03BDE9] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#1fd2fc]"
              >
                Book a Product Walkthrough
              </Link>
              <Link
                href="#overview"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Explore the Platform
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {platformHighlights.map((item) => {
              const Icon = item.icon;

              return (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#03BDE9]/20 text-[#7DE9FF]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.text}
                </p>
              </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div>
              <Image
                src="/sycureLogoWhite.svg"
                alt="Sycure logo"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
              {/* <p className="text-sm text-slate-400 mt-4">
                Generate once. Verify instantly.
              </p> */}
            </div>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-400">
            Estate access management built for modern residential communities
            that want faster entries, stronger security, and complete digital
            accountability.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {solutionGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7DE9FF]">
                {group.title}
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                {group.links.map((link) => (
                  <p key={link}>{link}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 text-sm text-slate-400 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <p>Designed for gated estates, secure visitor approvals, and digital gate operations.</p>
        <div className="flex flex-wrap items-center gap-4 lg:justify-end">
          <Link
            href="/privacy"
            className="transition hover:text-white"
          >
            Privacy Policy
          </Link>
          <p>Copyright {new Date().getFullYear()} Sycure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
