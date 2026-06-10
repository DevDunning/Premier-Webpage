export default function WhyUs() {
  const benefits = [
    {
      title: "Fast Local Delivery",
      description:
        "Professional delivery and setup across our service area.",
    },
    {
      title: "Discounted Prices",
      description:
        "Save on top furniture and mattress brands with exclusive deals.",
    },
    {
      title: "Flexible Financing",
      description:
        "Payment plans available through approved financing partners.",
    },
    {
      title: "Trusted Brands",
      description:
        "A curated selection of national furniture and mattress brands.",
    },
  ];

  const stats = [
    { value: "5K+", label: "Customers Served" },
    { value: "20+", label: "Years Experience" },
    { value: "10+", label: "Brand Partners" },
    { value: "100%", label: "Service Focused" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <span className="text-gray-500 uppercase tracking-[0.2em] text-xs">
            Why Choose Premier
          </span>

          <h2 className="text-4xl font-semibold mt-4 text-black">
            Built Around Service & Trust
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-relaxed">
            A straightforward furniture experience focused on quality brands,
            dependable service, and long-term value.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="border border-gray-100 rounded-xl p-6 bg-gray-50/40"
            >
              <div className="w-10 h-[2px] bg-gray-900 mb-5" />

              <h3 className="text-lg font-medium text-black">
                {b.title}
              </h3>

              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 pt-10 border-t border-gray-200">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-semibold text-black">
                {s.value}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}