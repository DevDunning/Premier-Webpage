import Link from "next/link";
import { locations } from "@/lib/locations";

export default function PrivacyPage() {
  return (
    <main id="main-content" className="bg-white">
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Legal
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-950">
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Last updated: August 2, 2026
          </p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Scope of this policy
              </h2>

              <p className="mt-3">
                This policy explains how Premier Furniture handles information
                connected with this website and our McKenzie and Union City
                showrooms. This website is primarily informational and does not
                process online furniture purchases, payment-card transactions,
                or credit applications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Information we may collect
              </h2>

              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Information you voluntarily provide when you call, visit, or
                  otherwise contact a showroom, such as your name, contact
                  details, order information, and service request.
                </li>

                <li>
                  Basic website usage and device information through Google
                  Analytics, but only after you choose “Allow Analytics” in our
                  privacy banner.
                </li>

                <li>
                  A local browser preference recording whether you accepted or
                  declined optional analytics.
                </li>
              </ul>

              <p className="mt-3">
                Please do not send sensitive personal or financial information
                through an unsecured channel.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                How information is used
              </h2>

              <p className="mt-3">
                We use information to respond to inquiries, provide requested
                products or services, coordinate orders and delivery, support
                customers, maintain business records, protect the website, and
                understand website performance when analytics is allowed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Sharing and third-party services
              </h2>

              <p className="mt-3">
                Premier Furniture does not sell or rent personal information.
                Information may be shared when reasonably necessary with
                manufacturers, delivery or service providers, professional
                advisers, technology providers, or financing providers selected
                by the customer, and when required by law.
              </p>

              <p className="mt-3">
                Links to Google Maps, Facebook, financing providers, and other
                outside services take you to third-party websites governed by
                their own terms and privacy policies. Review those policies
                before submitting information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Cookies and analytics
              </h2>

              <p className="mt-3">
                Optional Google Analytics does not load unless you allow it. You
                can decline analytics or change your choice at any time through
                “Cookie Settings” in the footer. Details are available in our{" "}
                <Link
                  href="/cookies"
                  className="font-semibold text-red-700 underline"
                >
                  Cookies Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Retention and security
              </h2>

              <p className="mt-3">
                We retain information only as long as reasonably necessary for
                the purpose collected, business and warranty records, dispute
                resolution, or legal obligations. We use reasonable
                administrative and technical safeguards, but no internet or
                storage system can be guaranteed completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Your privacy choices
              </h2>

              <p className="mt-3">
                Depending on applicable law, you may request access, correction,
                or deletion of personal information associated with you. You may
                also ask questions about how information is used. We may need to
                verify your identity before completing a request.
              </p>

              <p className="mt-3">
                Premier Furniture does not use this website to sell personal
                information, conduct cross-site targeted advertising, or make
                decisions based solely on automated profiling.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Children&apos;s privacy
              </h2>

              <p className="mt-3">
                This website is not directed to children under 13, and we do not
                knowingly collect personal information from children through
                the website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">
                Changes to this policy
              </h2>

              <p className="mt-3">
                We may update this policy as our website, services, or legal
                obligations change. The date above shows the latest revision.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-950">Contact us</h2>

              <p className="mt-3">
                For a privacy question or request, contact either showroom:
              </p>

              <ul className="mt-3 space-y-3">
                <li>
                  <strong>{locations.mckenzie.name}:</strong>{" "}
                  <a
                    className="text-red-700 underline"
                    href={locations.mckenzie.phone}
                  >
                    {locations.mckenzie.phoneDisplay}
                  </a>
                  , {locations.mckenzie.address}
                </li>

                <li>
                  <strong>{locations.unionCity.name}:</strong>{" "}
                  <a
                    className="text-red-700 underline"
                    href={locations.unionCity.phone}
                  >
                    {locations.unionCity.phoneDisplay}
                  </a>
                  , {locations.unionCity.address}
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}