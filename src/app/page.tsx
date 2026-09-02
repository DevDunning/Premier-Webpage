export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-red-600" />

        <h1 className="text-4xl font-bold tracking-tight text-black md:text-6xl">
          Website Temporarily Unavailable
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          The Premier Furniture website is temporarily unavailable.
          Please check back soon.
        </p>
      </div>
    </main>
  );
}