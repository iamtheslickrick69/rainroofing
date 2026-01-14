"use client";

import React from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Star, Award, Shield, ThumbsUp } from "lucide-react";

const testimonials = [
  {
    author: {
      name: "James R.",
      location: "Lubbock, TX",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "Rain Roofing made the whole process easy! They fixed my roof fast after a storm, and the team was professional and honest. Highly recommend!",
    rating: 5,
    date: "January 2026",
    platform: "google" as const,
  },
  {
    author: {
      name: "Sherry May",
      location: "Wolfforth, TX",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Great service and fair pricing! Gavin was such a big help when walking me through my options and the team did a wonderful job. My roof looks amazing!",
    rating: 5,
    date: "January 2026",
    platform: "google" as const,
  },
  {
    author: {
      name: "Emily T.",
      location: "Lubbock, TX",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    text: "The contractors showed up when they scheduled, kept me updated, and did quality work. They handled everything, including helping me with my insurance claim. 5 stars!",
    rating: 5,
    date: "December 2025",
    platform: "google" as const,
  },
  {
    author: {
      name: "Michael S.",
      location: "Lubbock, TX",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    text: "Had major hail damage and these guys were out the next day. Professional, thorough inspection and they made the insurance process painless. Couldn't be happier.",
    rating: 5,
    date: "December 2025",
    platform: "google" as const,
  },
  {
    author: {
      name: "Patricia L.",
      location: "Shallowater, TX",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    text: "We've used Rain Roofing twice now - once for repairs and once for a full replacement. Both times they exceeded expectations. Fair pricing and quality work.",
    rating: 5,
    date: "November 2025",
    platform: "facebook" as const,
  },
  {
    author: {
      name: "David M.",
      location: "Lubbock, TX",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    text: "Best roofing company in Lubbock hands down. They were upfront about costs, finished ahead of schedule, and cleaned up everything. True professionals.",
    rating: 5,
    date: "November 2025",
    platform: "google" as const,
  },
];

const stats = [
  { icon: Star, value: "5.0", label: "Average Rating" },
  { icon: Award, value: "50+", label: "Happy Customers" },
  { icon: Shield, value: "100%", label: "Satisfaction" },
  { icon: ThumbsUp, value: "100%", label: "Would Recommend" },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#2563eb] font-semibold uppercase tracking-wider mb-2"
          >
            Testimonials
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-[#525252] max-w-2xl mx-auto">
            Real reviews from real homeowners across Lubbock and the surrounding areas.
            We're proud of every 5-star rating we've earned.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl p-4 border border-[#e5e5e5] text-center"
            >
              <stat.icon className="w-6 h-6 text-[#2563eb] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[#171717]">{stat.value}</p>
              <p className="text-xs text-[#737373]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard
                author={testimonial.author}
                text={testimonial.text}
                rating={testimonial.rating}
                date={testimonial.date}
                platform={testimonial.platform}
                featured={index === 0}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/reviews"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#171717] text-white font-semibold rounded-xl hover:bg-[#262626] transition-colors"
          >
            See All Reviews
            <span className="text-[#fbbf24]">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
