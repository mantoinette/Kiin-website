import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-b from-orange-900 via-amber-900 to-orange-950 text-gray-200 px-6 lg:px-12 py-16 border-t-4 border-orange-500">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-orange-400 mb-4 hover:text-orange-300 transition-colors">
            KIIN Innovation
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Empowering businesses and homes with reliable internet, advanced security systems, and smart technology solutions.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-orange-400 hover:text-orange-300 text-xl transition-colors"><FaFacebook /></a>
            <a href="#" className="text-orange-400 hover:text-orange-300 text-xl transition-colors"><FaTwitter /></a>
            <a href="#" className="text-orange-400 hover:text-orange-300 text-xl transition-colors"><FaLinkedin /></a>
            <a href="#" className="text-orange-400 hover:text-orange-300 text-xl transition-colors"><FaInstagram /></a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-orange-500 rounded"></span>Services
          </h3>
          <ul className="space-y-3">
            <li className="text-gray-300 hover:text-orange-400 cursor-pointer transition-colors text-sm">
              → High-Speed Internet
            </li>
            <li className="text-gray-300 hover:text-orange-400 cursor-pointer transition-colors text-sm">
              → Security Cameras
            </li>
            <li className="text-gray-300 hover:text-orange-400 cursor-pointer transition-colors text-sm">
              → Access Control
            </li>
            <li className="text-gray-300 hover:text-orange-400 cursor-pointer transition-colors text-sm">
              → Software Solutions
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-orange-500 rounded"></span>Company
          </h3>
          <ul className="space-y-3">
            <li className="text-gray-300 hover:text-orange-400 cursor-pointer transition-colors text-sm">
              → About Us
            </li>
            <li className="text-gray-300 hover:text-orange-400 cursor-pointer transition-colors text-sm">
              → Careers
            </li>
            <li className="text-gray-300 hover:text-orange-400 cursor-pointer transition-colors text-sm">
              → Blog
            </li>
            <li className="text-gray-300 hover:text-orange-400 cursor-pointer transition-colors text-sm">
              → Press
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-orange-500 rounded"></span>Contact
          </h3>
          <ul className="space-y-3">
            <li className="text-gray-300 text-sm">
              <strong>Email:</strong> info@kiininnovation.com
            </li>
            <li className="text-gray-300 text-sm">
              <strong>Phone:</strong> +250 789725066
            </li>
            <li className="text-gray-300 text-sm">
              <strong>Hours:</strong> Mon-Fri, 8AM-5PM EST
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-orange-700 pt-8">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <h4 className="text-white font-semibold mb-2 text-sm">Quick Links</h4>
            <div className="flex gap-4 text-xs">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Sitemap</a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2026 KIIN Innovation. All rights reserved.
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm">
              Built with <span className="text-orange-400">❤️</span> for innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;