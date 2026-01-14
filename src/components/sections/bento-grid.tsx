'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Shield, Star, Clock, CheckCircle, Award, BadgeCheck, Zap, Users, Home } from 'lucide-react'
import * as React from "react"

// Service area cities with approximate Texas coordinates
const serviceAreas = [
  { name: 'Lubbock', x: 50, y: 45, primary: true },
  { name: 'Levelland', x: 42, y: 43 },
  { name: 'Plainview', x: 55, y: 32 },
  { name: 'Brownfield', x: 43, y: 55 },
  { name: 'Slaton', x: 55, y: 50 },
  { name: 'Wolfforth', x: 46, y: 48 },
  { name: 'Littlefield', x: 48, y: 35 },
  { name: 'Shallowater', x: 48, y: 42 },
]

// Real testimonials with ratings
const testimonials = [
  {
    name: "James R.",
    location: "Lubbock, TX",
    rating: 5,
    content: "Rain Roofing made the whole process easy! Professional, honest, and the roof looks amazing. Highly recommend!",
    platform: "Google",
    image: "/testimonials/james.jpg"
  },
  {
    name: "Sherry May",
    location: "Wolfforth, TX",
    rating: 5,
    content: "Great service and fair pricing! Gavin was such a big help with everything. They cleaned up perfectly after.",
    platform: "Google",
    image: "/testimonials/sherry.jpg"
  },
  {
    name: "Emily T.",
    location: "Lubbock, TX",
    rating: 5,
    content: "They handled everything, including my insurance claim. Couldn't be happier with the results!",
    platform: "Yelp",
    image: "/testimonials/emily.jpg"
  },
]

// Trust badges/certifications
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

          {/* 1. LARGE STATS CARD - Spans 7 columns */}
          <div className="md:col-span-7 bg-[#1a1a1a] rounded-3xl p-8 md:p-10 relative overflow-hidden group">
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

          {/* 2. TEXAS MAP - Spans 5 columns */}
          <div className="md:col-span-5 bg-[#1a1a1a] rounded-3xl p-6 md:p-8 relative overflow-hidden">
            <span className="text-[#2563eb] text-sm font-semibold uppercase tracking-wider">Service Area</span>
            <h3 className="text-2xl font-bold text-white mt-2">
              Proudly Serving West Texas
            </h3>

            <div className="relative mt-6">
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
                      <div className="w-4 h-4 bg-[#2563eb] rounded-full animate-ping absolute" />
                      <div className="w-4 h-4 bg-[#2563eb] rounded-full relative z-10 border-2 border-white" />
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white text-xs font-bold whitespace-nowrap bg-[#2563eb] px-2 py-0.5 rounded">
                        {city.name}
                      </span>
                    </div>
                  ) : (
                    <div className="group/marker relative cursor-pointer">
                      <div className="w-2.5 h-2.5 bg-[#60a5fa] rounded-full border border-white/50 group-hover/marker:scale-150 transition-transform" />
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[#a3a3a3] text-[10px] whitespace-nowrap opacity-0 group-hover/marker:opacity-100 transition-opacity">
                        {city.name}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Service area tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {serviceAreas.slice(0, 6).map((city, i) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    city.primary
                      ? 'bg-[#2563eb] text-white'
                      : 'bg-[#262626] text-[#a3a3a3] hover:bg-[#404040]'
                  }`}
                >
                  {city.name}
                </span>
              ))}
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#262626] text-[#2563eb]">
                +More
              </span>
            </div>
          </div>

          {/* 3. TESTIMONIALS - Spans 8 columns */}
          <div className="md:col-span-8 bg-white rounded-3xl p-6 md:p-8 border border-[#e5e5e5]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[#2563eb] text-sm font-semibold uppercase tracking-wider">Customer Reviews</span>
                <h3 className="text-2xl font-bold text-[#171717] mt-1">
                  What Our Customers Say
                </h3>
              </div>
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#fafafa] rounded-full">
                <Image src="https://www.google.com/favicon.ico" alt="Google" width={16} height={16} className="rounded" />
                <span className="text-sm font-semibold text-[#171717]">4.9</span>
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
                  className="p-5 rounded-2xl bg-[#fafafa] border border-[#e5e5e5] hover:border-[#2563eb]/30 hover:shadow-lg hover:shadow-[#2563eb]/5 transition-all group"
                >
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(item.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                    ))}
                    <span className="ml-2 text-xs text-[#a3a3a3] flex items-center gap-1">
                      {item.platform === 'Google' ? (
                        <Image src="https://www.google.com/favicon.ico" alt="Google" width={12} height={12} className="rounded" />
                      ) : (
                        <span className="w-3 h-3 bg-[#FF1A1A] rounded text-[8px] text-white flex items-center justify-center font-bold">Y</span>
                      )}
                      {item.platform}
                    </span>
                  </div>

                  <p className="text-[#525252] text-sm leading-relaxed mb-4">
                    &ldquo;{item.content}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-3 border-t border-[#e5e5e5]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center text-white font-bold text-sm">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#171717] text-sm flex items-center gap-1">
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

          {/* 4. CTA CARD - Spans 4 columns */}
          <div className="md:col-span-4 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-3xl p-6 md:p-8 relative overflow-hidden group">
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
                Get a thorough assessment of your roof with no cost and no obligation. Our experts will provide honest recommendations.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-white text-[#2563eb] font-semibold rounded-xl hover:bg-[#f0f0f0] transition-colors group"
              >
                Schedule Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 5. TRUST BADGES - Full width */}
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

          {/* 6. EMERGENCY CTA - Spans 6 columns */}
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
                  Fast response when you need us most. Call anytime, day or night.
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

          {/* 7. PROCESS PREVIEW - Spans 6 columns */}
          <div className="md:col-span-6 bg-white rounded-3xl p-6 md:p-8 border border-[#e5e5e5]">
            <span className="text-[#2563eb] text-sm font-semibold uppercase tracking-wider">Simple Process</span>
            <h3 className="text-2xl font-bold text-[#171717] mt-2 mb-6">
              How We Work
            </h3>

            <div className="flex items-center gap-4">
              {[
                { num: '01', label: 'Free Inspection' },
                { num: '02', label: 'Get Quote' },
                { num: '03', label: 'We Build' },
              ].map((step, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-[#2563eb]">{step.num}</span>
                    <span className="text-sm font-medium text-[#525252]">{step.label}</span>
                  </div>
                  {i < 2 && (
                    <ArrowRight className="w-5 h-5 text-[#d4d4d4] flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-[#2563eb] font-semibold hover:gap-3 transition-all"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
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
      style={{ maxHeight: '200px' }}
    >
      {/* Texas outline - simplified */}
      <path
        d="M 20 10
           L 65 10
           L 65 25
           L 95 25
           L 95 55
           L 75 70
           L 60 95
           L 45 75
           L 25 75
           L 20 60
           L 5 55
           L 5 25
           L 20 10 Z"
        fill="none"
        stroke="#2563eb"
        strokeWidth="0.5"
        opacity="0.3"
      />

      {/* Fill with subtle gradient */}
      <defs>
        <radialGradient id="texasGradient" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.02" />
        </radialGradient>
      </defs>
      <path
        d="M 20 10
           L 65 10
           L 65 25
           L 95 25
           L 95 55
           L 75 70
           L 60 95
           L 45 75
           L 25 75
           L 20 60
           L 5 55
           L 5 25
           L 20 10 Z"
        fill="url(#texasGradient)"
      />

      {/* Grid lines inside Texas */}
      <g stroke="#2563eb" strokeWidth="0.2" opacity="0.1">
        <line x1="10" y1="30" x2="90" y2="30" />
        <line x1="10" y1="50" x2="90" y2="50" />
        <line x1="10" y1="70" x2="70" y2="70" />
        <line x1="30" y1="10" x2="30" y2="75" />
        <line x1="50" y1="10" x2="50" y2="90" />
        <line x1="70" y1="25" x2="70" y2="70" />
      </g>
    </svg>
  )
}
