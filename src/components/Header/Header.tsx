import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <Link to="/" className="mr-5 hover:text-blue-200 transition-colors">
        Home
      </Link>
      <Link to="/review" className="mr-5 hover:text-blue-200 transition-colors">
        Order Review
      </Link>
      <Link to="/about" className="mr-5 hover:text-blue-200 transition-colors">
        About
      </Link>
      <Link
        to="/grandpa"
        className="mr-5 hover:text-blue-200 transition-colors"
      >
        Grandpa
      </Link>
      <Link to="/contact" className="hover:text-blue-200 transition-colors">
        Contact
      </Link>
    </nav>
  );
};

export default Header;
