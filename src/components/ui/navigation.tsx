"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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

const navLinks = [
  { name: "Home", href: "/#hero" },
  { name: "Roof Types", href: "/#roof-types" },
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Reviews", href: "/#reviews" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
  { name: "Blog", href: "/blog" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's an anchor link and we're on the homepage, smooth scroll
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl ${
          isScrolled
            ? "bg-[#292929]/95 backdrop-blur-md shadow-lg shadow-black/20 border border-white/10"
            : "bg-[#292929]/80 backdrop-blur-sm border border-white/5"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://lirp.cdn-website.com/ae93590e/dms3rep/multi/opt/Rain-Roofing-Company-Logo-2a6c5680-1920w.png"
              alt="Rain Roofing Pros"
              width={180}
              height={50}
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.slice(0, 7).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm"
              >
                {link.name}
              </Link>
            ))}

            {/* Blog - separate page */}
            <Link
              href="/blog"
              className="text-white/90 hover:text-white transition-colors font-medium text-sm"
            >
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:806-808-1317"
              className="flex items-center text-white/70 hover:text-white transition-colors text-sm"
            >
              <Phone className="h-4 w-4 mr-2" />
              806-808-1317
            </a>
            <Button asChild className="bg-white hover:bg-white/90 text-[#171717] font-semibold text-sm px-4 h-9">
              <Link href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#292929] border-[#404040] w-[300px]">
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

                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-white/90 hover:text-white transition-colors text-lg font-medium py-2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto pt-8 space-y-4">
                  <a
                    href="tel:806-808-1317"
                    className="flex items-center justify-center text-white/70 hover:text-white transition-colors text-lg"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    806-808-1317
                  </a>
                  <Button asChild className="w-full bg-white hover:bg-white/90 text-[#171717] font-semibold">
                    <Link href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>Get Free Estimate</Link>
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
