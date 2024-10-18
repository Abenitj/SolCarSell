import { FaTelegramPlane } from "react-icons/fa";
import contactUsImg from "../assets/image/Contact us.gif";
import React, { useRef, useState  } from 'react';
import emailjs from '@emailjs/browser';
import { NotificationContainer, NotificationManager } from 'react-notifications-component';

export default function ContactUs() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_36b7k99', 'template_9ich0xz', form.current, {
        publicKey: '5kmb4zPtSXgsmWyzz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          NotificationManager.success('Form submitted successfully!', 'Success', 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          NotificationManager.error('Error message', 'Title', 3000);

        },
      );
  };

  return (
    <div className="flex gap-10">

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 flex-1">
        <div>
          <label htmlFor="name" className="text-2xl text-gray-800">
            Name*
          </label>
          <input
            type="text" name="user_name"
            id="name"
            placeholder="Enter your name" required
            className="w-full border-[1px] p-4 mt-2 bg-primary  rounded-lg focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-2xl text-gray-800">
            Email*
          </label>
          <input
            type="email" name="user_email"
            id="email"
            placeholder="Enter your email" required
          className="w-full border-[1px] p-4 mt-2 bg-primary  rounded-lg focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-2xl text-gray-800">
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows="8" required
            className="w-full p-4 mt-2 bg-primary border-[1px]  rounded-lg focus:outline-none"
          />
        </div>

        <div className="flex ml-auto">
          <button type="submit" value="Send" className="bg-red-500 text-white text-xl py-2 px-6 flex gap-2 items-center shadow-[4px_6px_0px_0px_rgba(0,0,0,0.2)]">
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
  );
}
