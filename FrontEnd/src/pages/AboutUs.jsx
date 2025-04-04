import React from 'react';// Make sure to update the path to your image
import carImage from "../assets/image/carimg1.jpg"
import MapComponent from '../components/MapComponent';
const AboutUs = () => {
  const items = [
    {
      img: "https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp",
      title: "Latest Milling Machinery",
    },
    {
      img: "https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp",
      title: "Reasonable Rates",
    },
    {
      img: "https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp",
      title: "Time Efficiency",
    },
    {
      img: "https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp",
      title: "Expertise in Industry",
    },
  ];
  return (
    <div className=" pt-10  mt-7">
      <section className='md:flex-row  bg-slate-100 dark:bg-gray-900  dark:text-primary'>
        <div class="sm:flex items-center max-w-screen-xl">
          <div class="sm:w-1/2 p-10">
            <div class="image object-center text-center">
              <img src="https://i.imgur.com/WbQnbas.png" />
            </div>
          </div>
          <div class="sm:w-1/2 p-5 text-center sm:text-left">
            <div class="text">
              <span class="border-b-2 text-5xl border-red-500 uppercase">About us</span>
              <h2 class="my-4 font-bold text-xl  sm:text-4xl ">About <span class="text-red-500">Our Company</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                voluptatum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" dark:bg-gray-800 h-[90vh] py-10 ">
      <div className="flex justify-center text-4xl font-bold dark:text-primary text-center">
        Why Us?
      </div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          {items.map((item, index) => (
            <div key={index} className="p-4 md:w-1/4 sm:w-1/2">
              <div className="px-4 dark:text-primary text-gray-800 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img src={item.img} className="w-32 mb-3" alt={item.title} />
                </div>
                <h2 className="title-font font-regular text-2xl">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      <section class="bg-gray-100 dark:bg-gray-900">
        <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div class="max-w-2xl lg:max-w-4xl mx-auto text-center ">
            <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-primary" id="contactUs"><span className='text-red-500'>Visit Our </span>Location</h2>
            <p class="mt-3 text-lg text-primary dark:text-primary">Let us serve you the best</p>
          </div>
          <div class="mt-8 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div class="border-t border-gray-200 px-6 py-4">
                    <h3 class="text-lg font-bold text-gray-900">Contact</h3>
                    <p class="mt-1 font-bold text-gray-600 dark:text-primary"><a href="tel:+123">Phone: +91
                      123456789</a></p>
                    <a class="flex m-1" href="tel:+919823331842">
                      <div class="flex-shrink-0">
                        <div
                          class="flex items-center justify-between h-10 w-30 rounded-md bg-red-500 text-white px-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                          Call now
                        </div>
                      </div>

                    </a>
                  </div>
                  <div class="px-6 py-4">
                    <h3 class="text-lg font-medium dark:text-gray-900">Our Address</h3>
                    <p class="mt-1 text-gray-600 dark:text-primary">Sale galli, 60 foot road, Latur</p>
                  </div>
                  <div class="border-t border-gray-200 px-6 py-4">
                    <h3 class="text-lg font-medium text-gray-900d  dark:text-primary">Hours</h3>
                    <p class="mt-1 text-gray-600 dark:text-primary">Monday - Sunday : 2pm - 9pm</p>
                  </div>
                </div>
              </div>
              <div class="rounded-lg overflow-hidden order-none sm:order-first">
                <MapComponent/>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center  dark:text-primary text-center w-full dark:bg-gray-800">
        <p className="text-xl  p-5">
          Join us on this journey, and experience a car trading platform where your needs are prioritized, and every detail matters.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
