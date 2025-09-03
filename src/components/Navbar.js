import React from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ onSidebarToggle }) => {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Mobile menu button and title */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              id="sidebar-toggle"
              onClick={onSidebarToggle}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-label="Open sidebar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Title */}
            <h1 className="ml-2 md:ml-0 text-xl font-semibold text-gray-900">Dashboard</h1>
          </div>

          {/* Right side - User info and logout */}
          <div className="flex items-center space-x-4">
            {/* User greeting - hidden on mobile */}
            <div className="hidden sm:block">
              <span className="text-gray-700 text-sm">
                Welcome back, <span className="font-medium text-gray-900">{user?.name}</span>
              </span>
            </div>

            {/* User avatar/initials */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>

              {/* Mobile user name */}
              <span className="sm:hidden text-gray-700 text-sm font-medium">
                {user?.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;