import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-blue-500">
        KIIN Innovation
      </h1>

      <div className="space-x-6 hidden md:flex">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/services" className="hover:text-blue-400 transition">Services</Link>
        <Link to="/about" className="hover:text-blue-400 transition">About</Link>
        <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;