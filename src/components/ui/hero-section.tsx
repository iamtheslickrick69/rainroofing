"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CDN = "https://pub-82e4016d6e17421ebc1eaa174644bee3.r2.dev";

const colors = {
  50: "#eff6ff",
  100: "#dbeafe",
  200: "#bfdbfe",
  300: "#93c5fd",
  400: "#60a5fa",
  500: "#3b82f6",
  600: "#404040",
  700: "#1d4ed8",
  800: "#1e40af",
  900: "#1e3a8a",
  dark900: "#1a1a1a",
  dark800: "#262626",
  dark700: "#404040",
  gray400: "#a3a3a3",
};

export function HeroSection() {
  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll<HTMLElement>(".word");
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay") || "0", 10);
      setTimeout(() => {
        word.style.animation = "word-appear 0.8s ease-out forwards";
      }, delay);
    });

    // Word hover effects
    words.forEach((word) => {
      word.addEventListener("mouseenter", () => {
        word.style.textShadow = `0 0 20px ${colors[500]}80`;
      });
      word.addEventListener("mouseleave", () => {
        word.style.textShadow = "none";
      });
    });

    // Click ripple effect
    function onClick(e: MouseEvent) {
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";
      ripple.style.width = "4px";
      ripple.style.height = "4px";
      ripple.style.background = `${colors[500]}99`;
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.pointerEvents = "none";
      ripple.style.animation = "pulse-glow 1s ease-out forwards";
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener("click", onClick);

    // Floating elements on scroll
    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document.querySelectorAll<HTMLElement>(".floating-element").forEach((el, index) => {
          setTimeout(() => {
            el.style.animationPlayState = "running";
          }, index * 200);
        });
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div id="hero" className="min-h-screen text-white overflow-hidden relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={`${CDN}/000modern.jpg`}
          alt="Modern roofing project"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#262626]/95 via-[#262626]/85 to-[#262626]/90" />
        {/* Blue tint overlay */}
        <div className="absolute inset-0 bg-[#404040]/5" />
      </div>

      {/* Grid SVG Background */}
      <svg className="absolute inset-0 w-full h-full z-[1]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(37,99,235,0.1)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: "0.5s" }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: "1s" }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: "1.5s" }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: "2s" }} />
        <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line" style={{ animationDelay: "2.5s", opacity: 0.05 }} />
        <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line" style={{ animationDelay: "3s", opacity: 0.05 }} />
        <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3s" }} />
        <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3.2s" }} />
        <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.4s" }} />
        <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.6s" }} />
        <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: "4s" }} />
      </svg>

      {/* Blue accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#404040] z-20"></div>

      {/* Corner elements */}
      <div className="corner-element top-8 left-8 z-10" style={{ animationDelay: "4s" }}>
        <div className="absolute top-0 left-0 w-2 h-2 opacity-30" style={{ background: colors[500] }}></div>
      </div>
      <div className="corner-element top-8 right-8 z-10" style={{ animationDelay: "4.2s" }}>
        <div className="absolute top-0 right-0 w-2 h-2 opacity-30" style={{ background: colors[500] }}></div>
      </div>
      <div className="corner-element bottom-8 left-8 z-10" style={{ animationDelay: "4.4s" }}>
        <div className="absolute bottom-0 left-0 w-2 h-2 opacity-30" style={{ background: colors[500] }}></div>
      </div>
      <div className="corner-element bottom-8 right-8 z-10" style={{ animationDelay: "4.6s" }}>
        <div className="absolute bottom-0 right-0 w-2 h-2 opacity-30" style={{ background: colors[500] }}></div>
      </div>

      {/* Floating elements */}
      <div className="floating-element z-10" style={{ top: "25%", left: "15%", animationDelay: "5s" }}></div>
      <div className="floating-element z-10" style={{ top: "60%", left: "85%", animationDelay: "5.5s" }}></div>
      <div className="floating-element z-10" style={{ top: "40%", left: "10%", animationDelay: "6s" }}></div>
      <div className="floating-element z-10" style={{ top: "75%", left: "90%", animationDelay: "6.5s" }}></div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 py-12 md:px-16 md:py-20 pt-24">
        {/* Main content - centered */}
        <div className="text-center max-w-5xl mx-auto relative">
          {/* BIG Centered Logo */}
          <div
            className="mb-6 opacity-0"
            style={{ animation: "word-appear 1s ease-out forwards", animationDelay: "0.2s" }}
          >
            <Image
              src="https://lirp.cdn-website.com/ae93590e/dms3rep/multi/opt/Rain-Roofing-Company-Logo-2a6c5680-1920w.png"
              alt="Rain Roofing"
              width={400}
              height={120}
              className="h-48 md:h-64 lg:h-80 w-auto mx-auto"
              priority
            />
          </div>

          {/* Tagline under logo */}
          <p
            className="text-lg md:text-2xl font-light uppercase tracking-[0.25em] mb-10 opacity-0"
            style={{ color: colors.gray400, animation: "word-appear 0.8s ease-out forwards", animationDelay: "0.6s" }}
          >
            Your Trusted West Texas Roofing Experts
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight tracking-tight text-white mb-6">
            <div className="mb-2 md:mb-4">
              <span className="word" data-delay="800">Reliable.</span>
              <span className="word" data-delay="950">Strong.</span>
              <span className="word" data-delay="1100">Built</span>
              <span className="word" data-delay="1250">for</span>
              <span className="word font-semibold" data-delay="1400" style={{ color: "#ffffff" }}>West Texas.</span>
            </div>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-xl md:text-2xl lg:text-3xl font-thin leading-relaxed mb-12 opacity-0"
            style={{ color: colors.gray400, animation: "word-appear 0.8s ease-out forwards", animationDelay: "1.8s" }}
          >
            Roof inspections, repairs, replacements, and emergency services — all in Lubbock.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
            style={{ animation: "word-appear 1s ease-out forwards", animationDelay: "2.2s" }}
          >
            <Button asChild size="lg" className="bg-white hover:bg-white/90 text-[#171717] font-bold px-10 py-7 text-lg rounded-xl shadow-lg shadow-white/10">
              <Link href="/#contact">Get Free Inspection</Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent hover:bg-white/10 text-white font-semibold px-10 py-7 text-lg border-2 border-white rounded-xl">
              <Link href="tel:806-808-1317">Call 806-808-1317</Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-0"
            style={{ animation: "word-appear 0.8s ease-out forwards", animationDelay: "2.6s" }}
          >
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">24/7</p>
              <p className="text-xs uppercase tracking-wider" style={{ color: colors.gray400 }}>Emergency Service</p>
            </div>
            <div className="w-px h-10 bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">Free</p>
              <p className="text-xs uppercase tracking-wider" style={{ color: colors.gray400 }}>Estimates</p>
            </div>
            <div className="w-px h-10 bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">100%</p>
              <p className="text-xs uppercase tracking-wider" style={{ color: colors.gray400 }}>Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
