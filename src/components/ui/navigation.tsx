"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, ChevronDown } from "lucide-react";

const services = [
  { name: "Emergency Roof Services", href: "/services/emergency-roof-services" },
  { name: "Storm Damage", href: "/services/storm-damage" },
  { name: "Insurance Claim Assistance", href: "/services/insurance-claim-assistance" },
  { name: "Roof Inspections", href: "/services/roof-inspections" },
  { name: "Roof Premium", href: "/services/roof-premium" },
  { name: "Roof Replacement", href: "/services/roof-replacement" },
  { name: "Roof Repair", href: "/services/roof-repair" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://lirp.cdn-website.com/ae93590e/dms3rep/multi/opt/Rain-Roofing-Company-Logo-2a6c5680-1920w.png"
              alt="Rain Roofing Pros"
              width={180}
              height={50}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white/90 hover:text-[#3b82f6] transition-colors font-medium"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center text-white/90 hover:text-[#3b82f6] transition-colors font-medium">
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-[#262626] border border-[#404040] rounded-lg shadow-xl shadow-black/30 py-2 min-w-[240px]">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-white/80 hover:text-[#3b82f6] hover:bg-[#404040] transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/residential-roofing"
              className="text-white/90 hover:text-[#3b82f6] transition-colors font-medium"
            >
              Residential Roofing
            </Link>

            <Link
              href="/contact"
              className="text-white/90 hover:text-[#3b82f6] transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:806-808-1317"
              className="flex items-center text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              806-808-1317
            </a>
            <Button asChild className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white">
              <Link href="/contact">Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1a1a1a] border-[#404040] w-[300px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <Image
                    src="https://lirp.cdn-website.com/ae93590e/dms3rep/multi/opt/Rain-Roofing-Company-Logo-2a6c5680-1920w.png"
                    alt="Rain Roofing Pros"
                    width={140}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>

                <div className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="text-white/90 hover:text-[#3b82f6] transition-colors text-lg font-medium py-2"
                  >
                    Home
                  </Link>

                  <div className="border-t border-[#404040] pt-4">
                    <p className="text-[#3b82f6] font-semibold mb-2">Services</p>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-white/70 hover:text-[#3b82f6] transition-colors py-2 pl-4"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/residential-roofing"
                    onClick={() => setMobileOpen(false)}
                    className="text-white/90 hover:text-[#3b82f6] transition-colors text-lg font-medium py-2 border-t border-[#404040] pt-4"
                  >
                    Residential Roofing
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="text-white/90 hover:text-[#3b82f6] transition-colors text-lg font-medium py-2"
                  >
                    Contact
                  </Link>
                </div>

                <div className="mt-auto pt-8 space-y-4">
                  <a
                    href="tel:806-808-1317"
                    className="flex items-center justify-center text-[#3b82f6] hover:text-[#60a5fa] transition-colors text-lg"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    806-808-1317
                  </a>
                  <Button asChild className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white">
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>Get Free Estimate</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
