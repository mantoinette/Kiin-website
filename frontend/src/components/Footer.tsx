const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-8">
      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

        <div>
          <h3 className="text-white text-xl font-bold mb-4">KIIN Innovation</h3>
          <p>Empowering businesses and homes with reliable internet, advanced security systems, and smart technology solutions.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>High-Speed Internet</li>
            <li>Security Cameras</li>
            <li>Access Control</li>
            <li>Software Solutions</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p>info@kiininnovation.com</p>
          <p>+250 789 725 066</p>
          <p>Mon – Fri, 8AM – 5PM</p>
        </div>

      </div>

      <div className="text-center text-gray-600 mt-10 border-t border-gray-800 pt-6">
        © 2026 KIIN Innovation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;