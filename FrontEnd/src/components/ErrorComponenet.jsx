import React, { useState } from "react";
import { FaExclamationTriangle, FaTimes } from "react-icons/fa";

const ErrorComponent = ({ errorText, show }) => {
  const [isVisible, setIsVisible] = useState(show);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 flex items-center gap-3 bg-red-200 border-l-4 border-red-600 text-red-700 px-4 py-2 shadow-lg 
                 animate-slide-in"
      style={{ zIndex: 1000 }}
    >
      <FaExclamationTriangle size={20} className="text-red-600" />
      <span className="font-medium text-sm">{errorText}</span>
      <button
        className="ml-auto text-red-600 hover:text-red-800"
        onClick={() => setIsVisible(false)}
        aria-label="Close error message"
      >
        <FaTimes size={18} />
      </button>
    </div>
  );
};

export default ErrorComponent;
