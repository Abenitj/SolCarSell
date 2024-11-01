import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import logo from "../assets/image/logo.jpg";
import {FacebookOne, Instagram, Twitter} from '@icon-park/react';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className="h-auto dark:bg-gray-900">
            {/* footer */}
            <footer className="text-red-600 bg-black-200"> {/* Changed background to red-600 and text to white */}
                <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
                    <div className="md:flex md:justify-around">
                        <div className="mb-6 md:mb-0">
                            <Link to="/" className="flex items-center">
                                <img
                                    src={logo}
                                    className="h-20 m-3 rounded-full me-3 bg-primary"
                                    alt="Flowbite Logo"
                                />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                                    Sol Car Trade
                                </span>
                                <br />
                            </Link>
                                <p className='m-3 mb-10 text-lg text-gray-700 dark:text-primary'>Explore a wide range of high-quality cars. Whether you're <br /> looking to buy or sell, we are here to assist you every step of the way.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 justify-items-end">
                            <div className='mr-5'>
                                <h2 className="mb-6 text-lg font-semibold uppercase">
                                    Quick Links
                                </h2>
                                <ul className="font-medium text-gray-500 dark:text-gray-300">
                                    <li className="mb-4">
                                        <a href="https://flowbite.com/" className="hover:underline">
                                        
                                            Home
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://tailwindcss.com/" className="hover:underline ">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://flowbite.com/" className="hover:underline ">
                                            Car Listing
                                        </a>
                                    </li>
                                    <li >
                                        <a href="https://tailwindcss.com/" className="hover:underline ">
                                            About Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='mr-5'>
                                <h2 className="mb-6 text-lg font-semibold uppercase ">
                                    Follow Us
                                </h2>
                                <ul className="font-medium text-gray-500 dark:text-gray-300">
                                    <li className="mb-4">
                                        <a href="https://flowbite.com/" className="hover:underline">
                                            Facebook
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://tailwindcss.com/" className="hover:underline ">
                                            Instagram
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://flowbite.com/" className="hover:underline ">
                                            Telegram
                                        </a>
                                    </li>
                                    <li >
                                        <a href="https://tailwindcss.com/" className="hover:underline ">
                                            Twitter
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div >
                                <h2 className="mb-6 text-lg font-semibold uppercase ">
                                    Legal
                                </h2>
                                <ul className="font-medium text-gray-500 dark:text-gray-300">
                                    <li className="mb-4">
                                        <a href="#" className=" hover:underline">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline e">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-red-500 sm:mx-auto" /> {/* Changed border color to red-500 */}
                    <div className="sm:flex sm:items-center sm:justify-evenly">
                        <span className="text-lg sm:text-center dark:text-gray-300">
                            © {currentYear}{"   "}
                            <Link to="/" className="text-red-600 hover:underline">
                                Sol Car Trade
                            </Link>
                            . All Rights Reserved.
                        </span>
                        {/* <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="#" aria-label="Facebook page" className="bg-white text-red-600 pt-[2px] ms-5">
                                <span className="text-sm">Facebook page</span>
                            </a>
                            <a href="#" className="ms-5" aria-label="Instagram">
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="ms-5" aria-label="Twitter page">
                                <span className="sr-only">Twitter page</span>
                            </a>
                        </div> */}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
