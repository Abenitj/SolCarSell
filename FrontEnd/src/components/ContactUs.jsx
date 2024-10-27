import { FaTelegramPlane } from "react-icons/fa";
import contactUsImg from "../assets/image/Contact us.gif";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function ContactUs() {

  const MySwal = withReactContent(Swal);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_36b7k99', 'template_9ich0xz', form.current, {
        publicKey: '5kmb4zPtSXgsmWyzz',
      })
      .then(
        () => {
          Swal.fire({
            title: 'Message Sent!',
            text: 'Thank you for contacting us. We will be in touch shortly.',
            icon: 'success'
          });

        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!"
          });


        },
      );
  };

  return (
    <div className="p-20 bg-primary">
      <h2 className="sm:text-5xl font-[700] text-4xl text-red-400 text-center">
        Contact Us
      </h2>
      <div className="flex justify-center pt-5">
        <p className="sm:text-xl text-2xl md:w-1/2 text-neutral text-center">
          Have a question or need assistance? Reach out to us!
        </p>
        </div>

        <div className="flex gap-10 ">

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 flex-1">
            <div>
              <label htmlFor="name" className="text-xl text-gray-800">
                Name*
              </label>
              <input
                type="text" name="user_name"
                id="name"

                placeholder="Enter your name" required
                className="w-full border-[1px] p-2 mt-2 bg-primary  rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xl text-gray-800">
                Email*
              </label>
              <input
                type="email" name="user_email"
                id="email"
                placeholder="Enter your email" required
                className="w-full border-[1px] p-2 mt-2 bg-primary  rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xl text-gray-800">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="5" required
                className="w-full p-2 mt-2 bg-primary border-[1px]  rounded-lg focus:outline-none"
              />
            </div>

            <div className="flex ml-auto">
              <button type="submit" value="Send" className="bg-red-500 text-white text-lg py-2 px-6 flex gap-2 items-center shadow-[4px_6px_0px_0px_rgba(0,0,0,0.2)]">
                Send Message
                <FaTelegramPlane color="#fff" />
              </button>
            </div>
          </form>
          {/* <NotificationContainer />  */}
          <div className="flex-1 hidden lg:block">
            <img src={contactUsImg} alt="" />
          </div>
        </div>

    </div>
  );
}