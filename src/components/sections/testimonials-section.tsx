"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James R.",
    text: "Rain Roofing made the whole process easy! They fixed my roof fast after a storm, and the team was professional and honest. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sherry May",
    text: "Great service and fair pricing! Gavin was such a big help when walking me through my options and the team did a wonderful job. My roof looks amazing!",
    rating: 5,
  },
  {
    name: "Emily T.",
    text: "The contractors showed up when they scheduled, kept me updated, and did quality work. They handled everything, including helping me with my insurance claim. 5 stars!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#2563eb] font-semibold uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-[#525252] max-w-2xl mx-auto">
            Don't just take our word for it – hear from homeowners who trust Rain Roofing with their homes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#fafafa] border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-[#2563eb]/30" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#fbbf24] text-[#fbbf24]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[#404040] mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#171717]">{testimonial.name}</p>
                    <p className="text-sm text-[#525252]">Verified Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#f5f5f5] px-6 py-3 rounded-full">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24]" />
              ))}
            </div>
            <span className="text-[#171717] font-medium">5.0 Rating from 50+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
