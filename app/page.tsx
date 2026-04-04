import Image from "next/image";
import { HeroSlider } from "./components/hero-slider";
import { SiteFooter } from "./components/site-footer";
import { SiteNavbar } from "./components/site-navbar";
import estateManagementPreview from "../public/role-previews/estate-management-preview.png";
import guardPreview from "../public/role-previews/guard-preview.png";
import residentsPreview from "../public/role-previews/residents-preview.png";

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
      "Resident mobile app preview showing visitor pass creation, scheduled access windows, and arrival updates.",
    accent: "from-sky-400/60 via-cyan-100/80 to-white",
    dot: "bg-sky-500",
    surface: "border-sky-100 bg-sky-50/70",
  },
  {
    label: "Guard tools",
    title: "Guard",
    reverse: true,
    description:
      "Guards get a guided verification workspace designed for fast decisions at the gate. Each scan or code entry reveals the right estate, approved window, and resident context so frontline teams can admit verified visitors quickly and stop mismatched or expired requests confidently.",
    bullets: [
      "Scan QR codes or enter visitor credentials manually at the checkpoint.",
      "Confirm estate assignment before approving any gate entry request.",
      "View clear approval, rejection, and expiry states with less guesswork.",
      "Reduce queue times with a focused interface built for rapid screening.",
    ],
    image: guardPreview,
    imageAlt:
      "Guard verification preview showing a scanned visitor code, estate confirmation details, and an approve-or-reject decision state.",
    accent: "from-indigo-400/60 via-indigo-100/80 to-white",
    dot: "bg-indigo-500",
    surface: "border-indigo-100 bg-indigo-50/70",
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
    image: estateManagementPreview,
    imageAlt:
      "Estate management dashboard preview showing guard assignment panels, live alerts, and gate activity analytics across estates.",
    accent: "from-emerald-400/60 via-emerald-100/80 to-white",
    dot: "bg-emerald-500",
    surface: "border-emerald-100 bg-emerald-50/70",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7fcff_0%,#eef7fb_24%,#f4f7fb_100%)] px-4 py-6 text-zinc-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <SiteNavbar />
        <HeroSlider />

        <section
          id="solutions"
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-[1.75rem] border border-zinc-300 bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Executive summary
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Replace paper registers with a secure digital gate flow
                </h2>
              </div>
              <div className="hidden h-14 w-14 rounded-2xl border border-zinc-300 bg-zinc-100 sm:block" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Problem
                </p>
                <ul className="space-y-3 text-sm leading-6 text-zinc-700">
                  <li>Manual registers slow visitor entry and increase error risk.</li>
                  <li>Guards lack a trusted way to confirm visitor approvals.</li>
                  <li>Estate teams need traceable logs across multiple properties.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Solution
                </p>
                <ul className="space-y-3 text-sm leading-6 text-zinc-700">
                  <li>Residents generate QR or alphanumeric visitor codes.</li>
                  <li>Assigned guards scan or verify codes at the correct estate.</li>
                  <li>Every verification updates notifications and audit records.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-zinc-300 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Value proposition
            </p>
            <div className="mt-4 rounded-[1.5rem] border-2 border-zinc-900 bg-zinc-50 p-6">
              <p className="text-2xl font-semibold leading-tight">
                &quot;Generate once. Verify instantly. Stay secure - estate by
                estate.&quot;
              </p>
            </div>

            <div className="mt-5 grid gap-3">
              {[
                "Visitors are validated only against their approved estate.",
                "Digital logs and timestamps create a full audit trail.",
                "Residents and estate teams receive real-time activity visibility.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-dashed border-zinc-400 p-4 text-sm text-zinc-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-zinc-300 bg-white p-6 md:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Role experiences
              </p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-[2rem]">
                Dedicated experiences for residents, guards, and estate teams
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600 md:text-base">
                Each role gets a purpose-built workflow that balances speed,
                visibility, and control while keeping the full verification
                journey aligned across the estate.
              </p>
            </div>

          </div>

          <div className="mt-8 grid gap-5">
            {roleSections.map((role) => (
              <article
                key={role.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-50/80 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)]"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${role.accent}`}
                />
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                      {role.label}
                    </span>
                  </div>

                  <div className="mt-6 grid gap-6 sm:grid-cols-[1.08fr_0.92fr] sm:items-center">
                    <div className={role.reverse ? "sm:order-2" : ""}>
                      <p className="text-sm leading-7 text-zinc-700">
                        {role.description}
                      </p>
                      <ul className="mt-5 space-y-3">
                        {role.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 rounded-2xl border border-dashed border-zinc-300 bg-white/90 px-4 py-3 text-sm leading-6 text-zinc-700 transition-colors duration-300 group-hover:border-zinc-400"
                          >
                            <span
                              className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${role.dot}`}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={`${role.reverse ? "sm:order-1" : ""} rounded-[1.35rem] border p-4 ${role.surface}`}
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300/70" />
                          <span className="h-2.5 w-2.5 rounded-full bg-zinc-300/50" />
                        </div>
                        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                          Preview
                        </span>
                      </div>

                      <div className="relative overflow-hidden rounded-[1.1rem] border border-white/80 bg-white shadow-[0_16px_50px_-30px_rgba(15,23,42,0.5)]">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={role.image}
                            alt={role.imageAlt}
                            fill
                            sizes="(max-width: 639px) 100vw, (max-width: 1279px) 40vw, 26vw"
                            className="object-cover transition duration-500 group-hover:scale-[1.03]"
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

        <section
          id="security"
          className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="rounded-[1.75rem] border border-zinc-300 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Security rules
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Trust boundaries built into the experience
            </h2>

            <div className="mt-6 space-y-4">
              {[
                "Estate-specific authorization prevents cross-estate misuse.",
                "Time-bound codes narrow the entry window for visitors.",
                "Guard access is explicit and controlled by estate management.",
                "Verification outcomes are recorded for later review.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-dashed border-zinc-400 bg-zinc-50 p-4"
                >
                  <div className="mb-2 h-2 w-14 rounded-full bg-zinc-300" />
                  <p className="text-sm leading-6 text-zinc-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="audit-logs"
            className="rounded-[1.75rem] border border-zinc-300 bg-white p-6"
          >
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Logs and alerts
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Audit trail and real-time notification wireframe
                </h2>
              </div>
              <div className="rounded-full border border-zinc-300 px-4 py-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
                Dashboard preview
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-4">
                <p className="mb-4 text-sm font-semibold text-zinc-600">
                  Notification rail
                </p>
                <div className="space-y-3">
                  {["Code created", "Visitor checked in", "Entry rejected"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-dashed border-zinc-400 bg-white p-3"
                      >
                        <div className="mb-2 h-2 w-16 rounded-full bg-zinc-300" />
                        <p className="text-sm text-zinc-700">{item}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-4">
                <p className="mb-4 text-sm font-semibold text-zinc-600">
                  Digital gate log
                </p>
                <div className="overflow-hidden rounded-2xl border border-zinc-300 bg-white">
                  {[
                    "08:10  | Green Oaks | QR verified | Approved",
                    "08:14  | Green Oaks | Manual code | Approved",
                    "08:22  | Palm Estate | Estate mismatch | Rejected",
                    "08:37  | Green Oaks | Access window expired | Rejected",
                  ].map((row, index) => (
                    <div
                      key={row}
                      className={`px-4 py-3 text-sm text-zinc-700 ${
                        index !== 3 ? "border-b border-zinc-200" : ""
                      }`}
                    >
                      {row}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
