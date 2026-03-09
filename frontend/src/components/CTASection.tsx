// src/components/ServicesSection.tsx

// 1️⃣ Import React (optional if using React 18+ with JSX transform)
import React from "react";

// 2️⃣ Import the icons
import { Wifi, Camera, Laptop } from "lucide-react";

// 3️⃣ Define your services array and component
const services = [
  {
    icon: <Wifi size={40} />,
    title: "High-Speed Internet",
    description:
      "Fast, reliable satellite internet designed to keep homes and businesses connected at all times.",
  },
  {
    icon: <Camera size={40} />,
    title: "Smart Security Cameras",
    description:
      "AI-powered surveillance systems that provide intelligent monitoring and enhanced protection.",
  },
  {
    icon: <Laptop size={40} />,
    title: "Business Software",
    description:
      "Custom software solutions that help organizations manage operations and improve productivity.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#f8fafc] py-24 px-6">
      {/* ... your component code ... */}
    </section>
  );
};

export default ServicesSection;