"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ProgressSlider,
  SliderContent,
  SliderWrapper,
  SliderBtnGroup,
  SliderBtn,
} from "@/components/ui/progressive-carousel";

const roofTypes = [
  {
    id: "asphalt",
    title: "Asphalt Shingles",
    subtitle: "Most Popular",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    description: "The most popular roofing choice for Lubbock homes. Excellent balance of affordability, durability, and curb appeal.",
  },
  {
    id: "metal",
    title: "Metal Roofing",
    subtitle: "Maximum Durability",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
    description: "Built for extreme West Texas climate. 50+ year lifespan, reflects heat, and handles hail with ease.",
  },
  {
    id: "tile",
    title: "Tile Roofing",
    subtitle: "Classic Elegance",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1600&q=80",
    description: "Timeless Southwest elegance. Clay and concrete options with 50+ year lifespan and exceptional durability.",
  },
  {
    id: "flat",
    title: "Flat Roofing",
    subtitle: "Modern Design",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
    description: "Perfect for contemporary homes, patios, and additions. Sleek aesthetic with easy maintenance access.",
  },
  {
    id: "new-build",
    title: "New Home Build",
    subtitle: "Custom Solutions",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80",
    description: "Building your dream home? We work with builders and homeowners to deliver quality roofing from day one.",
  },
  {
    id: "solar",
    title: "Solar Roofing",
    subtitle: "Energy Savings",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80",
    description: "Harness West Texas sunshine. Reduce energy bills, get tax incentives, and invest in sustainability.",
  },
];

export function RoofTypesBento() {
  return (
    <section id="roof-types" className="py-16 md:py-24 bg-[#1c1c1c] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#737373] font-semibold uppercase tracking-wider text-sm mb-2">
            Our Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            All Roof Types
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto">
            We specialize in every roofing style. Explore our expertise below.
          </p>
        </motion.div>

        {/* Progressive Carousel */}
        <ProgressSlider
          duration={5000}
          activeSlider="asphalt"
          className="w-full"
        >
          {/* Main Image Display */}
          <SliderContent className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-6">
            {roofTypes.map((roof) => (
              <SliderWrapper
                key={roof.id}
                value={roof.id}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={roof.image}
                    alt={roof.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
                      {roof.subtitle}
                    </p>
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
                      {roof.title}
                    </h3>
                    <p className="text-white/80 max-w-xl text-sm md:text-base mb-4">
                      {roof.description}
                    </p>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 bg-white text-[#171717] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                    >
                      Get Free Estimate
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </SliderWrapper>
            ))}
          </SliderContent>

          {/* Navigation Buttons with Progress */}
          <SliderBtnGroup className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {roofTypes.map((roof) => (
              <SliderBtn
                key={roof.id}
                value={roof.id}
                className="relative group rounded-xl overflow-hidden transition-all duration-300 hover:opacity-100 border border-white/10"
                progressBarClass="top-0 h-1 bg-white"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={roof.image}
                    alt={roof.title}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center p-2">
                    <span className="text-white text-xs md:text-sm font-semibold text-center leading-tight">
                      {roof.title}
                    </span>
                  </div>
                </div>
              </SliderBtn>
            ))}
          </SliderBtnGroup>
        </ProgressSlider>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-white/70 font-semibold hover:text-white transition-colors"
          >
            View all services
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
