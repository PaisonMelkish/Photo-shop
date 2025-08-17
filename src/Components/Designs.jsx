import React, { useEffect, useRef } from "react";

const frames = [
  { img: "https://images.unsplash.com/photo-1544510808-91bcbee1df55", name: "Classic Wooden Frame", price: "$25" },
  { img: "https://house2home.co.in/wp-content/uploads/2023/07/Photo-Frame-Picture-Frame-Metal-Photo-Frame-Antique-Photo-Frame-Gift-Diwali-Gift-Decor-Home-Decoration-house2home-8.jpeg", name: "Golden Vintage Frame", price: "$40" },
  { img: "https://images-cdn.ubuy.co.in/64f7106c2eb77606d40632c6-artbyhannah-10-pieces-modern-black.jpg", name: "Modern Black Frame", price: "$30" },
  { img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4", name: "Elegant White Frame", price: "$35" },
  { img: "https://homafy.com/wp-content/uploads/2023/03/heart-collage-frame.jpg", name: "Birthday Gift Frame", price: "$50" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3au59FOzmAvtYgtDMYfh1snP2ZvskuQsmgw&s", name: "Rustic Wooden Frame", price: "$28" },
  { img: "https://i.pinimg.com/564x/14/18/be/1418be01b7f21722e5e5032f59f64053.jpg", name: "Minimalist Black Frame", price: "$32" },
];

export default function Designs() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;
    let speed = 1;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += speed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="designs" className="relative py-12 sm:py-16 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-100 bg-[length:200%_200%] animate-[gradientMove_10s_linear_infinite]"></div>

      {/* Floating Decorative Circles */}
      <div className="absolute w-56 sm:w-72 h-56 sm:h-72 bg-pink-300 opacity-20 rounded-full blur-3xl top-[-40px] left-[-60px] animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute w-56 sm:w-72 h-56 sm:h-72 bg-yellow-300 opacity-20 rounded-full blur-3xl bottom-[-40px] right-[-60px] animate-[float_8s_ease-in-out_infinite]"></div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Title */}
        <h2
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 relative inline-block transition-all duration-300 ease-in-out hover:text-pink-600 hover:scale-105"
          style={{ letterSpacing: "1px" }}
        >
          Our Designs
          <span className="absolute left-0 bottom-0 w-full h-1 bg-pink-400 rounded-full animate-pulse"></span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto opacity-0 animate-[fadeInUp_0.8s_ease-in-out_forwards_0.3s]">
          Explore our collection of handcrafted photo frames and gifts, perfect for every occasion.
        </p>

        {/* Scrolling Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-scroll no-scrollbar py-4"
          style={{ scrollBehavior: "auto" }}
        >
          {[...frames, ...frames].map((frame, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-lg rounded-xl shadow-md overflow-hidden min-w-[200px] sm:min-w-[250px] md:min-w-[280px] transform hover:scale-105 hover:shadow-pink-300/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={frame.img}
                alt={frame.name}
                className="w-full h-40 sm:h-48 md:h-60 object-cover"
              />
              <div className="p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold">{frame.name}</h3>
                <p className="text-sm sm:text-base text-gray-600">{frame.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
