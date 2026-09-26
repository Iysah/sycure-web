import type { Metadata } from "next";
import { SiteNavbar } from "../components/site-navbar";
import { SiteFooter } from "../components/site-footer";
import { Container } from "../components/primitives/container";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the terms that govern access to and use of Sycure's resident app, verifier app, and estate management dashboard.",
};

const sections = [
  {
    title: "Accepting These Terms",
    content: [
      {
        heading: "Your agreement",
        body: "By creating an account, accessing, or using Sycure, you agree to these Terms and Conditions and our Privacy Policy. If you use Sycure on behalf of an estate, organisation, or other entity, you confirm that you have authority to bind that entity to these terms.",
      },
      {
        heading: "Eligibility",
        body: "You must be at least 18 years old and legally capable of entering into a binding agreement to use Sycure. An estate administrator may invite residents and verifiers, but every user remains responsible for complying with these terms.",
      },
    ],
  },
  {
    title: "Accounts and Access",
    content: [
      {
        heading: "Accurate information",
        body: "You must provide current, complete, and accurate information when creating or updating an account. You may not impersonate another person or register an account using information you are not authorised to use.",
      },
      {
        heading: "Account security",
        body: "You are responsible for protecting your sign-in details, devices, visitor codes, and other account credentials. Notify us promptly if you suspect unauthorised access or misuse of your account.",
      },
      {
        heading: "Role-based permissions",
        body: "Access is assigned according to your role and estate. You must not attempt to access another user's account, another estate's records, or any feature or data beyond the permissions granted to you.",
      },
      {
        heading: "Administrator responsibilities",
        body: "Estate administrators are responsible for managing invitations, assigning appropriate roles, removing access when it is no longer required, and ensuring that authorised users follow the estate's security procedures.",
      },
    ],
  },
  {
    title: "Using Sycure",
    content: [
      {
        heading: "The service",
        body: "Sycure provides tools for creating and verifying visitor passes, recording gate decisions, managing estate users, and reviewing access activity. Features may vary by role, estate configuration, device, or subscription plan.",
      },
      {
        heading: "Visitor passes",
        body: "A visitor pass is an authorisation signal, not a guarantee of entry. Estates and their security personnel retain responsibility for identity checks, physical security, emergency procedures, and the final decision to admit or refuse a visitor.",
      },
      {
        heading: "Resident responsibilities",
        body: "Residents must create passes only for genuine visitors, provide accurate visit details, share codes only with the intended recipients, and cancel a pass when it is no longer needed or may have been compromised.",
      },
      {
        heading: "Verifier responsibilities",
        body: "Verifiers must use Sycure only while performing authorised duties, follow the result displayed by the service together with their estate's security procedures, and never approve access in exchange for payment or another improper benefit.",
      },
    ],
  },
  {
    title: "Acceptable Use",
    content: [
      {
        heading: "Prohibited activity",
        body: "You may not use Sycure to commit or facilitate unlawful, fraudulent, harmful, or abusive activity; create false visitor records; harass another person; or interfere with the safety, rights, or property of others.",
      },
      {
        heading: "System integrity",
        body: "You may not probe, scan, disrupt, overload, reverse engineer, bypass, or attempt to defeat the platform's security or access controls, except where such restriction is prohibited by applicable law or testing is expressly authorised by us in writing.",
      },
      {
        heading: "Automated and commercial use",
        body: "You may not scrape the service, use unauthorised bots, resell access, reproduce platform data, or use Sycure to build a competing product without our prior written permission.",
      },
      {
        heading: "Enforcement",
        body: "We may investigate suspected misuse and restrict or suspend access where reasonably necessary to protect users, estates, the public, or the platform. We may also cooperate with lawful requests from competent authorities.",
      },
    ],
  },
  {
    title: "Estate Plans and Payment",
    content: [
      {
        heading: "Commercial terms",
        body: "If an estate purchases a paid plan, its fees, billing cycle, plan limits, renewal terms, and any implementation services will be set out in the applicable order form, invoice, or separate written agreement.",
      },
      {
        heading: "Taxes and payment",
        body: "Unless stated otherwise, fees are exclusive of applicable taxes and must be paid by the due date. We may restrict paid features after reasonable notice if an undisputed payment remains overdue.",
      },
      {
        heading: "Plan changes",
        body: "We may change general plan features or pricing prospectively. Any change affecting an active paid term will take effect at renewal unless the applicable commercial agreement states otherwise or applicable law requires a different approach.",
      },
    ],
  },
  {
    title: "Data and Intellectual Property",
    content: [
      {
        heading: "Your data",
        body: "You retain the rights you have in information submitted through Sycure. You grant us the limited rights needed to host, process, transmit, and display that information to operate, secure, support, and improve the service.",
      },
      {
        heading: "Privacy",
        body: "Our Privacy Policy explains how we collect, use, retain, and protect personal data. Estate administrators may also have independent obligations under applicable data protection law when they determine how resident, visitor, and verifier data is used.",
      },
      {
        heading: "Sycure property",
        body: "Sycure and its licensors own the platform, software, branding, designs, documentation, and all related intellectual property. These terms give you a limited, non-exclusive, non-transferable, revocable right to use the service for its intended purpose.",
      },
      {
        heading: "Feedback",
        body: "If you provide suggestions or feedback, you permit us to use them without restriction or payment, provided that we do not identify you publicly as the source without your consent.",
      },
    ],
  },
  {
    title: "Availability and Third-Party Services",
    content: [
      {
        heading: "Service changes",
        body: "We may maintain, improve, add, or remove features from time to time. We aim to keep Sycure reliable, but we do not promise uninterrupted or error-free availability, including where outages result from networks, devices, or events outside our reasonable control.",
      },
      {
        heading: "Third-party services",
        body: "Sycure may rely on or link to services provided by others, such as mobile platforms, cloud hosting, messaging, and payment providers. Their services are governed by their own terms, and we are not responsible for their independent acts or omissions.",
      },
    ],
  },
  {
    title: "Suspension and Termination",
    content: [
      {
        heading: "By you",
        body: "You may stop using Sycure at any time and may request account deletion through the available account deletion process. Charges already due under an estate's paid agreement remain payable.",
      },
      {
        heading: "By us",
        body: "We may suspend or terminate access if you materially breach these terms, create a security or legal risk, fail to pay applicable fees, or if providing the service is no longer commercially or technically feasible. Where practical, we will provide notice and an opportunity to resolve the issue.",
      },
      {
        heading: "After termination",
        body: "Your right to use Sycure ends when your account or agreement is terminated. Provisions that are intended by their nature to continue — including payment obligations, intellectual property rights, disclaimers, liability limits, and dispute terms — will survive.",
      },
    ],
  },
  {
    title: "Disclaimers and Liability",
    content: [
      {
        heading: "No substitute for physical security",
        body: "Sycure supports access-control decisions but does not replace trained security personnel, emergency services, identity documents, barriers, alarms, or an estate's own risk assessment and procedures.",
      },
      {
        heading: "Service disclaimer",
        body: "To the fullest extent permitted by law, Sycure is provided on an 'as is' and 'as available' basis. We disclaim implied warranties, including merchantability, fitness for a particular purpose, and non-infringement, where those warranties may lawfully be excluded.",
      },
      {
        heading: "Limitation of liability",
        body: "To the fullest extent permitted by law, Sycure Lab Limited will not be liable for indirect, incidental, special, consequential, or punitive loss, or for lost profits, revenue, data, or goodwill arising from use of the service. Nothing in these terms excludes liability that cannot lawfully be excluded.",
      },
      {
        heading: "Your responsibility",
        body: "You are responsible for losses arising from your unlawful use of Sycure, material breach of these terms, or violation of another person's rights. Any indemnity owed by an estate customer will be governed by its applicable commercial agreement.",
      },
    ],
  },
  {
    title: "Changes and General Terms",
    content: [
      {
        heading: "Changes to these terms",
        body: "We may update these terms to reflect changes to the service, law, or our business. We will give reasonable notice of material changes. Continued use after the effective date of an update means you accept the revised terms.",
      },
      {
        heading: "Entire agreement",
        body: "These terms, our Privacy Policy, and any applicable commercial agreement form the agreement between you and Sycure regarding the service. If a commercial agreement conflicts with these terms, the commercial agreement controls for that conflict.",
      },
      {
        heading: "Severability and waiver",
        body: "If any provision is found unenforceable, the remaining provisions will continue in effect. A delay or failure to enforce a provision is not a waiver of our right to enforce it later.",
      },
      {
        heading: "Assignment",
        body: "You may not transfer your rights or obligations under these terms without our written consent. We may transfer ours as part of a merger, reorganisation, sale of assets, or by operation of law.",
      },
    ],
  },
];

const EFFECTIVE_DATE = "26 September 2026";

export default function TermsPage() {
  return (
    <>
      <SiteNavbar />
      <main className="flex-1">
        <Container className="max-w-4xl py-14 lg:py-20">
          <span className="inline-flex rounded-pill border border-brand-line bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-strong">
            Legal
          </span>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Terms and Conditions
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-secondary">
            These terms explain the rules for accessing and using Sycure across
            the resident app, gate verifier app, and estate management dashboard.
          </p>
          <p className="mt-5 text-sm text-ink-muted">
            Effective date: {EFFECTIVE_DATE}
          </p>

          <div className="mt-8 rounded-card-lg border border-dashed border-border bg-surface px-6 py-5">
            <p className="text-sm leading-6 text-ink-secondary">
              <span className="font-semibold text-ink">Questions?</span> Contact
              us at{" "}
              <a
                href="mailto:legal@sycureestate.com"
                className="font-medium text-brand-strong underline underline-offset-2 hover:text-brand"
              >
                legal@sycureestate.com
              </a>
              . We aim to respond within 5 business days.
            </p>
          </div>

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
                      <p className="mb-2 text-sm font-semibold text-ink">
                        {item.heading}
                      </p>
                      <p className="text-sm leading-6 text-ink-secondary">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-6 rounded-card-lg border border-border bg-surface-elevated px-6 py-6 sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Governing law
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-secondary">
              These Terms and Conditions are governed by the laws of the Federal
              Republic of Nigeria. The courts of Nigeria will have jurisdiction
              over disputes arising from these terms, subject to any mandatory
              rights or dispute process provided by applicable law.
            </p>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
