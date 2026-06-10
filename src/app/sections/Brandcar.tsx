"use client";

import { brands } from "@/data/brands";

const weightMap: Record<string, string> = {
  Serta: "h-10",
  "Tempur-Pedic": "h-10",
  Beautyrest: "h-12",
  Catnapper: "h-12",
  Mayo: "h-12",
  Ashley: "h-14",
  Bassett: "h-11",
  "Best Home Furnishings": "h-11",
  Helix: "h-10",
  "Capital Bedding": "h-10",
};

export default function BrandCarousel() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 border-y overflow-hidden">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold tracking-tight text-[#111827]">
          Trusted National Brands
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Premium furniture and mattress partners available in-store and special order
        </p>
      </div>

      {/* Carousel wrapper */}
      <div className="relative">

        {/* softer edge fade (premium look) */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        {/* track */}
        <div className="flex w-max animate-marquee gap-20 items-center hover:[animation-play-state:paused]">

          {[...brands, ...brands].map((b, i) => (
            <div
              key={`${b.name}-${i}`}
              className="flex items-center justify-center w-48 h-28"
            >

              {/* premium card */}
              <div className="
                flex items-center justify-center
                w-44 h-20
                bg-white/80
                backdrop-blur
                border border-gray-200
                rounded-xl
                shadow-sm
                hover:shadow-md
                transition-all duration-300
              ">

                <img
                  src={b.logo}
                  alt={b.name}
                  className={`
                    ${weightMap[b.name] || "h-10"}
                    w-auto
                    object-contain
                    opacity-80
                    hover:opacity-100
                    hover:scale-110
                    transition-all duration-300
                  `}
                />

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}