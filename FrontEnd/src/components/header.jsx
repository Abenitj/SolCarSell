// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import useLocation hook
// import logo from "../../assets/image/logo.jpg";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false); // State to manage hamburger menu

//   return (
//     <nav className={`z-50 bg-red-600 text-white shadow-sm text-neutral flex-row fixed top-0 left-0 w-full border-gray-200 transition-all duration-300`}>
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
//         <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img src={logo} className="h-14 bg-primary rounded-full" alt="SolCarTrade" />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap">SolCarTrade</span>
//         </Link>
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white focus:outline-none"
//           >
//             {/* Hamburger Icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-8 w-8"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>
//         <div className={`md:flex ${isOpen ? "block" : "hidden"} w-full md:w-auto md:order-1`}>
//           <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4  rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
//             <li>
//               <Link 
//                 to="/" 
//                 className={`group block py-2 px-3 md:p-0 rounded  md:hover:bg-transparent hover:bg-red-500 dark:hover:bg-gray-700`}
//                 aria-current="page"
//               >
//                 Home
//                 <div className='h-1 rounded-lg bg-white w-0 group-hover:w-full transition-all duration-200'></div>
//               </Link>
//             </li>
//             <li>
//               <Link 
//                 to="/CarListings" 
//                 className={`group block py-2 px-3 md:p-0 rounded hover:bg-red-500 md:hover:bg-transparent dark:hover:bg-gray-700`}
//               >
//                 Car Listings
//                 <div className='h-1 rounded-lg bg-white w-0 group-hover:w-full transition-all duration-200'></div>
//               </Link>
//             </li>
//             <li>
//               <Link 
//                 to="/featured-cars" 
//                 className={`group block py-2 px-3 md:p-0 rounded hover:bg-red-500 md:hover:bg-transparent`}
//               >
//                 Featured Cars
//                 <div className='h-1 rounded-lg bg-white w-0 group-hover:w-full transition-all duration-200'></div>
//               </Link>
//             </li>
//             <li>
//               <Link 
//                 to="/AboutUs" 
//                 className={`group block py-2 px-3 md:p-0 rounded hover:bg-red-500  md:hover:bg-transparent`}
//               >
//                 About Us
//                 <div className='h-1 rounded-lg bg-white w-0 group-hover:w-full transition-all duration-200'></div>
//               </Link>
//             </li>
//             <li>
//               <Link 
//                 to="/contact-us" 
//                 className={`group block py-2 px-3 md:p-0 rounded hover:bg-red-500 md:hover:bg-transparent`}
//               >
//                 Contact
//                 <div className='h-1 rounded-lg bg-white w-0 group-hover:w-full transition-all duration-200'></div>
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="hidden md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <Link to="/carListings" aria-current="page">
//             <button type="button" className="text-white border hover:bg-red-600 transition-all duration-100 font-medium rounded-lg text-sm px-4 py-2 text-center">Get started</button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;
