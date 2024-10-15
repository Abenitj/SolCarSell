import React, { useState, useEffect } from "react";
import img1 from "../assets/image/herocar1.jpg";
import img2 from "../assets/image/herocar2.jpg";
import img3 from "../assets/image/herocar3.jpg";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3]; // Add more high-quality images here

  // Auto-scroll effect (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, [images.length]);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to select a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full h-screen bg-gray-600 dark:bg-gray-900">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Carousel wrapper */}
        <div className="relative w-full h-full">
          <div className="relative h-screen overflow-hidden rounded-lg">
            {/* Display the current active slide */}
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  className="block w-full h-full object-cover opacity-50"
                  alt={`Slide ${index + 1}`}
                />
                {/* Overlay text and CTA */}
                {index === currentIndex && (
                  <div className="absolute text-center md:text-start inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-32  text-white">
                    <h1 className="text-4xl md:text-5xl font-bold">
                      Welcome to{" "}
                      <span className="text-red-600">Sol Car Trade</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-lg">
                      Explore a wide range of high-quality cars. Whether you're
                      looking to buy or sell, we are here to assist you every
                      step of the way.
                    </p>
                    <div className="mt-8">
                      <a
                        href="/CarListings"
                        className="mr-4 px-6 py-2 text-lg font-medium bg-red-600  hover:bg-red-700"
                      >
                        Browse Cars
                      </a>
                      <button className="px-5 py-1 text-lg font-medium bg-transparent border-2 border-white hover:bg-white hover:text-gray-900">
                        Contact Us
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
                aria-current={index === currentIndex ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={prevSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1L1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={nextSlide}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
