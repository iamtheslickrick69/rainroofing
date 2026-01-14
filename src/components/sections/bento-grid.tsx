'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Shield, Star, Award, BadgeCheck, Zap, Users, Home, ChevronRight } from 'lucide-react'
import * as React from "react"

// CDN Base URL
const CDN = "https://pub-82e4016d6e17421ebc1eaa174644bee3.r2.dev"

// Project images
const projectImages = {
  newHome: `${CDN}/000NEWHOME.jpg`,
  barn: `${CDN}/000barn.jpg`,
  metal: `${CDN}/000metalrof.jpg`,
  shingle: `${CDN}/000shingle.jpg`,
  spanish: `${CDN}/000spanish.jpg`,
  working: `${CDN}/000working.jpg`,
  modern: `${CDN}/000modern.jpg`,
  solar: `${CDN}/0000solar.jpg`,
}

// Service area cities with approximate Texas coordinates
const serviceAreas = [
  { name: 'Lubbock', x: 50, y: 45, primary: true },
  { name: 'Levelland', x: 42, y: 43 },
  { name: 'Plainview', x: 55, y: 32 },
  { name: 'Brownfield', x: 43, y: 55 },
  { name: 'Slaton', x: 55, y: 50 },
  { name: 'Wolfforth', x: 46, y: 48 },
]

// Real testimonials with ratings
const testimonials = [
  {
    name: "James R.",
    location: "Lubbock, TX",
    rating: 5,
    content: "Rain Roofing made the whole process easy! Professional, honest, and the roof looks amazing.",
    platform: "Google",
  },
  {
    name: "Sherry May",
    location: "Wolfforth, TX",
    rating: 5,
    content: "Great service and fair pricing! Gavin was such a big help with everything.",
    platform: "Google",
  },
  {
    name: "Emily T.",
    location: "Lubbock, TX",
    rating: 5,
    content: "They handled everything, including my insurance claim. Couldn't be happier!",
    platform: "Yelp",
  },
]

// Roof types for gallery
const roofTypes = [
  { name: "Shingle", image: projectImages.shingle, href: "/services/roof-replacement" },
  { name: "Metal", image: projectImages.metal, href: "/services/roof-premium" },
  { name: "Tile", image: projectImages.spanish, href: "/services/roof-premium" },
  { name: "Solar", image: projectImages.solar, href: "/services/roof-premium" },
]

// Trust badges
const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "5-Year Warranty" },
  { icon: BadgeCheck, label: "BBB Accredited" },
  { icon: Zap, label: "Same-Day Estimates" },
]

export function BentoGrid() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563eb]/10 text-[#2563eb] text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            Trusted by 500+ West Texas Homeowners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#171717] mb-4">
            Why Choose <span className="text-[#2563eb]">Rain Roofing</span>?
          </h2>
          <p className="text-lg text-[#525252] max-w-2xl mx-auto">
            Local expertise, quality craftsmanship, and unmatched customer service since 2019.
          </p>
        </div>

        {/* Bento Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

          {/* 1. FEATURED PROJECT IMAGE - Spans 5 columns */}
          <div className="md:col-span-5 relative rounded-3xl overflow-hidden h-[400px] group">
            <Image
              src={projectImages.newHome}
              alt="New home roofing project in Lubbock"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#2563eb] text-white text-xs font-medium mb-3">
                <Star className="w-3 h-3 fill-current" /> Featured Project
              </span>
              <h3 className="text-2xl font-bold text-white mb-1">New Construction</h3>
              <p className="text-white/80 text-sm">Complete roofing for new builds in West Texas</p>
            </div>
          </div>

          {/* 2. STATS CARD - Spans 7 columns */}
          <div className="md:col-span-7 bg-[#1a1a1a] rounded-3xl p-8 md:p-10 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full">
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              </svg>
            </div>

            <div className="relative z-10">
              <span className="text-[#2563eb] text-sm font-semibold uppercase tracking-wider">Our Track Record</span>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center md:text-left">
                  <p className="text-5xl md:text-7xl font-bold text-white">500<span className="text-[#2563eb]">+</span></p>
                  <p className="text-[#a3a3a3] mt-2 text-sm md:text-base">Roofs Completed</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-5xl md:text-7xl font-bold text-white">5.0</p>
                  <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                    ))}
                  </div>
                  <p className="text-[#a3a3a3] text-sm md:text-base">Rating</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-5xl md:text-7xl font-bold text-white">24<span className="text-[#2563eb]">hr</span></p>
                  <p className="text-[#a3a3a3] mt-2 text-sm md:text-base">Response Time</p>
                </div>
              </div>

              {/* Mini testimonial preview */}
              <div className="mt-10 pt-8 border-t border-[#404040]">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] border-2 border-[#1a1a1a] flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white font-medium">Trusted by homeowners</p>
                    <p className="text-[#a3a3a3] text-sm">across Lubbock & West Texas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. ROOF TYPES GALLERY - Spans 8 columns */}
          <div className="md:col-span-8 bg-white rounded-3xl p-6 md:p-8 border border-[#e5e5e5]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[#2563eb] text-sm font-semibold uppercase tracking-wider">Our Expertise</span>
                <h3 className="text-2xl font-bold text-[#171717] mt-1">
                  All Roof Types
                </h3>
              </div>
              <Link href="/residential-roofing" className="text-[#2563eb] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {roofTypes.map((type, i) => (
                <Link
                  key={i}
                  href={type.href}
                  className="relative h-32 md:h-40 rounded-2xl overflow-hidden group"
                >
                  <Image
                    src={type.image}
                    alt={`${type.name} roofing`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white font-semibold text-sm">
                    {type.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* 4. CTA CARD - Spans 4 columns */}
          <div className="md:col-span-4 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-3xl p-6 md:p-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Home className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Free Roof Inspection
              </h3>
              <p className="text-white/80 mb-6 flex-grow">
                Get a thorough assessment with no cost and no obligation.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-white text-[#2563eb] font-semibold rounded-xl hover:bg-[#f0f0f0] transition-colors"
              >
                Schedule Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* 5. WORKING CREW IMAGE - Spans 4 columns */}
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden h-[280px] group">
            <Image
              src={projectImages.working}
              alt="Rain Roofing crew working on shingle installation"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-1">Expert Installation</h3>
              <p className="text-white/80 text-sm">Skilled crews with years of experience</p>
            </div>
          </div>

          {/* 6. TESTIMONIALS - Spans 8 columns */}
          <div className="md:col-span-8 bg-[#1a1a1a] rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[#2563eb] text-sm font-semibold uppercase tracking-wider">Reviews</span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  What Customers Say
                </h3>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#262626] rounded-full">
                <span className="text-sm font-semibold text-white">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#fbbf24] text-[#fbbf24]" />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#262626] border border-[#404040] hover:border-[#2563eb]/50 transition-all"
                >
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(item.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                    ))}
                  </div>

                  <p className="text-[#e5e5e5] text-sm leading-relaxed mb-4">
                    &ldquo;{item.content}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-3 border-t border-[#404040]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center text-white font-bold text-sm">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm flex items-center gap-1">
                        {item.name}
                        <BadgeCheck className="w-4 h-4 text-[#2563eb]" />
                      </p>
                      <p className="text-xs text-[#a3a3a3]">{item.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. TEXAS MAP - Spans 4 columns */}
          <div className="md:col-span-4 bg-[#1a1a1a] rounded-3xl p-6 relative overflow-hidden">
            <span className="text-[#2563eb] text-sm font-semibold uppercase tracking-wider">Service Area</span>
            <h3 className="text-xl font-bold text-white mt-2 mb-4">
              Serving West Texas
            </h3>

            <div className="relative">
              <TexasMapSVG />
              {/* City markers */}
              {serviceAreas.map((city, i) => (
                <div
                  key={i}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                >
                  {city.primary ? (
                    <div className="relative">
                      <div className="w-3 h-3 bg-[#2563eb] rounded-full animate-ping absolute" />
                      <div className="w-3 h-3 bg-[#2563eb] rounded-full relative z-10 border-2 border-white" />
                    </div>
                  ) : (
                    <div className="w-2 h-2 bg-[#60a5fa] rounded-full border border-white/50" />
                  )}
                </div>
              ))}
            </div>

            {/* Service area tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {serviceAreas.map((city, i) => (
                <span
                  key={i}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    city.primary
                      ? 'bg-[#2563eb] text-white'
                      : 'bg-[#262626] text-[#a3a3a3]'
                  }`}
                >
                  {city.name}
                </span>
              ))}
            </div>
          </div>

          {/* 8. TRUST BADGES - Full width */}
          <div className="md:col-span-12 bg-white rounded-3xl p-6 md:p-8 border border-[#e5e5e5]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#fafafa] transition-colors">
                  <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <badge.icon className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <span className="font-semibold text-[#171717]">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 9. EMERGENCY CTA - Spans 6 columns */}
          <div className="md:col-span-6 bg-[#171717] rounded-3xl p-6 md:p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">24/7 Emergency</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Storm Damage? We&apos;re Here.
                </h3>
                <p className="text-[#a3a3a3]">
                  Fast response when you need us most.
                </p>
              </div>
              <a
                href="tel:806-808-1317"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#171717] font-bold rounded-xl hover:bg-[#f0f0f0] transition-colors whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                806-808-1317
              </a>
            </div>
          </div>

          {/* 10. BARN AERIAL - Spans 6 columns */}
          <div className="md:col-span-6 relative rounded-3xl overflow-hidden h-[200px] group">
            <Image
              src={projectImages.barn}
              alt="Aerial view of barn roofing project"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-1">Commercial & Agricultural</h3>
              <p className="text-white/80 text-sm">Barns, warehouses, and large structures</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// Texas Map SVG Component
function TexasMapSVG() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-auto"
      style={{ maxHeight: '160px' }}
    >
      <defs>
        <radialGradient id="texasGradient" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.02" />
        </radialGradient>
      </defs>
      <path
        d="M 20 10 L 65 10 L 65 25 L 95 25 L 95 55 L 75 70 L 60 95 L 45 75 L 25 75 L 20 60 L 5 55 L 5 25 L 20 10 Z"
        fill="url(#texasGradient)"
        stroke="#2563eb"
        strokeWidth="0.5"
        opacity="0.5"
      />
      <g stroke="#2563eb" strokeWidth="0.2" opacity="0.1">
        <line x1="10" y1="30" x2="90" y2="30" />
        <line x1="10" y1="50" x2="90" y2="50" />
        <line x1="30" y1="10" x2="30" y2="75" />
        <line x1="50" y1="10" x2="50" y2="90" />
      </g>
    </svg>
  )
}
