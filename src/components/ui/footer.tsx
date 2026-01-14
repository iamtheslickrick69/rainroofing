"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  const services = [
    { title: "Roof Repair", href: "/services/roof-repair" },
    { title: "Roof Replacement", href: "/services/roof-replacement" },
    { title: "Storm Damage", href: "/services/storm-damage" },
    { title: "Emergency Services", href: "/services/emergency-roof-services" },
    { title: "Roof Inspections", href: "/services/roof-inspections" },
    { title: "Insurance Claims", href: "/services/insurance-claim-assistance" },
    { title: "Roof Premium", href: "/services/roof-premium" },
  ];

  const company = [
    { title: "Home", href: "/" },
    { title: "Residential Roofing", href: "/residential-roofing" },
    { title: "Contact Us", href: "/contact" },
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/tos" },
  ];

  const socialLinks = [
    {
      icon: <FacebookIcon className="size-4" />,
      link: "https://www.facebook.com/profile.php?id=61574852522218",
    },
    {
      icon: <InstagramIcon className="size-4" />,
      link: "https://www.instagram.com/rainroofing/",
    },
  ];

  return (
    <footer className="relative bg-[#fafafa]">
      {/* CTA Banner */}
      <div className="bg-[#2563eb]">
        <div className="mx-auto max-w-5xl px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white">Responsive & Reliable</h3>
              <p className="text-white/90 text-sm">We are available for all your roofing needs!</p>
            </div>
            <a
              href="tel:806-808-1317"
              className="inline-flex items-center px-5 py-2.5 bg-white text-[#2563eb] font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call 806-808-1317
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-5xl md:border-x border-[#e5e5e5]">
        <div className="absolute inset-x-0 h-px w-full bg-[#e5e5e5]" />

        <div className="grid max-w-5xl grid-cols-6 gap-6 p-6 md:p-8">
          {/* Brand Column */}
          <div className="col-span-6 flex flex-col gap-4 md:col-span-3">
            <Link href="/" className="w-max">
              <Image
                src="https://lirp.cdn-website.com/ae93590e/dms3rep/multi/opt/Rain-Roofing-Company-Logo-2a6c5680-1920w.png"
                alt="Rain Roofing Pros"
                width={140}
                height={40}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-[#2563eb] font-semibold text-sm">
              Reliable. Strong. Built for West Texas.
            </p>
            <p className="text-muted-foreground max-w-sm text-sm text-balance">
              Your trusted roofing experts in Lubbock and West Texas. Quality craftsmanship and durable materials to keep your home safe.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="tel:806-808-1317" className="flex items-center gap-2 hover:text-[#2563eb] transition-colors">
                <Phone className="size-4" />
                806-808-1317
              </a>
              <a href="mailto:gavin@rainroofingpros.com" className="flex items-center gap-2 hover:text-[#2563eb] transition-colors">
                <Mail className="size-4" />
                gavin@rainroofingpros.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="size-4" />
                5716 40th St, Lubbock, TX 79407
              </div>
              <div className="flex items-start gap-2">
                <Clock className="size-4 mt-0.5" />
                <span>Mon-Sat: 9am-7pm | Sun: 9am-2pm</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2 mt-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="hover:bg-[#2563eb]/10 hover:border-[#2563eb] rounded-md border border-[#e5e5e5] p-2 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="col-span-3 w-full md:col-span-2">
            <span className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wider">
              Services
            </span>
            <div className="flex flex-col gap-1 mt-2">
              {services.map(({ href, title }, i) => (
                <Link
                  key={i}
                  className="w-max py-1 text-sm text-foreground/80 duration-200 hover:text-[#2563eb] hover:underline"
                  href={href}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wider">
              Company
            </span>
            <div className="flex flex-col gap-1 mt-2">
              {company.map(({ href, title }, i) => (
                <Link
                  key={i}
                  className="w-max py-1 text-sm text-foreground/80 duration-200 hover:text-[#2563eb] hover:underline"
                  href={href}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="h-px w-full bg-[#e5e5e5]" />
        <div className="flex max-w-5xl flex-col md:flex-row justify-between gap-2 px-6 md:px-8 py-4">
          <p className="text-muted-foreground text-center md:text-left text-sm">
            © {year} Rain Roofing Pros. All rights reserved.
          </p>
          <p className="text-muted-foreground text-center md:text-right text-sm">
            Powered by{" "}
            <a
              href="https://webpro.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2563eb] transition-colors"
            >
              WebPro.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
