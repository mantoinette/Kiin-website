import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#0f172a] text-white px-10 py-5 flex justify-between items-center shadow-2xl sticky top-0 z-50">
      
      {/* Logo */}
      <NavLink
        to="/"
        className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
      >
        KIIN Innovation
      </NavLink>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        
        {["/", "/services", "/about", "/contact"].map((path, index) => {
          const labels = ["Home", "Services", "About", "Contact"];
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full font-medium transition duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-200 hover:from-blue-500 hover:to-purple-500 hover:text-white"
                }`
              }
            >
              {labels[index]}
            </NavLink>
          );
        })}

      </div>
    </nav>
  );
};

export default Navbar;