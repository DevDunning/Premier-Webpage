import { MapPin, Phone } from "lucide-react";
import { locations } from "@/lib/locations";

const showrooms = [locations.mckenzie, locations.unionCity];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
          We&apos;re here to help
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Visit or Call Premier Furniture Today
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Contact our McKenzie or Union City showroom for current inventory,
          special orders, delivery questions, and financing options subject to
          approval.
        </p>

        <div className="mt-10 grid gap-5 text-left md:grid-cols-2">
          {showrooms.map((showroom) => (
            <article
              key={showroom.shortName}
              className="rounded-2xl border border-white/15 bg-white/5 p-6"
            >
              <h3 className="text-xl font-bold text-white">{showroom.name}</h3>

              <p className="mt-2 text-sm text-gray-400">
                {showroom.address}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  <MapPin aria-hidden="true" className="h-4 w-4" />
                  Directions
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}