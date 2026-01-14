"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

interface ProcessStep {
  id: string
  title: string
  description: string
  cta: string
  href: string
}

interface EditorialProcessProps {
  steps: ProcessStep[]
  className?: string
}

export function EditorialProcess({ steps, className }: EditorialProcessProps) {
  const [active, setActive] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleChange = (index: number) => {
    if (index === active || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActive(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const handlePrev = () => {
    const newIndex = active === 0 ? steps.length - 1 : active - 1
    handleChange(newIndex)
  }

  const handleNext = () => {
    const newIndex = active === steps.length - 1 ? 0 : active + 1
    handleChange(newIndex)
  }

  const current = steps[active]

  return (
    <div className={`w-full max-w-3xl mx-auto px-6 py-16 ${className || ""}`}>
      {/* Large index number + content */}
      <div className="flex items-start gap-6 md:gap-10">
        <span
          className="text-[100px] md:text-[140px] font-light leading-none text-white/10 select-none transition-all duration-500"
          style={{ fontFeatureSettings: '"tnum"' }}
        >
          {current.id}
        </span>

        <div className="flex-1 pt-4 md:pt-8">
          {/* Title */}
          <h3
            className={`text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-white tracking-tight transition-all duration-300 ${
              isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
          >
            {current.title}
          </h3>

          {/* Description */}
          <p
            className={`mt-4 md:mt-6 text-base md:text-lg text-[#a3a3a3] leading-relaxed transition-all duration-300 delay-75 ${
              isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
          >
            {current.description}
          </p>

          {/* CTA Link */}
          <div
            className={`mt-6 md:mt-8 transition-all duration-300 delay-100 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <Link
              href={current.href}
              className="inline-flex items-center gap-2 text-white font-medium hover:text-[#a3a3a3] transition-colors group"
            >
              {current.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 md:mt-16 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2 md:gap-3">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleChange(index)}
                className="group relative py-4"
                aria-label={`Go to step ${index + 1}`}
              >
                <span
                  className={`block h-px transition-all duration-500 ease-out ${
                    index === active
                      ? "w-10 md:w-12 bg-white"
                      : "w-4 md:w-6 bg-white/20 group-hover:w-6 md:group-hover:w-8 group-hover:bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="text-xs text-[#737373] tracking-widest uppercase">
            {current.id} / {String(steps.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300"
            aria-label="Previous step"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300"
            aria-label="Next step"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
