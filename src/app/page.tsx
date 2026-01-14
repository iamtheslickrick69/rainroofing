import { HeroSection } from "@/components/ui/hero-section";
import { BentoGrid } from "@/components/sections/bento-grid";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TrustSection } from "@/components/sections/trust-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BentoGrid />
      <ServicesSection />
      <ProcessSection />
      <TrustSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
