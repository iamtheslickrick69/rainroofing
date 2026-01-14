"use client";

import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
import { Icons } from "@/components/ui/icons";

export interface TestimonialAuthor {
  name: string;
  location: string;
  avatar?: string;
  initials?: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  rating?: number;
  date?: string;
  platform?: "google" | "facebook" | "twitter";
  featured?: boolean;
  className?: string;
}

const platformIcons = {
  google: Icons.google,
  facebook: Icons.facebook,
  twitter: Icons.twitter,
};

const platformColors = {
  google: "#4285F4",
  facebook: "#1877F2",
  twitter: "#000000",
};

export function TestimonialCard({
  author,
  text,
  rating = 5,
  date,
  platform = "google",
  featured = false,
  className,
}: TestimonialCardProps) {
  const PlatformIcon = platformIcons[platform];

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex flex-col rounded-2xl",
        "bg-white border border-[#e5e5e5]",
        "p-6 text-start",
        "hover:shadow-xl hover:shadow-[#2563eb]/10 hover:border-[#2563eb]/30",
        "transition-all duration-300",
        featured && "ring-2 ring-[#2563eb] shadow-lg",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 ring-2 ring-[#2563eb]/20">
            {author.avatar ? (
              <AvatarImage src={author.avatar} alt={author.name} />
            ) : null}
            <AvatarFallback className="bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white font-semibold">
              {author.initials || author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1">
              <h3 className="text-base font-semibold text-[#171717]">
                {author.name}
              </h3>
              <BadgeCheck className="w-4 h-4 text-[#2563eb]" />
            </div>
            <p className="text-sm text-[#737373]">{author.location}</p>
          </div>
        </div>

        {/* Platform Icon */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${platformColors[platform]}15` }}
        >
          <PlatformIcon
            className="w-4 h-4"
            style={{ color: platformColors[platform] }}
          />
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating
                ? "fill-[#fbbf24] text-[#fbbf24]"
                : "fill-[#e5e5e5] text-[#e5e5e5]"
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[#404040] leading-relaxed flex-grow">
        "{text}"
      </p>

      {/* Date */}
      {date && (
        <p className="text-xs text-[#a3a3a3] mt-4 pt-4 border-t border-[#f0f0f0]">
          {date}
        </p>
      )}
    </motion.div>
  );
}
