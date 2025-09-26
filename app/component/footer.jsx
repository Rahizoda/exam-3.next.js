"use client";

import { Facebook, LinkedIn, Instagram, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-[#0a1b4d] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Courses */}
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-semibold text-lg mb-4">Courses</h3>
          <ul className="space-y-2">
            <li>English Courses</li>
            <li>German Courses</li>
            <li>Spanish Courses</li>
            <li>Another Languages</li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="flex - flex-col gap-[10px]">
          <h3 className="font-semibold text-lg mb-4">Contacts</h3>
          <p>27 Division St, New York,</p>
          <p>NY 10002, USA</p>
          <p className="mt-2">+1 800 123 456 789</p>
          <p>ling@mail.com</p>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
          <p className="mb-2">Get news & updates</p>
          <form className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 border border-white rounded-l-md focus:outline-none w-full"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 h-[42px] py-2 rounded-r-md hover:bg-blue-700 flex items-center justify-center"
            >
              <Email fontSize="small" />
            </button>
          </form>
          {/* Success message */}

          <p>Subscribe to our newsletter.</p>
          <p>Be in trends.</p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-4">In Socials</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full flex items-center justify-center">
              <Facebook fontSize="small" />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full flex items-center justify-center">
              <LinkedIn fontSize="small" />
            </a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full flex items-center justify-center">
              <Instagram fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
