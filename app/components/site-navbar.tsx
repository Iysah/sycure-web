"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CTA } from "@/app/lib/content";
import { ButtonLink } from "@/app/components/primitives/button";
import { cn } from "@/app/lib/cn";

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-200",
        scrolled || open
          ? "border-b border-border bg-white/80 backdrop-blur-md backdrop-saturate-150"
          : "border-b border-transparent bg-white/0",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Sycure home" className="shrink-0">
          <Image src="/sycureLogo.svg" alt="Sycure" width={129} height={32} className="h-8 w-auto" priority />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="rounded-pill px-3.5 py-2 text-sm font-medium text-ink-secondary transition-colors hover:bg-surface hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {/* <ButtonLink href={CTA.secondary.href} variant="ghost">
            {CTA.secondary.label}
          </ButtonLink> */}
          <ButtonLink href={CTA.primary.href} variant="primary">
            {CTA.primary.label}
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="press flex h-10 w-10 items-center justify-center rounded-pill border border-border text-ink lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          ref={panelRef}
          className="border-t border-border bg-white px-5 pb-6 pt-3 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-card px-3 py-3 text-[0.95rem] font-medium text-ink-secondary transition-colors hover:bg-surface hover:text-ink"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            {/* <ButtonLink href={CTA.secondary.href} variant="secondary" className="w-full">
              {CTA.secondary.label}
            </ButtonLink> */}
            <ButtonLink href={CTA.primary.href} variant="primary" className="w-full">
              {CTA.primary.label}
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
