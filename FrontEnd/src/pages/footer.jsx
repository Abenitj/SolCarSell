import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="h-auto">
            {/* footer */}
            <footer className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link to="/" className="flex items-center">
                               
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                                  car sell
                                </span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-800 dark:text-gray-100">
                                    Resources
                                </h2>
                                <ul className="font-medium">
                                    <li className="mb-4">
                                        <a href="https://flowbite.com/" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                            Flowbite
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindcss.com/" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                            Tailwind CSS
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-800 dark:text-gray-100">
                                    Follow Us
                                </h2>
                                <ul className="font-medium">
                                    <li className="mb-4">
                                        <a href="https://github.com/themesberg/flowbite" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                            GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                            Discord
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-800 dark:text-gray-100">
                                    Legal
                                </h2>
                                <ul className="font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-300 dark:border-gray-700 sm:mx-auto" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm sm:text-center text-gray-600 dark:text-gray-400">
                            © 2023{" "}
                            <Link to="/" className="hover:underline text-gray-800 dark:text-white">
                                 car sell
                            </Link>
                            . All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center md:mr-16 sm:mt-0">
                            {/* Social Icons */}
                            <a href="#" aria-label="Facebook page" className="ms-5 text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 8 19">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                                </svg>
                            </a>
                            <a href="#" className="ms-5 text-gray-800 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-white" aria-label="Discord community">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 21 16">
                                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                </svg>
                            </a>
                            <a href="#" className="ms-5 text-gray-800 dark:text-gray-300 hover:text-blue-400 dark:hover:text-white" aria-label="Twitter page">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 17">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0-.55 2.023c0 1.4.727 2.64 1.832 3.353a4.063 4.063 0 0 1-1.854-.51v.051a4.065 4.065 0 0 0 3.254 3.973 4.033 4.033 0 0 1-1.05.14c-.256 0-.506-.025-.751-.074a4.053 4.053 0 0 0 3.77 2.8A8.181 8.181 0 0 1 0 13.055a11.567 11.567 0 0 0 6.29 1.84c7.548 0 11.682-6.183 11.682-11.537 0-.176-.004-.351-.013-.523A8.381 8.381 0 0 0 20 1.892Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
