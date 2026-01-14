"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James R.",
    location: "Lubbock, TX",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "Rain Roofing made the whole process easy! They fixed my roof fast after a storm, and the team was professional and honest. Highly recommend!",
  },
  {
    name: "Sherry May",
    location: "Wolfforth, TX",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    text: "Great service and fair pricing! Gavin was such a big help when walking me through my options and the team did a wonderful job. My roof looks amazing!",
  },
  {
    name: "Emily T.",
    location: "Lubbock, TX",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "The contractors showed up when they scheduled, kept me updated, and did quality work. They handled everything, including helping me with my insurance claim!",
  },
  {
    name: "Michael S.",
    location: "Lubbock, TX",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "Had major hail damage and these guys were out the next day. Professional, thorough inspection and they made the insurance process painless.",
  },
  {
    name: "Patricia L.",
    location: "Shallowater, TX",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    text: "We've used Rain Roofing twice now - once for repairs and once for a full replacement. Both times they exceeded expectations. Fair pricing and quality work.",
  },
  {
    name: "David M.",
    location: "Lubbock, TX",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    text: "Best roofing company in Lubbock hands down. They were upfront about costs, finished ahead of schedule, and cleaned up everything. True professionals.",
  },
];

function TestimonialCard({
  testimonial,
  isActive,
  position,
}: {
  testimonial: (typeof testimonials)[0];
  isActive: boolean;
  position: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || !isActive) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Stack positioning
  const getStackStyles = () => {
    if (position === 0) {
      return {
        zIndex: 30,
        scale: 1,
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
      };
    } else if (position === 1) {
      return {
        zIndex: 20,
        scale: 0.95,
        y: 12,
        opacity: 0.6,
        filter: "blur(1px)",
      };
    } else if (position === 2) {
      return {
        zIndex: 10,
        scale: 0.9,
        y: 24,
        opacity: 0.3,
        filter: "blur(2px)",
      };
    }
    return {
      zIndex: 0,
      scale: 0.85,
      y: 36,
      opacity: 0,
      filter: "blur(3px)",
    };
  };

  const stackStyles = getStackStyles();

  return (
    <motion.div
      ref={cardRef}
      className="absolute inset-0"
      initial={false}
      animate={{
        zIndex: stackStyles.zIndex,
        scale: stackStyles.scale,
        y: stackStyles.y,
        opacity: stackStyles.opacity,
        filter: stackStyles.filter,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{
        rotateX: isActive ? rotateX : 0,
        rotateY: isActive ? rotateY : 0,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`
          h-full bg-white rounded-2xl border border-[#e5e5e5] p-6 md:p-8
          shadow-lg shadow-black/5
          ${isActive ? "shadow-xl shadow-[#2563eb]/10" : ""}
          transition-shadow duration-300
        `}
      >
        {/* Quote Icon */}
        <Quote className="absolute top-6 right-6 w-8 h-8 text-[#2563eb]/10" />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-4 ring-[#2563eb]/20"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Floating shadow */}
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-black/10 rounded-full blur-sm"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Stars */}
            <div className="flex justify-center md:justify-start gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <Star className="w-4 h-4 fill-[#fbbf24] text-[#fbbf24]" />
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.p
              className="text-[#404040] text-base md:text-lg leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              &ldquo;{testimonial.text}&rdquo;
            </motion.p>

            {/* Author */}
            <div>
              <p className="font-semibold text-[#171717]">{testimonial.name}</p>
              <p className="text-sm text-[#737373]">{testimonial.location}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PremiumTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    setProgress(0);
    if (intervalRef.current) clearInterval(intervalRef.current);

    const startTime = Date.now();
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / 10000) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 50);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getPosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return 0;
    if (diff === 1 || diff === -(testimonials.length - 1)) return 1;
    if (diff === 2 || diff === -(testimonials.length - 2)) return 2;
    return 3;
  };

  return (
    <section id="reviews" className="py-16 md:py-20 bg-[#fafafa] overflow-hidden scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[#2563eb] font-semibold uppercase tracking-wider text-sm mb-2">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#171717]">
            What Lubbock Homeowners Say
          </h2>
        </motion.div>

        {/* Card Stack */}
        <div className="relative h-[280px] md:h-[220px] mb-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              isActive={index === currentIndex}
              position={getPosition(index)}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          {/* Prev Button */}
          <motion.button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-white border border-[#e5e5e5] text-[#525252] hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          {/* Progress Bar */}
          <div className="w-32 md:w-48 h-1 bg-[#e5e5e5] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#2563eb] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-white border border-[#e5e5e5] text-[#525252] hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Counter */}
        <p className="text-center text-sm text-[#a3a3a3] mt-4">
          {currentIndex + 1} / {testimonials.length}
        </p>
      </div>
    </section>
  );
}
