"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedCardStack } from "@/components/ui/animated-card-stack";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";

const CDN = "https://pub-82e4016d6e17421ebc1eaa174644bee3.r2.dev";

// Featured posts for the card stack
const featuredPosts = [
  {
    id: "1",
    title: "How to Spot Storm Damage on Your Roof After a Lubbock Hailstorm",
    excerpt:
      "West Texas storms can be brutal. Learn the signs of hail and wind damage so you can act fast and protect your home.",
    image: `${CDN}/000working.jpg`,
    date: "January 10, 2026",
    category: "Storm Damage",
    slug: "spot-storm-damage-lubbock-hailstorm",
  },
  {
    id: "2",
    title: "5 Signs It's Time to Replace Your Roof (Not Just Repair It)",
    excerpt:
      "Sometimes repairs aren't enough. Here's how to know when a full roof replacement is the smarter investment.",
    image: `${CDN}/000shingle.jpg`,
    date: "January 5, 2026",
    category: "Roof Replacement",
    slug: "signs-time-replace-roof",
  },
  {
    id: "3",
    title: "Navigating Insurance Claims After Storm Damage: A Homeowner's Guide",
    excerpt:
      "Filing an insurance claim can be overwhelming. We break down the process step by step to help you get the coverage you deserve.",
    image: `${CDN}/000NEWHOME.jpg`,
    date: "December 28, 2025",
    category: "Insurance",
    slug: "navigating-insurance-claims-storm-damage",
  },
  {
    id: "4",
    title: "Metal Roofing vs. Asphalt Shingles: Which Is Best for Lubbock Homes?",
    excerpt:
      "Both have their pros and cons. We compare durability, cost, and performance in West Texas weather.",
    image: `${CDN}/000metalrof.jpg`,
    date: "December 20, 2025",
    category: "Roofing Materials",
    slug: "metal-roofing-vs-asphalt-shingles",
  },
];

// All blog posts
const allPosts = [
  ...featuredPosts,
  {
    id: "5",
    title: "Spring Roof Maintenance Checklist for Texas Homeowners",
    excerpt:
      "Get your roof ready for storm season with this comprehensive maintenance guide.",
    image: `${CDN}/000modern.jpg`,
    date: "December 15, 2025",
    category: "Maintenance",
    slug: "spring-roof-maintenance-checklist",
    readTime: "4 min",
  },
  {
    id: "6",
    title: "Emergency Roof Tarping: What to Do Before the Pros Arrive",
    excerpt:
      "When disaster strikes, here's how to minimize damage while waiting for professional help.",
    image: `${CDN}/000barn.jpg`,
    date: "December 10, 2025",
    category: "Emergency",
    slug: "emergency-roof-tarping-guide",
    readTime: "5 min",
  },
  {
    id: "7",
    title: "Understanding Your Roof Warranty: What's Covered and What's Not",
    excerpt:
      "Roof warranties can be confusing. We explain the different types and what they actually protect.",
    image: `${CDN}/000spanish.jpg`,
    date: "December 5, 2025",
    category: "Education",
    slug: "understanding-roof-warranty",
    readTime: "6 min",
  },
  {
    id: "8",
    title: "How West Texas Weather Affects Your Roof's Lifespan",
    excerpt:
      "Sun, wind, hail, and temperature swings all take a toll. Here's what you need to know.",
    image: `${CDN}/0000solar.jpg`,
    date: "November 28, 2025",
    category: "Education",
    slug: "west-texas-weather-roof-lifespan",
    readTime: "5 min",
  },
];

const categories = [
  "All",
  "Storm Damage",
  "Roof Replacement",
  "Insurance",
  "Maintenance",
  "Emergency",
  "Education",
  "Roofing Materials",
];

export function BlogPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#3b82f6] font-semibold uppercase tracking-wider mb-4"
            >
              Rain Roofing Blog
            </motion.p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Roofing Tips & Expert Advice
            </h1>
            <p className="text-[#a3a3a3] max-w-2xl mx-auto text-lg">
              Stay informed with the latest roofing tips, storm damage advice, and
              home maintenance guides from our Lubbock experts.
            </p>
          </motion.div>

          {/* Featured Posts Card Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pb-24"
          >
            <AnimatedCardStack posts={featuredPosts} autoPlay={true} interval={6000} />
          </motion.div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center mb-12"
          >
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#737373]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-[#e5e5e5] rounded-xl focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-[#2563eb] text-white"
                      : "bg-white text-[#525252] border border-[#e5e5e5] hover:border-[#2563eb]/50"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-[#e5e5e5] hover:border-[#2563eb]/30">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#2563eb] text-white text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-[#737373] mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        {(post as any).readTime && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {(post as any).readTime}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-[#171717] mb-2 group-hover:text-[#2563eb] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[#525252] text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 inline-flex items-center text-[#2563eb] font-semibold text-sm">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-[#737373] text-lg">
                No articles found matching your criteria.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 bg-[#2563eb] hover:bg-[#1d4ed8]"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Roofing Help Now?
            </h2>
            <p className="text-[#a3a3a3] mb-8">
              Don't wait for small problems to become big ones. Get a free roof
              inspection from our Lubbock experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-6 text-lg">
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                <a href="tel:806-808-1317">Call 806-808-1317</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
