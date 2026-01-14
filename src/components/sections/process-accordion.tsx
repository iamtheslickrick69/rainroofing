"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { EditorialProcess } from "@/components/ui/editorial-process";

const steps = [
  {
    id: "01",
    title: "Call or Fill Out the Form",
    description:
      "Reach out to us at 806-808-1317 or complete our quick online form. Our friendly team will get back to you promptly to schedule a convenient time for your free consultation.",
    cta: "Contact Us",
    href: "/#contact",
  },
  {
    id: "02",
    title: "We Review Your Roof",
    description:
      "Our certified inspectors will thoroughly examine your roof, documenting any damage or wear. We'll review multiple options with you and provide a detailed, transparent estimate with no hidden fees.",
    cta: "Learn About Inspections",
    href: "/services/roof-inspections",
  },
  {
    id: "03",
    title: "Project Begins",
    description:
      "Once you approve the plan, our experienced crew gets to work. You'll receive consistent updates throughout the process, and we treat your property with the utmost respect and care.",
    cta: "View Our Services",
    href: "/services/roof-replacement",
  },
  {
    id: "04",
    title: "Final Roof Review",
    description:
      "After completion, we conduct a thorough final inspection to ensure everything meets our high standards. You'll receive documentation of the work and our quality guarantee for complete peace of mind.",
    cta: "Get Started",
    href: "/#contact",
  },
];

export function ProcessAccordion() {
  return (
    <section id="process" className="py-20 bg-[#1c1c1c] overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#737373] font-semibold uppercase tracking-wider mb-2"
          >
            How It Works
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Proven Roofing Process
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto">
            From your first call to the final inspection, we keep you informed every step of the way.
          </p>
        </motion.div>

        {/* Editorial Process Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <EditorialProcess steps={steps} />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[#737373] mb-4"
          >
            Ready to get started?
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="tel:806-808-1317"
            className="inline-flex items-center px-8 py-4 bg-[#292929] hover:bg-[#333333] text-white font-semibold rounded-full transition-colors border border-white/10"
          >
            <Phone className="h-5 w-5 mr-3" />
            Call 806-808-1317 for Free Estimate
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
