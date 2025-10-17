import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom'; // <-- Import Link and NavLink

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  const navLinkClassName = ({ isActive }) =>
    `relative group inline-block py-2 ${isActive ? 'text-yellow-500' : 'text-gray-900 dark:text-gray-100'}`;

  const textDecoClassName = `absolute left-0 bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-200 group-hover:w-full`;


  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/60 dark:bg-[#0B061A]/96 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo - Use Link for simple navigation */}
        <Link to="/">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-lg">
              AK
            </div>
            <span className="text-2xl font-semibold text-black dark:text-gray-50">
              Animesh Khanra
            </span>
          </div>
        </Link>

        {/* Desktop MENU - Use NavLink for active styling */}
        <ul className="hidden md:flex space-x-7 text-gray-900 dark:text-gray-100 font-medium">
          <li>
            <NavLink to="/" className={navLinkClassName}>
              Home
              <span className={textDecoClassName}></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClassName}>
              About
              <span className={textDecoClassName}></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={navLinkClassName}>
              Skills
              <span className={textDecoClassName}></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navLinkClassName}>
              Projects
              <span className={textDecoClassName}></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClassName}>
              Contact
              <span className={textDecoClassName}></span>
            </NavLink>
          </li>
        </ul>

        {/* Theme Toggle */}
        <div className="flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <Sun className="text-yellow-400 w-5 h-5" />
            ) : (
              <Moon className="text-gray-800 w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 dark:text-gray-100 ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white dark:bg-[#0B061A] text-gray-800 dark:text-gray-100 font-medium">
          <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
          <li><NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink></li>
          <li><NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
        </ul>
      )}
    </nav>
  );
}