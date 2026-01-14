'use client'

import Link from 'next/link'
import { Activity, ArrowRight, Phone, Shield, MapPin, Star, Clock, CheckCircle } from 'lucide-react'
import DottedMap from 'dotted-map'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'
import { Card } from '@/components/ui/card'
import * as React from "react"

// Service area cities in West Texas
const serviceAreas = [
  { name: 'Lubbock', primary: true },
  { name: 'Levelland' },
  { name: 'Plainview' },
  { name: 'Brownfield' },
  { name: 'Slaton' },
  { name: 'Wolfforth' },
]

// Real testimonials from the site
const testimonials = [
  {
    name: "James R.",
    time: "Verified",
    content: "Rain Roofing made the whole process easy! Professional and honest.",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Sherry May",
    time: "Verified",
    content: "Great service and fair pricing! Gavin was such a big help.",
    color: "from-blue-400 to-indigo-600",
  },
  {
    name: "Emily T.",
    time: "Verified",
    content: "They handled everything, including my insurance claim. 5 stars!",
    color: "from-sky-400 to-blue-600",
  },
  {
    name: "Recent Project",
    time: "This week",
    content: "Roof replacement completed in Lubbock - 2,400 sq ft.",
    color: "from-emerald-400 to-blue-500",
  },
]

// Growth data for the chart
const chartData = [
  { year: '2019', roofs: 45 },
  { year: '2020', roofs: 89 },
  { year: '2021', roofs: 156 },
  { year: '2022', roofs: 234 },
  { year: '2023', roofs: 389 },
  { year: '2024', roofs: 520 },
]

export function BentoGrid() {
  return (
    <section className="py-16 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#2563eb] font-semibold uppercase tracking-wider mb-2">Why Rain Roofing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#171717]">
            Your Trusted West Texas Roofers
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* 1. MAP - Top Left */}
          <div className="relative overflow-hidden bg-[#1a1a1a] border border-[#404040] p-6 md:rounded-tl-2xl">
            <div className="flex items-center gap-2 text-sm text-[#a3a3a3] mb-4">
              <MapPin className="w-4 h-4 text-[#2563eb]" />
              Service Area
            </div>
            <h3 className="text-xl font-normal text-white">
              Serving Lubbock & West Texas.{" "}
              <span className="text-[#a3a3a3]">Quality roofing for your community.</span>
            </h3>

            <div className="relative mt-6">
              <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-[#2563eb] text-white rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Based in Lubbock, TX
              </div>
              <TexasMap />
            </div>

            {/* Service cities */}
            <div className="flex flex-wrap gap-2 mt-4">
              {serviceAreas.map((city, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-xs ${
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

          {/* 2. TESTIMONIALS - Top Right */}
          <div className="flex flex-col justify-between gap-4 p-6 border border-[#e5e5e5] bg-white md:rounded-tr-2xl">
            <div>
              <span className="text-xs flex items-center gap-2 text-[#525252] mb-2">
                <Star className="w-4 h-4 text-[#fbbf24]" /> 5-Star Reviews
              </span>
              <h3 className="text-xl font-normal text-[#171717]">
                Trusted by homeowners{" "}
                <span className="text-[#525252]">across West Texas with 50+ five-star reviews.</span>
              </h3>
            </div>
            <TestimonialCards />
          </div>

          {/* 3. STATS CHART - Bottom Left */}
          <div className="border border-[#404040] bg-[#1a1a1a] p-6 space-y-4 md:rounded-bl-2xl">
            <div className="flex items-center gap-2 text-sm text-[#a3a3a3] mb-4">
              <Activity className="w-4 h-4 text-[#2563eb]" />
              Track Record
            </div>
            <h3 className="text-xl font-normal text-white">
              500+ Roofs Completed.{" "}
              <span className="text-[#a3a3a3]">Growing trust in Lubbock since 2019.</span>
            </h3>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#2563eb]">500+</p>
                <p className="text-xs text-[#a3a3a3]">Roofs Done</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#2563eb]">5.0</p>
                <p className="text-xs text-[#a3a3a3]">Star Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#2563eb]">24hr</p>
                <p className="text-xs text-[#a3a3a3]">Response</p>
              </div>
            </div>

            <GrowthChart />
          </div>

          {/* 4. FEATURE CARDS - Bottom Right */}
          <div className="grid sm:grid-cols-2 md:rounded-br-2xl overflow-hidden">
            <FeatureCard
              icon={<CheckCircle className="w-4 h-4" />}
              title="Free Inspections"
              subtitle="No Cost, No Obligation"
              description="Get a thorough roof assessment and honest recommendation."
              href="/contact"
            />
            <FeatureCard
              icon={<Clock className="w-4 h-4" />}
              title="24/7 Emergency"
              subtitle="Storm Damage?"
              description="We respond fast when you need us most. Call anytime."
              href="tel:806-808-1317"
              isPhone
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Feature Card Component
function FeatureCard({
  icon,
  title,
  subtitle,
  description,
  href,
  isPhone
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  href: string
  isPhone?: boolean
}) {
  const Component = isPhone ? 'a' : Link

  return (
    <Component
      href={href}
      className="relative flex flex-col gap-3 p-6 border border-[#e5e5e5] bg-white hover:bg-[#fafafa] transition group"
    >
      <div>
        <span className="text-xs flex items-center gap-2 text-[#525252] mb-3">
          {icon}
          {title}
        </span>
        <h3 className="text-lg font-semibold text-[#171717]">
          {subtitle}
        </h3>
        <p className="text-sm text-[#525252] mt-1">{description}</p>
      </div>

      {/* Arrow button */}
      <div className="absolute bottom-4 right-4 p-3 flex items-center gap-2 border border-[#e5e5e5] rounded-full group-hover:bg-[#2563eb] group-hover:border-[#2563eb] group-hover:-rotate-45 transition-all bg-white">
        <ArrowRight className="w-4 h-4 text-[#2563eb] group-hover:text-white" />
      </div>

      {isPhone && (
        <div className="mt-4 flex items-center gap-2 text-[#2563eb] font-semibold">
          <Phone className="w-4 h-4" />
          806-808-1317
        </div>
      )}
    </Component>
  )
}

// Texas-focused Map
const map = new DottedMap({ height: 60, grid: 'diagonal' })
const points = map.getPoints()

const TexasMap = () => (
  <svg viewBox="0 0 120 60" className="w-full h-auto opacity-40">
    {points.map((point, i) => (
      <circle
        key={i}
        cx={point.x}
        cy={point.y}
        r={0.2}
        fill="#2563eb"
        opacity={0.6}
      />
    ))}
    {/* Lubbock highlight */}
    <circle cx="35" cy="28" r="3" fill="#2563eb" opacity={0.8}>
      <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
)

// Growth Chart
function GrowthChart() {
  return (
    <div className="h-40 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorRoofs" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="year" hide />
          <YAxis hide />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#404040" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#262626',
              border: '1px solid #404040',
              borderRadius: '8px',
              color: '#fff'
            }}
            formatter={(value) => [`${value} roofs`, 'Completed']}
          />
          <Area
            type="monotone"
            dataKey="roofs"
            stroke="#2563eb"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorRoofs)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

// Testimonial Cards with animation
const TestimonialCards = () => {
  return (
    <div className="w-full h-[260px] overflow-hidden relative">
      {/* Fade overlay */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

      <div className="space-y-3">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="flex gap-3 items-start p-4 border border-[#e5e5e5] rounded-xl bg-[#fafafa] hover:border-[#2563eb] transition-colors cursor-default animate-scaleUp"
            style={{
              animationDelay: `${i * 200}ms`,
              animationFillMode: "forwards",
              opacity: 0,
            }}
          >
            <div
              className={`w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
            >
              <Star className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#171717]">
                {item.name}
                <span className="text-xs text-[#a3a3a3] font-normal flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#2563eb]" />
                  {item.time}
                </span>
              </div>
              <p className="text-sm text-[#525252] mt-1 line-clamp-2">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
