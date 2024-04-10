import React, { useState } from 'react';

const Navbar = () => {
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);

  const toggleProductDropdown = () => {
    setShowProductDropdown(!showProductDropdown);
    if (showResourcesDropdown) {
      setShowResourcesDropdown(false);
    }
  };
  const toggleResourcesDropdown = () => {
    setShowResourcesDropdown(!showResourcesDropdown);
    if (showProductDropdown) {
      setShowProductDropdown(false);
    }
  };
  return (
    <nav className="bg-white p-4 flex items-center justify-between">
      <img src="https://marketing-assets.calendly.com/media/logo.svg" alt="Company Icon" className="h-10 w-22 mr-60 ml-10" />
      <div className="lg:flex items-center space-x-4 hidden ">
        
        <a href="/" className="text-gray-900">Individuals</a>
        <a href="/" className="text-gray-900">Teams</a>
        <a href="/" className="text-gray-900">Enterprise</a>
        <div className="relative inline-block text-left">
          <button className="text-gray-900" onClick={toggleProductDropdown}>
            Product
          </button>
          {showProductDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
              <a href="/" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Feature 1</a>
              <a href="/" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Feature 2</a>
              <a href="/" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Feature 3</a>
            </div>
          )}
        </div>
        <a href="/" className="text-gray-900">Prices</a>
        <div className="relative inline-block text-left">
          <button className="text-gray-900" onClick={toggleResourcesDropdown}>
            Resources
          </button>
          {showResourcesDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
              <a href="/" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Resource 1</a>
              <a href="/" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Resource 2</a>
              <a href="/" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Resource 3</a>
            </div>
          )}
        </div>
      </div>
      <div className="md:flex hidden items-center space-x-4">
      <button className="text-gray-900">Login</button>
        <button className="text-gray-900 bg-blue-500 px-4 py-2 rounded-3xl">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;
