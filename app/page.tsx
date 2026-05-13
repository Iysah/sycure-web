import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, KeyRound, LayoutDashboard, ScanLine, ShieldCheck } from "lucide-react";
import { HeroSlider } from "./components/hero-slider";
import { SiteFooter } from "./components/site-footer";
import { SiteNavbar } from "./components/site-navbar";
import residentsPreview from "../public/role-previews/residents-preview.png";
import guardPreview from "../public/role-previews/guard-preview.png";
import estatePreview from "../public/role-previews/estate-management-preview.png";

const services = [
  {
    title: "Resident App",
    description:
      "Residents generate time-bound visitor passes and share QR or alphanumeric codes directly from their phones — no paper registers, no gate-side calls.",
    icon: KeyRound,
  },
  {
    title: "Guard Verification",
    description:
      "Guards scan or enter codes at the checkpoint. Every scan confirms the visitor's estate, approved time window, and resident details instantly.",
    icon: ScanLine,
  },
  {
    title: "Estate Dashboard",
    description:
      "Estate admins invite guard teams, assign them to specific properties, and monitor cross-estate activity and alerts from a single control center.",
    icon: LayoutDashboard,
  },
  {
    title: "Audit & Security",
    description:
      "Every verification event is logged with timestamps and estate details. Real-time alerts notify residents of arrivals, rejections, and unusual activity.",
    icon: ShieldCheck,
  },
] as const;

const whyTags = [
  "Estate-grade security",
  "24/7 live notifications",
  "Digital audit trail",
  "Multi-estate support",
] as const;

const roleSections = [
  {
    label: "Resident app",
    title: "Residents",
    reverse: false,
    description:
      "Residents create and manage secure visitor passes without relying on paper logs or gate-side phone calls. The experience gives each household a simple way to prepare guest access, share verification details, and stay informed when a visitor arrives or is denied entry.",
    bullets: [
      "Create QR or code-based visitor passes in seconds.",
      "Set visit dates, time windows, and access instructions per guest.",
      "Receive live check-in and rejection notifications for each visit.",
      "Keep a searchable history of recent visitors for added visibility.",
    ],
    image: residentsPreview,
    imageAlt:
      "Resident mobile app showing visitor pass creation, access code generation, and activity history.",
    frameClass: "aspect-3/4",
    imageClass: "object-contain p-4 transition duration-500 group-hover:scale-[1.02]",
  },
  {
    label: "Guard tools",
    title: "Guard",
    reverse: true,
    description:
      "Guards get a guided verification workspace designed for fast decisions at the gate. Each scan or code entry reveals the right estate, approved window, and resident context — so frontline teams can admit verified visitors quickly and stop mismatched or expired requests confidently.",
    bullets: [
      "Scan QR codes or enter visitor credentials manually at the checkpoint.",
      "Confirm estate assignment before approving any gate entry request.",
      "View clear approval, rejection, and expiry states with less guesswork.",
      "Reduce queue times with a focused interface built for rapid screening.",
    ],
    image: guardPreview,
    imageAlt:
      "Guard verification app showing a scanned visitor code, estate confirmation, and approve/reject decision state.",
    frameClass: "aspect-4/3",
    imageClass: "object-cover transition duration-500 group-hover:scale-[1.03]",
  },
  {
    label: "Admin dashboard",
    title: "Estate Management",
    reverse: false,
    description:
      "Estate management teams coordinate the people, properties, and policies behind every verification flow from one dashboard. They can onboard guards, monitor live activity across estates, and review detailed logs that support compliance, reporting, and security escalation workflows.",
    bullets: [
      "Assign guards to the correct estates and keep permissions tightly scoped.",
      "Monitor live gate activity, alerts, and unusual verification events.",
      "Review complete audit trails for approvals, rejections, and timestamps.",
      "Track operational trends across multiple estates from a single view.",
    ],
    image: estatePreview,
    imageAlt:
      "Estate management dashboard showing resident and guard summaries, activity logs, and admin controls.",
    frameClass: "aspect-16/10",
    imageClass: "object-contain p-3 transition duration-500 group-hover:scale-[1.02]",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <SiteNavbar />
      <HeroSlider />

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <section id="solutions" className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <h2 className="mb-12 text-center text-4xl font-bold text-ink lg:text-5xl">
            Estate Access Management
          </h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-card-lg bg-surface-elevated p-8">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-ink">{s.title}</h3>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-muted text-primary-emphasis">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="text-base leading-7 text-ink-secondary">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Sycure ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="overflow-hidden rounded-card-lg bg-ink px-6 py-10 lg:px-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* White content card */}
            <div className="rounded-card-lg bg-white p-6 shadow-float md:p-8">
              <span className="rounded-pill border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                Why Sycure
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-ink md:text-4xl">
                Discover why we&apos;re the trusted choice for estate security.
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink-secondary">
                &ldquo;Generate once. Verify instantly. Stay secure — estate by
                estate.&rdquo;
              </p>
              <div className="mt-7 flex items-center gap-1">
                <Link
                  href="#solutions"
                  className="rounded-pill bg-primary px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-primary-emphasis"
                >
                  Request Demo
                </Link>
                <Link
                  href="#solutions"
                  aria-hidden="true"
                  tabIndex={-1}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-primary text-ink transition-colors hover:bg-primary-emphasis"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Feature pill tags */}
            <div className="flex flex-col items-start gap-3">
              {whyTags.map((tag) => (
                <div key={tag} className="flex items-center gap-1">
                  <span className="rounded-pill border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white">
                    {tag}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-pill border border-white/20 bg-white/10 text-white">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Role sections ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <h2 className="mb-3 text-4xl font-bold text-ink lg:text-5xl">
          Dedicated experiences for every role
        </h2>
        <p className="mb-12 max-w-2xl text-base leading-7 text-ink-secondary">
          Each stakeholder gets a purpose-built workflow balancing speed,
          visibility, and control — while keeping the full verification journey
          aligned across the estate.
        </p>

        <div className="space-y-5">
          {roleSections.map((role) => (
            <article
              key={role.title}
              className="group overflow-hidden rounded-card-lg border border-border bg-surface-elevated transition duration-300 hover:-translate-y-0.5 hover:shadow-float"
            >
              <div className="p-6 md:p-8">
                <span className="rounded-pill border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  {role.label}
                </span>

                <div
                  className={`mt-6 grid gap-8 sm:grid-cols-2 sm:items-center`}
                >
                  {/* Text column */}
                  <div className={role.reverse ? "sm:order-2" : ""}>
                    <h3 className="mb-4 text-2xl font-bold text-ink">
                      {role.title}
                    </h3>
                    <p className="mb-6 text-sm leading-7 text-ink-secondary">
                      {role.description}
                    </p>
                    <ul className="space-y-3">
                      {role.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 rounded-card border border-dashed border-border bg-surface px-4 py-3 text-sm leading-6 text-ink-secondary"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-emphasis" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Preview column */}
                  <div
                    className={`${role.reverse ? "sm:order-1" : ""} rounded-card-lg border border-border bg-surface p-4`}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-border" />
                        <span className="h-2.5 w-2.5 rounded-full bg-border/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-border/50" />
                      </div>
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                        Preview
                      </span>
                    </div>
                    <div className="overflow-hidden rounded-card border border-white/80 bg-white shadow-card">
                      <div className={`relative ${role.frameClass}`}>
                        <Image
                          src={role.image}
                          alt={role.imageAlt}
                          fill
                          sizes="(max-width: 639px) 100vw, 40vw"
                          className={role.imageClass}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Security ──────────────────────────────────────────────────────── */}
      <section id="security" className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Rules */}
            <div className="rounded-card-lg bg-surface-elevated p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
                Security rules
              </p>
              <h2 className="mt-2 text-2xl font-bold text-ink">
                Trust boundaries built into the experience
              </h2>
              <div className="mt-8 space-y-3">
                {[
                  "Estate-specific authorization prevents cross-estate misuse.",
                  "Time-bound codes narrow the entry window for visitors.",
                  "Guard access is explicit and controlled by estate management.",
                  "Verification outcomes are recorded for later review.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-card border border-dashed border-border p-4"
                  >
                    <div className="mb-2 h-1.5 w-10 rounded-full bg-primary-muted" />
                    <p className="text-sm leading-6 text-ink-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit logs */}
            <div id="audit-logs" className="rounded-card-lg bg-surface-elevated p-8">
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
                    Logs and alerts
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-ink">
                    Audit trail and real-time notification wireframe
                  </h2>
                </div>
                <span className="rounded-pill border border-border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-ink-muted">
                  Dashboard preview
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
                <div className="rounded-card bg-surface p-4">
                  <p className="mb-4 text-xs font-semibold text-ink-secondary">
                    Notification rail
                  </p>
                  <div className="space-y-2">
                    {["Code created", "Visitor checked in", "Entry rejected"].map(
                      (item) => (
                        <div
                          key={item}
                          className="rounded-card border border-dashed border-border bg-white p-3"
                        >
                          <div className="mb-2 h-1.5 w-12 rounded-full bg-border" />
                          <p className="text-sm text-ink-secondary">{item}</p>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="rounded-card bg-surface p-4">
                  <p className="mb-4 text-xs font-semibold text-ink-secondary">
                    Digital gate log
                  </p>
                  <div className="overflow-hidden rounded-card border border-border bg-white">
                    {[
                      "08:10 | Green Oaks | QR verified | Approved",
                      "08:14 | Green Oaks | Manual code | Approved",
                      "08:22 | Palm Estate | Estate mismatch | Rejected",
                      "08:37 | Green Oaks | Window expired | Rejected",
                    ].map((row, i) => (
                      <div
                        key={row}
                        className={`px-4 py-3 text-xs text-ink-secondary ${
                          i !== 3 ? "border-b border-border" : ""
                        }`}
                      >
                        {row}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}