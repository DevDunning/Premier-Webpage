import Image from "next/image";

const categories = [
  {
    title: "Living Room Sets",
    image: "/images/Marley.jpg",
  },
  {
    title: "Bedroom Furniture",
    image: "/images/bedset.png",
  },
  {
    title: "Mattresses",
    image: "/images/beautyrestbase.png",
  },
  {
    title: "Recliners",
    image: "/images/bestrecliner.jpg",
  },
  {
    title: "Dining Sets",
    image: "/images/dining.jpg",
  },
  {
    title: "Coffee & End Tables",
    image: "/images/coffee.png",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            Shop By Room
          </span>

          <h2 className="text-4xl font-extrabold mt-3">
            Furniture Categories
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover quality furniture and mattresses for every room in your
            home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group relative h-80 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {category.title}
                </h3>

                <div className="flex items-center text-red-400 font-medium">
                  Explore Collection
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}