import { useEffect, useState } from "react";

const images = [
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
   "/images/14.jpg",
   "/images/15.jpg",
    "/images/16.jpg",
    "/images/17.jpg",
    "/images/18.jpg",

];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <img
        src={images[current]}
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-[#0f172a]/60 to-[#1e293b]/80"></div>

      {/* Content */}
      <div className="relative z-20 px-6 max-w-4xl text-white">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Smart Technology for
          <span className="block text-blue-400">
            Modern Homes & Businesses
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10">
          Experience high-speed connectivity, intelligent security systems,
          and innovative software solutions designed to keep your business
          connected, secure, and ready for the future.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6">

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg transition duration-300">
            Explore Products
          </button>

          <button className="border border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#0f172a] transition duration-300">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;