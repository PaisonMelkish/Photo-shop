import React from "react";

const blogs = [
  {
    title: "Top 5 Frame Styles in 2025",
    img: "https://i.pinimg.com/236x/ee/fb/8d/eefb8d85f0be54facb5fdc2b3bf3a3fb.jpg",
    text: "Discover the latest trends in photo frame design this year, from minimalist to ornate styles."
  },
  {
    title: "How to Pick the Right Frame",
    img: "https://ik.imagekit.io/theartling/prod/tr:w-1840,c-at_max/original_images/tumblr_mgmi2d3nWI1rka25wo1_1280.jpg",
    text: "Tips and tricks to match frames with your room decor and artwork."
  },
  {
    title: "DIY Photo Frame Ideas",
    img: "https://c02.purpledshub.com/uploads/sites/51/2021/07/How-To-Make-A-DIY-Floral-Photo-Hoop-2fe7423.png?webp=1&w=1200",
    text: "Creative ways to make your own photo frames at home using simple materials."
  },
  {
    title: "Vintage vs Modern Frames",
    img: "https://www.craigframes.com/product_images/uploaded_images/vintage-vs.-modern-1-.png",
    text: "Compare vintage and modern frames to find the perfect match for your photos."
  },
  {
    title: "Framing for Memories",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXFrPnhz7urWVkPbVWPg2O_nB8k46w3DJ9Q&s",
    text: "Learn how to preserve your cherished memories with the right frame choices."
  },
  {
    title: "Gallery Wall Inspiration",
    img: "https://i.pinimg.com/474x/6c/cd/19/6ccd194dc114cf23840cc51d9767d070.jpg",
    text: "Ideas to create stunning gallery walls with a mix of frames and artwork."
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-12 sm:py-16 bg-gradient-to-b from-gray-100 via-white to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-gray-800">
          Our Photo Frame Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6 text-left">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 hover:text-indigo-600 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {blog.text}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-40 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <p className="mt-8 sm:mt-12 text-gray-700 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Explore more tips, DIY ideas, and inspirations for framing your favorite memories.
          Stay updated with trends in frames, decorating tips, and creative gallery setups for your home.
        </p>
      </div>
    </section>
  );
}
