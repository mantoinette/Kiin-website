// src/components/Navbar.tsx
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);

  // Handle dark mode
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesRef]);

  const navLinkStyle =
    "px-4 py-2 rounded-md font-medium transition duration-300 hover:bg-[#E2B770] hover:text-white";

  return (
    <nav className="bg-white dark:bg-[#0f172a] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/">
          <img src="/images/logo.png" alt="KIIN Innovation Logo" className="h-10"/>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-[#0f172a] dark:text-white">

          <NavLink to="/" className={navLinkStyle}>Home</NavLink>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={navLinkStyle}
            >
              Services ▾
            </button>

            {servicesOpen && (
              <div className="absolute left-0 mt-4 w-[500px] bg-white dark:bg-[#0f172a] shadow-xl rounded-lg p-6 grid grid-cols-2 gap-6 z-50">

                {/* Connectivity */}
                <div>
                  <h3 className="font-semibold text-[#E2B770] mb-2">Connectivity</h3>
                  <NavLink
                    to="/services/starlink"
                    className="block hover:text-[#E2B770]"
                    onClick={() => setServicesOpen(false)}
                  >
                    Starlink Solutions
                  </NavLink>
                </div>

                {/* Security */}
                <div>
                  <h3 className="font-semibold text-[#E2B770] mb-2">Security</h3>
                  <NavLink
                    to="/services/cctv"
                    className="block hover:text-[#E2B770]"
                    onClick={() => setServicesOpen(false)}
                  >
                    CCTV & Smart Surveillance
                  </NavLink>
                </div>

                {/* Infrastructure */}
                <div>
                  <h3 className="font-semibold text-[#E2B770] mb-2">Infrastructure</h3>
                  <NavLink
                    to="/services/networking"
                    className="block hover:text-[#E2B770]"
                    onClick={() => setServicesOpen(false)}
                  >
                    Networking & Structured Cabling
                  </NavLink>
                </div>

                {/* Innovation */}
                <div>
                  <h3 className="font-semibold text-[#E2B770] mb-2">Innovation</h3>
                  <NavLink
                    to="/services/software"
                    className="block hover:text-[#E2B770]"
                    onClick={() => setServicesOpen(false)}
                  >
                    Software Development & API Integration
                  </NavLink>
                </div>

                {/* Divider / View Case Studies CTA */}
                <div className="col-span-2 border-t pt-3">
                  <NavLink
                    to="/case-studies"
                    className="block text-center font-medium text-white bg-[#E2B770] px-4 py-2 rounded-md hover:bg-[#c79f58] transition shadow-md hover:shadow-lg"
                  >
                    View Case Studies →
                  </NavLink>
                </div>

              </div>
            )}
          </div>

          <NavLink to="/about" className={navLinkStyle}>About</NavLink>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-2 border rounded-md text-sm border-[#E2B770] text-[#E2B770] hover:bg-[#E2B770] hover:text-white transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#E2B770]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu can be added here if needed */}
    </nav>
  );
};

export default Navbar;