import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock3, Images, MapPin, Phone } from "lucide-react";
import type { FurnitureCategory } from "@/data/categories";
import { locations } from "@/lib/locations";

type CategoryComingSoonProps = {
  category: FurnitureCategory;
};

const showrooms = [locations.mckenzie, locations.unionCity];

export default function CategoryComingSoon({
  category,
}: CategoryComingSoonProps) {
  return (
    <main id="main-content" className="bg-white">
      <section className="relative overflow-hidden bg-gray-950 px-0 py-0">
        <div className="mx-auto grid min-h-[560px] max-w-7xl lg:grid-cols-2">
          <div className="relative z-10 flex items-center px-6 py-20 sm:px-10 lg:px-14">
            <div className="max-w-xl">
              <Link
                href="/#categories"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                All furniture categories
              </Link>

              <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                {category.eyebrow}
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {category.title}
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                {category.summary}
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-100">
                <Images aria-hidden="true" className="h-4 w-4" />
                Product gallery coming soon
              </div>
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-full">
            <Image
              src={category.image}
              alt={category.imageAlt}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-gray-950/40 lg:to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <article className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                <Clock3 aria-hidden="true" className="h-6 w-6" />
              </span>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-950">
                We&apos;re preparing this collection
              </h2>

              <p className="mt-4 leading-relaxed text-gray-600">
                {category.introduction}
              </p>

              <p className="mt-4 leading-relaxed text-gray-600">
                We&apos;re adding authorized product images and accurate item
                details before publishing the online gallery. Current showroom
                inventory can change, so call or visit for the latest selection.
              </p>

              <div className="mt-8 border-t border-gray-100 pt-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-950">
                  What you&apos;ll be able to explore
                </h3>

                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {category.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <aside className="rounded-3xl bg-gray-950 p-8 text-white shadow-xl sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
                Shop in person now
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Visit a Premier showroom
              </h2>

              <p className="mt-4 leading-relaxed text-gray-300">
                Our local team can help with availability, measurements,
                coordinating pieces, special orders, delivery, and financing
                options subject to approval.
              </p>

              <div className="mt-8 space-y-6">
                {showrooms.map((showroom) => (
                  <div
                    key={showroom.shortName}
                    className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0"
                  >
                    <h3 className="font-bold">{showroom.name}</h3>

                    <p className="mt-2 text-sm text-gray-400">
                      {showroom.address}
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      <a
                        href={showroom.phone}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                      >
                        <Phone aria-hidden="true" className="h-4 w-4" />
                        {showroom.phoneDisplay}
                      </a>

                      <a
                        href={showroom.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-gray-950"
                      >
                        <MapPin aria-hidden="true" className="h-4 w-4" />
                        Directions
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}