"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Premier Furniture"
            width={50}
            height={50}
            priority
            className="object-contain"
          />

          <div className="font-extrabold text-xl tracking-tight leading-tight">
            <span className="text-red-600">Premier</span>{" "}
            <span className="text-black">Furniture</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <Link
            href="#promotions"
            className="hover:text-red-600 transition-colors"
          >
            Deals
          </Link>

          <Link
            href="#brands"
            className="hover:text-red-600 transition-colors"
          >
            Brands
          </Link>

          <Link
            href="#services"
            className="hover:text-red-600 transition-colors"
          >
            Services
          </Link>

          <Link
            href="#contact"
            className="hover:text-red-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <a
          href="#store-cta"
          className="bg-red-600 hover:bg-red-700 transition-colors text-white px-5 py-2 rounded-md text-sm font-semibold"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}