"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              Uber
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-uber-gray-700 hover:text-uber-black transition-colors">
              Company
            </a>
            <a href="#" className="text-uber-gray-700 hover:text-uber-black transition-colors">
              Safety
            </a>
            <a href="#" className="text-uber-gray-700 hover:text-uber-black transition-colors">
              Help
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-uber-black hover:bg-uber-gray-50 rounded-full transition-colors">
              Log in
            </button>
            <button className="px-6 py-2 bg-uber-black text-white rounded-full hover:bg-uber-gray-800 transition-colors">
              Sign up
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-uber-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-uber-gray-700 hover:text-uber-black">
                Company
              </a>
              <a href="#" className="text-uber-gray-700 hover:text-uber-black">
                Safety
              </a>
              <a href="#" className="text-uber-gray-700 hover:text-uber-black">
                Help
              </a>
              <button className="px-4 py-2 text-uber-black hover:bg-uber-gray-50 rounded-full text-left">
                Log in
              </button>
              <button className="px-4 py-2 bg-uber-black text-white rounded-full hover:bg-uber-gray-800">
                Sign up
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
