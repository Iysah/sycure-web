/**
 * Single source of truth for the marketing site's copy and structured data.
 * Components render this data; they do not hardcode strings. All records use
 * `as const` so keys and literals flow through to derived types.
 */
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BellRing,
  Building2,
  CalendarClock,
  ClipboardList,
  FileClock,
  Fingerprint,
  KeyRound,
  MessageSquare,
  QrCode,
  ScanLine,
  ShieldCheck,
  Siren,
  Store,
  Users,
  Wallet,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────────
   Primary calls to action — one hierarchy, reused everywhere
   ──────────────────────────────────────────────────────────────────────────── */

export const CTA = {
  primary: { label: "Request a demo", href: "/demo" },
  secondary: { label: "See how it works", href: "#how-it-works" },
  app: { label: "Get the app", href: "#platform" },
} as const;

export type CtaKey = keyof typeof CTA;
export type Cta = (typeof CTA)[CtaKey];

/* ─────────────────────────────────────────────────────────────────────────────
   App store listings — the resident and verifier apps ship from one bundle
   ──────────────────────────────────────────────────────────────────────────── */

export interface AppStore {
  readonly id: "ios" | "android";
  readonly href: string;
  /**
   * Official store badges in `public/badges/`. `onLight` is the standard badge;
   * `onDark` is each vendor's dark-surface treatment (Apple's white badge,
   * Google's keyline badge). Both are the unmodified official artwork.
   */
  readonly badge: { readonly onLight: string; readonly onDark: string };
  /** Accessible label for the link/badge. */
  readonly label: string;
}

export const APP_STORES = [
  {
    id: "ios",
    href: "https://apps.apple.com/ng/app/sycure-estate/id6798421561",
    badge: {
      onLight: "/badges/app-store.svg",
      onDark: "/badges/app-store-white.svg",
    },
    label: "Download Sycure Estate on the App Store",
  },
  {
    id: "android",
    href: "https://play.google.com/store/apps/details?id=com.sycure.mobile",
    badge: {
      onLight: "/badges/google-play.svg",
      onDark: "/badges/google-play.svg",
    },
    label: "Get Sycure Estate on Google Play",
  },
] as const satisfies readonly AppStore[];

/* ─────────────────────────────────────────────────────────────────────────────
   Navigation
   ──────────────────────────────────────────────────────────────────────────── */

export const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "For your team", href: "#roles" },
  { label: "Security", href: "#security" },
  { label: "Platform", href: "#platform" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

/* ─────────────────────────────────────────────────────────────────────────────
   Verification states — the semantic system used across every product mock
   ──────────────────────────────────────────────────────────────────────────── */

export type StateTone =
  | "approved"
  | "pending"
  | "expired"
  | "rejected"
  | "mismatch";

interface VerificationState {
  readonly label: string;
  readonly tone: StateTone;
}

export const VERIFICATION_STATES = {
  verified: { label: "Verified", tone: "approved" },
  approved: { label: "Approved", tone: "approved" },
  pending: { label: "Pending", tone: "pending" },
  expired: { label: "Expired", tone: "expired" },
  rejected: { label: "Rejected", tone: "rejected" },
  mismatch: { label: "Estate mismatch", tone: "mismatch" },
} as const satisfies Record<string, VerificationState>;

export type VerificationStateKey = keyof typeof VERIFICATION_STATES;

/* ─────────────────────────────────────────────────────────────────────────────
   Trust strip — capability signals only. No invented metrics.
   Numeric proof points get added here once they are real.
   ──────────────────────────────────────────────────────────────────────────── */

export const TRUST_SIGNALS = [
  { label: "Estate-specific authorization", icon: Building2 },
  { label: "One-time visitor codes", icon: CalendarClock },
  { label: "Every entry logged", icon: FileClock },
  { label: "Role-based access", icon: Fingerprint },
  { label: "Real-time notifications", icon: BellRing },
  { label: "NDPA-aligned data handling", icon: ShieldCheck },
] as const satisfies readonly { label: string; icon: LucideIcon }[];

/* ─────────────────────────────────────────────────────────────────────────────
   The problem
   ──────────────────────────────────────────────────────────────────────────── */

export const PROBLEM = {
  eyebrow: "Why estates switch",
  heading: "The gate is still run on paper and phone calls",
  body: "Most estates approve visitors through WhatsApp groups, a paper register, and a call to the gate. It is slow, it is easy to fake, and when something goes wrong there is no record of who approved whom.",
  points: [
    {
      title: "No verifiable record",
      body: "A signature in a notebook can't tell you which resident actually authorized a visitor — or whether they were even home.",
      icon: ClipboardList,
    },
    {
      title: "Approvals that don't scale",
      body: "One security post, hundreds of homes, and a queue of visitors waiting on a resident to pick up the phone.",
      icon: Users,
    },
    {
      title: "Access that outlives its purpose",
      body: "A code shared on WhatsApp works forever, for anyone, at any gate it was ever used at.",
      icon: KeyRound,
    },
  ],
} as const;

/* ─────────────────────────────────────────────────────────────────────────────
   How Sycure works — three steps
   ──────────────────────────────────────────────────────────────────────────── */

export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  heading: "Three steps, one record",
  body: "The resident authorizes. The guard verifies. The estate keeps the receipt.",
  steps: [
    {
      n: "01",
      title: "A resident generates an access code",
      body: "In the app they add the guest's name, the reason for the visit, and a detail to spot them by. Sycure issues a one-time code, valid only at their estate.",
      icon: QrCode,
    },
    {
      n: "02",
      title: "A guard verifies it at the gate",
      body: "The guard enters the code in the verifier app. Sycure checks it against the estate's records and shows a clear result — no phone call to the resident.",
      icon: ScanLine,
    },
    {
      n: "03",
      title: "The estate keeps the record",
      body: "Every verification — verified, rejected, expired, estate mismatch — is written to the activity log with a timestamp and the guard who made the call.",
      icon: Activity,
    },
  ],
} as const;

export type HowItWorksStep = (typeof HOW_IT_WORKS.steps)[number];

/* ─────────────────────────────────────────────────────────────────────────────
   Role-based experiences
   ──────────────────────────────────────────────────────────────────────────── */

export type RoleId = "residents" | "guards" | "managers";

export interface RoleContent {
  readonly id: RoleId;
  readonly tabLabel: string;
  readonly eyebrow: string;
  readonly headline: string;
  readonly summary: string;
  readonly benefits: readonly string[];
}

export const ROLES = [
  {
    id: "residents",
    tabLabel: "Residents",
    eyebrow: "Resident app",
    headline: "Authorize a visitor before they arrive",
    summary:
      "Create a pass in seconds, share it however you like, and get told the moment your guest is checked in — or turned away.",
    benefits: [
      "Generate a QR or alphanumeric pass per visitor",
      "Set the date and time window each pass is valid for",
      "Get a live notification on check-in, rejection, or expiry",
      "Review a searchable history of everyone you've let in",
    ],
  },
  {
    id: "guards",
    tabLabel: "Guards",
    eyebrow: "Verifier app",
    headline: "A clear decision at the gate, every time",
    summary:
      "Scan or type the code. Sycure confirms the estate, the time window, and the resident behind it — then tells you yes or no.",
    benefits: [
      "Scan the QR or enter the code by hand",
      "See the estate and time window checked before you decide",
      "Distinct states for approved, rejected, expired, and mismatch",
      "Keep moving — the queue clears without phone calls",
    ],
  },
  {
    id: "managers",
    tabLabel: "Estate managers",
    eyebrow: "Management dashboard",
    headline: "One view of who's coming through your gates",
    summary:
      "Onboard residents and guards, scope each guard to the right estate, and read a complete, timestamped record of every verification.",
    benefits: [
      "Manage residents, guards, and multiple estates in one place",
      "Scope guard access so a pass only works where it should",
      "Watch live gate activity and unusual verification events",
      "Export the audit trail for incident reviews and reporting",
    ],
  },
] as const satisfies readonly RoleContent[];

/* ─────────────────────────────────────────────────────────────────────────────
   Security & trust boundaries
   ──────────────────────────────────────────────────────────────────────────── */

export const SECURITY = {
  eyebrow: "Security",
  heading: "Trust boundaries built into every check",
  body: "Sycure is access control first. The rules that make a pass valid are enforced by the system, not by whoever is on the gate that night.",
  boundaries: [
    {
      title: "Estate-specific authorization",
      body: "A pass is bound to one estate. Present it anywhere else and it fails — cross-estate reuse is designed out.",
      icon: Building2,
    },
    {
      title: "Time-bound codes",
      body: "Every pass carries a date and a window. Outside it, the code is dead.",
      icon: CalendarClock,
    },
    {
      title: "Scoped guard access",
      body: "Estate management decides which guard verifies at which gate. Access is explicit and revocable.",
      icon: Fingerprint,
    },
    {
      title: "Immutable gate log",
      body: "Approvals, rejections, and the reason behind each one are recorded with a timestamp and can't be quietly edited.",
      icon: FileClock,
    },
  ],
} as const;

/* Sample rows for the gate-log mock — illustrative, not real estate data */
export const GATE_LOG_ROWS = [
  { time: "08:10", estate: "Green Oaks", method: "QR scan", state: "verified" },
  { time: "08:14", estate: "Green Oaks", method: "Manual code", state: "approved" },
  { time: "08:22", estate: "Palm Ridge", method: "QR scan", state: "mismatch" },
  { time: "08:37", estate: "Green Oaks", method: "Manual code", state: "expired" },
  { time: "08:41", estate: "Green Oaks", method: "QR scan", state: "verified" },
] as const satisfies readonly {
  time: string;
  estate: string;
  method: string;
  state: VerificationStateKey;
}[];

/* ─────────────────────────────────────────────────────────────────────────────
   The wider platform — Sycure's direction, stated as direction
   ──────────────────────────────────────────────────────────────────────────── */

export const PLATFORM = {
  eyebrow: "The platform",
  heading: "The gate is where Sycure starts, not where it ends",
  body: "Sycure Estate is being built as one digital layer for a residential community. Access control is live today. These modules are on the roadmap.",
  live: {
    label: "Live now",
    items: [
      {
        title: "Visitor access control",
        body: "Resident passes, guard verification, and the estate-wide gate log.",
        icon: ShieldCheck,
      },
    ],
  },
  roadmap: {
    label: "On the roadmap",
    items: [
      {
        title: "Utility payments",
        body: "Estate managers define levies and utilities; residents pay and track them in-app.",
        icon: Wallet,
      },
      {
        title: "Smart Emergency",
        body: "A direct digital channel for residents to raise security, medical, or fire alerts.",
        icon: Siren,
      },
      {
        title: "Estate communications",
        body: "Structured announcements from management instead of scattered WhatsApp groups.",
        icon: MessageSquare,
      },
      {
        title: "Community marketplace",
        body: "Vetted vendors and service providers reachable from inside participating estates.",
        icon: Store,
      },
    ],
  },
} as const;

/* ─────────────────────────────────────────────────────────────────────────────
   Use cases
   ──────────────────────────────────────────────────────────────────────────── */

export const USE_CASES = [
  {
    title: "Gated residential estates",
    body: "Replace the paper register and the gate-side phone call with pre-authorized passes and a verifiable record.",
    icon: Building2,
  },
  {
    title: "Large multi-street communities",
    body: "Several entrances, thousands of homes — one authorization flow and one activity feed across all of them.",
    icon: Users,
  },
  {
    title: "Developers & facility managers",
    body: "Run access control the same way across every estate in the portfolio, from a single dashboard.",
    icon: ClipboardList,
  },
] as const satisfies readonly { title: string; body: string; icon: LucideIcon }[];

/* ─────────────────────────────────────────────────────────────────────────────
   Testimonials — scaffold. Add entries as they become real and attributable.
   ──────────────────────────────────────────────────────────────────────────── */

export interface Testimonial {
  readonly quote: string;
  readonly name: string;
  readonly role: string;
  readonly estate: string;
}

export const TESTIMONIALS: readonly Testimonial[] = [];

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ
   ──────────────────────────────────────────────────────────────────────────── */

export const FAQS = [
  {
    q: "What does a resident need to create a pass?",
    a: "The Sycure resident app and an active account on an estate that's onboarded to Sycure. Creating a pass takes a name, a date, and a time window.",
  },
  {
    q: "What does a guard need at the gate?",
    a: "The Sycure Verifier app on an Android device with internet connectivity. Verification happens in real time against the estate's records.",
  },
  {
    q: "Does a visitor code work at any estate?",
    a: "No. Every pass is bound to the estate that issued it. Presented at any other gate, it fails verification.",
  },
  {
    q: "What happens to our existing paper register?",
    a: "It's replaced by the digital gate log. Every verification — approved or rejected, with the reason and the guard — is recorded automatically and can be exported.",
  },
  {
    q: "Can we run more than one estate on Sycure?",
    a: "Yes. Estate managers can administer multiple estates from one dashboard, with guards scoped to the correct gates.",
  },
  {
    q: "How is our data handled?",
    a: "Data is transmitted over encrypted connections and access is scoped by role and estate. Sycure aligns its data handling with the Nigeria Data Protection Act (NDPA) 2023.",
  },
] as const;

export type Faq = (typeof FAQS)[number];

/* ─────────────────────────────────────────────────────────────────────────────
   Footer
   ──────────────────────────────────────────────────────────────────────────── */

export const FOOTER_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "For your team", href: "#roles" },
      { label: "Security", href: "#security" },
      { label: "Platform", href: "#platform" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Request a demo", href: "/demo" },
      { label: "FAQ", href: "#faq" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
] as const;
