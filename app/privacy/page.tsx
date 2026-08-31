import type { Metadata } from "next";
import { SiteNavbar } from "../components/site-navbar";
import { SiteFooter } from "../components/site-footer";
import { Container } from "../components/primitives/container";

export const metadata: Metadata = {
  title: "Privacy Policy | Sycure",
  description:
    "Learn how Sycure collects, uses, and protects your personal data across the resident app, verifier app, and estate owner dashboard.",
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      {
        heading: "Account and profile data",
        body: "When you register as a resident, gate verifier, or estate administrator, we collect your name, email address, phone number, and the estate or unit you are associated with. This information is required to create and manage your Sycure account.",
      },
      {
        heading: "Visitor pass data",
        body: "Residents generate visitor passes that include the visitor's name, intended visit date and time window, and the associated estate. This data is stored so that verifiers can validate passes at the gate and so residents can review their own visitor history.",
      },
      {
        heading: "Verification and gate activity logs",
        body: "Every gate verification event — including the outcome (approved or rejected), timestamp, method (QR scan or manual code entry), and the guard who performed it — is recorded automatically. These logs form the audit trail that estate administrators can review.",
      },
      {
        heading: "Device and usage data",
        body: "We may collect device identifiers, IP addresses, browser or app version, and interaction data to operate the platform reliably, diagnose errors, and improve product quality. This data is not used for advertising.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      {
        heading: "Delivering the service",
        body: "We use your data to authenticate users, generate and validate visitor passes, deliver real-time entry and rejection notifications, and maintain the gate activity log for your estate.",
      },
      {
        heading: "Estate security and access control",
        body: "Visitor pass data, guard assignments, and verification outcomes are processed to enforce estate-specific access rules — ensuring that passes are only accepted at the correct estate and within the approved time window.",
      },
      {
        heading: "Audit and compliance",
        body: "Verification logs are retained so that estate administrators can review entry history, investigate security incidents, and support internal compliance or reporting requirements.",
      },
      {
        heading: "Platform improvement",
        body: "Aggregated, anonymised usage data may be used to understand how residents, verifiers, and administrators interact with the platform, so we can improve reliability and product experience.",
      },
    ],
  },
  {
    title: "How We Share Your Information",
    content: [
      {
        heading: "Within your estate",
        body: "Visitor pass details are shared with gate verifiers assigned to your estate so they can approve or reject entry. Estate administrators can view verification logs and guard activity across all properties they manage.",
      },
      {
        heading: "Service providers",
        body: "We use trusted third-party providers for cloud infrastructure, authentication, and notifications. These providers are contractually bound to process data only on our behalf and in accordance with this policy.",
      },
      {
        heading: "Legal obligations",
        body: "We may disclose your data when required to do so by law, court order, or regulatory authority, or when necessary to protect the safety or rights of Sycure, its users, or the public.",
      },
      {
        heading: "Business transfers",
        body: "If Sycure is involved in a merger, acquisition, or asset sale, your data may be transferred as part of that transaction. We will notify affected users before any such transfer takes place.",
      },
    ],
  },
  {
    title: "Data Retention",
    content: [
      {
        heading: "Active accounts",
        body: "We retain your account and profile data for as long as your account is active and in use on the platform.",
      },
      {
        heading: "Verification logs",
        body: "Gate activity logs are retained for a minimum of 90 days to support audit, incident review, and estate compliance workflows. Estate administrators may request longer retention periods.",
      },
      {
        heading: "Visitor pass records",
        body: "Visitor pass records are retained for 30 days after the pass expires, after which they are deleted or anonymised unless required for an active audit trail.",
      },
      {
        heading: "Deleted accounts",
        body: "When an account is deleted, personal identifiers are removed within 30 days. Aggregated or anonymised log data may be retained for longer as part of estate audit records.",
      },
    ],
  },
  {
    title: "Your Rights",
    content: [
      {
        heading: "Access and correction",
        body: "You may request a copy of the personal data we hold about you and ask us to correct any inaccuracies. You can update most profile information directly from within the Sycure app.",
      },
      {
        heading: "Deletion",
        body: "You may request deletion of your account and associated personal data. Note that verification log entries may be retained in anonymised form to preserve estate audit records.",
      },
      {
        heading: "Data portability",
        body: "You may request an export of your visitor pass history and account data in a machine-readable format.",
      },
      {
        heading: "Objection and restriction",
        body: "Where applicable under your local privacy laws, you may object to or request restriction of certain processing activities. Contact us using the details below to submit a request.",
      },
    ],
  },
  {
    title: "Security",
    content: [
      {
        heading: "Technical measures",
        body: "Data is transmitted over encrypted connections (TLS) and stored with access controls that limit which system components and personnel can read it. Visitor passes use short-lived codes that cannot be reused after expiry.",
      },
      {
        heading: "Access controls",
        body: "Guard and administrator access is scoped to specific estates. A guard assigned to one estate cannot view passes or logs for a different estate. All access is authenticated and logged.",
      },
      {
        heading: "Incident response",
        body: "In the event of a data breach that affects your personal data, we will notify affected users and relevant authorities as required by applicable law.",
      },
    ],
  },
  {
    title: "Cookies and Tracking",
    content: [
      {
        heading: "Essential cookies",
        body: "We use strictly necessary cookies and local storage to maintain your authenticated session and remember your preferences within the app. These cannot be disabled without breaking the service.",
      },
      {
        heading: "Analytics",
        body: "We may use privacy-preserving analytics tools to understand product usage patterns. These tools do not use third-party advertising identifiers and do not track you across other websites.",
      },
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      {
        heading: "Notification of changes",
        body: "We may update this Privacy Policy from time to time. When we make material changes, we will notify you via email or an in-app notice at least 14 days before the changes take effect. Your continued use of Sycure after that date constitutes acceptance of the updated policy.",
      },
    ],
  },
];

const EFFECTIVE_DATE = "13 May 2026";

export default function PrivacyPage() {
  return (
    <>
      <SiteNavbar />
      <main className="flex-1">
        <Container className="max-w-4xl py-14 lg:py-20">
          {/* Hero */}
          <span className="inline-flex rounded-pill border border-brand-line bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-strong">
            Legal
          </span>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-secondary">
            This policy explains what data Sycure collects, why we collect it,
            and how it is used across the resident app, gate verifier app, and
            estate management dashboard.
          </p>
          <p className="mt-5 text-sm text-ink-muted">Effective date: {EFFECTIVE_DATE}</p>

          {/* Contact callout */}
          <div className="mt-8 rounded-card-lg border border-dashed border-border bg-surface px-6 py-5">
            <p className="text-sm leading-6 text-ink-secondary">
              <span className="font-semibold text-ink">Questions?</span> Contact our
              privacy team at{" "}
              <a
                href="mailto:privacy@sycure.app"
                className="font-medium text-brand-strong underline underline-offset-2 hover:text-brand"
              >
                privacy@sycure.app
              </a>
              . We aim to respond within 5 business days.
            </p>
          </div>

          {/* Policy sections */}
          <div className="mt-6 grid gap-5">
            {sections.map((section, sectionIndex) => (
              <section
                key={section.title}
                className="rounded-card-lg border border-border bg-surface-elevated p-6 sm:p-8"
              >
                <div className="mb-6 flex items-start gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-field bg-surface-sunken font-mono text-sm text-ink-muted">
                    {sectionIndex + 1}
                  </span>
                  <h2 className="font-display text-xl text-ink sm:text-2xl">
                    {section.title}
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {section.content.map((item) => (
                    <div
                      key={item.heading}
                      className="rounded-card border border-border-subtle bg-surface p-5"
                    >
                      <p className="mb-2 text-sm font-semibold text-ink">{item.heading}</p>
                      <p className="text-sm leading-6 text-ink-secondary">{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Governing law */}
          <div className="mt-6 rounded-card-lg border border-border bg-surface-elevated px-6 py-6 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Governing law
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-secondary">
              This Privacy Policy is governed by the laws of the Federal Republic
              of Nigeria. Where applicable, Sycure complies with the Nigeria Data
              Protection Act (NDPA) 2023 and any other relevant regional data
              protection regulations that may apply to your use of the platform.
            </p>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}