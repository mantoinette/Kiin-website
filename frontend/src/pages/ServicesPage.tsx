// src/pages/ServicesPage.tsx
import { FaWifi, FaCamera, FaNetworkWired, FaCode, FaUserGraduate, FaShieldAlt, FaTools, FaHeadset } from "react-icons/fa";
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
        "Professional security camera installation with remote monitoring and smart alerts.",
      icon: <FaCamera />,
    },
    {
      title: "Access Point Setup",
      description:
        "Reliable WiFi access point configuration to extend and strengthen network coverage.",
      icon: <FaNetworkWired />,
    },
    {
      title: "Software Development",
      description:
        "Custom websites, management systems, and digital platforms tailored to businesses.",
      icon: <FaCode />,
    },
    {
      title: "Internship Programs",
      description:
        "Hands-on training programs helping students gain practical experience in IT.",
      icon: <FaUserGraduate />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Reliable Technology",
      description: "We deliver modern and reliable solutions that keep your business connected.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Professional Installation",
      description: "Our experts ensure every installation is secure, efficient, and optimized.",
      icon: <FaTools />,
    },
    {
      title: "24/7 Support",
      description: "We provide responsive support to ensure your systems run smoothly.",
      icon: <FaHeadset />,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="text-center py-20 px-6 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our Professional Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          We provide reliable internet connectivity, advanced security systems,
          and modern software solutions designed to support homes, businesses,
          and organizations.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center"
          >
            <div className="text-blue-600 text-4xl mb-4 flex justify-center">
              {service.icon}
            </div>

            <h2 className="text-xl font-bold mb-3">{service.title}</h2>

            <p className="text-gray-600 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Why Choose Us
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <StatsSection textColor="#2563EB" backgroundColor="#F9FAFB" />

      {/* CTA */}
      <section className="text-center py-20 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Need Our Services?
        </h2>

        <p className="text-gray-600 mb-8">
          Contact us today for professional internet installation,
          security systems, or custom software development.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
};

export default ServicesPage;