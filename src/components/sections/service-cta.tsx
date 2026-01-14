"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export function ServiceCTA() {
  return (
    <section className="py-16 bg-[#2563eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-2">Ready to Get Started?</h2>
            <p className="text-white/90 text-lg">Get your free inspection and quote today!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-[#2563eb] hover:bg-gray-100">
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Inspection
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:806-808-1317">
                <Phone className="mr-2 h-5 w-5" />
                806-808-1317
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
