import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-lg z-50">
      <h1 className="text-2xl font-bold">Uvindu Hewage</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
