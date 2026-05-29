// import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
        <nav>

      <NavLink to="/about" className="text-5xl font-bold text-white">About</NavLink>

      <NavLink to="/services" className="text-5xl font-bold text-white">Services</NavLink>

      <NavLink to="/products" className="text-5xl font-bold text-white">Products</NavLink>

      <NavLink to="/contact" className="text-5xl font-bold text-white">Contact</NavLink>
    </nav>
    </div>
  )
}

export default Navbar