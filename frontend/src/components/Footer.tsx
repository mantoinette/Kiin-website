// src/components/Footer.tsx
import { NavLink } from "react-router-dom";

const Footer = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors duration-200 transform hover:text-blue-500 hover:scale-105 ${
      isActive ? "text-white underline scale-105 font-semibold" : "text-[#e0e0e0]/90"
    }`;

  return (
    <footer className="bg-[#0f172a] text-[#e0e0e0] py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <NavLink to="/">
            <img
              src="/images/logo.png"
              alt="KIIN Innovation Logo"
              className="h-10 mb-4"
            />
          </NavLink>
          <p className="text-[#e0e0e0]/90 text-sm">
            Empowering businesses and homes with reliable internet, advanced security systems, and smart technology solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-[#f5f5f5]">Quick Links</h4>
          <ul className="flex flex-col space-y-2">
            <li>
              <NavLink to="/" className={getLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={getLinkClass}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={getLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={getLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4 text-[#f5f5f5]">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/about" className={getLinkClass}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className={getLinkClass}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={getLinkClass}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/press" className={getLinkClass}>
                Press
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-[#f5f5f5]">Contact</h4>
          <p className="text-[#e0e0e0]/90 text-sm">info@kiininnovation.com</p>
          <p className="text-[#e0e0e0]/90 text-sm">+250 789 725 066</p>
          <p className="text-[#e0e0e0]/90 text-sm">Mon – Fri, 8AM – 5PM</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-[#e0e0e0]/70 mt-10 border-t border-[#e0e0e0]/30 pt-6 text-sm">
        © 2026 KIIN Innovation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;