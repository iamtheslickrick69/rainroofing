import { Metadata } from "next";
import { ServicePageHero } from "@/components/sections/service-page-hero";

const CDN = "https://pub-82e4016d6e17421ebc1eaa174644bee3.r2.dev";
import { ServiceFAQ } from "@/components/sections/service-faq";
import { ServiceCTA } from "@/components/sections/service-cta";
import { Search, MessageSquare, Wrench, Package, Bell, CheckCircle, Phone, Droplets, CloudRain, Construction, CircleDot } from "lucide-react";

export const metadata: Metadata = {
  title: "Roof Repair | Rain Roofing Pros - Lubbock, TX",
  description: "Fast, reliable roof repair in Lubbock, TX. We fix leaks, storm damage, and more. Free inspection included. Call 806-808-1317.",
};

const faqs = [
  {
    question: "How do I know if my roof needs repairs?",
    answer: "Look for missing or damaged shingles, leaks in the ceiling, water stains, or any visible sagging. If you notice these issues, it's best to call a professional.",
  },
  {
    question: "What causes roof damage in Lubbock?",
    answer: "Common causes include severe weather conditions, such as heavy rain, hail, and strong winds. Additionally, UV exposure can deteriorate roofing materials over time.",
  },
  {
    question: "How long does a roof repair take?",
    answer: "Repair time can vary depending on the extent of the damage, but most repairs can typically be completed within a few hours to a day.",
  },
  {
    question: "Are roof repairs covered by insurance?",
    answer: "Many homeowner insurance policies cover roof repairs due to storm damage or other covered events. It's best to review your policy or contact your agent for clarification.",
  },
  {
    question: "Do I need to leave my home during roof repairs?",
    answer: "Generally, you can stay in your home during roof repairs. However, some noise and disruption may occur, so make plans accordingly if you have concerns.",
  },
  {
    question: "Can I perform roof repairs myself?",
    answer: "While minor repairs may seem manageable, we recommend hiring a licensed professional for safety and to ensure the repairs are done correctly and effectively.",
  },
  {
    question: "How do I choose a roofing contractor in Lubbock?",
    answer: "Look for experienced contractors with positive reviews, appropriate licenses, and insurance. It's also beneficial to request estimates from multiple companies to compare.",
  },
  {
    question: "What are the signs that I need a roof replacement instead of a repair?",
    answer: "If your roof has extensive damage, significant granule loss, or is nearing the end of its expected lifespan, a replacement may be more cost-effective than repeated repairs.",
  },
];

const process = [
  {
    icon: Search,
    title: "We start with a free inspection",
    description: "Our team shows up on time and checks your whole roof. We look for missing shingles, leaks, weak spots, and other problems that could cause bigger issues later.",
  },
  {
    icon: MessageSquare,
    title: "We explain what we find",
    description: "After the inspection, we'll tell you exactly what needs fixing and how much it will cost. There are no hidden fees—just clear answers.",
  },
  {
    icon: Wrench,
    title: "We fix it fast",
    description: "If you say yes, we schedule a time that works for you. Most repairs are done in one day. We work quickly, keep your yard clean, and make sure everything is done right.",
  },
  {
    icon: Package,
    title: "We use strong materials",
    description: "Whether your roof is shingle, metal, or flat, we use the best materials to make sure it lasts.",
  },
  {
    icon: Bell,
    title: "We keep you in the loop",
    description: "A team member will keep you updated during the repair. If anything changes, we'll talk to you right away.",
  },
  {
    icon: CheckCircle,
    title: "We double-check the work",
    description: "When we're done, we walk through everything with you to make sure you're happy. If you see anything else, we fix it.",
  },
];

const problemsWefix = [
  { icon: Droplets, text: "Leaks" },
  { icon: CloudRain, text: "Hail or storm damage" },
  { icon: Construction, text: "Broken roof flashing" },
  { icon: CircleDot, text: "Gutters that aren't draining right" },
];

export default function RoofRepairPage() {
  return (
    <>
      <ServicePageHero
        title="Roof Repair"
        subtitle="Fast & Reliable"
        description="If your roof has been damaged by storms, sun, or just old age, we're here to help. We offer roof repairs for homes and businesses in Lubbock, Texas."
        image={`${CDN}/000shingle.jpg`}
      />

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2563eb] font-semibold uppercase tracking-wider mb-2">How It Works</p>
            <h2 className="text-3xl font-bold text-[#171717]">Here's How It Works</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <div key={index} className="bg-[#fafafa] rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-[#2563eb]" />
                </div>
                <h3 className="text-lg font-semibold text-[#171717] mb-2">{step.title}</h3>
                <p className="text-[#525252] text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Fix */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#3b82f6] font-semibold uppercase tracking-wider mb-2">Our Expertise</p>
              <h2 className="text-3xl font-bold text-white mb-6">We Fix All Kinds of Problems</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {problemsWefix.map((problem, index) => (
                  <div key={index} className="flex items-center gap-3 bg-[#262626] rounded-lg px-4 py-3">
                    <problem.icon className="h-5 w-5 text-[#3b82f6]" />
                    <span className="text-white">{problem.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#a3a3a3] mb-6">
                We also know Lubbock weather can be rough—hot sun, strong winds, and hail. That's why we make sure your roof is built to handle it.
              </p>
              <p className="text-[#a3a3a3]">
                All of our work comes with a warranty, so you can feel good knowing your roof is protected.
              </p>
            </div>

            <div className="bg-[#262626] border border-[#1e293b] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Bonus: Prevent Future Damage</h3>
              <p className="text-[#a3a3a3] mb-6">
                We also offer roof checkups to find small problems before they become big ones. This can save you time and money in the future.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:806-808-1317"
                  className="flex items-center justify-center w-full px-6 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call 806-808-1317
                </a>
                <p className="text-center text-[#a3a3a3] text-sm">Free inspection included with every call</p>
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
