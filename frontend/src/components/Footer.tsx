import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-20 px-10 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">

        {/* BRAND SECTION */}
        <div className="flex flex-col space-y-6 max-w-sm">
          <h2 className="text-4xl font-bold tracking-tight">KIIN Innovation</h2>
          <p className="text-gray-400 leading-relaxed">
            Empowering businesses and homes with reliable internet,
            advanced security systems, and smart technology solutions.
          </p>

          <div className="flex gap-5 text-xl">
            <FaFacebook className="hover:text-gray-400 cursor-pointer transition" />
            <FaInstagram className="hover:text-gray-400 cursor-pointer transition" />
            <FaXTwitter className="hover:text-gray-400 cursor-pointer transition" />
            <FaLinkedin className="hover:text-gray-400 cursor-pointer transition" />
            <FaYoutube className="hover:text-gray-400 cursor-pointer transition" />
          </div>
        </div>

        {/* SERVICES SECTION */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg mb-6">Services</h3>
          <ul className="flex flex-col space-y-4 text-gray-400">
            <li className="hover:text-white cursor-pointer transition">
              High-Speed Internet
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Smart Security Cameras
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Access Control Systems
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Business Software Solutions
            </li>
          </ul>
        </div>

        {/* COMPANY SECTION */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg mb-6">Company</h3>
          <ul className="flex flex-col space-y-4 text-gray-400">
            <li className="hover:text-white cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Careers
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">
        © 2026 KIIN Innovation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;