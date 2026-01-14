"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, CloudRain, Wrench, Shield, Clock, AlertTriangle, FileText, Calendar, DollarSign } from "lucide-react";

const faqs = [
  {
    icon: CloudRain,
    question: "How do I know if my roof has storm damage?",
    answer: "Look for missing shingles, leaks, or visible dents. If you suspect damage, it's best to get a professional inspection. Our team can provide a free assessment to identify any issues.",
  },
  {
    icon: Wrench,
    question: "What types of roofs do you install and repair?",
    answer: "We work with various roofing materials, including asphalt shingles, metal roofing, tile, and flat roofs. Our team can help you choose the best option for your home and budget.",
  },
  {
    icon: Shield,
    question: "How can I extend the life of my roof?",
    answer: "Regular maintenance, including inspections and cleaning gutters, can help prevent issues and extend your roof's lifespan. Consider our Roof Premium membership for worry-free maintenance.",
  },
  {
    icon: Clock,
    question: "What should I expect during a roof inspection?",
    answer: "Our team will assess the condition of your roof and identify any potential problems. We'll provide you with a detailed report and recommendations, including photos of any issues found.",
  },
  {
    icon: AlertTriangle,
    question: "Do you offer emergency roof services?",
    answer: "Yes, we offer 24/7 emergency services to address urgent roofing issues. Just give us a call at 806-808-1317, and we'll respond quickly to help you.",
  },
  {
    icon: FileText,
    question: "How do I file an insurance claim?",
    answer: "We guide you through the insurance claims process. We document everything with photos and detailed reports, communicate with your adjuster, and ensure you get the coverage needed.",
  },
  {
    icon: Calendar,
    question: "How long does a roof replacement take?",
    answer: "The time for a roof replacement can vary but generally takes one to three days, depending on your roof size and complexity. We'll provide a clear timeline during your consultation.",
  },
  {
    icon: DollarSign,
    question: "What is the average cost of a replacement?",
    answer: "Costs vary based on materials and size, but we provide free estimates to help you budget accurately. We also offer financing options to make the investment more manageable.",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle
}: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = faq.icon;
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={onToggle}
        className={`
          w-full text-left p-4 rounded-xl transition-all duration-300
          ${isOpen
            ? 'bg-white shadow-lg shadow-[#171717]/10 border-l-4 border-[#171717]'
            : 'bg-white/50 hover:bg-white border-l-4 border-transparent'
          }
        `}
      >
        <div className="flex items-start gap-3">
          {/* Number */}
          <span className={`
            text-xs font-bold transition-colors
            ${isOpen ? 'text-[#171717]' : 'text-[#a3a3a3]'}
          `}>
            {number}
          </span>

          {/* Icon */}
          <Icon className={`
            w-4 h-4 mt-0.5 flex-shrink-0 transition-colors
            ${isOpen ? 'text-[#171717]' : 'text-[#737373]'}
          `} />

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className={`
                text-sm font-semibold transition-colors
                ${isOpen ? 'text-[#171717]' : 'text-[#404040]'}
              `}>
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className={`
                  w-4 h-4 flex-shrink-0 transition-colors
                  ${isOpen ? 'text-[#171717]' : 'text-[#a3a3a3]'}
                `} />
              </motion.div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-[#525252] mt-2 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftColumn = faqs.slice(0, 4);
  const rightColumn = faqs.slice(4, 8);

  return (
    <section id="faq" className="py-16 md:py-20 bg-[#fafafa] overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-32">
              <p className="text-[#171717] font-semibold uppercase tracking-wider text-sm mb-2">
                FAQ
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#171717] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[#525252] text-sm mb-6">
                Quick answers to common roofing questions. Can't find what you're looking for?
              </p>

              {/* CTA */}
              <motion.a
                href="tel:806-808-1317"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171717] text-white text-sm font-semibold rounded-lg hover:bg-[#262626] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                Call 806-808-1317
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - FAQ Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Left Column */}
              <div className="space-y-3">
                {leftColumn.map((faq, index) => (
                  <FAQItem
                    key={index}
                    faq={faq}
                    index={index}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                {rightColumn.map((faq, index) => (
                  <FAQItem
                    key={index + 4}
                    faq={faq}
                    index={index + 4}
                    isOpen={openIndex === index + 4}
                    onToggle={() => setOpenIndex(openIndex === index + 4 ? null : index + 4)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
