import Link from "next/link";

export default function CookiesPage() {
  return (
    <main id="main-content" className="bg-white">
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Legal
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-950">
            Cookies Policy
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Last updated: August 2, 2026
          </p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-950">
                What cookies are
              </h2>

              <p className="mt-3">
                Cookies are small files a website can store in your browser.
                Similar browser storage can remember settings without placing a
                traditional cookie.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                How this website uses them
              </h2>

              <p className="mt-3">
                Premier Furniture uses local browser storage to remember your
                analytics choice. This preference is necessary to respect your
                selection and does not track your activity across websites.
              </p>

              <p className="mt-3">
                Google Analytics is optional and remains off unless you select
                “Allow Analytics.” When allowed, Google Analytics may set:
              </p>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="px-3 py-3 font-bold text-gray-950">
                        Name
                      </th>

                      <th className="px-3 py-3 font-bold text-gray-950">
                        Purpose
                      </th>

                      <th className="px-3 py-3 font-bold text-gray-950">
                        Default duration
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-3 py-3 font-mono">_ga</td>
                      <td className="px-3 py-3">
                        Distinguishes website visitors.
                      </td>
                      <td className="px-3 py-3">Up to 2 years</td>
                    </tr>

                    <tr className="border-b border-gray-200">
                      <td className="px-3 py-3 font-mono">_ga_*</td>
                      <td className="px-3 py-3">
                        Maintains analytics session state.
                      </td>
                      <td className="px-3 py-3">Up to 2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Analytics limits
              </h2>

              <p className="mt-3">
                Our configuration disables advertising storage, ad
                personalization, and Google Signals. Analytics is used to
                understand website performance, not to sell personal
                information or conduct cross-site targeted advertising.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Change your choice
              </h2>

              <p className="mt-3">
                Select “Cookie Settings” in the website footer at any time.
                Declining analytics prevents the analytics script from loading.
                If you previously allowed analytics and then decline, the site
                also attempts to remove its Google Analytics cookies from your
                browser.
              </p>

              <p className="mt-3">
                You can also delete or block cookies through your browser. Those
                controls vary by browser and device.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Third-party websites
              </h2>

              <p className="mt-3">
                Links to external services such as Google Maps, Facebook, or a
                financing provider may use cookies under their own policies
                after you leave this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                More information
              </h2>

              <p className="mt-3">
                Read our{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-red-700 underline"
                >
                  Privacy Policy
                </Link>{" "}
                for more detail about how information is handled.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}