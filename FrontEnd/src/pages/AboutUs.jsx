import React from 'react';// Make sure to update the path to your image
import carImage from "../assets/image/carimg1.jpg"
const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <section className="flex flex-col md:flex-row mb-8">
        <div className="md:w-1/2">
          <img src={carImage} alt="Car" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-6 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to <strong>Sol Car Trade</strong>, where our passion for automobiles meets a commitment to excellence. Founded on the principles of integrity, transparency, and customer satisfaction, we strive to revolutionize the car trading experience. Our mission is to connect buyers and sellers through a seamless platform that ensures trust and quality in every transaction.
          </p>
          <p className="text-lg text-gray-700">
            At Sol Car Trade, we believe that every car has a story to tell, and we are dedicated to helping you find the perfect vehicle that aligns with your lifestyle and needs. Our core values—innovation, reliability, and service—drive us to provide exceptional solutions in the automotive marketplace.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          To empower individuals and businesses in the car trading process, delivering unmatched value and service while fostering a community built on trust and respect.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li><strong>Integrity:</strong> We uphold the highest standards of honesty and ethical conduct in all our dealings.</li>
          <li><strong>Customer-Centricity:</strong> Our customers are at the heart of everything we do. We listen, understand, and cater to their unique needs.</li>
          <li><strong>Innovation:</strong> We embrace new technologies and ideas to continuously improve our services and enhance user experience.</li>
          <li><strong>Quality:</strong> We are committed to providing high-quality vehicles and reliable services that meet the highest standards.</li>
        </ul>
      </section>

      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700">
          Join us on this journey, and experience a car trading platform where your needs are prioritized, and every detail matters.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
