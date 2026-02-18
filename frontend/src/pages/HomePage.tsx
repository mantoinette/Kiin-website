import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <section className="flex flex-wrap justify-center gap-8 px-6 py-20 bg-gray-900">
        <ProductCard
          title="High-Speed Internet"
          description="Fast, reliable satellite internet for homes and businesses."
        />
        <ProductCard
          title="Smart Security Cameras"
          description="AI-powered surveillance systems for maximum protection."
        />
        <ProductCard
          title="Business Software"
          description="Custom software solutions to manage and monitor your operations."
        />
      </section>
    </>
  );
};

export default HomePage;