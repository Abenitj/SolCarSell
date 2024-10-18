import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FormattedPrice from "../components/formatPrice"; 
const ImageGallery = ({ carData }) => {
  const [numThumbnails, setNumThumbnails] = useState(1); // Default to 1 thumbnail
  const [selectedImage, setSelectedImage] = useState(carData.images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Update the number of thumbnails to display based on window size
  useEffect(() => {
    const updateThumbnailCount = () => {
      if (window.innerWidth < 640) { // For sm and smaller screens
        setNumThumbnails(1);
      } else {
        setNumThumbnails(4); // For md and larger screens
      }
    };

    updateThumbnailCount(); // Set initial thumbnail count
    window.addEventListener("resize", updateThumbnailCount); // Update on resize

    return () => {
      window.removeEventListener("resize", updateThumbnailCount); // Clean up listener
    };
  }, []);

  const handleOpenModal = (index) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % carData.images.length);
  };

  const handlePrevImage = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === 0 ? carData.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div >
      {/* Main Image Gallery */}
      <div className="flex flex-col md:flex-row gap-6 w-full p-4 py-10 ">
        {/* Left side: Image gallery */}
        <div className="w-full md:w-[80%]">
          {/* Featured image */}
          <div className="w-full">
            <img
              className="w-full h-auto max-h-[350px] object-cover rounded-lg cursor-pointer"
              src={selectedImage}
              alt="Featured"
              onClick={() => handleOpenModal(carData.images.indexOf(selectedImage))}
            />
          </div>

          {/* Thumbnails */}
<div className={`flex overflow-x-auto gap-2 mt-4`}>
  {/* Displaying thumbnails based on screen size */}
  {carData.images.slice(0, numThumbnails).map((image, index) => (
    <div key={index} className="flex-shrink-0">
      <img
        className="h-[80px] sm:h-[100px] w-auto object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
        src={image}
        alt={`Thumbnail ${index + 1}`}
        onClick={() => {
          setSelectedImage(image);
          setModalImageIndex(index); // Set the index for modal
        }}
      />
    </div>
  ))}
  {/* Show "more" indicator only if there are more images */}
  {carData.images.length > numThumbnails && (
    <div
      className="h-[80px] sm:h-[100px] w-auto flex items-center justify-center rounded-lg bg-gray-200 cursor-pointer hover:opacity-75 transition-opacity"
      onClick={() => handleOpenModal(numThumbnails)} // Open modal showing all images
    >
      <span className="text-gray-600 w-36 flex justify-center items-center">{`${carData.images.length - numThumbnails}+ more`}</span>
    </div>
  )}
</div>

        </div>

        {/* Right side: Car Details */}
        <div className="w-full md:w-[50%] p-4 rounded-lg">
          <h2 className="text-4xl text-red-500 font-bold mb-4">Car Details</h2>
          <ul className="space-y-2 text-xl text-neutral">
            <li><strong>Brand:</strong> {carData.carDetails.brand}</li>
            <li><strong>Model:</strong> {carData.carDetails.model}</li>
            <li><strong>Price:</strong> {<FormattedPrice price={carData.carDetails.price}/>} birr</li>
            <li><strong>Color:</strong> {carData.carDetails.color}</li>
            <li><strong>Gear:</strong> {carData.carDetails.gear}</li>
            <li><strong>Fuel Type:</strong> {carData.carDetails.fuel}</li>
          </ul>
          <p className="mt-4 text-gray-600">
            {carData.carDetails.description}
          </p>
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevents closing the modal when clicking inside
          >
            {/* Modal Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              {/* SVG Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Image Carousel */}
            <div className="w-[90vw] md:w-[70vw] lg:w-[70vw] flex flex-col items-center justify-center relative">
              <img
                className="w-full h-auto max-h-[500px] object-cover rounded-lg"
                src={carData.images[modalImageIndex]}
                alt={`Carousel Image ${modalImageIndex + 1}`}
              />
              {/* Image Index Display */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg bg-black bg-opacity-50 rounded p-2">
                {modalImageIndex + 1} / {carData.images.length}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 md:left-4">
              <button
                className="text-white bg-black bg-opacity-50 p-3 rounded-full"
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                {/* Previous Arrow Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 md:right-4">
              <button
                className="text-white bg-black bg-opacity-50 p-3 rounded-full"
                onClick={handleNextImage}
                aria-label="Next image"
              >
                {/* Next Arrow Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Prop types for validation
ImageGallery.propTypes = {
  carData: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    carDetails: PropTypes.shape({
      brand: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      gear: PropTypes.string.isRequired, // Added gear
      fuel: PropTypes.string.isRequired,  // Added fuel
    }).isRequired,
  }).isRequired,
};

export default ImageGallery;
