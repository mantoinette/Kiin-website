const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://cdn.coverr.co/videos/coverr-technology-home-automation-1591/1080p.mp4"
        autoPlay
        loop
        muted
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

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