import { Metadata } from "next";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { ServiceFAQ } from "@/components/sections/service-faq";
import { ServiceCTA } from "@/components/sections/service-cta";
import { MessageSquare, ClipboardList, FileText, Palette, Hammer, CheckCircle, Phone, MapPin, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Residential Roofing | Rain Roofing Pros - Lubbock, TX",
  description: "Professional residential roofing services in Lubbock, TX. New roofs, repairs, and replacements. Asphalt, metal, tile, and flat roofing. Call 806-808-1317.",
};

const faqs = [
  {
    question: "How do I know if I need a new roof?",
    answer: "Signs that you may need a new roof include missing shingles, leaks, excessive granule loss, and an aging roof structure. A professional inspection can provide clarity.",
  },
  {
    question: "What types of residential roofing materials do you recommend?",
    answer: "We recommend a variety of materials, including asphalt shingles, metal roofing, tile, and flat roofing systems, depending on your budget and architectural style.",
  },
  {
    question: "How long does a residential roof installation take?",
    answer: "The duration depends on the size and type of roofing material. Typically, a complete installation can take anywhere from one to three days.",
  },
  {
    question: "Will my roof be covered by homeowners insurance?",
    answer: "Coverage depends on your specific policy, but most homeowners insurance plans cover roof damage from storms or other sudden incidents. It's best to check your policy for details.",
  },
  {
    question: "What should I do if my roof starts leaking?",
    answer: "If you notice a leak, contact us immediately for an inspection. It's important to address leaks quickly to prevent further damage to your home's structure.",
  },
  {
    question: "How do I maintain my roof?",
    answer: "Regular inspections and removing debris from your roof are key to maintaining your roof. Ask about our Roof Premium membership for worry-free maintenance.",
  },
  {
    question: "Do you offer warranties on your roofing services?",
    answer: "Yes, we offer warranties on both materials and workmanship. This ensures your investment is protected for years to come.",
  },
];

const materials = [
  {
    name: "Asphalt Shingles",
    description: "The most popular choice for many homeowners, known for their affordability and versatility. They come in various colors and styles.",
  },
  {
    name: "Metal Roofing",
    description: "Increasingly favored for its longevity and energy efficiency. Can last 50 years or more and withstand harsh weather.",
  },
  {
    name: "Tile Roofing",
    description: "Offers unmatched durability and beauty. Ideal for resisting high temperatures frequently experienced in Lubbock.",
  },
  {
    name: "Flat Roofing",
    description: "For homes with flat roof designs, we offer effective flat roofing materials that provide waterproofing and durability.",
  },
];

const steps = [
  { icon: MessageSquare, title: "Initial Consultation", description: "Free consultation to discuss your roofing needs and assess your current roof." },
  { icon: ClipboardList, title: "Comprehensive Inspection", description: "We identify existing issues and determine the best course of action." },
  { icon: FileText, title: "Customized Proposal", description: "Detailed proposal with recommendations, costs, and timeline." },
  { icon: Palette, title: "Materials Selection", description: "We help you finalize your choice of materials and colors." },
  { icon: Hammer, title: "Installation", description: "Professional installation adhering to industry standards." },
  { icon: CheckCircle, title: "Final Inspection", description: "Quality check and thorough cleanup of your property." },
];

const whyUs = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "We understand Lubbock's unique climate challenges and tailor our solutions accordingly.",
  },
  {
    icon: Shield,
    title: "Comprehensive Services",
    description: "From repairs to full replacements, we handle all aspects of residential roofing.",
  },
  {
    icon: Users,
    title: "Personalized Attention",
    description: "Each project receives dedicated attention, ensuring your needs are addressed.",
  },
];

export default function ResidentialRoofingPage() {
  return (
    <>
      <ServicePageHero
        title="Residential Roofing Services"
        subtitle="Protecting Your Home"
        description="When it comes to protecting your home, a sturdy and reliable roof is essential. We specialize in residential roofing services tailored to meet the unique needs of homeowners in Lubbock, Texas."
      />

      {/* Understanding Your Needs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#2563eb] font-semibold uppercase tracking-wider mb-2">Your Home, Our Priority</p>
              <h2 className="text-3xl font-bold text-[#171717] mb-6">Understanding Your Residential Roofing Needs</h2>
              <p className="text-[#525252] mb-4">
                Each home is unique, and so are its roofing requirements. Homeowners often have specific concerns, such as the best materials for their climate, the longevity of their roof, and the cost of roofing services.
              </p>
              <p className="text-[#525252] mb-6">
                We take the time to address these concerns through thorough consultations and assessments. Our team works closely with you to understand your vision and necessities, guiding you to make informed choices that suit your budget and the architectural style of your home.
              </p>

              <div className="space-y-4">
                {whyUs.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#2563eb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-[#2563eb]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#171717]">{item.title}</h3>
                      <p className="text-[#525252] text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Types of Roofing Materials</h3>
              <div className="space-y-4">
                {materials.map((material, index) => (
                  <div key={index} className="bg-[#262626] rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">{material.name}</h4>
                    <p className="text-[#a3a3a3] text-sm">{material.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2563eb] font-semibold uppercase tracking-wider mb-2">Our Process</p>
            <h2 className="text-3xl font-bold text-[#171717]">The Residential Roofing Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="bg-white border-0 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#2563eb] rounded-lg flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-[#2563eb] font-bold">Step {index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#171717] mb-2">{step.title}</h3>
                  <p className="text-[#525252] text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="tel:806-808-1317"
              className="inline-flex items-center px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Schedule Your Consultation
            </a>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />
      <ServiceCTA />
    </>
  );
}
