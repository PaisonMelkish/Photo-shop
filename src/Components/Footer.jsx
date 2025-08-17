import React from "react";

export default function Footer() {
  const services = [
    "Custom Photo Frames",
    "Engraved Wooden Frames",
    "Polaroid Wall Sets",
    "Couple Frames",
    "Heart-Shaped Frames",
    "Personalized Mugs",
    "Memory Jars",
    "Photo Albums",
    "Customized Candle Frames",
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white pt-8">
      {/* Scrolling Services */}
      <div className="overflow-hidden whitespace-nowrap border-b border-gray-700 py-3">
        <div className="animate-marquee inline-block">
          {[...services, ...services].map((item, idx) => (
            <span
              key={idx}
              className="mx-6 sm:mx-8 text-sm sm:text-lg font-medium hover:text-pink-400 transition-colors duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Main Content */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3 text-center sm:text-left">
        {/* About */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-pink-400">About FrameIt</h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            FrameIt is your one-stop shop for unique and personalized photo frames, gifts, and decor.
            We help you preserve memories in the most beautiful way possible.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-pink-400">Our Services</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
            {services.map((service, idx) => (
              <li
                key={idx}
                className="hover:text-white transition-colors duration-300"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-pink-400">Contact Us</h3>
          <p className="text-gray-300 text-sm sm:text-base">📍 123 Frame Street, Art City, India</p>
          <p className="text-gray-300 text-sm sm:text-base">📞 +91 98765 43210</p>
          <p className="text-gray-300 text-sm sm:text-base">📧 support@frameit.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-center py-4 border-t border-gray-700 text-xs sm:text-sm">
        <p>© {new Date().getFullYear()} FrameIt | All Rights Reserved</p>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </footer>
  );
}
