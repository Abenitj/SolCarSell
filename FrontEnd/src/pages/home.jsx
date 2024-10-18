import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection ";
import HomeHeader from "../components/homeHeader";
import img1 from "../assets/image/herocar1.jpg";
import img2 from "../assets/image/herocar2.jpg";
import img3 from "../assets/image/herocar3.jpg";
import aboutimg from "../assets/image/carimg1.jpg";
import ContactUs from "../components/ContactUs";
import Accordion from "./Accordion";
import faqs from "../assets/faqs";

const Home = () => {
  const [loading, setLoading] = useState(true); // For loading state
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  useEffect(() => {
    // Add dark class to HTML if dark mode is enabled
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      price: "$20,000",
      image: img1,
    },
    {
      id: 2,
      make: "Honda",
      model: "Accord",
      price: "$22,000",
      image: img2,
    },
    {
      id: 3,
      make: "Ford",
      model: "Mustang",
      price: "$30,000",
      image: img3,
    },
  ];

  return (
    <div>
      <HomeHeader />
      <HeroSection />
      <div className="bg-red-50">
        <section className="w-full dark:bg-gray-900 py-12">
          <h1
            id="feature_car"
            className="text-center text-4xl text-red-500 dark:text-red-400 font-extrabold"
          >
            Featured Cars
          </h1>
          <div className="flex justify-center py-5">
            <h2 className="text-3xl md:w-[50%] w-full text-center font-semibold mb-8 dark:text-gray-200">
              Discover Our Exclusive Selection of Premium Featured Cars
            </h2>
          </div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cars.map((car) => (
                <div
                  key={car.id}
                  className="bg-red-100 dark:bg-gray-800 shadow-sm overflow-hidden"
                >
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-48 object-cover"
                    loading="lazy" // Lazy loading for images
                    onLoad={() => setLoading(false)}
                  />
                  {loading && (
                    <div className="spinner dark:text-gray-300">Loading...</div>
                  )}
                  <div className="p-4 dark:text-gray-300">
                    <h3 className="text-lg font-semibold">
                      {car.make} {car.model}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {car.price}
                    </p>
                    <a
                      href={`/CarListings/${car.id}`}
                      className="mt-4 inline-block bg-red-500 text-white py-2 px-4 rounded dark:bg-red-600"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ABOUT US SECTION */}
      <section className="md:min-h-[90vh] h-full sm:w-full md:text-left text-center w-full py-5 text-neutral flex flex-col md:flex-row md:justify-center md:items-center dark:bg-gray-900 dark:text-white">
        <div className="md:w-[40%] p-5">
          <h1 className="md:text-6xl text-4xl font-bold text-red-400 dark:text-red-300">
            About Us
          </h1>
          <h2 className="md:text-4xl text-2xl font-bold mt-4 dark:text-gray-300">
            We Prioritize Customer Satisfaction
          </h2>
          <p className="md:py-6 py-3 text-lg">
            The purpose of this document is to provide a detailed specification
            for the development of the Sol Car Trade website. This website will
            allow users to view, search, and inquire about cars. It will also
            provide an admin panel for managing car listings.
          </p>
          <a
            href="/AboutUs"
            className="inline-block px-5 py-2 hover:bg-red-500 bg-red-400 text-white rounded-md mt-4 dark:bg-gray-700"
          >
            Read More
          </a>
        </div>
        <div className="md:w-1/2 md:p-5">
          <img
            src={aboutimg}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* FAQ SECTION */}
      <div className="min-h-screen bg-red-50 dark:bg-gray-900 flex flex-col gap-5 md:p-16 p-2">
        <div className="md:text-5xl text-3xl font-bold text-neutral dark:text-white">
          FAQs
        </div>
        <div className="text-neutral dark:text-gray-300">
          Find answers to common questions potential clients might have about
          working with Addis Spark.
        </div>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            title={faq?.title}
            description={faq?.description}
            answer={faq?.answer}
          />
        ))}
      </div>
      
      {/* CONTACT US SECTION */}
      <div className="p-10 bg-primary dark:bg-gray-900">
        <h2 className="sm:text-5xl font-[700] text-4xl text-red-400 dark:text-red-300 text-center">
          Contact Us
        </h2>
        <div className="flex justify-center">
          <p className="sm:text-3xl text-xl md:w-1/2 text-neutral dark:text-gray-300 text-center font-bold">
            Have a question or need assistance? Reach out to us!
          </p>
        </div>
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
