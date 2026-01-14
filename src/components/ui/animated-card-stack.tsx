"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

interface AnimatedCardStackProps {
  posts: BlogPost[];
  autoPlay?: boolean;
  interval?: number;
}

export function AnimatedCardStack({
  posts,
  autoPlay = true,
  interval = 5000,
}: AnimatedCardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextCard = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  }, [posts.length]);

  const prevCard = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  }, [posts.length]);

  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const timer = setInterval(nextCard, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, isHovered, nextCard]);

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + posts.length) % posts.length;

    if (diff === 0) {
      return {
        zIndex: posts.length,
        y: 0,
        scale: 1,
        opacity: 1,
      };
    } else if (diff === 1) {
      return {
        zIndex: posts.length - 1,
        y: 12,
        scale: 0.96,
        opacity: 0.7,
      };
    } else if (diff === 2) {
      return {
        zIndex: posts.length - 2,
        y: 24,
        scale: 0.92,
        opacity: 0.4,
      };
    } else {
      return {
        zIndex: 0,
        y: 36,
        scale: 0.88,
        opacity: 0,
      };
    }
  };

  return (
    <div
      className="relative w-full max-w-2xl mx-auto h-[480px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Arrow */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevCard}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#171717] hover:bg-[#2563eb] hover:text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextCard}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#171717] hover:bg-[#2563eb] hover:text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Card Stack */}
      <div className="relative h-full">
        <AnimatePresence>
          {posts.map((post, index) => {
            const style = getCardStyle(index);

            return (
              <motion.div
                key={post.id}
                className="absolute inset-0"
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{
                  ...style,
                  transition: {
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                  },
                }}
                exit={{ opacity: 0, y: -100 }}
                style={{ zIndex: style.zIndex }}
              >
                <div className="h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#e5e5e5]">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#2563eb] text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[#737373] text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <h3 className="text-xl font-bold text-[#171717] mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#525252] text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-[#2563eb] font-semibold text-sm hover:underline group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-[#2563eb] w-6"
                : "bg-[#d4d4d4] hover:bg-[#a3a3a3]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
