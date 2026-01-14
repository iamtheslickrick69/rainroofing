"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icons } from "@/components/ui/icons";
import { Star, Quote, ChevronDown } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  handle?: string;
  avatar?: string;
  text: string;
  rating: number;
  location: string;
  platform: "google" | "twitter" | "facebook";
  date?: string;
}

interface TestimonialsGridProps {
  testimonials: Testimonial[];
  initialCount?: number;
  showLoadMore?: boolean;
}

const platformIcons = {
  google: Icons.google,
  twitter: Icons.twitter,
  facebook: Icons.facebook,
};

const platformColors = {
  google: "#4285F4",
  twitter: "#000000",
  facebook: "#1877F2",
};

export function TestimonialsGrid({
  testimonials,
  initialCount = 6,
  showLoadMore = true,
}: TestimonialsGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, testimonials.length));
  };

  const visibleTestimonials = testimonials.slice(0, visibleCount);

  return (
    <div className="w-full">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial, index) => {
          const PlatformIcon = platformIcons[testimonial.platform];

          return (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#e5e5e5] hover:shadow-xl hover:border-[#2563eb]/30 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#171717]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#737373]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Platform Icon */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${platformColors[testimonial.platform]}15` }}
                >
                  <PlatformIcon
                    className="w-4 h-4"
                    style={{ color: platformColors[testimonial.platform] }}
                  />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "fill-[#fbbf24] text-[#fbbf24]"
                        : "fill-[#e5e5e5] text-[#e5e5e5]"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-[#2563eb]/10" />
                <p className="text-[#404040] leading-relaxed pl-4">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Date */}
              {testimonial.date && (
                <p className="text-xs text-[#a3a3a3] mt-4">{testimonial.date}</p>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Load More Button */}
      {showLoadMore && visibleCount < testimonials.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={loadMore}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#171717] text-white font-semibold rounded-xl hover:bg-[#262626] transition-colors"
          >
            Load More Reviews
            <ChevronDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      )}

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-[#e5e5e5]"
      >
        <div className="text-center">
          <p className="text-3xl font-bold text-[#171717]">50+</p>
          <p className="text-sm text-[#737373]">Happy Customers</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-[#171717]">5.0</p>
          <p className="text-sm text-[#737373]">Average Rating</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-[#171717]">100%</p>
          <p className="text-sm text-[#737373]">Would Recommend</p>
        </div>
      </motion.div>
    </div>
  );
}
