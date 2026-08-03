"use client";

import Image from "next/image";
import { trackEvent } from "@/lib/analytics";
import { locations } from "@/lib/locations";

const items = [
  {
    title: "Luxury Recliners",
    description:
      "Comfort-first seating from trusted brands built for everyday relaxation.",
    image: "/images/bestrecliner.jpg",
    badge: "Customer Favorite",
  },
  {
    title: "Living Room Sets",
    description:
      "Sofas, loveseats, sectionals, and complete living room collections.",
    image: "/images/ada.jpg",
    badge: "Best Seller",
  },
  {
    title: "Premium Mattresses",
    description:
      "Shop Serta, Beautyrest, Tempur-Pedic, Helix, and more.",
    image: "/images/beautyrestbase.png",
    badge: "Financing Available",
  },
  {
    title: "Bedroom Sets",
    description:
      "Beautiful bedroom packages with beds, dressers, and nightstands.",
    image: "/images/bedset.png",
    badge: "In Stock & Orderable",
  },
];

const showrooms = [locations.mckenzie, locations.unionCity];

export default function FeaturedShowcase() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-700">
            Showroom Favorites
          </span>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Featured Furniture &amp; Mattresses
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Explore popular furniture and mattress collections available in our
            showrooms and through special order.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute left-3 top-3">
                  <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                    {item.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div id="store-cta" className="mt-16 scroll-mt-28 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            Visit a Premier Furniture Showroom
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Browse current inventory, ask about special orders, and get help
            choosing furniture or mattresses for your home.
          </p>

          <div className="mx-auto mt-10 grid w-full max-w-4xl gap-6 text-left md:grid-cols-2">
            {showrooms.map((showroom) => (
              <article
                key={showroom.shortName}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h4 className="text-lg font-bold text-gray-950">
                  {showroom.name}
                </h4>

                <p className="mt-2 text-sm text-gray-600">
                  {showroom.address}
                </p>

                <dl className="mt-5 space-y-2 border-t border-gray-100 pt-5 text-sm">
                  {showroom.hours.map((entry) => (
                    <div
                      key={entry.days}
                      className="flex items-start justify-between gap-6"
                    >
                      <dt className="font-medium text-gray-700">
                        {entry.days}
                      </dt>

                      <dd className="text-right text-gray-600">
                        {entry.hours}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={showroom.phone}
                    onClick={() =>
                      trackEvent("call_click", {
                        location: showroom.shortName.toLowerCase(),
                      })
                    }
                    className="rounded-xl bg-red-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Call {showroom.shortName}
                  </a>

                  <a
                    href={showroom.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("directions_click", {
                        location: showroom.shortName.toLowerCase(),
                      })
                    }
                    className="rounded-xl border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
                  >
                    Get Directions
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}