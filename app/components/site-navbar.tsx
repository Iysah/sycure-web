"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Solutions", href: "#solutions" },
  { label: "Security", href: "#security" },
];

export function SiteNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" aria-label="Sycure home">
          <Image
            src="/sycureLogo.svg"
            alt="Sycure"
            width={130}
            height={36}
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="rounded-pill px-4 py-2 text-sm font-medium text-ink-secondary transition-colors hover:bg-surface hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="#contact"
            className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
          >
            Talk to Sales
          </Link>
          <SplitPill label="Request Demo" href="#solutions" />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex items-center gap-2 rounded-pill border border-border px-4 py-2 text-sm font-medium text-ink-secondary transition-colors hover:bg-surface lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          Menu
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-white px-6 pb-6 pt-4 lg:hidden">
          <nav className="space-y-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-card px-4 py-3 text-sm font-medium text-ink-secondary transition-colors hover:bg-surface hover:text-ink"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 space-y-2">
            <Link
              href="#contact"
              className="block rounded-pill border border-border px-4 py-3 text-center text-sm font-medium text-ink-secondary transition-colors hover:bg-surface"
            >
              Talk to Sales
            </Link>
            <SplitPill label="Request Demo" href="#solutions" fullWidth />
          </div>
        </div>
      )}
    </header>
  );
}

function SplitPill({
  label,
  href,
  fullWidth,
}: {
  label: string;
  href: string;
  fullWidth?: boolean;
}) {
  return (
    <div className={`flex items-center gap-1 ${fullWidth ? "w-full" : ""}`}>
      <Link
        href={href}
        className={`rounded-pill bg-primary px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-primary-emphasis ${
          fullWidth ? "flex-1 text-center" : ""
        }`}
      >
        {label}
      </Link>
      <Link
        href={href}
        aria-hidden="true"
        tabIndex={-1}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-pill bg-primary text-ink transition-colors hover:bg-primary-emphasis"
      >
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
