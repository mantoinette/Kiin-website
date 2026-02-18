import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar fixed w-full top-0 z-50 bg-gradient-to-r from-amber-900 via-yellow-800 to-amber-900 shadow-2xl border-b border-amber-800">
        <div className="w-full px-8 py-5 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-white cursor-pointer font-serif tracking-tight whitespace-nowrap">
            KIIN Innovation
          </h1>

          {/* Desktop Menu - Right Side */}
          <ul style={{ display: "flex", alignItems: "center", gap: "3rem", flexWrap: "nowrap" }}>
            {/* Services */}
            <li
              className="relative cursor-pointer text-white text-lg font-medium hover:text-amber-200 transition-colors flex items-center gap-2 whitespace-nowrap"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Services
              <span className="text-sm">▼</span>
              {servicesOpen && (
                <ul className="absolute top-14 left-0 bg-amber-800 text-white rounded-lg shadow-2xl w-56 p-4 space-y-3 border border-amber-700">
                  <li className="px-3 py-2 hover:bg-amber-700 cursor-pointer rounded transition-all text-sm">High-Speed Internet</li>
                  <li className="px-3 py-2 hover:bg-amber-700 cursor-pointer rounded transition-all text-sm">Smart Security Cameras</li>
                  <li className="px-3 py-2 hover:bg-amber-700 cursor-pointer rounded transition-all text-sm">Access Control</li>
                  <li className="px-3 py-2 hover:bg-amber-700 cursor-pointer rounded transition-all text-sm">Business Software</li>
                </ul>
              )}
            </li>

            {/* About */}
            <li
              className="relative cursor-pointer text-white text-lg font-medium hover:text-amber-200 transition-colors flex items-center gap-2 whitespace-nowrap"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              About
              <span className="text-sm">▼</span>
              {aboutOpen && (
                <ul className="absolute top-14 left-0 bg-amber-800 text-white rounded-lg shadow-2xl w-40 p-4 space-y-3 border border-amber-700">
                  <li className="px-3 py-2 hover:bg-amber-700 cursor-pointer rounded transition-all text-sm">About Us</li>
                  <li className="px-3 py-2 hover:bg-amber-700 cursor-pointer rounded transition-all text-sm">Careers</li>
                </ul>
              )}
            </li>

            {/* Resources */}
            <li className="cursor-pointer text-white text-lg font-medium hover:text-amber-200 transition-colors flex items-center gap-2 whitespace-nowrap">
              Resources
              <span className="text-sm">▼</span>
            </li>

            {/* Contact */}
            <li className="cursor-pointer text-white text-lg font-medium hover:text-amber-200 transition-colors whitespace-nowrap">
              Contact
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="text-white text-2xl hover:text-amber-200 transition-colors flex-shrink-0 ml-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-amber-800 border-t border-amber-700">
            <ul className="flex flex-col p-6 space-y-4">
              <li className="text-white text-lg font-medium hover:text-amber-200 cursor-pointer transition-colors py-2">Services</li>
              <li className="text-white text-lg font-medium hover:text-amber-200 cursor-pointer transition-colors py-2">About</li>
              <li className="text-white text-lg font-medium hover:text-amber-200 cursor-pointer transition-colors py-2">Resources</li>
              <li className="text-white text-lg font-medium hover:text-amber-200 cursor-pointer transition-colors py-2">Contact</li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;