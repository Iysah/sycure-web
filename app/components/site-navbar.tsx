import Link from "next/link";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Solutions", href: "#solutions" },
  { label: "Security", href: "#security" },
  { label: "Audit Logs", href: "#audit-logs" },
];

const productPills = [
  "Resident mobile app",
  "Verifier mobile app",
  "Estate owner dashboard",
];

export function SiteNavbar() {
  return (
    <header className="sticky top-4 z-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 rounded-[2rem] border border-white/60 bg-white/80 px-4 py-4 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur xl:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#03BDE9] text-lg font-bold text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
              S
            </div>
            <div>
              <Link
                href="/"
                className="text-lg font-semibold tracking-tight text-slate-950"
              >
                Sycure
              </Link>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-2 lg:justify-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <Link
              href="#contact"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Talk to Sales
            </Link>
            <Link
              href="#solutions"
              className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.2)] transition hover:bg-slate-800"
            >
              Request Demo
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#03BDE9]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0287A8]">
              Platform
            </span>
            {productPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            {[
              "Estate-specific verification",
              "Mobile-first check-in flow",
              "Centralized dashboard oversight",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-50 px-4 py-3 text-xs font-medium text-slate-600"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
