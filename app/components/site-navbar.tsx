import { ChevronDown } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Solutions", href: "#solutions" },
  { label: "Security", href: "#security" },
];

const productPills = [
  "Resident mobile app",
  "Verifier mobile app",
  "Estate owner dashboard",
];

const platformItems = [
  { label: "Resident mobile app", href: "#solutions" },
  { label: "Verifier mobile app", href: "#solutions" },
  { label: "Estate owner dashboard", href: "#solutions" },
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
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
                Platforms
                <ChevronDown className="h-4 w-4 text-slate-400 transition group-open:rotate-180" />
              </summary>
              <div className="absolute left-0 top-full z-30 mt-2 min-w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                {platformItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
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
              className="rounded-full bg-[#03BDE9] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#029fc3]"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
