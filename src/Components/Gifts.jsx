import React from "react";

const gifts = [
  { img: "https://m.media-amazon.com/images/I/61H12e4GVRL._UF1000,1000_QL80_.jpg", name: "Custom Mug", price: "$15", desc: "Personalized mugs with your favorite photos and quotes." },
  { img: "https://www.printonweb.in/images/paper/album1.webp", name: "Photo Album", price: "$20", desc: "Handmade albums to preserve memories in style." },
  { img: "https://www.incrediblegifts.in/wp-content/uploads/2024/05/newcouplesliceUV1-600x600.jpg", name: "Couple Frame", price: "$25", desc: "A beautiful frame designed for couples' cherished moments." },
  { img: "https://m.media-amazon.com/images/I/81Sdfn2jrnL._UF350,350_QL80_.jpg", name: "Polaroid Wall Set", price: "$30", desc: "Creative polaroid frames for wall gallery displays." },
  { img: "https://m.media-amazon.com/images/I/9141q3Ym0AL.jpg", name: "Memory Jar", price: "$18", desc: "A jar to collect notes and memories with your loved ones." },
  { img: "https://www.woodgeekstore.com/cdn/shop/products/Family_Name_Wood_Engraved_Photo_Woodgeek_Store_1200x.jpg?v=1724707478", name: "Engraved Wooden Frame", price: "$35", desc: "Elegant wooden frames engraved with names or dates." },
  { img: "https://m.media-amazon.com/images/I/71sndKVqxpL._UF1000,1000_QL80_.jpg", name: "Customized Candle Frame", price: "$22", desc: "A romantic gift combining candles and photo frames." },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudoA8gRIphZAmSkK-mHi8DKOD2OvDtLwWCA&s", name: "Heart-shaped Frame", price: "$28", desc: "Perfect for couples, a heart-shaped photo frame." },
  { img: "https://happiclap.com/wp-content/uploads/2022/06/Mini-Me-1.jpg", name: "Mini Frame Set", price: "$20", desc: "A set of small frames to showcase multiple memories." },
];

const bgGradients = [
  "from-pink-200 via-red-200 to-yellow-200",
  "from-green-200 via-lime-200 to-teal-200",
  "from-blue-200 via-indigo-200 to-purple-200",
  "from-pink-100 via-purple-200 to-indigo-200",
  "from-yellow-200 via-orange-200 to-pink-200",
  "from-teal-200 via-cyan-200 to-blue-200",
  "from-red-100 via-pink-200 to-purple-200",
  "from-lime-200 via-green-200 to-teal-200",
  "from-indigo-200 via-blue-200 to-cyan-200",
];

export default function Gifts() {
  return (
    <section id="gifts" className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-gray-800">
          Gift Ideas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gifts.map((gift, idx) => (
            <div
              key={idx}
              className={`relative bg-gradient-to-br ${bgGradients[idx % bgGradients.length]} rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={gift.img}
                  alt={gift.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6 text-left">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-900 hover:text-pink-600 transition-colors duration-300">
                  {gift.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-2">{gift.desc}</p>
                <p className="text-indigo-600 font-bold">{gift.price}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        <p className="mt-8 sm:mt-12 text-sm sm:text-base text-gray-700 max-w-2xl mx-auto text-center">
          Discover unique photo frame gifts, personalized items, and creative ideas for your loved ones. Perfect for anniversaries, birthdays, and special moments.
        </p>
      </div>
    </section>
  );
}
