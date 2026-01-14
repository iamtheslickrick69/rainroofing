"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  const services = [
    { title: "Roof Replacement", href: "/services/roof-replacement" },
    { title: "Roof Repair", href: "/services/roof-repair" },
    { title: "Storm Damage", href: "/services/storm-damage" },
    { title: "Emergency Services", href: "/services/emergency-roof-services" },
    { title: "Roof Inspections", href: "/services/roof-inspections" },
    { title: "Insurance Claims", href: "/services/insurance-claim-assistance" },
    { title: "Roof Premium", href: "/services/roof-premium" },
  ];

  const roofTypes = [
    { title: "Asphalt Shingles", href: "/#roof-types" },
    { title: "Metal Roofing", href: "/#roof-types" },
    { title: "Tile Roofing", href: "/#roof-types" },
    { title: "Flat Roofing", href: "/#roof-types" },
    { title: "Solar Roofing", href: "/#roof-types" },
    { title: "New Construction", href: "/#roof-types" },
  ];

  const quickLinks = [
    { title: "Home", href: "/#hero" },
    { title: "Our Process", href: "/#process" },
    { title: "Why Choose Us", href: "/#why-us" },
    { title: "Reviews", href: "/#reviews" },
    { title: "FAQ", href: "/#faq" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/#contact" },
  ];

  const serviceAreas = [
    "Lubbock",
    "Amarillo",
    "Midland",
    "Odessa",
    "Abilene",
    "Wolfforth",
    "Shallowater",
  ];

  return (
    <footer className="bg-[#0f0f0f] border-t border-white/5">
      {/* CTA Banner */}
      <div
        className="py-8"
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #0f172a 50%, #1e293b 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Ready to Protect Your Home?
              </h3>
              <p className="text-[#a3a3a3] text-sm mt-1">
                Get a free roof inspection and estimate today.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:806-808-1317"
                className="inline-flex items-center px-6 py-3 bg-[#292929] hover:bg-[#333333] text-white font-semibold rounded-full transition-colors border border-white/10"
              >
                <Phone className="h-4 w-4 mr-2" />
                806-808-1317
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center px-6 py-3 bg-white hover:bg-white/90 text-[#171717] font-semibold rounded-full transition-colors"
              >
                Get Free Estimate
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand Column - spans 2 on lg */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="https://lirp.cdn-website.com/ae93590e/dms3rep/multi/opt/Rain-Roofing-Company-Logo-2a6c5680-1920w.png"
                alt="Rain Roofing"
                width={160}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-[#737373] text-sm leading-relaxed mb-6 max-w-xs">
              West Texas's trusted roofing experts. Quality repairs, replacements,
              and emergency services with honest pricing.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:806-808-1317"
                className="flex items-center gap-3 text-white hover:text-white/80 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-white/15 flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-semibold">806-808-1317</span>
              </a>
              <a
                href="mailto:gavin@rainroofingpros.com"
                className="flex items-center gap-3 text-[#737373] hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">gavin@rainroofingpros.com</span>
              </a>
              <div className="flex items-center gap-3 text-[#737373]">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">5716 40th St, Lubbock, TX 79407</span>
              </div>
              <div className="flex items-center gap-3 text-[#737373]">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-sm">24/7 Emergency Service</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61574852522218"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#737373] hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/rainroofing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#737373] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map(({ href, title }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-sm text-[#737373] hover:text-white transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Roof Types Column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Roof Types
            </h3>
            <ul className="space-y-2.5">
              {roofTypes.map(({ href, title }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-sm text-[#737373] hover:text-white transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ href, title }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-sm text-[#737373] hover:text-white transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-sm text-[#737373]">{area}, TX</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-[#525252]">
              © {year} Rain Roofing. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-[#525252] hover:text-[#737373] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/tos"
                className="text-sm text-[#525252] hover:text-[#737373] transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-sm text-[#404040]">
                Powered by{" "}
                <a
                  href="https://webpro.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#525252] transition-colors"
                >
                  WebPro.ai
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
