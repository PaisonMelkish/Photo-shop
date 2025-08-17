// src/Components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const photoItems = [
  {
    src: "https://m.media-amazon.com/images/I/61JWaWWxn+L._UF894,1000_QL80_.jpg",
    alt: "Wooden Photo Frame",
    initial: { x: -200, opacity: 0 },
    delay: 0.1,
  },
  {
    src: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&q=80",
    alt: "Birthday Gift Box",
    initial: { y: 200, opacity: 0 },
    delay: 0.2,
  },
  {
    src: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&q=80",
    alt: "Decorative Frame",
    initial: { x: 200, opacity: 0 },
    delay: 0.3,
  },
  {
    src: "https://imgcdn.floweraura.com/moments-together-frame-n-chocolates-9804977gf-A_0.gif",
    alt: "Personalized Photo Frame Gift",
    initial: { y: -200, opacity: 0 },
    delay: 0.4,
  },
  {
    src: "https://www.thegourmetbox.in/cdn/shop/files/RoseGold_grey_580x.png?v=1693319336",
    alt: "Luxury Gift Package",
    initial: { x: -200, opacity: 0 },
    delay: 0.5,
  },
  {
    src: "C:\Users\User\Desktop\Photo\my-project\public\Photoframekit-12.webp",
    alt: "Elegant Wooden Photo Frame Local",
    initial: { y: 200, opacity: 0 },
    delay: 0.6,
  },
  {
    src: "C:\Users\User\Desktop\Photo\my-project\public\Untitled_design_10.webp",
    alt: "Local Gift Box",
    initial: { x: 200, opacity: 0 },
    delay: 0.7,
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    alt: "Decorative Frame with Picture",
    initial: { x: -200, opacity: 0 },
    delay: 0.8,
  },
  {
    src: "https://beautyonehome.com/wp-content/uploads/2025/02/Luxury-custom-home-decor-gift-set-including-personalized-jewelry-box-and-photo-frame-for-Unique-Valentines-Day-Gifts.webp",
    alt: "Luxury Photo Frame Gift Set",
    initial: { x: 200, opacity: 0 },
    delay: 0.9,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-14 sm:pt-20 pb-10 sm:pb-16 bg-gradient-to-br from-gray-100 via-white to-pink-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4"
        >
          Capture Moments, Frame Memories
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xs sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-10 max-w-2xl mx-auto px-2"
        >
          Beautifully crafted photo frames and unforgettable gifts to cherish forever.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-14"
        >
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 8px 20px rgba(236,72,153,0.4)",
              y: -4,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-pink-500 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-400 transition-all duration-300 ease-out"
          >
            Shop Frames
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.08,
              backgroundColor: "#ec4899",
              color: "#fff",
              boxShadow: "0px 8px 20px rgba(236,72,153,0.3)",
              y: -4,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-pink-500 text-pink-500 text-sm sm:text-base rounded-full font-semibold transition-all duration-300 ease-out"
          >
            Explore Gifts
          </motion.button>
        </motion.div>

        {/* Image Showcase */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 max-w-6xl mx-auto perspective-[1200px]">
          {photoItems.map((item, index) => (
            <motion.img
              key={index}
              src={item.src}
              alt={item.alt}
              className="w-28 sm:w-40 md:w-56 lg:w-64 rounded-lg shadow-xl cursor-pointer transition-transform duration-200 object-cover"
              initial={item.initial}
              animate={{ x: 0, y: 0, opacity: 1 }}
              whileHover={{
                scale: 1.12,
                z: 50,
                boxShadow: "0px 15px 40px rgba(0,0,0,0.3)",
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              whileTap={{ scale: 1.05 }}
              transition={{ delay: item.delay, duration: 0.6 }}
              style={{
                transformOrigin: "center",
                transformStyle: "preserve-3d",
              }}
            />
          ))}
        </div>
      </div>

      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-28 sm:w-56 h-28 sm:h-56 bg-pink-300 opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-44 sm:w-80 h-44 sm:h-80 bg-purple-300 opacity-20 rounded-full blur-2xl"></div>
    </section>
  );
}
