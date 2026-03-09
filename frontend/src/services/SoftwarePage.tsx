const SoftwarePage = () => {
  return (
    <section className="bg-[#f2f2f3] min-h-screen py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-[#0f172a] mb-6">
          Software Development & API Integration
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          We design custom software solutions tailored to business needs,
          including web applications, automation systems, and API integrations.
        </p>

        <h2 className="text-2xl font-semibold mb-4">What We Build</h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Custom web applications</li>
          <li>Business management systems</li>
          <li>API integration</li>
          <li>Database design</li>
          <li>System automation</li>
        </ul>

      </div>
    </section>
  );
};

export default SoftwarePage;