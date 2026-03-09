// src/components/ServicesSection.tsx
import React from "react";
import { Wifi, Camera, Laptop } from "lucide-react";

const services = [
  {
    icon: <Wifi size={32} className="text-blue-500" />,
    title: "High-Speed Internet",
    description:
      "Fast, reliable satellite internet designed to keep homes and businesses connected.",
  },
  {
    icon: <Camera size={32} className="text-blue-500" />,
    title: "Smart Security Cameras",
    description:
      "AI-powered surveillance systems providing intelligent monitoring and protection.",
  },
  {
    icon: <Laptop size={32} className="text-blue-500" />,
    title: "Business Software",
    description:
      "Custom software solutions that help organizations manage operations efficiently.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#f8fafc] pt-12 pb-6 px-6">
      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
          Our Core Services
        </h2>
        <p className="text-gray-600 mt-1 max-w-2xl mx-auto text-sm md:text-base">
          Innovative technology solutions to help homes and businesses stay connected, secure, and efficient.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 group"
          >
            {/* Icon */}
            <div className="mb-2">{service.icon}</div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#0f172a] mb-1">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm">{service.description}</p>

            {/* Button */}
            <button className="text-blue-500 font-semibold hover:underline text-sm mt-2">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;