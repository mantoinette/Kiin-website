import { useEffect, useState } from "react";

const images = [
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      
      {/* Background Image Slider */}
      <img
        src={images[current]}
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Empowering Homes & Businesses <br />
          <span className="text-blue-500">with Smart Tech</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
          High-speed internet, AI-powered security cameras, and custom software
          solutions that keep your business secure, connected, and ahead of the competition.
        </p>

        <div className="flex justify-center gap-6">
          <button className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg">
            Explore Products
          </button>
          <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;