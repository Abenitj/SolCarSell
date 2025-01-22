import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/image/logo.jpg";
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Use layout effect to immediately apply the dark mode
  useLayoutEffect(() => {
    const savedMode = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(savedMode);
    document.documentElement.classList.toggle('dark', savedMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('dark-mode', newMode);
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <nav className="z-50 bg-gray-100 dark:bg-gray-800  shadow-xl text-gray-800  flex-row fixed top-0 left-0 w-full border-gray-200 transition-all duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 transition-colors duration-500">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-14 bg-primary rounded-full" alt="SolCarTrade" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">SolCarTrade</span>
        </Link>
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <button onClick={toggleDarkMode} className="text-white focus:outline-none">
            {isDarkMode ? <FaSun className="h-6 w-6" /> : <FaMoon className="h-6 w-6" />}
          </button>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"} w-full md:w-auto md:order-1`}>
          <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="group block py-2 px-3 md:p-0 rounded md:hover:bg-transparent hover:bg-red-500 dark:hover:bg-gray-800 dark:text-gray-300"
                aria-current="page"
              >
                Home
                <div className="h-1 rounded-lg bg-white dark:bg-gray-400 w-0 group-hover:w-full transition-all duration-200"></div>
              </Link>
            </li>
            <li>
              <Link
                to="/carlistings"
                className="group block py-2 px-3 md:p-0 rounded hover:bg-red-500 md:hover:bg-transparent dark:hover:bg-gray-800 dark:text-gray-300"
              >
                CarListings
                <div className="h-1 rounded-lg bg-white dark:bg-gray-400 w-0 group-hover:w-full transition-all duration-200"></div>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="group block py-2 px-3 md:p-0 rounded hover:bg-red-500 md:hover:bg-transparent dark:hover:bg-gray-800 dark:text-gray-300"
              >
                About Us
                <div className="h-1 rounded-lg bg-white dark:bg-gray-400 w-0 group-hover:w-full transition-all duration-200"></div>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="group block py-2 px-3 md:p-0 rounded hover:bg-red-500 md:hover:bg-transparent dark:hover:bg-gray-800 dark:text-gray-300"
              >
                Contact
                <div className="h-1 rounded-lg bg-white dark:bg-gray-400 w-0 group-hover:w-full transition-all duration-200"></div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleDarkMode}
            className="ml-4 text-white focus:outline-none transition-colors duration-500"
          >
            {isDarkMode ? <FaSun className="h-6 w-6" /> : <FaMoon className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
