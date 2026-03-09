import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinkStyle =
    "px-4 py-2 rounded-md font-medium transition duration-300 hover:bg-blue-500 hover:text-white";

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

          {/* SERVICES MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={navLinkStyle}>
              Services ▾
            </button>

            {servicesOpen && (
              <div className="absolute left-0 mt-4 w-[500px] bg-white dark:bg-[#0f172a] shadow-xl rounded-lg p-6 grid grid-cols-2 gap-6">

                {/* Connectivity */}
                <div>
                  <h3 className="font-semibold text-blue-500 mb-2">
                    Connectivity
                  </h3>
                  <NavLink to="/services/starlink" className="block hover:text-blue-500">
                    Starlink Sollutions
                  </NavLink>
                </div>

                {/* Security */}
                <div>
                  <h3 className="font-semibold text-blue-500 mb-2">
                    Security
                  </h3>
                  <NavLink to="/services/cctv" className="block hover:text-blue-500">
                    CCTV & Smart Surveillance
                  </NavLink>
                </div>

                {/* Infrastructure */}
                <div>
                  <h3 className="font-semibold text-blue-500 mb-2">
                    Infrastructure
                  </h3>
                  <NavLink to="/services/networking" className="block hover:text-blue-500">
                    Networking & Structured Cabling
                  </NavLink>
                </div>

                {/* Innovation */}
                <div>
                  <h3 className="font-semibold text-blue-500 mb-2">
                    Innovation
                  </h3>
                  <NavLink to="/services/software" className="block hover:text-blue-500">
                    Software Development & API Integration
                  </NavLink>
                </div>

                {/* Divider */}
                <div className="col-span-2 border-t pt-3">
                  <NavLink
                    to="/case-studies"
                    className="font-medium text-blue-500 hover:underline"
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
            className="ml-4 px-3 py-2 border rounded-md text-sm border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>
    </nav>
  );
};

export default Navbar;