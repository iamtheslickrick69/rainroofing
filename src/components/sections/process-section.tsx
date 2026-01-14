"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, ClipboardCheck, Hammer, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Call or Fill out the Form",
    description: "Call 806-808-1317 or fill out our quick form to provide info to our team to reach out to you.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "We Review Your Roof",
    description: "We will come to you and provide a premier analysis. We then review multiple options for a safe and secure roof with you.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Project Begins",
    description: "Official start of your project begins and you will receive consistent updates from our team throughout the process.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Final Roof Review",
    description: "Your roof is finished and we will do an in-person review upon request. Get peace of mind with our quality guarantee.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#3b82f6] font-semibold uppercase tracking-wider mb-2"
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

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line - Desktop */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#2563eb] to-transparent origin-left"
                />
              )}

              {/* Arrow indicator for desktop */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                  className="hidden lg:flex absolute top-10 right-0 translate-x-1/2 z-10"
                >
                  <ArrowRight className="w-4 h-4 text-[#2563eb]" />
                </motion.div>
              )}

              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#262626] border border-[#404040] rounded-xl p-6 hover:border-[#2563eb] transition-colors group cursor-pointer h-full"
              >
                {/* Step Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring" }}
                  className="absolute -top-4 left-6 bg-[#2563eb] text-white text-sm font-bold px-3 py-1 rounded-full"
                >
                  {step.number}
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mb-4 mt-2 group-hover:bg-[#2563eb]/20 transition-colors"
                >
                  <step.icon className="h-6 w-6 text-[#3b82f6]" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#a3a3a3] text-sm">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[#60a5fa] mb-4"
          >
            Ready to get started?
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:806-808-1317"
            className="inline-flex items-center px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call 806-808-1317 for Free Estimate
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
