import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorComponent from "./ErrorComponenet"; // Fixed typo in import
import { FaArrowLeft } from "react-icons/fa";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [filePreview, setFilePreview] = useState(null);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const location = useLocation();
  const { index, id } = location.state?.imagePath || {};
  const navigate = useNavigate();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setIsFileSelected(true);
      setFilePreview(URL.createObjectURL(file)); // Generate preview URL
    } else {
      setSelectedFile(null);
      setIsFileSelected(false);
      setFilePreview(null);
    }
  };

  const handleSendFile = async () => {
    if (!selectedFile) {
      setError("No file selected for upload.");
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    const url = import.meta.env.VITE_BACK_END_API_URL || "http://localhost:5000/cars";

    try {
      const response = await axios.put(
        `${url}/${id}/images/${index}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("File uploaded successfully:", response.data);
      setError(""); // Clear previous errors
      setShowError(false);
      console.log()
      navigate("/admin/inventory/car-gallery", { state: { carImages: response?.data?.images, id: response?.data?.id } })

    } catch (error) {

      if (error.response) {
        const errorMessage = error.response?.data?.error || "File upload failed.";
        console.error(error.response?.data?.error);
        setError(errorMessage);
        setShowError(true);
        setTimeout(() => setShowError(false), 5000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <label
        htmlFor="image"
        className={`flex flex-col items-center justify-center w-full h-64 border-[1px] cursor-pointer bg-white hover:bg-gray-50 ${isFileSelected
          ? "border-blue-400 dark:border-blue-400"
          : "border-gray-300 dark:border-gray-600"
          }   dark:bg-gray-700 dark:hover:bg-gray-800`}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">JPEG | JPG | PNG | GIF</p>
        </div>
        <input id="image" type="file" className="hidden" onChange={handleFileChange} />
      </label>

      {filePreview && (
        <div className="mt-4">
          <p className="mb-2 text-sm text-gray-700 dark:text-gray-300">Preview:</p>
          <img
            src={filePreview}
            alt="File Preview"
            className="max-w-xs h-auto rounded shadow"
          />
        </div>
      )}

      {isFileSelected && (
        <button
          onClick={handleSendFile}
          className="mt-4 px-4 py-2 text-white font-semibold min-w-1/4 bg-blue-500 hover:bg-blue-600"
        >
          Send
        </button>
      )}

      {/* Error Component */}
      {showError && <ErrorComponent errorText={error} show={showError} />}
      <div className="flex justify-end mb-4 fixed bottom-5 z-10 right-10">
        <button
          className="border-[1px] dark:border-gray-50  border-gray-800  text-gray-900 p-2 dark:text-white rounded-md hover:size-10 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition-all duration-300"
          onClick={() => navigate('/admin/inventory/all')}
        >
          <FaArrowLeft className="h-5 w-5 text-gray-900 dark:text-white" />
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
