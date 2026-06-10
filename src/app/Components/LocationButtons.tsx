type Location = {
  name: string;
  phone: string;
  maps: string;
};

export default function LocationButtons({
  location,
}: {
  location: Location;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl">

      {/* Visit / Maps */}
      <a
        href={location.maps}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-4 rounded-xl transition text-center"
      >
        {location.name}
      </a>

      {/* Call */}
      <a
        href={location.phone}
        className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-900 font-semibold px-6 py-4 rounded-xl transition text-center"
      >
        Call {location.name.split(" ")[0]}
      </a>

    </div>
  );
}