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

  const highlights = [
    { value: "2", label: "West Tennessee Showrooms" },
    { value: "10+", label: "Trusted Brand Partners" },
    { value: "Local", label: "Sales & Delivery Team" },
    { value: "Flexible", label: "In-Store & Special Order" },
  ];

  return (
    <section id="why-us" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Why Choose Premier
          </span>

          <h2 className="mt-4 text-4xl font-semibold text-black">
            Built Around Service &amp; Trust
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-600">
            A straightforward furniture experience focused on quality brands,
            dependable service, and long-term value.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-xl border border-gray-100 bg-gray-50/40 p-6"
            >
              <div className="mb-5 h-[2px] w-10 bg-gray-900" />

              <h3 className="text-lg font-medium text-black">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-10 border-t border-gray-200 pt-10 md:grid-cols-4">
          {highlights.map((highlight) => (
            <div key={highlight.label} className="text-center">
              <div className="text-3xl font-semibold text-black">
                {highlight.value}
              </div>

              <p className="mt-2 text-sm text-gray-500">
                {highlight.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}