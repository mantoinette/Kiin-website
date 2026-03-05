// src/components/Footer.tsx
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-[#E2B770] py-12 px-8">
      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

        {/* Logo */}
        <div>
          <NavLink to="/">
            <img
              src="/images/logo.png"
              alt="KIIN Innovation Logo"
              className="h-10 mb-4"
            />
          </NavLink>
          <p className="text-[#E2B770]/90">
            Empowering businesses and homes with reliable internet, advanced security systems, and smart technology solutions.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-[#E2B770]/90">
            <li>High-Speed Internet</li>
            <li>Security Cameras</li>
            <li>Access Control</li>
            <li>Software Solutions</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-[#E2B770]/90">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-[#E2B770]/90">info@kiininnovation.com</p>
          <p className="text-[#E2B770]/90">+250 789 725 066</p>
          <p className="text-[#E2B770]/90">Mon – Fri, 8AM – 5PM</p>
        </div>

      </div>

      <div className="text-center text-[#E2B770]/70 mt-10 border-t border-[#E2B770]/30 pt-6">
        © 2026 KIIN Innovation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;