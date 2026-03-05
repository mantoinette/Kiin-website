// src/pages/ServicesPage.tsx
import { FaWifi, FaCamera, FaNetworkWired, FaCode, FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import StatsSection from "../components/StatsSection";

const ServicesPage = () => {
  const services = [
    {
      title: "Starlink Internet",
      description:
        "High-speed satellite internet installation and configuration using Starlink technology.",
      icon: <FaWifi />,
    },
    {
      title: "CCTV Camera Installation",
      description:
        "Professional security camera installation for homes and businesses with remote monitoring.",
      icon: <FaCamera />,
    },
    {
      title: "Access Point Setup",
      description:
        "Reliable WiFi access point configuration to extend and strengthen your network coverage.",
      icon: <FaNetworkWired />,
    },
    {
      title: "Software Development",
      description:
        "Custom website and system development tailored to your business needs.",
      icon: <FaCode />,
    },
    {
      title: "Internship Programs",
      description:
        "Practical training opportunities for students to gain real-world IT experience.",
      icon: <FaUserGraduate />,
    },
  ];

  return (
    <div className="bg-[#1C1C1C] text-white">

      {/* HERO SECTION */}
      <div className="text-center py-20 px-6 bg-[#1C1C1C]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Our Professional Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80">
          We deliver reliable internet solutions, advanced security systems,
          professional software development, and real-world internship programs
          to empower individuals and businesses.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#2A2A2A] p-8 rounded-2xl shadow-lg hover:shadow-white/50 transition duration-300 transform hover:-translate-y-2 text-center"
          >
            <div className="text-white text-4xl mb-4 flex justify-center">
              {service.icon}
            </div>
            <h2 className="text-2xl font-bold mb-4">
              {service.title}
            </h2>
            <p className="text-white/80">{service.description}</p>
          </div>
        ))}
      </div>

      {/* QUOTE SECTION */}
      <div className="py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Commitment
        </h2>
        <p className="max-w-3xl mx-auto text-lg italic text-white/80">
          "Technology is best when it connects people. We are committed to
          delivering secure, reliable, and innovative solutions that help
          our clients grow and succeed."
        </p>
      </div>

      {/* STATISTICS SECTION */}
      <StatsSection textColor="#E2B770" backgroundColor="#F2F2F3" />

      {/* CALL TO ACTION */}
      <div className="py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Have a Question?
        </h2>
        <p className="mb-8 text-lg text-white/80">
          Need support? Want to install Starlink or CCTV? Looking for software development?
          Contact us today and let’s build your solution.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#E2B770] hover:bg-[#d4a859] text-[#1C1C1C] px-8 py-3 rounded-full text-lg font-semibold transition transform hover:scale-105"
        >
          Contact Us
        </Link>
      </div>

    </div>
  );
};

export default ServicesPage;