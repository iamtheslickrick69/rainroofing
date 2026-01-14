"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, BadgeCheck, DollarSign, Headphones } from "lucide-react";

function useCounter(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
}

function StatItem({ value, suffix, prefix, label, delay }: { value: number; suffix?: string; prefix?: string; label: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
        {prefix}{value === 0 && suffix === "Free" ? "" : count}{suffix}
      </p>
      <p className="text-[#737373] mt-2 text-sm uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}

const features = [
  {
    icon: Shield,
    title: "Quality Materials",
    description: "Built for West Texas weather",
  },
  {
    icon: BadgeCheck,
    title: "Free Estimates",
    description: "No obligation assessments",
  },
  {
    icon: DollarSign,
    title: "Fair Pricing",
    description: "No upfront payments",
  },
  {
    icon: Headphones,
    title: "Insurance Help",
    description: "We handle paperwork",
  },
];

export function TrustSection() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-[#0f0f0f] scroll-mt-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#525252] font-medium uppercase tracking-widest text-xs mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Trusted by West Texas
          </h2>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-24"
        >
          <StatItem value={24} suffix="/7" label="Emergency Service" delay={0} />
          <StatItem value={50} suffix="+" label="5-Star Reviews" delay={0.1} />
          <StatItem value={100} suffix="%" label="Satisfaction" delay={0.2} />
          <StatItem prefix="" value={0} suffix="Free" label="Estimates" delay={0.3} />
        </motion.div>

        {/* Features Grid - Minimal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#0f0f0f] p-8 md:p-10 group hover:bg-[#1a1a1a] transition-colors duration-500"
            >
              <div className="mb-6">
                <feature.icon className="w-6 h-6 text-[#525252] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg">
                {feature.title}
              </h3>
              <p className="text-sm text-[#525252] group-hover:text-[#737373] transition-colors duration-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
