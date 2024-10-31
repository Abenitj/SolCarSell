import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import logo from "../assets/image/logo.jpg";
import {FacebookOne, Instagram, Twitter} from '@icon-park/react';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className="h-auto">
            {/* footer */}
            <footer className="text-red-600 bg-black-200"> {/* Changed background to red-600 and text to white */}
                <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
                    <div className="md:flex md:justify-around">
                        <div className="mb-6 md:mb-0">
                            <Link to="/" className="flex items-center">
                                <img
                                    src={logo}
                                    className="h-20 me-3"
                                    alt="Flowbite Logo"
                                />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                                    Sol Car Trade
                                </span>
                                <br />
                            </Link>
                                <p className='mb-10 text-gray-700'>Explore a wide range of high-quality cars. Whether you're <br /> looking to buy or sell, we are here to assist you every step of the way.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 justify-items-end">
                            <div className='mr-7'>
                                <h2 className="mb-6 text-sm font-semibold uppercase">
                                    Quick Links
                                </h2>
                                <ul className="font-medium text-gray-500">
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
                            {/* <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase">
                                    Follow Us
                                </h2>
                                <ul className="font-medium">
                                    <li className="mb-4">
                                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">
                                            GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline ">
                                            Discord
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                            <div >
                                <h2 className="mb-6 text-sm font-semibold uppercase ">
                                    Legal
                                </h2>
                                <ul className="font-medium text-gray-500">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline ">
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
                        <span className="text-sm sm:text-center">
                            © {currentYear}{"   "}
                            <Link to="/" className="text-red-600 hover:underline">
                                Sol Car Trade
                            </Link>
                            . All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="#" aria-label="Facebook page" className="bg-white text-red-600 pt-[2px] ms-5">
                                <FacebookOne theme="outline" size="32" fill="#333"/>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="ms-5" aria-label="Discord community">
                                <Instagram theme="outline" size="32" fill="#333"/>
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="ms-5" aria-label="Twitter page">
                                <Twitter theme="outline" size="32" fill="#333"/>
                                <span className="sr-only">Twitter page</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
