"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How do I know if my roof has storm damage?",
    answer: "Look for missing shingles, leaks, or visible dents. If you suspect damage, it's best to get a professional inspection. Our team can provide a free assessment to identify any issues.",
  },
  {
    question: "What types of roofs do you install and repair?",
    answer: "We work with various roofing materials, including asphalt shingles, metal roofing, tile, and flat roofs for residential roofs. Our team can help you choose the best option for your home and budget.",
  },
  {
    question: "How can I extend the life of my roof?",
    answer: "Regular maintenance, including inspections and cleaning gutters, can help prevent issues and extend your roof's lifespan. Consider our Roof Premium membership for worry-free maintenance.",
  },
  {
    question: "What should I expect during a roof inspection?",
    answer: "Our team will assess the condition of your roof and identify any potential problems. We'll then provide you with a detailed report and recommendations, including photos of any issues found.",
  },
  {
    question: "Do you offer emergency roof services?",
    answer: "Yes, we offer 24/7 emergency services to address urgent roofing issues. Just give us a call at 806-808-1317, and we'll respond quickly to help you.",
  },
  {
    question: "How do I file an insurance claim for roof damage?",
    answer: "After assessing the damage, we can help guide you through the insurance claims process. We document everything with photos and detailed reports, communicate with your adjuster, and ensure you get the coverage needed for repairs.",
  },
  {
    question: "How long does a roof replacement take?",
    answer: "The time for a roof replacement can vary but generally takes one to three days, depending on your roof size and complexity. We'll provide a clear timeline during your consultation.",
  },
  {
    question: "What is the average cost of a roof replacement in Lubbock?",
    answer: "Costs can vary based on materials and size, but we provide free estimates to help you budget for your new roof accurately. We also offer financing options to make the investment more manageable.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#2563eb] font-semibold uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#525252]">
            Have questions? We've got answers. If you don't see what you're looking for, give us a call.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-[#e5e5e5] rounded-lg px-6 data-[state=open]:border-[#2563eb] transition-colors"
            >
              <AccordionTrigger className="text-left text-[#171717] font-semibold hover:text-[#2563eb] hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#525252] pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#525252] mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb]/10">
              <a href="tel:806-808-1317">Call 806-808-1317</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
