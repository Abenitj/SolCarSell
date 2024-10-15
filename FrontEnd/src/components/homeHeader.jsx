import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; 
import logo from "../assets/image/logo.jpg";
import DarkModeToggle from "./DarkModeToggle"; // Import the toggle component

const HomeHeader = () => {
  const [bgColor, setBgColor] = useState("");
  const [btn, setbtn] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to manage hamburger menu
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
  const location = useLocation(); // Get the current location

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-red-600 bg-opacity-90");
        setbtn("bg-red-600 border ");
      } else {
        setBgColor("");
        setbtn("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("bg-gray-900", "text-white"); // Dark mode styles
    } else {
      document.body.classList.remove("bg-gray-900", "text-white"); // Remove dark mode styles
    }
  }, [isDarkMode]);

  // Set background color based on route
  useEffect(() => {
    if (location.pathname === "/home" || location.pathname === "/") {
      setBgColor("bg-transparent"); // Make it transparent (blur)
    } else {
      setBgColor("bg-red-600 bg-opacity-90"); // Make it red
    }
  }, [location.pathname]); // Run this effect when the pathname changes

  return (
    <nav
      className={`z-50 text-white fixed top-0 left-0 w-full transition-all duration-300 ${bgColor} backdrop-blur-md flex flex-col md:flex-row`}
    >
      <div className="max-w-screen-xl flex flex-wrap w-full items-center justify-between mx-auto p-2">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={logo}
            className="h-14 bg-primary rounded-full"
            alt="SolCarTrade"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Sol Car Trade
          </span>
        </Link>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"} w-full md:w-auto md:order-1`}>
          <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            {/* Menu Items */}
            {["Home", "Car Listings", "About Us", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.replace(" ", "").toLowerCase()}`}
                  className={`group block py-2 px-3 md:p-0 rounded text-white md:hover:bg-transparent md:text-white dark:text-white `}
                >
                  {item}
                  <div className="h-1 rounded-lg bg-secondary w-0 group-hover:w-full transition-all duration-200"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Dark Mode Toggle */}
        <div className="hidden md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Link to="/car-listing" aria-current="page">
            <button
              type="button"
              className={`text-white ml-4 bg-red-500 ${btn} transition-all duration-100 font-medium rounded-lg text-sm px-4 py-2 text-center`}
            >
              Get started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HomeHeader;
