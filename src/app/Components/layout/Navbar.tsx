"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Deals", href: "/#promotions" },
  { label: "Brands", href: "/#brands" },
  { label: "Services", href: "/#services" },
  { label: "Categories", href: "/#categories" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          aria-label="Premier Furniture home"
          className="flex items-center gap-2 sm:gap-3"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="Premier Furniture"
            width={46}
            height={46}
            priority
            className="h-11 w-11 object-contain"
          />

          <span className="text-base font-extrabold leading-tight tracking-tight sm:text-xl">
            <span className="text-red-600">Premier</span>{" "}
            <span className="text-black">Furniture</span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 text-sm font-semibold text-gray-700 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-red-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/#store-cta"
            className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Find a Showroom
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-900 transition hover:bg-gray-100 lg:hidden"
        >
          {isOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-gray-200 bg-white px-4 py-4 shadow-lg lg:hidden"
        >
          <div className="mx-auto grid max-w-6xl gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-100 hover:text-red-600"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#store-cta"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-red-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Find a Showroom
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}