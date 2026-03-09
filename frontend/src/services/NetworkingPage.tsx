const NetworkingPage = () => {
  return (
    <section className="bg-[#f2f2f3] min-h-screen py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-[#0f172a] mb-6">
          Networking & Structured Cabling
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          We build reliable network infrastructure for offices, schools,
          and enterprises using modern networking and structured cabling
          standards.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Services</h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>LAN/WAN network design</li>
          <li>Structured cabling installation</li>
          <li>Router & switch configuration</li>
          <li>Network troubleshooting</li>
          <li>Infrastructure optimization</li>
        </ul>

      </div>
    </section>
  );
};

export default NetworkingPage;