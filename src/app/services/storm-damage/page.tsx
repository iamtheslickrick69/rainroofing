import { Metadata } from "next";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { ServiceFAQ } from "@/components/sections/service-faq";
import { ServiceCTA } from "@/components/sections/service-cta";
import { CheckCircle, AlertTriangle, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Storm Damage Roofing | Rain Roofing Pros - Lubbock, TX",
  description: "Expert storm damage repair in Lubbock, TX. We handle wind, hail, and rain damage. Free inspections and insurance claim assistance. Call 806-808-1317.",
};

const faqs = [
  {
    question: "How can I tell if my roof has storm damage?",
    answer: "Look for visible signs such as missing or damaged shingles, leaks inside your home, dents on metal roofs, or fallen debris. It's best to have a professional inspect your roof for comprehensive assessment.",
  },
  {
    question: "What should I do immediately after a storm?",
    answer: "First, ensure you and your family are safe. Then, check for visible damage from the ground if possible. If you notice significant damage, contact a roofing professional for an inspection as soon as possible.",
  },
  {
    question: "Will my insurance cover storm damage repairs?",
    answer: "Many homeowner insurance policies cover storm damage, but the extent of coverage can vary. It's important to read your policy or consult with your insurance agent to understand your specific coverage.",
  },
  {
    question: "How long does storm damage repair take?",
    answer: "The duration for storm damage repairs can vary based on the severity of the damage and the type of roofing material. Typically, repairs can take anywhere from one day to a few weeks to complete.",
  },
  {
    question: "Can I file an insurance claim for minor storm damage?",
    answer: "Yes, if the damage is significant enough to warrant repair. It's generally advisable to capture photos and document all damages to strengthen your claim.",
  },
  {
    question: "What causes the most storm damage to roofs in Lubbock?",
    answer: "In Lubbock, high winds and hail are common culprits of roof damage. These conditions can lead to lost shingles, cracks, and structural compromise if not addressed promptly.",
  },
  {
    question: "Should I attempt to repair roof damage myself?",
    answer: "While minor issues like small leaks can be temporarily patched, it's usually best to hire a professional. Climbing on roofs can be dangerous, and a professional can ensure repairs are done correctly.",
  },
  {
    question: "How can I prevent future storm damage to my roof?",
    answer: "Regular maintenance, including inspections, cleaning gutters, and ensuring proper ventilation, can help prevent damage. Upgrading to impact-resistant roofing materials can also reduce the risk in storm-prone areas.",
  },
];

const damageSignsData = [
  "Missing or damaged shingles",
  "Dents or punctures in metal roofing",
  "Water stains on ceilings or walls",
  "Debris or granules collected in the gutters",
  "Increased energy bills due to inadequate insulation",
];

export default function StormDamagePage() {
  return (
    <>
      <ServicePageHero
        title="Storm Damage Roofing Services"
        subtitle="West Texas Weather Experts"
        description="When storms hit, they can leave your roof vulnerable to significant damage. Wind, hail, and heavy rain can result in leaks, missing shingles, and even structural issues. Our storm damage roofing services are designed to address these challenges head-on."
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl font-bold text-[#171717] mb-4">Identifying Storm Damage Early</h2>
              <p className="text-lg text-[#525252] mb-6">
                Identifying storm damage early is crucial for preventing costly repairs in the future. Homeowners often worry about what to look for after a storm.
              </p>

              <div className="bg-[#fef3c7] border border-[#f59e0b] rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#92400e] mb-2">Common Signs of Storm Damage</h3>
                    <ul className="space-y-2">
                      {damageSignsData.map((sign, index) => (
                        <li key={index} className="flex items-center gap-2 text-[#92400e]">
                          <CheckCircle className="h-4 w-4 text-[#f59e0b]" />
                          {sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-[#525252] mb-6">
                If you notice any of these signs, it's important to act quickly. We understand that dealing with storm damage can be overwhelming, and this is where our expertise comes into play.
              </p>

              <p className="text-[#525252] mb-8">
                Our storm damage roofing services provide you with peace of mind during a stressful time. From the initial inspection to final repairs, we stand by our commitment to protecting your home and ensuring your complete satisfaction.
              </p>

              <Button asChild className="bg-[#2563eb] hover:bg-[#1d4ed8]">
                <Link href="/services/emergency-roof-services">Learn More About Emergency Services</Link>
              </Button>
            </div>

            {/* Right Content - CTA Card */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 sticky top-32">
              <h3 className="text-2xl font-bold text-white mb-4">Storm Damage?</h3>
              <p className="text-[#a3a3a3] mb-6">Contact us today for a free inspection and let us help you restore your home to its former glory.</p>

              <a
                href="tel:806-808-1317"
                className="flex items-center justify-center w-full px-6 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-colors mb-4"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call 806-808-1317
              </a>

              <div className="border-t border-[#404040] pt-6 mt-6">
                <h4 className="text-white font-semibold mb-3">Our Storm Damage Services</h4>
                <ul className="space-y-2 text-[#a3a3a3] text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#3b82f6]" />
                    Free Storm Damage Inspection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#3b82f6]" />
                    Complete Damage Documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#3b82f6]" />
                    Insurance Claim Assistance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#3b82f6]" />
                    Quality Repairs & Restoration
                  </li>
                </ul>
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
