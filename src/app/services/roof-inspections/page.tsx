import { Metadata } from "next";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { ServiceFAQ } from "@/components/sections/service-faq";

const CDN = "https://pub-82e4016d6e17421ebc1eaa174644bee3.r2.dev";
import { ServiceCTA } from "@/components/sections/service-cta";
import { Search, Home, Camera, ListChecks, Clock, DollarSign, Thermometer, CheckCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Roof Inspections | Rain Roofing Pros - Lubbock, TX",
  description: "Professional roof inspections in Lubbock, TX. Prevent costly damage with our thorough assessments. Free estimates. Call 806-808-1317.",
};

const faqs = [
  {
    question: "How often should I schedule a roof inspection?",
    answer: "It's recommended to have a roof inspection at least once a year (we understand you may forget so ask about our Roof Premium Package), and more often after severe weather events, such as hailstorms or heavy winds, which are common in Lubbock.",
  },
  {
    question: "What does a roof inspection include?",
    answer: "Our roof inspection includes checking for damaged shingles, leaks, gutters, ventilation systems, and the overall structural integrity of your roof.",
  },
  {
    question: "Can a roof inspection help me save money?",
    answer: "Yes, regular inspections can identify small issues before they turn into costly repairs, ultimately saving you money in the long run.",
  },
  {
    question: "How long does a roof inspection take?",
    answer: "Typically, a roof inspection takes between 30 minutes to an hour, depending on the size and condition of the roof.",
  },
  {
    question: "Will I receive a report after the inspection?",
    answer: "Yes, we provide a detailed report outlining our findings, including any areas of concern and recommendations for repairs.",
  },
  {
    question: "What should I do if my roof inspection reveals damage?",
    answer: "If damage is found, we will provide recommendations for repairs and can assist you in navigating the insurance claims process if needed.",
  },
  {
    question: "Can I schedule a roof inspection after a severe storm?",
    answer: "Absolutely! We encourage homeowners to schedule an inspection promptly following severe weather to assess any potential damage and address it quickly.",
  },
  {
    question: "Are roof inspections covered by my homeowners insurance?",
    answer: "Many homeowners insurance policies cover roof inspections, especially after a storm. It's best to check with your insurer to confirm your coverage.",
  },
];

const whatWeDo = [
  {
    icon: Search,
    title: "Check for Damage",
    description: "We inspect your roof for missing shingles, leaks, and signs of wear.",
  },
  {
    icon: Home,
    title: "Inside & Out Inspection",
    description: "We check both the roof and attic for water damage, mold, or insulation problems.",
  },
  {
    icon: Camera,
    title: "Photo Documentation",
    description: "We take photos and provide a report with our findings and recommendations.",
  },
  {
    icon: ListChecks,
    title: "Clear Next Steps",
    description: "If repairs are needed, we'll walk you through your options so you know what to expect.",
  },
];

const whyMatters = [
  {
    icon: Clock,
    title: "Extend Roof Life",
    description: "Catching small issues early helps your roof last longer.",
  },
  {
    icon: DollarSign,
    title: "Prevent Costly Repairs",
    description: "Fixing minor damage now saves you from major expenses later.",
  },
  {
    icon: Thermometer,
    title: "Improve Energy Efficiency",
    description: "A well-maintained roof keeps your home cooler in summer and warmer in winter.",
  },
];

export default function RoofInspectionsPage() {
  return (
    <>
      <ServicePageHero
        title="Roof Inspections"
        subtitle="Preventive Care"
        description="Regular roof inspections help prevent costly damage and keep your home safe from harsh weather. At Rain Roofing, we check for problems before they get worse, giving you peace of mind year-round."
        image={`${CDN}/000NEWHOME.jpg`}
      />

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What We Do */}
            <div>
              <h2 className="text-2xl font-bold text-[#171717] mb-8">What We Do</h2>
              <div className="space-y-6">
                {whatWeDo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#2563eb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-[#2563eb]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#171717] mb-1">{item.title}</h3>
                      <p className="text-[#525252]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why It Matters */}
            <div>
              <h2 className="text-2xl font-bold text-[#171717] mb-8">Why Regular Inspections Matter</h2>
              <div className="space-y-6">
                {whyMatters.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#10b981]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-[#10b981]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#171717] mb-1">{item.title}</h3>
                      <p className="text-[#525252]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 bg-[#1a1a1a] rounded-xl p-6">
                <p className="text-[#a3a3a3] mb-4">
                  As a Lubbock-based company, we understand the weather challenges in West Texas. Whether you need a routine inspection or a post-storm checkup, our team is here to help.
                </p>
                <a
                  href="tel:806-808-1317"
                  className="inline-flex items-center px-6 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Schedule Your Inspection
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />
      <ServiceCTA />
    </>
  );
}
