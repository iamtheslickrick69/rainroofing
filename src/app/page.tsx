import { HeroSection } from "@/components/ui/hero-section";
import { RoofTypesBento } from "@/components/sections/roof-types-bento";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessAccordion } from "@/components/sections/process-accordion";
import { TrustSection } from "@/components/sections/trust-section";
import { PremiumTestimonials } from "@/components/ui/premium-testimonials";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RoofTypesBento />
      <ServicesSection />
      <ProcessAccordion />
      <TrustSection />
      <PremiumTestimonials />
      <FAQSection />
      <ContactSection />
    </>
  );
}
