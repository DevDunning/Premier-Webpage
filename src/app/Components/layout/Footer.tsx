import Link from "next/link";
import { locations } from "@/lib/locations";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-black">
              Premier Furniture
            </h3>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Quality home furnishings with trusted brands, local service,
              and a straightforward showroom experience.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">
              Navigation
            </h4>

            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-black">Home</Link>
              <Link href="/#services" className="hover:text-black">Services</Link>
              <Link href="/#why-us" className="hover:text-black">Why Us</Link>
              <Link href="#store-cta" className="hover:text-black">Showrooms</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">
              Legal
            </h4>

            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <Link href="/terms" className="hover:text-black">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-black">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-black">
                Cookies Policy
              </Link>
            </div>
          </div>

          {/* Trust / Social */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">
              Connect
            </h4>

            <div className="flex flex-col gap-3 text-sm text-gray-600">

              <a
                href={locations.social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                Google Business
              </a>

              <a
                href={locations.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                Facebook
              </a>

            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Premier Furniture. All rights reserved.
          </p>

          <p>
            Serving West Tennessee and surrounding areas.
          </p>

        </div>

      </div>
    </footer>
  );
}