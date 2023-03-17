import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-teal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="Home" className="text-white font-bold text-xl">E-learning</Link>
          </div>
          <div className="hidden md:block flex-grow">
            <div className="flex items-baseline justify-center space-x-4">
              <Link to="Home" className="text-gray-300 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="About" className="text-gray-300 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">AboutUs</Link>
              <Link to="/Courses" className="text-gray-300 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
              <Link to="/Programs" className="text-gray-300 hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Programs</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
