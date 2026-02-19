import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition hover:text-blue-400 ${isActive ? "text-blue-500 font-semibold" : "text-white"}`;

  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-blue-500">KIIN Innovation</h1>

      <div className="space-x-6 hidden md:flex">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/services" className={linkClass}>Services</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        <NavLink to="/projects" className={linkClass}>Projects</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;