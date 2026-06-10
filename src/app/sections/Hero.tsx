"use client";

import { useEffect, useState } from "react";

const slides = [
  "/images/store1.png",
  "/images/store2.png",
  "/images/store3.png",
  "/images/store4.png",
  "/images/store5.png",
  "/images/store6.png",
  "/images/store8.png",
  "/images/store9.png",
  "/images/store10.png",
  "/images/store11.png",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // preload first slide for faster LCP
  useEffect(() => {
    const img = new Image();
    img.src = slides[0];
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[520px] md:min-h-[700px] overflow-hidden">
      {/* Background Slides (optimized: only active + next rendered) */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const isActive = index === current;
          const isNext = index === (current + 1) % slides.length;

          if (!isActive && !isNext) return null;

          return (
            <div
              key={slide}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide}
                alt=""
                loading={isActive ? "eager" : "lazy"}
                className={`h-full w-full object-cover transition-transform duration-[6000ms] ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Gradient Overlay (stronger on mobile) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 md:from-black/85 md:via-black/65 md:to-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">

            {/* Badge */}
            <span className="inline-flex items-center rounded-full bg-red-600 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-lg mb-5 sm:mb-6">
              Serving West Tennessee Since 2001
            </span>

            {/* Headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              style={{
                textShadow: "0 4px 20px rgba(0,0,0,0.8)",
              }}
            >
              Quality Furniture.
              <br />
              Affordable Prices.
            </h1>

            {/* Description */}
            <p
              className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white font-medium leading-relaxed"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              Discover furniture and mattresses from trusted brands including
              Serta, Beautyrest, Tempur-Pedic, Ashley, Catnapper, Bassett, Best
              Home Furnishings, and more. Financing available on approved
              credit, free local delivery, and expert service you can trust.
            </p>

            {/* Trust Indicators (mobile-safe layout) */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-3 sm:gap-4 text-sm md:text-base text-white/95">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Financing Available</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Discounted Prices</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Top National Brands</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Serving All of West Tennessee</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}