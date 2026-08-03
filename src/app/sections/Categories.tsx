import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section id="categories" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Shop By Room
          </span>

          <h2 className="mt-3 text-4xl font-extrabold">
            Furniture Categories
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover quality furniture and mattresses for every room in your
            home.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group relative h-80 cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/55 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                Gallery Coming Soon
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="mb-2 text-2xl font-bold">
                  {category.title}
                </h3>

                <div className="flex items-center font-medium text-red-400">
                  View Category
                  <span className="ml-2 transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}