import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Designs from "./Components/Designs";
import Gifts from "./Components/Gifts";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
       <Blogs />
      <Designs />
      <Gifts />
     
      <Contact />
      <Footer />
    </>
  );
}
