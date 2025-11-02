export default function Safety() {
  const safetyFeatures = [
    {
      title: "Our commitment to your safety",
      description:
        "With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.",
      action: "Read about our Community Guidelines",
    },
    {
      title: "Setting the standard",
      description:
        "We've set high standards for safety in the industry. We're constantly working to raise the bar with new features and policies.",
      action: "Check out our Safety Report",
    },
  ];

  return (
    <section className="py-20 bg-uber-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Safety is a top priority
            </h2>
            <div className="space-y-8">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-uber-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <button className="text-uber-black font-medium hover:underline flex items-center group">
                    {feature.action}
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
              ))}
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-uber-gray-200 to-uber-gray-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-40 h-40 mx-auto bg-uber-black rounded-full flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <p className="text-2xl font-semibold text-uber-gray-700">
                  Your safety matters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
