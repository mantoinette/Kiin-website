// src/pages/CCTVPage.tsx
import { FaCamera, FaVideo, FaShieldAlt, FaCogs, FaNetworkWired } from "react-icons/fa";

const CCTVPage = () => {
  const services = [
    {
      icon: <FaCamera />,
      title: "CCTV Installation",
      description: "Professional CCTV installation for homes, offices, and enterprises.",
    },
    {
      icon: <FaVideo />,
      title: "Video Surveillance",
      description: "High-quality surveillance systems to monitor and protect your property.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security Solutions",
      description: "Advanced security measures to safeguard your assets and information.",
    },
    {
      icon: <FaCogs />,
      title: "System Maintenance",
      description: "Regular maintenance and troubleshooting for your CCTV systems.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Remote Monitoring",
      description: "Access your camera feeds remotely from anywhere with secure connections.",
    },
  ];

  return (
    <section className="bg-[#f2f2f3] min-h-screen">

      {/* HERO SECTION */}
      <div className="relative w-full h-[650px] flex items-center justify-center overflow-hidden">

        {/* Background */}
        <img
          src="/images/17.jpg"
          alt="Security background"
          className="absolute w-full h-full object-cover"
        />

        {/* Cropped Camera (only camera visible) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[217px] h-[130px] overflow-hidden z-20">
          <img
            src="/images/camera.jpg.jpg"
            alt="CCTV Camera"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Text */}
        <div className="relative z-20 px-6 md:px-16 max-w-3xl text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            CCTV & <span className="text-[#E2B770]">Camera Systems</span>
          </h1>

          <p className="text-lg">
            Protect your property with advanced CCTV and surveillance systems.
            We provide installation, monitoring, and maintenance for homes,
            offices, and enterprises.
          </p>
        </div>

      </div>

      {/* SERVICES */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12 text-center">
            Our CCTV Services
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#E2B770]/20 text-[#E2B770] text-3xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default CCTVPage;