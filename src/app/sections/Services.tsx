export default function Services() {
  const services = [
    {
      title: "Showroom Selection",
      desc: "Browse curated furniture from trusted American brands in person before you buy.",
    },
    {
      title: "Special Orders",
      desc: "Access extended catalogs from top manufacturers when items aren’t in stock.",
    },
    {
      title: "Local Delivery",
      desc: "Reliable delivery across West Tennessee with careful handling and setup options.",
    },
    {
      title: "Financing Options",
      desc: "Flexible payment plans available through approved financing partners.",
    },
    {
      title: "Room Guidance",
      desc: "Help selecting matching sets and layouts that fit your space and style.",
    },
    {
      title: "Customer Support",
      desc: "Direct assistance before and after purchase for a smooth experience.",
    },
  ];

  return (
    <section id="services" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold tracking-tight text-black">
            Services
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Everything you need to furnish your home with confidence and clarity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((item, i) => (
            <div
              key={i}
              className="group border border-gray-200 rounded-xl p-7
                         bg-white hover:shadow-md hover:border-gray-300
                         transition-all duration-200"
            >
              <div className="w-10 h-1 bg-black mb-5"></div>

              <h3 className="text-lg font-semibold text-black group-hover:translate-x-0.5 transition">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}