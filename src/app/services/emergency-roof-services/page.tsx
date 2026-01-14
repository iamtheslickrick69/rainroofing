import { Metadata } from "next";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { ServiceFAQ } from "@/components/sections/service-faq";

const CDN = "https://pub-82e4016d6e17421ebc1eaa174644bee3.r2.dev";
import { ServiceCTA } from "@/components/sections/service-cta";
import { CheckCircle, Clock, Shield, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Roof Services | Rain Roofing Pros - Lubbock, TX",
  description: "24/7 emergency roof services in Lubbock, TX. Fast response for storm damage, leaks, and urgent repairs. Call 806-808-1317 for immediate assistance.",
};

const faqs = [
  {
    question: "What constitutes a roofing emergency?",
    answer: "A roofing emergency typically involves significant damage from storms, fallen debris, leaks, or compromised structural integrity that requires immediate attention.",
  },
  {
    question: "How quickly can you respond to an emergency roof situation?",
    answer: "We strive to respond to emergency calls as quickly as possible, often within 24 hours, depending on the severity of the situation and weather conditions.",
  },
  {
    question: "Do I need to be home during the emergency roof repair?",
    answer: "While it's not necessary for you to be home during the repairs, it's helpful to discuss the situation and any specific concerns with our team beforehand.",
  },
  {
    question: "Will my insurance cover emergency roof repairs?",
    answer: "Coverage varies by policy, but many insurance companies cover emergency repairs due to storm damage. We can assist you with the claims process.",
  },
  {
    question: "What types of emergency services do you provide?",
    answer: "Our emergency services include temporary tarping, leak repairs, shingle replacement, and assessments of storm damage to prevent further issues.",
  },
  {
    question: "How do I know if my roof needs emergency repairs?",
    answer: "Look for signs like visible leaks, sagging areas, missing shingles, or damage from fallen trees or debris. Contact us if you have any doubts.",
  },
  {
    question: "What should I do before your team arrives?",
    answer: "Ensure the area around your home is clear of debris, move outdoor furniture if necessary, and remain indoors to keep yourself safe during repairs.",
  },
  {
    question: "How can I prevent future roofing emergencies?",
    answer: "Regular maintenance, including inspections and timely repairs, can help identify vulnerabilities before they escalate into emergencies. Consider scheduling an inspection after severe weather events.",
  },
];

export default function EmergencyRoofServicesPage() {
  return (
    <>
      <ServicePageHero
        title="Emergency Roof Services"
        subtitle="24/7 Availability"
        description="Unpredictable weather can lead to sudden and severe roofing issues. Whether it's a major storm, high winds, or hail, our emergency roof services are designed to address urgent situations swiftly and effectively, ensuring your home remains safe and secure."
        image={`${CDN}/000working.jpg`}
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <p className="text-lg text-[#525252] mb-6">
                When you experience a roofing emergency, our first priority is your safety and peace of mind. Emergency situations can arise at any hour, which is why our team is available 24/7. As soon as you contact us, we will gather essential information regarding the issue you're facing. Whether it's a leak, structural damage, or missing shingles, our team will respond promptly to assess the situation on-site.
              </p>

              <h2 className="text-2xl font-bold text-[#171717] mb-4">Our Emergency Process</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#2563eb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#171717] mb-1">Initial Assessment</h3>
                    <p className="text-[#525252] text-sm">Upon arrival, we conduct a thorough inspection of your roof, looking for leaks, water damage, missing tiles, or compromised structures. We also check the interior of your home for signs of moisture or damage.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#2563eb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#171717] mb-1">Temporary Solutions</h3>
                    <p className="text-[#525252] text-sm">If the damage is extensive, we implement temporary measures to secure your roof. This may involve tarping the area to prevent further water intrusion or applying sealants to mitigate leaks.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#2563eb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#171717] mb-1">Efficient Repairs</h3>
                    <p className="text-[#525252] text-sm">Following your approval, our team initiates the repair process. We use high-quality materials suited for West Texas weather, making repairs that are durable and long-lasting.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - CTA Card */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 sticky top-32">
              <h3 className="text-2xl font-bold text-white mb-4">Need Emergency Help?</h3>
              <p className="text-[#a3a3a3] mb-6">Our team is available 24/7 for roofing emergencies. Don't wait – protect your home now.</p>

              <a
                href="tel:806-808-1317"
                className="flex items-center justify-center w-full px-6 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-colors mb-4"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call 806-808-1317
              </a>

              <div className="border-t border-[#404040] pt-6 mt-6">
                <h4 className="text-white font-semibold mb-3">What Sets Us Apart</h4>
                <ul className="space-y-2 text-[#a3a3a3] text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#3b82f6]" />
                    24/7 Emergency Response
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#3b82f6]" />
                    Fast On-Site Assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#3b82f6]" />
                    Transparent Pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#3b82f6]" />
                    Insurance Claim Support
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
