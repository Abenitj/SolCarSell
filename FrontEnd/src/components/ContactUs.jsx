import { FaTelegramPlane } from "react-icons/fa";
import contactUsImg from "../assets/image/Contact us.gif";
export default function ContactUs() {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-5 flex-1">
        <div>
          <label htmlFor="name" className="text-2xl text-gray-800">
            Name*
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full border-[1px] p-4 mt-2 bg-primary  rounded-lg focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-2xl text-gray-800">
            Email*
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
          className="w-full border-[1px] p-4 mt-2 bg-primary  rounded-lg focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-2xl text-gray-800">
            Message*
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            rows="8"
            className="w-full p-4 mt-2 bg-primary border-[1px]  rounded-lg focus:outline-none"
          />
        </div>

        <div className="flex ml-auto">
          <button className="bg-red-500 text-white text-xl py-2 px-6 flex gap-2 items-center shadow-[4px_6px_0px_0px_rgba(0,0,0,0.2)]">
            Send Message
            <FaTelegramPlane color="#fff" />
          </button>
        </div>
      </div>
      <div className="flex-1 hidden lg:block">
        <img src={contactUsImg} alt="" />
      </div>
    </div>
  );
}
