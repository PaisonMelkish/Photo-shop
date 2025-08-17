import React from "react";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contact.json";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center text-gray-800">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Lottie Animation */}
          <div className="flex justify-center">
            <Lottie
              animationData={contactAnimation}
              loop
              className="w-64 sm:w-80 md:w-96 h-auto"
            />
          </div>

          {/* Contact Form */}
          <form className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl space-y-4 sm:space-y-5 transform transition duration-500 hover:scale-[1.02] w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:border-pink-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:border-pink-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base focus:outline-none focus:border-pink-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
