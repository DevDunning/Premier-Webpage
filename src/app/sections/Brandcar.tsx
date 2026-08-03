import Image from "next/image";
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

function BrandList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      aria-hidden={duplicate ? "true" : undefined}
      className="flex shrink-0 items-center gap-4 pr-4"
    >
      {brands.map((brand) => (
        <li
          key={brand.name}
          className="flex min-h-28 w-44 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:w-48 lg:w-52"
        >
          <Image
            src={brand.logo}
            alt={duplicate ? "" : brand.name}
            width={176}
            height={80}
            sizes="208px"
            className={`${
              weightMap[brand.name] || "h-10"
            } w-auto max-w-full object-contain`}
          />
        </li>
      ))}
    </ul>
  );
}

export default function BrandCarousel() {
  return (
    <section
      id="brands"
      aria-labelledby="brands-heading"
      className="scroll-mt-24 overflow-hidden border-y bg-gradient-to-b from-white to-gray-50 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2
            id="brands-heading"
            className="text-2xl font-semibold tracking-tight text-gray-950"
          >
            Trusted National Brands
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Furniture and mattress partners available in-store and by special
            order
          </p>
        </div>
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
          <BrandList />
          <BrandList duplicate />
        </div>
      </div>
    </section>
  );
}