"use client";

import React from "react";
import { Shield, BadgeCheck, DollarSign, Headphones } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Top-Quality Materials",
    description: "Built for West Texas weather – extreme heat, wind, and storms.",
  },
  {
    icon: BadgeCheck,
    title: "Free Estimates & Inspections",
    description: "No obligation, thorough assessments of your roofing needs.",
  },
  {
    icon: DollarSign,
    title: "Fair Pricing",
    description: "Competitive rates with no upfront payments required.",
  },
  {
    icon: Headphones,
    title: "Insurance Assistance",
    description: "We work with insurance companies to make the process easy.",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#2563eb] font-semibold uppercase tracking-wider mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4">
            Your West Texas Roofing Contractors
          </h2>
          <p className="text-[#525252] max-w-2xl mx-auto">
            When it comes to protecting your home, you need a roofer you can trust. At Rain Roofing, we deliver quality and reliability.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-[#2563eb]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2563eb] transition-colors">
                <point.icon className="h-8 w-8 text-[#2563eb] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-[#171717] mb-2">
                {point.title}
              </h3>
              <p className="text-[#525252] text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-[#1a1a1a] rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#3b82f6]">24/7</p>
            <p className="text-[#a3a3a3] mt-1">Emergency Service</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#3b82f6]">50+</p>
            <p className="text-[#a3a3a3] mt-1">5-Star Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#3b82f6]">100%</p>
            <p className="text-[#a3a3a3] mt-1">Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#3b82f6]">Free</p>
            <p className="text-[#a3a3a3] mt-1">Estimates</p>
          </div>
        </div>
      </div>
    </section>
  );
}
