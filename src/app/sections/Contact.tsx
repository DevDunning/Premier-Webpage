import { locations } from "@/lib/locations";

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Visit or Call Premier Furniture Today
        </h2>

        <p className="mt-4 text-gray-300">
          McKenzie & Union City • Serving all West Tennessee
        </p>

        <div className="mt-8 space-y-2 text-gray-200">
          <p>Discounted Prices</p>
          <p>Financing Upon Approval (Synchrony)</p>
          <p>Fast Local Delivery</p>
        </div>

        {/* CTA BLOCK (DRIVEN FROM SHARED CONFIG) */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          
          {/* MAIN CALL → scroll to featured section */}
          <a
            href="#store-cta"
            className="bg-red-600 px-6 py-3 rounded-md font-medium hover:bg-red-700 transition"
          >
            Call Us
          </a>

          {/* McKenzie Maps */}
          <a
            href={locations.mckenzie.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
          >
            McKenzie Directions
          </a>

          {/* Union City Maps */}
          <a
            href={locations.unionCity.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
          >
            Union City Directions
          </a>
        </div>
      </div>
    </section>
  );
}
