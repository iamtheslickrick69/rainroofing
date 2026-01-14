"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  CloudRain,
  FileCheck,
  Search,
  Crown,
  Home,
  Wrench,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Roof Replacement",
    description: "We inspect your roof and help you choose the best materials for your home. Our team removes the old roof and installs a durable new one built to handle Lubbock's extreme heat, wind, and storms.",
    href: "/services/roof-replacement",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Roof Services",
    description: "We're ready to help fast when storms, hail, or heavy rain damage your roof. Our team makes quick fixes to stop leaks and prevent further damage. 24/7 availability.",
    href: "/services/emergency-roof-services",
  },
  {
    icon: Wrench,
    title: "Roof Repair",
    description: "We quickly fix damage from storms, leaks, and missing shingles. Our team uses tough, weather-resistant materials that blend seamlessly with your existing roof.",
    href: "/services/roof-repair",
  },
  {
    icon: FileCheck,
    title: "Insurance Claim Assistance",
    description: "We help document roof damage with photos and detailed reports. Our team guides you through your policy coverage and communicates with your insurance adjuster.",
    href: "/services/insurance-claim-assistance",
  },
  {
    icon: Search,
    title: "Roof Inspections",
    description: "Regular inspections help prevent costly damage. We check for missing shingles, leaks, and signs of wear, then provide a detailed report with recommendations.",
    href: "/services/roof-inspections",
  },
  {
    icon: CloudRain,
    title: "Storm Damage",
    description: "When storms hit, they can leave your roof vulnerable. We address wind, hail, and heavy rain damage head-on, ensuring your home is restored promptly.",
    href: "/services/storm-damage",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f5f5f5] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#2563eb] font-semibold uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4">
            Comprehensive Roofing Solutions
          </h2>
          <p className="text-[#525252] max-w-2xl mx-auto">
            From emergency repairs to full replacements, we handle all your roofing needs with quality craftsmanship and materials built for West Texas weather.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.href}
              className="group bg-white border border-[#e5e5e5] hover:border-[#2563eb] hover:shadow-xl hover:shadow-[#2563eb]/10 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#2563eb] transition-colors">
                  <service.icon className="h-6 w-6 text-[#2563eb] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-[#171717] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#525252] text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-[#2563eb] hover:text-[#1d4ed8] font-medium text-sm group-hover:underline transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Roof Premium CTA */}
        <div className="mt-12 bg-[#1a1a1a] rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Roof Premium Membership
                </h3>
                <p className="text-[#a3a3a3]">
                  Priority service, annual inspections, and free roof cleaning – Only 150 spots!
                </p>
              </div>
            </div>
            <Button asChild className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6">
              <Link href="/services/roof-premium">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
