"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { locations } from "@/lib/locations";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-black">
              Premier Furniture
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Quality home furnishings with trusted brands, local service,
              and a straightforward showroom experience.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-black">
              Navigation
            </h4>

            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-black">
                Home
              </Link>

              <Link href="/#categories" className="hover:text-black">
                Categories
              </Link>

              <Link href="/#services" className="hover:text-black">
                Services
              </Link>

              <Link href="/#why-us" className="hover:text-black">
                Why Us
              </Link>

              <Link href="/#store-cta" className="hover:text-black">
                Showrooms
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-black">
              Legal
            </h4>

            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <Link href="/terms" className="hover:text-black">
                Terms &amp; Conditions
              </Link>

              <Link href="/privacy" className="hover:text-black">
                Privacy Policy
              </Link>

              <Link href="/cookies" className="hover:text-black">
                Cookies Policy
              </Link>

              <Link href="/accessibility" className="hover:text-black">
                Accessibility
              </Link>

              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(
                    new Event("premier:open-cookie-settings"),
                  )
                }
                className="text-left hover:text-black"
              >
                Cookie Settings
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-black">
              Connect
            </h4>

            <div className="flex flex-col gap-3 text-sm text-gray-600">
              <a
                href={locations.social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("google_business_click")}
                className="hover:text-black"
              >
                Google Business
              </a>

              <a
                href={locations.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("social_click", { platform: "facebook" })
                }
                className="hover:text-black"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t pt-6 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Premier Furniture. All rights reserved.
          </p>

          <p>Serving West Tennessee and surrounding areas.</p>
        </div>
      </div>
    </footer>
  );
}