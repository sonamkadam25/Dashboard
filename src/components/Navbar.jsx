
import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md flex items-center justify-between px-4">
      <h1 className="text-xl font-semibold">Project M.</h1>
      
      <div className="flex items-center space-x-4">
        {/* Search Bar on the Left */}
        <div className="relative p-40">
          <input
            type="text"
            placeholder="Search for anything..."
            className="pl-9 pr-4 py-2 border rounded-lg w-80 focus:outline-none"
          />
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 pl-40">
            🔍
          </span>
        </div>
      </div>

      {/* Icons and User Image on the Right */}
      <div className="flex items-center space-x-4 ml-auto">
        <button className="text-gray-600">⬜</button>
        <button className="text-gray-600">💬</button>
        <button className="text-gray-600">🔔</button>
        <img
          src="https://via.placeholder.com/30"
          alt="User"
          className="rounded-full h-8 w-8 cursor-pointer"
        />
      </div>
    </nav>
  );
}

export default Navbar;
