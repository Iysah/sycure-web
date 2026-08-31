"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";
import { SiteNavbar } from "../components/site-navbar";
import { SiteFooter } from "../components/site-footer";
import { Container } from "../components/primitives/container";
import { cn } from "../lib/cn";

const ROLE_OPTIONS = [
  "Estate manager / facility manager",
  "Estate association / chairman",
  "Estate developer",
  "Security / operations lead",
  "Resident",
  "Other",
] as const;

const SIZE_OPTIONS = [
  "Under 100 homes",
  "100 – 500 homes",
  "500 – 2,000 homes",
  "Over 2,000 homes",
] as const;

type FormState = "idle" | "submitting" | "success";

interface FieldErrors {
  name?: string;
  email?: string;
  estate?: string;
  role?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function DemoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [estate, setEstate] = useState("");
  const [role, setRole] = useState("");
  const [size, setSize] = useState("");
  const [notes, setNotes] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Tell us who to address the walkthrough to.";
    if (!email.trim()) next.email = "A work email is required.";
    else if (!EMAIL_RE.test(email)) next.email = "Enter a valid email address.";
    if (!estate.trim()) next.estate = "Which estate is this for?";
    if (!role) next.role = "Select the closest role.";
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    setErrors({});
    setState("submitting");
    // No backend yet — simulate the request so the flow is complete.
    setTimeout(() => setState("success"), 1200);
  }

  return (
    <>
      <SiteNavbar />
      <main className="flex-1 py-14 lg:py-20">
        <Container className="max-w-2xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>

          {state === "success" ? (
            <div className="mt-8 rounded-card-lg border border-border bg-surface-elevated p-8 text-center sm:p-12">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-approved-soft text-approved">
                <Check className="h-7 w-7" aria-hidden="true" />
              </div>
              <h1 className="mt-5 font-display text-2xl text-ink">Request received</h1>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink-secondary">
                Thanks, {name.split(" ")[0] || "there"}. We&apos;ll reach out at{" "}
                <span className="font-medium text-ink">{email}</span> within one
                business day to schedule your walkthrough for{" "}
                <span className="font-medium text-ink">{estate}</span>.
              </p>
              <Link
                href="/"
                className="press mt-8 inline-flex items-center justify-center rounded-pill bg-ink px-6 py-3 text-sm font-medium text-white hover:bg-ink-surface-2"
              >
                Done
              </Link>
            </div>
          ) : (
            <>
              <div className="mt-8">
                <span className="inline-flex items-center gap-2 rounded-pill border border-border bg-surface-elevated px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-secondary">
                  <ShieldCheck className="h-3.5 w-3.5 text-brand-strong" aria-hidden="true" />
                  Request a demo
                </span>
                <h1 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
                  See Sycure with your estate in mind
                </h1>
                <p className="mt-3 text-base leading-7 text-ink-secondary">
                  A 30-minute walkthrough of the resident app, the verifier, and
                  the estate dashboard. Tell us a little about your estate and
                  we&apos;ll tailor it.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                <Field label="Full name" htmlFor="name" error={errors.name}>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrors((p) => ({ ...p, name: undefined }));
                    }}
                    className={inputClass(!!errors.name)}
                  />
                </Field>

                <Field label="Work email" htmlFor="email" error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors((p) => ({ ...p, email: undefined }));
                    }}
                    className={inputClass(!!errors.email)}
                  />
                </Field>

                <Field label="Estate name" htmlFor="estate" error={errors.estate}>
                  <input
                    id="estate"
                    type="text"
                    value={estate}
                    onChange={(e) => {
                      setEstate(e.target.value);
                      setErrors((p) => ({ ...p, estate: undefined }));
                    }}
                    className={inputClass(!!errors.estate)}
                  />
                </Field>

                <Field label="Your role" htmlFor="role" error={errors.role}>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value);
                      setErrors((p) => ({ ...p, role: undefined }));
                    }}
                    className={cn(inputClass(!!errors.role), role ? "text-ink" : "text-ink-muted")}
                  >
                    <option value="" disabled>
                      Select a role
                    </option>
                    {ROLE_OPTIONS.map((option) => (
                      <option key={option} value={option} className="text-ink">
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Estate size" htmlFor="size" optional>
                  <select
                    id="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className={cn(inputClass(false), size ? "text-ink" : "text-ink-muted")}
                  >
                    <option value="">Prefer not to say</option>
                    {SIZE_OPTIONS.map((option) => (
                      <option key={option} value={option} className="text-ink">
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Anything we should know?" htmlFor="notes" optional>
                  <textarea
                    id="notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className={cn(inputClass(false), "resize-none")}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="press w-full rounded-pill bg-ink px-6 py-3.5 text-sm font-medium text-white hover:bg-ink-surface-2 disabled:opacity-60"
                >
                  {state === "submitting" ? "Sending…" : "Request a demo"}
                </button>
              </form>
            </>
          )}
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}

function inputClass(hasError: boolean): string {
  return cn(
    "w-full rounded-field border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors",
    "placeholder:text-ink-muted focus:border-brand-strong focus:ring-2 focus:ring-brand/20",
    hasError ? "border-rejected bg-rejected-soft" : "border-border hover:border-border-strong",
  );
}

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}

function Field({ label, htmlFor, error, optional, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-center justify-between text-sm font-medium text-ink"
      >
        {label}
        {optional && <span className="text-xs font-normal text-ink-muted">Optional</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-rejected">{error}</p>}
    </div>
  );
}
