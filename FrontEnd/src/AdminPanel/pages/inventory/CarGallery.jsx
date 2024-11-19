import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import axios from "axios";
import DeleteModal from "../../../components/DeleteModal";

const CarGallery = () => {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const carImages = location.state?.carImages || [];
  const id = location.state?.id || null;

  useEffect(() => {
    if (Array.isArray(carImages) && carImages.length > 0) {
      setImages(carImages);
    }
  }, [carImages]);

  const openModal = (index) => {
    if (images.length > 0) {
      setCurrentIndex(index);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleEdit = (index, id) => {
    navigate("/admin/inventory/file-upload", { state: { imagePath: { index, id } } });
  };

  const handleDelete = async () => {
    const url = `${import.meta.env.VITE_BACK_END_API_URL}${id}/images/${currentIndex}`;
    try {
      const response = await axios.delete(url);
      const updatedImages = response.data.images;

      setImages(updatedImages);
      closeDeleteModal();
      closeModal();

      if (updatedImages.length === 0) {
        navigate("/admin/inventory/all");
      }
    } catch (error) {
      console.error("Failed to delete image:", error);
    }
  };

  return (
    <div>
      {/* Back Button */}
      <div className="flex justify-end mb-4 fixed bottom-5 z-10 right-10">
        <button
          className="border-[1px] dark:border-gray-50 border-gray-800 text-gray-900 p-2 dark:text-white rounded-md hover:size-10 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition-all duration-300"
          onClick={() => navigate("/admin/inventory/all")}
        >
          <FaArrowLeft className="h-5 w-5 text-gray-900 dark:text-white" />
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} onClick={() => openModal(index)} className="cursor-pointer relative group">
            <img
              className="h-48 w-full object-cover rounded-lg"
              src={src}
              alt={`Gallery image ${index + 1}`}
              loading="lazy"
            />
            <div className="dark:bg-gray-900 opacity-20 group text-white absolute top-0 z-10 h-full w-full"></div>
          </div>
        ))}
      </div>

      {/* Modal for Image Viewer */}
      {isModalOpen && images.length > 0 && (
        <CSSTransition in={isModalOpen} timeout={300} classNames="fade" unmountOnExit>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            onClick={handleOverlayClick}
          >
            <div className="relative w-[90%] sm:w-[70%] bg-transparent rounded-sm">
              <div className="relative flex justify-center items-center h-60 md:h-[80vh] overflow-hidden rounded-sm">
                <img
                  src={images[currentIndex]}
                  className="block max-w-full max-h-full object-contain"
                  alt={`Gallery image ${currentIndex + 1}`}
                />
              </div>

              {/* Modal Slider controls */}
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute top-1/2 left-5 z-30 p-2 text-white bg-gray-700 rounded-full transform -translate-y-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute top-1/2 right-5 z-30 p-2 text-white bg-gray-700 rounded-full transform -translate-y-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Edit and Delete Icons in Modal */}
              <div className="absolute top-5 right-5 z-30 flex space-x-2">
                <button
                  onClick={() => handleEdit(currentIndex, id)}
                  aria-label="Edit Image"
                  className="bg-gray-100 p-1 rounded-full flex justify-center items-center"
                >
                  <FaEdit className="h-4 w-4 text-blue-500" />
                </button>
                <button
                  onClick={openDeleteModal}
                  aria-label="Delete Image"
                  className="bg-white p-1 rounded-full flex justify-center items-center"
                >
                  <FaTrashAlt className="h-4 w-4 text-red-500" />
                </button>
              </div>
            </div>
          </div>
        </CSSTransition>
      )}

      {/* Delete Modal */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default CarGallery;
