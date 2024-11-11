// src/components/Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <div className="w-64 h-full bg-white shadow-md flex flex-col p-4 fixed">
      <h2 className="text-xl font-semibold mb-4">My Projects</h2>
      <nav className="space-y-2">
        <a href="#" className="block p-2 rounded-lg hover:bg-gray-100">🏠 Home</a>
        <a href="#" className="block p-2 rounded-lg hover:bg-gray-100">💬 Messages</a>
        <a href="#" className="block p-2 rounded-lg hover:bg-gray-100">📋 Tasks</a>
        <a href="#" className="block p-2 rounded-lg hover:bg-gray-100">👥 Members</a>
        <a href="#" className="block p-2 rounded-lg hover:bg-gray-100">⚙️ Settings</a>
      </nav>
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-gray-500">Projects</h3>
        <ul className="space-y-1 mt-2">
          <li>📱 Mobile App</li>
          <li>💻 Website Redesign</li>
          <li>📐 Design System</li>
          <li>📝 Wireframes</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
