import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "Blogs", to: "blogs" },
    { name: "Designs", to: "designs" },
    { name: "Gifts", to: "gifts" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-xl sm:text-2xl font-extrabold cursor-pointer transition-transform duration-300 transform hover:scale-110 
          bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text"
        >
          📸 FrameIt
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="group relative">
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer relative text-gray-700 px-3 py-2 rounded-md transition-all duration-300 
                group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500
                group-hover:shadow-lg"
              >
                {item.name}
                <span
                  className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 
                  group-hover:w-full group-hover:left-0"
                ></span>
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-800 hover:text-blue-500 transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6 font-medium bg-white shadow-lg">
          {menuItems.map((item, index) => (
            <li key={index}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer px-4 py-2 rounded-md text-gray-700 hover:bg-gradient-to-r 
                hover:from-blue-500 hover:to-purple-500 hover:text-white hover:shadow-lg transition-all duration-300 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
