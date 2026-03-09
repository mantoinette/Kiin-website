const StarlinkPage = () => {
  return (
    <div>

      {/* HERO */}
      <section
        className="relative h-[420px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/service-starlink.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0f172a]/70"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Starlink Internet Installation
          </h1>

          <p className="text-lg md:text-xl">
            Fast and reliable satellite internet installation for homes,
            businesses, and remote locations across Rwanda.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f2f2f3] py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-[#0f172a] mb-6">
            Reliable Connectivity Anywhere
          </h2>

          <p className="text-gray-700 text-lg">
            KIIN Innovation provides professional Starlink installation services
            ensuring stable, high-speed internet connectivity even in remote
            areas. Our experts handle the full process from equipment supply to
            installation and optimization.
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-12">
            Our Starlink Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#f8fafc] p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                Hardware Supply
              </h3>
              <p className="text-gray-600">
                We provide genuine Starlink equipment ready for professional
                installation.
              </p>
            </div>

            <div className="bg-[#f8fafc] p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                Expert Installation
              </h3>
              <p className="text-gray-600">
                Our engineers install and configure the system for optimal
                signal and speed.
              </p>
            </div>

            <div className="bg-[#f8fafc] p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                Ongoing Support
              </h3>
              <p className="text-gray-600">
                Continuous monitoring and technical support for reliable
                connectivity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* INSTALLATION PROCESS */}
      <section className="bg-[#f2f2f3] py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-12">
            Our Installation Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {/* CARD 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                Consultation
              </h3>
              <p className="text-gray-600">
                We assess your location and internet needs to determine the best setup.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                Planning
              </h3>
              <p className="text-gray-600">
                Our engineers plan the optimal installation point and equipment setup.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                Installation
              </h3>
              <p className="text-gray-600">
                We professionally install and configure the Starlink system.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                Testing & Support
              </h3>
              <p className="text-gray-600">
                We test the system and provide ongoing support to ensure stable connectivity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f172a] text-white py-20 text-center px-6">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Install Starlink?
        </h2>

        <p className="mb-8 text-lg text-gray-300">
          Contact KIIN Innovation today and get reliable high-speed internet.
        </p>

        <a
          href="/contact"
          className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition"
        >
          Request Installation
        </a>

      </section>

    </div>
  );
};

export default StarlinkPage;