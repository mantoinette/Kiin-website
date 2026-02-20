import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger menu icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" }, // Added Projects page
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-black text-white px-6 sm:px-8 py-4 shadow-md fixed w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors cursor-pointer">
          KIIN Innovation
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative hover:text-blue-400 transition-colors ${
                location.pathname === link.path ? "text-blue-400" : ""
              }`}
            >
              {link.name}
              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 mt-2 rounded-lg shadow-lg py-4 px-6 space-y-4 animate-slide-down">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-medium hover:text-blue-400 transition-colors ${
                location.pathname === link.path ? "text-blue-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;