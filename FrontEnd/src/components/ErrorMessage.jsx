import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className=" my-2 flex items-center bg-red-100 text-red-600 p-3 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"
        />
      </svg>
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
