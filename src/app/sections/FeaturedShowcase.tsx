import { locations } from "@/lib/locations";

export default function FeaturedShowcase() {
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

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Showroom Favorites
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured Furniture & Mattresses
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Discover some of our most popular furniture and mattress collections
            available in our showroom and through special order.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-3 left-3">
                  <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BLOCK (SCROLL TARGET) */}
        <div id="store-cta" className="mt-16 text-center">

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            See Even More In Our Showroom
          </h3>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit Premier Furniture in McKenzie or Union City to explore our
            latest inventory, special orders, financing options, and seasonal promotions.
          </p>

          <div className="flex flex-col items-center gap-6">

            {/* McKenzie */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl">

              <a
                href={locations.mckenzie.phone}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 rounded-xl transition text-center"
              >
                Call McKenzie
              </a>

              <a
                href={locations.mckenzie.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-900 font-semibold px-6 py-4 rounded-xl transition text-center"
              >
                McKenzie Directions
              </a>

            </div>

            {/* Union City */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl">

              <a
                href={locations.unionCity.phone}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 rounded-xl transition text-center"
              >
                Call Union City
              </a>

              <a
                href={locations.unionCity.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-900 font-semibold px-6 py-4 rounded-xl transition text-center"
              >
                Union City Directions
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}