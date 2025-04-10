import React, { useState } from "react";
import HeroSection from "../components/HeroSection ";
import HomeHeader from "../components/homeHeader";
import aboutimg from "../assets/image/red car.png";
import ContactUs from "../components/ContactUs";
import Accordion from "./Accordion";
import Testimonial from "../components/Testimonial";
import faqs from "../assets/faqs";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import car from "../assets/car";

const Home = () => {
  // Example usage in a component
  const [loading, setLoading] = useState(true); // For loading state
  return (
    <div>
      <HomeHeader />
      <HeroSection />

      {/* FEATURED CARS SECTION */}
      <div className="bg-slate-50 dark:bg-gray-900">
  <section className="w-full py-12">
    <h1
      id="feature_car"
      className="text-center text-4xl text-red-500 font-extrabold"
    >
      Featured Cars
    </h1>
    <div className="flex justify-center py-5">
      <h2 className="text-3xl md:w-[50%] dark:text-primary w-full text-center font-semibold mb-8">
        Discover Our Exclusive Selection of Premium Featured Cars
      </h2>
    </div>

    <div className="container mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {car.map((car, index) => (
          <div
            key={index}
            className="w-full max-w-md bg-white border border-gray-200   dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className=" w-full h-48 object-cover"
                src={car.image}
                alt={`${car.make} ${car.model}`}
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {car.make} {car.model}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                  <svg
                    className="w-4 h-4 text-gray-200 dark:text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5  dark:bg-blue-200 dark:text-blue-800 ms-3">
                  5.0
                </span>
              </div>
              <div className="block">
                <span className="block p-3 text-3xl font-bold text-gray-900 dark:text-white">
                  ${car.price}
                </span>
                <button
                  className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>

      {/* ABOUT US SECTION */}
      <section className="md:min-h-[90vh] dark:bg-gray-800 dark:text-primary h-full sm:w-full md:text-left text-center w-full py-5 flex flex-col md:flex-row md:justify-center md:items-center">
        <div className="md:w-[40%] p-5">
          <h1 className="font-mono md:text-6xl text-4xl font-bold text-red-400">
            About Us
          </h1>
          <h2 className="md:text-4xl text-2xl font-bold mt-4">
            We Prioritize Customer Satisfaction
          </h2>
          <p className="md:py-6 py-3 text-lg">
            The purpose of this document is to provide a detailed specification
            for the development of the  car sell website. This website will
            allow users to view, search, and inquire about cars. It will also
            provide an admin panel for managing car listings.
          </p>
          <Link
            to="/about"
            className="inline-block px-5 py-2 hover:bg-red-700 bg-red-600 text-white  mt-4"
          >
            Read More
          </Link>
        </div>
        <div className="md:w-1/2 md:p-5">
          <img
            src={aboutimg}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-sm"
            loading="lazy"
          />
        </div>
      </section>

      <section>
        <Testimonial />
      </section>

      {/* FAQ SECTION */}
      <div className="min-h-screen bg-slate-50 dark:bg-gray-800 dark:text-primary  flex flex-col gap-5 md:p-16 p-2">
        <div className="md:text-5xl text-3xl font-bold ">FAQs</div>
        <div className="">
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
      <div>
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
