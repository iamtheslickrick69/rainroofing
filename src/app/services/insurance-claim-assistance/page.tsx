import { Metadata } from "next";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { ServiceFAQ } from "@/components/sections/service-faq";
import { ServiceCTA } from "@/components/sections/service-cta";
import { Camera, FileText, ClipboardCheck, Users, Wrench, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Insurance Claim Assistance | Rain Roofing Pros - Lubbock, TX",
  description: "Expert insurance claim assistance for roof damage in Lubbock, TX. We document damage, file claims, and work with adjusters. Call 806-808-1317.",
};

const faqs = [
  {
    question: "What is Insurance Claim Assistance for roofing?",
    answer: "Insurance Claim Assistance helps homeowners navigate the claims process after roof damage, ensuring they receive the maximum coverage for repairs.",
  },
  {
    question: "How can I prepare for an insurance claim for roof damage?",
    answer: "Start by documenting the damage with photos, and then call us for a professional inspection. We'll help you gather all necessary documentation.",
  },
  {
    question: "How will you communicate with my insurance company?",
    answer: "We act as your advocate, handling direct communication with your insurance adjuster to ensure a thorough evaluation and accurate representation of the damage.",
  },
  {
    question: "What if my insurance claim is denied?",
    answer: "If your claim is denied, we can help you understand the reasons and assist you in appealing the decision to potentially secure the coverage you deserve.",
  },
  {
    question: "How long does the insurance claims process take?",
    answer: "The timeline can vary based on the complexity of the claim, but we keep you updated and strive to expedite the process for you.",
  },
  {
    question: "Will you help me understand my insurance policy?",
    answer: "Absolutely! We will explain your policy details, helping you understand coverage options and any limitations before filing a claim.",
  },
  {
    question: "What costs will I need to cover out-of-pocket?",
    answer: "We provide transparent estimates that detail expected costs, so you can prepare for any potential out-of-pocket expenses related to your repairs.",
  },
  {
    question: "Can you assist with commercial roofing claims as well?",
    answer: "Yes, we offer Insurance Claim Assistance for both residential and commercial roofing, ensuring all clients receive the help they need during the claims process.",
  },
];

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Inspection & Documentation",
    description: "We inspect your roof carefully, taking photos and notes to create a strong case for your insurance company. This ensures nothing is missed and helps speed up the approval process.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Understanding Your Policy",
    description: "Insurance policies can be confusing. We walk you through your coverage so you understand what is and isn't included. Our team explains everything in simple terms.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Filing the Claim",
    description: "Submitting the right paperwork is crucial to avoid delays. We help you gather everything you need, including inspection reports and photos, so your claim is filed correctly.",
  },
  {
    number: "04",
    icon: Users,
    title: "Working with the Adjuster",
    description: "We communicate directly with your insurance company to make sure they understand the full extent of the damage. Our team knows how to present the evidence effectively.",
  },
  {
    number: "05",
    icon: Wrench,
    title: "Repair & Final Steps",
    description: "Once your claim is approved, we guide you through the repair process. We provide a clear plan, fair pricing, and a timeline with no hidden costs.",
  },
];

export default function InsuranceClaimAssistancePage() {
  return (
    <>
      <ServicePageHero
        title="Insurance Claim Assistance"
        subtitle="We Handle the Paperwork"
        description="Dealing with roof damage can be stressful, especially when it comes to insurance claims. At Rain Roofing, we make the process simple for homeowners in Lubbock. Our team helps you document damage, file your claim, and work with your insurance company to get the coverage you deserve."
      />

      {/* 5 Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2563eb] font-semibold uppercase tracking-wider mb-2">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#171717]">5 Steps for Insurance Claim Assistance</h2>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#2563eb] rounded-xl flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-[#fafafa] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#2563eb] font-bold">Step {step.number}</span>
                    <h3 className="text-xl font-semibold text-[#171717]">{step.title}</h3>
                  </div>
                  <p className="text-[#525252]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-[#1a1a1a] rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              We Stay With You Every Step of the Way
            </h3>
            <p className="text-[#a3a3a3] mb-8 max-w-2xl mx-auto">
              At Rain Roofing, we don't just help you file a claim—from the first inspection to the final repair, our team is here to make the insurance process smooth and stress-free.
            </p>
            <a
              href="tel:806-808-1317"
              className="inline-flex items-center px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Us Today to Get Started
            </a>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />
      <ServiceCTA />
    </>
  );
}
