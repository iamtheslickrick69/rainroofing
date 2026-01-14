"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow";
import {
  AlertTriangle,
  CloudRain,
  FileCheck,
  Search,
  Crown,
  Home,
  Wrench,
  ArrowRight,
  Phone,
} from "lucide-react";

const CDN = "https://pub-82e4016d6e17421ebc1eaa174644bee3.r2.dev";

const services = [
  {
    id: "roof-replacement",
    icon: Home,
    title: "Roof Replacement",
    description: "We inspect your roof and help you choose the best materials for your home. Our team removes the old roof and installs a durable new one built to handle Lubbock's extreme heat, wind, and storms.",
    href: "/services/roof-replacement",
    image: `${CDN}/000shingle.jpg`,
    color: "#2563eb",
  },
  {
    id: "storm-damage",
    icon: CloudRain,
    title: "Storm Damage",
    description: "When storms hit, they can leave your roof vulnerable. We address wind, hail, and heavy rain damage head-on, ensuring your home is restored promptly.",
    href: "/services/storm-damage",
    image: `${CDN}/000working.jpg`,
    color: "#0ea5e9",
  },
  {
    id: "emergency-services",
    icon: AlertTriangle,
    title: "Emergency Services",
    description: "We're ready to help fast when storms, hail, or heavy rain damage your roof. Our team makes quick fixes to stop leaks and prevent further damage. 24/7 availability.",
    href: "/services/emergency-roof-services",
    image: `${CDN}/000barn.jpg`,
    color: "#ef4444",
  },
  {
    id: "roof-inspections",
    icon: Search,
    title: "Roof Inspections",
    description: "Regular inspections help prevent costly damage. We check for missing shingles, leaks, and signs of wear, then provide a detailed report with recommendations.",
    href: "/services/roof-inspections",
    image: `${CDN}/000NEWHOME.jpg`,
    color: "#f59e0b",
  },
  {
    id: "insurance-claims",
    icon: FileCheck,
    title: "Insurance Claims",
    description: "We help document roof damage with photos and detailed reports. Our team guides you through your policy coverage and communicates with your insurance adjuster.",
    href: "/services/insurance-claim-assistance",
    image: `${CDN}/000modern.jpg`,
    color: "#8b5cf6",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#f5f5f5] to-white overflow-hidden scroll-mt-24">
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
            className="text-[#2563eb] font-semibold uppercase tracking-wider mb-2"
          >
            Our Services
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4">
            Comprehensive Roofing Solutions
          </h2>
          <p className="text-[#525252] max-w-2xl mx-auto">
            From emergency repairs to full replacements, we handle all your roofing needs with quality craftsmanship and materials built for West Texas weather.
          </p>
        </motion.div>

        {/* Desktop Animated Slideshow */}
        <div className="hidden lg:block">
          <HoverSlider className="min-h-[500px] place-content-center">
            <div className="flex flex-wrap items-center justify-between gap-12">
              {/* Left Side - Service Titles */}
              <div className="flex flex-col space-y-4">
                {services.map((service, index) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group flex items-center gap-4"
                  >
                    <TextStaggerHover
                      index={index}
                      className="cursor-pointer text-4xl xl:text-5xl font-bold uppercase tracking-tight text-[#171717] hover:text-[#2563eb] transition-colors"
                      text={service.title}
                    />
                    <ArrowRight className="w-6 h-6 text-[#2563eb] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </Link>
                ))}
              </div>

              {/* Right Side - Image Slideshow */}
              <HoverSliderImageWrap className="w-[500px] h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                {services.map((service, index) => (
                  <div key={service.id}>
                    <HoverSliderImage
                      index={index}
                      imageUrl={service.image}
                      src={service.image}
                      alt={service.title}
                      className="size-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                ))}
              </HoverSliderImageWrap>
            </div>
          </HoverSlider>
        </div>

        {/* Mobile/Tablet Services Grid */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-white border border-[#e5e5e5] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#2563eb]/10 transition-all duration-300"
            >
              {/* Image Background */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
              </div>

              {/* Content */}
              <div className="p-5 pt-0 -mt-6 relative">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  style={{ backgroundColor: `${service.color}15` }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 border-4 border-white"
                >
                  <service.icon style={{ color: service.color }} className="h-6 w-6" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#171717] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#525252] text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-[#2563eb] hover:text-[#1d4ed8] font-medium text-sm group-hover:underline transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Roof Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="mt-16 bg-[#292929] rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -right-1/2 w-full h-full"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#2563eb]/20 to-transparent rounded-full" />
            </motion.div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full flex items-center justify-center shadow-lg shadow-[#fbbf24]/30"
              >
                <Crown className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Roof Premium Membership
                </h3>
                <p className="text-[#a3a3a3]">
                  Priority service, annual inspections, and free roof cleaning – Only 150 spots!
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:806-808-1317"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
                806-808-1317
              </motion.a>
              <Button asChild className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6">
                <Link href="/services/roof-premium" className="inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
