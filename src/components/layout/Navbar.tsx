import { NavLink } from "react-router-dom";
import Button from "../ui/button";

const Navbar = () => {
  return (
    <header className="sticky w-full top-2 z-50 ">
      <nav className="max-w-7xl mx-auto px-6 py-2 text-text-secondary font-body bg-white/0.03 backdrop-blur-xl rounded-2xl border border-white/15">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <NavLink to="/">VYNHO</NavLink>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center  gap-8">
            <NavLink
              to="/about"
              className={({
                isActive,
              }) => `px-4 py-2 rounded-full transition-all duration-300 hover:text-white hover:scale-105 text-base
              ${
                isActive
                  ? "bg-white/10 border border-white/20 text-white"
                  : "text-text-secondary"
              }`}
            >
              About
            </NavLink>

            <NavLink
              to="/services"
              className={({
                isActive,
              }) => `px-4 py-2 rounded-full transition-all duration-300 hover:text-white hover:scale-105 text-base
              ${
                isActive
                  ? "bg-white/10 border border-white/20 text-white"
                  : "text-text-secondary"
              }`}
            >
              Services
            </NavLink>

            <NavLink
              to="/products"
              className={({
                isActive,
              }) => `px-4 py-2 rounded-full transition-all duration-300 hover:text-white hover:scale-105 text-base
              ${
                isActive
                  ? "bg-white/10 border border-white/20 text-white"
                  : "text-text-secondary"
              }`}
            >
              Products
            </NavLink>

            <NavLink
              to="/ai"
              className={({
                isActive,
              }) => `px-4 py-2 rounded-full transition-all duration-300 hover:text-white hover:scale-105 text-base
              ${
                isActive
                  ? "bg-white/10 border border-white/20 text-white"
                  : "text-text-secondary"
              }`}
            >
              Ai
            </NavLink>
          </div>

          {/* Contact Button */}
          <div>
            <Button to="/contact" variant="primary">contact</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
