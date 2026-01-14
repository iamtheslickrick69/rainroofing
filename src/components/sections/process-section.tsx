"use client";

import React from "react";
import { Phone, ClipboardCheck, Hammer, CheckCircle } from "lucide-react";

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
    <section className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#3b82f6] font-semibold uppercase tracking-wider mb-2">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Proven Roofing Process
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto">
            From your first call to the final inspection, we keep you informed every step of the way.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#2563eb] to-transparent"></div>
              )}

              <div className="relative bg-[#262626] border border-[#404040] rounded-xl p-6 hover:border-[#2563eb] transition-colors group">
                {/* Step Number */}
                <div className="absolute -top-4 left-6 bg-[#2563eb] text-white text-sm font-bold px-3 py-1 rounded-full">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mb-4 mt-2 group-hover:bg-[#2563eb]/20 transition-colors">
                  <step.icon className="h-6 w-6 text-[#3b82f6]" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[#a3a3a3] text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[#60a5fa] mb-4">Ready to get started?</p>
          <a
            href="tel:806-808-1317"
            className="inline-flex items-center px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call 806-808-1317 for Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
