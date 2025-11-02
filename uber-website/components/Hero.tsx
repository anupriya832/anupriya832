"use client";

import { useState } from "react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"ride" | "drive" | "eat">("ride");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <section className="relative pt-16 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-uber-gray-50 to-white -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Go anywhere with Uber
            </h1>
            <p className="text-xl text-uber-gray-600 max-w-lg">
              Request a ride, hop in, and go. Or order food from your favorite restaurant.
            </p>

            <div className="bg-white rounded-lg shadow-xl p-6 space-y-4">
              <div className="flex space-x-2 border-b border-uber-gray-100">
                <button
                  onClick={() => setActiveTab("ride")}
                  className={`px-4 py-3 font-medium transition-colors ${
                    activeTab === "ride"
                      ? "text-uber-black border-b-2 border-uber-black"
                      : "text-uber-gray-500 hover:text-uber-gray-700"
                  }`}
                >
                  Ride
                </button>
                <button
                  onClick={() => setActiveTab("drive")}
                  className={`px-4 py-3 font-medium transition-colors ${
                    activeTab === "drive"
                      ? "text-uber-black border-b-2 border-uber-black"
                      : "text-uber-gray-500 hover:text-uber-gray-700"
                  }`}
                >
                  Drive
                </button>
                <button
                  onClick={() => setActiveTab("eat")}
                  className={`px-4 py-3 font-medium transition-colors ${
                    activeTab === "eat"
                      ? "text-uber-black border-b-2 border-uber-black"
                      : "text-uber-gray-500 hover:text-uber-gray-700"
                  }`}
                >
                  Eat
                </button>
              </div>

              {activeTab === "ride" && (
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-uber-black rounded-full" />
                    <input
                      type="text"
                      placeholder="Enter pickup location"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full pl-10 pr-4 py-4 bg-uber-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-uber-black"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-uber-gray-400 rounded-full" />
                    <input
                      type="text"
                      placeholder="Enter destination"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      className="w-full pl-10 pr-4 py-4 bg-uber-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-uber-black"
                    />
                  </div>
                  <button className="w-full py-4 bg-uber-black text-white rounded-lg font-medium hover:bg-uber-gray-800 transition-colors">
                    Request now
                  </button>
                  <button className="w-full py-4 border-2 border-uber-gray-200 rounded-lg font-medium hover:bg-uber-gray-50 transition-colors">
                    Schedule for later
                  </button>
                </div>
              )}

              {activeTab === "drive" && (
                <div className="space-y-4 py-4">
                  <p className="text-uber-gray-700">
                    Make money on your schedule with deliveries or rides—or both.
                  </p>
                  <button className="w-full py-4 bg-uber-black text-white rounded-lg font-medium hover:bg-uber-gray-800 transition-colors">
                    Get started
                  </button>
                  <p className="text-sm text-uber-gray-500 text-center">
                    Already have an account? Sign in
                  </p>
                </div>
              )}

              {activeTab === "eat" && (
                <div className="space-y-4 py-4">
                  <input
                    type="text"
                    placeholder="Enter delivery address"
                    className="w-full px-4 py-4 bg-uber-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-uber-black"
                  />
                  <button className="w-full py-4 bg-uber-black text-white rounded-lg font-medium hover:bg-uber-gray-800 transition-colors">
                    Find food
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-uber-gray-100 to-uber-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-uber-black rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-2xl font-semibold text-uber-gray-700">Your ride awaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
