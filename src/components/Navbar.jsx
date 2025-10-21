import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            PLP Task Manager
          </Link>
          <div className="flex items-center space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              }
            >
              Tasks
            </NavLink>
            <NavLink
              to="/api"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              }
            >
              API Data
            </NavLink>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-4 px-3 py-1 border rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
