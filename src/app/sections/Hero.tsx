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

  return (
    <section className="relative h-[85vh] min-h-[700px] overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt=""
              className={`h-full w-full object-cover transition-transform duration-[6000ms] ${
                index === current ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">

            <span className="inline-flex items-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg mb-6">
              Serving West Tennessee Since 2001
            </span>

            <h1
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              style={{
                textShadow: "0 4px 20px rgba(0,0,0,0.8)",
              }}
            >
              Quality Furniture.
              <br />
              Affordable Prices.
            </h1>

            <p
              className="mt-6 max-w-2xl text-lg md:text-xl text-white font-medium leading-relaxed"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              Discover furniture and mattresses from trusted brands including
              Serta, Beautyrest, Tempur-Pedic, Ashley, Catnapper, Bassett, Best
              Home Furnishings, and more. Financing available on approved
              credit, free local delivery, and expert service you can trust.
            </p>

           

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm md:text-base text-white/95">
              <span>✓ Financing Available</span>
              <span>✓ Discounted Prices</span>
              <span>✓ Top National Brands</span>
              <span>✓ Serving All of West Tennessee</span>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}