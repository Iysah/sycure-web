import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/components/primitives/container";
import { StoreBadges } from "@/app/components/primitives/store-badges";
import { APP_STORES, FOOTER_GROUPS } from "@/app/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-line bg-ink-surface text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="max-w-sm">
            <Image
              src="/sycureLogoWhite.svg"
              alt="Sycure"
              width={129}
              height={32}
              className="h-8 w-auto"
            />
            <p className="mt-4 text-sm leading-6 text-white/55">
              Estate access control for residential communities — pre-authorized
              visitors, verified entry, and a record of every gate decision.
            </p>
            <StoreBadges items={APP_STORES} onDark height={40} className="mt-6" />
            <p className="mt-6 text-xs text-white/40">
              Sycure Lab Limited · Digital Estate Management
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {FOOTER_GROUPS.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink-line pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Sycure. All rights reserved.</p>
          <Link href="/privacy" className="transition-colors hover:text-white/70">
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
