const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white py-24 px-6 overflow-hidden">
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Upgrade Your Technology?
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-10">
          Partner with KIIN Innovation and experience reliable connectivity,
          smart protection, and powerful digital solutions.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:bg-gray-100 transition-all duration-300">
          Get Started Today
        </button>
      </div>
    </section>
  );
};

export default CTASection;