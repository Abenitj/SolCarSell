import React, { useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  
  // Apply or remove the dark mode class on the root element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="focus:outline-none dark:text-white text-gray-900"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <FaSun className="w-6 h-6" /> // Sun icon for light mode
      ) : (
        <FaMoon className="w-6 h-6" /> // Moon icon for dark mode
      )}
    </button>
  );
};

export default DarkModeToggle;
