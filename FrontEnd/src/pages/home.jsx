import React, { useState } from "react";
import HeroSection from "../components/HeroSection ";
import HomeHeader from "../components/homeHeader";
import img1 from "../assets/image/herocar1.jpg";
import img2 from "../assets/image/herocar2.jpg";
import img3 from "../assets/image/herocar3.jpg";
import aboutimg from "../assets/image/carimg1.jpg";
import ContactUs from "../components/ContactUs";
import Accordion from "./Accordion";
import Testimonial from "../components/Testimonial";
import faqs from "../assets/faqs";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Home = () => {
  const [loading, setLoading] = useState(true); // For loading state

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
    {
      id: 3,
      make: "Ford",
      model: "Mustang",
      price: "$30,000",
      image: img3,
    },
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

      {/* FEATURED CARS SECTION */}
      <div className="bg-red-50">
        <section className="w-full py-12">
          <h1
            id="feature_car"
            className="text-center text-4xl text-red-500 font-extrabold"
          >
            Featured Cars
          </h1>
          <div className="flex justify-center py-5">
            <h2 className="text-3xl md:w-[50%] w-full text-center font-semibold mb-8">
              Discover Our Exclusive Selection of Premium Featured Cars
            </h2>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {cars.map((car) => (
                <Link
                  to="/carlistings" // Navigate to /carlistings on card click
                  key={car.id}
                  className="relative group bg-red-100 shadow-sm overflow-hidden"
                >
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105 grayscale group-hover:grayscale-0"
                    loading="lazy" // Lazy loading for images
                    onLoad={() => setLoading(false)}
                  />
                  {/* Grayish overlay on hover */}
                  <div className="absolute inset-0 bg-gray-400 opacity-30 transition-opacity duration-500 group-hover:opacity-0"></div>

                  {/* Text comes up on hover without background */}
                  <div className="absolute inset-0 flex justify-center items-end p-4 transition-transform duration-500 transform translate-y-10 group-hover:translate-y-0">
                    <div className="text-white text-center py-2">
                      <h3 className="text-lg font-semibold">
                        {car.make} {car.model}
                      </h3>
                      <p className="text-sm mt-1">{car.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="mt-10 text-center">
              <Link
                to="/carlistings" // Navigate to /carlistings
                className="inline-block px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                View All Cars
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ABOUT US SECTION */}
      <section className="md:min-h-[90vh] h-full sm:w-full md:text-left text-center w-full py-5 text-neutral flex flex-col md:flex-row md:justify-center md:items-center">
        <div className="md:w-[40%] p-5">
          <h1 className="md:text-6xl text-4xl font-bold text-red-400">
            About Us
          </h1>
          <h2 className="md:text-4xl text-2xl font-bold mt-4">
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
            className="inline-block px-5 py-2 hover:bg-red-500 bg-red-400 text-white rounded-md mt-4"
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

      <Testimonial></Testimonial>

      {/* FAQ SECTION */}
      <div className="min-h-screen bg-red-50 flex flex-col gap-5 md:p-16 p-2">
        <div className="md:text-5xl text-3xl font-bold text-neutral">
          FAQs
        </div>
        <div className="text-neutral">
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
