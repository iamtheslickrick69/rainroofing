import { Metadata } from "next";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { ServiceFAQ } from "@/components/sections/service-faq";

const CDN = "https://pub-82e4016d6e17421ebc1eaa174644bee3.r2.dev";
import { Crown, Calendar, Sparkles, Zap, Shield, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Roof Premium Membership | Rain Roofing Pros - Lubbock, TX",
  description: "Exclusive roof protection membership in Lubbock, TX. Priority service, annual inspections, free cleaning. Only 150 spots available. Call 806-808-1317.",
};

const faqs = [
  {
    question: "How often should I schedule roof maintenance?",
    answer: "It's recommended to schedule roof maintenance at least once a year, preferably in the spring or fall when weather conditions are mild.",
  },
  {
    question: "What does a typical roof maintenance service include?",
    answer: "Our roof maintenance service typically includes a thorough inspection, cleaning of debris, checking for loose or damaged shingles, and inspecting seals and gutters.",
  },
  {
    question: "How can roof maintenance extend the life of my roof?",
    answer: "Regular maintenance helps identify and address potential issues early, preventing more significant damage and costly repairs down the line.",
  },
  {
    question: "Do you provide maintenance services for both residential and commercial roofs?",
    answer: "Yes, we offer roof maintenance services for both residential and commercial properties, ensuring all types of roofs are well cared for.",
  },
  {
    question: "What signs indicate I need roof maintenance?",
    answer: "Look for signs such as missing shingles, leaks, water stains on ceilings, or excessive debris build-up in gutters—all indicate the need for maintenance.",
  },
  {
    question: "Will maintenance help with insurance claims for roof damage?",
    answer: "Yes, having regular maintenance records can strengthen your case for insurance claims by showing that you proactively cared for your roof.",
  },
  {
    question: "What is the average cost of roof maintenance in Lubbock?",
    answer: "The cost can vary based on the roof's size and condition, but averages typically range from $150 to $400 per maintenance visit.",
  },
  {
    question: "How do I schedule a roof maintenance appointment?",
    answer: "You can schedule an appointment by contacting us directly through our website or by calling our office to discuss available dates and times.",
  },
];

const benefits = [
  {
    icon: Calendar,
    title: "Up to 12 Visits Per Year",
    description: "We check your roof after major storms, once annually, or anytime you request.",
  },
  {
    icon: Sparkles,
    title: "Free Roof Cleaning",
    description: "Keep your roof looking great with complimentary cleaning included in your membership.",
  },
  {
    icon: Zap,
    title: "Top Priority Service",
    description: "As a Roof Premium member, any issue you have gets bumped to the top of our list.",
  },
  {
    icon: Shield,
    title: "Comprehensive Damage Checks",
    description: "We inspect for leaks, missing shingles, storm damage, and wear before small issues turn into costly repairs.",
  },
];

export default function RoofPremiumPage() {
  return (
    <>
      <ServicePageHero
        title="Roof Premium Services"
        subtitle="Exclusive Membership"
        description="Keeping your roof in top shape shouldn't be a hassle. That's why we're launching Roof Premium, a subscription-based service designed for homeowners in Lubbock who want peace of mind without lifting a finger."
        image={`${CDN}/0000solar.jpg`}
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Launch Banner */}
          <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-2xl p-8 md:p-12 mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown className="h-10 w-10 text-[#fbbf24]" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Introducing Roof Premium
              </h2>
            </div>
            <p className="text-xl text-white/90 mb-2">
              Exclusive Roof Protection Starting Spring 2025!
            </p>
            <p className="text-white/80">Pricing details coming soon.</p>
          </div>

          {/* Benefits Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#171717] text-center mb-12">
              What You Get with Roof Premium
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-[#fafafa] rounded-xl p-6 flex gap-4">
                  <div className="w-14 h-14 bg-[#2563eb] rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#171717] mb-1">{benefit.title}</h3>
                    <p className="text-[#525252]">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exclusive Membership */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Crown className="h-6 w-6 text-[#fbbf24]" />
                  <p className="text-[#fbbf24] font-semibold uppercase tracking-wider">Exclusive Membership</p>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Only 150 Spots Available!</h3>
                <p className="text-[#a3a3a3] mb-6">
                  To maintain quality service, we are limiting Roof Premium to just 150 homeowners in Lubbock. Don't wait until it's too late! Protect your home year-round with expert inspections and priority service.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-[#a3a3a3]">
                    <CheckCircle className="h-5 w-5 text-[#3b82f6]" />
                    Priority scheduling for all services
                  </li>
                  <li className="flex items-center gap-2 text-[#a3a3a3]">
                    <CheckCircle className="h-5 w-5 text-[#3b82f6]" />
                    Exclusive member-only discounts
                  </li>
                  <li className="flex items-center gap-2 text-[#a3a3a3]">
                    <CheckCircle className="h-5 w-5 text-[#3b82f6]" />
                    Peace of mind year-round
                  </li>
                </ul>
                <a
                  href="tel:806-808-1317"
                  className="inline-flex items-center px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call to Reserve Your Spot
                </a>
              </div>
              <div className="w-full lg:w-auto">
                <div className="bg-[#404040] rounded-xl p-8 text-center">
                  <p className="text-[#a3a3a3] mb-2">Limited to</p>
                  <p className="text-6xl font-bold text-[#3b82f6] mb-2">150</p>
                  <p className="text-[#a3a3a3]">Members in Lubbock</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Sign Up for Roof Premium - Spring 2025</h2>
          <p className="text-white/90 mb-8">Be the first to know when enrollment opens!</p>
          <Button asChild size="lg" className="bg-white text-[#2563eb] hover:bg-[#eff6ff]">
            <Link href="/contact">Join the Waitlist</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
