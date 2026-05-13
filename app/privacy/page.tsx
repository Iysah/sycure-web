import type { Metadata } from "next";
import { SiteNavbar } from "../components/site-navbar";
import { SiteFooter } from "../components/site-footer";

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
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7fcff_0%,#eef7fb_24%,#f4f7fb_100%)] px-4 py-6 text-zinc-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <SiteNavbar />

        {/* Hero */}
        <section className="rounded-[1.75rem] border border-zinc-300 bg-white px-6 py-10 sm:px-10 sm:py-14">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[#03BDE9]/20 bg-[#03BDE9]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#0287A8]">
              Legal
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              This policy explains what data Sycure collects, why we collect it,
              and how it is used across the resident app, gate verifier app, and
              estate owner dashboard.
            </p>
            <p className="mt-5 text-sm text-zinc-400">
              Effective date: {EFFECTIVE_DATE}
            </p>
          </div>
        </section>

        {/* Contact callout */}
        <div className="rounded-[1.75rem] border border-dashed border-zinc-300 bg-white/60 px-6 py-5 sm:px-8">
          <p className="text-sm leading-6 text-zinc-600">
            <span className="font-semibold text-zinc-800">Questions?</span>{" "}
            Contact our privacy team at{" "}
            <a
              href="mailto:privacy@sycure.app"
              className="font-medium text-[#0287A8] underline underline-offset-2 transition hover:text-[#03BDE9]"
            >
              privacy@sycure.app
            </a>
            . We aim to respond within 5 business days.
          </p>
        </div>

        {/* Policy sections */}
        <div className="grid gap-5">
          {sections.map((section, sectionIndex) => (
            <section
              key={section.title}
              className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 sm:p-8"
            >
              <div className="mb-6 flex items-start gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-sm font-bold text-zinc-400">
                  {sectionIndex + 1}
                </span>
                <h2 className="text-xl font-bold text-zinc-950 sm:text-2xl">
                  {section.title}
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {section.content.map((item) => (
                  <div
                    key={item.heading}
                    className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5"
                  >
                    <p className="mb-2 text-sm font-semibold text-zinc-800">
                      {item.heading}
                    </p>
                    <p className="text-sm leading-6 text-zinc-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="rounded-[1.75rem] border border-zinc-200 bg-white px-6 py-6 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Governing law
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            This Privacy Policy is governed by the laws of the Federal Republic
            of Nigeria. Where applicable, Sycure complies with the Nigeria Data
            Protection Act (NDPA) 2023 and any other relevant regional data
            protection regulations that may apply to your use of the platform.
          </p>
        </div>

        <SiteFooter />
      </div>
    </main>
  );
}