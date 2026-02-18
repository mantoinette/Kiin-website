const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-32 px-6 text-center relative overflow-hidden">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
        Empowering Homes & Businesses with Smart Tech
      </h1>

      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-10 drop-shadow">
        High-speed internet, AI-powered security cameras, and custom software solutions that keep your business secure and connected.
      </p>

      <button className="mt-4 px-10 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition duration-300">
        Explore Products
      </button>

      {/* Background circles */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-400 opacity-20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;