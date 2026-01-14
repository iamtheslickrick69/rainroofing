"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ProgressSlider,
  SliderContent,
  SliderWrapper,
  SliderBtnGroup,
  SliderBtn,
} from "@/components/ui/progressive-carousel";

const roofTypes = [
  {
    id: "shingle",
    title: "Asphalt Shingles",
    description: "The most popular choice for Lubbock homes. Affordable, durable, and available in many styles and colors.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
  },
  {
    id: "metal",
    title: "Metal Roofing",
    description: "Built to handle Texas heat and severe storms. Energy-efficient with a lifespan of 50+ years.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
  },
  {
    id: "tile",
    title: "Tile Roofing",
    description: "Classic Southwest aesthetic with exceptional durability. Perfect for adding character to your home.",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1600&q=80",
  },
  {
    id: "flat",
    title: "Flat Roofing",
    description: "Modern design for contemporary homes, patios, and additions. Low maintenance and cost-effective.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
  },
  {
    id: "newbuild",
    title: "New Home Build",
    description: "Custom roofing solutions for new construction. We work with builders to deliver quality from day one.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80",
  },
  {
    id: "solar",
    title: "Solar Roofing",
    description: "Harness West Texas sunshine. Integrated solar solutions that save energy and reduce your bills.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80",
  },
];

export function RoofTypesCarousel() {
  return (
    <section className="py-16 md:py-20 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[#2563eb] font-semibold uppercase tracking-wider text-sm mb-2">
            Our Expertise
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#171717]">
            All Roof Types
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ProgressSlider
            activeSlider="shingle"
            duration={6000}
            className="rounded-2xl overflow-hidden"
          >
            <SliderContent>
              {roofTypes.map((roof) => (
                <SliderWrapper key={roof.id} value={roof.id}>
                  <div className="relative h-[400px] md:h-[500px] w-full">
                    <Image
                      src={roof.image}
                      alt={roof.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </SliderWrapper>
              ))}
            </SliderContent>

            <SliderBtnGroup className="absolute bottom-0 left-0 right-0 grid grid-cols-3 md:grid-cols-6 bg-white/90 backdrop-blur-md border-t border-[#e5e5e5]">
              {roofTypes.map((roof) => (
                <SliderBtn
                  key={roof.id}
                  value={roof.id}
                  className="text-left cursor-pointer p-3 md:p-4 border-r border-[#e5e5e5] last:border-r-0 hover:bg-[#fafafa] transition-colors"
                  progressBarClass="bg-[#2563eb]/20 h-full"
                >
                  <h3 className="text-xs md:text-sm font-semibold text-[#171717] mb-1 line-clamp-1">
                    {roof.title}
                  </h3>
                  <p className="text-xs text-[#525252] line-clamp-2 hidden md:block">
                    {roof.description}
                  </p>
                </SliderBtn>
              ))}
            </SliderBtnGroup>
          </ProgressSlider>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <a
            href="/residential-roofing"
            className="inline-flex items-center gap-2 text-[#2563eb] font-semibold hover:underline"
          >
            View all services
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
