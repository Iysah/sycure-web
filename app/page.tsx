import { SiteNavbar } from "./components/site-navbar";
import { SiteFooter } from "./components/site-footer";
import { Hero } from "./components/marketing/hero";
import { TrustStrip } from "./components/marketing/trust-strip";
import { ProblemSection } from "./components/marketing/problem-section";
import { HowItWorks } from "./components/marketing/how-it-works";
import { RoleTabs } from "./components/marketing/role-tabs";
import { SecuritySection } from "./components/marketing/security-section";
import { PlatformSection } from "./components/marketing/platform-section";
import { UseCases } from "./components/marketing/use-cases";
import { Testimonials } from "./components/marketing/testimonials";
import { Faq } from "./components/marketing/faq";
import { CtaSection } from "./components/marketing/cta-section";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <HowItWorks />
        <RoleTabs />
        <SecuritySection />
        <PlatformSection />
        <UseCases />
        <Testimonials />
        <Faq />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
