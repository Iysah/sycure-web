import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
});

const SITE_URL = "https://sycureestate.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sycure — Secure estate access control",
    template: "%s — Sycure",
  },
  description:
    "Sycure secures the gate. Residents create time-bound visitor passes, guards verify them against your estate in seconds, and estate managers get a complete audit trail of every entry.",
  keywords: [
    "estate access control",
    "visitor management",
    "gate verification",
    "estate management platform",
    "residential security Nigeria",
    "proptech",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Sycure",
    title: "Sycure — Secure estate access control",
    description:
      "One system for residents, guards, and estate managers. Know who enters your estate, when, and who approved it.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sycure — Secure estate access control",
    description:
      "One system for residents, guards, and estate managers. Know who enters your estate, when, and who approved it.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col bg-background text-ink">
        <script
          // Marks JS as available before the body paints, so scroll-reveal
          // styles only apply when they can actually be undone.
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
