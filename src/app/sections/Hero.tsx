"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
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
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!isPlaying || prefersReducedMotion) {
      return;
    }

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="relative h-[85vh] min-h-[520px] overflow-hidden md:min-h-[700px]">
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
              <Image
                src={slide}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className={`h-full w-full object-cover transition-transform duration-[6000ms] ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 md:from-black/85 md:via-black/65 md:to-black/40" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="mb-5 inline-flex items-center rounded-full bg-red-600 px-3 py-1.5 text-xs font-semibold text-white shadow-lg sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              Serving West Tennessee Since 2001
            </span>

            <h1
              className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl lg:text-7xl"
              style={{
                textShadow: "0 4px 20px rgba(0,0,0,0.8)",
              }}
            >
              Quality Furniture.
              <br />
              Affordable Prices.
            </h1>

            <p
              className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-white sm:mt-6 sm:text-lg md:text-xl"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              Discover furniture and mattresses from trusted brands including
              Serta, Beautyrest, Tempur-Pedic, Ashley, Catnapper, Bassett, Best
              Home Furnishings, and more. Financing available on approved
              credit, free local delivery, and expert service you can trust.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 text-sm text-white/95 sm:grid-cols-2 sm:gap-4 md:text-base lg:flex lg:flex-wrap">
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

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent sm:h-32" />

      <button
        type="button"
        onClick={() => setIsPlaying((playing) => !playing)}
        className="absolute bottom-6 right-6 z-20 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/30 bg-black/55 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition hover:bg-black/75 motion-reduce:hidden"
      >
        {isPlaying ? (
          <Pause aria-hidden="true" className="h-4 w-4" />
        ) : (
          <Play aria-hidden="true" className="h-4 w-4" />
        )}

        {isPlaying ? "Pause slideshow" : "Play slideshow"}
      </button>
    </section>
  );
}