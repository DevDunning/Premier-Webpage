export default function Services() {
  const services = [
    {
      title: "Showroom Selection",
      description:
        "Browse curated furniture from trusted national brands in person before you buy.",
    },
    {
      title: "Special Orders",
      description:
        "Access extended catalogs from top manufacturers when items aren’t in stock.",
    },
    {
      title: "Local Delivery",
      description:
        "Reliable delivery across West Tennessee with careful handling and setup options.",
    },
    {
      title: "Financing Options",
      description:
        "Flexible payment plans available through approved financing partners.",
    },
    {
      title: "Room Guidance",
      description:
        "Help selecting matching sets and layouts that fit your space and style.",
    },
    {
      title: "Customer Support",
      description:
        "Direct assistance before and after purchase for a smooth experience.",
    },
  ];

  return (
    <section id="services" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-black">
            Services
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Everything you need to furnish your home with confidence and
            clarity.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-xl border border-gray-200 bg-white p-7 transition-all duration-200 hover:border-gray-300 hover:shadow-md"
            >
              <div className="mb-5 h-1 w-10 bg-black" />

              <h3 className="text-lg font-semibold text-black transition group-hover:translate-x-0.5">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}