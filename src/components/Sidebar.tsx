import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-4 text-lg font-semibold border-b border-gray-700">Navigation</div>
      <ul className="mt-4">
        <li className="hover:bg-gray-700">
          <Link to="/add-contact" className="block p-4">Add Contact</Link>
        </li>
        <li className="hover:bg-gray-700">
          <Link to="/contact-list" className="block p-4">Contact List</Link>
        </li>
        <li className="hover:bg-gray-700">
          <Link to="/line-chart" className="block p-4">Line Chart</Link>
        </li>
        <li className="hover:bg-gray-700">
          <Link to="/map-component" className="block p-4">Map</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
