const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-28 px-6 text-center">
      <h1 className="text-5xl font-bold mb-6 leading-tight">
        Empowering Homes & Businesses <br />
        <span className="text-blue-500">with Smart Tech</span>
      </h1>

      <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
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
    </section>
  );
};

export default HeroSection;