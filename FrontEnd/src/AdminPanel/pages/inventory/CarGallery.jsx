import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import React Icons for Edit and Delete
import { useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'; // Import for smooth transition

const CarGallery = () => {
    const [images, setImages] = useState([]);
    const location = useLocation();
    const carImages = location.state?.carImages || [];

    useEffect(() => {
        if (Array.isArray(carImages) && carImages.length !== images.length) {
            setImages(carImages); // Update images only if the array has changed
        }
    }, [carImages, images.length]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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

    const handleEdit = () => {
        // Implement your edit logic here
        console.log('Edit Image', images[currentIndex]);
    };

    const handleDelete = () => {
        // Implement your delete logic here
        console.log('Delete Image', images[currentIndex]);
    };

    useEffect(() => {
        if (isModalOpen) {
            const img = new Image();
            img.src = images[currentIndex]; // Preload image when modal opens
        }
    }, [isModalOpen, currentIndex, images]);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <div key={index} onClick={() => openModal(index)} className="cursor-pointer relative group">
                        <img
                            className="h-48 w-full object-cover rounded-lg"
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            loading="lazy" // Lazy load images
                        />
                        <div className="dark:bg-gray-900 opacity-20 group text-white absolute top-0 z-10 h-full w-full"></div>
                    </div>
                ))}
            </div>

            <CSSTransition in={isModalOpen} timeout={300} classNames="fade" unmountOnExit>
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOverlayClick}>
                    <div className="relative w-[70%] bg-white rounded-sm">
                        <div className="relative h-56 md:h-[80vh] overflow-hidden rounded-sm">
                            <img
                                src={images[currentIndex]}
                                className="block w-full h-full object-cover"
                                alt={`Gallery image ${currentIndex + 1}`}
                            />
                        </div>

                        {/* Modal Slider controls */}
                        <button onClick={handlePrev} aria-label="Previous image" className="absolute top-1/2 left-5 z-30 p-2 text-white bg-gray-700 rounded-full transform -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={handleNext} aria-label="Next image" className="absolute top-1/2 right-5 z-30 p-2 text-white bg-gray-700 rounded-full transform -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Edit and Delete Icons in Modal */}
                        <div className="absolute top-5 right-5 z-30 flex space-x-2">
                            <button onClick={handleEdit} aria-label="Edit Image" className="bg-gray- p-1 rounded-full flex justify-center items-center bg-white">
                                <FaEdit className="h-4 w-4 text-blue-500" />
                            </button>
                            <button onClick={handleDelete} aria-label="Delete Image" className="bg-white p-1 rounded-full flex justify-center items-center">
                                <FaTrashAlt className="h-4 w-4 text-red-500" />
                            </button>
                        </div>

                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default CarGallery;
