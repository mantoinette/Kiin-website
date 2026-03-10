// src/pages/SoftwarePage.tsx
import { FaLaptopCode, FaServer, FaProjectDiagram, FaDatabase, FaRobot } from "react-icons/fa";

const SoftwarePage = () => {
  const services = [
    { icon: <FaLaptopCode />, title: "Custom Web Applications", description: "Modern, responsive, and scalable web apps tailored to your business." },
    { icon: <FaProjectDiagram />, title: "Business Management Systems", description: "Streamlined systems to manage operations, projects, and workflows efficiently." },
    { icon: <FaServer />, title: "API Integration", description: "Connect your applications seamlessly with external services and platforms." },
    { icon: <FaDatabase />, title: "Database Design", description: "Optimized and scalable database structures for your applications." },
    { icon: <FaRobot />, title: "System Automation", description: "Automate repetitive tasks to improve efficiency and reduce errors." },
  ];

  return (
    <section className="bg-[#f2f2f3] min-h-screen">
      {/* HERO SECTION */}
      <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Hero Image */}
        <img
          src="/images/software.webp"
          alt="Software Development"
          className="w-full h-full object-contain"
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text Content */}
        <div className="absolute z-10 px-6 md:px-16 text-center md:text-left max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Software Development & API Integration
          </h1>
          <p className="text-lg text-white/90 mb-6">
            We design custom software solutions tailored to your business needs,
            including web applications, automation systems, and API integrations.
          </p>
          <a
            href="#services"
            className="inline-block bg-[#E2B770] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#c79f58] transition duration-300"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* WHAT WE BUILD */}
      <div className="relative z-10 bg-[#f2f2f3] py-16">
        <h2 id="services" className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12 text-center">
          What We Build
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition transform duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#E2B770]/20 text-[#E2B770] text-2xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwarePage;