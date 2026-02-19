const ServicesSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-16">Our Core Services</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        <div className="bg-black p-8 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">High-Speed Internet</h3>
          <p className="text-gray-400 mb-6">Fast, reliable satellite internet for homes and businesses.</p>
          <button className="text-blue-400 hover:underline">Learn More →</button>
        </div>

        <div className="bg-black p-8 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">Smart Security Cameras</h3>
          <p className="text-gray-400 mb-6">AI-powered surveillance systems for maximum protection.</p>
          <button className="text-blue-400 hover:underline">Learn More →</button>
        </div>

        <div className="bg-black p-8 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">Business Software</h3>
          <p className="text-gray-400 mb-6">Custom software solutions to manage and monitor your operations.</p>
          <button className="text-blue-400 hover:underline">Learn More →</button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;