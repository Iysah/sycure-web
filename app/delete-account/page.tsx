"use client";

import { AlertTriangle, ArrowUpRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SiteNavbar } from "../components/site-navbar";

const reasons = [
  "I no longer need this account",
  "I'm switching to a different service",
  "Privacy concerns",
  "Too many notifications",
  "I had a bad experience",
  "Other",
] as const;

type FormState = "idle" | "submitting" | "success";

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<{ email?: string; reason?: string }>({});

  function validate() {
    const next: typeof errors = {};
    if (!email.trim()) next.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    if (!reason) next.reason = "Please select a reason.";
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormState("submitting");
    // Simulate async submission
    setTimeout(() => setFormState("success"), 1400);
  }

  if (formState === "success") {
    return (
      <div className="min-h-screen bg-white text-ink">
        <SiteNavbar />
        <div className="flex min-h-[calc(100vh-65px)] items-center justify-center px-6 py-16">
          <div className="w-full max-w-md text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-muted text-primary">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h1 className="text-2xl font-bold text-ink">Request received</h1>
            <p className="mt-3 text-sm leading-7 text-ink-secondary">
              We&apos;ve received your account deletion request for{" "}
              <span className="font-medium text-ink">{email}</span>. You&apos;ll
              receive a confirmation email within 24 hours, and your account
              will be permanently deleted within 30 days.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-pill bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-emphasis"
            >
              Back to home
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-ink">
      <SiteNavbar />

      <main className="mx-auto max-w-lg px-6 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-ink">Delete account</h1>
          <p className="mt-2 text-sm leading-7 text-ink-secondary">
            We&apos;re sorry to see you go. This action is permanent and cannot
            be undone.
          </p>
        </div>

        {/* Warning banner */}
        <div className="mb-8 flex gap-3 rounded-card border border-amber-200 bg-amber-50 p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
          <div className="text-sm leading-6 text-amber-800">
            <p className="font-semibold">This cannot be reversed.</p>
            <p className="mt-0.5">
              Deleting your account will permanently remove all your visitor
              passes, access history, and estate data. Estate members and guards
              assigned to your estates will lose access.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-ink"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
              }}
              placeholder="you@example.com"
              className={`w-full rounded-card border px-4 py-3 text-sm text-ink placeholder:text-ink-muted outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                errors.email
                  ? "border-red-400 bg-red-50"
                  : "border-border bg-surface hover:border-ink-muted"
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Reason */}
          <div>
            <label
              htmlFor="reason"
              className="mb-1.5 block text-sm font-medium text-ink"
            >
              Reason for deletion
            </label>
            <select
              id="reason"
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
                if (errors.reason)
                  setErrors((p) => ({ ...p, reason: undefined }));
              }}
              className={`w-full appearance-none rounded-card border px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                reason ? "text-ink" : "text-ink-muted"
              } ${
                errors.reason
                  ? "border-red-400 bg-red-50"
                  : "border-border bg-surface hover:border-ink-muted"
              }`}
            >
              <option value="" disabled>
                Select a reason
              </option>
              {reasons.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            {errors.reason && (
              <p className="mt-1.5 text-xs text-red-500">{errors.reason}</p>
            )}
          </div>

          {/* Additional notes — shown for all reasons, required only for "Other" */}
          <div>
            <label
              htmlFor="notes"
              className="mb-1.5 flex items-center justify-between text-sm font-medium text-ink"
            >
              Additional notes
              {reason !== "Other" && (
                <span className="text-xs font-normal text-ink-muted">
                  Optional
                </span>
              )}
            </label>
            <textarea
              id="notes"
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={
                reason === "Other"
                  ? "Please describe your reason…"
                  : "Anything else you'd like us to know?"
              }
              className="w-full resize-none rounded-card border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted outline-none transition-colors hover:border-ink-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Submit */}
          <div className="flex items-center gap-1 pt-2">
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="flex-1 rounded-pill bg-red-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {formState === "submitting"
                ? "Submitting…"
                : "Delete my account"}
            </button>
            <Link
              href="/"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-pill border border-border text-ink-secondary transition-colors hover:bg-surface hover:text-ink"
              aria-label="Cancel"
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M10 3 5 8l5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <p className="text-center text-xs text-ink-muted">
            Changed your mind?{" "}
            <Link href="/" className="text-primary underline-offset-2 hover:underline">
              Go back
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
