// src/components/ServicesSection.tsx
const ServicesSection = () => {
  return (
    <section className="bg-black text-[#E2B770] py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#E2B770]">
        Our Core Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* Service Card 1 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-[#E2B770]/50 transition transform hover:-translate-y-2">
          <h3 className="text-2xl font-semibold mb-4 text-[#E2B770]">High-Speed Internet</h3>
          <p className="text-gray-700 mb-6">
            Fast, reliable satellite internet for homes and businesses.
          </p>
          <button className="text-[#E2B770] font-semibold hover:underline">
            Learn More →
          </button>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-[#E2B770]/50 transition transform hover:-translate-y-2">
          <h3 className="text-2xl font-semibold mb-4 text-[#E2B770]">Smart Security Cameras</h3>
          <p className="text-gray-700 mb-6">
            AI-powered surveillance systems for maximum protection.
          </p>
          <button className="text-[#E2B770] font-semibold hover:underline">
            Learn More →
          </button>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-[#E2B770]/50 transition transform hover:-translate-y-2">
          <h3 className="text-2xl font-semibold mb-4 text-[#E2B770]">Business Software</h3>
          <p className="text-gray-700 mb-6">
            Custom software solutions to manage and monitor your operations.
          </p>
          <button className="text-[#E2B770] font-semibold hover:underline">
            Learn More →
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;