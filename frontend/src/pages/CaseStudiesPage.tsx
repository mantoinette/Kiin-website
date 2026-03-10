// src/pages/CaseStudiesPage.tsx
import React from "react";

const projects = [
  {
    title: "Starlink Installation at Kigali School",
    description: "High-speed satellite internet setup for educational institutions.",
    image: "/images/service-starlink.jpg",
  },
  {
    title: "CCTV & Smart Surveillance for Offices",
    description: "Installation of modern CCTV systems to secure office premises.",
    image: "/images/camera.jpg.jpg",
  },
  {
    title: "Structured Cabling for Enterprise Networks",
    description: "Optimized network infrastructure with structured cabling.",
    image: "/images/cable.jpg",
  },
  {
    title: "Custom Software Development",
    description: "Web and business management applications tailored to client needs.",
    image: "/images/service-software.jpg",
  },
];

const CaseStudiesPage = () => {
  return (
    <section className="bg-[#f2f2f3]">

      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/16.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-3xl px-6 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Our Case Studies
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Explore our projects showcasing expertise in connectivity, security, infrastructure, and software development.
          </p>
          <a
            href="#projects"
            className="inline-block bg-[#E2B770] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg hover:bg-[#c79f58] transition duration-300"
          >
            Explore Projects
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="max-w-6xl mx-auto py-12 md:py-16 px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 md:h-64 object-cover"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-4">
              <p className="text-white text-center">{project.description}</p>
            </div>

            {/* Project Title */}
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-semibold text-[#0f172a] mb-2">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto text-center mt-12 mb-12 px-6">
        <p className="text-lg text-gray-700 mb-6">
          Want a similar solution for your business?
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#E2B770] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg hover:bg-[#c79f58] transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CaseStudiesPage;