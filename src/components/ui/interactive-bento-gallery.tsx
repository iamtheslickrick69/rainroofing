"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  benefits: string[];
  ctaText?: string;
  ctaLink?: string;
}

interface InteractiveBentoGalleryProps {
  items: GalleryItem[];
  className?: string;
}

export function InteractiveBentoGallery({ items, className }: InteractiveBentoGalleryProps) {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const openModal = useCallback((item: GalleryItem) => {
    setActiveItem(item);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setActiveItem(null);
    document.body.style.overflow = "";
  }, []);

  // Bento grid layout classes for 6 items
  const getGridClass = (index: number) => {
    const classes = [
      "md:col-span-2 md:row-span-2", // Item 0 - Large (Asphalt Shingles)
      "md:col-span-1 md:row-span-1", // Item 1 - Small (Metal)
      "md:col-span-1 md:row-span-1", // Item 2 - Small (Tile)
      "md:col-span-1 md:row-span-1", // Item 3 - Small (Flat)
      "md:col-span-2 md:row-span-1", // Item 4 - Wide (New Home Build)
      "md:col-span-1 md:row-span-1", // Item 5 - Small (Solar)
    ];
    return classes[index] || "";
  };

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 ${className || ""}`}>
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => openModal(item)}
            className={`relative overflow-hidden rounded-2xl cursor-pointer group ${getGridClass(index)}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`relative w-full ${index === 0 ? "h-[300px] md:h-full min-h-[350px]" : "h-[200px] md:h-[175px]"}`}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-left">
                <p className="text-[#a3a3a3] text-xs font-semibold uppercase tracking-wider mb-1">
                  {item.subtitle}
                </p>
                <h3 className="text-white font-bold text-lg md:text-xl">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/50 rounded-2xl transition-colors duration-300" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative h-[250px] md:h-[300px]">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <p className="text-[#a3a3a3] text-sm font-semibold uppercase tracking-wider mb-1">
                    {activeItem.subtitle}
                  </p>
                  <h2 className="text-white font-bold text-2xl md:text-3xl">
                    {activeItem.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-[#525252] leading-relaxed mb-6">
                  {activeItem.description}
                </p>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#171717] mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {activeItem.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#171717]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#171717]" />
                        </div>
                        <span className="text-[#525252] text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button asChild size="lg" className="w-full bg-[#171717] hover:bg-[#262626] text-white font-semibold py-6">
                  <Link href={activeItem.ctaLink || "/contact"}>
                    {activeItem.ctaText || "Get Free Estimate"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
