export default function Services() {
  const services = [
    {
      title: "Ride",
      description: "Go anywhere with Uber. Request a ride, hop in, and go.",
      features: ["Affordable rides", "Available 24/7", "Safe and reliable"],
    },
    {
      title: "Drive",
      description: "Make money on your schedule. Drive with Uber.",
      features: ["Flexible hours", "Weekly payouts", "Easy to start"],
    },
    {
      title: "Eat",
      description: "Order food from your favorite restaurants.",
      features: ["Fast delivery", "Wide selection", "Track your order"],
    },
    {
      title: "Business",
      description: "Reimagine the way your company moves and feeds its people.",
      features: ["Expense management", "Team rides", "Meal programs"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Focused on safety, wherever you go
          </h2>
          <p className="text-xl text-uber-gray-600 max-w-3xl mx-auto">
            With Uber, you can request a ride 24/7. Get picked up by a top-rated driver in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-uber-gray-50 hover:bg-uber-black transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-uber-black group-hover:bg-white rounded-lg flex items-center justify-center transition-colors">
                  <div className="w-6 h-6 bg-white group-hover:bg-uber-black rounded transition-colors" />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-uber-gray-600 group-hover:text-uber-gray-200 transition-colors">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-uber-gray-700 group-hover:text-uber-gray-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-uber-black group-hover:bg-white rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-sm font-medium group-hover:text-white transition-colors flex items-center">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
