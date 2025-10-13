"use client";

import { Facebook, LinkedIn, Instagram, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-[#0a1b4d] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Courses */}
          <div className="flex flex-col">
            <h3 className="font-bold text-xl mb-6 text-blue-200">Courses</h3>
            <ul className="space-y-3">
              <li className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">
                <span className="border-b border-transparent hover:border-blue-300 pb-1">English Courses</span>
              </li>
              <li className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">
                <span className="border-b border-transparent hover:border-blue-300 pb-1">German Courses</span>
              </li>
              <li className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">
                <span className="border-b border-transparent hover:border-blue-300 pb-1">Spanish Courses</span>
              </li>
              <li className="hover:text-blue-300 transition-colors duration-200 cursor-pointer">
                <span className="border-b border-transparent hover:border-blue-300 pb-1">Other Languages</span>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="flex flex-col">
            <h3 className="font-bold text-xl mb-6 text-blue-200">Contacts</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <span className="text-blue-300 mr-2">📍</span>
                <span>27 Division St, New York, NY 10002, USA</span>
              </p>
              <p className="flex items-center">
                <span className="text-blue-300 mr-2">📞</span>
                <span>+1 800 123 456 789</span>
              </p>
              <p className="flex items-center">
                <span className="text-blue-300 mr-2">✉️</span>
                <span>ling@mail.com</span>
              </p>
            </div>
          </div>

          {/* Subscribe */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-xl mb-6 text-blue-200">Subscribe</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Get news & updates. Subscribe to our newsletter and be in trends.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent flex-grow placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Email fontSize="small" />
                Subscribe
              </button>
            </form>

            {/* Success message would go here */}
            <div className="flex items-center text-sm text-gray-400">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              We respect your privacy. Unsubscribe at any time.
            </div>
          </div>

          {/* Socials */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-center lg:items-start mt-8 lg:mt-0">
            <h3 className="font-bold text-xl mb-6 text-blue-200 text-center lg:text-left">Follow Us</h3>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <a
                href="#"
                className="bg-white/10 hover:bg-blue-600 transition-all duration-200 p-4 rounded-full flex items-center justify-center hover:scale-110 transform"
              >
                <Facebook className="text-white" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-blue-600 transition-all duration-200 p-4 rounded-full flex items-center justify-center hover:scale-110 transform"
              >
                <LinkedIn className="text-white" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-blue-600 transition-all duration-200 p-4 rounded-full flex items-center justify-center hover:scale-110 transform"
              >
                <Instagram className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom border and copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ling Language School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
