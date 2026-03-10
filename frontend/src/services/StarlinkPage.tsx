// src/pages/StarlinkPage.tsx
import { FaSearch, FaDraftingCompass, FaTools, FaCheckCircle } from "react-icons/fa";

const StarlinkPage = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section
        className="relative h-[420px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/service-starlink.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/70"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Starlink Internet Installation
          </h1>
          <p className="text-lg md:text-xl">
            Fast and reliable satellite internet installation for homes, businesses, and remote locations across Rwanda.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-[#f2f2f3] py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-6">
            Reliable Connectivity Anywhere
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            KIIN Innovation provides professional Starlink installation services ensuring stable, high-speed internet connectivity even in remote areas. Our experts handle the full process from equipment supply to installation and optimization.
          </p>
        </div>
      </section>

     {/* SERVICES SECTION */}
<section className="bg-white py-20 px-6 md:px-16 border-t">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-12">
      Our Starlink Services
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Hardware Supply */}
      <div className="bg-[#f8fafc] p-8 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#E2B770]/20 text-[#E2B770] text-2xl mb-6">
          <FaTools />
        </div>
        <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
          Hardware Supply
        </h3>
        <p className="text-gray-600">
          We provide genuine Starlink equipment ready for professional installation.
        </p>
      </div>

      {/* Expert Installation */}
      <div className="bg-[#f8fafc] p-8 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#E2B770]/20 text-[#E2B770] text-2xl mb-6">
          <FaDraftingCompass />
        </div>
        <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
          Expert Installation
        </h3>
        <p className="text-gray-600">
          Our engineers install and configure the system for optimal signal and speed.
        </p>
      </div>

      {/* Ongoing Support */}
      <div className="bg-[#f8fafc] p-8 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#E2B770]/20 text-[#E2B770] text-2xl mb-6">
          <FaCheckCircle />
        </div>
        <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
          Ongoing Support
        </h3>
        <p className="text-gray-600">
          Continuous monitoring and technical support for reliable connectivity.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* INSTALLATION PROCESS SECTION */}
      <section className="bg-[#eef2f7] py-20 px-6 md:px-16 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-16">
            Our Installation Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#E2B770]/20 text-[#E2B770] text-2xl mb-6">
                <FaSearch />
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-3">Consultation</h3>
              <p className="text-gray-600">
                We evaluate your location and internet requirements to determine the best Starlink setup.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#E2B770]/20 text-[#E2B770] text-2xl mb-6">
                <FaDraftingCompass />
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-3">Planning</h3>
              <p className="text-gray-600">
                Our engineers design the optimal installation point and system configuration.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#E2B770]/20 text-[#E2B770] text-2xl mb-6">
                <FaTools />
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-3">Installation</h3>
              <p className="text-gray-600">
                Our team professionally installs and configures the Starlink equipment.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#E2B770]/20 text-[#E2B770] text-2xl mb-6">
                <FaCheckCircle />
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-3">Testing & Support</h3>
              <p className="text-gray-600">
                We test the system and provide ongoing support to ensure reliable connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#1e293b] text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Install Starlink?</h2>
        <p className="mb-8 text-lg text-gray-300">
          Contact KIIN Innovation today and get reliable high-speed internet.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#E2B770] hover:bg-[#d4a94f] text-[#0f172a] px-8 py-3 rounded-lg font-semibold tracking-wide shadow-md hover:shadow-lg transition duration-300"
        >
          Request Installation
        </a>
      </section>

    </div>
  );
};

export default StarlinkPage;