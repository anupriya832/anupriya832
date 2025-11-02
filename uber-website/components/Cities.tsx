export default function Cities() {
  const cities = [
    "San Francisco",
    "New York",
    "Los Angeles",
    "Chicago",
    "Boston",
    "Washington DC",
    "Miami",
    "Seattle",
    "Austin",
    "Denver",
    "Atlanta",
    "Philadelphia",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Available in 10,000+ cities
          </h2>
          <p className="text-xl text-uber-gray-600 max-w-3xl mx-auto">
            Uber is available in thousands of cities worldwide. See if Uber is available in your city.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {cities.map((city, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-uber-gray-50 hover:bg-uber-black hover:text-white transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-lg font-semibold mb-2">{city}</h3>
              <button className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                View details
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-uber-black text-white rounded-full font-medium hover:bg-uber-gray-800 transition-colors">
            View all cities
          </button>
        </div>
      </div>
    </section>
  );
}
