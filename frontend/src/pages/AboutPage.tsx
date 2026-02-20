const AboutPage = () => {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen px-6 md:px-20 py-16">

      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
          About KIIN Innovation
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          We are a technology company delivering reliable internet, smart security systems, 
          and innovative software solutions to empower businesses and communities.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-cyan-500 transition transform hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Our Mission</h2>
          <p className="text-gray-300 text-lg">
            To connect and secure the world through technology, enabling smarter, safer, 
            and more efficient solutions for our clients.
          </p>
        </div>
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-cyan-500 transition transform hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Our Vision</h2>
          <p className="text-gray-300 text-lg">
            To become a leading innovator in technology, making advanced digital solutions 
            accessible and impactful for everyone.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
          Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500 transition transform hover:-translate-y-1 text-center">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Innovation</h3>
            <p className="text-gray-300">We strive to create cutting-edge solutions that push the limits of technology.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500 transition transform hover:-translate-y-1 text-center">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Reliability</h3>
            <p className="text-gray-300">Our services are dependable, secure, and designed to meet client expectations.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500 transition transform hover:-translate-y-1 text-center">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Excellence</h3>
            <p className="text-gray-300">We deliver high-quality solutions that make a real difference.</p>
          </div>
        </div>
      </div>

      {/* Location with Google Map */}
      <div>
        <h2 className="text-3xl font-bold text-cyan-400 mb-4 text-center">Our Location</h2>
        <p className="text-center text-gray-300 mb-6">
          Find us in Gisement, Sawa City, Kigali, Rwanda
        </p>

        <div className="flex justify-center">
          <iframe
            title="KIIN Innovation Location"
            className="w-full h-96 rounded-2xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31675.71659700084!2d30.04177753065428!3d-1.949667164018638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dbef8f06759bd7%3A0xade53cb9ee3e2c44!2sKigali%20City%2C%20Rwanda!5e0!3m2!1sen!2s!4v1708400000000!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;