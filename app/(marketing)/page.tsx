import { Hero } from "@/components/home/Hero";
import { LogoMarquee } from "@/components/shared/LogoMarquee";
import { AnimatedServiceCards } from "@/components/home/AnimatedServiceCards";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { HorizontalPortfolio } from "@/components/home/HorizontalPortfolio";
import { AnimatedStats } from "@/components/shared/AnimatedCounter";
import { PricingSection } from "@/components/home/PricingSection";
import { Testimonials } from "@/components/home/Testimonials";
import { TechStack } from "@/components/home/TechStack";
import { AIDevelopmentSection } from "@/components/home/AIDevelopmentSection";
import { DevOpsSection } from "@/components/home/DevOpsSection";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { ExpandedServicesTabSection } from "@/components/home/ExpandedServicesTabSection";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <AnimatedServiceCards />
      <ExpandedServicesTabSection />
      <ProcessSection />
      <WhyUsSection />
      <HorizontalPortfolio />
      <AnimatedStats />
      <AIDevelopmentSection />
      <DevOpsSection />
      <PricingSection />
      <Testimonials />
      <TechStack />
      <FAQ />
      <CTA />
    </>
  );
}
