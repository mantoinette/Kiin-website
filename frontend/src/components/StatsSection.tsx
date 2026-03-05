// src/components/StatsSection.tsx
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaProjectDiagram, FaNetworkWired, FaLaptopCode } from "react-icons/fa";

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    { icon: <FaUsers />, end: 500, label: "Happy Clients" },
    { icon: <FaNetworkWired />, end: 300, label: "Starlink Installations" },
    { icon: <FaProjectDiagram />, end: 150, label: "Network Projects" },
    { icon: <FaLaptopCode />, end: 80, label: "Software Projects" },
  ];

  return (
    <div ref={ref} className="bg-[#F2F2F3] py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-[#E2B770]">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-3xl mb-3 flex justify-center">{stat.icon}</div>
            <h2 className="text-4xl md:text-5xl font-bold">
              {inView && <CountUp end={stat.end} duration={3} />}+
            </h2>
            <p className="mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;