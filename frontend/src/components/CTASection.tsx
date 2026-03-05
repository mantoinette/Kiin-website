// src/components/CTASection.tsx
const CTASection = () => {
  return (
    <section className="relative bg-gray-800 text-[#E2B770] py-24 px-6 overflow-hidden">
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#E2B770]">
          Ready to Upgrade Your Technology?
        </h2>
        <p className="text-lg md:text-xl text-[#E2B770]/90 mb-10">
          Partner with KIIN Innovation and experience reliable connectivity,
          smart protection, and powerful digital solutions.
        </p>
        <button className="bg-[#E2B770] text-black font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:bg-yellow-500 transition-all duration-300">
          Get Started Today
        </button>
      </div>
    </section>
  );
};

export default CTASection;