"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

interface ServicePageHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export function ServicePageHero({ title, subtitle, description }: ServicePageHeroProps) {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-[#1a1a1a] via-[#262626] to-[#1a1a1a] relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="service-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(37,99,235,0.3)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#service-grid)" />
        </svg>
      </div>

      {/* Blue accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2563eb]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="text-[#3b82f6] font-semibold uppercase tracking-wider mb-4">{subtitle}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-[#a3a3a3] mb-8 leading-relaxed">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white">
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <a href="tel:806-808-1317">
                <Phone className="mr-2 h-4 w-4" />
                Call 806-808-1317
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
