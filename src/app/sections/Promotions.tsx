const promotions = [
  {
    label: "Limited-Time Event",
    title: "Labor Day Mattress Sale",
    description: "Save on select mattresses during our Labor Day Sale.",
    details: "August 11–September 15",
  },
  {
    label: "In-Stock Clearance",
    title: "Save 40%, 50%, Even 60% Off",
    description:
      "Clearance savings on select in-stock furniture and mattresses.",
    details: "While supplies last",
  },
  {
    label: "Flexible Financing",
    title: "12 Months Same as Cash",
    description:
      "Flexible financing options can help make your purchase more manageable.",
    details: "Available upon qualification",
  },
];

export default function Promotions() {
  return (
    <section
      id="promotions"
      aria-labelledby="promotions-heading"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-red-600">
            Current Promotions
          </span>

          <h2
            id="promotions-heading"
            className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl"
          >
            More Ways to Save
          </h2>

          <p className="mt-3 text-base text-gray-600">
            Visit either Premier Furniture showroom for availability and
            complete promotional details.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {promotions.map((promotion) => (
            <article
              key={promotion.title}
              className="rounded-2xl border border-gray-200 border-t-4 border-t-red-600 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-red-600">
                {promotion.label}
              </span>

              <h3 className="mt-3 text-xl font-bold text-gray-950">
                {promotion.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {promotion.description}
              </p>

              <div className="mt-5 border-t border-gray-100 pt-4 text-sm font-semibold text-gray-800">
                {promotion.details}
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-7 max-w-4xl text-center text-xs leading-relaxed text-gray-500">
          Offers apply to qualifying merchandise while supplies last.
          Financing is subject to approval and applicable terms. See store for
          complete details.
        </p>
      </div>
    </section>
  );
}