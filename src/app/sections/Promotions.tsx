export default function Promotions() {
  return (
    <section
      id="promotions"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            Special Offers
          </span>

          <h2 className="text-4xl font-extrabold mt-3">
            Current Promotions
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Take advantage of limited-time savings on furniture, mattresses,
            recliners, and more from the brands you trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {/* Promotion 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="bg-red-600 text-white px-6 py-3 font-semibold">
              July 4th Sales Event
            </div>

            <div className="p-8">
              <div className="text-5xl mb-4">🛏️</div>

              <h3 className="text-xl font-bold">
                Mattress Savings Event
              </h3>

              <p className="text-gray-600 mt-3">
                Save on top mattress brands with special pricing available for
                a limited time starting June 16th!
              </p>
            </div>
          </div>

          {/* Promotion 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="bg-black text-white px-6 py-3 font-semibold">
              Clearance Event
            </div>

            <div className="p-8">
              <div className="text-5xl mb-4">🏷️</div>

              <h3 className="text-xl font-bold">
                Floor Model Discounts
              </h3>

              <p className="text-gray-600 mt-3">
                Incredible deals on showroom furniture while inventory lasts.
              </p>
            </div>
          </div>

          {/* Promotion 3 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="bg-red-600 text-white px-6 py-3 font-semibold">
              Financing Available
            </div>

            <div className="p-8">
              <div className="text-5xl mb-4">💳</div>

              <h3 className="text-xl font-bold">
                0% APR Financing Options
              </h3>

              <p className="text-gray-600 mt-3">
                Flexible financing available on qualifying purchases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}