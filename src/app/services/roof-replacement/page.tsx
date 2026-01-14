import { Metadata } from "next";
import { ServicePageHero } from "@/components/sections/service-page-hero";
import { ServiceFAQ } from "@/components/sections/service-faq";
import { ServiceCTA } from "@/components/sections/service-cta";
import { MessageSquare, ClipboardList, FileText, Calendar, Hammer, CheckCircle, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Roof Replacement | Rain Roofing Pros - Lubbock, TX",
  description: "Professional roof replacement in Lubbock, TX. Asphalt, metal, tile, and slate options. Free consultation and financing available. Call 806-808-1317.",
};

const faqs = [
  {
    question: "How do I know if I need a roof replacement?",
    answer: "Signs you may need a replacement include extensive shingle damage, leaks, sagging areas, and a roof that is over 20 years old. A professional inspection can provide clarity.",
  },
  {
    question: "What types of roofing materials are available for replacement?",
    answer: "We offer a variety of materials including asphalt shingles, metal roofs, clay tiles, and flat roofing systems. Each has its advantages and is suitable for different budgets and styles.",
  },
  {
    question: "How long does a roof replacement take?",
    answer: "The duration can vary based on roof size and materials, but most replacements take between one to three days to complete, weather permitting.",
  },
  {
    question: "Will I need to be home during the roof replacement?",
    answer: "While it's not necessary to be home, it's helpful if you are available to address any questions or concerns during the process. Most homeowners choose to go about their day as usual.",
  },
  {
    question: "How much does roof replacement cost?",
    answer: "Costs can vary depending on the size of your roof, choice of materials, and labor. We provide free, detailed estimates to help you budget for your roof replacement accurately.",
  },
  {
    question: "Do you offer financing options for roof replacement?",
    answer: "Yes, we offer flexible financing options to help you manage the costs of a roof replacement. Our team can provide you with detailed information on available plans.",
  },
  {
    question: "What warranties do you provide on roof replacements?",
    answer: "We offer warranties on both materials and labor. Depending on the products used, warranties can range from 20 years to a lifetime, providing peace of mind for your investment.",
  },
  {
    question: "How can I prepare my home for a roof replacement?",
    answer: "Clear the area around your home of vehicles, patio furniture, and any other items that could obstruct the work. It's also helpful to ensure access to the driveway for our team and equipment.",
  },
];

const materials = [
  {
    name: "Asphalt Shingles",
    description: "Popular for their cost-effectiveness and versatility. They come in diverse colors and styles, making it easy to match your home's design.",
    lifespan: "20-30 years",
  },
  {
    name: "Metal Roofing",
    description: "A premium choice known for its longevity and energy efficiency. Perfect for resisting the extreme Texas weather.",
    lifespan: "40-50 years",
  },
  {
    name: "Tile Roofing",
    description: "Provides exceptional durability and classic beauty. Ideal for homes seeking a traditional aesthetic.",
    lifespan: "50+ years",
  },
  {
    name: "Slate Roofing",
    description: "Premium natural material known for elegance. Highly resistant to fire, mold, and insect damage.",
    lifespan: "75-100 years",
  },
];

const steps = [
  { icon: MessageSquare, title: "Initial Consultation", description: "Free, no-obligation meeting to discuss your roofing needs." },
  { icon: ClipboardList, title: "Comprehensive Assessment", description: "Thorough evaluation of your roof's condition." },
  { icon: FileText, title: "Customized Proposal", description: "Detailed proposal with materials, timeline, and costs." },
  { icon: Calendar, title: "Schedule Replacement", description: "Work with you to find the best timing." },
  { icon: Hammer, title: "Installation", description: "Professional installation with minimal disruption." },
  { icon: CheckCircle, title: "Final Inspection", description: "Quality check and thorough cleanup." },
];

export default function RoofReplacementPage() {
  return (
    <>
      <ServicePageHero
        title="Roof Replacement Services"
        subtitle="Complete Solutions"
        description="When it's time to replace your roof, you want to ensure that the job is handled with care, precision, and expertise. We specialize in providing comprehensive roof replacement services tailored to the unique needs of homeowners in Lubbock, Texas."
      />

      {/* Materials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2563eb] font-semibold uppercase tracking-wider mb-2">Options</p>
            <h2 className="text-3xl font-bold text-[#171717]">Types of Roofing Materials We Offer</h2>
            <p className="text-[#525252] mt-4 max-w-2xl mx-auto">
              Selecting the right roofing material is vital for ensuring durability and compatibility with your home's architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="bg-[#fafafa] border-0 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#171717] mb-2">{material.name}</h3>
                  <p className="text-[#525252] text-sm mb-4">{material.description}</p>
                  <div className="bg-[#2563eb]/10 rounded-lg px-3 py-1 inline-block">
                    <span className="text-[#2563eb] font-medium text-sm">Lifespan: {material.lifespan}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#3b82f6] font-semibold uppercase tracking-wider mb-2">Our Process</p>
            <h2 className="text-3xl font-bold text-white">The Roof Replacement Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-[#262626] border border-[#404040] rounded-xl p-6 hover:border-[#2563eb] transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#2563eb] rounded-lg flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-[#3b82f6] font-bold">Step {index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-[#a3a3a3] text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="tel:806-808-1317"
              className="inline-flex items-center px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />
      <ServiceCTA />
    </>
  );
}
