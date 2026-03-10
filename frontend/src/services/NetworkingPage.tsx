// src/pages/NetworkingPage.tsx
import { FaNetworkWired, FaProjectDiagram, FaServer, FaTools, FaCogs } from "react-icons/fa";

const NetworkingPage = () => {
  const services = [
    {
      icon: <FaNetworkWired />,
      title: "LAN/WAN Network Design",
      description: "Design reliable and scalable LAN/WAN networks for offices, schools, and enterprises.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Structured Cabling Installation",
      description: "Professional installation of structured cabling ensuring clean and organized infrastructure.",
    },
    {
      icon: <FaServer />,
      title: "Router & Switch Configuration",
      description: "Configure routers, switches, and firewalls for optimal network performance.",
    },
    {
      icon: <FaTools />,
      title: "Network Troubleshooting",
      description: "Identify and resolve network issues efficiently to minimize downtime.",
    },
    {
      icon: <FaCogs />,
      title: "Infrastructure Optimization",
      description: "Analyze and optimize your network infrastructure for speed and reliability.",
    },
  ];

  return (
    <section className="bg-[#f2f2f3] min-h-screen">
      {/* HERO SECTION */}
      <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/cable.jpg"
          alt="Networking & Structured Cabling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute z-10 px-6 md:px-16 text-center md:text-left max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Networking & <span className="text-[#E2B770]">Structured Cabling</span>
          </h1>
          <p className="text-lg text-white/90 mb-6">
            We build reliable network infrastructure for offices, schools,
            and enterprises using modern networking and structured cabling standards.
          </p>
        </div>
      </div>

      {/* OUR SERVICES SECTION */}
      <div className="relative z-10 bg-[#f2f2f3] py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12 text-center">
            Our Services
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition transform duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#E2B770]/20 text-[#E2B770] text-3xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkingPage;