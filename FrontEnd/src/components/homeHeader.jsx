import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.jpg";

const HomeHeader = () => {
  const [bgColor, setBgColor] = useState("");
  const [btn, setBtn] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-red-600 bg-opacity-90 backdrop-blur-md");
        setBtn("bg-red-600 border ");
      } else {
        setBgColor("backdrop-blur-lg");
        setBtn("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 fixed top-0 left-0 w-full transition-all duration-300 ${bgColor} border-gray-200 flex flex-col md:flex-row`}
    >
      <div className="max-w-screen-xl flex flex-wrap w-full items-center justify-between mx-auto p-2">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className="h-14 text-primary bg-primary rounded-full"
            alt="SolCarTrade"
          />
          <span className="self-center text-primary text-2xl font-semibold whitespace-nowrap">
            Sol Car Trade
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Main Navigation Menu */}
        <div
          className={`md:flex ${isOpen ? "block" : "hidden"} w-full md:w-auto md:order-1`}
        >
          <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className="group block py-2 px-3 md:p-0 rounded text-white md:hover:bg-transparent md:text-white"
              >
                Home
                <div className="h-1 rounded-lg bg-secondary w-0 group-hover:w-full transition-all duration-200"></div>
              </Link>
            </li>
            <li>
              <Link
                to="/carlistings"
                className="group block py-2 px-3 md:p-0 rounded text-white md:hover:bg-transparent md:text-white"
              >
                Car Listings
                <div className="h-1 rounded-lg bg-secondary w-0 group-hover:w-full transition-all duration-200"></div>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="group block py-2 px-3 md:p-0 rounded text-white md:hover:bg-transparent md:text-white"
              >
                Contact
                <div className="h-1 rounded-lg bg-secondary w-0 group-hover:w-full transition-all duration-200"></div>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="group block py-2 px-3 md:p-0 rounded text-white md:hover:bg-transparent md:text-white"
              >
                About Us
                <div className="h-1 rounded-lg bg-secondary w-0 group-hover:w-full transition-all duration-200"></div>
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/carListings">
            <button
              type="button"
              className={`text-white bg-red-500 ${btn} transition-all duration-100 font-medium rounded-lg text-sm px-4 py-2 text-center`}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HomeHeader;
