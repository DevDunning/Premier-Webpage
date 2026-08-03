import { locations } from "@/lib/locations";

export default function AccessibilityPage() {
  return (
    <main id="main-content" className="bg-white">
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Accessibility
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-950">
            Accessibility Statement
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Last updated: August 2, 2026
          </p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Our commitment
              </h2>

              <p className="mt-3">
                Premier Furniture is committed to making its website and
                showroom information accessible to people with disabilities. We
                aim to support recognized accessibility practices, including the
                Web Content Accessibility Guidelines (WCAG) 2.2 Level AA, as an
                ongoing goal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Accessibility features
              </h2>

              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Keyboard-accessible navigation and controls</li>
                <li>A skip link for moving directly to page content</li>
                <li>Visible keyboard focus indicators</li>
                <li>Text alternatives for meaningful images</li>
                <li>Responsive layouts that support browser zoom</li>
                <li>Reduced animation for users who request reduced motion</li>
                <li>Semantic headings, links, lists, tables, and landmarks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Ongoing improvement
              </h2>

              <p className="mt-3">
                Accessibility is an ongoing process. Product images, external
                links, and future content will be reviewed as the website is
                updated. Third-party websites linked from this site are managed
                by their respective providers and may have different
                accessibility features.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Need help or found a barrier?
              </h2>

              <p className="mt-3">
                If you have difficulty using this website or need information in
                another format, please tell us what page or feature caused the
                problem and what assistance you need. We will make a reasonable
                effort to help and improve the experience.
              </p>

              <ul className="mt-4 space-y-3">
                <li>
                  <strong>{locations.mckenzie.name}:</strong>{" "}
                  <a
                    className="text-red-700 underline"
                    href={locations.mckenzie.phone}
                  >
                    {locations.mckenzie.phoneDisplay}
                  </a>
                </li>

                <li>
                  <strong>{locations.unionCity.name}:</strong>{" "}
                  <a
                    className="text-red-700 underline"
                    href={locations.unionCity.phone}
                  >
                    {locations.unionCity.phoneDisplay}
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}