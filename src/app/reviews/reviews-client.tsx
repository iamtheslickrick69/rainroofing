"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Button } from "@/components/ui/button";
import { Star, Phone, Shield, Clock, Award, ChevronDown } from "lucide-react";

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
  {
    author: {
      name: "Karen W.",
      location: "Lubbock, TX",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    },
    text: "After getting quotes from 4 different companies, Rain Roofing was the clear choice. Not the cheapest, but the most thorough and professional. Worth every penny.",
    rating: 5,
    date: "October 2025",
    platform: "google" as const,
  },
  {
    author: {
      name: "Robert J.",
      location: "Lubbock, TX",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    },
    text: "Emergency roof repair at 10pm during a storm. They answered, came out, and got us protected. Can't thank them enough for being there when we needed help most.",
    rating: 5,
    date: "October 2025",
    platform: "facebook" as const,
  },
  {
    author: {
      name: "Linda H.",
      location: "Wolfforth, TX",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "From inspection to completion, everything was explained clearly. No surprises, no hidden fees. The crew was respectful of our property and did excellent work.",
    rating: 5,
    date: "September 2025",
    platform: "google" as const,
  },
  {
    author: {
      name: "Thomas B.",
      location: "Lubbock, TX",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face",
    },
    text: "I was skeptical at first, but they delivered exactly what they promised. New roof looks fantastic and they even found damage my insurance would cover. Great experience.",
    rating: 5,
    date: "September 2025",
    platform: "google" as const,
  },
  {
    author: {
      name: "Jennifer A.",
      location: "Lubbock, TX",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face",
    },
    text: "Roof Premium membership is worth it! Annual inspection caught a small issue before it became a big problem. Peace of mind knowing my roof is maintained properly.",
    rating: 5,
    date: "August 2025",
    platform: "google" as const,
  },
  {
    author: {
      name: "Chris D.",
      location: "Ransom Canyon, TX",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    },
    text: "Quick, professional, and reasonably priced. They fixed our leak same-day and the repair has held up perfectly through multiple storms since. Would use again.",
    rating: 5,
    date: "August 2025",
    platform: "facebook" as const,
  },
];

const stats = [
  { icon: Star, value: "5.0", label: "Average Rating" },
  { icon: Award, value: "50+", label: "Happy Customers" },
  { icon: Clock, value: "24/7", label: "Emergency Service" },
  { icon: Shield, value: "100%", label: "Satisfaction" },
];

export function ReviewsPageClient() {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, testimonials.length));
  };

  const visibleTestimonials = testimonials.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#fbbf24]/20 px-4 py-2 rounded-full mb-6"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />
                ))}
              </div>
              <span className="text-[#fbbf24] font-semibold">5.0 Rating</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Lubbock Homeowners Say
            </h1>
            <p className="text-[#a3a3a3] max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Read verified reviews from real
              customers who trusted Rain Roofing with their homes.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-[#2563eb] mx-auto mb-3" />
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-[#a3a3a3]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#171717] mb-4">
              Verified Customer Reviews
            </h2>
            <p className="text-[#525252] max-w-2xl mx-auto">
              Real reviews from real homeowners across Lubbock and the surrounding
              areas. We're proud of every 5-star rating we've earned.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
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

          {/* Load More Button */}
          {visibleCount < testimonials.length && (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2563eb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Happy Customers?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Get a free roof inspection and see why Lubbock homeowners trust Rain
              Roofing with their most important investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-[#2563eb] hover:bg-[#f0f0f0] px-8 py-6 text-lg font-semibold"
              >
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <a href="tel:806-808-1317" className="inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call 806-808-1317
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#525252] mb-4">
              Already a Rain Roofing customer? We'd love to hear about your
              experience!
            </p>
            <a
              href="https://g.page/r/rainroofing/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2563eb] font-semibold hover:underline"
            >
              Leave us a Google Review
              <Star className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
