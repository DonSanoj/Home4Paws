import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Home4Paws
        </Link>

        <nav>
          <ul className="flex items-center space-x-6 text-gray-700">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-blue-600">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-blue-600">
                Terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
