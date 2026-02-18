import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      {/* Services Section */}
      <section className="bg-gray-950 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We deliver advanced technology solutions designed to power businesses and protect homes with reliability and innovation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <ProductCard
            title="High-Speed Internet"
            description="Fast, reliable satellite internet for homes and businesses."
            color="blue"
          />
          <ProductCard
            title="Smart Security Cameras"
            description="AI-powered surveillance systems for maximum protection."
            color="red"
          />
          <ProductCard
            title="Business Software"
            description="Custom software solutions to manage and monitor your operations."
            color="green"
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;