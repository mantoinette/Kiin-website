import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white px-10 py-5 flex justify-between items-center shadow-md sticky top-0 z-50">
      
      {/* Logo */}
      <NavLink to="/">
        <img
          src="/images/logo.png"
          alt="KIIN Innovation Logo"
          className="h-10"
        />
      </NavLink>

      {/* Navigation */}
      <div className="flex space-x-10 text-lg font-medium">
        <NavLink to="/" style={{ color: "#E2B770" }}>
          Home
        </NavLink>

        <NavLink to="/services" style={{ color: "#E2B770" }}>
          Services
        </NavLink>

        <NavLink to="/about" style={{ color: "#E2B770" }}>
          About
        </NavLink>

        <NavLink to="/contact" style={{ color: "#E2B770" }}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;